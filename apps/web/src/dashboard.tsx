import { Link, PageHero } from './components';
import type { getCatalog } from './services/catalog';
import { filterCompanies } from './services/catalog';
import { demoCompanies } from './data/demo';
import { emptyFilters, readNetworkFilters, routeParams, routeWith, taxonomyPath } from './services/navigation';
import { downloadText, navigate, ShareRoute } from './ui';
import './dashboard.css';

type Catalog = Awaited<ReturnType<typeof getCatalog>>;

export function Dashboard({ catalog, route }: { catalog: Catalog; route: string }) {
  const demo = routeParams(route).get('mode') === 'demo';
  const filters = readNetworkFilters(route, catalog.taxonomy, catalog.materials);
  const companies = demo ? demoCompanies : catalog.companies;
  const matches = filterCompanies(companies, filters);
  const macros = catalog.taxonomy.filter(node => node.level === 1);
  function update(values: Partial<typeof filters>) {
    const next = { ...filters, ...values };
    navigate(routeWith('/', { mode: demo ? 'demo' : '', q: next.query, macroarea: next.macroarea, process: next.process, specialization: next.specialization, material: next.material, locality: next.locality }), true);
  }
  function exportMatches() {
    const cell = (value: string) => `"${(/^[=+@\-\t\r]/.test(value) ? "'" : '') + value.replaceAll('"', '""')}"`;
    const rows = [['nome', 'territorio', 'lavorazioni', 'provenienza'], ...matches.map(company => [company.name, company.locality, company.capabilities.map(cap => catalog.taxonomy.find(n => n.code === cap.specializationCode)?.label || cap.specializationCode).join(' · '), demo ? 'DEMO — dati sintetici' : 'Catalogo pubblico PratoHub'])];
    downloadText('\uFEFF' + rows.map(row => row.map(cell).join(';')).join('\r\n'), demo ? 'pratohub-demo.csv' : 'pratohub-profili-pubblici.csv', 'text/csv;charset=utf-8');
  }
  return <>
    <PageHero eyebrow="PRATOHUB / DASHBOARD" title="La filiera tessile, a colpo d’occhio" copy="Esplora le lavorazioni, prepara un brief e orienta la ricerca. Un punto di partenza concreto, senza attribuire competenze non verificate."/>
    <section className="section container dashboard-section">
      <div className="dashboard-intro"><div><p className="eyebrow">IL TUO PUNTO DI PARTENZA</p><h2>Dal processo alla richiesta.</h2></div><div className="hero-actions"><Link className="button button-primary" to="/filiera">Esplora la filiera ↗</Link><Link className="button button-secondary" to="/brief">Prepara un brief →</Link></div></div>
      <dl className="dashboard-metrics" aria-label="Stato del catalogo PratoHub">
        <div><dt>{demo ? 'Schede DEMO nel campione' : 'Profili pubblicati'}</dt><dd>{companies.length}</dd><small>{demo ? 'Esempi sintetici, non aziende reali' : 'Solo record approvati nel catalogo pubblico'}</small></div>
        <div><dt>Macroaree della classificazione</dt><dd>{macros.length}</dd><small>Catalogo iniziale, non esaustivo</small></div>
        <div><dt>Specializzazioni nel catalogo</dt><dd>{catalog.taxonomy.filter(n => n.level === 3).length}</dd><small>Non attestano capacità aziendali</small></div>
        <div><dt>Risultati della ricerca {demo ? 'DEMO' : 'pubblica'}</dt><dd>{matches.length}</dd><small>Conteggio aggiornato con i filtri</small></div>
      </dl>
      <div className={`dashboard-mode ${demo ? 'is-demo' : ''}`}>
        <div><h2>{demo ? 'Modalità DEMO — dati sintetici' : 'Catalogo pubblico'}</h2><p>{demo ? 'Nomi, località e capacità sono esempi di interfaccia. Non rappresentano imprese, disponibilità o certificazioni reali. Nessuna bozza del database viene caricata.' : 'I profili appariranno dopo revisione. Per provare ricerca e filtri puoi attivare un campione separato di schede sintetiche.'}</p></div>
        <button className="button button-secondary" type="button" aria-pressed={demo} onClick={() => navigate(demo ? '/' : '/?mode=demo')}>{demo ? 'Torna ai dati pubblici' : 'Prova la modalità DEMO'}</button>
      </div>
      <div className="search-panel dashboard-search"><div className="field-grid">
        <label className="field">Cerca nei profili {demo ? 'DEMO' : 'pubblici'}<input type="search" placeholder="Nome o territorio" maxLength={120} value={filters.query} onChange={e => update({ query: e.target.value })}/></label>
        <label className="field">Materiale<select value={filters.material} onChange={e => update({ material: e.target.value })}><option value="">Tutti i materiali</option>{catalog.materials.map(item => <option key={item.code} value={item.code}>{item.label}</option>)}</select></label>
        <label className="field">Territorio<input maxLength={120} placeholder={demo ? 'Area A o Area B — DEMO' : 'Comune o territorio'} value={filters.locality} onChange={e => update({ locality: e.target.value })}/></label>
      </div><div className="dashboard-chips" role="group" aria-label="Filtra i profili per macroarea"><button type="button" aria-pressed={!filters.macroarea} onClick={() => update({ macroarea: '', process: '', specialization: '' })}>Tutte le macroaree</button>{macros.map(macro => <button key={macro.code} type="button" aria-pressed={filters.macroarea === macro.code} onClick={() => update({ macroarea: macro.code, process: '', specialization: '' })}>{macro.label}</button>)}</div></div>
      <div className="dashboard-results"><p className="results-bar" role="status">{matches.length} {matches.length === 1 ? 'profilo trovato' : 'profili trovati'}{demo ? ' · DEMO' : ''}</p><div className="hero-actions"><button className="button button-secondary" onClick={() => update(emptyFilters)}>Azzera filtri</button><button className="button button-secondary" onClick={exportMatches}>Esporta risultati CSV ↓</button></div></div>
      {!matches.length ? <div className="empty-state"><h2>{companies.length ? 'Nessun risultato per questi filtri' : 'Nessun profilo pubblico disponibile'}</h2><p>{companies.length ? 'Prova una macroarea più ampia o azzera la ricerca.' : 'La directory è in popolamento. Le bozze non sono pubbliche: puoi già esplorare la classificazione e preparare il documento della tua richiesta.'}</p><Link className="text-link" to="/filiera">Vai alla filiera ↗</Link></div> : <ul className="dashboard-company-grid" aria-label={demo ? 'Risultati DEMO' : 'Profili pubblici'}>{matches.map(company => {
        const capability = company.capabilities[0];
        const path = capability ? taxonomyPath(capability.specializationCode, catalog.taxonomy) : [];
        return <li className="dashboard-company" key={company.id}><span className="card-index">{demo ? 'SCHEDA DEMO / NON REALE' : 'PROFILO PUBBLICO'}</span><h2>{company.name}</h2><p>{company.locality}</p><p>{path.map(n => n.label).join(' → ') || 'Lavorazione non specificata'}</p><div className="hero-actions">{capability && <Link className="text-link" to={routeWith('/filiera', { node: capability.specializationCode })}>Esplora la lavorazione ↗</Link>}<Link className="text-link" to={routeWith('/brief', { node: capability?.specializationCode || '' })}>Prepara un brief →</Link></div></li>;
      })}</ul>}
      <ShareRoute route={routeWith('/', { mode: demo ? 'demo' : '', q: filters.query, macroarea: filters.macroarea, process: filters.process, specialization: filters.specialization, material: filters.material, locality: filters.locality })} label="Condividi questa ricerca"/>
      <p className="field-hint">Fonte dei conteggi: catalogo locale PratoHub-TX-1.0 e risultati correnti, non statistiche economiche sul distretto. La modalità DEMO è distinta dalla directory pubblica.</p>
    </section>
  </>;
}
