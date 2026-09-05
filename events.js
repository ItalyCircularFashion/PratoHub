import { navigation } from './navigation.service.js';
import { interaction } from './interaction.service.js';
import { events } from './events.data.js';
import { renderEventCardFull, renderStatStrip } from './card.renderer.js';

/* ============================================================
   EVENTS.JS — page-specific composition for events.html.
   ============================================================ */

const eventsData = events || [];

export function initEvents(){

navigation.mountBreadcrumbs('evBreadcrumbs', [
  { label:'Home', href:'index.html' },
  { label:'Events' },
]);

const typeCounts = eventsData.reduce((a,e)=>{ a[e.type]=(a[e.type]||0)+1; return a; }, {});
document.getElementById('evStats').appendChild(renderStatStrip([
  { value:eventsData.filter(e=>!e.past).length, label:'Upcoming' },
  { value:Object.keys(typeCounts).length, label:'Event Types' },
  { value:eventsData.filter(e=>e.type==='Webinar').length, label:'Webinars' },
  { value:eventsData.filter(e=>e.type==='Trade Show').length, label:'Trade Shows' },
]));

// Render all events; sorted by day ascending by default.
const sorted = [...eventsData].sort((a,b) => Number(a.day) - Number(b.day));
document.getElementById('evGrid').append(...sorted.map(renderEventCardFull));

interaction.wireSearchFilter('#evSearch', '#evGrid', '.event-card-full');
interaction.wireChipFilter('#evTypeChips', '#evGrid', '.event-card-full', 'type');
interaction.wireSortSelect('#evSort', '#evGrid', {
  date:  (a,b) => Number(a.dataset.day||0) - Number(b.dataset.day||0),
  alpha: (a,b) => (a.dataset.title||'').localeCompare(b.dataset.title||''),
});

}
