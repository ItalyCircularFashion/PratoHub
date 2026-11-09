const f=document.getElementById('f'), msg=document.getElementById('msg');
if(!FDM.auth.getCurrentUser()){
  f.outerHTML='<a class="btn btn-primary" href="login.html?next=azienda-nuova.html">Accedi per registrare la tua azienda</a>';
}else{
  f.specialization.innerHTML=[...new Set(FDM.data.companies.map(c=>c.specialization))].map(c=>`<option>${c}</option>`).join('');
  f.addEventListener('submit',e=>{
    e.preventDefault();
    try{ location.href='company.html?id='+FDM.store.addCompany(Object.fromEntries(new FormData(f))).id; }
    catch(err){msg.textContent=err.message;}
  });
}
