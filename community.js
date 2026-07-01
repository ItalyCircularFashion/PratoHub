/* ============================================================
   COMMUNITY.JS — page-specific composition for community.html.
   ============================================================ */

const experts  = FDM.data.experts || [];
const staff    = FDM.data.staff   || [];
const discs    = FDM.data.discussions || [];
const qs       = FDM.data.questions  || [];
const comments = FDM.data.comments   || [];

// ---- Breadcrumbs ----
FDM.navigation.mountBreadcrumbs('commBreadcrumbs', [
  { label:'Home', href:'index.html' },
  { label:'Community' },
]);

// ---- Stats derived entirely from existing seed data ----
const totalAnswers = qs.reduce((s,q) => s + q.answerCount, 0);
const totalVotes   = discs.reduce((s,d) => s + d.voteCount, 0) + qs.reduce((s,q) => s + q.voteCount, 0);
document.getElementById('commStats').appendChild(renderStatStrip([
  { value:experts.length, label:'Verified Experts' },
  { value:discs.length,   label:'Open Discussions' },
  { value:totalAnswers,   label:'Answers Given' },
  { value:totalVotes,     label:'Votes Cast' },
]));

// ---- Join / Member CTA ----
document.getElementById('joinCta').innerHTML = FDM.components.gateOrCta(
  'CREATE_DISCUSSION',
  '<a href="#" class="btn btn-primary">Post in the Community</a>',
  'Sign in to participate'
);

// ---- Expert grid ----
// Derive filter chips from all distinct expertise tags across experts.
const allTags = [...new Set(experts.flatMap(e => e.expertise))].sort();
document.getElementById('expertAreaChips').append(
  ...allTags.map(t => el(`<div class="chip">${t}</div>`))
);
document.getElementById('expertGrid').append(...experts.map(renderUserCard));

FDM.interaction.wireSearchFilter('#expertSearch', '#expertGrid', '.user-card');

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
const topDiscs = [...discs].sort((a,b) => b.voteCount - a.voteCount).slice(0, 5);
document.getElementById('commDiscussions').append(
  ...topDiscs.map(d => renderDiscussionRow(d, FDM.knowledgeGraph.findUser(d.authorId)))
);

// ---- Recent questions: latest 4 by createdAt ----
const recentQs = [...qs].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4);
document.getElementById('commQuestions').append(
  ...recentQs.map(q => adaptQuestionForCard(q, FDM.knowledgeGraph.findUser(q.expertId)))
);

// ---- Leaderboard: experts + staff sorted by reputation ----
const everyone = [...experts, ...staff].sort((a,b) => b.reputation - a.reputation);
const leaderboardEl = document.getElementById('leaderboardList');
everyone.forEach((user, i) => {
  const rank = i + 1;
  const badge = FDM.components.renderRoleBadge(user);
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
        <b>${FDM.utils.formatCompactNumber(user.reputation)}</b>
        <span>Reputation</span>
      </div>
    </div>`);
});
