/* ============================================================
   EVENTS.JS — page-specific composition for events.html.
   ============================================================ */

const events = FDM.data.events || [];

FDM.navigation.mountBreadcrumbs('evBreadcrumbs', [
  { label:'Home', href:'index.html' },
  { label:'Events' },
]);

const typeCounts = events.reduce((a,e)=>{ a[e.type]=(a[e.type]||0)+1; return a; }, {});
document.getElementById('evStats').appendChild(renderStatStrip([
  { value:events.filter(e=>!e.past).length, label:'Upcoming' },
  { value:Object.keys(typeCounts).length, label:'Event Types' },
  { value:events.filter(e=>e.type==='Webinar').length, label:'Webinars' },
  { value:events.filter(e=>e.type==='Trade Show').length, label:'Trade Shows' },
]));

// Render all events; sorted by day ascending by default.
const sorted = [...events].sort((a,b) => Number(a.day) - Number(b.day));
document.getElementById('evGrid').append(...sorted.map(renderEventCardFull));

FDM.interaction.wireSearchFilter('#evSearch', '#evGrid', '.event-card-full');
FDM.interaction.wireChipFilter('#evTypeChips', '#evGrid', '.event-card-full', 'type');
FDM.interaction.wireSortSelect('#evSort', '#evGrid', {
  date:  (a,b) => Number(a.dataset.day||0) - Number(b.dataset.day||0),
  alpha: (a,b) => (a.dataset.title||'').localeCompare(b.dataset.title||''),
});
