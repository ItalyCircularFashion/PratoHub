import { taxonomy, materials } from './catalog';
import type { Company } from '../services/catalog';
import { taxonomyPath } from '../services/navigation';

// Synthetic UI fixtures, unrelated to the database and never a fallback for it.
// Every name, place and capability below is explicitly a DEMO example.
export const demoCompanies: Company[] = taxonomy.filter(node => node.level === 1).flatMap((macro, index) => {
  const leaf = taxonomy.find(node => node.level === 3 && taxonomyPath(node.code, taxonomy)[0]?.code === macro.code);
  const path = leaf ? taxonomyPath(leaf.code, taxonomy) : [];
  if (!leaf || path.length !== 3 || !materials.length) return [];
  return [{
    id: `demo-${macro.code}`,
    slug: `demo-laboratorio-${index + 1}`,
    name: `DEMO · Laboratorio Trama ${String(index + 1).padStart(2, '0')}`,
    locality: index % 2 ? 'Area B — DEMO' : 'Area A — DEMO',
    capabilities: [{ macroareaCode: macro.code, processCode: path[1].code, specializationCode: leaf.code, materialCodes: [materials[index % materials.length].code] }],
  }];
});
