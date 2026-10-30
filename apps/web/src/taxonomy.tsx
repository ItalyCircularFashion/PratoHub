import type { getCatalog } from './services/catalog';
import { Link, PageHero, SectionHeading } from './components';
import { filtersForNode, networkRoute, routeParams, routeWith, searchTaxonomy, taxonomyPath } from './services/navigation';
import { downloadText, navigate, ShareRoute, TaxonomyPath } from './ui';
type Catalog = Awaited<ReturnType<typeof getCatalog>>;

export function Taxonomy({ catalog, route }: { catalog: Catalog; route: string }) {
  const params = routeParams(route);
  const code = params.get('node') || '';
  const query = (params.get('q') || '').slice(0, 120);
  const path = taxonomyPath(code, catalog.taxonomy);
  const macro = path.find(n => n.level === 1);
  const process = path.find(n => n.level === 2);
  const leaf = path.find(n => n.level === 3);
  const macros = catalog.taxonomy.filter(n => n.level === 1);
  const processes = catalog.taxonomy.filter(n => n.level === 2 && n.parentCode === macro?.code);
  const leaves = catalog.taxonomy.filter(n => n.level === 3 && n.parentCode === process?.code);
  const results = searchTaxonomy(query, catalog.taxonomy);
  function choose(node: string) { navigate(routeWith('/filiera', { node })); }
  function exportTaxonomy() {
    const cell = (value: string | number | null) => `"${String(value ?? '').replaceAll('"', '""')}"`;
    const rows = [['codice', 'livello', 'padre', 'etichetta'], ...catalog.taxonomy.map(node => [node.code, node.level, node.parentCode, node.label])];
    downloadText('\uFEFF' + rows.map(row => row.map(cell).join(';')).join('\r\n'), 'pratohub-tassonomia-v1.csv', 'text/csv;charset=utf-8');
  }
  return <><PageHero eyebrow="03 / FILIERA PRODUTTIVA" title="La mappa delle lavorazioni" copy="Un linguaggio comune per leggere il tessile. Esplora la classificazione a tre livelli, cerca una lavorazione e usala per orientare la ricerca."/>
    <section className="section container"><SectionHeading eyebrow="PRATOHUB-TX-1.0" title="Esplora la tassonomia" copy="Classificazione iniziale, non esaustiva. Materiali e tecnologie sono dimensioni separate: non descrivono automaticamente le capacità di un’impresa."/>
      <div className="taxonomy-toolbar"><label className="field">Cerca nella filiera<input type="search" value={query} maxLength={120} placeholder="Lavorazione o codice, ad esempio TX-06" onChange={e => navigate(routeWith('/filiera', { q: e.target.value, node: macro ? code : '' }), true)}/></label><button type="button" className="button button-secondary" onClick={exportTaxonomy}>Scarica tassonomia CSV ↓</button></div>
      {query.trim() && <div className="taxonomy-search-results"><p className="results-bar" role="status">{results.length} {results.length === 1 ? 'voce corrispondente' : 'voci corrispondenti'}</p>{results.length ? results.map(node => <Link key={node.code} className="taxonomy-search-result" to={routeWith('/filiera', { node: node.code })}><strong>{node.label}</strong><span>{taxonomyPath(node.code, catalog.taxonomy).map(n => n.label).join(' → ')}</span><small>{node.code} · Livello {node.level} ↗</small></Link>) : <p className="empty-state">Nessuna voce trovata. Prova un termine più generale: la classificazione non comprende ogni lavorazione possibile.</p>}<button type="button" className="button button-secondary" onClick={() => navigate(routeWith('/filiera', { node: macro ? code : '' }), true)}>Cancella ricerca</button></div>}
      {code && !path.length && <p className="status-note" role="status">Il codice richiesto non è presente nella classificazione pubblica. Seleziona una voce disponibile.</p>}
      <TaxonomyPath path={path}/>
      <div className="taxonomy-browser"><div className="taxonomy-level"><h2 className="eyebrow">01 / MACROAREA</h2><div className="taxonomy-list">{macros.map(node => <button type="button" key={node.code} aria-pressed={macro?.code === node.code} className={`taxonomy-option ${macro?.code === node.code ? 'active' : ''}`} onClick={() => choose(node.code)}><span>{node.label}</span><small>{node.code}</small></button>)}</div></div>
        <div className="taxonomy-level"><h2 className="eyebrow">02 / PROCESSO</h2>{!macro ? <p>Seleziona una macroarea.</p> : <div className="taxonomy-list">{processes.map(node => <button type="button" key={node.code} aria-pressed={process?.code === node.code} className={`taxonomy-option ${process?.code === node.code ? 'active' : ''}`} onClick={() => choose(node.code)}><span>{node.label}</span><small>{node.code}</small></button>)}{!processes.length && <p>Nessun processo disponibile.</p>}</div>}</div>
        <div className="taxonomy-level"><h2 className="eyebrow">03 / SPECIALIZZAZIONE</h2>{!process ? <p>Seleziona un processo.</p> : <div className="taxonomy-list">{leaves.map(node => <button type="button" key={node.code} aria-pressed={leaf?.code === node.code} className={`taxonomy-option ${leaf?.code === node.code ? 'active' : ''}`} onClick={() => choose(node.code)}><span>{node.label}</span><small>{node.code}</small></button>)}{!leaves.length && <p>Nessuna specializzazione disponibile.</p>}</div>}</div></div>
      <div className="taxonomy-summary" aria-live="polite">{path.length ? <><span className="card-index">{code} / LIVELLO {path[path.length - 1].level}</span><h2>{path[path.length - 1].label}</h2><p>Usa questa voce come criterio di ricerca, non come attestazione di una competenza o certificazione.</p><div className="hero-actions"><Link className="button button-primary" to={networkRoute(filtersForNode(code, catalog.taxonomy))}>Cerca nel Network ↗</Link><Link className="button button-secondary" to={routeWith('/brief', { node: code })}>Prepara un brief →</Link></div></> : <><h2>Dalla mappa alla ricerca.</h2><p>Seleziona una voce per ottenere un link diretto, filtrare il Network o preparare un brief.</p></>}</div>
      <ShareRoute route={routeWith('/filiera', { node: path.length ? code : '', q: query })} label="Condividi questa vista della filiera"/>
      <div className="grid-two taxonomy-details"><div className="editorial-panel"><p className="eyebrow">DIMENSIONE SEPARATA / {catalog.materials.length} VOCI</p><h2>Materiali</h2><p>{catalog.materials.map(m => m.label).join(' · ')}</p></div><div className="editorial-panel"><p className="eyebrow">DIMENSIONE SEPARATA / {catalog.technologies.length} VOCI</p><h2>Tecnologie</h2><p>{catalog.technologies.map(t => t.label).join(' · ')}</p></div></div><p className="field-hint">I codici rimangono quelli del catalogo PratoHub v1.0. Le voci non costituiscono una classificazione ATECO o una sequenza produttiva obbligatoria.</p>
    </section></>;
}
