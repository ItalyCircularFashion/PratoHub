const f=document.getElementById('f'), msg=document.getElementById('msg'), mode=document.body.dataset.mode;
f.addEventListener('submit',async e=>{
  e.preventDefault(); msg.textContent='';
  const v=Object.fromEntries(new FormData(f));
  try{
    if(mode==='register') await FDM.store.register(v); else await FDM.store.login(v.email,v.password);
    const next=new URLSearchParams(location.search).get('next');
    location.href=/^[a-z-]+\.html(\?[\w=&-]*)?$/.test(next||'')?next:'discussions.html';
  }catch(err){msg.textContent=err.message;}
});
