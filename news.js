import { renderAgendaCard, renderNewsCard, renderPick, renderArticleAsNewsCard } from './card.renderer.js';
import { articles } from './articles.data.js';
import { wireSearchFilter } from './interaction.service.js';

/* ============================================================
   NEWS.JS — page-specific data + wiring for news.html only.
   ============================================================ */

const latestArticles = [
  {cat:"Luxury", title:"Why Three Maisons Quietly Moved Production Back to Italy", author:"Isabella Romano", time:"8 min", date:"Jun 27", seed:"maison9"},
  {cat:"Streetwear", title:"The Resale Platforms Now Setting Runway Trends", author:"Yuki Tanaka", time:"5 min", date:"Jun 27", seed:"resale4"},
  {cat:"Manufacturing", title:"Inside a Biella Mill Running on a Four-Day Week", author:"Marco Bianchi", time:"9 min", date:"Jun 26", seed:"biella3"},
  {cat:"AI", title:"The Pattern-Grading Models Nobody Wants to Talk About", author:"Sofia Rossi", time:"6 min", date:"Jun 26", seed:"grading7"},
  {cat:"Sustainability", title:"What 'Traceable' Actually Means on a Cotton Label", author:"Giulia Ferrari", time:"7 min", date:"Jun 25", seed:"cottonlabel"},
  {cat:"Retail", title:"The Department Store Model Is Splitting in Two", author:"Tommaso Greco", time:"5 min", date:"Jun 25", seed:"deptstore"},
  {cat:"Runway", title:"Five Fabrics That Quietly Dominated This Season", author:"Anna Moretti", time:"4 min", date:"Jun 24", seed:"fabrics5"},
  {cat:"Business", title:"How Currency Hedging Became a Sourcing Strategy", author:"Laura Conti", time:"10 min", date:"Jun 24", seed:"hedge2"},
  {cat:"Materials", title:"The Lab-Grown Leather Race Has a New Front-Runner", author:"Paolo Ricci", time:"6 min", date:"Jun 23", seed:"labgrown6"},
];

const trending = [
  ["Sustainability","The Greenwashing Audit Every Brand Is Quietly Running","Giulia Ferrari","6 min","trend1"],
  ["AI","Can a Model Learn to Spot a Bad Hem?","Sofia Rossi","5 min","trend2"],
  ["Business","Margins in the Age of Tariffs","Laura Conti","6 min","trend3"],
  ["Manufacturing","Inside the Last Mile of Italian Knitwear","Marco Bianchi","6 min","trend4"],
  ["Retail","Why Flagship Stores Are Shrinking","Tommaso Greco","4 min","trend5"],
];

const interviews = [
  ["Q&A","\u201cWe Stopped Forecasting Two Years Out\u201d — A CFO on Tariff Volatility","Laura Conti","9 min","int1"],
  ["Q&A","Inside the Studio: A Pattern Maker on Grading for Real Bodies","Luca De Luca","7 min","int2"],
  ["Q&A","A Compliance Lead on What GOTS Certification Actually Changes","Marta Sani","8 min","int3"],
  ["Q&A","An Atelier Director on Keeping Handwork Alive at Scale","Isabella Romano","10 min","int4"],
];

const picks = [
  ["Editor's Pick","The Mill That Never Switched to Synthetic Dye", "newspick1"],
  ["Editor's Pick","A Short History of the Prato Terzista Network", "newspick2"],
  ["Editor's Pick","Reading a Bill of Materials Like a Buyer Would", "newspick3"],
  ["Editor's Pick","Why Some Mills Are Betting Against Automation", "newspick4"],
];

export function initNews(){
  document.getElementById('newsGrid').append(
    ...latestArticles.map(renderNewsCard),
    ...articles.filter(a => a.id !== 'art-tariff-spreadsheet').map(renderArticleAsNewsCard)
  );
  document.getElementById('trendingRail').append(...trending.map(renderAgendaCard));
  document.getElementById('interviewsRail').append(...interviews.map(renderAgendaCard));
  document.getElementById('picksStrip').append(...picks.map(renderPick));
  wireSearchFilter('#newsSearch', '#newsGrid', '.news-card');
}
