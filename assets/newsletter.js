const TOPICS=['Moda & Lusso','Tessile & Materiali','Prato & Distretto','Materie prime & Energia','Eventi & Fiere'];
const f=document.getElementById('f'), msg=document.getElementById('msg');
document.getElementById('topics').innerHTML=TOPICS.map(t=>`<label><input type="checkbox" name="t" value="${t}" checked> ${t}</label>`).join('');
const u=FDM.auth.getCurrentUser(); if(u&&u.email) f.email.value=u.email;
f.addEventListener('submit',e=>{
  e.preventDefault();
  try{
    const r=FDM.store.subscribe(f.email.value,[...f.querySelectorAll('[name=t]:checked')].map(x=>x.value));
    msg.className='fm-msg ok'; msg.textContent=r.status==='new'?'Iscrizione confermata. Grazie!':'Preferenze aggiornate.';
  }catch(err){msg.className='fm-msg'; msg.textContent=err.message;}
});

// Edizione corrente: generata dai contenuti del sito (articoli, mercati, eventi, discussioni)
const abs=p=>new URL(p,location.href).href, D=FDM.data, pct=n=>(n>0?'+':'')+n+'%';
const A=(D.articles||[]).filter(a=>a.status==='published').sort((a,b)=>new Date(b.publishedAt)-new Date(a.publishedAt)).slice(0,5);
const M=[...FDM.market.commodities].sort((a,b)=>Math.abs(b.changeWeekly)-Math.abs(a.changeWeekly)).slice(0,3);
const E=(D.events||[]).filter(x=>!x.past).slice(0,3);
const T=[...D.discussions].sort((a,b)=>b.voteCount-a.voteCount).slice(0,3);
const sec=(h,items)=>items.length?`<h3>${h}</h3><ul>${items.join('')}</ul>`:'';
const html=
  sec('Le notizie della settimana',A.map(a=>`<li><a href="${abs('article.html?id='+a.id)}">${a.title}</a> — ${a.category}</li>`))+
  sec('Mercati: i movimenti della settimana',M.map(c=>`<li><b>${c.name}</b> ${c.value} ${c.unit} (${pct(c.changeWeekly)} a 7 giorni)</li>`))+
  sec('Eventi in arrivo',E.map(x=>`<li>${x.day} ${x.month} — ${x.title} (${x.type})</li>`))+
  sec('Dal forum',T.map(d=>`<li><a href="${abs('thread.html?id='+d.id)}">${d.title}</a> — ${d.replyCount} risposte</li>`));
const box=document.getElementById('issue');
box.innerHTML='<div class="eyebrow">Anteprima edizione corrente</div>'+html;
if(FDM.permissions.can(u,'MANAGE_NEWSLETTER')){
  const b=document.createElement('button'); b.className='btn btn-line'; b.style.marginTop='20px';
  b.textContent=`Copia HTML per l'invio (${FDM.store.subscriberCount()} iscritti)`;
  b.onclick=()=>navigator.clipboard.writeText('<h2>PratoHub Weekly</h2>'+html).then(()=>b.textContent='Copiato ✓');
  box.appendChild(b);
}
