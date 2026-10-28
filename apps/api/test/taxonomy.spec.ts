import 'reflect-metadata';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma.service';

describe('WP01 HTTP and PostgreSQL integration', () => {
 let app: INestApplication; let db: PrismaService;
 beforeAll(async () => { const url = process.env.DATABASE_URL ? new URL(process.env.DATABASE_URL) : null; if (!url || url.hostname !== '127.0.0.1' || url.port !== '55432' || url.pathname !== '/pratohub' || (url.searchParams.get('schema') || 'public') !== 'public') throw new Error('Test consentiti solo sul DB dedicato e schema public'); const module = await Test.createTestingModule({ imports: [AppModule] }).compile(); app = module.createNestApplication(); app.setGlobalPrefix('api/v1'); await app.init(); db = app.get(PrismaService); });
 afterAll(async () => { if (app) await app.close(); });
 it('lists the seeded hierarchy and exact level filters', async () => {
  const all = await request(app.getHttpServer()).get('/api/v1/taxonomy').expect(200); expect(all.body.items.length).toBeGreaterThanOrEqual(41);
  for (const [level, count] of [[1,12],[2,12],[3,17]]) { const res = await request(app.getHttpServer()).get(`/api/v1/taxonomy?level=${level}`).expect(200); expect(res.body.items.length).toBeGreaterThanOrEqual(count); expect(res.body.items.every((n: { level: number }) => n.level === level)).toBe(true); }
 });
 it('returns only direct children, empty leaves, unknown and bad inputs', async () => {
  const res = await request(app.getHttpServer()).get('/api/v1/taxonomy/TX-06.01/children').expect(200); expect(res.body.items.map((n: {code: string}) => n.code)).toEqual(expect.arrayContaining(['TX-06.01.01','TX-06.01.02']));
  expect((await request(app.getHttpServer()).get('/api/v1/taxonomy/TX-06.01.01/children').expect(200)).body.items).toEqual([]);
  let missing = ''; for (let i=0;i<100;i++) { const code=`TX-99.99.${String(i).padStart(2,'0')}`; if (!await db.taxonomy_nodes.findUnique({where:{taxonomy_version_code:{taxonomy_version:'PRATOHUB-TX-1.0',code}}})) { missing=code; break; } }
  if (missing) await request(app.getHttpServer()).get(`/api/v1/taxonomy/${missing}/children`).expect(404);
  for (const url of ['/api/v1/taxonomy?level=0','/api/v1/taxonomy?level=01','/api/v1/taxonomy?level=1&level=2','/api/v1/taxonomy?x=1','/api/v1/taxonomy/nope/children']) await request(app.getHttpServer()).get(url).expect(400);
 });
 it('does not expose company, admin, or writes', async () => { await request(app.getHttpServer()).get('/api/v1/companies').expect(404); await request(app.getHttpServer()).post('/api/v1/admin/companies').expect(404); await request(app.getHttpServer()).post('/api/v1/taxonomy').expect(404); });
 it('rejects invalid parent mutation, version mutation and inactive referenced leaf', async () => {
  await expect(db.$executeRaw`UPDATE taxonomy_nodes SET level=1,parent_id=NULL WHERE code='TX-06.01'`).rejects.toThrow();
  await expect(db.$executeRaw`UPDATE taxonomy_nodes SET taxonomy_version='other' WHERE code='TX-06.01'`).rejects.toThrow();
  await expect(db.$executeRaw`UPDATE taxonomy_nodes SET active=false WHERE code='TX-11.01.01'`).rejects.toThrow();
  await expect(db.$executeRaw`UPDATE company_capabilities SET taxonomy_node_id=(SELECT id FROM taxonomy_nodes WHERE code='TX-06.01') WHERE id='22222222-2222-4222-8222-222222222222'::uuid`).rejects.toThrow();
 });
 it('enforces country and VAT uniqueness', async () => {
  await expect(db.$executeRaw`INSERT INTO companies(slug,legal_name,country_code,vat_number) VALUES ('duplicate-test','Duplicate test','IT','00297290975')`).rejects.toThrow();
 });
 it('blocks skipped-level parent assignments', async () => {
  await expect(db.$executeRaw`UPDATE taxonomy_nodes SET parent_id=(SELECT id FROM taxonomy_nodes WHERE code='TX-01') WHERE code='TX-06.01.01'`).rejects.toThrow();
 });
 it('rejects transferring a referenced site to another company', async () => {
  await expect(db.$transaction(async tx => {
   const other = await tx.companies.create({data: {slug:'temporary-test-company', legal_name:'Temporary test company'}});
   const site = await tx.company_sites.findFirstOrThrow({where: {companies: {slug:'manteco'}, is_primary:true}});
   await tx.company_capabilities.update({where: {id:'22222222-2222-4222-8222-222222222222'},data:{site_id:site.id}});
   await tx.company_sites.update({where:{id:site.id},data:{company_id:other.id}});
  })).rejects.toThrow('Referenced site cannot move');
  expect(await db.companies.findUnique({where:{slug:'temporary-test-company'}})).toBeNull();
 });
 it('blocks premature publication at the database', async () => {
  await expect(db.$executeRaw`UPDATE companies SET publication_status='PUBLISHED',published_at=now() WHERE slug='manteco'`).rejects.toThrow();
  await expect(db.$executeRaw`UPDATE company_capabilities SET publication_status='PUBLISHED',published_at=now(),execution_mode='UNKNOWN' WHERE id='22222222-2222-4222-8222-222222222222'::uuid`).rejects.toThrow();
 });
 it('retains sourced draft with unknown availability', async () => {
  const company = await db.companies.findUniqueOrThrow({where: {slug:'manteco'},include:{company_capabilities:true, fact_assertions:{include:{assertion_sources:true}}}});
  expect(company.publication_status).toBe('DRAFT'); expect(company.claim_status).toBe('UNCLAIMED'); expect(company.company_capabilities).toHaveLength(1);
  expect(company.company_capabilities[0]).toMatchObject({execution_mode:'COORDINATED', b2b_availability:'UNKNOWN',publication_status:'DRAFT'});
  expect(company.fact_assertions).toHaveLength(6); expect(company.fact_assertions.every(a => a.assertion_sources.length > 0)).toBe(true); expect(company.fact_assertions.some(a => a.verification_status === 'DISPUTED')).toBe(true);
 });
});
