import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Link } from './components';

describe('internal Link', () => {
  it('forwards semantic attributes while preserving internal hash navigation', () => {
    const html = renderToStaticMarkup(<Link to="/intelligence?category=normative" className="active" aria-current="page" lang="it">Normative</Link>);
    expect(html).toContain('href="#/intelligence?category=normative"');
    expect(html).toContain('class="active"');
    expect(html).toContain('aria-current="page"');
    expect(html).toContain('lang="it"');
  });

  it('keeps accessible descriptions and escapes literal link text', () => {
    const html = renderToStaticMarkup(<Link to="/brief" aria-label="Apri il Brief" aria-describedby="brief-hint">{'<TEST CQ>'}</Link>);
    expect(html).toContain('href="#/brief"');
    expect(html).toContain('aria-label="Apri il Brief"');
    expect(html).toContain('aria-describedby="brief-hint"');
    expect(html).toContain('&lt;TEST CQ&gt;');
  });
});
