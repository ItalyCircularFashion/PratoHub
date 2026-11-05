import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { FilieraLearning, TextileGlossary } from '../learning';
import { taxonomy } from './catalog';
import {
  filterGlossaryTerms,
  formatLearningSource,
  getLearningMacroareas,
  learningFamilies,
  learningManuals,
  learningOrientationNote,
  learningTaxonomyRoute,
  normalizeLearningSearch,
  textileGlossary,
} from './learning';

const macroareas = taxonomy.filter(node => node.level === 1);

describe('percorso editoriale della filiera', () => {
  it('covers all twelve canonical macroareas exactly once in six families', () => {
    const codes = learningFamilies.flatMap(family => [...family.macroareaCodes]);
    expect(learningFamilies).toHaveLength(6);
    expect(codes).toHaveLength(12);
    expect(new Set(codes).size).toBe(12);
    expect([...codes].sort()).toEqual(macroareas.map(node => node.code).sort());
    expect(new Set(learningFamilies.map(family => family.id)).size).toBe(6);
  });

  it('keeps the approved editorial grouping without changing canonical names', () => {
    expect(learningFamilies.map(family => [family.title, family.macroareaCodes])).toEqual([
      ['Materia e recupero', ['TX-01']],
      ['Preparazione e filati', ['TX-02', 'TX-03']],
      ['Strutture tessili', ['TX-05', 'TX-06', 'TX-07']],
      ['Colore e rifinizione', ['TX-04', 'TX-08']],
      ['Qualità e confezione', ['TX-09', 'TX-10']],
      ['Servizi e mercato', ['TX-11', 'TX-12']],
    ]);
    for (const family of learningFamilies) {
      const nodes = getLearningMacroareas(family);
      expect(nodes.map(node => node.code)).toEqual(family.macroareaCodes);
      for (const node of nodes) expect(node).toBe(taxonomy.find(item => item.code === node.code));
    }
  });

  it('explicitly states that the map is not a compulsory production sequence', () => {
    expect(learningOrientationNote.toLowerCase()).toContain('raggruppamento orientativo, non sequenza obbligatoria');
    expect(learningOrientationNote).toContain('non sostituiscono la tassonomia');
  });

  it('renders exactly twelve canonical hash links under the agreed root', () => {
    const html = renderToStaticMarkup(createElement(FilieraLearning));
    expect(html).toContain('class="learning-map learning-shell"');
    expect(html.match(/href="#\/filiera\?node=TX-\d{2}"/g)).toHaveLength(12);
    expect(html.match(/<a /g)).toHaveLength(12);
    for (const node of macroareas) {
      expect(html).toContain(`href="#${learningTaxonomyRoute(node.code)}"`);
      expect(html).toContain(node.label);
    }
    expect(learningTaxonomyRoute('TX-06')).toBe('/filiera?node=TX-06');
  });
});

describe('glossario tecnico locale', () => {
  it('has ten distinct original terms, each mapped to a relevant canonical macroarea', () => {
    expect(textileGlossary).toHaveLength(10);
    expect(new Set(textileGlossary.map(term => term.id)).size).toBe(10);
    expect(textileGlossary.map(term => term.id)).toEqual(['ordito', 'trama', 'armatura', 'tela', 'saia', 'raso', 'rapporto', 'rimettaggio', 'filato', 'titolo']);
    for (const entry of textileGlossary) {
      expect(['TX-02', 'TX-05', 'TX-06']).toContain(entry.macroareaCode);
      expect(macroareas.some(node => node.code === entry.macroareaCode)).toBe(true);
      expect(entry.definition.length).toBeGreaterThan(60);
      expect(entry.aliases.length).toBeGreaterThan(0);
    }
    expect(textileGlossary.find(term => term.id === 'rimettaggio')?.macroareaCode).toBe('TX-05');
    expect(textileGlossary.find(term => term.id === 'titolo')?.macroareaCode).toBe('TX-02');
    expect(textileGlossary.find(term => term.id === 'tela')?.macroareaCode).toBe('TX-06');
  });

  it('provides author, title, chapter, section and explicit PDF pages for every source', () => {
    for (const entry of textileGlossary) {
      const source = entry.source;
      expect(learningManuals[source.manualId].author).toBe('Alberto Moretti');
      expect(learningManuals[source.manualId].title).toContain('I tessuti semplici');
      expect(source.chapter).toMatch(/^(III|IV|V|VI) · /);
      expect(source.section.length).toBeGreaterThan(3);
      expect(source.pdfPages.length).toBeGreaterThan(0);
      expect(source.pdfPages.every(page => Number.isInteger(page) && page > 0 && page <= 229)).toBe(true);
      expect(formatLearningSource(source)).toContain('pagine PDF');
      expect(formatLearningSource(source)).not.toMatch(/https?:|file:|\/mnt\//);
    }
    expect(textileGlossary.find(term => term.id === 'tela')?.source.pdfPages).toEqual([91]);
    expect(textileGlossary.find(term => term.id === 'rapporto')?.source.pdfPages).toEqual([73]);
  });

  it('normalizes case, composed/decomposed accents and redundant whitespace', () => {
    expect(normalizeLearningSearch('  TÀFFETTÀ  ')).toBe('taffetta');
    expect(normalizeLearningSearch('t a\u0300  F')).toBe('t a f');
    expect(filterGlossaryTerms('TAFFETTA').map(term => term.id)).toEqual(['tela']);
    expect(filterGlossaryTerms('taffetta\u0300').map(term => term.id)).toEqual(['tela']);
    expect(filterGlossaryTerms('  SAIA  ').map(term => term.id)).toContain('saia');
  });

  it('searches aliases, definitions and canonical taxonomy labels/codes', () => {
    expect(filterGlossaryTerms('rincorsatura').map(term => term.id)).toEqual(['rimettaggio']);
    expect(filterGlossaryTerms('diagonale').map(term => term.id)).toEqual(['saia', 'raso']);
    expect(filterGlossaryTerms('PREPARAZIONE ALLA TESSITÙRA').map(term => term.id)).toEqual(['ordito', 'rimettaggio']);
    expect(filterGlossaryTerms('TX-02').map(term => term.id)).toEqual(['filato', 'titolo']);
    expect(filterGlossaryTerms('tela TX-06').map(term => term.id)).toContain('tela');
  });

  it('returns no matches safely and resets without modifying the dataset', () => {
    const original = JSON.stringify(textileGlossary);
    expect(filterGlossaryTerms('inesistente-zz')).toEqual([]);
    expect(filterGlossaryTerms('<script>alert(1)</script>')).toEqual([]);
    expect(filterGlossaryTerms('')).toBe(textileGlossary);
    expect(filterGlossaryTerms(' \n\t ')).toBe(textileGlossary);
    expect(filterGlossaryTerms('filato', [])).toEqual([]);
    expect(JSON.stringify(textileGlossary)).toBe(original);
  });

  it('renders accessible search, reset, dt/dd and a counter distinct from articles', () => {
    const html = renderToStaticMarkup(createElement(TextileGlossary));
    expect(html).toContain('class="learning-glossary learning-shell"');
    expect(html.match(/type="search"/g)).toHaveLength(1);
    expect(html.match(/<button /g)).toHaveLength(1);
    expect(html).toContain('type="reset"');
    expect(html).toContain('Azzera ricerca');
    expect(html).toContain('<label ');
    expect(html).toContain('aria-describedby=');
    expect(html.match(/role="status"/g)).toHaveLength(1);
    expect(html).toContain('10 termini tecnici su 10 nel glossario. Conteggio distinto dagli articoli.');
    expect(html.match(/<dt /g)).toHaveLength(10);
    expect(html.match(/<dd /g)).toHaveLength(10);
    expect(html.match(/<details /g)).toHaveLength(10);
    expect(html).toContain('pagine PDF');
    expect(html).not.toContain('http');
  });
});
