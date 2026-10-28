import { describe, expect, it } from 'vitest';
import taxonomySql from '../../../../database/seeds/01_taxonomy.sql?raw';
import materialsSql from '../../../../database/seeds/02_materials.sql?raw';
import technologiesSql from '../../../../database/seeds/03_technologies.sql?raw';
import { filterCompanies, getCatalog, type Company, type CompanyFilters } from './catalog';

const values = (sql: string, pattern: RegExp) => [...sql.matchAll(pattern)].map((match) => match.slice(1));

describe('public catalog', () => {
  it('matches the source seeds exactly, including parents and ordering', async () => {
    const catalog = await getCatalog();
    const l1 = values(taxonomySql, /\('PRATOHUB-TX-1\.0','([^']+)',1,'([^']+)',\d+\)/g)
      .map(([code, label]) => ({ code, label, parentCode: null, level: 1 }));
    const rows = (section: string) => values(section, /\('([^']+)','([^']+)','([^']+)'\)/g);
    const l2 = rows(taxonomySql.split('WITH proc(code,parent_code,label) AS (VALUES')[1].split('INSERT INTO')[0])
      .map(([code, parentCode, label]) => ({ code, label, parentCode, level: 2 }));
    const l3 = rows(taxonomySql.split('WITH leaf(code,parent_code,label) AS (VALUES')[1].split('INSERT INTO')[0])
      .map(([code, parentCode, label]) => ({ code, label, parentCode, level: 3 }));
    expect([l1.length, l2.length, l3.length]).toEqual([12, 12, 17]);
    expect(catalog.taxonomy).toEqual([...l1, ...l2, ...l3]);
    expect(catalog.materials).toEqual(values(materialsSql, /\('([^']+)','([^']+)'\)/g)
      .map(([code, label]) => ({ code, label })));
    expect(catalog.technologies).toEqual(rows(technologiesSql)
      .map(([code, , label]) => ({ code, label })));
  });

  it('has unique codes and valid parent levels', async () => {
    const { taxonomy } = await getCatalog();
    const byCode = new Map(taxonomy.map((node) => [node.code, node]));
    expect(byCode.size).toBe(taxonomy.length);
    for (const node of taxonomy) {
      if (node.level === 1) expect(node.parentCode).toBeNull();
      else {
        expect(node.parentCode).not.toBeNull();
        expect(byCode.get(node.parentCode!)?.level).toBe(node.level - 1);
      }
    }
  });

  it('returns no unapproved companies or articles and does not share mutable data', async () => {
    const first = await getCatalog();
    expect(first.companies).toEqual([]);
    expect(first.articles).toEqual([]);
    first.taxonomy[0].label = 'test-only mutation';
    first.materials.length = 0;
    expect((await getCatalog()).taxonomy[0].label).not.toBe('test-only mutation');
    expect((await getCatalog()).materials).toHaveLength(7);
  });
});

const examples: Company[] = [
  { id: 'test-1', slug: 'test-one', name: 'Impresa Fittizia Uno', capabilities: [{ macroareaCode: 'TX-01', processCode: 'TX-01.01', specializationCode: 'TX-01.01.01', materialCodes: ['WO', 'CO'] }, { macroareaCode: 'TX-02', processCode: 'TX-02.01', specializationCode: 'TX-02.01.01', materialCodes: ['PES'] }], locality: 'Città Immaginaria' },
  { id: 'test-2', slug: 'test-two', name: 'Impresa Fittizia Due', capabilities: [{ macroareaCode: 'TX-02', processCode: 'TX-02.01', specializationCode: 'TX-02.01.01', materialCodes: ['PES'] }], locality: 'Luogo Inventato' },
];
const empty: CompanyFilters = { query: '', macroarea: '', process: '', specialization: '', material: '', locality: '' };

describe('filterCompanies', () => {
  it('returns all companies for empty filters without mutating input', () => {
    expect(filterCompanies(examples, empty)).toEqual(examples);
    expect(examples).toHaveLength(2);
  });

  it('combines every filter with AND; matches text without case or accent sensitivity', () => {
    const all = { query: ' fittizia uno ', macroarea: 'TX-01', process: 'TX-01.01', specialization: 'TX-01.01.01', material: 'WO', locality: 'CITTA' };
    expect(filterCompanies(examples, all)).toEqual([examples[0]]);
    for (const [key, value] of Object.entries({ query: 'assente', macroarea: 'TX-02', process: 'TX-02.01', specialization: 'TX-02.01.01', material: 'PES', locality: 'altrove' })) {
      expect(filterCompanies(examples, { ...all, [key]: value })).toEqual([]);
    }
  });

  it('does not combine a process on one capability with material on another', () => {
    expect(filterCompanies([examples[0]], { ...empty, process: 'TX-01.01', material: 'PES' })).toEqual([]);
    expect(filterCompanies([examples[0]], { ...empty, process: 'TX-02.01', material: 'PES' })).toEqual([examples[0]]);
  });

  it('searches locality as free text and handles missing optional runtime data', () => {
    expect(filterCompanies(examples, { ...empty, query: 'immaginaria' })).toEqual([examples[0]]);
    const incomplete = { id: 'test-3', name: 'Fittizia' } as Company;
    expect(filterCompanies([incomplete], { ...empty, query: 'fittizia' })).toEqual([incomplete]);
    expect(filterCompanies([incomplete], { ...empty, material: 'WO' })).toEqual([]);
    expect(filterCompanies([incomplete], { ...empty, locality: 'citta' })).toEqual([]);
    expect(filterCompanies([incomplete], {} as CompanyFilters)).toEqual([incomplete]);
  });
});
