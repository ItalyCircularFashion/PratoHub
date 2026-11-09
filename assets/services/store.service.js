/* STORE — persistenza reale (localStorage) per utenti, discussioni, commenti, newsletter e aziende.
   Stessa API di un backend: per passare a un server basta riscrivere questo file con fetch(). */
window.FDM = window.FDM || {};
(function(){
  const KEY='fdm.store.v1', D=FDM.data=FDM.data||{}, U=FDM.utils||{};
  ['discussions','comments','companies'].forEach(k=>D[k]=D[k]||[]);
  const db={users:[],session:null,discussions:[],comments:[],subs:[],companies:[]};
  try{Object.assign(db,JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){}
  const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(db))}catch(e){}};
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const id=p=>p+'-'+Date.now().toString(36)+Math.random().toString(36).slice(2,5);
  const slug=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60);
  const hash=async s=>{
    if(!(window.crypto&&crypto.subtle)) return 'b64:'+btoa(unescape(encodeURIComponent(s)));
    const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));
    return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
  };
  const pub=u=>{const c=Object.assign({},u);delete c.pwd;return c;};
  const need=()=>{const u=FDM.auth.getCurrentUser();if(!u)throw new Error('Devi accedere per farlo.');return u;};

  /* ---- Account ---- */
  function signIn(u){db.session=u.id;save();FDM.auth.login(pub(u));return pub(u);}
  async function register(f){
    if(!U.validateNickname(f.nickname)) throw new Error('Nickname: 3-24 caratteri (lettere, numeri, . _ -).');
    if(!U.validateEmail(f.email)) throw new Error('Email non valida.');
    if(!U.validatePassword(f.password)) throw new Error('La password deve avere almeno 8 caratteri.');
    const n=f.nickname.trim(), e=f.email.trim().toLowerCase();
    if(db.users.some(u=>u.nickname.toLowerCase()===n.toLowerCase()||u.email===e)) throw new Error('Nickname o email già in uso.');
    const u=FDM.models.createUser({id:id('u'),nickname:n,email:e,role:'member',professionalRole:esc(f.professionalRole),
      country:esc(f.country||'Italia'),avatarUrl:'https://picsum.photos/seed/'+encodeURIComponent(n)+'/120/120',profileComplete:true});
    u.pwd=await hash(f.password); db.users.push(u); return signIn(u);
  }
  async function login(who,password){
    const w=(who||'').trim().toLowerCase(), h=await hash(password||'');
    const u=db.users.find(x=>(x.email===w||x.nickname.toLowerCase()===w)&&x.pwd===h);
    if(!u) throw new Error('Credenziali non corrette.');
    return signIn(u);
  }
  function logout(){db.session=null;save();FDM.auth.logout();}
  const findUser=i=>{const u=db.users.find(x=>x.id===i);return u?pub(u):null;};

  /* ---- Forum ---- */
  function addDiscussion(f){
    const u=need(), title=(f.title||'').trim(), body=(f.body||'').trim();
    if(title.length<10) throw new Error('Il titolo deve avere almeno 10 caratteri.');
    if(body.length<20) throw new Error('Descrivi meglio il tema (almeno 20 caratteri).');
    const d=FDM.models.createDiscussion({id:id('disc'),title:esc(title),slug:slug(title),authorId:u.id,
      category:esc(f.category||'Generale'),tags:(f.tags||[]).map(esc),body:esc(body).replace(/\n/g,'<br>'),
      readingTime:Math.max(1,Math.round(body.split(/\s+/).length/200))});
    db.discussions.unshift(d); save(); D.discussions.unshift(d); return d;
  }
  function saveComment(c){
    db.comments.push(c); D.comments.push(c);
    const d=D.discussions.find(x=>x.id===c.targetId); if(d) d.replyCount++;
    save();
  }

  /* ---- Vetrina aziende ---- */
  function addCompany(f){
    const u=need(), list=s=>String(s||'').split(',').map(x=>x.trim()).filter(Boolean).map(esc);
    if(!(f.name||'').trim()) throw new Error('Inserisci la ragione sociale.');
    if((f.description||'').trim().length<30) throw new Error('La descrizione deve avere almeno 30 caratteri.');
    const c=FDM.models.createCompany({id:id('pra-u'),name:esc(f.name.trim()),city:esc(f.city||'Prato'),district:'Prato',
      logoUrl:'https://picsum.photos/seed/'+encodeURIComponent(f.name)+'/120/120',specialization:esc(f.specialization),
      description:esc(f.description.trim()),foundedYear:+f.foundedYear||null,employeeRange:esc(f.employeeRange),
      website:/^https?:\/\//.test(f.website||'')?f.website:'#',vatNumber:esc(f.vatNumber),
      certifications:list(f.certifications),productSectors:list(f.productSectors),exportMarkets:list(f.exportMarkets),ownerId:u.id});
    db.companies.unshift(c); save(); D.companies.unshift(c); return c;
  }

  /* ---- Newsletter ---- */
  function subscribe(email,topics){
    email=(email||'').trim().toLowerCase();
    if(!U.validateEmail(email)) throw new Error('Email non valida.');
    const s=db.subs.find(x=>x.email===email);
    if(s){ if(topics) s.topics=topics; save(); return {status:'updated'}; }
    db.subs.push({email,topics:topics||[],at:new Date().toISOString()}); save(); return {status:'new'};
  }

  /* ---- Avvio: reinserisce i contenuti salvati nei dati e ripristina la sessione ---- */
  D.discussions.unshift(...db.discussions); D.comments.push(...db.comments); D.companies.unshift(...db.companies);
  const s=db.users.find(x=>x.id===db.session); if(s) FDM.auth.login(pub(s));
  document.addEventListener('click',e=>{ if(e.target.closest('[data-logout]')) logout(); });

  FDM.store={esc,register,login,logout,findUser,addDiscussion,saveComment,addCompany,subscribe,subscriberCount:()=>db.subs.length};
})();
