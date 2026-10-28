import { useEffect, useState } from "react";
import { PH_DATA, TEST_AZIERE, type Azienda, type Stat, type Variazione } from "./data";

type AziendaItem = Azienda;

function cite(k: string, y?: string): string {
  const s = PH_DATA.sources[k];
  return `<a href="${s.u}" target="_blank" rel="noopener">${s.n}</a>` + (y ? `, ${y}` : "");
}

const fmt = (n: number): string => (n > 0 ? "+" : "−") + Math.abs(n).toFixed(1).replace(".", ",") + "%";

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Da oltre un secolo Prato fa tessuti nuovi con la lana vecchia.</h1>
        <p className="lead">Settemila imprese e quarantatremila addetti, in uno dei più grandi distretti tessili d'Europa. Qui trovi i numeri, ognuno con la sua fonte e il suo anno.</p>
      </div>
      <div className="swatch" role="img" aria-label="Campione di tessuto a quadri nei colori indaco e magenta" />
    </section>
  );
}

function Stats() {
  return (
    <section id="numeri" className="band">
      <h2>Il distretto in cifre</h2>
      <div className="stats">
        {PH_DATA.stats.map((x, i) => (
          <div className={i === 0 ? "stat big" : "stat"} key={x.l}>
            <b>{x.v}</b>
            <span>{x.l}</span>
            <small>{cite(x.s, x.y)}</small>
          </div>
        ))}
      </div>
      <p className="note">Le cifre arrivano da fonti e anni diversi: il confronto tra una e l'alta va fatto con cautela. L'export, per esempio, è 2,8 miliardi nella stima più recente e 2,66 nel rapporto IRPET del 2023.</p>
    </section>
  );
}

function Steps() {
  return (
    <section id="ciclo" className="wrap">
      <h2>Dalla fibra al capo, in sei fasi</h2>
      <p className="intro">A Prato le fasi stanno a pochi chilometri l'una dall'alta. Nel cardato, la lana di recupero viene selezionata, igienizzata, tagliata e sfilacciata prima di tornare filato.</p>
      <ol className="steps">
        {PH_DATA.steps.map((x) => (
          <li key={x.t}>
            <h3>{x.t}</h3>
            <p>{x.d}</p>
          </li>
        ))}
      </ol>
      <p className="note">Il marchio Cardato Recycled, nato a Prato nel 2014, richiede tessuti prodotti nel distretto con almeno il 65% di materiale riciclato.</p>
    </section>
  );
}

function Congiuntura() {
  const max = Math.max(...PH_DATA.variazioni.map((x) => Math.abs(x.v)));
  const cats = ["Tutte", ...new Set(PH_DATA.aziende.map((a) => a.c))];
  const [cat, setCat] = useState("Tutte");
  const filtered = cat === "Tutte" ? PH_DATA.aziende : PH_DATA.aziende.filter((a) => a.c === cat);

  return (
    <section id="congiuntura" className="wrap">
      <h2>Un periodo difficile, con segnali diversi</h2>
      <p className="intro">Variazioni percentuali rispetto allo stesso periodo dell'anno prima. Ogni barra riporta il suo periodo.</p>
      <div className="chart">
        {PH_DATA.variazioni.map((x) => {
          const w = Math.max(Math.abs(x.v) / max * 50, 0.6);
          const pos = x.v > 0;
          return (
            <div className="row" key={x.p}>
              <div className="lab"><strong>{x.l}</strong> <span>{x.p}</span></div>
              <div className="track">
                <i className={`bar ${pos ? "up" : "dn"}`} style={{ width: `${w}%`, [pos ? "left" : "right"]: "50%" }} />
              </div>
              <div className={`val ${pos ? "up" : "dn"}`}>{fmt(x.v)}</div>
            </div>
          );
        })}
      </div>
      <p className="note">Il pronto moda cresce mentre filati e tessuti calano. Prato è la città italiana con più imprese a conduzione straniera, e nel pronto moda la maggior parte della manodopera è di origine immigrata.</p>
    </section>
  );
}

function Aziende() {
  const cats = ["Tutte", ...new Set(PH_DATA.aziende.map((a) => a.c))];
  const [cat, setCat] = useState("Tutte");
  const filtered = cat === "Tutte" ? PH_DATA.aziende : PH_DATA.aziende.filter((a) => a.c === cat);

  return (
    <section id="aziende" className="wrap">
      <h2>Le aziende</h2>
      <p className="warn">Elenco preliminare di 24 realtà, raccolto da un osservatorio sul distretto e non ancora verificato. Prima di pubblicarlo come directory, controlla ogni scheda con visura camerale o con l'azienda.</p>
      <div id="filters" className="filters" role="group" aria-label="Filtra per categoria">
        {cats.map((c, i) => (
          <button
            type="button"
            key={c}
            aria-pressed={i === 0}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <ul id="companies" className="companies">
        {filtered.map((a) => (
          <li key={a.n}>
            <h3>{a.n}</h3>
            <p>{a.d}</p>
            <small>{a.c} · {a.m}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Fonti() {
  return (
    <section id="fonti" className="wrap">
      <h2>Fonti</h2>
      <ul className="sources">
        {Object.keys(PH_DATA.sources).map((k) => (
          <li key={k}>{cite(k)}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>PratoHub è un progetto di Italy Circular Fashion. Dati in <code>data.ts</code>: per aggiornare una cifra, cambia il valore e la fonte.</p>
    </footer>
  );
}

export function App() {
  return (
    <>
      <header className="top">
        <a className="brand" href="#top">PratoHub</a>
        <nav aria-label="Sezioni">
          <a href="#numeri">Numeri</a>
          <a href="#ciclo">Ciclo</a>
          <a href="#congiuntura">Congiuntura</a>
          <a href="#aziende">Aziende</a>
          <a href="#fonti">Fonti</a>
        </nav>
      </header>
      <main id="top">
        <Hero />
        <Stats />
        <Steps />
        <Congiuntura />
        <Aziende />
        <Fonti />
      </main>
      <Footer />
    </>
  );
}
