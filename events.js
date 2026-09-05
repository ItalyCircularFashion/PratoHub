import { navigation } from './navigation.service.js';
import { interaction } from './interaction.service.js';
import { knowledgeGraph } from './knowledge-graph.service.js';
import { auth } from './auth.js';
import { session } from './session.service.js';
import { permissions } from './permissions.js';
import { components } from './ui.js';
import { commentService } from './comment.service.js';
import { discussions } from './discussions.data.js';
import { questions } from './questions.data.js';
import { events } from './events.data.js';
import { experts } from './experts.data.js';
import { staff } from './articles.data.js';
import { articles } from './articles.data.js';
import { comments } from './comments.data.js';
import { notifications } from './notifications.data.js';
import { polls } from './polls.data.js';
import { formatRelativeTime, formatDate, formatCompactNumber } from './format.js';
import { renderEventCard, renderEventCardFull, renderStatStrip } from './card.renderer.js';

export function initEvents(){
/* ============================================================
   EVENTS.JS — page-specific composition for events.html.
   ============================================================ */



const events = events || [];

navigation.mountBreadcrumbs('evBreadcrumbs', [
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

interaction.wireSearchFilter('#evSearch', '#evGrid', '.event-card-full');
interaction.wireChipFilter('#evTypeChips', '#evGrid', '.event-card-full', 'type');
interaction.wireSortSelect('#evSort', '#evGrid', {
  date:  (a,b) => Number(a.dataset.day||0) - Number(b.dataset.day||0),
  alpha: (a,b) => (a.dataset.title||'').localeCompare(b.dataset.title||''),
});
}