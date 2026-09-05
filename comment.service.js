import { comments } from './comments.data.js';
import { mountThread } from './comment.component.js';
import { findUser } from './knowledge-graph.service.js';

/* ============================================================
   COMMENT SERVICE
   services/comment.service.js
   Single place that knows how comments are stored and how an
   author id resolves to a user.
   ============================================================ */

function getCommentsFor(targetType, targetId){
  return comments.filter(c => c.targetType === targetType && c.targetId === targetId);
}

function resolveAuthor(authorId){
  return findUser(authorId);
}

function mountThreadFor(containerId, targetType, targetId, opts){
  const container = document.getElementById(containerId);
  if(!container || container.dataset.fdmCommentsWired) return;
  container.dataset.fdmCommentsWired = '1';

  let filteredComments = getCommentsFor(targetType, targetId);
  if(opts && opts.excludeId) filteredComments = filteredComments.filter(c => c.id !== opts.excludeId);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        mountThread(containerId, filteredComments, resolveAuthor, opts);
        io.disconnect();
      }
    });
  }, {rootMargin:'200px'});
  io.observe(container);
}

export const commentService = { getCommentsFor, resolveAuthor, mountThreadFor };
