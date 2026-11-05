import { Link } from './components';
import { taxonomy } from './data/catalog';
import textileStudy from './assets/textile-study.svg';
import './home-editorial.css';
import { FilieraLearning } from './learning';

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg className="ph-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"/></svg>;
}

const readingRooms = [
  { category: 'notizie', label: 'Notizie e approfondimenti', copy: 'Mettere in prospettiva i cambiamenti del settore.', kind: 'SCENARI' },
  { category: 'normative', label: 'Normative tessili', copy: 'Orientarsi nel quadro normativo e nei suoi riferimenti.', kind: 'REGOLE' },
  { category: 'knowledge', label: 'Textile Knowledge', copy: 'Conoscere il linguaggio, i materiali e i processi.', kind: 'SAPERI' },
];
const exampleCodes = ['TX-06', 'TX-06.01', 'TX-06.01.01'];
const examplePath = exampleCodes.map(code => taxonomy.find(node => node.code === code)).filter(node => node !== undefined);
const levelLabels = ['Macroarea', 'Processo', 'Specializzazione'];

/** Home editoriale riconciliata con il frontend corrente; catalogo e servizi invariati. */
export function HomeEditorial() {
  return <div className="ph-home">
    <section className="ph-hero" aria-labelledby="ph-home-title">
      <div className="ph-container">
        <div className="ph-hero-grid">
          <div className="ph-hero-copy">
            <p className="ph-kicker"><span className="ph-rule" aria-hidden="true"/> IL DISTRETTO, IN PROSPETTIVA</p>
            <h1 id="ph-home-title">La filiera tessile,<br/><em>connessa.</em></h1>
            <p className="ph-hero-lede">La conoscenza incontra il saper fare.</p>
            <p className="ph-hero-description">Materiali, lavorazioni e competenze: uno spazio per leggere il distretto tessile e capire dove cercare.</p>
            <div className="ph-actions">
              <Link to="/filiera" className="ph-button ph-button-primary">Esplora la filiera <Arrow diagonal/></Link>
              <Link to="/network" className="ph-inline-link">Scopri il Network <Arrow/></Link>
            </div>
            <p className="ph-hero-note">Una mappa già esplorabile. Profili e articoli vengono pubblicati solo dopo revisione.</p>
          </div>
          <figure className="ph-textile-study">
            <div className="ph-study-heading"><span>PRATOHUB / STUDIO DI INTRECCIO</span><span aria-hidden="true">＋</span></div>
            <div className="ph-study-image"><img src={textileStudy} alt="Illustrazione di fili chiari e verdi intrecciati, attraversati da una fascia color rame." width="900" height="960" fetchPriority="high"/><span className="ph-study-coordinate" aria-hidden="true">ORDITO × TRAMA</span><div className="ph-study-caption" aria-hidden="true">Fili diversi.<br/><strong>Una stessa trama.</strong></div></div>
            <figcaption><span>Una trama di conoscenze e competenze.</span><span className="ph-swatch" aria-hidden="true"><i/><i/><i/></span></figcaption>
          </figure>
        </div>
        <nav className="ph-home-index" aria-label="Percorsi di PratoHub">
          <Link to="/intelligence"><span className="ph-index-number">01</span><span>Comprendere<small>Intelligence</small></span><Arrow diagonal/></Link>
          <Link to="/filiera"><span className="ph-index-number">02</span><span>Esplorare<small>La filiera</small></span><Arrow diagonal/></Link>
          <Link to="/network"><span className="ph-index-number">03</span><span>Connettere<small>Il Network</small></span><Arrow diagonal/></Link>
          <Link to="/brief"><span className="ph-index-number">04</span><span>Preparare<small>Il tuo brief</small></span><Arrow diagonal/></Link>
        </nav>
      </div>
    </section>

    <section className="ph-section ph-perspectives" aria-labelledby="ph-perspectives-title">
      <div className="ph-container">
        <div className="ph-section-heading"><div><p className="ph-kicker">01 / DUE PROSPETTIVE</p><h2 id="ph-perspectives-title">Capire il settore.<br/>Riconoscere il valore.</h2></div><p>Da una parte le informazioni per orientarsi. Dall’altra le competenze che danno forma alla materia. PratoHub mette in relazione queste due letture.</p></div>
        <div className="ph-feature-grid">
          <Link to="/intelligence" className="ph-feature ph-feature-light">
            <div className="ph-feature-top"><span className="ph-kicker">PRATOHUB / INTELLIGENCE</span><Arrow diagonal/></div>
            <div className="ph-editorial-art" aria-hidden="true"><span/><span/><span/><i/></div>
            <div className="ph-feature-body"><h3>Le idee, prima<br/>delle decisioni.</h3><p>Approfondimenti, normativa e cultura tecnica per leggere il cambiamento con più strumenti.</p></div>
            <div className="ph-feature-bottom"><span>Vai a Intelligence <Arrow/></span><small>Archivio in costruzione</small></div>
          </Link>
          <Link to="/network" className="ph-feature ph-feature-dark">
            <div className="ph-feature-top"><span className="ph-kicker">PRATOHUB / NETWORK</span><Arrow diagonal/></div>
            <svg className="ph-network-art" viewBox="0 0 280 210" fill="none" aria-hidden="true"><path d="M35 155 105 75l85 60 60-105M35 155l155-20M105 75l145-45M105 75l30 110" stroke="currentColor" strokeWidth="1"/><circle cx="35" cy="155" r="11"/><circle cx="105" cy="75" r="21"/><circle cx="190" cy="135" r="14"/><circle cx="250" cy="30" r="8"/><circle cx="135" cy="185" r="7"/></svg>
            <div className="ph-feature-body"><h3>Il saper fare,<br/>al posto giusto.</h3><p>Una directory per cercare imprese per lavorazione, materiale e territorio, senza confondere le competenze.</p></div>
            <div className="ph-feature-bottom"><span>Esplora il Network <Arrow/></span><small>Profili su revisione</small></div>
          </Link>
        </div>
      </div>
    </section>

    <section className="ph-filiera" aria-labelledby="ph-filiera-title">
      <div className="ph-container">
        <div className="ph-section-heading"><div><p className="ph-kicker">02 / LA MAPPA PRODUTTIVA</p><h2 id="ph-filiera-title">La filiera,<br/>un livello alla volta.</h2></div><div className="ph-filiera-intro"><p>Dal quadro generale alla singola lavorazione. Una classificazione a tre livelli aiuta a dare un nome a quello che cerchi.</p><Link to="/filiera" className="ph-inline-link">Apri la mappa completa <Arrow diagonal/></Link></div></div>
        <div className="ph-taxonomy-caption"><span>UN PERCORSO NELLA CLASSIFICAZIONE</span><span>Esempio / Tessitura</span></div>
        <ol className="ph-taxonomy-path">{examplePath.map((node, index) => <li key={node.code}><Link to={`/filiera?node=${encodeURIComponent(node.code)}`} className="ph-taxonomy-step"><div className="ph-step-label"><span>{levelLabels[index]}</span><span aria-hidden="true">0{index + 1}</span></div><h3>{node.label}</h3><div className="ph-step-code"><code>{node.code}</code><Arrow/></div></Link></li>)}</ol>
        <p className="ph-filiera-note">Una classificazione iniziale e non esaustiva. I nodi descrivono lavorazioni, non disponibilità produttive delle aziende.</p>
      </div>
    </section>

    <section className="ph-section"><div className="ph-container"><FilieraLearning/></div></section>

    <section className="ph-section ph-reading" aria-labelledby="ph-reading-title">
      <div className="ph-container ph-reading-layout">
        <div className="ph-reading-intro"><p className="ph-kicker">03 / CULTURA TESSILE</p><h2 id="ph-reading-title">Non solo notizie.<br/>Chiavi di lettura.</h2><p>Scenari, regole e conoscenza tecnica. Tre ingressi distinti, per approfondire senza perdere il filo.</p><span className="ph-availability">Glossario tecnico disponibile</span><p className="ph-reading-note">Il glossario è consultabile in Textile Knowledge. Gli articoli saranno aggiunti dopo revisione.</p></div>
        <div className="ph-reading-list">{readingRooms.map((room, index) => <Link key={room.category} to={`/intelligence?category=${room.category}`} className="ph-reading-item"><span className="ph-reading-number" aria-hidden="true">0{index + 1}</span><div><span className="ph-kicker">{room.kind}</span><h3>{room.label}</h3><p>{room.copy}</p></div><Arrow diagonal/></Link>)}</div>
      </div>
    </section>

    <section className="ph-brief" aria-labelledby="ph-brief-title">
      <div className="ph-container ph-brief-layout">
        <div className="ph-brief-symbol" aria-hidden="true"><svg viewBox="0 0 220 250" fill="none"><path d="M42 22h102l38 38v167H42z"/><path d="M144 22v39h38M68 95h86M68 119h86M68 143h55M68 181h86"/><path className="ph-brief-pencil" d="m126 196 51-51 15 15-51 51-23 8zM166 156l15 15"/></svg><span>DAL PROCESSO<br/>ALLA RICHIESTA.</span></div>
        <div className="ph-brief-copy"><p className="ph-kicker">04 / UNO STRUMENTO CONCRETO</p><h2 id="ph-brief-title">Hai una lavorazione<br/>in mente? Mettila in chiaro.</h2><p>Organizza materiale, quantità e requisiti in un brief da scaricare e condividere autonomamente con i tuoi interlocutori.</p><div className="ph-actions"><Link to="/brief" className="ph-button ph-button-primary">Prepara il tuo brief <Arrow diagonal/></Link><span className="ph-local-note">Sul tuo dispositivo.<br/>Nessun invio automatico.</span></div></div>
      </div>
    </section>
  </div>;
}
