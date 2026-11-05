import { useId, useRef, useState } from 'react';
import { Link } from './components';
import { taxonomy } from './data/catalog';
import {
  filterGlossaryTerms,
  formatLearningSource,
  getLearningMacroareas,
  learningFamilies,
  learningOrientationNote,
  learningTaxonomyRoute,
  textileGlossary,
} from './data/learning';
import './learning.css';

export function FilieraLearning() {
  const headingId = useId();
  return (
    <section className="learning-map learning-shell" aria-labelledby={headingId} lang="it">
      <header className="learning-heading">
        <p className="learning-eyebrow">Una guida per orientarsi</p>
        <h2 className="learning-title" id={headingId}>Leggere la filiera</h2>
        <p className="learning-intro">Dalla materia alle competenze che la trasformano: sei famiglie editoriali per esplorare le macroaree del catalogo.</p>
      </header>
      <p className="learning-orientation">{learningOrientationNote}</p>
      <ul className="learning-families">
        {learningFamilies.map(family => (
          <li className="learning-family" key={family.id}>
            <h3 className="learning-family-title">{family.title}</h3>
            <p className="learning-family-copy">{family.description}</p>
            <ul className="learning-areas">
              {getLearningMacroareas(family).map(node => (
                <li className="learning-area" key={node.code}>
                  <Link className="learning-area-link" to={learningTaxonomyRoute(node.code)}>
                    <span className="learning-code">{node.code}</span>
                    <span className="learning-area-label">{node.label}</span>
                    <span className="learning-link-mark" aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TextileGlossary() {
  const headingId = useId();
  const searchId = useId();
  const hintId = useId();
  const countId = useId();
  const searchRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const results = filterGlossaryTerms(query);

  return (
    <section className="learning-glossary learning-shell" aria-labelledby={headingId} lang="it">
      <header className="learning-heading">
        <p className="learning-eyebrow">Le parole del tessile</p>
        <h2 className="learning-title" id={headingId}>Glossario tessile</h2>
        <p className="learning-intro">Definizioni brevi per leggere strutture e lavorazioni. Le voci riguardano soprattutto la tessitura ortogonale: non descrivono tutte le tecnologie della filiera.</p>
      </header>
      <form className="learning-search" role="search" aria-label="Ricerca nel glossario tessile" onSubmit={event => event.preventDefault()} onReset={event => {
        event.preventDefault();
        setQuery('');
        searchRef.current?.focus();
      }}>
        <label className="learning-search-label" htmlFor={searchId}>Cerca un termine tecnico</label>
        <div className="learning-search-controls">
          <input className="learning-search-input" ref={searchRef} id={searchId} type="search" value={query} onChange={event => setQuery(event.target.value)} aria-describedby={`${hintId} ${countId}`} autoComplete="off" placeholder="Es. ordito, taffettà, TX-06" />
          <button className="learning-reset" type="reset">Azzera ricerca</button>
        </div>
        <p className="learning-search-hint" id={hintId}>Ricerca locale per termine, sinonimo, definizione o macroarea, senza distinzione fra accenti e maiuscole.</p>
      </form>
      <p className="learning-count" id={countId} role="status" aria-live="polite" aria-atomic="true">{results.length} {results.length === 1 ? 'termine tecnico' : 'termini tecnici'} su {textileGlossary.length} nel glossario. Conteggio distinto dagli articoli.</p>
      {results.length === 0 ? (
        <p className="learning-empty">Nessun termine trovato. Prova un’altra parola oppure azzera la ricerca per rivedere tutte le voci.</p>
      ) : (
        <dl className="learning-terms">
          {results.map(entry => {
            const node = taxonomy.find(item => item.code === entry.macroareaCode);
            return (
              <div className="learning-term" key={entry.id}>
                <dt className="learning-term-name">{entry.term}</dt>
                <dd className="learning-term-detail">
                  <p className="learning-definition">{entry.definition}</p>
                  <p className="learning-aliases">Altre parole utili: {entry.aliases.join(', ')}.</p>
                  {node && <Link className="learning-related" to={learningTaxonomyRoute(node.code)}>{node.code} · {node.label}<span className="learning-link-mark" aria-hidden="true"> ↗</span></Link>}
                  <details className="learning-source">
                    <summary className="learning-source-toggle">Fonte manuale</summary>
                    <p className="learning-source-citation">{formatLearningSource(entry.source)}</p>
                  </details>
                </dd>
              </div>
            );
          })}
        </dl>
      )}
      <p className="learning-source-note">Definizioni editoriali originali, verificate sul manuale indicato in ogni voce. Le pagine citate sono quelle del PDF, contate dalla prima pagina, e possono differire dalla numerazione a stampa. Il glossario non è un elenco di aziende né una misura dell’offerta del distretto.</p>
    </section>
  );
}
