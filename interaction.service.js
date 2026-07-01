/* ============================================================
   INTERACTION SERVICE
   assets/services/interaction.service.js
   Reveal-on-scroll, chip filters, pagination, search-bar wiring,
   and the newsletter form. Every init is null-safe.
   ============================================================ */
window.FDM = window.FDM || {};

function initReveal(){
  const revealEls = document.querySelectorAll('.reveal');
  if(!revealEls.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('is-visible'); });
  }, {threshold:.12});
  revealEls.forEach(e => io.observe(e));
}
function initChipFilters(){
  document.querySelectorAll('.chips').forEach(group => {
    group.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
      group.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
    }));
  });
}
function initNewsletterForm(){
  const form = document.querySelector('.nl-form');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Subscribed ✓';
    e.target.querySelector('input').value = '';
  });
}
function initPagination(){
  document.querySelectorAll('.pagination').forEach(group => {
    group.querySelectorAll('button[data-page]').forEach(b => b.addEventListener('click', () => {
      if(b.disabled) return;
      group.querySelectorAll('button[data-page]').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      group.dispatchEvent(new CustomEvent('pagechange', {detail:{page:b.dataset.page}, bubbles:true}));
    }));
  });
}
function initSearchBars(){
  document.querySelectorAll('.search-bar').forEach(bar => {
    bar.addEventListener('submit', (e) => e.preventDefault());
  });
}
function wireSearchFilter(formSelector, itemsContainerSelector, itemSelector){
  const form = document.querySelector(formSelector);
  const container = document.querySelector(itemsContainerSelector);
  if(!form || !container) return;
  const input = form.querySelector('input');
  const apply = () => {
    const q = input.value.trim().toLowerCase();
    container.querySelectorAll(itemSelector).forEach(item => {
      const hay = [item.dataset.title, item.dataset.type, item.dataset.category, item.textContent].filter(Boolean).join(' ').toLowerCase();
      item.style.display = (!q || hay.includes(q)) ? '' : 'none';
    });
  };
  input.addEventListener('input', apply);
  form.addEventListener('submit', (e) => { e.preventDefault(); apply(); });
}
/** Generic client-side sort: `compareFns` keyed by the <select> option value. */
function wireSortSelect(selectSelector, itemsContainerSelector, compareFns){
  const select = document.querySelector(selectSelector);
  const container = document.querySelector(itemsContainerSelector);
  if(!select || !container) return;
  select.addEventListener('change', () => {
    const fn = compareFns[select.value];
    if(!fn) return;
    [...container.children].sort(fn).forEach(node => container.appendChild(node));
  });
}
/** Generic chip-driven filter: clicking a chip shows only items whose data-{dataAttr} matches (an "All" chip clears it). */
function wireChipFilter(chipsSelector, itemsContainerSelector, itemSelector, dataAttr){
  const chips = document.querySelector(chipsSelector);
  const container = document.querySelector(itemsContainerSelector);
  if(!chips || !container) return;
  chips.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const wanted = chip.textContent.trim().toLowerCase();
      container.querySelectorAll(itemSelector).forEach(item => {
        const val = (item.dataset[dataAttr] || '').toLowerCase();
        item.style.display = (wanted === 'all' || val === wanted) ? '' : 'none';
      });
    });
  });
}
/** Category-filter convenience wrapper, kept for existing call sites. */
function wireChipCategoryFilter(chipsSelector, itemsContainerSelector, itemSelector){
  wireChipFilter(chipsSelector, itemsContainerSelector, itemSelector, 'category');
}

/** One delegated listener for every .vote-control on the page — comments, discussions, anything. */
function initVoteControls(){
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.vote-btn');
    if(!btn || btn.disabled) return;
    const control = btn.closest('.vote-control');
    const { targetType, targetId } = control.dataset;
    if(!targetType || !targetId) return;
    const delta = FDM.session.castVote(targetType, targetId, btn.dataset.dir);
    const countEl = control.querySelector('.vote-count');
    countEl.textContent = Number(countEl.textContent) + delta;
    control.querySelectorAll('.vote-btn').forEach(b => b.classList.remove('is-active'));
    const state = FDM.session.getVoteState(targetType, targetId);
    if(state) control.querySelector(`[data-dir="${state}"]`).classList.add('is-active');
  });
}

FDM.interaction = { initReveal, initChipFilters, initNewsletterForm, initPagination, initSearchBars, wireSearchFilter, wireSortSelect, wireChipFilter, wireChipCategoryFilter, initVoteControls };

initReveal();
initChipFilters();
initNewsletterForm();
initPagination();
initSearchBars();
initVoteControls();
