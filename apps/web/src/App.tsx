import { useEffect, useState, type ReactNode } from 'react';
import { getCatalog } from './services/catalog';
import { Home, Intelligence, ArticlePage, Network, CompanyPage, Taxonomy, NotFound } from './pages';
import './styles.css';

type Catalog = Awaited<ReturnType<typeof getCatalog>>;
const nav = [{ to: '/', label: 'Home' }, { to: '/intelligence', label: 'Intelligence' }, { to: '/network', label: 'Network' }, { to: '/filiera', label: 'Filiera' }];
function currentRoute() { const hash = window.location.hash.slice(1); return !hash || hash === 'main-content' ? '/' : hash; }
function Shell({ route, children }: { route: string; children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  useEffect(() => { setMenu(false); window.scrollTo({ top: 0, behavior: 'instant' }); }, [route]);
  const navigation = nav.map(item => <a key={item.to} href={`#${item.to}`} className="nav-link" aria-current={item.to === route.split('?')[0] ? 'page' : undefined}>{item.label}</a>);
  return <>
    <a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); document.getElementById('main-content')?.focus(); }}>Vai al contenuto</a>
    <header className="site-header"><div className="header-inner container">
      <a href="#/" className="brand"><span className="brand-mark" aria-hidden="true">P<span>.</span></span><span>PratoHub<small>TEXTILE INTELLIGENCE & NETWORK</small></span></a>
      <nav className="desktop-nav" aria-label="Navigazione principale">{navigation}</nav>
      <button className="menu-toggle" type="button" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="mobile-menu">{menu ? 'Chiudi' : 'Menu'} <span aria-hidden="true">{menu ? '×' : '☰'}</span></button>
    </div><nav id="mobile-menu" className="mobile-nav" aria-label="Navigazione mobile" hidden={!menu}>{navigation}</nav></header>
    <main id="main-content" className="site-main" tabIndex={-1}>{children}</main>
    <footer className="site-footer"><div className="container"><div className="footer-grid"><div><div className="footer-brand">PratoHub<span>.</span></div><p>Uno spazio digitale per orientarsi nella filiera tessile e nelle sue competenze.</p></div><div><h2>Esplora</h2><a href="#/intelligence">Intelligence</a><a href="#/network">Network</a><a href="#/filiera">Filiera tessile</a></div><div><h2>Il progetto</h2><p>Release pubblica iniziale. Contenuti e profili sono pubblicati solo dopo revisione.</p></div></div><div className="footer-bottom"><span>PratoHub · Textile Intelligence & Network</span><span>Prato / Italia</span></div></div></footer>
  </>;
}
export function App() {
  const [route, setRoute] = useState(currentRoute);
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => { const onHash = () => { if (location.hash !== '#main-content') setRoute(currentRoute()); }; window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash); }, []);
  useEffect(() => { let active = true; setError(false); getCatalog().then(data => { if (active) setCatalog(data); }).catch(() => { if (active) setError(true); }); return () => { active = false; }; }, [attempt]);
  let view: ReactNode;
  const path = route.split('?')[0];
  if (path === '/') view = <Home/>;
  else if (error) view = <section className="section container error-box"><h1>Contenuti non disponibili</h1><p>Non è stato possibile caricare i dati pubblici.</p><button className="button button-secondary" onClick={() => setAttempt(attempt+1)}>Riprova</button></section>;
  else if (!catalog) view = <section className="section container"><p role="status">Caricamento dei dati pubblici…</p></section>;
  else if (path === '/intelligence') view = <Intelligence catalog={catalog} route={route}/>;
  else if (path === '/network') view = <Network catalog={catalog}/>;
  else if (path === '/filiera') view = <Taxonomy catalog={catalog}/>;
  else if (path.startsWith('/intelligence/articolo/')) view = <ArticlePage catalog={catalog} slug={path.slice('/intelligence/articolo/'.length)}/>;
  else if (path.startsWith('/network/azienda/')) view = <CompanyPage catalog={catalog} slug={path.slice('/network/azienda/'.length)}/>;
  else view = <NotFound/>;
  return <Shell route={route}>{view}</Shell>;
}
