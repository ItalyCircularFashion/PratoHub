import type { CompanyFilters, DictionaryItem, TaxonomyNode } from './catalog';

export const emptyFilters: CompanyFilters = { query: '', macroarea: '', process: '', specialization: '', material: '', locality: '' };
export const normalizeText = (value: string) => value.trim().toLocaleLowerCase('it').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export function routeParams(route: string): URLSearchParams {
  const index = route.indexOf('?');
  return new URLSearchParams(index < 0 ? '' : route.slice(index + 1));
}

/** URLSearchParams encodes free text; never interpolate it into markup or selectors. */
export function routeWith(path: string, values: Record<string, string>): string {
  const params = new URLSearchParams();
  for (const key of Object.keys(values).sort()) {
    if (values[key]) params.set(key, values[key]);
  }
  const query = params.toString();
  return query ? `${path}?${query}` : path;
}

export function readNetworkFilters(route: string, nodes: TaxonomyNode[], materials: DictionaryItem[]): CompanyFilters {
  const params = routeParams(route);
  const macroarea = nodes.find(n => n.level === 1 && n.code === params.get('macroarea'))?.code || '';
  const process = nodes.find(n => n.level === 2 && n.code === params.get('process') && n.parentCode === macroarea)?.code || '';
  const specialization = nodes.find(n => n.level === 3 && n.code === params.get('specialization') && n.parentCode === process)?.code || '';
  const material = materials.find(m => m.code === params.get('material'))?.code || '';
  return { query: (params.get('q') || '').slice(0, 120), locality: (params.get('locality') || '').slice(0, 120), macroarea, process, specialization, material };
}

export function networkRoute(filters: CompanyFilters): string {
  return routeWith('/network', { q: filters.query, macroarea: filters.macroarea, process: filters.process, specialization: filters.specialization, material: filters.material, locality: filters.locality });
}

export function taxonomyPath(code: string, nodes: TaxonomyNode[]): TaxonomyNode[] {
  const node = nodes.find(n => n.code === code);
  if (!node) return [];
  const path = [node];
  let current = node;
  while (current.parentCode && path.length < 3) {
    const parent = nodes.find(n => n.code === current.parentCode && n.level === current.level - 1);
    if (!parent) return [];
    path.unshift(parent);
    current = parent;
  }
  return path[0].level === 1 ? path : [];
}

export function filtersForNode(code: string, nodes: TaxonomyNode[]): CompanyFilters {
  const path = taxonomyPath(code, nodes);
  return { ...emptyFilters, macroarea: path.find(n => n.level === 1)?.code || '', process: path.find(n => n.level === 2)?.code || '', specialization: path.find(n => n.level === 3)?.code || '' };
}

export function searchTaxonomy(query: string, nodes: TaxonomyNode[]): TaxonomyNode[] {
  const terms = normalizeText(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return nodes.filter(node => {
    const text = normalizeText(taxonomyPath(node.code, nodes).map(n => `${n.code} ${n.label}`).join(' '));
    return terms.every(term => text.includes(term));
  });
}
