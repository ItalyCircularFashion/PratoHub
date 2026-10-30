import 'reflect-metadata';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { CompaniesController } from '../src/companies.controller';
import { PrismaService } from '../src/prisma.service';

// Synthetic fixtures only. No connection to PostgreSQL and no database writes.
const demoCompany = {
  id: '00000000-0000-4000-8000-000000000001',
  slug: 'azienda-demo-http',
  legal_name: 'Azienda DEMO per test HTTP',
  trade_name: null,
  website_url: null,
  summary: 'Record sintetico utilizzato soltanto nei test.',
  publication_status: 'PUBLISHED',
  claim_status: 'UNCLAIMED',
  country_code: 'IT',
  company_sites: [{ city: 'Località DEMO', is_primary: true }],
  company_contacts: [{ contact_value: 'demo@example.invalid' }],
  company_roles: [{ role_code: 'MANUFACTURER' }],
};

describe('public companies HTTP contract (isolated, no database)', () => {
  let app: INestApplication;
  const findMany = jest.fn();
  const findFirst = jest.fn();
  const findUnique = jest.fn();
  const base = '/api/v1/companies';

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [{ provide: PrismaService, useValue: { companies: { findMany, findFirst, findUnique } } }],
    }).compile();
    app = module.createNestApplication({ logger: false });
    app.setGlobalPrefix('api/v1');
    await app.init();
  });
  beforeEach(() => {
    jest.resetAllMocks();
    findMany.mockResolvedValue([demoCompany]);
    findFirst.mockResolvedValue(demoCompany);
  });
  afterAll(async () => { await app.close(); });

  it('restricts the anonymous list to PUBLISHED at the database boundary', async () => {
    const response = await request(app.getHttpServer()).get(base).expect(200);
    expect(response.body.items).toHaveLength(1);
    expect(findMany.mock.calls[0][0].where.publication_status).toBe('PUBLISHED');
    expect(response.body.items[0]).toMatchObject({ slug: demoCompany.slug, publication_status: 'PUBLISHED' });
  });

  it('selects only an explicitly public email, not phones or private contacts', async () => {
    await request(app.getHttpServer()).get(base).expect(200);
    expect(findMany.mock.calls[0][0].select.company_contacts).toMatchObject({
      where: { is_public: true, contact_type: 'PUBLIC_EMAIL' },
      select: { contact_value: true },
      take: 1,
    });
    expect(findMany.mock.calls[0][0].select).not.toHaveProperty('vat_number');
    expect(findMany.mock.calls[0][0].select).not.toHaveProperty('tax_code');
  });

  it('returns only the documented public DTO', async () => {
    const response = await request(app.getHttpServer()).get(base).expect(200);
    expect(Object.keys(response.body.items[0]).sort()).toEqual([
      'id', 'slug', 'legal_name', 'trade_name', 'website_url', 'summary',
      'publication_status', 'claim_status', 'country_code', 'city', 'contact_email', 'roles',
    ].sort());
    expect(response.body.items[0].contact_email).toBe('demo@example.invalid');
    expect(response.body.items[0]).not.toHaveProperty('company_contacts');
  });

  it.each(['DRAFT', 'IN_REVIEW', 'ARCHIVED'])('rejects an attempt to request %s before querying', async status => {
    await request(app.getHttpServer()).get(base).query({ publication_status: status }).expect(400);
    expect(findMany).not.toHaveBeenCalled();
  });

  it.each([
    '?publication_status=PUBLISHED&publication_status=DRAFT',
    '?publication_status=',
    '?publication_status[not]=PUBLISHED',
    '?role_code=UNKNOWN',
    '?role_code=MANUFACTURER&role_code=TRADER',
    '?claim_status=UNKNOWN',
    '?claim_status[not]=CLAIMED',
    '?include_drafts=true',
    '?search=',
  ])('rejects malformed or unsupported query %s', async query => {
    await request(app.getHttpServer()).get(base + query).expect(400);
    expect(findMany).not.toHaveBeenCalled();
  });

  it('normalizes allowed enum filters while preserving the publication boundary', async () => {
    await request(app.getHttpServer()).get(base)
      .query({ publication_status: 'published', claim_status: 'unclaimed', role_code: 'manufacturer' }).expect(200);
    expect(findMany.mock.calls[0][0].where).toMatchObject({
      publication_status: 'PUBLISHED', claim_status: 'UNCLAIMED',
      company_roles: { some: { role_code: 'MANUFACTURER' } },
    });
  });

  it('applies the documented search as a query rather than ignoring it', async () => {
    await request(app.getHttpServer()).get(base).query({ search: 'DEMO' }).expect(200);
    expect(findMany.mock.calls[0][0].where).toMatchObject({
      publication_status: 'PUBLISHED',
      OR: [
        { legal_name: { contains: 'DEMO', mode: 'insensitive' } },
        { trade_name: { contains: 'DEMO', mode: 'insensitive' } },
      ],
    });
  });

  it('returns a truthful empty list when nothing is published', async () => {
    findMany.mockResolvedValueOnce([]);
    const response = await request(app.getHttpServer()).get(base).expect(200);
    expect(response.body).toEqual({ items: [] });
  });

  it('applies the same public scope and contact projection to detail', async () => {
    const response = await request(app.getHttpServer()).get(`${base}/${demoCompany.slug}`).expect(200);
    expect(findFirst).toHaveBeenCalledTimes(1);
    expect(findFirst.mock.calls[0][0]).toMatchObject({
      where: { slug: demoCompany.slug, publication_status: 'PUBLISHED' },
      select: { company_contacts: { where: { is_public: true, contact_type: 'PUBLIC_EMAIL' } } },
    });
    expect(findUnique).not.toHaveBeenCalled();
    expect(response.body.slug).toBe(demoCompany.slug);
  });

  it('does not reveal whether an unavailable slug is a draft or absent', async () => {
    findFirst.mockResolvedValueOnce(null);
    await request(app.getHttpServer()).get(`${base}/bozza-demo`).expect(404);
  });

  it('does not accept a status override on detail', async () => {
    await request(app.getHttpServer()).get(`${base}/${demoCompany.slug}?publication_status=DRAFT`).expect(400);
    expect(findFirst).not.toHaveBeenCalled();
    expect(findUnique).not.toHaveBeenCalled();
  });

  it('rejects a malformed slug instead of repairing it', async () => {
    await request(app.getHttpServer()).get(`${base}/INVALID_SLUG`).expect(400);
    expect(findFirst).not.toHaveBeenCalled();
    expect(findUnique).not.toHaveBeenCalled();
  });

  it('keeps writes and an anonymous draft-preview route unavailable', async () => {
    await request(app.getHttpServer()).post(base).send({ publication_status: 'PUBLISHED' }).expect(404);
    await request(app.getHttpServer()).get('/api/v1/admin/companies').expect(404);
  });
});
