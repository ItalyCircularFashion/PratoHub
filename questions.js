import { navigation } from './navigation.service.js';
import { interaction } from './interaction.service.js';
import { knowledgeGraph } from './knowledge-graph.service.js';
import { components } from './ui.js';
import { questions } from './questions.data.js';
import { renderStatStrip, adaptQuestionForCard } from './card.renderer.js';

/* ============================================================
   QUESTIONS.JS — page-specific composition for questions.html.
   ============================================================ */

function el(h){ const t=document.createElement('template'); t.innerHTML=h.trim(); return t.content.firstChild; }

const questionsData = questions || [];

export function initQuestions(){

navigation.mountBreadcrumbs('qBreadcrumbs', [
  { label:'Home', href:'index.html' },
  { label:'Questions' },
]);

const totalAnswers = questionsData.reduce((sum,q) => sum + q.answerCount, 0);
const acceptedCount = questionsData.filter(q => q.accepted).length;
document.getElementById('qStats').appendChild(renderStatStrip([
  { value: questionsData.length, label:'Open Questions' },
  { value: totalAnswers, label:'Answers' },
  { value: acceptedCount, label:'Accepted' },
]));

document.getElementById('askQuestionCta').innerHTML = components.gateOrCta(
  'CREATE_QUESTION', '<a href="#" class="btn btn-primary">Ask a Question</a>', 'Sign in to ask a question'
);

// ---- Categories + experts: derived from data ----
const categoryCounts = questionsData.reduce((acc,q) => { acc[q.category] = (acc[q.category]||0)+1; return acc; }, {});
document.getElementById('qTopics').append(...Object.keys(categoryCounts).map(cat =>
  el(`<a href="#" class="topic-pill">${cat} <span class="count">${categoryCounts[cat]}</span></a>`)
));
document.getElementById('qCategoryChips').append(...Object.keys(categoryCounts).map(cat => el(`<div class="chip">${cat}</div>`)));

const expertNames = [...new Set(questionsData.map(q => knowledgeGraph.findUser(q.expertId)).filter(Boolean).map(e => e.nickname))];
document.getElementById('qExpertChips').append(
  el('<div class="chip active">All Experts</div>'),
  ...expertNames.map(name => el(`<div class="chip">${name}</div>`))
);

// ---- Render question cards (model + resolved expert, via the adapter) ----
document.getElementById('qGridContainer').append(
  ...questionsData.map(q => adaptQuestionForCard(q, knowledgeGraph.findUser(q.expertId)))
);

// ---- Search, sort, filters — all existing/generalized interaction-service functions ----
interaction.wireSearchFilter('#qSearch', '#qGridContainer', '.q-card');
interaction.wireChipFilter('#qCategoryChips', '#qGridContainer', '.q-card', 'category');
interaction.wireChipFilter('#qDifficultyChips', '#qGridContainer', '.q-card', 'difficulty');
interaction.wireChipFilter('#qExpertChips', '#qGridContainer', '.q-card', 'expert');
interaction.wireSortSelect('#qSort', '#qGridContainer', {
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

}
