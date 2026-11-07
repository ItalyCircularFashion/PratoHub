/* Progressive enhancement: all content and category URLs work without JS. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menu && nav) {
    const close = () => { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); };
    menu.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(expanded));
      nav.classList.toggle('is-open', expanded);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { close(); menu.focus(); }
    });
    window.matchMedia('(min-width: 1101px)').addEventListener('change', close);
  }
  const panel = document.querySelector('[data-search-controls]');
  const list = document.querySelector('[data-list]');
  if (!panel || !list) return;
  const items = Array.from(list.querySelectorAll('[data-item]'));
  const input = panel.querySelector('#filter-query');
  const sort = panel.querySelector('#sort-order');
  const count = panel.querySelector('#result-count');
  const empty = document.querySelector('[data-empty]');
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('it');
  input.value = (new URLSearchParams(window.location.search).get('q') || '').slice(0, 120);
  const apply = (saveQuery = true) => {
    const words = normalize(input.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const item of items) {
      item.hidden = !words.every(word => normalize(item.dataset.search).includes(word));
      if (!item.hidden) visible += 1;
    }
    if (sort) {
      const direction = sort.value === 'desc' ? -1 : 1;
      [...items].sort((a, b) => direction * a.dataset.name.localeCompare(b.dataset.name, 'it')).forEach(item => list.append(item));
    }
    count.textContent = `${visible} ${visible === 1 ? 'risultato' : 'risultati'} su ${items.length}`;
    if (empty) empty.hidden = visible !== 0;
    if (saveQuery) {
      const location = new URL(window.location.href);
      if (input.value.trim()) location.searchParams.set('q', input.value.trim());
      else location.searchParams.delete('q');
      window.history.replaceState(null, '', location);
    }
  };
  panel.hidden = false;
  panel.querySelector('form').addEventListener('submit', event => { event.preventDefault(); apply(); });
  input.addEventListener('input', () => apply());
  if (sort) sort.addEventListener('change', () => apply());
  panel.querySelector('[data-reset]').addEventListener('click', () => {
    input.value = '';
    if (sort) sort.value = 'asc';
    apply(); input.focus();
  });
  window.addEventListener('popstate', () => { input.value = (new URLSearchParams(window.location.search).get('q') || '').slice(0, 120); apply(false); });
  apply(false);
})();

/* Quasi-4D motion — vanilla, soli transform/opacity, progressive enhancement: senza JS tutto resta visibile. */
(() => {
  'use strict';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  /* Reveal allo scroll con entrata 3D */
  const revealEls = document.querySelectorAll('.home-section, .pillar-card, .involved-card, .article-card, .company-card, .sector-list > a, .resource-row, .event-card');
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
    }
  }, { threshold: .05, rootMargin: '0px 0px -4% 0px' }) : null;
  const forceInView = () => {
    for (const el of revealEls) {
      if (el.classList.contains('is-in')) continue;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) { el.classList.add('is-in'); if (io) io.unobserve(el); }
    }
  };
  if (io) {
    let n = 0;
    for (const el of revealEls) {
      if (n % 3 === 1) el.classList.add('reveal-l'); else if (n % 3 === 2) el.classList.add('reveal-r'); else el.classList.add('reveal');
      io.observe(el); n += 1;
    }
    window.addEventListener('scroll', forceInView, { passive: true });
    window.addEventListener('load', forceInView);
    forceInView();
  } else {
    for (const el of revealEls) el.classList.add('is-in');
  }
  /* Tilt 3D + shine sulle card */
  const tilts = document.querySelectorAll('[data-tilt]');
  const fineOrCoarse = (event) => event.clientX !== undefined;
  for (const card of tilts) {
    let raf = 0;
    const onMove = (event) => {
      if (!fineOrCoarse(event)) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const px = (event.clientX - r.left) / (r.width || 1);
        const py = (event.clientY - r.top) / (r.height || 1);
        const rx = clamp((py - .5) * -10, -8, 8);
        const ry = clamp((px - .5) * 12, -10, 10);
        card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`;
        card.style.setProperty('--mx', `${px * 100}%`);
        card.style.setProperty('--my', `${py * 100}%`);
      });
    };
    const onLeave = () => { cancelAnimationFrame(raf); card.style.transform = ''; card.style.removeProperty('--mx'); card.style.removeProperty('--my'); };
    card.addEventListener('pointermove', onMove, { passive: true });
    card.addEventListener('pointerleave', onLeave);
    card.addEventListener('pointerup', onLeave);
  }
  /* Magnetic sui bottoni principali */
  for (const btn of document.querySelectorAll('[data-magnetic]')) {
    btn.addEventListener('pointermove', (event) => {
      const r = btn.getBoundingClientRect();
      const x = clamp((event.clientX - r.left - r.width / 2) / r.width, -.5, .5) * 14;
      const y = clamp((event.clientY - r.top - r.height / 2) / r.height, -.5, .5) * 10;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    }, { passive: true });
    btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  }
  /* Parallax hero: strati a profondita diversa seguono scroll + pointer */
  const hero = document.querySelector('.hero-full');
  const heroInner = document.querySelector('.hero-inner');
  if (hero && heroInner) {
    let ticking = false;
    const update = (pointerX, pointerY, scrollY) => {
      const depth = clamp(scrollY / 600, 0, 1.2);
      heroInner.style.transform = `translateY(${depth * 26}px) translateZ(0)`;
      heroInner.dataset.px = pointerX; heroInner.dataset.py = pointerY;
      ticking = false;
    };
    const queue = (x, y) => { if (!ticking) { ticking = true; window.requestAnimationFrame(() => update(x, y, window.scrollY)); } };
    hero.addEventListener('pointermove', (event) => {
      const r = hero.getBoundingClientRect();
      queue((event.clientX - r.left) / (r.width || 1) - .5, (event.clientY - r.top) / (r.height || 1) - .5);
    }, { passive: true });
    window.addEventListener('scroll', () => queue(0, 0), { passive: true });
  }
  /* Cursor trail: pool fisso, niente allocazioni nel loop */
  const POOL = 14;
  const dots = [];
  for (let i = 0; i < POOL; i += 1) {
    const dot = document.createElement('span');
    dot.className = 'trail-dot' + (i % 2 ? ' alt' : '');
    dot.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);
    dots.push({ el: dot, x: -100, y: -100, tx: -100, ty: -100 });
  }
  let idx = 0;
  let lastMove = 0;
  window.addEventListener('pointermove', (event) => {
    const now = performance.now();
    if (now - lastMove < 33) return; /* ~30fps anche su mobile */
    lastMove = now;
    const d = dots[idx % POOL]; idx += 1;
    d.tx = event.clientX; d.ty = event.clientY;
  }, { passive: true });
  const trailLoop = () => {
    let active = false;
    for (const d of dots) {
      d.x += (d.tx - d.x) * .28; d.y += (d.ty - d.y) * .28;
      if (d.tx !== -100 && Math.abs(d.tx - d.x) + Math.abs(d.ty - d.y) > 1) active = true;
      const show = d.tx !== -100 ? 1 : 0;
      if (show) { d.el.style.opacity = '.75'; d.el.style.transform = `translate(${d.x}px, ${d.y}px) scale(${clamp(1 - (performance.now() % 1000) / 4000, .35, 1)})`; }
      else d.el.style.opacity = '0';
      if (show) active = true;
    }
    if (active) window.requestAnimationFrame(trailLoop);
    else window.requestAnimationFrame(trailLoop);
  };
  window.requestAnimationFrame(trailLoop);
})();
