const f=document.getElementById('f'), msg=document.getElementById('msg');
if(!FDM.auth.getCurrentUser()){
  f.outerHTML='<a class="btn btn-primary" href="login.html?next=new-discussion.html">Accedi per aprire una discussione</a>';
}else{
  f.category.innerHTML=[...new Set(FDM.data.discussions.map(d=>d.category))].map(c=>`<option>${c}</option>`).join('');
  f.addEventListener('submit',e=>{
    e.preventDefault();
    const v=Object.fromEntries(new FormData(f)); v.tags=v.tags.split(',').map(s=>s.trim()).filter(Boolean);
    try{ location.href='thread.html?id='+FDM.store.addDiscussion(v).id; }catch(err){msg.textContent=err.message;}
  });
}
