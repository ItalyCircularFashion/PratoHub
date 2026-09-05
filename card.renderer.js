/* ============================================================
   CARD RENDERERS
   renderers/card.renderer.js

   Every reusable card on the platform is rendered from here.
   No page builds its own card markup — pages only supply data
   to these functions.
   ============================================================ */
import { formatRelativeTime, formatDate, formatCompactNumber } from './format.js';
import { auth } from './auth.js';
import { session } from './session.service.js';
import { permissions } from './permissions.js';
import { articles, staff } from './articles.data.js';
import { discussions } from './discussions.data.js';
import { questions } from './questions.data.js';
import { events } from './events.data.js';
import { experts } from './experts.data.js';
import { comments } from './comments.data.js';
import { notifications } from './notifications.data.js';
import { polls } from './polls.data.js';
import { commodities } from './market.service.js';
import { knowledgeGraph } from './knowledge-graph.service.js';
import { navigation } from './navigation.service.js';
import { interaction } from './interaction.service.js';
import { commentService } from './comment.service.js';
import { commentComponent } from './comment.component.js';
import { galleryComponent } from './gallery.component.js';
import { pollComponent } from './poll.component.js';
import { shareComponent } from './share.component.js';
import { moderationComponent } from './moderation.component.js';
import { tocComponent } from './toc.component.js';

// ---- DOM helper ----
function el(h){ const t=document.createElement('template'); t.innerHTML=h.trim(); return t.content.firstChild; }

function renderAgendaCard(item){
  const [cat,title,author,time,seed] = item;
  const imgSeed = seed || (cat+title.length);
  return el(`
    <div class="agenda-card" data-title="${title.toLowerCase()}">
      <div class="agenda-media"><img loading="lazy" src="https://picsum.photos/seed/${imgSeed}/420/560" alt=""></div>
      <div class="cat">${cat}</div>
      <h4>${title}</h4>
      <div class="meta">${author} · ${time} read</div>
    </div>`);
}
function renderNewsCard(n){
  return el(`
    <div class="news-card ${n.lead?'lead':''}" data-title="${n.title.toLowerCase()}">
      <div class="news-media"><img loading="lazy" src="https://picsum.photos/seed/${n.seed}/${n.lead?700:500}/${n.lead?880:330}" alt=""></div>
      <span class="badge-editor">Editorial</span>
      <div class="cat">${n.cat}</div>
      <h4>${n.title}</h4>
      <div class="meta"><span>${n.author}</span><span class="dot"></span><span>${n.time} read</span><span class="dot"></span><span>${n.date}</span></div>
    </div>`);
}
function renderPick(item){
  const [k,title,seed] = item;
  return el(`
    <div class="pick">
      <img loading="lazy" src="https://picsum.photos/seed/${seed}/120/120" alt="">
      <div><div class="n">${k}</div><h5>${title}</h5></div>
    </div>`);
}
function renderDiscussionRow(item, author){
  if(Array.isArray(item)){
    const [cat,title,votes,replies,avs] = item;
    return el(`
      <div class="disc-row">
        <div class="vote"><span class="n">${votes}</span><span class="l">Votes</span></div>
        <div class="disc-main">
          <div class="cat">${cat}</div>
          <h4>${title}</h4>
          <div class="meta">
            <div class="avatars">${avs.map(a=>`<img loading="lazy" src="https://picsum.photos/seed/${a}/60/60" alt="">`).join('')}</div>
            <span>${avs.length} contributors</span><span class="dot"></span><span>Active now</span>
          </div>
        </div>
        <div class="disc-right"><span class="replies">${replies}</span>replies</div>
      </div>`);
  }
  
  if(!item || typeof item !== 'object'){
    console.error('Invalid discussion item:', item);
    return el('<div class="disc-row"></div>');
  }
  
  const badges = [
    item.isPinned && '<span class="tag">Pinned</span>',
    item.acceptedAnswerId && '<span class="tag" style="color:var(--mkt-pos); border-color:var(--mkt-pos);">Solved</span>',
    item.moderationStatus === 'locked' && '<span class="tag">Locked</span>',
  ].filter(Boolean).join(' ');
  
  const roleBadge = (author && window.FDM_components && window.FDM_components.renderRoleBadge) ? window.FDM_components.renderRoleBadge(author) : '';
  const user = auth ? auth.getCurrentUser() : null;
  const following = user && session && permissions && permissions.canFollow && permissions.canFollow(user) && session.isFollowing('discussion', item.id);
  const followBtn = window.FDM_components && window.FDM_components.gateOrCta ? window.FDM_components.gateOrCta('FOLLOW_DISCUSSION',
    `<button class="comment-action follow-toggle" data-id="${item.id}">${following ? 'Following ✓' : '+ Follow'}</button>`,
    'Sign in to follow') : '';
  
  return el(`
    <div class="disc-row" data-title="${item.title.toLowerCase()}" data-category="${item.category}"
         data-votes="${item.voteCount}" data-replies="${item.replyCount}"
         data-updated="${new Date(item.updatedAt).getTime()}" data-created="${new Date(item.createdAt).getTime()}">
      <div class="vote"><span class="n">${item.voteCount}</span><span class="l">Votes</span></div>
      <div class="disc-main">
        <div class="cat">${item.category} ${badges}</div>
        <h4><a href="thread.html">${item.title}</a></h4>
        <div class="meta">
          <img class="avatar" style="width:24px;height:24px;" src="${author?author.avatarUrl:''}" alt="">
          <span>${author?author.nickname:'Member'}</span> ${roleBadge}
          <span class="dot"></span><span>Updated ${formatRelativeTime(item.updatedAt)}</span>
          <span class="dot"></span>${followBtn}
        </div>
      </div>
      <div class="disc-right"><span class="replies">${item.replyCount}</span>replies</div>
    </div>`);
}
function renderQuestionCard(q){
  return el(`
    <div class="q-card" data-title="${(q.q||'').toLowerCase()}" data-category="${q.category||''}" data-difficulty="${q.difficulty||''}"
         data-expert="${q.expert||''}" data-votes="${q.voteCount||0}" data-answers="${q.answerCount||0}"
         data-created="${q.createdAt ? new Date(q.createdAt).getTime() : 0}">
      <div class="tags">${q.tags.map(t=>`<span class="q-tag">${t}</span>`).join('')}</div>
      <h4>${q.q}</h4>
      <div class="answer-row">
        <img loading="lazy" src="https://picsum.photos/seed/${q.seed}/64/64" alt="">
        <div class="answer-meta">
          <div class="name">${q.expert} <span class="verified"></span></div>
          <div class="role">${q.role}</div>
        </div>
        ${q.accepted ? '<div class="accepted">✓ Best Answer</div>' : ''}
      </div>
    </div>`);
}
function renderEventCard(item){
  const [day,mon,type,title] = item;
  return el(`
    <div class="event-card">
      <div class="event-date"><span class="day">${day}</span><span class="mon">${mon}</span></div>
      <div class="event-body">
        <div class="type">${type}</div>
        <h4>${title}</h4>
        <div class="loc">Follow for updates →</div>
      </div>
    </div>`);
}
function renderEventCardFull(ev){
  return el(`
    <div class="event-card-full ${ev.past?'is-past':''}" data-type="${ev.type.toLowerCase()}" data-title="${ev.title.toLowerCase()}" data-day="${ev.day}">
      <div class="event-date"><span class="day">${ev.day}</span><span class="mon">${ev.month}</span></div>
      <div class="event-body-full">
        <div class="event-type-row"><span class="type">${ev.type}</span>${ev.past?'<span class="tag" style="font-size:9px;margin-left:8px;">Past</span>':''}</div>
        <h4 class="event-title">${ev.title}</h4>
        ${ev.location ? `<div class="event-location">📍 ${ev.location}</div>` : ''}
        ${ev.description ? `<p class="event-desc">${ev.description}</p>` : ''}
        <div class="event-footer">
          ${ev.registration && ev.registration !== '#'
            ? `<a href="${ev.registration}" class="btn-line" target="_blank" rel="noopener">Register →</a>`
            : `<span class="event-cta-placeholder">Details coming soon</span>`}
        </div>
      </div>
    </div>`);
}

/* ---- Shared components ---- */

function renderAuthorCard(user){
  if(!user) return el('<div class="author-card"></div>');
  const badge = (window.FDM_components && window.FDM_components.renderRoleBadge) ? window.FDM_components.renderRoleBadge(user) : '';
  return el(`
    <div class="author-card">
      <img class="avatar" src="${user.avatarUrl||''}" alt="">
      <div class="author-card-body">
        <div class="author-card-name">${user.nickname} ${badge}</div>
        <div class="author-card-role">${user.professionalRole||''}</div>
      </div>
    </div>`);
}

function renderUserCard(user){
  const badge = (window.FDM_components && window.FDM_components.renderRoleBadge) ? window.FDM_components.renderRoleBadge(user) : '';
  const expertise = (user.expertise || []).join(', ');
  return el(`
    <div class="user-card" data-title="${(user.nickname||'').toLowerCase()}" data-expertise="${expertise.toLowerCase()}">
      <img class="avatar" src="${user.avatarUrl||''}" alt="">
      <h5>${user.nickname}</h5>
      <div class="user-card-role">${user.professionalRole||''}</div>
      ${badge ? `<div class="user-card-badge">${badge}</div>` : ''}
      <div class="user-card-stats"><span>${(user.reputation||0).toLocaleString()} rep</span><span class="dot"></span><span>${user.followersCount||0} followers</span></div>
      <div class="user-card-expertise" style="font-size:11.5px;color:var(--stone);margin-top:6px;">${expertise}</div>
    </div>`);
}

function renderCommentItem(comment, author, children){
  const time = formatRelativeTime(comment.createdAt);
  const roleBadge = author ? ((window.FDM_components && window.FDM_components.renderRoleBadge) ? window.FDM_components.renderRoleBadge(author) : '') : '';
  const vote = (window.FDM_components && window.FDM_components.renderVoteControl) ? window.FDM_components.renderVoteControl(comment.voteCount, 'comment', comment.id) : '';
  const attachments = (comment.attachments && comment.attachments.length)
    ? `<div class="comment-attachments">${comment.attachments.map(a => `<a href="${a.url}" class="tag">📎 ${a.name}</a>`).join('')}</div>` : '';
  const node = el(`
    <div class="comment-item ${comment.isPinned?'is-pinned':''} ${comment.isHidden?'is-hidden':''}" data-comment-id="${comment.id}">
      <div class="comment-vote-col">${vote}</div>
      <div class="comment-body-col">
        <div class="comment-meta">
          <img class="avatar" src="${author?author.avatarUrl:''}" alt="">
          <span class="comment-author">${author?author.nickname:'Deleted user'}</span>
          ${roleBadge}
          <span class="dot"></span><span class="comment-time">${time}</span>
          ${comment.editedAt ? '<span class="comment-edited">· edited</span>' : ''}
          ${comment.isAcceptedAnswer ? '<span class="accepted">✓ Accepted</span>' : ''}
        </div>
        <div class="comment-text ${comment.isCollapsed?'is-collapsed':''}">${comment.body}</div>
        ${comment.isCollapsed ? '<button class="comment-action comment-expand">Show more</button>' : ''}
        ${attachments}
        <div class="comment-actions">
          <button class="comment-action">Reply</button>
          <button class="comment-action">Quote</button>
          <button class="comment-action">Report</button>
          <span class="comment-report-status"></span>
        </div>
        <div class="comment-children"></div>
      </div>
    </div>`);
  const expandBtn = node.querySelector('.comment-expand');
  if(expandBtn){
    expandBtn.addEventListener('click', () => {
      node.querySelector('.comment-text').classList.remove('is-collapsed');
      expandBtn.remove();
    });
  }
  if(children && children.length){
    const childWrap = node.querySelector('.comment-children');
    children.forEach(c => childWrap.appendChild(renderCommentItem(c.comment, c.author, c.children)));
  }
  return node;
}

function renderNotificationItem(n){
  const time = formatRelativeTime(n.createdAt);
  return el(`
    <a href="${n.link}" class="notification-item ${n.isRead?'':'is-unread'}">
      <span class="notification-dot"></span>
      <div class="notification-body">
        <span class="notification-message">${n.message}</span>
        <span class="notification-time">${time}</span>
      </div>
    </a>`);
}

function renderEmptyState(message, hint){
  return el(`
    <div class="state-block state-empty">
      <div class="state-title">${message || 'Nothing here yet'}</div>
      ${hint ? `<div class="state-hint">${hint}</div>` : ''}
    </div>`);
}
function renderLoadingState(){
  return el(`<div class="state-block state-loading"><span class="state-spinner"></span> Loading…</div>`);
}
function renderErrorState(message){
  return el(`
    <div class="state-block state-error">
      <div class="state-title">${message || 'Something went wrong.'}</div>
      <button class="btn btn-line state-retry">Retry</button>
    </div>`);
}

function renderStatStrip(stats){
  const fmt = (n) => formatCompactNumber(n);
  return el(`
    <div class="stat-strip">
      ${stats.map(s => `<div class="stat-item"><b>${typeof s.value==='number'?fmt(s.value):s.value}</b><span>${s.label}</span></div>`).join('')}
    </div>`);
}

function mountKgPanel(targetId, title, items, itemRenderer, emptyMessage){
  const target = document.getElementById(targetId);
  if(!target) return;
  if(title) target.appendChild(el(`<div class="kg-panel-title">${title}</div>`));
  if(!items || !items.length){
    target.appendChild(renderEmptyState(emptyMessage || 'Nothing connected here yet.'));
    return;
  }
  const list = el(`<div class="kg-panel-list"></div>`);
  items.forEach(item => list.appendChild(itemRenderer(item)));
  target.appendChild(list);
}

function adaptQuestionForCard(question, expert){
  return renderQuestionCard({
    tags: question.tags, q: question.title, category: question.category, difficulty: question.difficulty,
    voteCount: question.voteCount, answerCount: question.answerCount, createdAt: question.createdAt,
    expert: expert ? expert.nickname : 'Community', role: expert ? expert.professionalRole : '',
    seed: question.expertId || question.id, accepted: question.accepted,
  });
}
function renderKgDiscussionItem(discussion){
  return el(`
    <a href="discussions.html" class="kg-item-discussion">${discussion.title}
      <span class="kg-meta">${discussion.replyCount} replies · ${discussion.voteCount} votes</span>
    </a>`);
}
function renderKgQuestionItem(question){
  return el(`<a href="questions.html" class="kg-item-discussion">${question.title}</a>`);
}
function adaptEventForCard(event){
  return [event.day, event.month, event.type, event.title];
}
function renderArticleAsNewsCard(article){
  const author = staff.find(s => s.id === article.authorId);
  return renderNewsCard({
    cat: article.category,
    title: article.title,
    author: author ? author.nickname : 'Forum della Moda',
    time: article.readingTime,
    date: formatDate(article.publishedAt),
    seed: article.imageSeed || article.id,
  });
}

export {
  renderAgendaCard, renderNewsCard, renderPick, renderDiscussionRow,
  renderQuestionCard, renderEventCard, renderEventCardFull,
  renderAuthorCard, renderUserCard, renderCommentItem, renderNotificationItem,
  renderEmptyState, renderLoadingState, renderErrorState, renderStatStrip,
  mountKgPanel, adaptQuestionForCard, renderKgDiscussionItem, renderKgQuestionItem,
  adaptEventForCard, renderArticleAsNewsCard,
};
