import { navigation } from './navigation.service.js';
import { interaction } from './interaction.service.js';
import { knowledgeGraph } from './knowledge-graph.service.js';
import { components } from './ui.js';
import { discussions } from './discussions.data.js';
import { questions } from './questions.data.js';
import { experts } from './experts.data.js';
import { staff } from './articles.data.js';
import { comments } from './comments.data.js';
import { formatCompactNumber } from './format.js';
import { renderDiscussionRow, renderStatStrip, renderUserCard, adaptQuestionForCard } from './card.renderer.js';

/* ============================================================
   COMMUNITY.JS — page-specific composition for community.html.
   ============================================================ */

function el(h){ const t=document.createElement('template'); t.innerHTML=h.trim(); return t.content.firstChild; }

const expertsData  = experts || [];
const staffData    = staff   || [];
const discsData    = discussions || [];
const qsData       = questions  || [];
const commentsData = comments   || [];

export function initCommunity(){

// ---- Breadcrumbs ----
navigation.mountBreadcrumbs('commBreadcrumbs', [
  { label:'Home', href:'index.html' },
  { label:'Community' },
]);

// ---- Stats derived entirely from existing seed data ----
const totalAnswers = qsData.reduce((s,q) => s + q.answerCount, 0);
const totalVotes   = discsData.reduce((s,d) => s + d.voteCount, 0) + qsData.reduce((s,q) => s + q.voteCount, 0);
document.getElementById('commStats').appendChild(renderStatStrip([
  { value:expertsData.length, label:'Verified Experts' },
  { value:discsData.length,   label:'Open Discussions' },
  { value:totalAnswers,   label:'Answers Given' },
  { value:totalVotes,     label:'Votes Cast' },
]));

// ---- Join / Member CTA ----
document.getElementById('joinCta').innerHTML = components.gateOrCta(
  'CREATE_DISCUSSION',
  '<a href="#" class="btn btn-primary">Post in the Community</a>',
  'Sign in to participate'
);

// ---- Expert grid ----
// Derive filter chips from all distinct expertise tags across experts.
const allTags = [...new Set(expertsData.flatMap(e => e.expertise))].sort();
document.getElementById('expertAreaChips').append(
  ...allTags.map(t => el(`<div class="chip">${t}</div>`))
);
document.getElementById('expertGrid').append(...expertsData.map(renderUserCard));

interaction.wireSearchFilter('#expertSearch', '#expertGrid', '.user-card');

// Chip filter on expertise — each expert card carries expertise tags in its visible text content,
// so wireSearchFilter's text-content fallback handles it (no new data attribute needed).
document.querySelectorAll('#expertAreaChips .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const wanted = chip.textContent.trim().toLowerCase();
    document.querySelectorAll('#expertGrid .user-card').forEach(card => {
      card.style.display = (wanted === 'all' || card.textContent.toLowerCase().includes(wanted)) ? '' : 'none';
    });
  });
});

// ---- Recent activity: top 5 discussions by voteCount ----
const topDiscs = [...discsData].sort((a,b) => b.voteCount - a.voteCount).slice(0, 5);
document.getElementById('commDiscussions').append(
  ...topDiscs.map(d => renderDiscussionRow(d, knowledgeGraph.findUser(d.authorId)))
);

// ---- Recent questions: latest 4 by createdAt ----
const recentQs = [...qsData].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4);
document.getElementById('commQuestions').append(
  ...recentQs.map(q => adaptQuestionForCard(q, knowledgeGraph.findUser(q.expertId)))
);

// ---- Leaderboard: experts + staff sorted by reputation ----
const everyone = [...expertsData, ...staffData].sort((a,b) => b.reputation - a.reputation);
const leaderboardEl = document.getElementById('leaderboardList');
everyone.forEach((user, i) => {
  const rank = i + 1;
  const badge = components.renderRoleBadge(user);
  leaderboardEl.insertAdjacentHTML('beforeend', `
    <div class="leaderboard-row">
      <div class="lb-rank ${rank <= 3 ? 'top3' : ''}">${rank}</div>
      <div class="lb-info">
        <img class="avatar" src="${user.avatarUrl || ''}" alt="">
        <div>
          <div class="lb-name">${user.nickname} ${badge}</div>
          <div class="lb-role">${user.professionalRole || ''}</div>
        </div>
      </div>
      <div class="lb-rep">
        <b>${formatCompactNumber(user.reputation)}</b>
        <span>Reputation</span>
      </div>
    </div>`);
});

}
