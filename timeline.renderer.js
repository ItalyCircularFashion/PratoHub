/* ============================================================
   TIMELINE RENDERER
   renderers/timeline.renderer.js
   ============================================================ */

function el(h){ const t=document.createElement('template'); t.innerHTML=h.trim(); return t.content.firstChild; }

/** @param {Array} events - [{date, label, note}], chronological */
export function renderTimeline(events){
  return el(`
    <div class="timeline">
      ${events.map(e => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-date">${e.date}</div>
            <div class="timeline-label">${e.label}</div>
            ${e.note ? `<div class="timeline-note">${e.note}</div>` : ''}
          </div>
        </div>`).join('')}
    </div>`);
}
