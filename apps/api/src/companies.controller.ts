import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { Prisma, type claim_status } from '@prisma/client';
import { PrismaService } from './prisma.service';

const VALID_CLAIMS = ['UNCLAIMED', 'PENDING', 'CLAIMED'];
const VALID_ROLES = ['MANUFACTURER', 'COORDINATOR', 'TRADER', 'SERVICE_PROVIDER', 'BRAND'];
const QUERY_KEYS = new Set(['publication_status', 'claim_status', 'role_code', 'search']);

function enumFilter(query: Record<string, unknown>, key: string, allowed: string[]): string | undefined {
  const value = query[key];
  if (value === undefined) return undefined;
  if (typeof value !== 'string' || !allowed.includes(value.toUpperCase())) {
    throw new BadRequestException(`${key} non valido`);
  }
  return value.toUpperCase();
}

// Shared by list and detail. Private contacts and other contact types are not
// loaded into the public DTO, even when the company itself is PUBLISHED.
const publicCompanySelect = {
  id: true,
  slug: true,
  legal_name: true,
  trade_name: true,
  website_url: true,
  summary: true,
  publication_status: true,
  claim_status: true,
  country_code: true,
  company_sites: {
    select: { city: true },
    orderBy: [{ is_primary: 'desc' }, { id: 'asc' }],
    take: 1,
  },
  company_contacts: {
    where: { is_public: true, contact_type: 'PUBLIC_EMAIL' },
    select: { contact_value: true },
    orderBy: { id: 'asc' },
    take: 1,
  },
  company_roles: {
    select: { role_code: true },
    orderBy: { role_code: 'asc' },
  },
} satisfies Prisma.companiesSelect;

type PublicCompanyRecord = Prisma.companiesGetPayload<{ select: typeof publicCompanySelect }>;

function publicCompanyView(company: PublicCompanyRecord) {
  return {
    id: company.id,
    slug: company.slug,
    legal_name: company.legal_name,
    trade_name: company.trade_name,
    website_url: company.website_url,
    summary: company.summary,
    publication_status: company.publication_status,
    claim_status: company.claim_status,
    country_code: company.country_code,
    city: company.company_sites[0]?.city ?? null,
    contact_email: company.company_contacts[0]?.contact_value ?? null,
    roles: company.company_roles.map(role => role.role_code),
  };
}

@Controller('companies')
export class CompaniesController {
  constructor(private readonly db: PrismaService) {}

  @Get()
  async list(@Query() query: Record<string, unknown>) {
    if (Object.keys(query).some(key => !QUERY_KEYS.has(key))) {
      throw new BadRequestException('Parametro di ricerca non supportato');
    }
    // Public callers cannot widen visibility through filters. Draft preview
    // must use a separate authenticated contract, not these anonymous routes.
    enumFilter(query, 'publication_status', ['PUBLISHED']);
    const claim = enumFilter(query, 'claim_status', VALID_CLAIMS);
    const role = enumFilter(query, 'role_code', VALID_ROLES);
    const search = query.search;
    if (search !== undefined && (typeof search !== 'string' || !search.trim() || search.length > 120)) {
      throw new BadRequestException('search deve contenere da 1 a 120 caratteri');
    }
    const where: Prisma.companiesWhereInput = { publication_status: 'PUBLISHED' };
    if (claim) where.claim_status = claim as claim_status;
    if (role) where.company_roles = { some: { role_code: role } };
    if (typeof search === 'string') {
      where.OR = [
        { legal_name: { contains: search, mode: 'insensitive' } },
        { trade_name: { contains: search, mode: 'insensitive' } },
      ];
    }
    const companies = await this.db.companies.findMany({
      where,
      select: publicCompanySelect,
      orderBy: [{ created_at: 'desc' }, { slug: 'asc' }],
    });
    return { items: companies.map(publicCompanyView) };
  }

  @Get(':slug')
  async get(@Param('slug') slug: string, @Query() query: Record<string, unknown>) {
    if (Object.keys(query).length || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      throw new BadRequestException('Slug o query non validi');
    }
    // Draft and absent records have the same public response. Scope the query
    // itself instead of loading a draft and hiding it later in the interface.
    const company = await this.db.companies.findFirst({
      where: { slug, publication_status: 'PUBLISHED' },
      select: publicCompanySelect,
    });
    if (!company) throw new NotFoundException('Azienda non disponibile');
    return publicCompanyView(company);
  }
}
