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
import { renderStatStrip, renderErrorState, renderUserCard, mountKgPanel, renderKgDiscussionItem, renderKgQuestionItem, renderArticleAsNewsCard } from './card.renderer.js';

export function initThread(){
/* ============================================================
   THREAD.JS — page-specific composition for thread.html only.
   ============================================================ */



const discussion = knowledgeGraph.findDiscussion('disc-erp');

if(!discussion){
  document.getElementById('threadHero').appendChild(renderErrorState('This discussion could not be found.'));
} else {
  renderThreadPage(discussion);
}

function renderThreadPage(discussion){
  const author = knowledgeGraph.findUser(discussion.authorId);

  navigation.mountBreadcrumbs('threadBreadcrumbs', [
    { label:'Home', href:'index.html' },
    { label:'Discussions', href:'discussions.html' },
    { label:discussion.category, href:'discussions.html' },
    { label:'Thread' },
  ]);

  document.getElementById('threadBadges').innerHTML = [
    `<span class="eyebrow" style="display:inline-flex;">${discussion.category}</span>`,
    discussion.isPinned ? '<span class="tag">Pinned</span>' : '',
    discussion.acceptedAnswerId ? '<span class="tag" style="color:var(--mkt-pos); border-color:var(--mkt-pos);">Solved</span>' : '',
    discussion.moderationStatus === 'locked' ? '<span class="tag">Locked</span>' : '',
  ].filter(Boolean).join(' ');

  document.getElementById('threadTitle').textContent = discussion.title;
  document.getElementById('threadByline').innerHTML = `
    <img class="avatar" style="width:28px;height:28px;" src="${author?author.avatarUrl:''}" alt="">
    <span>${author?author.nickname:'Member'}</span>
    ${components.renderRoleBadge(author)}
    <span class="dot"></span><span>Started ${formatRelativeTime(discussion.createdAt)}</span>
    <span class="dot"></span><span>${discussion.readingTime} min read</span>`;

  document.getElementById('threadStats').appendChild(renderStatStrip([
    { value: discussion.viewCount, label:'Views' },
    { value: discussion.replyCount, label:'Replies' },
    { value: discussion.followerIds.length, label:'Followers' },
  ]));

  document.getElementById('threadOpVote').innerHTML = components.renderVoteControl(discussion.voteCount, 'discussion', discussion.id);

  FDM.shareComponent.mount('threadShare', {
    targetType:'discussion', targetId:discussion.id, title:discussion.title, url:window.location.href,
  });

  // ---- Moderation toolbar (renders nothing for non-moderators) ----
  FDM.moderationComponent.mountToolbar('threadModeration', discussion);

  // ---- Comments: nested replies, voting, accepted answer, expert/mod/admin badges ----
  const commentCount = commentService.getCommentsFor('discussion', discussion.id).length;
  commentService.mountThreadFor('threadComments', 'discussion', discussion.id, {
    composerPlaceholder: discussion.moderationStatus === 'locked'
      ? 'This thread is locked.' : 'Add a reply… (Markdown supported)',
  });

  // ---- Knowledge graph sidebar ----
  const related = knowledgeGraph.getRelatedForDiscussion(discussion);
  mountKgPanel('threadExperts', '', related.experts, renderUserCard, 'No experts linked to this thread yet.');
  mountKgPanel('threadSimilar', '', related.discussions, renderKgDiscussionItem, 'No similar discussions yet.');
  mountKgPanel('threadQuestions', '', related.questions, renderKgQuestionItem, 'No related questions yet.');
  mountKgPanel('threadArticles', '', related.articles, renderArticleAsNewsCard, 'No related articles yet.');
}
}