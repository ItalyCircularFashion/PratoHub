import { useState } from 'react';
import type { TaxonomyNode } from './services/catalog';
import { Link } from './components';
import { routeWith } from './services/navigation';

export function navigate(to: string, replace = false) {
  if (replace) {
    window.history.replaceState(null, '', `#${to}`);
    window.dispatchEvent(new Event('hashchange'));
  } else window.location.hash = to;
}

export function downloadText(text: string, filename: string, type = 'text/plain;charset=utf-8') {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function ShareRoute({ route, label = 'Condividi questa ricerca' }: { route: string; label?: string }) {
  const [message, setMessage] = useState('');
  const url = `${window.location.origin}${window.location.pathname}#${route}`;
  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setMessage('Link copiato.');
    } catch { setMessage('Copia il link dal campo qui sopra: gli appunti non sono disponibili.'); }
  }
  return <details className="share-tools"><summary>{label}</summary><label className="share-field">Link pubblico<input readOnly value={url} onFocus={e => e.target.select()}/></label><button type="button" className="button button-secondary" onClick={copy}>Copia link</button><p className="share-message" role="status">{message}</p></details>;
}

export function TaxonomyPath({ path }: { path: TaxonomyNode[] }) {
  if (!path.length) return null;
  return <nav className="taxonomy-path" aria-label="Percorso nella filiera"><ol>{path.map(node => <li key={node.code}><Link to={routeWith('/filiera', { node: node.code })}>{node.label}</Link></li>)}</ol></nav>;
}
