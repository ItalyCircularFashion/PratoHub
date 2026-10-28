import { materials, taxonomy, technologies } from '../data/catalog';

export type TaxonomyNode = {
  code: string;
  label: string;
  parentCode: string | null;
  level: 1 | 2 | 3;
};

export type DictionaryItem = { code: string; label: string };

export type Capability = {
  macroareaCode: string;
  processCode: string;
  specializationCode: string;
  materialCodes: string[];
};
export type Company = {
  id: string;
  slug: string;
  name: string;
  capabilities: Capability[];
  locality: string;
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  body: string[];
  sourceUrl?: string;
};

export type CompanyFilters = {
  query: string;
  macroarea: string;
  process: string;
  specialization: string;
  material: string;
  locality: string;
};

/** Public static catalog: company and editorial records require explicit approval. */
export async function getCatalog(): Promise<{
  taxonomy: TaxonomyNode[];
  materials: DictionaryItem[];
  technologies: DictionaryItem[];
  companies: Company[];
  articles: Article[];
}> {
  return {
    taxonomy: taxonomy.map((item) => ({ ...item })),
    materials: materials.map((item) => ({ ...item })),
    technologies: technologies.map((item) => ({ ...item })),
    companies: [],
    articles: [],
  };
}

const normalize = (value: unknown): string =>
  typeof value === 'string'
    ? value.trim().toLocaleLowerCase('it').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : '';

/** Combine exact taxonomy/material codes with case- and accent-insensitive text. */
export function filterCompanies(companies: Company[], filters: CompanyFilters): Company[] {
  const query = normalize(filters?.query);
  const locality = normalize(filters?.locality);
  const macroarea = filters?.macroarea?.trim() || '';
  const process = filters?.process?.trim() || '';
  const specialization = filters?.specialization?.trim() || '';
  const material = filters?.material?.trim() || '';

  return companies.filter((company) => {
    const name = normalize(company?.name);
    const place = normalize(company?.locality);
    const capabilityRequested = Boolean(macroarea || process || specialization || material);
    const capabilityMatch = Array.isArray(company?.capabilities) && company.capabilities.some(capability =>
      (!macroarea || capability.macroareaCode === macroarea)
      && (!process || capability.processCode === process)
      && (!specialization || capability.specializationCode === specialization)
      && (!material || (Array.isArray(capability.materialCodes) && capability.materialCodes.includes(material)))
    );
    return (!query || name.includes(query) || place.includes(query))
      && (!locality || place.includes(locality))
      && (!capabilityRequested || capabilityMatch);
  });
}
