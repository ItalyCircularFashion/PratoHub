import { describe, expect, it } from 'vitest';
import { getCatalog } from './catalog';
import { blankBrief, buildBrief, validateBrief, validateBriefFields } from './brief';

// Explicit test fixtures, not requests or real company data.
const { taxonomy, materials } = await getCatalog();
const valid = { ...blankBrief, title: 'TEST CQ — richiesta sintetica', node: 'TX-06.01.01' };

describe('Brief field validation', () => {
  it('preserves the public string-list contract and identifies required fields', () => {
    const fields = validateBriefFields(blankBrief, taxonomy, materials);
    expect(Object.keys(fields)).toEqual(['title', 'node']);
    expect(validateBrief(blankBrief, taxonomy, materials)).toEqual(Object.values(fields));
  });

  it('distinguishes a deliberately omitted date from incomplete native date input', () => {
    expect(validateBriefFields(valid, taxonomy, materials)).toEqual({});
    const fields = validateBriefFields(valid, taxonomy, materials, { deliveryBadInput: true });
    expect(Object.keys(fields)).toEqual(['delivery']);
    expect(fields.delivery).toContain('data valida');
    expect(validateBrief(valid, taxonomy, materials, { deliveryBadInput: true })).toEqual([fields.delivery]);
  });

  it.each(['2026-02-29', '2026-02-31', '2026-13-01', '20/11/2026'])('rejects invalid calendar input %s', delivery => {
    const values = { ...valid, delivery };
    expect(validateBriefFields(values, taxonomy, materials).delivery).toBeDefined();
    expect(() => buildBrief(values, taxonomy, materials)).toThrow('data valida');
  });

  it('does not dismiss a quantity error when unrelated notes change', () => {
    const values = { ...valid, quantity: '-1' };
    const initial = validateBriefFields(values, taxonomy, materials);
    expect(initial.quantity).toBeDefined();
    expect(validateBriefFields({ ...values, notes: 'TEST CQ — nota sintetica' }, taxonomy, materials)).toEqual(initial);
    expect(validateBriefFields({ ...values, quantity: '10,5' }, taxonomy, materials)).toEqual({});
  });

  it('maps optional-field failures to their own controls', () => {
    const errors = validateBriefFields({ ...valid, material: 'UNKNOWN', unit: 'UNKNOWN', notes: 'x'.repeat(3001) }, taxonomy, materials);
    expect(Object.keys(errors)).toEqual(['material', 'unit', 'notes']);
  });

  it('keeps valid date, requested quantity and local-only provenance in the document', () => {
    const brief = buildBrief({ ...valid, quantity: '12,5', delivery: '2026-11-20' }, taxonomy, materials);
    expect(brief.requestedDate).toBe('2026-11-20');
    expect(brief.quantity).toEqual({ value: 12.5, unit: 'm' });
    expect(brief.taxonomy.at(-1)?.code).toBe('TX-06.01.01');
    expect(brief.mode).toBe('local-document-not-submitted');
  });

  it('retains an explicitly missing optional date as null', () => {
    expect(buildBrief(valid, taxonomy, materials).requestedDate).toBeNull();
  });
});
