/* ============================================================
   ARTICLES SEED DATA
   assets/data/articles.data.js
   ============================================================ */
window.FDM = window.FDM || {};
FDM.data = FDM.data || {};

// Editorial staff (Administrators). Kept separate from FDM.data.experts —
// experts are community members with domain authority, staff are the
// editorial desk that holds PUBLISH_ARTICLE / EDIT_ANY_CONTENT capability.
FDM.data.staff = [
  FDM.models.createUser({
    id:'u-1', nickname:'marco.bianchi', role:'admin',
    professionalRole:'Senior Editor, Business', country:'Italy',
    avatarUrl:'https://picsum.photos/seed/editor22/120/120', reputation:9000, badges:['Administrator'],
  }),
  FDM.models.createUser({
    id:'u-2', nickname:'isabella.romano', role:'admin',
    professionalRole:'Editor-in-Chief', country:'Italy',
    avatarUrl:'https://picsum.photos/seed/editor11/120/120', reputation:9500, badges:['Administrator'],
  }),
];

FDM.data.articles = [
  FDM.models.createArticle({
    id:'art-tariff-spreadsheet',
    slug:'tariff-spreadsheet-sourcing-directors',
    title:"Inside the Tariff Spreadsheet Every Sourcing Director Is Now Quietly Sharing",
    subtitle:"A leaked planning sheet, passed between three mills in two weeks, shows how Prato's supply chain managers are quietly re-routing orders around the new duties — and what it reveals about where the next bottleneck will be.",
    heroImageUrl:'https://picsum.photos/seed/tariffdesk7/1600/1000',
    coverCaption:'A cutting floor in Prato, photographed during a routine production run, June 2026.',
    authorId:'u-1', editorId:'u-2', category:'Business', tags:['Tariffs','Sourcing','Supply Chain'],
    status:'published', isFeatured:true, readingTime:11, commentCount:4,
    publishedAt:'2026-06-27T09:00:00Z', updatedAt:'2026-06-28T08:15:00Z',
    sections:[
      {id:'surfaced', heading:"How the Spreadsheet Surfaced"},
      {id:'inside', heading:"What's Actually Inside It"},
      {id:'mills', heading:'The Three Mills Involved'},
      {id:'worried', heading:'Why Sourcing Directors Are Worried'},
      {id:'next', heading:'What Happens Next'},
    ],
    citations:[
      {label:'Source mills (names withheld on request), interviewed June 2026', url:'#'},
      {label:'Forum della Moda Market Desk — tariff-adjusted input cost dataset', url:'market.html'},
    ],
    relatedArticleIds:['art-cashmere-economics','art-flagship-shrink'],
    relatedDiscussionIds:['disc-tariffs'],
    relatedQuestionIds:[],
    relatedExpertIds:['exp-marta'],
    relatedMarketSymbols:['Cotton','Brent Oil','EUR / USD'],
    relatedEventIds:['ev-traceability'],
    viewCount:18400, saveCount:312, shareCount:96,
    pollId:'poll-tariff',
    galleryImages:[
      { src:'https://picsum.photos/seed/millfloor1/900/700', alt:'Cutting floor', caption:'The cutting floor at one of the mills involved, photographed in May.' },
      { src:'https://picsum.photos/seed/millfloor2/900/700', alt:'Loading dock', caption:'A loading dock awaiting a re-routed shipment.' },
      { src:'https://picsum.photos/seed/millfloor3/900/700', alt:'Finishing line', caption:'The finishing line at the northern facility.' },
    ],
    revisionHistory:[
      { date:'Jun 27, 09:00', label:'Published' },
      { date:'Jun 27, 14:40', label:'Corrected mill count', note:'An earlier version said four mills; sources confirm three.' },
      { date:'Jun 28, 08:15', label:'Added sourcing director response' },
    ],
  }),
  FDM.models.createArticle({
    id:'art-cashmere-economics', slug:'recycled-cashmere-economics',
    title:'The Economics of Recycled Cashmere', category:'Circular Fashion', tags:['Cashmere','Circular Fashion','Recycling'],
    heroImageUrl:'https://picsum.photos/seed/cashmere9/700/880', imageSeed:'cashmere9',
    authorId:'u-1', status:'published', readingTime:8, commentCount:14, viewCount:6200,
    publishedAt:'2026-06-24T09:00:00Z',
  }),
  FDM.models.createArticle({
    id:'art-flagship-shrink', slug:'flagship-stores-shrinking',
    title:'Why Flagship Stores Are Shrinking', category:'Retail', tags:['Retail','Store Design'],
    heroImageUrl:'https://picsum.photos/seed/flagship8/700/880', imageSeed:'flagship8',
    authorId:'u-2', status:'published', readingTime:4, commentCount:9, viewCount:4100,
    publishedAt:'2026-06-25T09:00:00Z',
  }),
  FDM.models.createArticle({
    id:'art-changeover-time', slug:'cutting-changeover-time-lean',
    title:'The 90-Minute Changeover: How One Cut-and-Sew Line Cut It to 22',
    category:'Lean Manufacturing', tags:['Lean Manufacturing','OEE','Changeover'],
    heroImageUrl:'https://picsum.photos/seed/leanline3/700/880', imageSeed:'leanline3',
    authorId:'u-1', status:'published', readingTime:9, commentCount:21, viewCount:7400,
    publishedAt:'2026-06-21T09:00:00Z', relatedDiscussionIds:['disc-changeover'],
  }),
  FDM.models.createArticle({
    id:'art-spc-quality', slug:'spc-knitting-line-quality',
    title:'What Statistical Process Control Actually Catches on a Knitting Line',
    category:'Quality Engineering', tags:['SPC','Quality Engineering','Knitting'],
    heroImageUrl:'https://picsum.photos/seed/spcline4/700/880', imageSeed:'spcline4',
    authorId:'u-2', status:'published', readingTime:7, commentCount:11, viewCount:3900,
    publishedAt:'2026-06-19T09:00:00Z', relatedDiscussionIds:['disc-spc-knitting'],
  }),
  FDM.models.createArticle({
    id:'art-reactive-dye-batch', slug:'reactive-dye-batch-consistency',
    title:'Inside the Batch Sheet: How Dyehouses Are Closing the Colour Consistency Gap',
    category:'Dyeing', tags:['Dyeing','Colour Matching','Reactive Dyes'],
    heroImageUrl:'https://picsum.photos/seed/dyevat9/700/880', imageSeed:'dyevat9',
    authorId:'u-1', status:'published', readingTime:10, commentCount:17, viewCount:5300,
    publishedAt:'2026-06-16T09:00:00Z', relatedDiscussionIds:['disc-colorconsistency'],
    relatedExpertIds:['exp-chiara'],
  }),
  FDM.models.createArticle({
    id:'art-rapier-tech', slug:'rapier-loom-fine-count-cotton',
    title:'Why Fine-Count Cotton Is Still Breaking Rapier Looms in 2026',
    category:'Weaving', tags:['Weaving','Rapier Looms','Yarn Quality'],
    heroImageUrl:'https://picsum.photos/seed/rapierloom2/700/880', imageSeed:'rapierloom2',
    authorId:'u-2', status:'published', readingTime:8, commentCount:13, viewCount:4600,
    publishedAt:'2026-06-15T09:00:00Z', relatedDiscussionIds:['disc-warpbreaks'],
    relatedExpertIds:['exp-paolo'],
  }),
  FDM.models.createArticle({
    id:'art-stenter-finishing', slug:'stenter-finishing-energy-gsm',
    title:'The Stenter Frame Trade-Off: Energy Savings Without Losing GSM',
    category:'Finishing', tags:['Finishing','Energy Efficiency','Stenter'],
    heroImageUrl:'https://picsum.photos/seed/stenter5/700/880', imageSeed:'stenter5',
    authorId:'u-1', status:'published', readingTime:7, commentCount:8, viewCount:2900,
    publishedAt:'2026-06-13T09:00:00Z', relatedDiscussionIds:['disc-stenter-energy'],
    relatedExpertIds:['exp-anna'],
  }),
  FDM.models.createArticle({
    id:'art-microfiber-shedding', slug:'microfiber-shedding-construction',
    title:'The Quiet Fix for Microfiber Shedding Nobody Wants to Pay For',
    category:'Sustainability', tags:['Sustainability','Microfiber Shedding','Water Treatment'],
    heroImageUrl:'https://picsum.photos/seed/microfiber6/700/880', imageSeed:'microfiber6',
    authorId:'u-2', status:'published', readingTime:9, commentCount:26, viewCount:8100, isFeatured:true,
    publishedAt:'2026-06-10T09:00:00Z', relatedDiscussionIds:['disc-waterreuse'],
    relatedExpertIds:['exp-davide'], pollId:'poll-microfiber',
  }),
  FDM.models.createArticle({
    id:'art-pilling-standards', slug:'pilling-test-lab-variance',
    title:'Why Two Accredited Labs Can Disagree on the Same Pilling Sample',
    category:'Laboratory Testing', tags:['Lab Testing','Pilling','ISO 12945'],
    heroImageUrl:'https://picsum.photos/seed/labtest7/700/880', imageSeed:'labtest7',
    authorId:'u-1', status:'published', readingTime:6, commentCount:7, viewCount:2400,
    publishedAt:'2026-06-12T09:00:00Z', relatedDiscussionIds:['disc-pilling-lab'],
    relatedExpertIds:['exp-sofia'],
  }),
  FDM.models.createArticle({
    id:'art-nearshoring-numbers', slug:'nearshoring-landed-cost-2026',
    title:'We Ran the Landed-Cost Numbers on Nearshoring. The Answer Was Not Simple.',
    category:'Supply Chain', tags:['Supply Chain','Nearshoring','Landed Cost'],
    heroImageUrl:'https://picsum.photos/seed/supplychain8/700/880', imageSeed:'supplychain8',
    authorId:'u-2', status:'published', readingTime:12, commentCount:34, viewCount:9700, isFeatured:true,
    publishedAt:'2026-06-09T09:00:00Z', relatedDiscussionIds:['disc-nearshoring'],
    relatedExpertIds:['exp-marta'],
  }),
  FDM.models.createArticle({
    id:'art-predictive-maintenance', slug:'predictive-maintenance-looms-sensors',
    title:'Which Loom Sensors Actually Pay for Themselves Within a Year',
    category:'Maintenance', tags:['Maintenance','Predictive Maintenance','Looms'],
    heroImageUrl:'https://picsum.photos/seed/sensorloom1/700/880', imageSeed:'sensorloom1',
    authorId:'u-1', status:'published', readingTime:8, commentCount:15, viewCount:3700,
    publishedAt:'2026-06-20T09:00:00Z', relatedDiscussionIds:['disc-predictive-maint'],
    relatedExpertIds:['exp-marco'],
  }),
  FDM.models.createArticle({
    id:'art-ai-inspection', slug:'ai-fabric-inspection-cameras-roi',
    title:'AI Fabric Inspection Cameras: What the First Adopters Actually Got Back',
    category:'Textile Technology', tags:['AI','Defect Detection','Automation'],
    heroImageUrl:'https://picsum.photos/seed/aicamera2/700/880', imageSeed:'aicamera2',
    authorId:'u-2', status:'published', readingTime:10, commentCount:29, viewCount:7900,
    publishedAt:'2026-06-22T09:00:00Z', relatedDiscussionIds:['disc-ai-inspection-cams'],
    relatedExpertIds:['exp-renzo','exp-paolo'],
  }),
];
