/* ============================================================
   DISCUSSIONS.JS — page-specific composition for discussions.html.
   Every render, lookup, permission check and interaction wiring
   is delegated to an existing FDM service/component/renderer.
   ============================================================ */

const discussions = FDM.data.discussions || [];

// ---- Breadcrumbs ----
FDM.navigation.mountBreadcrumbs('discBreadcrumbs', [
  { label:'Home', href:'index.html' },
  { label:'Discussions' },
]);

// ---- Header stats ----
const totalReplies = discussions.reduce((sum,d) => sum + d.replyCount, 0);
const totalVotes = discussions.reduce((sum,d) => sum + d.voteCount, 0);
document.getElementById('discStats').appendChild(renderStatStrip([
  { value: discussions.length, label:'Open Threads' },
  { value: totalReplies, label:'Replies' },
  { value: totalVotes, label:'Votes Cast' },
]));

// ---- Create Discussion CTA (permission-gated) ----
document.getElementById('createDiscussionCta').innerHTML = FDM.components.gateOrCta(
  'CREATE_DISCUSSION',
  '<a href="#" class="btn btn-primary">Start a Discussion</a>',
  'Sign in to start a discussion'
);

// ---- Categories: derived from the data, not hardcoded ----
const categoryCounts = discussions.reduce((acc,d) => { acc[d.category] = (acc[d.category]||0)+1; return acc; }, {});
const categories = Object.keys(categoryCounts);

document.getElementById('discTopics').append(...categories.map(cat =>
  el(`<a href="#" class="topic-pill">${cat} <span class="count">${categoryCounts[cat]}</span></a>`)
));
document.getElementById('discCategoryChips').append(...categories.map(cat => el(`<div class="chip">${cat}</div>`)));

// ---- Render the list (model + resolved author, via the extended renderDiscussionRow) ----
document.getElementById('discListContainer').append(
  ...discussions.map(d => renderDiscussionRow(d, FDM.knowledgeGraph.findUser(d.authorId)))
);

// ---- Search, sort, category filter — all existing interaction-service functions ----
FDM.interaction.wireSearchFilter('#discSearch', '#discListContainer', '.disc-row');
FDM.interaction.wireChipCategoryFilter('#discCategoryChips', '#discListContainer', '.disc-row');
FDM.interaction.wireSortSelect('#discSort', '#discListContainer', {
  votes:   (a,b) => b.dataset.votes   - a.dataset.votes,
  replies: (a,b) => b.dataset.replies - a.dataset.replies,
  updated: (a,b) => b.dataset.updated - a.dataset.updated,
  newest:  (a,b) => b.dataset.created - a.dataset.created,
});

// ---- View-mode chips (All / Trending / Latest / Following / Solved) ----
const viewChips = document.querySelectorAll('#discViewChips .chip');
const rows = () => document.querySelectorAll('#discListContainer .disc-row');
const VIEW_FILTERS = {
  all:       () => true,
  trending:  (row) => Number(row.dataset.votes) >= 150,
  latest:    () => true, // re-sorted below, not filtered
  following: (row) => FDM.session.isFollowing('discussion', row.querySelector('.follow-toggle')?.dataset.id),
  solved:    (row) => row.querySelector('.tag') && row.textContent.includes('Solved'),
};
viewChips.forEach(chip => chip.addEventListener('click', () => {
  const mode = chip.textContent.trim().toLowerCase();
  rows().forEach(row => { row.style.display = VIEW_FILTERS[mode](row) ? '' : 'none'; });
  if(mode === 'latest'){
    [...document.getElementById('discListContainer').children]
      .sort((a,b) => b.dataset.created - a.dataset.created)
      .forEach(node => document.getElementById('discListContainer').appendChild(node));
  }
}));

// ---- Follow toggle (event delegation — single listener, calls the existing session service) ----
document.getElementById('discListContainer').addEventListener('click', (e) => {
  const btn = e.target.closest('.follow-toggle');
  if(!btn) return;
  const nowFollowing = FDM.session.toggleFollow('discussion', btn.dataset.id);
  btn.textContent = nowFollowing ? 'Following ✓' : '+ Follow';
});
document.addEventListener('fdm:authchange', () => {
  document.getElementById('discListContainer').innerHTML = '';
  document.getElementById('discListContainer').append(
    ...discussions.map(d => renderDiscussionRow(d, FDM.knowledgeGraph.findUser(d.authorId)))
  );
});
