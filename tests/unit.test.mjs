import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PRIMARY_SOURCES, safeExternal, safeHttps, url, escapeHtml, formatDate, validateContent } from '../portal/lib/core.mjs';

test('PRIMARY_SOURCES: registro completo delle 7 fonti', () => {
  assert.equal(PRIMARY_SOURCES.length, 7);
  assert.deepEqual(PRIMARY_SOURCES.map(s => s.fonte), [
    'Internet Archive', 'Textile Exchange', 'EURATEX', 'Commissione europea', 'ISTAT', 'Confindustria Toscana Nord', 'Google Scholar',
  ]);
  for (const s of PRIMARY_SOURCES) {
    assert.ok(s.utilizzo, `${s.fonte}: utilizzo mancante`);
    assert.ok(['Alta', 'Molto alta'].includes(s.priorita), `${s.fonte}: priorità non ammessa`);
    assert.equal(new URL(s.url).protocol, 'https:', `${s.fonte}: URL non HTTPS`);
  }
});

test('safeExternal accetta http legacy, safeHttps lo rifiuta', () => {
  assert.equal(safeExternal('http://www.example.com/'), 'http://www.example.com/');
  assert.throws(() => safeHttps('http://www.example.com/'));
  assert.throws(() => safeExternal('https://user:pass@example.com/'));
  assert.throws(() => safeExternal('javascript:alert(1)'));
});

test('url() rifiuta percorsi fuori base', () => {
  assert.equal(url('news/'), '/PratoHub/news/');
  assert.throws(() => url('../segreto/'));
  assert.throws(() => url('news/?q=1'));
});

test('escapeHtml e formatDate', () => {
  assert.equal(escapeHtml('<b>&"\'</b>'), '&lt;b&gt;&amp;&quot;&#39;&lt;/b&gt;');
  assert.match(formatDate('2026-11-06'), /2026/);
  assert.throws(() => formatDate('06-11-2026'));
});

test('validateContent: fixture minima valida e copertura categorie', () => {
  const companies = [
    { slug: 'prova-filatura', name: 'Prova Filatura', category: 'filature', city: 'Prato', description: 'Scheda di prova per il test unitario.', website: 'https://example.com/', checkedAt: '2026-11-06', sources: [{ label: 'Sito', url: 'https://example.com/' }] },
    { slug: 'prova-tessitura', name: 'Prova Tessitura', category: 'tessiture', city: 'Prato', description: 'Scheda di prova per il test unitario.', website: 'https://example.com/', checkedAt: '2026-11-06', sources: [{ label: 'Sito', url: 'https://example.com/' }] },
    { slug: 'prova-tintoria', name: 'Prova Tintoria', category: 'tintorie', city: 'Prato', description: 'Scheda di prova per il test unitario.', website: 'http://example.com/', checkedAt: '2026-11-06', sources: [{ label: 'Sito legacy', url: 'http://example.com/' }] },
    { slug: 'prova-rifinizione', name: 'Prova Rifinizione', category: 'rifinizioni', city: 'Prato', description: 'Scheda di prova per il test unitario.', website: 'https://example.com/', checkedAt: '2026-11-06', sources: [{ label: 'Sito', url: 'https://example.com/' }] },
  ];
  const article = category => ({ slug: `prova-${category}`, category, title: 'Titolo di prova', summary: 'Sommario di prova sufficientemente lungo.', kind: 'Approfondimento', publishedAt: '2026-11-06', sources: [{ label: 'Fonte', url: 'https://example.com/' }], sections: [{ heading: 'Sezione uno', paragraphs: ['Paragrafo di prova con lunghezza sufficiente per la validazione.'] }, { heading: 'Sezione due', paragraphs: ['Paragrafo di prova con lunghezza sufficiente per la validazione.'] }] });
  const editorial = {
    articles: [article('distretto-prato'), article('sostenibilita'), article('tecnologie-tessili')],
    marketSources: [{ name: 'Fonte mercato', description: 'Descrizione.', url: 'https://example.com/' }],
    eventSources: [{ name: 'Fonte eventi', description: 'Descrizione.', url: 'https://example.com/' }],
  };
  assert.equal(validateContent({ companies, editorial }), true);
  const bad = structuredClone(editorial);
  bad.articles[0].sources[0].url = 'http://example.com/';
  assert.throws(() => validateContent({ companies, editorial: bad }), /HTTPS/);
});
