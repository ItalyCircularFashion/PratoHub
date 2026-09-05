/* ============================================================
   MAIN.JS — Single entry point for all pages
   Detects current page and runs appropriate initialization.
   ============================================================ */

// Import all services (they auto-initialize on import)
import { navigation } from './navigation.service.js';
import { interaction } from './interaction.service.js';
import { mountMarketTickers, mountMarketGrid } from './market.service.js';
import { components } from './ui.js';

// Import renderers
import {
  renderAgendaCard, renderNewsCard, renderPick, renderDiscussionRow,
  renderQuestionCard, renderEventCard, renderEventCardFull,
  renderAuthorCard, renderUserCard, renderCommentItem, renderNotificationItem,
  renderEmptyState, renderLoadingState, renderErrorState, renderStatStrip,
  mountKgPanel, adaptQuestionForCard, renderKgDiscussionItem, renderKgQuestionItem,
  adaptEventForCard, renderArticleAsNewsCard,
} from './card.renderer.js';

// Import page-specific modules
import { initHome } from './home.js';
import { initNews } from './news.js';
import { initDiscussions } from './discussions.js';
import { initQuestions } from './questions.js';
import { initEvents } from './events.js';
import { initCommunity } from './community.js';
import { initThread } from './thread.js';
import { initQuestion } from './question.js';
import { initArticle } from './article.js';

// Initialize shared components
components.mountAuthNav();
components.applyPermissionVisibility();
components.mountRoleSwitcher();

// Detect current page and initialize
const path = window.location.pathname;

if (path.endsWith('/index.html') || path.endsWith('/') || path.endsWith('/PratoHub/') || path.endsWith('/PratoHub/index.html')) {
  initHome();
} else if (path.endsWith('/news.html')) {
  initNews();
} else if (path.endsWith('/discussions.html')) {
  initDiscussions();
} else if (path.endsWith('/questions.html')) {
  initQuestions();
} else if (path.endsWith('/events.html')) {
  initEvents();
} else if (path.endsWith('/community.html')) {
  initCommunity();
} else if (path.endsWith('/thread.html')) {
  initThread();
} else if (path.endsWith('/question.html')) {
  initQuestion();
} else if (path.endsWith('/article.html')) {
  initArticle();
}

// Log initialization
console.log('Forum della Moda: initialized for', path);
