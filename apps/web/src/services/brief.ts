import type { DictionaryItem, TaxonomyNode } from './catalog';
import { taxonomyPath } from './navigation';

export type BriefValues = { title: string; node: string; material: string; quantity: string; unit: string; delivery: string; notes: string };
export const blankBrief: BriefValues = { title: '', node: '', material: '', quantity: '', unit: 'm', delivery: '', notes: '' };
export const briefUnits = ['m', 'kg', 'pezzi'] as const;
export const fieldLimits = { title: 120, notes: 3000 };

/** Transient client document, never a submitted RFQ or evidence of capacity. */
export function validateBrief(values: BriefValues, nodes: TaxonomyNode[], materials: DictionaryItem[]): string[] {
  const errors: string[] = [];
  if (!values.title.trim() || values.title.length > fieldLimits.title) errors.push('Indica un titolo da 1 a 120 caratteri.');
  if (!taxonomyPath(values.node, nodes).length) errors.push('Seleziona una lavorazione dalla classificazione.');
  if (values.material && !materials.some(m => m.code === values.material)) errors.push('Seleziona un materiale disponibile oppure lascia il campo non specificato.');
  if (values.quantity && (!/^\d+(?:[.,]\d{1,3})?$/.test(values.quantity) || Number(values.quantity.replace(',', '.')) <= 0 || Number(values.quantity.replace(',', '.')) > 1e9)) errors.push('La quantità deve essere positiva, non superiore a 1.000.000.000 e con al massimo 3 decimali.');
  if (!briefUnits.some(unit => unit === values.unit)) errors.push('Seleziona un’unità di misura disponibile.');
  if (values.delivery && (!/^\d{4}-\d{2}-\d{2}$/.test(values.delivery) || Number.isNaN(Date.parse(values.delivery)) || new Date(values.delivery).toISOString().slice(0, 10) !== values.delivery)) errors.push('Indica una data valida oppure lascia la data non specificata.');
  if (values.notes.length > fieldLimits.notes) errors.push('Le note possono contenere al massimo 3.000 caratteri.');
  return errors;
}

export function buildBrief(values: BriefValues, nodes: TaxonomyNode[], materials: DictionaryItem[]) {
  const errors = validateBrief(values, nodes, materials);
  if (errors.length) throw new Error(errors.join(' '));
  const path = taxonomyPath(values.node, nodes);
  const material = materials.find(m => m.code === values.material);
  return {
    schema: 'pratohub-brief/1',
    mode: 'local-document-not-submitted',
    title: values.title.trim(),
    taxonomy: path.map(n => ({ code: n.code, label: n.label })),
    material: material ? { code: material.code, label: material.label } : null,
    quantity: values.quantity ? { value: Number(values.quantity.replace(',', '.')), unit: values.unit } : null,
    requestedDate: values.delivery || null,
    notes: values.notes.trim(),
    notice: 'Documento preparato sul dispositivo. Non inviato a PratoHub o ad aziende. Quantità e data sono richieste dell’utente, non disponibilità confermate.',
  };
}

export function briefText(brief: ReturnType<typeof buildBrief>): string {
  return [
    'PRATOHUB / BRIEF B2B',
    'Documento locale · Nessun invio effettuato',
    '', brief.title, '',
    `Lavorazione: ${brief.taxonomy.map(n => `${n.label} [${n.code}]`).join(' → ')}`,
    `Materiale: ${brief.material?.label || 'Non specificato'}`,
    `Quantità richiesta: ${brief.quantity ? `${brief.quantity.value} ${brief.quantity.unit}` : 'Non specificata'}`,
    `Data richiesta: ${brief.requestedDate || 'Non specificata'}`,
    '', 'NOTE / REQUISITI', brief.notes || 'Non specificati', '', brief.notice,
  ].join('\n');
}
