import React, { useEffect, useRef, useState, type ReactNode } from 'react';
import { getCatalog } from './services/catalog';
import { Home, Intelligence, ArticlePage } from './editorial';
import { Network, CompanyPage } from './network';
import { NotFound, Link, PageHero } from './components';
import { Taxonomy } from './taxonomy';
import { Brief } from './brief';
import { Dashboard } from './dashboard';
import './styles.css';
import './evolution.css';

type Catalog = Awaited<ReturnType<typeof getCatalog>>;
const navigation = [
  { to: '/', label: 'Dashboard' }, { to: '/filiera', label: 'Filiera' },
  { to: '/network', label: 'Network' }, { to: '/brief', label: 'Brief' },
  { to: '/intelligence', label: 'Intelligence' },
];
function currentRoute() { const hash = window.location.hash.slice(1); return !hash || hash === 'main-content' ? '/' : hash; }

class ErrorBoundary extends React.Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <section className="section container"><h1>Interfaccia non disponibile</h1><p>Ricarica la pagina per riprovare. Nessun dato del brief viene inviato.</p><button className="button button-secondary" onClick={() => window.location.reload()}>Ricarica</button></section> : this.props.children; }
}

function Shell({ route, children }: { route: string; children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const main = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const path = route.split('?')[0];
  const previousPath = useRef(path);
  useEffect(() => { setMenu(false); }, [route]);
  useEffect(() => {
    if (previousPath.current !== path) { window.scrollTo({ top: 0, behavior: 'instant' }); main.current?.focus(); }
    previousPath.current = path;
    const title = navigation.find(item => item.to === path)?.label || (path === '/privacy' ? 'Dati e progetto' : path === '/progetto' ? 'Il progetto' : 'PratoHub');
    document.title = `${title} · PratoHub`;
  }, [path]);
  useEffect(() => {
    if (!menu) return;
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenu(false); toggle.current?.focus(); } };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [menu]);
  const links = navigation.map(item => <a key={item.to} className="nav-link" href={`#${item.to}`} aria-current={path === item.to ? 'page' : undefined}>{item.label}</a>);
  return <>
    <a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); main.current?.focus(); }}>Vai al contenuto</a>
    <header className="site-header"><div className="header-inner container"><a href="#/" className="brand"><span className="brand-mark" aria-hidden="true">P<span>.</span></span><span>PratoHub<small>TEXTILE INTELLIGENCE & NETWORK</small></span></a><nav className="desktop-nav" aria-label="Navigazione principale">{links}</nav><button ref={toggle} className="menu-toggle" type="button" aria-expanded={menu} aria-controls="mobile-menu" onClick={() => setMenu(!menu)}>{menu ? 'Chiudi' : 'Menu'} <span aria-hidden="true">{menu ? '×' : '☰'}</span></button></div><nav id="mobile-menu" className="mobile-nav" aria-label="Navigazione mobile" hidden={!menu}>{links}</nav></header>
    <main ref={main} id="main-content" className="site-main" tabIndex={-1}>{children}</main>
    <footer className="site-footer"><div className="container"><div className="footer-grid"><div><div className="footer-brand">PratoHub<span>.</span></div><p>Strumenti per leggere la filiera e preparare richieste più chiare.</p></div><div><h2>Esplora</h2><Link to="/">Dashboard</Link><Link to="/filiera">Filiera tessile</Link><Link to="/brief">Brief locale</Link></div><div><h2>Il progetto</h2><Link to="/progetto">Presentazione</Link><Link to="/privacy">Dati e trasparenza</Link><p>Contenuti e profili pubblici solo dopo revisione. Le schede DEMO sono sintetiche.</p></div></div><div className="footer-bottom"><span>PratoHub · Italy CircularFashion</span><span>Prato / Italia</span></div></div></footer>
  </>;
}

function Privacy() {
  return <><PageHero eyebrow="PROGETTO / TRASPARENZA" title="Dati e strumenti, senza ambiguità" copy="Come funziona questa versione di PratoHub e quali informazioni rimangono sul tuo dispositivo."/><section className="section container article-body"><h2>Brief: nessun invio</h2><p>Il documento viene preparato nella memoria della pagina. Non viene inviato a PratoHub o alle aziende e non viene salvato in un account. Uscendo dal Brief o ricaricando la pagina perdi i campi non esportati. I file TXT e JSON vengono scaricati sul dispositivo: condividili solo con destinatari scelti da te.</p><h2>Ricerca e link condivisi</h2><p>Filtri e modalità DEMO possono comparire nel frammento dell’indirizzo, dopo il simbolo #. Chi riceve il link può leggerli e riprodurre la ricerca. Non inserire dati personali o riservati nei campi di ricerca.</p><h2>Profili e modalità DEMO</h2><p>Il catalogo pubblico statico contiene solo record approvati. Non si collega al database di sviluppo. La modalità DEMO usa esempi sintetici separati: non sono imprese reali né attestazioni di competenze, certificazioni o disponibilità produttiva. Un errore non attiva automaticamente i dati DEMO.</p><h2>Hosting e servizi</h2><p>Questa versione è ospitata su GitHub Pages. Il caricamento del sito comporta richieste al servizio di hosting. Non sono integrati analytics, pubblicità, moduli di registrazione o cookie applicativi. Per i trattamenti del fornitore consulta la <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">privacy di GitHub</a>.</p><h2>Progetto e segnalazioni</h2><p>PratoHub è un progetto di ItalyCircularFashion. Puoi consultare il <a href="https://github.com/ItalyCircularFashion/PratoHub" target="_blank" rel="noopener noreferrer">repository del progetto</a> per informazioni e segnalazioni. Questa nota descrive la release corrente: eventuali futuri servizi con raccolta di dati richiederanno una propria informativa prima dell’attivazione.</p><Link to="/brief" className="text-link">Torna al Brief →</Link></section></>;
}

export function App() {
  const [route, setRoute] = useState(currentRoute);
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => { const onHash = () => { if (location.hash !== '#main-content') setRoute(currentRoute()); }; window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash); }, []);
  useEffect(() => { let active = true; setError(false); getCatalog().then(data => { if (active) setCatalog(data); }).catch(() => { if (active) setError(true); }); return () => { active = false; }; }, [attempt]);
  const path = route.split('?')[0];
  let view: ReactNode;
  if (path === '/privacy') view = <Privacy/>;
  else if (path === '/progetto') view = <Home/>;
  else if (error) view = <section className="section container"><h1>Catalogo non disponibile</h1><p>Il caricamento non è riuscito. Non verranno mostrati dati sintetici al posto di quelli pubblici.</p><button className="button button-secondary" onClick={() => setAttempt(value => value + 1)}>Riprova</button></section>;
  else if (!catalog) view = <section className="section container"><p role="status">Caricamento del catalogo…</p></section>;
  else if (path === '/' || path === '/dashboard') view = <Dashboard catalog={catalog} route={route}/>;
  else if (path === '/network') view = <Network catalog={catalog} route={route}/>;
  else if (path === '/filiera') view = <Taxonomy catalog={catalog} route={route}/>;
  else if (path === '/brief') view = <Brief key={route} catalog={catalog} route={route}/>;
  else if (path === '/intelligence') view = <Intelligence catalog={catalog} route={route}/>;
  else if (path.startsWith('/network/azienda/')) view = <CompanyPage catalog={catalog} slug={path.slice('/network/azienda/'.length)}/>;
  else if (path.startsWith('/intelligence/articolo/')) view = <ArticlePage catalog={catalog} slug={path.slice('/intelligence/articolo/'.length)}/>;
  else view = <NotFound/>;
  return <Shell route={route}><ErrorBoundary key={path}>{view}</ErrorBoundary></Shell>;
}
