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
