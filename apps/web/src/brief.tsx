import { useRef, useState } from 'react';
import type { getCatalog } from './services/catalog';
import { Link, PageHero } from './components';
import { blankBrief, briefText, briefUnits, buildBrief, fieldLimits, validateBriefFields, type BriefErrors, type BriefValues } from './services/brief';
import { routeParams, taxonomyPath } from './services/navigation';
import { downloadText } from './ui';
type Catalog = Awaited<ReturnType<typeof getCatalog>>;

export function Brief({ catalog, route }: { catalog: Catalog; route: string }) {
  const incoming = routeParams(route).get('node') || '';
  const [values, setValues] = useState<BriefValues>(() => ({ ...blankBrief, node: taxonomyPath(incoming, catalog.taxonomy).length ? incoming : '' }));
  const [submitted, setSubmitted] = useState(false);
  const [deliveryBadInput, setDeliveryBadInput] = useState(false);
  const [notice, setNotice] = useState('');
  const errorRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLInputElement>(null);
  const update = (key: keyof BriefValues, value: string) => {
    setValues(previous => ({ ...previous, [key]: value }));
    setNotice('');
  };
  const issues = validateBriefFields(values, catalog.taxonomy, catalog.materials, { deliveryBadInput });
  const visibleErrors: BriefErrors = submitted ? issues : {};
  const errors = Object.values(visibleErrors).filter((message): message is string => typeof message === 'string');
  const preview = Object.keys(issues).length ? null : buildBrief(values, catalog.taxonomy, catalog.materials);
  const invalid = (field: keyof BriefValues) => Boolean(visibleErrors[field]) || undefined;
  const describedBy = (field: keyof BriefValues, hint?: string) => [hint, visibleErrors[field] ? `brief-${field}-error` : ''].filter(Boolean).join(' ') || undefined;
  const fieldError = (field: keyof BriefValues) => visibleErrors[field]
    ? <p id={`brief-${field}-error`} className="field-error">{visibleErrors[field]}</p>
    : null;

  function exportBrief(format: 'txt' | 'json') {
    const badInput = deliveryRef.current?.validity.badInput ?? deliveryBadInput;
    setDeliveryBadInput(badInput);
    setSubmitted(true);
    const found = validateBriefFields(values, catalog.taxonomy, catalog.materials, { deliveryBadInput: badInput });
    if (Object.keys(found).length) {
      requestAnimationFrame(() => errorRef.current?.focus());
      return;
    }
    const brief = buildBrief(values, catalog.taxonomy, catalog.materials);
    try {
      downloadText(format === 'txt' ? briefText(brief) : JSON.stringify(brief, null, 2), `pratohub-brief.${format}`, format === 'json' ? 'application/json;charset=utf-8' : undefined);
      setNotice('Download avviato. Il brief non è stato inviato a nessuno.');
    } catch { setNotice('Download non disponibile nel browser. Puoi selezionare e copiare il riepilogo.'); }
  }

  function resetFields() {
    // Native date segments may be incomplete even when input.value is already ''.
    if (deliveryRef.current) deliveryRef.current.value = '';
    setValues({ ...blankBrief });
    setDeliveryBadInput(false);
    setSubmitted(false);
    setNotice('Campi svuotati.');
  }

  return <><PageHero eyebrow="STRUMENTI / BRIEF B2B" title="Dai forma alla tua richiesta" copy="Organizza lavorazione, materiale e requisiti in un documento da condividere autonomamente con i tuoi interlocutori."/>
    <section className="section container"><p className="status-note brief-disclaimer">Solo sul tuo dispositivo. Nessun invio, account o abbinamento con aziende. I campi restano in memoria finché rimani in questa pagina: esporta il documento prima di uscire. Non inserire dati personali, segreti industriali o informazioni riservate.</p>
      <div className="workspace"><form className="brief-form" noValidate onSubmit={event => { event.preventDefault(); exportBrief('txt'); }}>
        <fieldset className="form-section"><legend>01 / Definisci il lavoro</legend>
          <label className="field">Titolo della richiesta (obbligatorio)<input id="brief-title" value={values.title} maxLength={fieldLimits.title} autoComplete="off" onChange={e => update('title', e.target.value)} placeholder="Descrivi il lavoro che stai cercando" required aria-invalid={invalid('title')} aria-describedby={describedBy('title')}/></label>
          {fieldError('title')}
          <label className="field">Lavorazione (obbligatoria)<select id="brief-node" value={values.node} onChange={e => update('node', e.target.value)} required aria-invalid={invalid('node')} aria-describedby={describedBy('node', 'taxonomy-hint')}><option value="">Seleziona dalla filiera</option>{catalog.taxonomy.filter(n => n.level === 1).map(macro => <optgroup label={macro.label} key={macro.code}>{catalog.taxonomy.filter(n => n.code === macro.code || taxonomyPath(n.code, catalog.taxonomy)[0]?.code === macro.code && n.level === 3).map(node => <option key={node.code} value={node.code}>{node.level === 1 ? `${node.label} — area generale` : node.label}</option>)}</optgroup>)}{catalog.taxonomy.filter(n => n.level === 2 && n.code === values.node).map(n => <option key={n.code} value={n.code}>{n.label}</option>)}</select></label>
          <p id="taxonomy-hint" className="field-hint">La classificazione è iniziale e non esaustiva. Puoi scegliere un’area generale se la specializzazione non è presente.</p>
          {fieldError('node')}
          <label className="field">Materiale<select id="brief-material" value={values.material} onChange={e => update('material', e.target.value)} aria-invalid={invalid('material')} aria-describedby={describedBy('material')}><option value="">Non specificato</option>{catalog.materials.map(m => <option key={m.code} value={m.code}>{m.label}</option>)}</select></label>
          {fieldError('material')}
        </fieldset>
        <fieldset className="form-section"><legend>02 / Quantità e requisiti</legend><div className="grid-two">
          <div><label className="field">Quantità richiesta<input id="brief-quantity" inputMode="decimal" value={values.quantity} maxLength={24} onChange={e => update('quantity', e.target.value)} placeholder="Facoltativa" aria-invalid={invalid('quantity')} aria-describedby={describedBy('quantity', 'quantity-hint')}/></label>{fieldError('quantity')}</div>
          <div><label className="field">Unità di misura<select id="brief-unit" value={values.unit} onChange={e => update('unit', e.target.value)} aria-invalid={invalid('unit')} aria-describedby={describedBy('unit')}>{briefUnits.map(unit => <option key={unit} value={unit}>{unit}</option>)}</select></label>{fieldError('unit')}</div>
        </div><p id="quantity-hint" className="field-hint">Nessuna conversione automatica: indica quantità e unità adatte alla lavorazione.</p>
          <label className="field">Data richiesta<input id="brief-delivery" ref={deliveryRef} type="date" value={values.delivery} onInput={event => { setDeliveryBadInput(event.currentTarget.validity.badInput); setNotice(''); }} onChange={e => update('delivery', e.target.value)} aria-invalid={invalid('delivery')} aria-describedby={describedBy('delivery')}/></label>
          {fieldError('delivery')}
          <label className="field">Note e requisiti tecnici<textarea id="brief-notes" rows={6} maxLength={fieldLimits.notes} value={values.notes} onChange={e => update('notes', e.target.value)} placeholder="Descrivi requisiti, campionatura o controlli da concordare. Non inserire dati riservati." aria-invalid={invalid('notes')} aria-describedby={describedBy('notes', 'notes-count')}/></label>
          <span id="notes-count" className="field-hint">{values.notes.length} / {fieldLimits.notes} caratteri</span>
          {fieldError('notes')}
        </fieldset>
        {errors.length > 0 && <div className="form-errors" role="alert" tabIndex={-1} ref={errorRef}><h2>Controlla i campi</h2><ul>{errors.map(error => <li key={error}>{error}</li>)}</ul></div>}
        <div className="form-actions"><button className="button button-primary" type="submit">Scarica brief TXT ↓</button><button className="button button-secondary" type="button" onClick={() => exportBrief('json')}>Scarica JSON ↓</button><button className="button button-secondary" type="button" onClick={resetFields}>Svuota campi</button></div><p className="share-message" role="status">{notice}</p>
      </form>
      <aside className="brief-preview" aria-label="Riepilogo del brief"><p className="eyebrow">ANTEPRIMA / DOCUMENTO LOCALE</p><h2>La richiesta, in chiaro.</h2>{preview ? <pre className="brief-preview-content">{briefText(preview)}</pre> : <p>{issues.title || issues.node ? 'Compila titolo e lavorazione per visualizzare il documento. I campi facoltativi restano esplicitamente non specificati.' : 'Correggi i campi non validi per visualizzare il documento.'}</p>}<p className="field-hint">Un brief non è un ordine, un preventivo o una disponibilità produttiva confermata.</p><Link to="/privacy" className="text-link">Come sono trattati i dati →</Link></aside></div>
    </section></>;
}
