/* ============================================================
   KNOWLEDGE GRAPH SERVICE
   services/knowledge-graph.service.js
   Resolves related-id arrays on articles/discussions/questions
   into real objects by looking them up in seed data.
   ============================================================ */
import { experts } from './experts.data.js';
import { staff } from './articles.data.js';
import { articles } from './articles.data.js';
import { discussions } from './discussions.data.js';
import { questions } from './questions.data.js';
import { events } from './events.data.js';
import { polls } from './polls.data.js';
import { commodities } from './market.service.js';

function findExpert(id){
  return experts.find(e => e.id === id) || staff.find(e => e.id === id) || null;
}
function findArticle(id){
  return articles.find(a => a.id === id) || null;
}
function findDiscussion(id){
  return discussions.find(d => d.id === id) || null;
}
function findQuestion(id){
  return questions.find(q => q.id === id) || null;
}
function findEvent(id){
  return events.find(e => e.id === id) || null;
}
function findPoll(id){
  return polls.find(p => p.id === id) || null;
}
function findUser(id){
  return findExpert(id);
}
function findCommodity(name){
  return commodities.find(c => c.name === name) || null;
}

function getRelatedForArticle(article){
  if(!article) return { discussions:[], questions:[], experts:[], market:[], events:[], articles:[] };
  return {
    discussions: (article.relatedDiscussionIds || []).map(findDiscussion).filter(Boolean),
    questions:   (article.relatedQuestionIds   || []).map(findQuestion).filter(Boolean),
    experts:     (article.relatedExpertIds     || []).map(findExpert).filter(Boolean),
    market:      (article.relatedMarketSymbols || []).map(findCommodity).filter(Boolean),
    events:      (article.relatedEventIds      || []).map(findEvent).filter(Boolean),
    articles:    (article.relatedArticleIds    || []).map(findArticle).filter(Boolean),
  };
}

function getRelatedForDiscussion(discussion){
  if(!discussion) return { articles:[], questions:[], discussions:[], experts:[] };
  return {
    articles:    (discussion.relatedArticleIds     || []).map(findArticle).filter(Boolean),
    questions:   (discussion.relatedQuestionIds    || []).map(findQuestion).filter(Boolean),
    discussions: (discussion.relatedDiscussionIds  || []).map(findDiscussion).filter(Boolean),
    experts:     (discussion.recommendedExpertIds  || []).map(findExpert).filter(Boolean),
  };
}

function getRelatedForQuestion(question){
  if(!question) return { articles:[], questions:[], discussions:[], experts:[] };
  return {
    articles:    (question.relatedArticleIds     || []).map(findArticle).filter(Boolean),
    questions:   (question.relatedQuestionIds    || []).map(findQuestion).filter(Boolean),
    discussions: (question.relatedDiscussionIds  || []).map(findDiscussion).filter(Boolean),
    experts:     (question.recommendedExpertIds  || []).map(findExpert).filter(Boolean),
  };
}

export const knowledgeGraph = {
  findExpert, findArticle, findDiscussion, findQuestion, findEvent, findPoll, findCommodity, findUser,
  getRelatedForArticle, getRelatedForDiscussion, getRelatedForQuestion,
};

// Also export individual functions for direct import
export { findExpert, findArticle, findDiscussion, findQuestion, findEvent, findPoll, findCommodity, findUser };
