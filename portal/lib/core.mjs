export const BASE = '/PratoHub/';
export const ORIGIN = 'https://italycircularfashion.github.io';
export const newsCategories = {
  'distretto-prato': { label: 'Distretto di Prato', description: 'Territorio, cultura industriale e relazioni di filiera.' },
  sostenibilita: { label: 'Sostenibilità', description: 'Materiali, circolarità e strumenti per leggere gli impatti.' },
  'tecnologie-tessili': { label: 'Tecnologie tessili', description: 'Ricerca applicata, processi e innovazione industriale.' },
};
export const companyCategories = {
  filature: { label: 'Filature', description: 'Filatura e produzione di filati: le attività sono descritte nella singola scheda.' },
  tessiture: { label: 'Tessiture', description: 'Tessitura e produzione di tessuti: consultare le fonti per il dettaglio delle attività.' },
  tintorie: { label: 'Tintorie', description: 'Il colore lungo la filiera: fibre, filati e tessuti.' },
  rifinizioni: { label: 'Rifinizioni', description: 'Finissaggio e trattamenti che definiscono la mano e la superficie del tessuto.' },
};
export const navItems = [ ['news/', 'News'], ['market/', 'Market'], ['aziende/', 'Aziende'], ['community/', 'Community'], ['events/', 'Events'], ['ecobalyse/', 'Ecobalyse'] ];
export const PRIMARY_SOURCES = [
  { fonte: 'Internet Archive', utilizzo: "Storia industriale, tecnologie tessili, pubblicazioni d'epoca", priorita: 'Alta', url: 'https://archive.org/' },
  { fonte: 'Textile Exchange', utilizzo: 'Statistiche fibre, materiali riciclati, certificazioni', priorita: 'Molto alta', url: 'https://textileexchange.org/' },
  { fonte: 'EURATEX', utilizzo: 'Mercato europeo, commercio estero, competitività', priorita: 'Molto alta', url: 'https://euratex.eu/' },
  { fonte: 'Commissione europea', utilizzo: 'Normative, economia circolare, passaporto digitale', priorita: 'Molto alta', url: 'https://environment.ec.europa.eu/strategy/textiles-strategy_en' },
  { fonte: 'ISTAT', utilizzo: 'Produzione industriale, export, occupazione', priorita: 'Molto alta', url: 'https://www.istat.it/' },
  { fonte: 'Confindustria Toscana Nord', utilizzo: 'Distretto di Prato, imprese, dinamiche territoriali', priorita: 'Molto alta', url: 'https://www.confindustriatoscananord.it/' },
  { fonte: 'Google Scholar', utilizzo: 'Ricerca scientifica, innovazione, brevetti e tecnologie', priorita: 'Alta', url: 'https://scholar.google.com/' },
];
export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}
export function url(path = '') {
  if (path.startsWith('/') || path.includes('..') || /[?#\\]/.test(path)) throw new Error(`Invalid relative route: ${path}`);
  return BASE + path;
}
export function safeExternal(value) {
  const parsed = new URL(value);
  if (!['https:', 'http:'].includes(parsed.protocol) || parsed.username || parsed.password) throw new Error('Only public HTTP(S) source URLs without credentials are allowed');
  return escapeHtml(parsed.href);
}
export function safeHttps(value) {
  const parsed = new URL(value);
  if (parsed.protocol !== 'https:' || parsed.username || parsed.password) throw new Error('Only public HTTPS source URLs are allowed');
  return escapeHtml(parsed.href);
}
export function formatDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(value))) throw new Error(`Invalid date: ${value}`);
  return new Intl.DateTimeFormat('it-IT', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(value + 'T12:00:00Z'));
}
function assert(condition, message) { if (!condition) throw new Error(message); }
function validSlug(slug) { return typeof slug === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug); }
function validateSources(sources, label, { httpsOnly = false } = {}) {
  assert(Array.isArray(sources) && sources.length > 0, `${label}: sources required`);
  // Le schede azienda possono collegare siti legacy solo-HTTP già verificati
  // (HTTPS non raggiungibile, HTTP 200 il 2026-11-07); l'editoriale resta HTTPS-only.
  sources.forEach(source => { assert(source.label && source.url, `${label}: incomplete source`); (httpsOnly ? safeHttps : safeExternal)(source.url); });
}
export function validateContent({ companies, editorial }) {
  assert(Array.isArray(companies) && companies.length > 0, 'A real public company dataset is required');
  assert(editorial && Array.isArray(editorial.articles) && editorial.articles.length > 0, 'Articles required');
  const seen = new Set();
  for (const company of companies) {
    assert(validSlug(company.slug), 'Invalid company slug');
    assert(!seen.has(company.slug), `Duplicate company ${company.slug}`); seen.add(company.slug);
    assert(companyCategories[company.category], `Invalid category ${company.category}`);
    assert(company.name && company.description, `Missing company information: ${company.slug}`);
    assert(!/demo|fittizi|esempio/i.test(company.name), 'Demo companies cannot be published');
    assert(company.checkedAt, 'Verification date required'); formatDate(company.checkedAt);
    safeExternal(company.website); validateSources(company.sources, company.slug);
  }
  seen.clear();
  for (const article of editorial.articles) {
    assert(validSlug(article.slug) && !newsCategories[article.slug], 'Invalid or reserved article slug');
    assert(!seen.has(article.slug), `Duplicate article ${article.slug}`); seen.add(article.slug);
    assert(newsCategories[article.category], `Invalid article category ${article.category}`);
    assert(article.title && article.summary && article.kind === 'Approfondimento', 'Article must be a documented editorial analysis');
    formatDate(article.publishedAt); validateSources(article.sources, article.slug, { httpsOnly: true });
    assert(article.sections?.length >= 2, 'Article requires substantive content');
    article.sections.forEach(section => assert(section.heading && section.paragraphs?.every(p => typeof p === 'string' && p.length > 20), 'Invalid article section'));
  }
  for (const category of Object.keys(newsCategories)) assert(editorial.articles.some(a => a.category === category), `Missing news category ${category}`);
  for (const category of Object.keys(companyCategories)) assert(companies.some(c => c.category === category), `Missing company category ${category}`);
  for (const key of ['marketSources', 'eventSources']) {
    assert(Array.isArray(editorial[key]) && editorial[key].length > 0, `${key} required`);
    editorial[key].forEach(item => { assert(item.name && item.description, 'Incomplete resource'); safeHttps(item.url); });
  }
  return true;
}
