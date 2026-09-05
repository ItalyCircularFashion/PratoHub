/* ============================================================
   MAIN.JS — Single entry point for all pages
   Imports and initializes all modules in the correct order.
   ============================================================ */

// Import models
import { createUser } from './user.model.js';
import { createDiscussion } from './discussion.model.js';
import { createArticle } from './article.model.js';
import { createComment } from './comment.model.js';
import { createNotification } from './notification.model.js';
import { createVote } from './vote.model.js';
import { createCategory } from './category.model.js';
import { createQuestion } from './question.model.js';
import { createPoll } from './poll.model.js';
import { createCompany } from './company.model.js';

// Import utils
import { formatRelativeTime, formatDate, formatCompactNumber } from './format.js';
import { validateEmail, validateNickname, validatePassword, validateRequired } from './validation.js';

// Import data
import { articles, staff } from './articles.data.js';
import { discussions } from './discussions.data.js';
import { questions } from './questions.data.js';
import { events } from './events.data.js';
import { experts } from './experts.data.js';
import { comments } from './comments.data.js';
import { notifications } from './notifications.data.js';
import { polls } from './polls.data.js';

// Import services
import { permissions, ROLES } from './permissions.js';
import { auth } from './auth.js';
import { session } from './session.service.js';
import { market, commodities, fullCard, compactCard, mountMarketTickers, mountMarketGrid } from './market.service.js';
import { navigation } from './navigation.service.js';
import { interaction } from './interaction.service.js';
import { commentService } from './comment.service.js';
import { knowledgeGraph } from './knowledge-graph.service.js';

// Import components
import { components } from './ui.js';
import { commentComponent } from './comment.component.js';
import { galleryComponent } from './gallery.component.js';
import { pollComponent } from './poll.component.js';
import { shareComponent } from './share.component.js';
import { moderationComponent } from './moderation.component.js';
import { tocComponent } from './toc.component.js';

// Import renderers
import {
  renderAgendaCard, renderNewsCard, renderPick, renderDiscussionRow,
  renderQuestionCard, renderEventCard, renderEventCardFull,
  renderAuthorCard, renderUserCard, renderCommentItem, renderNotificationItem,
  renderEmptyState, renderLoadingState, renderErrorState, renderStatStrip,
  mountKgPanel, adaptQuestionForCard, renderKgDiscussionItem, renderKgQuestionItem,
  adaptEventForCard, renderArticleAsNewsCard,
} from './card.renderer.js';
import { renderTimeline } from './timeline.renderer.js';

// Initialize services that auto-run
navigation.initHeaderScroll();
navigation.initFolioRail();
interaction.initReveal();
interaction.initChipFilters();
interaction.initNewsletterForm();
interaction.initPagination();
interaction.initSearchBars();
interaction.initVoteControls();
mountMarketTickers();

// Initialize UI components
components.mountAuthNav();
components.applyPermissionVisibility();
components.mountRoleSwitcher();

// Log initialization
console.log('Forum della Moda: all modules initialized');
