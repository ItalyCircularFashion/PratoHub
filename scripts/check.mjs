import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { BASE, ORIGIN, validateContent } from '../portal/lib/core.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, 'dist');
const load = async file => JSON.parse(await readFile(file, 'utf8'));
const companies = await load(path.join(root, 'portal/data/companies.json'));
const editorial = await load(path.join(root, 'portal/data/editorial.json'));
validateContent({ companies, editorial });
const release = await load(path.join(out, 'release.json'));
const failures = [];
const ensure = (condition, error) => { if (!condition) failures.push(error); };
async function walk(folder) { return (await Promise.all((await readdir(folder, { withFileTypes: true })).map(entry => entry.isDirectory() ? walk(path.join(folder, entry.name)) : path.join(folder, entry.name)))).flat(); }
const files = await walk(out);
let htmlCount = 0;
let localLinks = 0;
const knownRoutes = new Set(release.routes.map(route => path.join(out, route, route.endsWith('.html') ? '' : 'index.html')));
for (const file of files) {
  if (!file.endsWith('.html')) continue;
  htmlCount += 1;
  const html = await readFile(file, 'utf8');
  const relative = path.relative(out, file);
  const sourcePath = BASE + relative.replace(/index\.html$/, '');
  const documentURL = new URL(sourcePath, ORIGIN);
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, match => match.match(/^<script[^>]*>/i)?.[0] || '');
  for (const match of markup.matchAll(/<(?:a|script|link|img|iframe|source)\b[^>]*?\b(?:href|src)="([^"]*)"[^>]*>/gi)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (/^(?:data:|mailto:|tel:)/.test(href)) continue;
    const parsed = new URL(href, documentURL);
    if (parsed.origin !== ORIGIN) continue;
    ensure(parsed.pathname.startsWith(BASE), `${relative}: outside project base ${href}`);
    if (!parsed.pathname.startsWith(BASE)) continue;
    localLinks += 1;
    let target = path.join(out, decodeURIComponent(parsed.pathname.slice(BASE.length)));
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      await stat(target);
    } catch { failures.push(`${relative}: broken internal link ${href}`); continue; }
    if (parsed.hash && target.endsWith('.html')) {
      const targetText = await readFile(target, 'utf8');
      const id = decodeURIComponent(parsed.hash.slice(1));
      ensure(targetText.includes(`id="${id}"`), `${relative}: missing fragment ${href}`);
    }
  }
  if (!knownRoutes.has(file)) continue;
  ensure((markup.match(/<h1\b/g) || []).length === 1, `${relative}: needs exactly one H1`);
  ensure(html.includes('lang="it"'), `${relative}: missing language`);
  ensure(html.includes(`href="${ORIGIN}${sourcePath}"`) || relative === '404.html', `${relative}: missing canonical`);
  ensure(html.includes('Content-Security-Policy'), `${relative}: missing CSP`);
  ensure(!/on(?:click|load|error)\s*=/i.test(markup), `${relative}: inline event handler`);
  ensure(!/<script[^>]*>[^<\s]/i.test(html), `${relative}: inline executable script`);
  ensure(!/href="#"/.test(html), `${relative}: dead placeholder link`);
  ensure(html.includes('skip-link'), `${relative}: missing skip link`);
  if (relative.startsWith('community/')) ensure(!/<form\b|<input\b|<textarea\b/.test(markup), `${relative}: community must not collect data`);
}
for (const route of release.routes) {
  if (route === '404.html') continue;
  ensure((await readFile(path.join(out, 'sitemap.xml'), 'utf8')).includes(ORIGIN + BASE + route), `Sitemap missing ${route}`);
}
const newSources = (await walk(path.join(root, 'portal'))).filter(file => /\.(?:js|mjs|json|css)$/.test(file));
for (const file of newSources) {
  const source = await readFile(file, 'utf8');
  ensure(!/gh[pousr]_[A-Za-z0-9]{20,}|-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY-----|postgres(?:ql)?:\/\//.test(source), `Secret marker in ${file}`);
  if (file.endsWith('.js')) ensure(!/innerHTML\s*=|localStorage|document\.cookie|eval\(/.test(source), `Unsafe client sink or tracking in ${file}`);
}
ensure(!files.some(file => { const rel = path.relative(out, file).replaceAll(path.sep, '/'); return /(?:^|\/)(?:\.env|.*\.db|.*\.sqlite)(?:\/|$)/.test(rel) || /^(?:portal|scripts|node_modules)\//.test(rel); }), 'Source or private material in deploy artifact');
assert.deepEqual(failures, [], failures.join('\n'));
console.log(`STATIC PASS: ${htmlCount} HTML pages, ${release.routes.length} new routes, ${localLinks} local links, schema/privacy/CSP checks clean.`);
