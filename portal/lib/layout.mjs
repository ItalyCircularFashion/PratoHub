import { BASE, ORIGIN, navItems, escapeHtml as e, url, safeExternal } from './core.mjs';

export function link(path, text, className = '') { return `<a href="${url(path)}"${className ? ` class="${e(className)}"` : ''}>${e(text)}</a>`; }
export function external(href, text, className = '') { return `<a href="${safeExternal(href)}" target="_blank" rel="noopener noreferrer"${className ? ` class="${e(className)}"` : ''}>${e(text)} <span aria-hidden="true">↗</span><span class="sr-only"> (sito esterno, nuova scheda)</span></a>`; }
export function sources(items) { return `<ol class="source-list">${items.map(source => `<li>${external(source.url, source.label)}</li>`).join('')}</ol>`; }
export function crumbs(items = []) { return `<nav class="breadcrumbs" aria-label="Percorso">${link('', 'Home')}<span aria-hidden="true">/</span>${items.map((item, index) => item.path ? `${link(item.path, item.label)}<span aria-hidden="true">/</span>` : `<span${index === items.length - 1 ? ' aria-current="page"' : ''}>${e(item.label)}</span>`).join('')}</nav>`; }
export function intro({ label, title, description, aside = '' }) { return `<header class="page-heading"><div><p class="eyebrow">${e(label)}</p><h1>${e(title)}</h1><p class="lead">${e(description)}</p></div>${aside ? `<div class="heading-aside">${aside}</div>` : ''}</header>`; }
export function status(title, text, label = 'Stato del servizio') { return `<aside class="notice"><p class="eyebrow">${e(label)}</p><h2>${e(title)}</h2><p>${e(text)}</p></aside>`; }
export function layout({ path = '', title, description, content, section = '', noindex = false, scripts = [] }) {
  const canonical = ORIGIN + url(path);
  return `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(title)}${path ? ' · PratoHub' : ''}</title>
<meta name="description" content="${e(description)}">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src https://ecobalyse.beta.gouv.fr; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${section === 'article' ? 'article' : 'website'}">
<meta property="og:title" content="${e(title)}">
<meta property="og:description" content="${e(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="PratoHub">
<meta property="og:locale" content="it_IT">
<meta name="theme-color" content="#12231f">
${noindex ? '<meta name="robots" content="noindex,follow">' : ''}
<link rel="icon" type="image/svg+xml" href="${url('assets/portal/icon.svg')}">
<link rel="stylesheet" href="${url('assets/portal/main.css')}">
<link rel="stylesheet" href="${url('assets/portal/mobile.css')}" media="(max-width: 767.98px)">
<script src="${url('assets/portal/main.js')}" defer></script>
${scripts.map(script => `<script type="module" src="${url(`assets/portal/${script}`)}"></script>`).join('\n')}
</head>
<body data-section="${e(section)}">
<a class="skip-link" href="#main">Vai al contenuto</a>
<div class="topline"><div class="wrap"><span>PRATO · TESSILE · CULTURA INDUSTRIALE</span>${link('progetto/', 'Il progetto e le fonti')}</div></div>
<header class="site-header wrap">
<a class="brand" href="${BASE}" aria-label="PratoHub, homepage"><span class="brand-mark" aria-hidden="true">p<span>h</span></span><span><strong>PratoHub<span class="brand-dot">.</span></strong><small>Il distretto, in connessione.</small></span></a>
<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">Menu <span aria-hidden="true">+</span></button>
<nav id="primary-nav" class="primary-nav" aria-label="Navigazione principale">${navItems.map(([target, label]) => `<a href="${url(target)}"${path.startsWith(target) ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav>
</header>
<main id="main" class="wrap" tabindex="-1">${content}</main>
<footer class="site-footer"><div class="wrap footer-grid"><div class="footer-brand"><strong>PratoHub.</strong><p>Conoscere il tessile.<br>Collegare le competenze.</p><span>Un progetto Italy Circular Fashion</span></div><div><h2>Esplora</h2>${link('news/', 'News e approfondimenti')}${link('aziende/', 'Directory aziende')}${link('market/', 'Fonti di mercato')}</div><div><h2>Partecipa e scopri</h2>${link('community/discussions/', 'Discussioni')}${link('community/questions/', 'Domande e risposte')}${link('events/', 'Calendari eventi')}${link('ecobalyse/', 'Ecobalyse')}</div><div><h2>Trasparenza</h2>${link('progetto/', 'Metodo e stato dei servizi')}${link('privacy/', 'Privacy e servizi esterni')}<p>Fonti esplicite. Nessuna adesione aziendale implicita.</p></div></div><div class="wrap footer-bottom"><span>PratoHub · Edizione pubblica italiana</span><span>Nessuna quotazione o attività sociale simulata.</span></div></footer>
</body>
</html>\n`;
}
