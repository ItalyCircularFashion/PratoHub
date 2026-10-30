import { describe, expect, it } from 'vitest';
import { demoCompanies } from './demo';
import { taxonomy, materials } from './catalog';
import { filterCompanies, getCatalog } from '../services/catalog';
import { emptyFilters, readNetworkFilters, networkRoute, taxonomyPath } from '../services/navigation';

describe('explicit DEMO data boundary', () => {
  it('has a non-empty synthetic sample separate from the empty public catalog', async () => {
    expect(demoCompanies.length).toBe(12);
    expect((await getCatalog()).companies).toEqual([]);
    expect(new Set(demoCompanies.map(c => c.id)).size).toBe(demoCompanies.length);
    expect(demoCompanies.every(c => c.name.startsWith('DEMO · ') && c.locality.endsWith('DEMO'))).toBe(true);
  });
  it('uses valid taxonomy paths and materials without assigning them to real companies', () => {
    for (const company of demoCompanies) for (const cap of company.capabilities) {
      expect(taxonomyPath(cap.specializationCode, taxonomy).map(n => n.code)).toEqual([cap.macroareaCode, cap.processCode, cap.specializationCode]);
      expect(cap.materialCodes.every(code => materials.some(m => m.code === code))).toBe(true);
    }
  });
  it('filters and resets the exact displayed dataset', () => {
    expect(filterCompanies(demoCompanies, { ...emptyFilters, macroarea: 'TX-06' })).toHaveLength(1);
    expect(filterCompanies(demoCompanies, { ...emptyFilters, query: 'impossibile' })).toEqual([]);
    expect(filterCompanies(demoCompanies, emptyFilters)).toHaveLength(demoCompanies.length);
    expect(filterCompanies([], emptyFilters)).toEqual([]);
  });
  it('round-trips dependent network filters in shareable URLs', () => {
    const filters = { ...emptyFilters, macroarea: 'TX-06', process: 'TX-06.01', specialization: 'TX-06.01.01', query: '<script> & tessuto' };
    expect(readNetworkFilters(networkRoute(filters), taxonomy, materials)).toEqual(filters);
    expect(readNetworkFilters('/network?macroarea=TX-01&process=TX-06.01&specialization=TX-06.01.01', taxonomy, materials)).toMatchObject({ macroarea: 'TX-01', process: '', specialization: '' });
  });
});
