/* ============================================================
   QUESTIONS.JS — page-specific composition for questions.html.
   ============================================================ */

const questions = FDM.data.questions || [];

FDM.navigation.mountBreadcrumbs('qBreadcrumbs', [
  { label:'Home', href:'index.html' },
  { label:'Questions' },
]);

const totalAnswers = questions.reduce((sum,q) => sum + q.answerCount, 0);
const acceptedCount = questions.filter(q => q.accepted).length;
document.getElementById('qStats').appendChild(renderStatStrip([
  { value: questions.length, label:'Open Questions' },
  { value: totalAnswers, label:'Answers' },
  { value: acceptedCount, label:'Accepted' },
]));

document.getElementById('askQuestionCta').innerHTML = FDM.components.gateOrCta(
  'CREATE_QUESTION', '<a href="#" class="btn btn-primary">Ask a Question</a>', 'Sign in to ask a question'
);

// ---- Categories + experts: derived from data ----
const categoryCounts = questions.reduce((acc,q) => { acc[q.category] = (acc[q.category]||0)+1; return acc; }, {});
document.getElementById('qTopics').append(...Object.keys(categoryCounts).map(cat =>
  el(`<a href="#" class="topic-pill">${cat} <span class="count">${categoryCounts[cat]}</span></a>`)
));
document.getElementById('qCategoryChips').append(...Object.keys(categoryCounts).map(cat => el(`<div class="chip">${cat}</div>`)));

const expertNames = [...new Set(questions.map(q => FDM.knowledgeGraph.findUser(q.expertId)).filter(Boolean).map(e => e.nickname))];
document.getElementById('qExpertChips').append(
  el('<div class="chip active">All Experts</div>'),
  ...expertNames.map(name => el(`<div class="chip">${name}</div>`))
);

// ---- Render question cards (model + resolved expert, via the adapter) ----
document.getElementById('qGridContainer').append(
  ...questions.map(q => adaptQuestionForCard(q, FDM.knowledgeGraph.findUser(q.expertId)))
);

// ---- Search, sort, filters — all existing/generalized interaction-service functions ----
FDM.interaction.wireSearchFilter('#qSearch', '#qGridContainer', '.q-card');
FDM.interaction.wireChipFilter('#qCategoryChips', '#qGridContainer', '.q-card', 'category');
FDM.interaction.wireChipFilter('#qDifficultyChips', '#qGridContainer', '.q-card', 'difficulty');
FDM.interaction.wireChipFilter('#qExpertChips', '#qGridContainer', '.q-card', 'expert');
FDM.interaction.wireSortSelect('#qSort', '#qGridContainer', {
  votes:   (a,b) => b.dataset.votes   - a.dataset.votes,
  answers: (a,b) => b.dataset.answers - a.dataset.answers,
  newest:  (a,b) => b.dataset.created - a.dataset.created,
});

// "All Experts" chip needs the generic "all" keyword to clear the expert filter —
// wireChipFilter already matches the literal text "all", so no extra wiring needed.

// ---- Status chips: Accepted / Unanswered (boolean filter, not attribute-match) ----
document.querySelectorAll('#qStatusChips .chip').forEach(chip => chip.addEventListener('click', () => {
  const mode = chip.textContent.trim().toLowerCase();
  document.querySelectorAll('#qGridContainer .q-card').forEach(card => {
    const isAccepted = !!card.querySelector('.accepted');
    const show = mode === 'all' || (mode === 'accepted' && isAccepted) || (mode === 'unanswered' && !isAccepted);
    card.style.display = show ? '' : 'none';
  });
}));
