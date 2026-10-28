import { useRef, useState } from 'react';
import type { getCatalog } from './services/catalog';
import { Link, PageHero } from './components';
import { blankBrief, briefText, briefUnits, buildBrief, fieldLimits, validateBrief, type BriefValues } from './services/brief';
import { routeParams, taxonomyPath } from './services/navigation';
import { downloadText } from './ui';
type Catalog = Awaited<ReturnType<typeof getCatalog>>;

export function Brief({ catalog, route }: { catalog: Catalog; route: string }) {
  const incoming = routeParams(route).get('node') || '';
  const [values, setValues] = useState<BriefValues>(() => ({ ...blankBrief, node: taxonomyPath(incoming, catalog.taxonomy).length ? incoming : '' }));
  const [errors, setErrors] = useState<string[]>([]);
  const [notice, setNotice] = useState('');
  const errorRef = useRef<HTMLDivElement>(null);
  const update = (key: keyof BriefValues, value: string) => { setValues(previous => ({ ...previous, [key]: value })); setErrors([]); setNotice(''); };
  const issues = validateBrief(values, catalog.taxonomy, catalog.materials);
  const preview = issues.length ? null : buildBrief(values, catalog.taxonomy, catalog.materials);
  function exportBrief(format: 'txt' | 'json') {
    const found = validateBrief(values, catalog.taxonomy, catalog.materials);
    if (found.length) { setErrors(found); requestAnimationFrame(() => errorRef.current?.focus()); return; }
    const brief = buildBrief(values, catalog.taxonomy, catalog.materials);
    try {
      downloadText(format === 'txt' ? briefText(brief) : JSON.stringify(brief, null, 2), `pratohub-brief.${format}`, format === 'json' ? 'application/json;charset=utf-8' : undefined);
      setNotice('Download avviato. Il brief non è stato inviato a nessuno.');
    } catch { setNotice('Download non disponibile nel browser. Puoi selezionare e copiare il riepilogo.'); }
  }
  return <><PageHero eyebrow="STRUMENTI / BRIEF B2B" title="Dai forma alla tua richiesta" copy="Organizza lavorazione, materiale e requisiti in un documento da condividere autonomamente con i tuoi interlocutori."/>
    <section className="section container"><p className="status-note brief-disclaimer">Solo sul tuo dispositivo. Nessun invio, account o abbinamento con aziende. I campi restano in memoria finché rimani in questa pagina: esporta il documento prima di uscire. Non inserire dati personali, segreti industriali o informazioni riservate.</p>
      <div className="workspace"><form className="brief-form" noValidate onSubmit={event => { event.preventDefault(); exportBrief('txt'); }}>
        <fieldset className="form-section"><legend>01 / Definisci il lavoro</legend>
          <label className="field">Titolo della richiesta (obbligatorio)<input value={values.title} maxLength={fieldLimits.title} autoComplete="off" onChange={e => update('title', e.target.value)} placeholder="Descrivi il lavoro che stai cercando" required/></label>
          <label className="field">Lavorazione (obbligatoria)<select value={values.node} onChange={e => update('node', e.target.value)} required><option value="">Seleziona dalla filiera</option>{catalog.taxonomy.filter(n => n.level === 1).map(macro => <optgroup label={macro.label} key={macro.code}>{catalog.taxonomy.filter(n => n.code === macro.code || taxonomyPath(n.code, catalog.taxonomy)[0]?.code === macro.code && n.level === 3).map(node => <option key={node.code} value={node.code}>{node.level === 1 ? `${node.label} — area generale` : node.label}</option>)}</optgroup>)}{catalog.taxonomy.filter(n => n.level === 2 && n.code === incoming).map(n => <option key={n.code} value={n.code}>{n.label}</option>)}</select></label>
          <p className="field-hint">La classificazione è iniziale e non esaustiva. Puoi scegliere un’area generale se la specializzazione non è presente.</p>
          <label className="field">Materiale<select value={values.material} onChange={e => update('material', e.target.value)}><option value="">Non specificato</option>{catalog.materials.map(m => <option key={m.code} value={m.code}>{m.label}</option>)}</select></label>
        </fieldset>
        <fieldset className="form-section"><legend>02 / Quantità e requisiti</legend><div className="grid-two">
          <label className="field">Quantità richiesta<input inputMode="decimal" value={values.quantity} maxLength={24} onChange={e => update('quantity', e.target.value)} placeholder="Facoltativa" aria-describedby="quantity-hint"/></label>
          <label className="field">Unità di misura<select value={values.unit} onChange={e => update('unit', e.target.value)}>{briefUnits.map(unit => <option key={unit} value={unit}>{unit}</option>)}</select></label>
        </div><p id="quantity-hint" className="field-hint">Nessuna conversione automatica: indica quantità e unità adatte alla lavorazione.</p>
          <label className="field">Data richiesta<input type="date" value={values.delivery} onChange={e => update('delivery', e.target.value)}/></label>
          <label className="field">Note e requisiti tecnici<textarea rows={6} maxLength={fieldLimits.notes} value={values.notes} onChange={e => update('notes', e.target.value)} placeholder="Descrivi requisiti, campionatura o controlli da concordare. Non inserire dati riservati."/></label>
          <span className="field-hint">{values.notes.length} / {fieldLimits.notes} caratteri</span>
        </fieldset>
        {errors.length > 0 && <div className="form-errors" role="alert" tabIndex={-1} ref={errorRef}><h2>Controlla i campi</h2><ul>{errors.map(error => <li key={error}>{error}</li>)}</ul></div>}
        <div className="form-actions"><button className="button button-primary" type="submit">Scarica brief TXT ↓</button><button className="button button-secondary" type="button" onClick={() => exportBrief('json')}>Scarica JSON ↓</button><button className="button button-secondary" type="button" onClick={() => { setValues({ ...blankBrief }); setErrors([]); setNotice('Campi svuotati.'); }}>Svuota campi</button></div><p className="share-message" role="status">{notice}</p>
      </form>
      <aside className="brief-preview" aria-label="Riepilogo del brief"><p className="eyebrow">ANTEPRIMA / DOCUMENTO LOCALE</p><h2>La richiesta, in chiaro.</h2>{preview ? <pre className="brief-preview-content">{briefText(preview)}</pre> : <p>Compila titolo e lavorazione per visualizzare il documento. I campi facoltativi restano esplicitamente non specificati.</p>}<p className="field-hint">Un brief non è un ordine, un preventivo o una disponibilità produttiva confermata.</p><Link to="/privacy" className="text-link">Come sono trattati i dati →</Link></aside></div>
    </section></>;
}
