(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const ms=[{id:"origine",number:"01",eyebrow:"IL PUNTO DI PARTENZA",title:"Tutto nasce dalla fibra.",description:"Un viaggio nella materia prima. Le fibre entrano nella filiera, vengono selezionate e preparate per le lavorazioni successive.",details:["Materia prima","Selezione","Preparazione"],accent:"#b9d3b0"},{id:"filatura",number:"02",eyebrow:"DALLA FIBRA AL FILATO",title:"La fibra diventa filo.",description:"La torsione conferisce coesione al materiale: il filato prende forma e viene avvolto su rocche. Un processo reso visibile in tre dimensioni.",details:["Stiratura","Torsione","Roccatura"],accent:"#e3ad76"},{id:"orditura",number:"03",eyebrow:"LA PREPARAZIONE",title:"Centinaia di fili. Una direzione.",description:"I fili d’ordito vengono organizzati parallelamente e preparati per alimentare il telaio. La camera segue la loro traiettoria.",details:["Parallelizzazione","Tensione","Subbio"],accent:"#9ac7dc"},{id:"tessitura",number:"04",eyebrow:"IL CUORE DELLA FABBRICA",title:"L’intreccio crea il tessuto.",description:"Ordito e trama si incontrano. I licci aprono il passo, la trama attraversa l’ordito e il pettine compatta l’intreccio.",details:["Apertura del passo","Inserzione trama","Battuta"],accent:"#efbd84"},{id:"rifinizione",number:"05",eyebrow:"IL CARATTERE DEL TESSUTO",title:"La superficie si trasforma.",description:"Le lavorazioni di rifinizione modificano mano, aspetto e caratteristiche del tessuto. Ogni scelta influisce sul risultato finale.",details:["Trattamenti","Controllo","Qualità"],accent:"#bca7df"},{id:"prodotto",number:"06",eyebrow:"IL RISULTATO",title:"Dal processo al prodotto.",description:"Il viaggio termina con il tessuto finito: una sintesi di competenze, lavorazioni e relazioni industriali.",details:["Tessuto finito","Filiera","Made in Prato"],accent:"#b8dfce"}],Cc=[{slug:"filiera",tag:"PROCESSI",title:"Un distretto, molte filiere",text:"Una lettura per processi del sistema produttivo pratese, dalle fibre ai prodotti finiti."},{slug:"imprese",tag:"B2B",title:"Le competenze delle imprese",text:"Specializzazioni, lavorazioni e connessioni che rendono riconoscibile il distretto."},{slug:"circolarita",tag:"SOSTENIBILITÀ",title:"La materia che ritorna",text:"Recupero, rigenerazione e nuove possibilità per il settore tessile."}];function n_(){return`<div class="site"><header class="header"><a class="brand" href="#top" aria-label="PratoHub homepage"><span class="brand-mark">P<span>✳</span></span><span>PRATO<span class="brand-light">HUB</span><small>WORLD / 04</small></span></a><nav aria-label="Navigazione principale"><a href="#experience">Esperienza</a><a href="#explore">Esplora</a><a href="#about">Il progetto</a></nav><a class="header-action" href="#experience">ENTRA NEL DISTRETTO <span>↗</span></a><button class="menu-toggle" aria-label="Apri navigazione" aria-expanded="false">☰</button></header>
<main id="top"><section class="intro"><div class="intro-orbit" aria-hidden="true"><i></i><i></i><i></i></div><div class="intro-content"><div class="eyebrow"><span class="signal"></span> DIGITAL TEXTILE DISTRICT · PRATO, ITALY</div><h1>LA MATERIA<br><em>PRENDE</em><br>FORMA<span class="period">.</span></h1><div class="intro-bottom"><p>Un'esperienza immersiva nella filiera tessile pratese. Non guardare soltanto il processo: <strong>attraversalo.</strong></p><a class="round-link" href="#experience" aria-label="Inizia l'esperienza">↓</a></div></div><div class="intro-aside">SCROLL TO EXPLORE <span>↓</span></div><div class="intro-index">43°52′N / 11°06′E</div></section>
<section id="experience" class="experience" aria-label="Viaggio tridimensionale nella filiera"><div class="world-sticky"><canvas id="world" aria-label="Ricostruzione 3D interattiva del processo tessile"></canvas><div class="world-vignette"></div><div class="world-top"><div class="world-label">PRATOHUB <span> / </span> THE TEXTILE JOURNEY</div><div class="world-status"><span class="signal"></span> LIVE 3D EXPERIENCE</div></div><div class="world-copy" id="world-copy"><div class="world-eyebrow" id="stage-eyebrow"></div><div class="world-number" id="stage-number"></div><h2 id="stage-title"></h2><p id="stage-description"></p><div class="stage-tags" id="stage-tags"></div></div><div class="world-bottom"><div class="world-hint">SCORRI PER ATTRAVERSARE LA FILIERA <span>↓</span></div><div class="stage-indicators">${ms.map((s,e)=>`<button class="stage-dot" data-stage="${e}" title="${s.title}" aria-label="Vai alla fase ${s.number}: ${s.title}"><span></span><small>${s.number}</small></button>`).join("")}</div><div class="world-counter"><span id="stage-current">01</span> / 06</div></div><div class="world-progress"><span id="world-progress"></span></div></div><div class="scroll-track">${ms.map(s=>`<div class="scroll-chapter" id="chapter-${s.id}" data-chapter="${s.id}"></div>`).join("")}</div></section>
<section class="interlude" id="about"><div class="interlude-kicker">OLTRE IL RENDERING</div><div class="interlude-grid"><h2>UN TERRITORIO.<br><em>MILLE COMPETENZE.</em></h2><div><p>Il distretto tessile pratese è un ecosistema di imprese, specializzazioni e processi produttivi interconnessi. Questa esperienza rende visibili alcune fasi della trasformazione tessile attraverso un percorso tridimensionale esplorabile.</p><p class="disclaimer">Il percorso 3D è una ricostruzione illustrativa: le sequenze produttive possono variare in base a fibra, prodotto e ciclo industriale.</p></div></div></section>
<section class="explore" id="explore"><div class="section-heading"><span>02 / SCOPRI IL DISTRETTO</span><h2>CONTINUA<br><em>L'ESPLORAZIONE.</em></h2></div><div class="editorial-grid">${Cc.map((s,e)=>`<a class="editorial-card" href="./${s.slug}.html"><div class="card-art card-art-${e+1}"><span class="card-symbol">${["✳","⌘","◉"][e]}</span><span class="card-arrow">↗</span></div><div class="card-meta">${s.tag} <span>0${e+1}</span></div><h3>${s.title}</h3><p>${s.text}</p><span class="card-cta">ESPLORA IL TEMA ↗</span></a>`).join("")}</div></section>
</main><footer><div class="footer-top"><span>PRATO<span class="brand-light">HUB</span></span><a href="#top">TORNA SU ↑</a></div><div class="footer-bottom"><span>UN PROTOTIPO DI STORYTELLING DIGITALE · 2026</span><span>DESIGNED FOR THE TEXTILE DISTRICT</span></div></footer></div>`}function i_(s){const e=Cc.find(t=>t.slug===s);return`<div class="topic-page"><header class="header"><a class="brand" href="./index.html"><span class="brand-mark">P<span>✳</span></span><span>PRATO<span class="brand-light">HUB</span><small>WORLD / 04</small></span></a><nav><a href="./index.html#experience">Esperienza 3D</a><a href="./index.html#explore">Esplora</a></nav><a class="header-action" href="./index.html">TORNA ALLA HOME ↗</a></header><main><section class="topic-hero"><div class="topic-graphic card-art-${Cc.indexOf(e)+1}"><div class="topic-graphic-inner">${["✳","⌘","◉"][Cc.indexOf(e)]}</div></div><div class="topic-content"><div class="eyebrow">PRATOHUB / ${e.tag}</div><h1>${e.title}</h1><p>${e.text}</p><a class="topic-return" href="./index.html#experience">← TORNA AL VIAGGIO TRIDIMENSIONALE</a></div></section><section class="topic-section"><div class="topic-section-kicker">IL PROGETTO</div><h2>Esplorare la filiera, comprendere le connessioni.</h2><p>Questa pagina è un concept editoriale originale della nuova architettura PratoHub. È predisposta per futuri contenuti verificati, senza utilizzare dati aziendali o notizie inventate.</p><div class="topic-lines"><span>RICERCA</span><span>INDUSTRIA</span><span>INNOVAZIONE</span></div></section></main><footer><div class="footer-top"><span>PRATOHUB</span><a href="./index.html">HOME ↗</a></div></footer></div>`}const zh="180",r_=0,Ff=1,s_=2,Yp=1,o_=2,Zi=3,cr=0,kn=1,On=2,Rr=0,$s=1,Bf=2,kf=3,zf=4,a_=5,is=100,c_=101,l_=102,u_=103,h_=104,f_=200,d_=201,p_=202,m_=203,Eu=204,bu=205,g_=206,__=207,v_=208,x_=209,y_=210,M_=211,S_=212,T_=213,E_=214,Au=0,wu=1,Ru=2,ao=3,Cu=4,Pu=5,Iu=6,Lu=7,qp=0,b_=1,A_=2,Cr=0,w_=1,R_=2,C_=3,Kp=4,P_=5,I_=6,L_=7,Hf="attached",D_="detached",$p=300,co=301,lo=302,Du=303,Nu=304,ll=306,uo=1e3,Sr=1001,Xc=1002,Pn=1003,jp=1004,Wo=1005,ni=1006,Pc=1007,ir=1008,zi=1009,Jp=1010,Zp=1011,ga=1012,Hh=1013,gs=1014,wi=1015,Oa=1016,Vh=1017,Gh=1018,_a=1020,Qp=35902,em=35899,tm=1021,nm=1022,gi=1023,va=1026,xa=1027,Wh=1028,Xh=1029,im=1030,Yh=1031,qh=1033,Ic=33776,Lc=33777,Dc=33778,Nc=33779,Uu=35840,Ou=35841,Fu=35842,Bu=35843,ku=36196,zu=37492,Hu=37496,Vu=37808,Gu=37809,Wu=37810,Xu=37811,Yu=37812,qu=37813,Ku=37814,$u=37815,ju=37816,Ju=37817,Zu=37818,Qu=37819,eh=37820,th=37821,nh=36492,ih=36494,rh=36495,sh=36283,oh=36284,ah=36285,ch=36286,ya=2300,Ma=2301,yl=2302,Vf=2400,Gf=2401,Wf=2402,N_=2500,U_=0,rm=1,lh=2,O_=3200,F_=3201,sm=0,B_=1,Mr="",an="srgb",Ln="srgb-linear",Yc="linear",St="srgb",Ts=7680,Xf=519,k_=512,z_=513,H_=514,om=515,V_=516,G_=517,W_=518,X_=519,uh=35044,Yf="300 es",Ui=2e3,qc=2001;class Eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qf=1234567;const ea=Math.PI/180,ho=180/Math.PI;function Ri(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function rt(s,e,t){return Math.max(e,Math.min(t,s))}function Kh(s,e){return(s%e+e)%e}function Y_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function q_(s,e,t){return s!==e?(t-s)/(e-s):0}function ta(s,e,t){return(1-t)*s+t*e}function K_(s,e,t,n){return ta(s,e,1-Math.exp(-t*n))}function $_(s,e=1){return e-Math.abs(Kh(s,e*2)-e)}function j_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function J_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Z_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Q_(s,e){return s+Math.random()*(e-s)}function e0(s){return s*(.5-Math.random())}function t0(s){s!==void 0&&(qf=s);let e=qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function n0(s){return s*ea}function i0(s){return s*ho}function r0(s){return(s&s-1)===0&&s!==0}function s0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function o0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function a0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const c0={DEG2RAD:ea,RAD2DEG:ho,generateUUID:Ri,clamp:rt,euclideanModulo:Kh,mapLinear:Y_,inverseLerp:q_,lerp:ta,damp:K_,pingpong:$_,smoothstep:j_,smootherstep:J_,randInt:Z_,randFloat:Q_,randFloatSpread:e0,seededRandom:t0,degToRad:n0,radToDeg:i0,isPowerOfTwo:r0,ceilPowerOfTwo:s0,floorPowerOfTwo:o0,setQuaternionFromProperEuler:a0,normalize:yt,denormalize:bi};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),R=Math.atan2(b,p*S);m=Math.sin(m*R)/b,a=Math.sin(a*R)/b}const v=a*S;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ml.copy(this).projectOnVector(e),this.sub(Ml)}reflect(e){return this.sub(Ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ml=new L,Kf=new kr;class Je{constructor(e,t,n,i,r,o,a,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],M=i[4],v=i[7],b=i[2],R=i[5],E=i[8];return r[0]=o*_+a*S+c*b,r[3]=o*m+a*M+c*R,r[6]=o*p+a*v+c*E,r[1]=l*_+u*S+h*b,r[4]=l*m+u*M+h*R,r[7]=l*p+u*v+h*E,r[2]=d*_+f*S+g*b,r[5]=d*m+f*M+g*R,r[8]=d*p+f*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sl.makeScale(e,t)),this}rotate(e){return this.premultiply(Sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sl=new Je;function am(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function l0(){const s=Sa("canvas");return s.style.display="block",s}const $f={};function Ta(s){s in $f||($f[s]=!0,console.warn(s))}function u0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const jf=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jf=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h0(){const s={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mr?Yc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ta("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ta("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ln]:{primaries:e,whitePoint:n,transfer:Yc,toXYZ:jf,fromXYZ:Jf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:n,transfer:St,toXYZ:jf,fromXYZ:Jf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),s}const ht=h0();function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class f0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Sa("canvas")),Es.width=e.width,Es.height=e.height;const i=Es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=or(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(or(t[n]/255)*255):t[n]=or(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d0=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Tl(i[o].image)):r.push(Tl(i[o]))}else r=Tl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Tl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?f0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p0=0;const El=new L;class cn extends Eo{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Sr,i=Sr,r=ni,o=ir,a=gi,c=zi,l=cn.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Ri(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=$p;cn.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,v=(f+1)/2,b=(p+1)/2,R=(u+d)/4,E=(h+_)/4,A=(g+m)/4;return M>v&&M>b?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=R/n,r=E/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=R/i,r=A/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=E/r,i=A/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m0 extends Eo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new cn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new $h(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends m0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cm extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g0 extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Ha.subVectors(this.max,Po),bs.subVectors(e.a,Po),As.subVectors(e.b,Po),ws.subVectors(e.c,Po),dr.subVectors(As,bs),pr.subVectors(ws,As),Gr.subVectors(bs,ws);let t=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-Gr.z,Gr.y,dr.z,0,-dr.x,pr.z,0,-pr.x,Gr.z,0,-Gr.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-Gr.y,Gr.x,0];return!bl(t,bs,As,ws,Ha)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,bs,As,ws,Ha))?!1:(Va.crossVectors(dr,pr),t=[Va.x,Va.y,Va.z],bl(t,bs,As,ws,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new L,new L,new L,new L,new L,new L,new L,new L],yi=new L,za=new hr,bs=new L,As=new L,ws=new L,dr=new L,pr=new L,Gr=new L,Po=new L,Ha=new L,Va=new L,Wr=new L;function bl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Wr.fromArray(s,r);const a=i.x*Math.abs(Wr.x)+i.y*Math.abs(Wr.y)+i.z*Math.abs(Wr.z),c=e.dot(Wr),l=t.dot(Wr),u=n.dot(Wr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const _0=new hr,Io=new L,Al=new L;class Gi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Io,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Al)),this.expandByPoint(Io.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yi=new L,wl=new L,Ga=new L,mr=new L,Rl=new L,Wa=new L,Cl=new L;class ul{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wl.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(wl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ga),a=mr.dot(this.direction),c=-mr.dot(Ga),l=mr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(wl).addScaledVector(Ga,d),f}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const n=Yi.dot(this.direction),i=Yi.dot(Yi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,i,r){Rl.subVectors(t,e),Wa.subVectors(n,e),Cl.crossVectors(Rl,Wa);let o=this.direction.dot(Cl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mr.subVectors(this.origin,e);const c=a*this.direction.dot(Wa.crossVectors(mr,Wa));if(c<0)return null;const l=a*this.direction.dot(Rl.cross(mr));if(l<0||c+l>o)return null;const u=-a*mr.dot(Cl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v0,e,x0)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),gr.crossVectors(n,Kn),gr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),gr.crossVectors(n,Kn)),gr.normalize(),Xa.crossVectors(Kn,gr),i[0]=gr.x,i[4]=Xa.x,i[8]=Kn.x,i[1]=gr.y,i[5]=Xa.y,i[9]=Kn.y,i[2]=gr.z,i[6]=Xa.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],M=n[7],v=n[11],b=n[15],R=i[0],E=i[4],A=i[8],x=i[12],y=i[1],P=i[5],N=i[9],z=i[13],V=i[2],G=i[6],W=i[10],Y=i[14],H=i[3],ne=i[7],D=i[11],ue=i[15];return r[0]=o*R+a*y+c*V+l*H,r[4]=o*E+a*P+c*G+l*ne,r[8]=o*A+a*N+c*W+l*D,r[12]=o*x+a*z+c*Y+l*ue,r[1]=u*R+h*y+d*V+f*H,r[5]=u*E+h*P+d*G+f*ne,r[9]=u*A+h*N+d*W+f*D,r[13]=u*x+h*z+d*Y+f*ue,r[2]=g*R+_*y+m*V+p*H,r[6]=g*E+_*P+m*G+p*ne,r[10]=g*A+_*N+m*W+p*D,r[14]=g*x+_*z+m*Y+p*ue,r[3]=S*R+M*y+v*V+b*H,r[7]=S*E+M*P+v*G+b*ne,r[11]=S*A+M*N+v*W+b*D,r[15]=S*x+M*z+v*Y+b*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,M=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,v=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,b=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,R=t*S+n*M+i*v+r*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return e[0]=S*E,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*E,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*E,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*E,e[4]=M*E,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*E,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*E,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*E,e[8]=v*E,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*E,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*E,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*E,e[12]=b*E,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*E,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*E,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,S=c*l,M=c*u,v=c*h,b=n.x,R=n.y,E=n.z;return i[0]=(1-(_+p))*b,i[1]=(f+v)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(f-v)*R,i[5]=(1-(d+p))*R,i[6]=(m+S)*R,i[7]=0,i[8]=(g+M)*E,i[9]=(m-S)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Rs.set(i[0],i[1],i[2]).length();const o=Rs.set(i[4],i[5],i[6]).length(),a=Rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Mi.copy(this);const l=1/r,u=1/o,h=1/a;return Mi.elements[0]*=l,Mi.elements[1]*=l,Mi.elements[2]*=l,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=h,Mi.elements[9]*=h,Mi.elements[10]*=h,t.setFromRotationMatrix(Mi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ui,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Ui)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===qc)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ui,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Ui)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===qc)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rs=new L,Mi=new Ze,v0=new L(0,0,0),x0=new L(1,1,1),gr=new L,Xa=new L,Kn=new L,Zf=new Ze,Qf=new kr;class Hi{constructor(e=0,t=0,n=0,i=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class lm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y0=0;const ed=new L,Cs=new kr,qi=new Ze,Ya=new L,Lo=new L,M0=new L,S0=new kr,td=new L(1,0,0),nd=new L(0,1,0),id=new L(0,0,1),rd={type:"added"},T0={type:"removed"},Ps={type:"childadded",child:null},Pl={type:"childremoved",child:null};class Nt extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new L,t=new Hi,n=new kr,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Je}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(id,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Lo,Ya,this.up):qi.lookAt(Ya,Lo,this.up),this.quaternion.setFromRotationMatrix(qi),i&&(qi.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(qi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rd),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T0),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rd),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,M0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,S0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Nt.DEFAULT_UP=new L(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new L,Ki=new L,Il=new L,$i=new L,Is=new L,Ls=new L,sd=new L,Ll=new L,Dl=new L,Nl=new L,Ul=new gt,Ol=new gt,Fl=new gt;class Ai{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Si.subVectors(e,t),i.cross(Si);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Si.subVectors(i,t),Ki.subVectors(n,t),Il.subVectors(e,t);const o=Si.dot(Si),a=Si.dot(Ki),c=Si.dot(Il),l=Ki.dot(Ki),u=Ki.dot(Il),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,$i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$i.x),c.addScaledVector(o,$i.y),c.addScaledVector(a,$i.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ul.setScalar(0),Ol.setScalar(0),Fl.setScalar(0),Ul.fromBufferAttribute(e,t),Ol.fromBufferAttribute(e,n),Fl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ul,r.x),o.addScaledVector(Ol,r.y),o.addScaledVector(Fl,r.z),o}static isFrontFacing(e,t,n,i){return Si.subVectors(n,t),Ki.subVectors(e,t),Si.cross(Ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Si.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ai.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Is.subVectors(i,n),Ls.subVectors(r,n),Ll.subVectors(e,n);const c=Is.dot(Ll),l=Ls.dot(Ll);if(c<=0&&l<=0)return t.copy(n);Dl.subVectors(e,i);const u=Is.dot(Dl),h=Ls.dot(Dl);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Is,o);Nl.subVectors(e,r);const f=Is.dot(Nl),g=Ls.dot(Nl);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ls,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return sd.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(sd,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Is,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Bl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=Kh(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bl(o,r,e+1/3),this.g=Bl(o,r,e),this.b=Bl(o,r,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const n=um[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return ht.workingToColorSpace(dn.copy(this),e),Math.round(rt(dn.r*255,0,255))*65536+Math.round(rt(dn.g*255,0,255))*256+Math.round(rt(dn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,r=dn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=an){ht.workingToColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(qa);const n=ta(_r.h,qa.h,t),i=ta(_r.s,qa.s,t),r=ta(_r.l,qa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new qe;qe.NAMES=um;let E0=0;class Bi extends Eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=$s,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=bu,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==cr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eu&&(n.blendSrc=this.blendSrc),this.blendDst!==bu&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ss extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=qp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new L,Ka=new Ie;let b0=0;class In{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),e}}class hm extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fm extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}let A0=0;const hi=new Ze,kl=new Nt,Ds=new L,$n=new hr,Do=new hr,rn=new L;class Dn extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(am(e)?fm:hm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,n){return hi.makeTranslation(e,t,n),this.applyMatrix4(hi),this}scale(e,t,n){return hi.makeScale(e,t,n),this.applyMatrix4(hi),this}lookAt(e){return kl.lookAt(e),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new en(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors($n.min,Do.min),$n.expandByPoint(rn),rn.addVectors($n.max,Do.max),$n.expandByPoint(rn)):($n.expandByPoint(Do.min),$n.expandByPoint(Do.max))}$n.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)rn.fromBufferAttribute(a,l),c&&(Ds.fromBufferAttribute(e,l),rn.add(Ds)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new L,c[A]=new L;const l=new L,u=new L,h=new L,d=new Ie,f=new Ie,g=new Ie,_=new L,m=new L;function p(A,x,y){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[A].add(_),a[x].add(_),a[y].add(_),c[A].add(m),c[x].add(m),c[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let A=0,x=S.length;A<x;++A){const y=S[A],P=y.start,N=y.count;for(let z=P,V=P+N;z<V;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new L,v=new L,b=new L,R=new L;function E(A){b.fromBufferAttribute(i,A),R.copy(b);const x=a[A];M.copy(x),M.sub(b.multiplyScalar(b.dot(x))).normalize(),v.crossVectors(R,x);const P=v.dot(c[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,P)}for(let A=0,x=S.length;A<x;++A){const y=S[A],P=y.start,N=y.count;for(let z=P,V=P+N;z<V;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new In(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const od=new Ze,Xr=new ul,$a=new Gi,ad=new L,ja=new L,Ja=new L,Za=new L,zl=new L,Qa=new L,cd=new L,ec=new L;class Ht extends Nt{constructor(e=new Dn,t=new ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Qa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(zl.fromBufferAttribute(h,e),o?Qa.addScaledVector(zl,u):Qa.addScaledVector(zl.sub(t),u))}t.add(Qa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),Xr.copy(e.ray).recast(e.near),!($a.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere($a,ad)===null||Xr.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(od.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(od),!(n.boundingBox!==null&&Xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,b=M;v<b;v+=3){const R=a.getX(v),E=a.getX(v+1),A=a.getX(v+2);i=tc(this,p,e,n,l,u,h,R,E,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=tc(this,o,e,n,l,u,h,S,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,b=M;v<b;v+=3){const R=v,E=v+1,A=v+2;i=tc(this,p,e,n,l,u,h,R,E,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,M=m+1,v=m+2;i=tc(this,o,e,n,l,u,h,S,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function w0(s,e,t,n,i,r,o,a){let c;if(e.side===kn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===cr,a),c===null)return null;ec.copy(a),ec.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ec);return l<t.near||l>t.far?null:{distance:l,point:ec.clone(),object:s}}function tc(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,ja),s.getVertexPosition(c,Ja),s.getVertexPosition(l,Za);const u=w0(s,e,t,n,ja,Ja,Za,cd);if(u){const h=new L;Ai.getBarycoord(cd,ja,Ja,Za,h),i&&(u.uv=Ai.getInterpolatedAttribute(i,a,c,l,h,new Ie)),r&&(u.uv1=Ai.getInterpolatedAttribute(r,a,c,l,h,new Ie)),o&&(u.normal=Ai.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};Ai.getNormal(ja,Ja,Za,d.normal),u.face=d,u.barycoord=h}return u}class zr extends Dn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(h,2));function g(_,m,p,S,M,v,b,R,E,A,x){const y=v/E,P=b/A,N=v/2,z=b/2,V=R/2,G=E+1,W=A+1;let Y=0,H=0;const ne=new L;for(let D=0;D<W;D++){const ue=D*P-z;for(let Oe=0;Oe<G;Oe++){const st=Oe*y-N;ne[_]=st*S,ne[m]=ue*M,ne[p]=V,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[p]=R>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Oe/E),h.push(1-D/A),Y+=1}}for(let D=0;D<A;D++)for(let ue=0;ue<E;ue++){const Oe=d+ue+G*D,st=d+ue+G*(D+1),We=d+(ue+1)+G*(D+1),Ge=d+(ue+1)+G*D;c.push(Oe,st,Ge),c.push(st,We,Ge),H+=6}a.addGroup(f,H,x),f+=H,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function En(s){const e={};for(let t=0;t<s.length;t++){const n=fo(s[t]);for(const i in n)e[i]=n[i]}return e}function R0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const C0={clone:fo,merge:En};var P0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=R0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pm extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new L,ld=new Ie,ud=new Ie;class Rn extends pm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,ld,ud),t.subVectors(ud,ld)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,Us=1;class L0 extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rn(Ns,Us,e,t);i.layers=this.layers,this.add(i);const r=new Rn(Ns,Us,e,t);r.layers=this.layers,this.add(r);const o=new Rn(Ns,Us,e,t);o.layers=this.layers,this.add(o);const a=new Rn(Ns,Us,e,t);a.layers=this.layers,this.add(a);const c=new Rn(Ns,Us,e,t);c.layers=this.layers,this.add(c);const l=new Rn(Ns,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mm extends cn{constructor(e=[],t=co,n,i,r,o,a,c,l,u){super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D0 extends _s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zr(5,5,5),r=new Nr({name:"CubemapFromEquirect",uniforms:fo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Rr});r.uniforms.tEquirect.value=t;const o=new Ht(i,r),a=t.minFilter;return t.minFilter===ir&&(t.minFilter=ni),new L0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Qt extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N0={type:"move"};class Hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new jh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class U0 extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class O0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uh,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new L;class Jh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hd=new L,fd=new gt,dd=new gt,F0=new L,pd=new Ze,nc=new L,Vl=new Gi,md=new Ze,Gl=new ul;class B0 extends Ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hf,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nc),this.boundingBox.expandByPoint(nc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nc),this.boundingSphere.expandByPoint(nc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vl.copy(this.boundingSphere),Vl.applyMatrix4(i),e.ray.intersectsSphere(Vl)!==!1&&(md.copy(i).invert(),Gl.copy(e.ray).applyMatrix4(md),!(this.boundingBox!==null&&Gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===D_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;fd.fromBufferAttribute(i.attributes.skinIndex,e),dd.fromBufferAttribute(i.attributes.skinWeight,e),hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=dd.getComponent(r);if(o!==0){const a=fd.getComponent(r);pd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(F0.copy(hd).applyMatrix4(pd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gm extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _m extends cn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Pn,u=Pn,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new Ze,k0=new Ze;class Zh{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:k0;gd.multiplyMatrices(a,t[r]),gd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Zh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _m(t,e,e,gi,wi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new gm),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class hh extends In{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Os=new Ze,_d=new Ze,ic=[],vd=new hr,z0=new Ze,No=new Ht,Uo=new Gi;class H0 extends Ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,z0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),vd.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(vd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),Uo.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(n),e.ray.intersectsSphere(Uo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Os),_d.multiplyMatrices(n,Os),No.matrixWorld=_d,No.raycast(e,ic);for(let o=0,a=ic.length;o<a;o++){const c=ic[o];c.instanceId=r,c.object=this,t.push(c)}ic.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _m(new Float32Array(i*this.count),i,this.count,Wh,wi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wl=new L,V0=new L,G0=new Je;class Zr{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Wl.subVectors(n,t).cross(V0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||G0.getNormalMatrix(e),i=this.coplanarPoint(Wl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Gi,W0=new Ie(.5,.5),rc=new L;class Qh{constructor(e=new Zr,t=new Zr,n=new Zr,i=new Zr,r=new Zr,o=new Zr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ui,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],M=r[13],v=r[14],b=r[15];if(i[0].setComponents(l-o,f-u,p-g,b-S).normalize(),i[1].setComponents(l+o,f+u,p+g,b+S).normalize(),i[2].setComponents(l+a,f+h,p+_,b+M).normalize(),i[3].setComponents(l-a,f-h,p-_,b-M).normalize(),n)i[4].setComponents(c,d,m,v).normalize(),i[5].setComponents(l-c,f-d,p-m,b-v).normalize();else if(i[4].setComponents(l-c,f-d,p-m,b-v).normalize(),t===Ui)i[5].setComponents(l+c,f+d,p+m,b+v).normalize();else if(t===qc)i[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const t=W0.distanceTo(e.center);return Yr.radius=.7071067811865476+t,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(rc.x=i.normal.x>0?e.max.x:e.min.x,rc.y=i.normal.y>0?e.max.y:e.min.y,rc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ef extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kc=new L,$c=new L,xd=new Ze,Oo=new ul,sc=new Gi,Xl=new L,yd=new L;class Ea extends Nt{constructor(e=new Dn,t=new ef){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Kc.fromBufferAttribute(t,i-1),$c.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Kc.distanceTo($c);e.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(i),sc.radius+=r,e.ray.intersectsSphere(sc)===!1)return;xd.copy(i).invert(),Oo.copy(e.ray).applyMatrix4(xd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),S=u.getX(_+1),M=oc(this,e,Oo,c,p,S,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=oc(this,e,Oo,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=oc(this,e,Oo,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=oc(this,e,Oo,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oc(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Kc.fromBufferAttribute(a,i),$c.fromBufferAttribute(a,r),t.distanceSqToSegment(Kc,$c,Xl,yd)>n)return;Xl.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Xl);if(!(l<e.near||l>e.far))return{distance:l,point:yd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Md=new L,Sd=new L;class X0 extends Ea{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Md.fromBufferAttribute(t,i),Sd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Md.distanceTo(Sd);e.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y0 extends Ea{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vm extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Td=new Ze,fh=new ul,ac=new Gi,cc=new L;class q0 extends Nt{constructor(e=new Dn,t=new vm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(i),ac.radius+=r,e.ray.intersectsSphere(ac)===!1)return;Td.copy(i).invert(),fh.copy(e.ray).applyMatrix4(Td);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);cc.fromBufferAttribute(h,m),Ed(cc,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)cc.fromBufferAttribute(h,g),Ed(cc,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ed(s,e,t,n,i,r,o){const a=fh.distanceSqToPoint(s);if(a<t){const c=new L;fh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xm extends cn{constructor(e,t,n=gs,i,r,o,a=Pn,c=Pn,l,u=va,h=1){if(u!==va&&u!==xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ym extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fa extends Dn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new en(h,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(f,2));function S(){const v=new L,b=new L;let R=0;const E=(t-e)/n;for(let A=0;A<=r;A++){const x=[],y=A/r,P=y*(t-e)+e;for(let N=0;N<=i;N++){const z=N/i,V=z*c+a,G=Math.sin(V),W=Math.cos(V);b.x=P*G,b.y=-y*n+m,b.z=P*W,h.push(b.x,b.y,b.z),v.set(G,E,W).normalize(),d.push(v.x,v.y,v.z),f.push(z,1-y),x.push(g++)}_.push(x)}for(let A=0;A<i;A++)for(let x=0;x<r;x++){const y=_[x][A],P=_[x+1][A],N=_[x+1][A+1],z=_[x][A+1];(e>0||x!==0)&&(u.push(y,P,z),R+=3),(t>0||x!==r-1)&&(u.push(P,N,z),R+=3)}l.addGroup(p,R,0),p+=R}function M(v){const b=g,R=new Ie,E=new L;let A=0;const x=v===!0?e:t,y=v===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let N=0;N<=i;N++){const V=N/i*c+a,G=Math.cos(V),W=Math.sin(V);E.x=x*W,E.y=m*y,E.z=x*G,h.push(E.x,E.y,E.z),d.push(0,y,0),R.x=G*.5+.5,R.y=W*.5*y+.5,f.push(R.x,R.y),g++}for(let N=0;N<i;N++){const z=b+N,V=P+N;v===!0?u.push(V,V+1,z):u.push(V+1,V,z),A+=3}l.addGroup(p,A,v===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hl extends Fa{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tf extends Dn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new en(r,3)),this.setAttribute("normal",new en(r.slice(),3)),this.setAttribute("uv",new en(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new L,v=new L,b=new L;for(let R=0;R<t.length;R+=3)f(t[R+0],M),f(t[R+1],v),f(t[R+2],b),c(M,v,b,S)}function c(S,M,v,b){const R=b+1,E=[];for(let A=0;A<=R;A++){E[A]=[];const x=S.clone().lerp(v,A/R),y=M.clone().lerp(v,A/R),P=R-A;for(let N=0;N<=P;N++)N===0&&A===R?E[A][N]=x:E[A][N]=x.clone().lerp(y,N/P)}for(let A=0;A<R;A++)for(let x=0;x<2*(R-A)-1;x++){const y=Math.floor(x/2);x%2===0?(d(E[A][y+1]),d(E[A+1][y]),d(E[A][y])):(d(E[A][y+1]),d(E[A+1][y+1]),d(E[A+1][y]))}}function l(S){const M=new L;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(S),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){const S=new L;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const v=m(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;o.push(v,1-b)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const M=o[S+0],v=o[S+2],b=o[S+4],R=Math.max(M,v,b),E=Math.min(M,v,b);R>.9&&E<.1&&(M<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),b<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,M){const v=S*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){const S=new L,M=new L,v=new L,b=new L,R=new Ie,E=new Ie,A=new Ie;for(let x=0,y=0;x<r.length;x+=9,y+=6){S.set(r[x+0],r[x+1],r[x+2]),M.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),R.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),A.set(o[y+4],o[y+5]),b.copy(S).add(M).add(v).divideScalar(3);const P=m(b);_(R,y+0,S,P),_(E,y+2,M,P),_(A,y+4,v,P)}}function _(S,M,v,b){b<0&&S.x===1&&(o[M]=S.x-1),v.x===0&&v.z===0&&(o[M]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.vertices,e.indices,e.radius,e.details)}}class fr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new Ie:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,i=[],r=[],o=[],a=new L,c=new Ze;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mm extends fr{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ie){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class K0 extends Mm{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nf(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const lc=new L,Yl=new nf,ql=new nf,Kl=new nf;class rf extends fr{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(lc.subVectors(i[0],i[1]).add(i[0]),l=lc);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(lc.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=lc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Yl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),ql.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),Kl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),ql.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Kl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Yl.calc(c),ql.calc(c),Kl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bd(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function $0(s,e){const t=1-s;return t*t*e}function j0(s,e){return 2*(1-s)*s*e}function J0(s,e){return s*s*e}function na(s,e,t,n){return $0(s,e)+j0(s,t)+J0(s,n)}function Z0(s,e){const t=1-s;return t*t*t*e}function Q0(s,e){const t=1-s;return 3*t*t*s*e}function ev(s,e){return 3*(1-s)*s*s*e}function tv(s,e){return s*s*s*e}function ia(s,e,t,n,i){return Z0(s,e)+Q0(s,t)+ev(s,n)+tv(s,i)}class nv extends fr{constructor(e=new Ie,t=new Ie,n=new Ie,i=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ie){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ia(e,i.x,r.x,o.x,a.x),ia(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class iv extends fr{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ia(e,i.x,r.x,o.x,a.x),ia(e,i.y,r.y,o.y,a.y),ia(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rv extends fr{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sv extends fr{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ov extends fr{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(na(e,i.x,r.x,o.x),na(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sm extends fr{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(na(e,i.x,r.x,o.x),na(e,i.y,r.y,o.y),na(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class av extends fr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(bd(a,c.x,l.x,u.x,h.x),bd(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ie().fromArray(i))}return this}}var cv=Object.freeze({__proto__:null,ArcCurve:K0,CatmullRomCurve3:rf,CubicBezierCurve:nv,CubicBezierCurve3:iv,EllipseCurve:Mm,LineCurve:rv,LineCurve3:sv,QuadraticBezierCurve:ov,QuadraticBezierCurve3:Sm,SplineCurve:av});class sf extends tf{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sf(e.radius,e.detail)}}class po extends Dn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*d-o;for(let M=0;M<l;M++){const v=M*h-r;g.push(v,-S,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const M=S+l*p,v=S+l*(p+1),b=S+1+l*(p+1),R=S+1+l*p;f.push(M,v,R),f.push(v,b,R)}this.setIndex(f),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}class fl extends Dn{constructor(e=new Sm(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new Ie;let u=new L;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new en(h,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(f,2));function _(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),S(),p()}function m(M){u=e.getPointAt(M/t,u);const v=o.normals[M],b=o.binormals[M];for(let R=0;R<=i;R++){const E=R/i*Math.PI*2,A=Math.sin(E),x=-Math.cos(E);c.x=x*v.x+A*b.x,c.y=x*v.y+A*b.y,c.z=x*v.z+A*b.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let v=1;v<=i;v++){const b=(i+1)*(M-1)+(v-1),R=(i+1)*M+(v-1),E=(i+1)*M+v,A=(i+1)*(M-1)+v;g.push(b,R,A),g.push(R,E,A)}}function S(){for(let M=0;M<=t;M++)for(let v=0;v<=i;v++)l.x=M/t,l.y=v/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new fl(new cv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ei extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sm,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends Ei{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class lv extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uv extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function uc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function hv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function fv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ad(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Tm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Ba{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dv extends Ba{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vf,endingEnd:Vf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gf:r=e,a=2*t-n;break;case Wf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gf:o=e,c=2*n-t;break;case Wf:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+S*o[l+b]+M*o[c+b]+v*o[h+b];return r}}class pv extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class mv extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ci{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uc(t,this.TimeBufferType),this.values=uc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uc(e.times,Array),values:uc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case yl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&hv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ci.prototype.ValueTypeName="";Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Ma;class bo extends Ci{constructor(e,t,n){super(e,t,n)}}bo.prototype.ValueTypeName="bool";bo.prototype.ValueBufferType=Array;bo.prototype.DefaultInterpolation=ya;bo.prototype.InterpolantFactoryMethodLinear=void 0;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Em extends Ci{constructor(e,t,n,i){super(e,t,n,i)}}Em.prototype.ValueTypeName="color";class mo extends Ci{constructor(e,t,n,i){super(e,t,n,i)}}mo.prototype.ValueTypeName="number";class gv extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)kr.slerpFlat(r,0,o,l-a,o,l,c);return r}}class go extends Ci{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new gv(this.times,this.values,this.getValueSize(),e)}}go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;class Ao extends Ci{constructor(e,t,n){super(e,t,n)}}Ao.prototype.ValueTypeName="string";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=ya;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class _o extends Ci{constructor(e,t,n,i){super(e,t,n,i)}}_o.prototype.ValueTypeName="vector";class _v{constructor(e="",t=-1,n=[],i=N_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ri(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Ci.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=fv(c);c=Ad(c,1,u),l=Ad(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new mo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];Tm(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new mo(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(_o,f+".position",d,"pos",i),n(go,f+".quaternion",d,"rot",i),n(_o,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function vv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mo;case"vector":case"vector2":case"vector3":case"vector4":return _o;case"color":return Em;case"quaternion":return go;case"bool":case"boolean":return bo;case"string":return Ao}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function xv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vv(s.type);if(s.times===void 0){const t=[],n=[];Tm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const rr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yv{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Mv=new yv;class wo{constructor(e){this.manager=e!==void 0?e:Mv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ji={};class Sv extends Error{constructor(e,t){super(e),this.response=t}}class bm extends wo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=rr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:i});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ji[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:M,value:v})=>{if(M)p.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,E=u.length;R<E;R++){const A=u[R];A.onProgress&&A.onProgress(b)}p.enqueue(v),S()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Sv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{rr.add(`file:${e}`,l);const u=ji[e];delete ji[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ji[e];if(u===void 0)throw this.manager.itemError(e),l;delete ji[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fs=new WeakMap;class Tv extends wo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=rr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Fs.get(o);h===void 0&&(h=[],Fs.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Sa("img");function c(){u(),t&&t(this);const h=Fs.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Fs.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),rr.remove(`image:${e}`);const d=Fs.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}Fs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),rr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Ev extends wo{constructor(e){super(e)}load(e,t,n,i){const r=new cn,o=new Tv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class dl extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class bv extends dl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $l=new Ze,wd=new L,Rd=new L;class of{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wd.setFromMatrixPosition(e.matrixWorld),t.position.copy(wd),Rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rd),t.updateMatrixWorld(),$l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Av extends of{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ho*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wv extends dl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Av}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Cd=new Ze,Fo=new L,jl=new L;class Rv extends of{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fo),jl.copy(n.position),jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jl),n.updateMatrixWorld(),i.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,n.coordinateSystem,n.reversedDepth)}}class Am extends dl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class af extends pm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cv extends of{constructor(){super(new af(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wm extends dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Cv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ra{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Jl=new WeakMap;class Pv extends wo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=rr.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(Jl.has(o)===!0)i&&i(Jl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return rr.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Jl.set(c,l),rr.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});rr.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Iv extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Lv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const cf="\\[\\]\\.:\\/",Dv=new RegExp("["+cf+"]","g"),lf="[^"+cf+"]",Nv="[^"+cf.replace("\\.","")+"]",Uv=/((?:WC+[\/:])*)/.source.replace("WC",lf),Ov=/(WCOD+)?/.source.replace("WCOD",Nv),Fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lf),Bv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lf),kv=new RegExp("^"+Uv+Ov+Fv+Bv+"$"),zv=["material","materials","bones","map"];class Hv{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dv,"")}static parseTrackName(e){const t=kv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);zv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=Hv;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Pd(s,e,t,n){const i=Vv(n);switch(t){case tm:return s*e;case Wh:return s*e/i.components*i.byteLength;case Xh:return s*e/i.components*i.byteLength;case im:return s*e*2/i.components*i.byteLength;case Yh:return s*e*2/i.components*i.byteLength;case nm:return s*e*3/i.components*i.byteLength;case gi:return s*e*4/i.components*i.byteLength;case qh:return s*e*4/i.components*i.byteLength;case Ic:case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ou:case Bu:return Math.max(s,16)*Math.max(e,8)/4;case Uu:case Fu:return Math.max(s,8)*Math.max(e,8)/2;case ku:case zu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case qu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $u:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ju:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case nh:case ih:case rh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case sh:case oh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ah:case ch:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vv(s){switch(s){case zi:case Jp:return{byteLength:1,components:1};case ga:case Zp:case Oa:return{byteLength:2,components:1};case Vh:case Gh:return{byteLength:2,components:4};case gs:case Hh:case wi:return{byteLength:4,components:1};case Qp:case em:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);function Rm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gv(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ix=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,px=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ex=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ix=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ox=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,my=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,My=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ry=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,By=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Wv,alphahash_pars_fragment:Xv,alphamap_fragment:Yv,alphamap_pars_fragment:qv,alphatest_fragment:Kv,alphatest_pars_fragment:$v,aomap_fragment:jv,aomap_pars_fragment:Jv,batching_pars_vertex:Zv,batching_vertex:Qv,begin_vertex:ex,beginnormal_vertex:tx,bsdfs:nx,iridescence_fragment:ix,bumpmap_pars_fragment:rx,clipping_planes_fragment:sx,clipping_planes_pars_fragment:ox,clipping_planes_pars_vertex:ax,clipping_planes_vertex:cx,color_fragment:lx,color_pars_fragment:ux,color_pars_vertex:hx,color_vertex:fx,common:dx,cube_uv_reflection_fragment:px,defaultnormal_vertex:mx,displacementmap_pars_vertex:gx,displacementmap_vertex:_x,emissivemap_fragment:vx,emissivemap_pars_fragment:xx,colorspace_fragment:yx,colorspace_pars_fragment:Mx,envmap_fragment:Sx,envmap_common_pars_fragment:Tx,envmap_pars_fragment:Ex,envmap_pars_vertex:bx,envmap_physical_pars_fragment:Ox,envmap_vertex:Ax,fog_vertex:wx,fog_pars_vertex:Rx,fog_fragment:Cx,fog_pars_fragment:Px,gradientmap_pars_fragment:Ix,lightmap_pars_fragment:Lx,lights_lambert_fragment:Dx,lights_lambert_pars_fragment:Nx,lights_pars_begin:Ux,lights_toon_fragment:Fx,lights_toon_pars_fragment:Bx,lights_phong_fragment:kx,lights_phong_pars_fragment:zx,lights_physical_fragment:Hx,lights_physical_pars_fragment:Vx,lights_fragment_begin:Gx,lights_fragment_maps:Wx,lights_fragment_end:Xx,logdepthbuf_fragment:Yx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:Kx,logdepthbuf_vertex:$x,map_fragment:jx,map_pars_fragment:Jx,map_particle_fragment:Zx,map_particle_pars_fragment:Qx,metalnessmap_fragment:ey,metalnessmap_pars_fragment:ty,morphinstance_vertex:ny,morphcolor_vertex:iy,morphnormal_vertex:ry,morphtarget_pars_vertex:sy,morphtarget_vertex:oy,normal_fragment_begin:ay,normal_fragment_maps:cy,normal_pars_fragment:ly,normal_pars_vertex:uy,normal_vertex:hy,normalmap_pars_fragment:fy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:my,iridescence_pars_fragment:gy,opaque_fragment:_y,packing:vy,premultiplied_alpha_fragment:xy,project_vertex:yy,dithering_fragment:My,dithering_pars_fragment:Sy,roughnessmap_fragment:Ty,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:by,shadowmap_pars_vertex:Ay,shadowmap_vertex:wy,shadowmask_pars_fragment:Ry,skinbase_vertex:Cy,skinning_pars_vertex:Py,skinning_vertex:Iy,skinnormal_vertex:Ly,specularmap_fragment:Dy,specularmap_pars_fragment:Ny,tonemapping_fragment:Uy,tonemapping_pars_fragment:Oy,transmission_fragment:Fy,transmission_pars_fragment:By,uv_pars_fragment:ky,uv_pars_vertex:zy,uv_vertex:Hy,worldpos_vertex:Vy,background_vert:Gy,background_frag:Wy,backgroundCube_vert:Xy,backgroundCube_frag:Yy,cube_vert:qy,cube_frag:Ky,depth_vert:$y,depth_frag:jy,distanceRGBA_vert:Jy,distanceRGBA_frag:Zy,equirect_vert:Qy,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:sM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:cM,meshnormal_vert:lM,meshnormal_frag:uM,meshphong_vert:hM,meshphong_frag:fM,meshphysical_vert:dM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:_M,points_frag:vM,shadow_vert:xM,shadow_frag:yM,sprite_vert:MM,sprite_frag:SM},me={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Di={basic:{uniforms:En([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:En([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:En([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:En([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:En([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:En([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:En([me.points,me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:En([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:En([me.common,me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:En([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:En([me.sprite,me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:En([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:En([me.lights,me.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Di.physical={uniforms:En([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const hc={r:0,b:0,g:0},qr=new Hi,TM=new Ze;function EM(s,e,t,n,i,r,o){const a=new qe(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const b=g(M);b===null?p(a,c):b&&b.isColor&&(p(b,1),v=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===ll)?(u===void 0&&(u=new Ht(new zr(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:fo(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),qr.copy(v.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TM.makeRotationFromEuler(qr)),u.material.toneMapped=ht.getTransfer(b.colorSpace)!==St,(h!==b||d!==b.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ht(new po(2,2),new Nr({name:"BackgroundMaterial",uniforms:fo(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ht.getTransfer(b.colorSpace)!==St,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,v){M.getRGB(hc,dm(s)),n.buffers.color.setClear(hc.r,hc.g,hc.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m,dispose:S}}function bM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(y,P,N,z,V){let G=!1;const W=h(z,N,P);r!==W&&(r=W,l(r.object)),G=f(y,z,N,V),G&&g(y,z,N,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(y,P,N,z),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,P,N){const z=N.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let G=V[P.id];G===void 0&&(G={},V[P.id]=G);let W=G[z];return W===void 0&&(W=d(c()),G[z]=W),W}function d(y){const P=[],N=[],z=[];for(let V=0;V<t;V++)P[V]=0,N[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,P,N,z){const V=r.attributes,G=P.attributes;let W=0;const Y=N.getAttributes();for(const H in Y)if(Y[H].location>=0){const D=V[H];let ue=G[H];if(ue===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),D===void 0||D.attribute!==ue||ue&&D.data!==ue.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function g(y,P,N,z){const V={},G=P.attributes;let W=0;const Y=N.getAttributes();for(const H in Y)if(Y[H].location>=0){let D=G[H];D===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(D=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(D=y.instanceColor));const ue={};ue.attribute=D,D&&D.data&&(ue.data=D.data),V[H]=ue,W++}r.attributes=V,r.attributesNum=W,r.index=z}function _(){const y=r.newAttributes;for(let P=0,N=y.length;P<N;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const N=r.newAttributes,z=r.enabledAttributes,V=r.attributeDivisors;N[y]=1,z[y]===0&&(s.enableVertexAttribArray(y),z[y]=1),V[y]!==P&&(s.vertexAttribDivisor(y,P),V[y]=P)}function S(){const y=r.newAttributes,P=r.enabledAttributes;for(let N=0,z=P.length;N<z;N++)P[N]!==y[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function M(y,P,N,z,V,G,W){W===!0?s.vertexAttribIPointer(y,P,N,V,G):s.vertexAttribPointer(y,P,N,z,V,G)}function v(y,P,N,z){_();const V=z.attributes,G=N.getAttributes(),W=P.defaultAttributeValues;for(const Y in G){const H=G[Y];if(H.location>=0){let ne=V[Y];if(ne===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),ne!==void 0){const D=ne.normalized,ue=ne.itemSize,Oe=e.get(ne);if(Oe===void 0)continue;const st=Oe.buffer,We=Oe.type,Ge=Oe.bytesPerElement,$=We===s.INT||We===s.UNSIGNED_INT||ne.gpuType===Hh;if(ne.isInterleavedBufferAttribute){const J=ne.data,fe=J.stride,Ae=ne.offset;if(J.isInstancedInterleavedBuffer){for(let Te=0;Te<H.locationSize;Te++)p(H.location+Te,J.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Te=0;Te<H.locationSize;Te++)m(H.location+Te);s.bindBuffer(s.ARRAY_BUFFER,st);for(let Te=0;Te<H.locationSize;Te++)M(H.location+Te,ue/H.locationSize,We,D,fe*Ge,(Ae+ue/H.locationSize*Te)*Ge,$)}else{if(ne.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)p(H.location+J,ne.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let J=0;J<H.locationSize;J++)m(H.location+J);s.bindBuffer(s.ARRAY_BUFFER,st);for(let J=0;J<H.locationSize;J++)M(H.location+J,ue/H.locationSize,We,D,ue*Ge,ue/H.locationSize*J*Ge,$)}}else if(W!==void 0){const D=W[Y];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(H.location,D);break;case 3:s.vertexAttrib3fv(H.location,D);break;case 4:s.vertexAttrib4fv(H.location,D);break;default:s.vertexAttrib1fv(H.location,D)}}}}S()}function b(){A();for(const y in n){const P=n[y];for(const N in P){const z=P[N];for(const V in z)u(z[V].object),delete z[V];delete P[N]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const N in P){const z=P[N];for(const V in z)u(z[V].object),delete z[V];delete P[N]}delete n[y.id]}function E(y){for(const P in n){const N=n[P];if(N[y.id]===void 0)continue;const z=N[y.id];for(const V in z)u(z[V].object),delete z[V];delete N[y.id]}}function A(){x(),o=!0,r!==i&&(r=i,l(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function AM(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==gi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==zi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==wi&&!A)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:b,maxSamples:R}}function RM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Zr,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:n,M=S*4;let v=p.clippingState||null;c.value=v,v=u(g,d,M,f);for(let b=0;b!==M;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function CM(s){let e=new WeakMap;function t(o,a){return a===Du?o.mapping=co:a===Nu&&(o.mapping=lo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Du||a===Nu)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new D0(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Xs=4,Id=[.125,.215,.35,.446,.526,.582],rs=20,Zl=new af,Ld=new qe;let Ql=null,eu=0,tu=0,nu=!1;const Qr=(1+Math.sqrt(5))/2,Bs=1/Qr,Dd=[new L(-Qr,Bs,0),new L(Qr,Bs,0),new L(-Bs,0,Qr),new L(Bs,0,Qr),new L(0,Qr,-Bs),new L(0,Qr,Bs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],PM=new L;class Nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=PM}=r;Ql=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ql,eu,tu),this._renderer.xr.enabled=nu,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ql=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Oa,format:gi,colorSpace:Ln,depthBuffer:!1},i=Ud(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IM(r)),this._blurMaterial=LM(r,e,t)}return i}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Zl)}_sceneToCubeUV(e,t,n,i,r){const c=new Rn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ld),h.toneMapping=Cr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new ss({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),m=new Ht(new zr,_);let p=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,p=!0):(_.color.copy(Ld),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));const b=this._cubeSize;fc(i,v*b,M>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===co||e.mapping===lo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Od());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;fc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Zl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dd[(i-r-1)%Dd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ht(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*rs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const p=[];let S=0;for(let E=0;E<rs;++E){const A=E/_,x=Math.exp(-A*A/2);p.push(x),E===0?S+=x:E<m&&(S+=2*x)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[i],b=3*v*(i>M-Xs?i-M+Xs:0),R=4*(this._cubeSize-v);fc(t,b,R,3*v,2*v),c.setRenderTarget(t),c.render(h,Zl)}}function IM(s){const e=[],t=[],n=[];let i=s;const r=s-Xs+1+Id.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Xs?c=Id[o-s+Xs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const E=R%3*2/3-1,A=R>2?0:-1,x=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];S.set(x,_*g*R),M.set(d,m*g*R);const y=[R,R,R,R,R,R];v.set(y,p*g*R)}const b=new Dn;b.setAttribute("position",new In(S,_)),b.setAttribute("uv",new In(M,m)),b.setAttribute("faceIndex",new In(v,p)),e.push(b),i>Xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ud(s,e,t){const n=new _s(s,e,t);return n.texture.mapping=ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function LM(s,e,t){const n=new Float32Array(rs),i=new L(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Od(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Fd(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Du||c===Nu,u=c===co||c===lo;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Nd(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Nd(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function NM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ta("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function UM(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let M=0,v=S.length;M<v;M+=3){const b=S[M+0],R=S[M+1],E=S[M+2];d.push(b,R,R,E,E,b)}}else if(g!==void 0){const S=g.array;_=g.version;for(let M=0,v=S.length/3-1;M<v;M+=3){const b=M+0,R=M+1,E=M+2;d.push(b,R,R,E,E,b)}}else return;const m=new(am(d)?fm:hm)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function OM(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function FM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function BM(s,e,t){const n=new WeakMap,i=new gt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*R*4*h),A=new cm(E,b,R,h);A.type=wi,A.needsUpdate=!0;const x=v*4;for(let P=0;P<h;P++){const N=p[P],z=S[P],V=M[P],G=b*R*4*P;for(let W=0;W<N.count;W++){const Y=W*x;g===!0&&(i.fromBufferAttribute(N,W),E[G+Y+0]=i.x,E[G+Y+1]=i.y,E[G+Y+2]=i.z,E[G+Y+3]=0),_===!0&&(i.fromBufferAttribute(z,W),E[G+Y+4]=i.x,E[G+Y+5]=i.y,E[G+Y+6]=i.z,E[G+Y+7]=0),m===!0&&(i.fromBufferAttribute(V,W),E[G+Y+8]=i.x,E[G+Y+9]=i.y,E[G+Y+10]=i.z,E[G+Y+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new Ie(b,R)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function kM(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Cm=new cn,Bd=new xm(1,1),Pm=new cm,Im=new g0,Lm=new mm,kd=[],zd=[],Hd=new Float32Array(16),Vd=new Float32Array(9),Gd=new Float32Array(4);function Ro(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=kd[i];if(r===void 0&&(r=new Float32Array(i),kd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function pl(s,e){let t=zd[e];t===void 0&&(t=new Int32Array(e),zd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function zM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function WM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Gd.set(n),s.uniformMatrix2fv(this.addr,!1,Gd),nn(t,n)}}function XM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Vd.set(n),s.uniformMatrix3fv(this.addr,!1,Vd),nn(t,n)}}function YM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Hd.set(n),s.uniformMatrix4fv(this.addr,!1,Hd),nn(t,n)}}function qM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function KM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function jM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function JM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function eS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function tS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Bd.compareFunction=om,r=Bd):r=Cm,t.setTexture2D(e||r,i)}function nS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Im,i)}function iS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lm,i)}function rS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pm,i)}function sS(s){switch(s){case 5126:return zM;case 35664:return HM;case 35665:return VM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return YM;case 5124:case 35670:return qM;case 35667:case 35671:return KM;case 35668:case 35672:return $M;case 35669:case 35673:return jM;case 5125:return JM;case 36294:return ZM;case 36295:return QM;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}function oS(s,e){s.uniform1fv(this.addr,e)}function aS(s,e){const t=Ro(e,this.size,2);s.uniform2fv(this.addr,t)}function cS(s,e){const t=Ro(e,this.size,3);s.uniform3fv(this.addr,t)}function lS(s,e){const t=Ro(e,this.size,4);s.uniform4fv(this.addr,t)}function uS(s,e){const t=Ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hS(s,e){const t=Ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function fS(s,e){const t=Ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dS(s,e){s.uniform1iv(this.addr,e)}function pS(s,e){s.uniform2iv(this.addr,e)}function mS(s,e){s.uniform3iv(this.addr,e)}function gS(s,e){s.uniform4iv(this.addr,e)}function _S(s,e){s.uniform1uiv(this.addr,e)}function vS(s,e){s.uniform2uiv(this.addr,e)}function xS(s,e){s.uniform3uiv(this.addr,e)}function yS(s,e){s.uniform4uiv(this.addr,e)}function MS(s,e,t){const n=this.cache,i=e.length,r=pl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Cm,r[o])}function SS(s,e,t){const n=this.cache,i=e.length,r=pl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Im,r[o])}function TS(s,e,t){const n=this.cache,i=e.length,r=pl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Lm,r[o])}function ES(s,e,t){const n=this.cache,i=e.length,r=pl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Pm,r[o])}function bS(s){switch(s){case 5126:return oS;case 35664:return aS;case 35665:return cS;case 35666:return lS;case 35674:return uS;case 35675:return hS;case 35676:return fS;case 5124:case 35670:return dS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return _S;case 36294:return vS;case 36295:return xS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return ES}}class AS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sS(t.type)}}class wS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bS(t.type)}}class RS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const iu=/(\w+)(\])?(\[|\.)?/g;function Wd(s,e){s.seq.push(e),s.map[e.id]=e}function CS(s,e,t){const n=s.name,i=n.length;for(iu.lastIndex=0;;){const r=iu.exec(n),o=iu.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Wd(t,l===void 0?new AS(a,s,e):new wS(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new RS(a),Wd(t,h)),t=h}}}class Uc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);CS(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Xd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const PS=37297;let IS=0;function LS(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Yd=new Je;function DS(s){ht._getMatrix(Yd,ht.workingColorSpace,s);const e=`mat3( ${Yd.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(s)){case Yc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+LS(s.getShaderSource(e),a)}else return r}function NS(s,e){const t=DS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function US(s,e){let t;switch(e){case w_:t="Linear";break;case R_:t="Reinhard";break;case C_:t="Cineon";break;case Kp:t="ACESFilmic";break;case I_:t="AgX";break;case L_:t="Neutral";break;case P_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dc=new L;function OS(){ht.getLuminanceCoefficients(dc);const s=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function BS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Xo(s){return s!==""}function Kd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $d(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zS=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(s){return s.replace(zS,VS)}const HS=new Map;function VS(s,e){let t=et[e];if(t===void 0){const n=HS.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dh(t)}const GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(s){return s.replace(GS,WS)}function WS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===o_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function YS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case co:case lo:e="ENVMAP_TYPE_CUBE";break;case ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qS(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===lo&&(e="ENVMAP_MODE_REFRACTION"),e}function KS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qp:e="ENVMAP_BLENDING_MULTIPLY";break;case b_:e="ENVMAP_BLENDING_MIX";break;case A_:e="ENVMAP_BLENDING_ADD";break}return e}function $S(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jS(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=XS(t),l=YS(t),u=qS(t),h=KS(t),d=$S(t),f=FS(t),g=BS(r),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xo).join(`
`),p.length>0&&(p+=`
`)):(m=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),p=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?et.tonemapping_pars_fragment:"",t.toneMapping!==Cr?US("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,NS("linearToOutputTexel",t.outputColorSpace),OS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),o=dh(o),o=Kd(o,t),o=$d(o,t),a=dh(a),a=Kd(a,t),a=$d(a,t),o=jd(o),a=jd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+o,v=S+p+a,b=Xd(i,i.VERTEX_SHADER,M),R=Xd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,b),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(b)||"",V=i.getShaderInfoLog(R)||"",G=N.trim(),W=z.trim(),Y=V.trim();let H=!0,ne=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,R);else{const D=qd(i,b,"vertex"),ue=qd(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+D+`
`+ue)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||Y==="")&&(ne=!1);ne&&(P.diagnostics={runnable:H,programLog:G,vertexShader:{log:W,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(b),i.deleteShader(R),A=new Uc(i,_),x=kS(i,_)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,PS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}let JS=0;class ZS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new QS(e),t.set(e,n)),n}}class QS{constructor(e){this.id=JS++,this.code=e,this.usedTimes=0}}function eT(s,e,t,n,i,r,o){const a=new lm,c=new ZS,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,P,N,z){const V=N.fog,G=z.geometry,W=x.isMeshStandardMaterial?N.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),H=Y&&Y.mapping===ll?Y.image.height:null,ne=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const D=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=D!==void 0?D.length:0;let Oe=0;G.morphAttributes.position!==void 0&&(Oe=1),G.morphAttributes.normal!==void 0&&(Oe=2),G.morphAttributes.color!==void 0&&(Oe=3);let st,We,Ge,$;if(ne){const ge=Di[ne];st=ge.vertexShader,We=ge.fragmentShader}else st=x.vertexShader,We=x.fragmentShader,c.update(x),Ge=c.getVertexShaderID(x),$=c.getFragmentShaderID(x);const J=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Ae=z.isInstancedMesh===!0,Te=z.isBatchedMesh===!0,Be=!!x.map,ft=!!x.matcap,I=!!Y,Xe=!!x.aoMap,Le=!!x.lightMap,we=!!x.bumpMap,O=!!x.normalMap,ot=!!x.displacementMap,_e=!!x.emissiveMap,He=!!x.metalnessMap,$e=!!x.roughnessMap,mt=x.anisotropy>0,C=x.clearcoat>0,T=x.dispersion>0,k=x.iridescence>0,j=x.sheen>0,Z=x.transmission>0,K=mt&&!!x.anisotropyMap,ve=C&&!!x.clearcoatMap,se=C&&!!x.clearcoatNormalMap,Ee=C&&!!x.clearcoatRoughnessMap,he=k&&!!x.iridescenceMap,re=k&&!!x.iridescenceThicknessMap,le=j&&!!x.sheenColorMap,Ne=j&&!!x.sheenRoughnessMap,be=!!x.specularMap,ce=!!x.specularColorMap,Ve=!!x.specularIntensityMap,U=Z&&!!x.transmissionMap,ie=Z&&!!x.thicknessMap,oe=!!x.gradientMap,pe=!!x.alphaMap,te=x.alphaTest>0,Q=!!x.alphaHash,ye=!!x.extensions;let Fe=Cr;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const dt={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:We,defines:x.defines,customVertexShaderID:Ge,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Te,batchingColor:Te&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ln,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:ft,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:H,aoMap:Xe,lightMap:Le,bumpMap:we,normalMap:O,displacementMap:d&&ot,emissiveMap:_e,normalMapObjectSpace:O&&x.normalMapType===B_,normalMapTangentSpace:O&&x.normalMapType===sm,metalnessMap:He,roughnessMap:$e,anisotropy:mt,anisotropyMap:K,clearcoat:C,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:Ee,dispersion:T,iridescence:k,iridescenceMap:he,iridescenceThicknessMap:re,sheen:j,sheenColorMap:le,sheenRoughnessMap:Ne,specularMap:be,specularColorMap:ce,specularIntensityMap:Ve,transmission:Z,transmissionMap:U,thicknessMap:ie,gradientMap:oe,opaque:x.transparent===!1&&x.blending===$s&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:te,alphaHash:Q,combine:x.combine,mapUv:Be&&_(x.map.channel),aoMapUv:Xe&&_(x.aoMap.channel),lightMapUv:Le&&_(x.lightMap.channel),bumpMapUv:we&&_(x.bumpMap.channel),normalMapUv:O&&_(x.normalMap.channel),displacementMapUv:ot&&_(x.displacementMap.channel),emissiveMapUv:_e&&_(x.emissiveMap.channel),metalnessMapUv:He&&_(x.metalnessMap.channel),roughnessMapUv:$e&&_(x.roughnessMap.channel),anisotropyMapUv:K&&_(x.anisotropyMap.channel),clearcoatMapUv:ve&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(x.sheenRoughnessMap.channel),specularMapUv:be&&_(x.specularMap.channel),specularColorMapUv:ce&&_(x.specularColorMap.channel),specularIntensityMapUv:Ve&&_(x.specularIntensityMap.channel),transmissionMapUv:U&&_(x.transmissionMap.channel),thicknessMapUv:ie&&_(x.thicknessMap.channel),alphaMapUv:pe&&_(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(O||mt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Be||pe),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:_e&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===On,flipSided:x.side===kn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)y.push(P),y.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(S(y,x),M(y,x),y.push(s.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const y=g[x.type];let P;if(y){const N=Di[y];P=C0.clone(N.uniforms)}else P=x.uniforms;return P}function b(x,y){let P;for(let N=0,z=u.length;N<z;N++){const V=u[N];if(V.cacheKey===y){P=V,++P.usedTimes;break}}return P===void 0&&(P=new jS(s,y,x,r),u.push(P)),P}function R(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function E(x){c.remove(x)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:R,releaseShaderCache:E,programs:u,dispose:A}}function tT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function nT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||nT),n.length>1&&n.sort(d||Zd),i.length>1&&i.sort(d||Zd)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function iT(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Qd,s.set(n,[o])):i>=r.length?(o=new Qd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function rT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new qe};break;case"SpotLight":t={position:new L,direction:new L,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function sT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let oT=0;function aT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cT(s){const e=new rT,t=sT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,r=new Ze,o=new Ze;function a(l){let u=0,h=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,M=0,v=0,b=0,R=0,E=0;l.sort(aT);for(let x=0,y=l.length;x<y;x++){const P=l[x],N=P.color,z=P.intensity,V=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*z,h+=N.g*z,d+=N.b*z;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],z);E++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=W,f++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(z),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const Y=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Y.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=G,v++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(N).multiplyScalar(z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(z),W.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==S||A.numPointShadows!==M||A.numSpotShadows!==v||A.numSpotMaps!==b||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,A.directionalLength=f,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=S,A.numPointShadows=M,A.numSpotShadows=v,A.numSpotMaps=b,A.numLightProbes=E,n.version=oT++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function ep(s){const e=new cT(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function lT(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new ep(s),e.set(i,[a])):r>=o.length?(a=new ep(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const uT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fT(s,e,t){let n=new Qh;const i=new Ie,r=new Ie,o=new gt,a=new lv({depthPacking:F_}),c=new uv,l={},u=t.maxTextureSize,h={[cr]:kn,[kn]:cr,[On]:On},d=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:uT,fragmentShader:hT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dn;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yp;let p=this.type;this.render=function(R,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const x=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Rr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==Zi&&this.type===Zi,V=p===Zi&&this.type!==Zi;for(let G=0,W=R.length;G<W;G++){const Y=R[G],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ne=H.getFrameExtents();if(i.multiply(ne),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ne.x),i.x=r.x*ne.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ne.y),i.y=r.y*ne.y,H.mapSize.y=r.y)),H.map===null||z===!0||V===!0){const ue=this.type!==Zi?{minFilter:Pn,magFilter:Pn}:{};H.map!==null&&H.map.dispose(),H.map=new _s(i.x,i.y,ue),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const D=H.getViewportCount();for(let ue=0;ue<D;ue++){const Oe=H.getViewport(ue);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),N.viewport(o),H.updateMatrices(Y,ue),n=H.getFrustum(),v(E,A,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Zi&&S(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,y,P)};function S(R,E){const A=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new _s(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(E,null,A,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(E,null,A,f,_,null)}function M(R,E,A,x){let y=null;const P=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)y=P;else if(y=A.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const N=y.uuid,z=E.uuid;let V=l[N];V===void 0&&(V={},l[N]=V);let G=V[z];G===void 0&&(G=y.clone(),V[z]=G,E.addEventListener("dispose",b)),y=G}if(y.visible=E.visible,y.wireframe=E.wireframe,x===Zi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=s.properties.get(y);N.light=A}return y}function v(R,E,A,x,y){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Zi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const z=e.update(R),V=R.material;if(Array.isArray(V)){const G=z.groups;for(let W=0,Y=G.length;W<Y;W++){const H=G[W],ne=V[H.materialIndex];if(ne&&ne.visible){const D=M(R,ne,x,y);R.onBeforeShadow(s,R,E,A,z,D,H),s.renderBufferDirect(A,null,z,D,R,H),R.onAfterShadow(s,R,E,A,z,D,H)}}}else if(V.visible){const G=M(R,V,x,y);R.onBeforeShadow(s,R,E,A,z,G,null),s.renderBufferDirect(A,null,z,G,R,null),R.onAfterShadow(s,R,E,A,z,G,null)}}const N=R.children;for(let z=0,V=N.length;z<V;z++)v(N[z],E,A,x,y)}function b(R){R.target.removeEventListener("dispose",b);for(const A in l){const x=l[A],y=R.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const dT={[Au]:wu,[Ru]:Iu,[Cu]:Lu,[ao]:Pu,[wu]:Au,[Iu]:Ru,[Lu]:Cu,[Pu]:ao};function pT(s,e){function t(){let U=!1;const ie=new gt;let oe=null;const pe=new gt(0,0,0,0);return{setMask:function(te){oe!==te&&!U&&(s.colorMask(te,te,te,te),oe=te)},setLocked:function(te){U=te},setClear:function(te,Q,ye,Fe,dt){dt===!0&&(te*=Fe,Q*=Fe,ye*=Fe),ie.set(te,Q,ye,Fe),pe.equals(ie)===!1&&(s.clearColor(te,Q,ye,Fe),pe.copy(ie))},reset:function(){U=!1,oe=null,pe.set(-1,0,0,0)}}}function n(){let U=!1,ie=!1,oe=null,pe=null,te=null;return{setReversed:function(Q){if(ie!==Q){const ye=e.get("EXT_clip_control");Q?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ie=Q;const Fe=te;te=null,this.setClear(Fe)}},getReversed:function(){return ie},setTest:function(Q){Q?J(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(Q){oe!==Q&&!U&&(s.depthMask(Q),oe=Q)},setFunc:function(Q){if(ie&&(Q=dT[Q]),pe!==Q){switch(Q){case Au:s.depthFunc(s.NEVER);break;case wu:s.depthFunc(s.ALWAYS);break;case Ru:s.depthFunc(s.LESS);break;case ao:s.depthFunc(s.LEQUAL);break;case Cu:s.depthFunc(s.EQUAL);break;case Pu:s.depthFunc(s.GEQUAL);break;case Iu:s.depthFunc(s.GREATER);break;case Lu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Q}},setLocked:function(Q){U=Q},setClear:function(Q){te!==Q&&(ie&&(Q=1-Q),s.clearDepth(Q),te=Q)},reset:function(){U=!1,oe=null,pe=null,te=null,ie=!1}}}function i(){let U=!1,ie=null,oe=null,pe=null,te=null,Q=null,ye=null,Fe=null,dt=null;return{setTest:function(ge){U||(ge?J(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(ge){ie!==ge&&!U&&(s.stencilMask(ge),ie=ge)},setFunc:function(ge,Re,Ke){(oe!==ge||pe!==Re||te!==Ke)&&(s.stencilFunc(ge,Re,Ke),oe=ge,pe=Re,te=Ke)},setOp:function(ge,Re,Ke){(Q!==ge||ye!==Re||Fe!==Ke)&&(s.stencilOp(ge,Re,Ke),Q=ge,ye=Re,Fe=Ke)},setLocked:function(ge){U=ge},setClear:function(ge){dt!==ge&&(s.clearStencil(ge),dt=ge)},reset:function(){U=!1,ie=null,oe=null,pe=null,te=null,Q=null,ye=null,Fe=null,dt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,M=null,v=null,b=null,R=null,E=new qe(0,0,0),A=0,x=!1,y=null,P=null,N=null,z=null,V=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Y>=2);let ne=null,D={};const ue=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),st=new gt().fromArray(ue),We=new gt().fromArray(Oe);function Ge(U,ie,oe,pe){const te=new Uint8Array(4),Q=s.createTexture();s.bindTexture(U,Q),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ye=0;ye<oe;ye++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(ie+ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return Q}const $={};$[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(s.DEPTH_TEST),o.setFunc(ao),we(!1),O(Ff),J(s.CULL_FACE),Xe(Rr);function J(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function fe(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function Ae(U,ie){return h[U]!==ie?(s.bindFramebuffer(U,ie),h[U]=ie,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ie),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Te(U,ie){let oe=f,pe=!1;if(U){oe=d.get(ie),oe===void 0&&(oe=[],d.set(ie,oe));const te=U.textures;if(oe.length!==te.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,ye=te.length;Q<ye;Q++)oe[Q]=s.COLOR_ATTACHMENT0+Q;oe.length=te.length,pe=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,pe=!0);pe&&s.drawBuffers(oe)}function Be(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const ft={[is]:s.FUNC_ADD,[c_]:s.FUNC_SUBTRACT,[l_]:s.FUNC_REVERSE_SUBTRACT};ft[u_]=s.MIN,ft[h_]=s.MAX;const I={[f_]:s.ZERO,[d_]:s.ONE,[p_]:s.SRC_COLOR,[Eu]:s.SRC_ALPHA,[y_]:s.SRC_ALPHA_SATURATE,[v_]:s.DST_COLOR,[g_]:s.DST_ALPHA,[m_]:s.ONE_MINUS_SRC_COLOR,[bu]:s.ONE_MINUS_SRC_ALPHA,[x_]:s.ONE_MINUS_DST_COLOR,[__]:s.ONE_MINUS_DST_ALPHA,[M_]:s.CONSTANT_COLOR,[S_]:s.ONE_MINUS_CONSTANT_COLOR,[T_]:s.CONSTANT_ALPHA,[E_]:s.ONE_MINUS_CONSTANT_ALPHA};function Xe(U,ie,oe,pe,te,Q,ye,Fe,dt,ge){if(U===Rr){_===!0&&(fe(s.BLEND),_=!1);return}if(_===!1&&(J(s.BLEND),_=!0),U!==a_){if(U!==m||ge!==x){if((p!==is||v!==is)&&(s.blendEquation(s.FUNC_ADD),p=is,v=is),ge)switch(U){case $s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bf:s.blendFunc(s.ONE,s.ONE);break;case kf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case $s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,M=null,b=null,R=null,E.set(0,0,0),A=0,m=U,x=ge}return}te=te||ie,Q=Q||oe,ye=ye||pe,(ie!==p||te!==v)&&(s.blendEquationSeparate(ft[ie],ft[te]),p=ie,v=te),(oe!==S||pe!==M||Q!==b||ye!==R)&&(s.blendFuncSeparate(I[oe],I[pe],I[Q],I[ye]),S=oe,M=pe,b=Q,R=ye),(Fe.equals(E)===!1||dt!==A)&&(s.blendColor(Fe.r,Fe.g,Fe.b,dt),E.copy(Fe),A=dt),m=U,x=!1}function Le(U,ie){U.side===On?fe(s.CULL_FACE):J(s.CULL_FACE);let oe=U.side===kn;ie&&(oe=!oe),we(oe),U.blending===$s&&U.transparent===!1?Xe(Rr):Xe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const pe=U.stencilWrite;a.setTest(pe),pe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),_e(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function we(U){y!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),y=U)}function O(U){U!==r_?(J(s.CULL_FACE),U!==P&&(U===Ff?s.cullFace(s.BACK):U===s_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),P=U}function ot(U){U!==N&&(W&&s.lineWidth(U),N=U)}function _e(U,ie,oe){U?(J(s.POLYGON_OFFSET_FILL),(z!==ie||V!==oe)&&(s.polygonOffset(ie,oe),z=ie,V=oe)):fe(s.POLYGON_OFFSET_FILL)}function He(U){U?J(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function $e(U){U===void 0&&(U=s.TEXTURE0+G-1),ne!==U&&(s.activeTexture(U),ne=U)}function mt(U,ie,oe){oe===void 0&&(ne===null?oe=s.TEXTURE0+G-1:oe=ne);let pe=D[oe];pe===void 0&&(pe={type:void 0,texture:void 0},D[oe]=pe),(pe.type!==U||pe.texture!==ie)&&(ne!==oe&&(s.activeTexture(oe),ne=oe),s.bindTexture(U,ie||$[U]),pe.type=U,pe.texture=ie)}function C(){const U=D[ne];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(U){st.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function Ne(U){We.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),We.copy(U))}function be(U,ie){let oe=l.get(ie);oe===void 0&&(oe=new WeakMap,l.set(ie,oe));let pe=oe.get(U);pe===void 0&&(pe=s.getUniformBlockIndex(ie,U.name),oe.set(U,pe))}function ce(U,ie){const pe=l.get(ie).get(U);c.get(ie)!==pe&&(s.uniformBlockBinding(ie,pe,U.__bindingPointIndex),c.set(ie,pe))}function Ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ne=null,D={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,M=null,v=null,b=null,R=null,E=new qe(0,0,0),A=0,x=!1,y=null,P=null,N=null,z=null,V=null,st.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:fe,bindFramebuffer:Ae,drawBuffers:Te,useProgram:Be,setBlending:Xe,setMaterial:Le,setFlipSided:we,setCullFace:O,setLineWidth:ot,setPolygonOffset:_e,setScissorTest:He,activeTexture:$e,bindTexture:mt,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:k,texImage2D:he,texImage3D:re,updateUBOMapping:be,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:Ee,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:K,compressedTexSubImage3D:ve,scissor:le,viewport:Ne,reset:Ve}}function mT(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return f?new OffscreenCanvas(C,T):Sa("canvas")}function _(C,T,k){let j=1;const Z=mt(C);if((Z.width>k||Z.height>k)&&(j=k/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(j*Z.width),ve=Math.floor(j*Z.height);h===void 0&&(h=g(K,ve));const se=T?g(K,ve):h;return se.width=K,se.height=ve,se.getContext("2d").drawImage(C,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+ve+")."),se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,T,k,j,Z=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=T;if(T===s.RED&&(k===s.FLOAT&&(K=s.R32F),k===s.HALF_FLOAT&&(K=s.R16F),k===s.UNSIGNED_BYTE&&(K=s.R8)),T===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.R8UI),k===s.UNSIGNED_SHORT&&(K=s.R16UI),k===s.UNSIGNED_INT&&(K=s.R32UI),k===s.BYTE&&(K=s.R8I),k===s.SHORT&&(K=s.R16I),k===s.INT&&(K=s.R32I)),T===s.RG&&(k===s.FLOAT&&(K=s.RG32F),k===s.HALF_FLOAT&&(K=s.RG16F),k===s.UNSIGNED_BYTE&&(K=s.RG8)),T===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RG8UI),k===s.UNSIGNED_SHORT&&(K=s.RG16UI),k===s.UNSIGNED_INT&&(K=s.RG32UI),k===s.BYTE&&(K=s.RG8I),k===s.SHORT&&(K=s.RG16I),k===s.INT&&(K=s.RG32I)),T===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGB8UI),k===s.UNSIGNED_SHORT&&(K=s.RGB16UI),k===s.UNSIGNED_INT&&(K=s.RGB32UI),k===s.BYTE&&(K=s.RGB8I),k===s.SHORT&&(K=s.RGB16I),k===s.INT&&(K=s.RGB32I)),T===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),k===s.UNSIGNED_INT&&(K=s.RGBA32UI),k===s.BYTE&&(K=s.RGBA8I),k===s.SHORT&&(K=s.RGBA16I),k===s.INT&&(K=s.RGBA32I)),T===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),T===s.RGBA){const ve=Z?Yc:ht.getTransfer(j);k===s.FLOAT&&(K=s.RGBA32F),k===s.HALF_FLOAT&&(K=s.RGBA16F),k===s.UNSIGNED_BYTE&&(K=ve===St?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(C,T){let k;return C?T===null||T===gs||T===_a?k=s.DEPTH24_STENCIL8:T===wi?k=s.DEPTH32F_STENCIL8:T===ga&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gs||T===_a?k=s.DEPTH_COMPONENT24:T===wi?k=s.DEPTH_COMPONENT32F:T===ga&&(k=s.DEPTH_COMPONENT16),k}function b(C,T){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pn&&C.minFilter!==ni?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function R(C){const T=C.target;T.removeEventListener("dispose",R),A(T),T.isVideoTexture&&u.delete(T)}function E(C){const T=C.target;T.removeEventListener("dispose",E),y(T)}function A(C){const T=n.get(C);if(T.__webglInit===void 0)return;const k=C.source,j=d.get(k);if(j){const Z=j[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(C),Object.keys(j).length===0&&d.delete(k)}n.remove(C)}function x(C){const T=n.get(C);s.deleteTexture(T.__webglTexture);const k=C.source,j=d.get(k);delete j[T.__cacheKey],o.memory.textures--}function y(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let Z=0;Z<T.__webglFramebuffer[j].length;Z++)s.deleteFramebuffer(T.__webglFramebuffer[j][Z]);else s.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)s.deleteFramebuffer(T.__webglFramebuffer[j]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const k=C.textures;for(let j=0,Z=k.length;j<Z;j++){const K=n.get(k[j]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(C)}let P=0;function N(){P=0}function z(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function V(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function G(C,T){const k=n.get(C);if(C.isVideoTexture&&He(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,C,T);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+T)}function W(C,T){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){$(k,C,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+T)}function Y(C,T){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){$(k,C,T);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+T)}function H(C,T){const k=n.get(C);if(C.version>0&&k.__version!==C.version){J(k,C,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+T)}const ne={[uo]:s.REPEAT,[Sr]:s.CLAMP_TO_EDGE,[Xc]:s.MIRRORED_REPEAT},D={[Pn]:s.NEAREST,[jp]:s.NEAREST_MIPMAP_NEAREST,[Wo]:s.NEAREST_MIPMAP_LINEAR,[ni]:s.LINEAR,[Pc]:s.LINEAR_MIPMAP_NEAREST,[ir]:s.LINEAR_MIPMAP_LINEAR},ue={[k_]:s.NEVER,[X_]:s.ALWAYS,[z_]:s.LESS,[om]:s.LEQUAL,[H_]:s.EQUAL,[W_]:s.GEQUAL,[V_]:s.GREATER,[G_]:s.NOTEQUAL};function Oe(C,T){if(T.type===wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ni||T.magFilter===Pc||T.magFilter===Wo||T.magFilter===ir||T.minFilter===ni||T.minFilter===Pc||T.minFilter===Wo||T.minFilter===ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ne[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ne[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ne[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,D[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,D[T.minFilter]),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pn||T.minFilter!==Wo&&T.minFilter!==ir||T.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function st(C,T){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",R));const j=T.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const K=V(T);if(K!==C.__cacheKey){Z[K]===void 0&&(Z[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[K].usedTimes++;const ve=Z[C.__cacheKey];ve!==void 0&&(Z[C.__cacheKey].usedTimes--,ve.usedTimes===0&&x(T)),C.__cacheKey=K,C.__webglTexture=Z[K].texture}return k}function We(C,T,k){return Math.floor(Math.floor(C/k)/T)}function Ge(C,T,k,j){const K=C.updateRanges;if(K.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,k,j,T.data);else{K.sort((re,le)=>re.start-le.start);let ve=0;for(let re=1;re<K.length;re++){const le=K[ve],Ne=K[re],be=le.start+le.count,ce=We(Ne.start,T.width,4),Ve=We(le.start,T.width,4);Ne.start<=be+1&&ce===Ve&&We(Ne.start+Ne.count-1,T.width,4)===ce?le.count=Math.max(le.count,Ne.start+Ne.count-le.start):(++ve,K[ve]=Ne)}K.length=ve+1;const se=s.getParameter(s.UNPACK_ROW_LENGTH),Ee=s.getParameter(s.UNPACK_SKIP_PIXELS),he=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let re=0,le=K.length;re<le;re++){const Ne=K[re],be=Math.floor(Ne.start/4),ce=Math.ceil(Ne.count/4),Ve=be%T.width,U=Math.floor(be/T.width),ie=ce,oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,Ve,U,ie,oe,k,j,T.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),s.pixelStorei(s.UNPACK_SKIP_ROWS,he)}}function $(C,T,k){let j=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=s.TEXTURE_3D);const Z=st(C,T),K=T.source;t.bindTexture(j,C.__webglTexture,s.TEXTURE0+k);const ve=n.get(K);if(K.version!==ve.__version||Z===!0){t.activeTexture(s.TEXTURE0+k);const se=ht.getPrimaries(ht.workingColorSpace),Ee=T.colorSpace===Mr?null:ht.getPrimaries(T.colorSpace),he=T.colorSpace===Mr||se===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let re=_(T.image,!1,i.maxTextureSize);re=$e(T,re);const le=r.convert(T.format,T.colorSpace),Ne=r.convert(T.type);let be=M(T.internalFormat,le,Ne,T.colorSpace,T.isVideoTexture);Oe(j,T);let ce;const Ve=T.mipmaps,U=T.isVideoTexture!==!0,ie=ve.__version===void 0||Z===!0,oe=K.dataReady,pe=b(T,re);if(T.isDepthTexture)be=v(T.format===xa,T.type),ie&&(U?t.texStorage2D(s.TEXTURE_2D,1,be,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,be,re.width,re.height,0,le,Ne,null));else if(T.isDataTexture)if(Ve.length>0){U&&ie&&t.texStorage2D(s.TEXTURE_2D,pe,be,Ve[0].width,Ve[0].height);for(let te=0,Q=Ve.length;te<Q;te++)ce=Ve[te],U?oe&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ce.width,ce.height,le,Ne,ce.data):t.texImage2D(s.TEXTURE_2D,te,be,ce.width,ce.height,0,le,Ne,ce.data);T.generateMipmaps=!1}else U?(ie&&t.texStorage2D(s.TEXTURE_2D,pe,be,re.width,re.height),oe&&Ge(T,re,le,Ne)):t.texImage2D(s.TEXTURE_2D,0,be,re.width,re.height,0,le,Ne,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){U&&ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,be,Ve[0].width,Ve[0].height,re.depth);for(let te=0,Q=Ve.length;te<Q;te++)if(ce=Ve[te],T.format!==gi)if(le!==null)if(U){if(oe)if(T.layerUpdates.size>0){const ye=Pd(ce.width,ce.height,T.format,T.type);for(const Fe of T.layerUpdates){const dt=ce.data.subarray(Fe*ye/ce.data.BYTES_PER_ELEMENT,(Fe+1)*ye/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Fe,ce.width,ce.height,1,le,dt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,re.depth,le,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,be,ce.width,ce.height,re.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,re.depth,le,Ne,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,be,ce.width,ce.height,re.depth,0,le,Ne,ce.data)}else{U&&ie&&t.texStorage2D(s.TEXTURE_2D,pe,be,Ve[0].width,Ve[0].height);for(let te=0,Q=Ve.length;te<Q;te++)ce=Ve[te],T.format!==gi?le!==null?U?oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,te,be,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ce.width,ce.height,le,Ne,ce.data):t.texImage2D(s.TEXTURE_2D,te,be,ce.width,ce.height,0,le,Ne,ce.data)}else if(T.isDataArrayTexture)if(U){if(ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,be,re.width,re.height,re.depth),oe)if(T.layerUpdates.size>0){const te=Pd(re.width,re.height,T.format,T.type);for(const Q of T.layerUpdates){const ye=re.data.subarray(Q*te/re.data.BYTES_PER_ELEMENT,(Q+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,le,Ne,ye)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,le,Ne,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,le,Ne,re.data);else if(T.isData3DTexture)U?(ie&&t.texStorage3D(s.TEXTURE_3D,pe,be,re.width,re.height,re.depth),oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,le,Ne,re.data)):t.texImage3D(s.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,le,Ne,re.data);else if(T.isFramebufferTexture){if(ie)if(U)t.texStorage2D(s.TEXTURE_2D,pe,be,re.width,re.height);else{let te=re.width,Q=re.height;for(let ye=0;ye<pe;ye++)t.texImage2D(s.TEXTURE_2D,ye,be,te,Q,0,le,Ne,null),te>>=1,Q>>=1}}else if(Ve.length>0){if(U&&ie){const te=mt(Ve[0]);t.texStorage2D(s.TEXTURE_2D,pe,be,te.width,te.height)}for(let te=0,Q=Ve.length;te<Q;te++)ce=Ve[te],U?oe&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,le,Ne,ce):t.texImage2D(s.TEXTURE_2D,te,be,le,Ne,ce);T.generateMipmaps=!1}else if(U){if(ie){const te=mt(re);t.texStorage2D(s.TEXTURE_2D,pe,be,te.width,te.height)}oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,Ne,re)}else t.texImage2D(s.TEXTURE_2D,0,be,le,Ne,re);m(T)&&p(j),ve.__version=K.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function J(C,T,k){if(T.image.length!==6)return;const j=st(C,T),Z=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const K=n.get(Z);if(Z.version!==K.__version||j===!0){t.activeTexture(s.TEXTURE0+k);const ve=ht.getPrimaries(ht.workingColorSpace),se=T.colorSpace===Mr?null:ht.getPrimaries(T.colorSpace),Ee=T.colorSpace===Mr||ve===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const he=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!he&&!re?le[Q]=_(T.image[Q],!0,i.maxCubemapSize):le[Q]=re?T.image[Q].image:T.image[Q],le[Q]=$e(T,le[Q]);const Ne=le[0],be=r.convert(T.format,T.colorSpace),ce=r.convert(T.type),Ve=M(T.internalFormat,be,ce,T.colorSpace),U=T.isVideoTexture!==!0,ie=K.__version===void 0||j===!0,oe=Z.dataReady;let pe=b(T,Ne);Oe(s.TEXTURE_CUBE_MAP,T);let te;if(he){U&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Ve,Ne.width,Ne.height);for(let Q=0;Q<6;Q++){te=le[Q].mipmaps;for(let ye=0;ye<te.length;ye++){const Fe=te[ye];T.format!==gi?be!==null?U?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,Fe.width,Fe.height,be,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,Ve,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,Fe.width,Fe.height,be,ce,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,Ve,Fe.width,Fe.height,0,be,ce,Fe.data)}}}else{if(te=T.mipmaps,U&&ie){te.length>0&&pe++;const Q=mt(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Ve,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,be,ce,le[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,le[Q].width,le[Q].height,0,be,ce,le[Q].data);for(let ye=0;ye<te.length;ye++){const dt=te[ye].image[Q].image;U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,dt.width,dt.height,be,ce,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,Ve,dt.width,dt.height,0,be,ce,dt.data)}}else{U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,be,ce,le[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,be,ce,le[Q]);for(let ye=0;ye<te.length;ye++){const Fe=te[ye];U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,be,ce,Fe.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,Ve,be,ce,Fe.image[Q])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),K.__version=Z.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function fe(C,T,k,j,Z,K){const ve=r.convert(k.format,k.colorSpace),se=r.convert(k.type),Ee=M(k.internalFormat,ve,se,k.colorSpace),he=n.get(T),re=n.get(k);if(re.__renderTarget=T,!he.__hasExternalTextures){const le=Math.max(1,T.width>>K),Ne=Math.max(1,T.height>>K);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,Ee,le,Ne,T.depth,0,ve,se,null):t.texImage2D(Z,K,Ee,le,Ne,0,ve,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),_e(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Z,re.__webglTexture,0,ot(T)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Z,re.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(C,T,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer){const j=T.depthTexture,Z=j&&j.isDepthTexture?j.type:null,K=v(T.stencilBuffer,Z),ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=ot(T);_e(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,K,T.width,T.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,K,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,K,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,C)}else{const j=T.textures;for(let Z=0;Z<j.length;Z++){const K=j[Z],ve=r.convert(K.format,K.colorSpace),se=r.convert(K.type),Ee=M(K.internalFormat,ve,se,K.colorSpace),he=ot(T);k&&_e(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,Ee,T.width,T.height):_e(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,Ee,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(T.depthTexture);j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const Z=j.__webglTexture,K=ot(T);if(T.depthTexture.format===va)_e(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(T.depthTexture.format===xa)_e(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Be(C){const T=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=j}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const j=C.texture.mipmaps;j&&j.length>0?Te(T.__webglFramebuffer[0],C):Te(T.__webglFramebuffer,C)}else if(k){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=s.createRenderbuffer(),Ae(T.__webglDepthbuffer[j],C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,K)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ae(T.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,K)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(C,T,k){const j=n.get(C);T!==void 0&&fe(j.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Be(C)}function I(C){const T=C.texture,k=n.get(C),j=n.get(T);C.addEventListener("dispose",E);const Z=C.textures,K=C.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=T.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[se]=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)k.__webglFramebuffer[se][Ee]=s.createFramebuffer()}else k.__webglFramebuffer[se]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)k.__webglFramebuffer[se]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ve)for(let se=0,Ee=Z.length;se<Ee;se++){const he=n.get(Z[se]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&_e(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const Ee=Z[se];k.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[se]);const he=r.convert(Ee.format,Ee.colorSpace),re=r.convert(Ee.type),le=M(Ee.internalFormat,he,re,Ee.colorSpace,C.isXRRenderTarget===!0),Ne=ot(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,le,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,k.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,T);for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)fe(k.__webglFramebuffer[se][Ee],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee);else fe(k.__webglFramebuffer[se],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(T)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,Ee=Z.length;se<Ee;se++){const he=Z[se],re=n.get(he);let le=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,re.__webglTexture),Oe(le,he),fe(k.__webglFramebuffer,C,he,s.COLOR_ATTACHMENT0+se,le,0),m(he)&&p(le)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),Oe(se,T),T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)fe(k.__webglFramebuffer[Ee],C,T,s.COLOR_ATTACHMENT0,se,Ee);else fe(k.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,se,0);m(T)&&p(se),t.unbindTexture()}C.depthBuffer&&Be(C)}function Xe(C){const T=C.textures;for(let k=0,j=T.length;k<j;k++){const Z=T[k];if(m(Z)){const K=S(C),ve=n.get(Z).__webglTexture;t.bindTexture(K,ve),p(K),t.unbindTexture()}}}const Le=[],we=[];function O(C){if(C.samples>0){if(_e(C)===!1){const T=C.textures,k=C.width,j=C.height;let Z=s.COLOR_BUFFER_BIT;const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(C),se=T.length>1;if(se)for(let he=0;he<T.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ee=C.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<T.length;he++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const re=n.get(T[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,re,0)}s.blitFramebuffer(0,0,k,j,0,0,k,j,Z,s.NEAREST),c===!0&&(Le.length=0,we.length=0,Le.push(s.COLOR_ATTACHMENT0+he),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Le.push(K),we.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,we)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let he=0;he<T.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const re=n.get(T[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const T=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ot(C){return Math.min(i.maxSamples,C.samples)}function _e(C){const T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function He(C){const T=o.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function $e(C,T){const k=C.colorSpace,j=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ln&&k!==Mr&&(ht.getTransfer(k)===St?(j!==gi||Z!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}function mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=ft,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function gT(s,e){function t(n,i=Mr){let r;const o=ht.getTransfer(i);if(n===zi)return s.UNSIGNED_BYTE;if(n===Vh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Gh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===em)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jp)return s.BYTE;if(n===Zp)return s.SHORT;if(n===ga)return s.UNSIGNED_SHORT;if(n===Hh)return s.INT;if(n===gs)return s.UNSIGNED_INT;if(n===wi)return s.FLOAT;if(n===Oa)return s.HALF_FLOAT;if(n===tm)return s.ALPHA;if(n===nm)return s.RGB;if(n===gi)return s.RGBA;if(n===va)return s.DEPTH_COMPONENT;if(n===xa)return s.DEPTH_STENCIL;if(n===Wh)return s.RED;if(n===Xh)return s.RED_INTEGER;if(n===im)return s.RG;if(n===Yh)return s.RG_INTEGER;if(n===qh)return s.RGBA_INTEGER;if(n===Ic||n===Lc||n===Dc||n===Nc)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ic)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ic)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uu||n===Ou||n===Fu||n===Bu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ou)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ku||n===zu||n===Hu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ku||n===zu)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vu||n===Gu||n===Wu||n===Xu||n===Yu||n===qu||n===Ku||n===$u||n===ju||n===Ju||n===Zu||n===Qu||n===eh||n===th)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ku)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$u)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ju)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ju)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===th)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nh||n===ih||n===rh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nh)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===oh||n===ah||n===ch)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ah)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ch)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_a?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const _T=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ym(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nr({vertexShader:_T,fragmentShader:vT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yT extends Eo{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new xT,p={},S=t.getContextAttributes();let M=null,v=null;const b=[],R=[],E=new Ie;let A=null;const x=new Rn;x.viewport=new gt;const y=new Rn;y.viewport=new gt;const P=[x,y],N=new Iv;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=b[$];return J===void 0&&(J=new Hl,b[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=b[$];return J===void 0&&(J=new Hl,b[$]=J),J.getGripSpace()},this.getHand=function($){let J=b[$];return J===void 0&&(J=new Hl,b[$]=J),J.getHandSpace()};function G($){const J=R.indexOf($.inputSource);if(J===-1)return;const fe=b[J];fe!==void 0&&(fe.update($.inputSource,$.frame,l||o),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<b.length;$++){const J=R[$];J!==null&&(R[$]=null,b[$].disconnect(J))}z=null,V=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(M),f=null,d=null,h=null,i=null,v=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),S.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ae=null,Te=null;S.depth&&(Te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?xa:va,Ae=S.stencil?_a:gs);const Be={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new _s(d.textureWidth,d.textureHeight,{format:gi,type:zi,depthTexture:new xm(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new _s(f.framebufferWidth,f.framebufferHeight,{format:gi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y($){for(let J=0;J<$.removed.length;J++){const fe=$.removed[J],Ae=R.indexOf(fe);Ae>=0&&(R[Ae]=null,b[Ae].disconnect(fe))}for(let J=0;J<$.added.length;J++){const fe=$.added[J];let Ae=R.indexOf(fe);if(Ae===-1){for(let Be=0;Be<b.length;Be++)if(Be>=R.length){R.push(fe),Ae=Be;break}else if(R[Be]===null){R[Be]=fe,Ae=Be;break}if(Ae===-1)break}const Te=b[Ae];Te&&Te.connect(fe)}}const H=new L,ne=new L;function D($,J,fe){H.setFromMatrixPosition(J.matrixWorld),ne.setFromMatrixPosition(fe.matrixWorld);const Ae=H.distanceTo(ne),Te=J.projectionMatrix.elements,Be=fe.projectionMatrix.elements,ft=Te[14]/(Te[10]-1),I=Te[14]/(Te[10]+1),Xe=(Te[9]+1)/Te[5],Le=(Te[9]-1)/Te[5],we=(Te[8]-1)/Te[0],O=(Be[8]+1)/Be[0],ot=ft*we,_e=ft*O,He=Ae/(-we+O),$e=He*-we;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX($e),$.translateZ(He),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const mt=ft+He,C=I+He,T=ot-$e,k=_e+(Ae-$e),j=Xe*I/C*mt,Z=Le*I/C*mt;$.projectionMatrix.makePerspective(T,k,j,Z,mt,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ue($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let J=$.near,fe=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),N.near=y.near=x.near=J,N.far=y.far=x.far=fe,(z!==N.near||V!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,V=N.far),N.layers.mask=$.layers.mask|6,x.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const Ae=$.parent,Te=N.cameras;ue(N,Ae);for(let Be=0;Be<Te.length;Be++)ue(Te[Be],Ae);Te.length===2?D(N,x,y):N.projectionMatrix.copy(x.projectionMatrix),Oe($,N,Ae)};function Oe($,J,fe){fe===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ho*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function($){return p[$]};let st=null;function We($,J){if(u=J.getViewerPose(l||o),g=J,u!==null){const fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ae=!1;fe.length!==N.cameras.length&&(N.cameras.length=0,Ae=!0);for(let I=0;I<fe.length;I++){const Xe=fe[I];let Le=null;if(f!==null)Le=f.getViewport(Xe);else{const O=h.getViewSubImage(d,Xe);Le=O.viewport,I===0&&(e.setRenderTargetTextures(v,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(v))}let we=P[I];we===void 0&&(we=new Rn,we.layers.enable(I),we.viewport=new gt,P[I]=we),we.matrix.fromArray(Xe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Xe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Le.x,Le.y,Le.width,Le.height),I===0&&(N.matrix.copy(we.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ae===!0&&N.cameras.push(we)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const I=h.getDepthInformation(fe[0]);I&&I.isValid&&I.texture&&m.init(I,i.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let I=0;I<fe.length;I++){const Xe=fe[I].camera;if(Xe){let Le=p[Xe];Le||(Le=new ym,p[Xe]=Le);const we=h.getCameraImage(Xe);Le.sourceTexture=we}}}}for(let fe=0;fe<b.length;fe++){const Ae=R[fe],Te=b[fe];Ae!==null&&Te!==void 0&&Te.update(Ae,J,l||o)}st&&st($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ge=new Rm;Ge.setAnimationLoop(We),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}const Kr=new Hi,MT=new Ze;function ST(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,dm(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),M=S.envMap,v=S.envMapRotation;M&&(m.envMap.value=M,Kr.copy(v),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),m.envMapRotation.value.setFromMatrix4(MT.makeRotationFromEuler(Kr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function TT(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const v=M.program;n.uniformBlockBinding(S,v)}function l(S,M){let v=i[S.id];v===void 0&&(g(S),v=u(S),i[S.id]=v,S.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(S,b);const R=e.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function u(S){const M=h();S.__bindingPointIndex=M;const v=s.createBuffer(),b=S.__size,R=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=i[S.id],v=S.uniforms,b=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let R=0,E=v.length;R<E;R++){const A=Array.isArray(v[R])?v[R]:[v[R]];for(let x=0,y=A.length;x<y;x++){const P=A[x];if(f(P,R,x,b)===!0){const N=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let G=0;G<z.length;G++){const W=z[G],Y=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,N+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,M,v,b){const R=S.value,E=M+"_"+v;if(b[E]===void 0)return typeof R=="number"||typeof R=="boolean"?b[E]=R:b[E]=R.clone(),!0;{const A=b[E];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return b[E]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function g(S){const M=S.uniforms;let v=0;const b=16;for(let E=0,A=M.length;E<A;E++){const x=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,P=x.length;y<P;y++){const N=x[y],z=Array.isArray(N.value)?N.value:[N.value];for(let V=0,G=z.length;V<G;V++){const W=z[V],Y=_(W),H=v%b,ne=H%Y.boundary,D=H+ne;v+=ne,D!==0&&b-D<Y.storage&&(v+=b-D),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}const R=v%b;return R>0&&(v+=b-R),S.__size=v,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class ET{constructor(e={}){const{canvas:t=l0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=an;let R=0,E=0,A=null,x=-1,y=null;const P=new gt,N=new gt;let z=null;const V=new qe(0);let G=0,W=t.width,Y=t.height,H=1,ne=null,D=null;const ue=new gt(0,0,W,Y),Oe=new gt(0,0,W,Y);let st=!1;const We=new Qh;let Ge=!1,$=!1;const J=new Ze,fe=new L,Ae=new gt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ft(){return A===null?H:1}let I=n;function Xe(w,F){return t.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zh}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",te,!1),I===null){const F="webgl2";if(I=Xe(F,w),I===null)throw Xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Le,we,O,ot,_e,He,$e,mt,C,T,k,j,Z,K,ve,se,Ee,he,re,le,Ne,be,ce,Ve;function U(){Le=new NM(I),Le.init(),be=new gT(I,Le),we=new wM(I,Le,e,be),O=new pT(I,Le),we.reversedDepthBuffer&&d&&O.buffers.depth.setReversed(!0),ot=new FM(I),_e=new tT,He=new mT(I,Le,O,_e,we,be,ot),$e=new CM(v),mt=new DM(v),C=new Gv(I),ce=new bM(I,C),T=new UM(I,C,ot,ce),k=new kM(I,T,C,ot),re=new BM(I,we,He),se=new RM(_e),j=new eT(v,$e,mt,Le,we,ce,se),Z=new ST(v,_e),K=new iT,ve=new lT(Le),he=new EM(v,$e,mt,O,k,f,c),Ee=new fT(v,k,we),Ve=new TT(I,ot,we,O),le=new AM(I,Le,ot),Ne=new OM(I,Le,ot),ot.programs=j.programs,v.capabilities=we,v.extensions=Le,v.properties=_e,v.renderLists=K,v.shadowMap=Ee,v.state=O,v.info=ot}U();const ie=new yT(v,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Le.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Le.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(W,Y,!1))},this.getSize=function(w){return w.set(W,Y)},this.setSize=function(w,F,X=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,Y=F,t.width=Math.floor(w*H),t.height=Math.floor(F*H),X===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(W*H,Y*H).floor()},this.setDrawingBufferSize=function(w,F,X){W=w,Y=F,H=X,t.width=Math.floor(w*X),t.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ue)},this.setViewport=function(w,F,X,q){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,F,X,q),O.viewport(P.copy(ue).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Oe)},this.setScissor=function(w,F,X,q){w.isVector4?Oe.set(w.x,w.y,w.z,w.w):Oe.set(w,F,X,q),O.scissor(N.copy(Oe).multiplyScalar(H).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(w){O.setScissorTest(st=w)},this.setOpaqueSort=function(w){ne=w},this.setTransparentSort=function(w){D=w},this.getClearColor=function(w){return w.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,X=!0){let q=0;if(w){let B=!1;if(A!==null){const ee=A.texture.format;B=ee===qh||ee===Yh||ee===Xh}if(B){const ee=A.texture.type,ae=ee===zi||ee===gs||ee===ga||ee===_a||ee===Vh||ee===Gh,Me=he.getClearColor(),xe=he.getClearAlpha(),Ue=Me.r,Pe=Me.g,Ce=Me.b;ae?(g[0]=Ue,g[1]=Pe,g[2]=Ce,g[3]=xe,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ue,_[1]=Pe,_[2]=Ce,_[3]=xe,I.clearBufferiv(I.COLOR,0,_))}else q|=I.COLOR_BUFFER_BIT}F&&(q|=I.DEPTH_BUFFER_BIT),X&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",te,!1),he.dispose(),K.dispose(),ve.dispose(),_e.dispose(),$e.dispose(),mt.dispose(),k.dispose(),ce.dispose(),Ve.dispose(),j.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ke),ie.removeEventListener("sessionend",de),ke.stop()};function oe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=ot.autoReset,F=Ee.enabled,X=Ee.autoUpdate,q=Ee.needsUpdate,B=Ee.type;U(),ot.autoReset=w,Ee.enabled=F,Ee.autoUpdate=X,Ee.needsUpdate=q,Ee.type=B}function te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Q(w){const F=w.target;F.removeEventListener("dispose",Q),ye(F)}function ye(w){Fe(w),_e.remove(w)}function Fe(w){const F=_e.get(w).programs;F!==void 0&&(F.forEach(function(X){j.releaseProgram(X)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,q,B,ee){F===null&&(F=Te);const ae=B.isMesh&&B.matrixWorld.determinant()<0,Me=vt(w,F,X,q,B);O.setMaterial(q,ae);let xe=X.index,Ue=1;if(q.wireframe===!0){if(xe=T.getWireframeAttribute(X),xe===void 0)return;Ue=2}const Pe=X.drawRange,Ce=X.attributes.position;let je=Pe.start*Ue,ct=(Pe.start+Pe.count)*Ue;ee!==null&&(je=Math.max(je,ee.start*Ue),ct=Math.min(ct,(ee.start+ee.count)*Ue)),xe!==null?(je=Math.max(je,0),ct=Math.min(ct,xe.count)):Ce!=null&&(je=Math.max(je,0),ct=Math.min(ct,Ce.count));const zt=ct-je;if(zt<0||zt===1/0)return;ce.setup(B,q,Me,X,xe);let Ct,bt=le;if(xe!==null&&(Ct=C.get(xe),bt=Ne,bt.setIndex(Ct)),B.isMesh)q.wireframe===!0?(O.setLineWidth(q.wireframeLinewidth*ft()),bt.setMode(I.LINES)):bt.setMode(I.TRIANGLES);else if(B.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),O.setLineWidth(ze*ft()),B.isLineSegments?bt.setMode(I.LINES):B.isLineLoop?bt.setMode(I.LINE_LOOP):bt.setMode(I.LINE_STRIP)}else B.isPoints?bt.setMode(I.POINTS):B.isSprite&&bt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ta("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))bt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ze=B._multiDrawStarts,Ut=B._multiDrawCounts,pt=B._multiDrawCount,Yn=xe?C.get(xe).bytesPerElement:1,Ss=_e.get(q).currentProgram.getUniforms();for(let qn=0;qn<pt;qn++)Ss.setValue(I,"_gl_DrawID",qn),bt.render(ze[qn]/Yn,Ut[qn])}else if(B.isInstancedMesh)bt.renderInstances(je,zt,B.count);else if(X.isInstancedBufferGeometry){const ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ut=Math.min(X.instanceCount,ze);bt.renderInstances(je,zt,Ut)}else bt.render(je,zt)};function dt(w,F,X){w.transparent===!0&&w.side===On&&w.forceSinglePass===!1?(w.side=kn,w.needsUpdate=!0,Wt(w,F,X),w.side=cr,w.needsUpdate=!0,Wt(w,F,X),w.side=On):Wt(w,F,X)}this.compile=function(w,F,X=null){X===null&&(X=w),p=ve.get(X),p.init(F),M.push(p),X.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==X&&w.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const q=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ee=B.material;if(ee)if(Array.isArray(ee))for(let ae=0;ae<ee.length;ae++){const Me=ee[ae];dt(Me,X,B),q.add(Me)}else dt(ee,X,B),q.add(ee)}),p=M.pop(),q},this.compileAsync=function(w,F,X=null){const q=this.compile(w,F,X);return new Promise(B=>{function ee(){if(q.forEach(function(ae){_e.get(ae).currentProgram.isReady()&&q.delete(ae)}),q.size===0){B(w);return}setTimeout(ee,10)}Le.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let ge=null;function Re(w){ge&&ge(w)}function Ke(){ke.stop()}function de(){ke.start()}const ke=new Rm;ke.setAnimationLoop(Re),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(w){ge=w,ie.setAnimationLoop(w),w===null?ke.stop():ke.start()},ie.addEventListener("sessionstart",Ke),ie.addEventListener("sessionend",de),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,F,A),p=ve.get(w,M.length),p.init(F),M.push(p),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),We.setFromProjectionMatrix(J,Ui,F.reversedDepth),$=this.localClippingEnabled,Ge=se.init(this.clippingPlanes,$),m=K.get(w,S.length),m.init(),S.push(m),ie.enabled===!0&&ie.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&De(ee,F,-1/0,v.sortObjects)}De(w,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,D),Be=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Be&&he.addToRenderList(m,w),this.info.render.frame++,Ge===!0&&se.beginShadows();const X=p.state.shadowsArray;Ee.render(X,w,F),Ge===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ee=F.cameras;if(B.length>0)for(let ae=0,Me=ee.length;ae<Me;ae++){const xe=ee[ae];Gt(q,B,w,xe)}Be&&he.render(w);for(let ae=0,Me=ee.length;ae<Me;ae++){const xe=ee[ae];Ye(m,w,xe,xe.viewport)}}else B.length>0&&Gt(q,B,w,F),Be&&he.render(w),Ye(m,w,F);A!==null&&E===0&&(He.updateMultisampleRenderTarget(A),He.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,F),ce.resetDefaultState(),x=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],Ge===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function De(w,F,X,q){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||We.intersectsSprite(w)){q&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(J);const ae=k.update(w),Me=w.material;Me.visible&&m.push(w,ae,Me,X,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||We.intersectsObject(w))){const ae=k.update(w),Me=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Ae.copy(ae.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(J)),Array.isArray(Me)){const xe=ae.groups;for(let Ue=0,Pe=xe.length;Ue<Pe;Ue++){const Ce=xe[Ue],je=Me[Ce.materialIndex];je&&je.visible&&m.push(w,ae,je,X,Ae.z,Ce)}}else Me.visible&&m.push(w,ae,Me,X,Ae.z,null)}}const ee=w.children;for(let ae=0,Me=ee.length;ae<Me;ae++)De(ee[ae],F,X,q)}function Ye(w,F,X,q){const B=w.opaque,ee=w.transmissive,ae=w.transparent;p.setupLightsView(X),Ge===!0&&se.setGlobalState(v.clippingPlanes,X),q&&O.viewport(P.copy(q)),B.length>0&&Qe(B,F,X),ee.length>0&&Qe(ee,F,X),ae.length>0&&Qe(ae,F,X),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Gt(w,F,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new _s(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Oa:zi,minFilter:ir,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const ee=p.state.transmissionRenderTarget[q.id],ae=q.viewport||P;ee.setSize(ae.z*v.transmissionResolutionScale,ae.w*v.transmissionResolutionScale);const Me=v.getRenderTarget(),xe=v.getActiveCubeFace(),Ue=v.getActiveMipmapLevel();v.setRenderTarget(ee),v.getClearColor(V),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Be&&he.render(X);const Pe=v.toneMapping;v.toneMapping=Cr;const Ce=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Ge===!0&&se.setGlobalState(v.clippingPlanes,q),Qe(w,X,q),He.updateMultisampleRenderTarget(ee),He.updateRenderTargetMipmap(ee),Le.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ct=0,zt=F.length;ct<zt;ct++){const Ct=F[ct],bt=Ct.object,ze=Ct.geometry,Ut=Ct.material,pt=Ct.group;if(Ut.side===On&&bt.layers.test(q.layers)){const Yn=Ut.side;Ut.side=kn,Ut.needsUpdate=!0,It(bt,X,q,ze,Ut,pt),Ut.side=Yn,Ut.needsUpdate=!0,je=!0}}je===!0&&(He.updateMultisampleRenderTarget(ee),He.updateRenderTargetMipmap(ee))}v.setRenderTarget(Me,xe,Ue),v.setClearColor(V,G),Ce!==void 0&&(q.viewport=Ce),v.toneMapping=Pe}function Qe(w,F,X){const q=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ee=w.length;B<ee;B++){const ae=w[B],Me=ae.object,xe=ae.geometry,Ue=ae.group;let Pe=ae.material;Pe.allowOverride===!0&&q!==null&&(Pe=q),Me.layers.test(X.layers)&&It(Me,F,X,xe,Pe,Ue)}}function It(w,F,X,q,B,ee){w.onBeforeRender(v,F,X,q,B,ee),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(v,F,X,q,w,ee),B.transparent===!0&&B.side===On&&B.forceSinglePass===!1?(B.side=kn,B.needsUpdate=!0,v.renderBufferDirect(X,F,q,B,w,ee),B.side=cr,B.needsUpdate=!0,v.renderBufferDirect(X,F,q,B,w,ee),B.side=On):v.renderBufferDirect(X,F,q,B,w,ee),w.onAfterRender(v,F,X,q,B,ee)}function Wt(w,F,X){F.isScene!==!0&&(F=Te);const q=_e.get(w),B=p.state.lights,ee=p.state.shadowsArray,ae=B.state.version,Me=j.getParameters(w,B.state,ee,F,X),xe=j.getProgramCacheKey(Me);let Ue=q.programs;q.environment=w.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(w.isMeshStandardMaterial?mt:$e).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Q),Ue=new Map,q.programs=Ue);let Pe=Ue.get(xe);if(Pe!==void 0){if(q.currentProgram===Pe&&q.lightsStateVersion===ae)return Et(w,Me),Pe}else Me.uniforms=j.getUniforms(w),w.onBeforeCompile(Me,v),Pe=j.acquireProgram(Me,xe),Ue.set(xe,Pe),q.uniforms=Me.uniforms;const Ce=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=se.uniform),Et(w,Me),q.needsLights=Rt(w),q.lightsStateVersion=ae,q.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Pe,q.uniformsList=null,Pe}function wt(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Uc.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Et(w,F){const X=_e.get(w);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function vt(w,F,X,q,B){F.isScene!==!0&&(F=Te),He.resetTextureUnits();const ee=F.fog,ae=q.isMeshStandardMaterial?F.environment:null,Me=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ln,xe=(q.isMeshStandardMaterial?mt:$e).get(q.envMap||ae),Ue=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,ct=!!X.morphAttributes.color;let zt=Cr;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(zt=v.toneMapping);const Ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bt=Ct!==void 0?Ct.length:0,ze=_e.get(q),Ut=p.state.lights;if(Ge===!0&&($===!0||w!==y)){const yn=w===y&&q.id===x;se.setState(q,w,yn)}let pt=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Ut.state.version||ze.outputColorSpace!==Me||B.isBatchedMesh&&ze.batching===!1||!B.isBatchedMesh&&ze.batching===!0||B.isBatchedMesh&&ze.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ze.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ze.instancing===!1||!B.isInstancedMesh&&ze.instancing===!0||B.isSkinnedMesh&&ze.skinning===!1||!B.isSkinnedMesh&&ze.skinning===!0||B.isInstancedMesh&&ze.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ze.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ze.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ze.instancingMorph===!1&&B.morphTexture!==null||ze.envMap!==xe||q.fog===!0&&ze.fog!==ee||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==se.numPlanes||ze.numIntersection!==se.numIntersection)||ze.vertexAlphas!==Ue||ze.vertexTangents!==Pe||ze.morphTargets!==Ce||ze.morphNormals!==je||ze.morphColors!==ct||ze.toneMapping!==zt||ze.morphTargetsCount!==bt)&&(pt=!0):(pt=!0,ze.__version=q.version);let Yn=ze.currentProgram;pt===!0&&(Yn=Wt(q,F,B));let Ss=!1,qn=!1,Co=!1;const Ot=Yn.getUniforms(),li=ze.uniforms;if(O.useProgram(Yn.program)&&(Ss=!0,qn=!0,Co=!0),q.id!==x&&(x=q.id,qn=!0),Ss||y!==w){O.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ot.setValue(I,"projectionMatrix",w.projectionMatrix),Ot.setValue(I,"viewMatrix",w.matrixWorldInverse);const Nn=Ot.map.cameraPosition;Nn!==void 0&&Nn.setValue(I,fe.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&Ot.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ot.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,qn=!0,Co=!0)}if(B.isSkinnedMesh){Ot.setOptional(I,B,"bindMatrix"),Ot.setOptional(I,B,"bindMatrixInverse");const yn=B.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ot.setValue(I,"boneTexture",yn.boneTexture,He))}B.isBatchedMesh&&(Ot.setOptional(I,B,"batchingTexture"),Ot.setValue(I,"batchingTexture",B._matricesTexture,He),Ot.setOptional(I,B,"batchingIdTexture"),Ot.setValue(I,"batchingIdTexture",B._indirectTexture,He),Ot.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&Ot.setValue(I,"batchingColorTexture",B._colorsTexture,He));const ui=X.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&re.update(B,X,Yn),(qn||ze.receiveShadow!==B.receiveShadow)&&(ze.receiveShadow=B.receiveShadow,Ot.setValue(I,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(li.envMap.value=xe,li.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(li.envMapIntensity.value=F.environmentIntensity),qn&&(Ot.setValue(I,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&Xn(li,Co),ee&&q.fog===!0&&Z.refreshFogUniforms(li,ee),Z.refreshMaterialUniforms(li,q,H,Y,p.state.transmissionRenderTarget[w.id]),Uc.upload(I,wt(ze),li,He)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Uc.upload(I,wt(ze),li,He),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ot.setValue(I,"center",B.center),Ot.setValue(I,"modelViewMatrix",B.modelViewMatrix),Ot.setValue(I,"normalMatrix",B.normalMatrix),Ot.setValue(I,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const yn=q.uniformsGroups;for(let Nn=0,xl=yn.length;Nn<xl;Nn++){const Vr=yn[Nn];Ve.update(Vr,Yn),Ve.bind(Vr,Yn)}}return Yn}function Xn(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Rt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,F,X){const q=_e.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),_e.get(w.texture).__webglTexture=F,_e.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const X=_e.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const xn=I.createFramebuffer();this.setRenderTarget=function(w,F=0,X=0){A=w,R=F,E=X;let q=!0,B=null,ee=!1,ae=!1;if(w){const xe=_e.get(w);if(xe.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(xe.__webglFramebuffer===void 0)He.setupRenderTarget(w);else if(xe.__hasExternalTextures)He.rebindTextures(w,_e.get(w.texture).__webglTexture,_e.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ce=w.depthTexture;if(xe.__boundDepthTexture!==Ce){if(Ce!==null&&_e.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ae=!0);const Pe=_e.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?B=Pe[F][X]:B=Pe[F],ee=!0):w.samples>0&&He.useMultisampledRTT(w)===!1?B=_e.get(w).__webglMultisampledFramebuffer:Array.isArray(Pe)?B=Pe[X]:B=Pe,P.copy(w.viewport),N.copy(w.scissor),z=w.scissorTest}else P.copy(ue).multiplyScalar(H).floor(),N.copy(Oe).multiplyScalar(H).floor(),z=st;if(X!==0&&(B=xn),O.bindFramebuffer(I.FRAMEBUFFER,B)&&q&&O.drawBuffers(w,B),O.viewport(P),O.scissor(N),O.setScissorTest(z),ee){const xe=_e.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,X)}else if(ae){const xe=F;for(let Ue=0;Ue<w.textures.length;Ue++){const Pe=_e.get(w.textures[Ue]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ue,Pe.__webglTexture,X,xe)}}else if(w!==null&&X!==0){const xe=_e.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xe.__webglTexture,X)}x=-1},this.readRenderTargetPixels=function(w,F,X,q,B,ee,ae,Me=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=_e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ae!==void 0&&(xe=xe[ae]),xe){O.bindFramebuffer(I.FRAMEBUFFER,xe);try{const Ue=w.textures[Me],Pe=Ue.format,Ce=Ue.type;if(!we.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-q&&X>=0&&X<=w.height-B&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),I.readPixels(F,X,q,B,be.convert(Pe),be.convert(Ce),ee))}finally{const Ue=A!==null?_e.get(A).__webglFramebuffer:null;O.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,F,X,q,B,ee,ae,Me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=_e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ae!==void 0&&(xe=xe[ae]),xe)if(F>=0&&F<=w.width-q&&X>=0&&X<=w.height-B){O.bindFramebuffer(I.FRAMEBUFFER,xe);const Ue=w.textures[Me],Pe=Ue.format,Ce=Ue.type;if(!we.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.bufferData(I.PIXEL_PACK_BUFFER,ee.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),I.readPixels(F,X,q,B,be.convert(Pe),be.convert(Ce),0);const ct=A!==null?_e.get(A).__webglFramebuffer:null;O.bindFramebuffer(I.FRAMEBUFFER,ct);const zt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await u0(I,zt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ee),I.deleteBuffer(je),I.deleteSync(zt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,X=0){const q=Math.pow(2,-X),B=Math.floor(w.image.width*q),ee=Math.floor(w.image.height*q),ae=F!==null?F.x:0,Me=F!==null?F.y:0;He.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ae,Me,B,ee),O.unbindTexture()};const ci=I.createFramebuffer(),jt=I.createFramebuffer();this.copyTextureToTexture=function(w,F,X=null,q=null,B=0,ee=null){ee===null&&(B!==0?(Ta("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=B,B=0):ee=0);let ae,Me,xe,Ue,Pe,Ce,je,ct,zt;const Ct=w.isCompressedTexture?w.mipmaps[ee]:w.image;if(X!==null)ae=X.max.x-X.min.x,Me=X.max.y-X.min.y,xe=X.isBox3?X.max.z-X.min.z:1,Ue=X.min.x,Pe=X.min.y,Ce=X.isBox3?X.min.z:0;else{const ui=Math.pow(2,-B);ae=Math.floor(Ct.width*ui),Me=Math.floor(Ct.height*ui),w.isDataArrayTexture?xe=Ct.depth:w.isData3DTexture?xe=Math.floor(Ct.depth*ui):xe=1,Ue=0,Pe=0,Ce=0}q!==null?(je=q.x,ct=q.y,zt=q.z):(je=0,ct=0,zt=0);const bt=be.convert(F.format),ze=be.convert(F.type);let Ut;F.isData3DTexture?(He.setTexture3D(F,0),Ut=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),Ut=I.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),Ut=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const pt=I.getParameter(I.UNPACK_ROW_LENGTH),Yn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ss=I.getParameter(I.UNPACK_SKIP_PIXELS),qn=I.getParameter(I.UNPACK_SKIP_ROWS),Co=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ce);const Ot=w.isDataArrayTexture||w.isData3DTexture,li=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const ui=_e.get(w),yn=_e.get(F),Nn=_e.get(ui.__renderTarget),xl=_e.get(yn.__renderTarget);O.bindFramebuffer(I.READ_FRAMEBUFFER,Nn.__webglFramebuffer),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,xl.__webglFramebuffer);for(let Vr=0;Vr<xe;Vr++)Ot&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.get(w).__webglTexture,B,Ce+Vr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.get(F).__webglTexture,ee,zt+Vr)),I.blitFramebuffer(Ue,Pe,ae,Me,je,ct,ae,Me,I.DEPTH_BUFFER_BIT,I.NEAREST);O.bindFramebuffer(I.READ_FRAMEBUFFER,null),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||_e.has(w)){const ui=_e.get(w),yn=_e.get(F);O.bindFramebuffer(I.READ_FRAMEBUFFER,ci),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,jt);for(let Nn=0;Nn<xe;Nn++)Ot?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ui.__webglTexture,B,Ce+Nn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ui.__webglTexture,B),li?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yn.__webglTexture,ee,zt+Nn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yn.__webglTexture,ee),B!==0?I.blitFramebuffer(Ue,Pe,ae,Me,je,ct,ae,Me,I.COLOR_BUFFER_BIT,I.NEAREST):li?I.copyTexSubImage3D(Ut,ee,je,ct,zt+Nn,Ue,Pe,ae,Me):I.copyTexSubImage2D(Ut,ee,je,ct,Ue,Pe,ae,Me);O.bindFramebuffer(I.READ_FRAMEBUFFER,null),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else li?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Ut,ee,je,ct,zt,ae,Me,xe,bt,ze,Ct.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Ut,ee,je,ct,zt,ae,Me,xe,bt,Ct.data):I.texSubImage3D(Ut,ee,je,ct,zt,ae,Me,xe,bt,ze,Ct):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ee,je,ct,ae,Me,bt,ze,Ct.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ee,je,ct,Ct.width,Ct.height,bt,Ct.data):I.texSubImage2D(I.TEXTURE_2D,ee,je,ct,ae,Me,bt,ze,Ct);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Yn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ss),I.pixelStorei(I.UNPACK_SKIP_ROWS,qn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Co),ee===0&&F.generateMipmaps&&I.generateMipmap(Ut),O.unbindTexture()},this.initRenderTarget=function(w){_e.get(w).__webglFramebuffer===void 0&&He.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?He.setTextureCube(w,0):w.isData3DTexture?He.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?He.setTexture2DArray(w,0):He.setTexture2D(w,0),O.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,O.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}function tp(s,e){if(e===U_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===lh||e===rm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===lh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class bT extends wo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new PT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new WT(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=ra.extractUrlBase(e);o=ra.resolveURL(l,this.path)}else o=ra.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new bm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Dm){try{o[lt.KHR_BINARY_GLTF]=new XT(e)}catch(h){i&&i(h);return}r=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new rE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case lt.KHR_MATERIALS_UNLIT:o[h]=new RT;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[h]=new YT(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[h]=new qT;break;case lt.KHR_MESH_QUANTIZATION:o[h]=new KT;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function AT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wT{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new qe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Ln);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new wm(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Am(u),l.distance=h;break;case"spot":l=new wv(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class RT{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return ss}extendParams(e,t,n){const i=[];e.color=new qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,an))}return Promise.all(i)}}class CT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class PT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(r)}}class IT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class LT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class DT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ln)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,an)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class NT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class UT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(a[0],a[1],a[2],Ln),Promise.all(r)}}class OT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class FT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(a[0],a[1],a[2],Ln),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,an)),Promise.all(r)}}class BT{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class kT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class zT{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class HT{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class VT{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class GT{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class WT{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==di.TRIANGLES&&l.mode!==di.TRIANGLE_STRIP&&l.mode!==di.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new Ze,m=new L,p=new kr,S=new L(1,1,1),M=new H0(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&S.fromBufferAttribute(c.SCALE,v),M.setMatrixAt(v,_.compose(m,p,S));for(const v in c)if(v==="_COLOR_0"){const b=c[v];M.instanceColor=new hh(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);Nt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Dm="glTF",Bo=12,np={JSON:1313821514,BIN:5130562};class XT{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Bo,r=new DataView(e,Bo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===np.JSON){const l=new Uint8Array(e,Bo+o,a);this.content=n.decode(l)}else if(c===np.BIN){const l=Bo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class YT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=ph[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ph[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Js[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,Ln,d)})})}}class qT{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class KT{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class Nm extends Ba{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,S=1-m,M=p-d+h;for(let v=0;v!==a;v++){const b=o[_+v+a],R=o[_+v+c]*u,E=o[g+v+a],A=o[g+v]*u;r[v]=S*b+M*R+m*E+p*A}return r}}const $T=new kr;class jT extends Nm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return $T.fromArray(r).normalize().toArray(r),r}}const di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ip={9728:Pn,9729:ni,9984:jp,9985:Pc,9986:Wo,9987:ir},rp={33071:Sr,33648:Xc,10497:uo},ru={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JT={CUBICSPLINE:void 0,LINEAR:Ma,STEP:ya},su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ei({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cr})),s.DefaultMaterial}function $r(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function QT(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function eE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tE(s){let e;const t=s.extensions&&s.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ou(t.attributes):e=s.indices+":"+ou(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ou(s.targets[n]);return e}function ou(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function mh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const iE=new Ze;class rE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ev(this.options.manager):this.textureLoader=new Pv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return $r(r,a,i),Pi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ra.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ru[i.type],a=Js[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new In(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=ru[i.type],l=Js[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(S);M||(_=new l(a,p*f,i.count*f/u),M=new O0(_,f/u),t.cache.add(S,M)),m=new Jh(M,c,d%f/u,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new In(_,c,g);if(i.sparse!==void 0){const p=ru.SCALAR,S=Js[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new S(o[1],M,i.sparse.count*p),R=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new In(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,A=b.length;E<A;E++){const x=b[E];if(m.setX(x,R[E*c]),c>=2&&m.setY(x,R[E*c+1]),c>=3&&m.setZ(x,R[E*c+2]),c>=4&&m.setW(x,R[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=ip[d.magFilter]||ni,u.minFilter=ip[d.minFilter]||ir,u.wrapS=rp[d.wrapS]||uo,u.wrapT=rp[d.wrapT]||uo,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Pn&&u.minFilter!==ni,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new cn(_);m.needsUpdate=!0,d(m)}),t.load(ra.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Pi(h,o),h.userData.mimeType=o.mimeType||nE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new vm,Bi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ef,Bi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ei}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){const h=i[lt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ln),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,an)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=On);const u=r.alphaMode||su.OPAQUE;if(u===su.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===su.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ss&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ss&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ss){const h=r.emissiveFactor;a.emissive=new qe().setRGB(h[0],h[1],h[2],Ln)}return r.emissiveTexture!==void 0&&o!==ss&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,an)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Pi(h,r),t.associations.set(h,{materials:e}),r.extensions&&$r(i,h,r),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return sp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=tE(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=sp(new Dn,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?ZT(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const S=l[f];if(m.mode===di.TRIANGLES||m.mode===di.TRIANGLE_STRIP||m.mode===di.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new B0(_,S):new Ht(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===di.TRIANGLE_STRIP?p.geometry=tp(p.geometry,rm):m.mode===di.TRIANGLE_FAN&&(p.geometry=tp(p.geometry,lh));else if(m.mode===di.LINES)p=new X0(_,S);else if(m.mode===di.LINE_STRIP)p=new Ea(_,S);else if(m.mode===di.LINE_LOOP)p=new Y0(_,S);else if(m.mode===di.POINTS)p=new q0(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&eE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Pi(p,r),m.extensions&&$r(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&$r(i,h[0],r),h[0];const d=new Qt;r.extensions&&$r(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rn(c0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new af(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Zh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let M=0,v=d.length;M<v;M++){const b=d[M],R=f[M],E=g[M],A=_[M],x=m[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const y=n._createAnimationTracks(b,R,E,A,x);if(y)for(let P=0;P<y.length;P++)p.push(y[P])}const S=new _v(r,void 0,p);return Pi(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,iE)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new gm:l.length>1?u=new Qt:l.length===1?u=l[0]:u=new Nt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Pi(u,r),r.extensions&&$r(n,u,r),r.matrix!==void 0){const h=new Ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Qt;n.name&&(r.name=i.createUniqueName(n.name)),Pi(r,n),n.extensions&&$r(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Bi||d instanceof cn)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];xr[r.path]===xr.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(xr[r.path]){case xr.weights:l=mo;break;case xr.rotation:l=go;break;case xr.translation:case xr.scale:l=_o;break;default:n.itemSize===1?l=mo:l=_o;break}const u=i.interpolation!==void 0?JT[i.interpolation]:Ma,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+xr[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=mh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof go?jT:Nm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sE(s,e,t){const n=e.attributes,i=new hr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const u=mh(Js[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,c=new L;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=mh(Js[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Gi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function sp(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=ph[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ht.workingColorSpace!==Ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Pi(s,e),sE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?QT(s,e.targets,t):s})}const oE=(s,e=0,t=1)=>Math.max(e,Math.min(t,s)),Pt=(s,e,t)=>{const n=oE((t-s)/(e-s));return n*n*(3-2*n)};function au(s,e,t){return t==="plain"?(s+e)%2===0:t==="basket"?(Math.floor(s/2)+Math.floor(e/2))%2===0:((s-e)%4+4)%4<2}function aE(s,e){const t=Math.max(0,Math.floor(s)),n=s-t,i=Pt(0,.19,n)*(1-Pt(.69,.85,n)),r=Pt(.77,.9,n)*(1-Pt(.94,1,n)),o=-2.45+2.45*Pt(.18,.43,n)-2.45*Pt(.53,.72,n),a=2.45-2.45*Pt(.38,.46,n)+2.45*Pt(.54,.74,n),c=n>=.46&&n<.54,l=n<.46?(o+2.45)/4.9:n<.54?.5:(a+2.45)/4.9,u=s/(e.picksPerCm*100);return{pick:t,phase:n,shed:i,beat:r,leftX:o,rightX:a,transfer:c,feed:l,clothLengthM:u,beamAngle:-u/.48,takeupAngle:u/.34}}const Lt={steel:new Ei({color:5662583,metalness:.75,roughness:.32}),dark:new Ei({color:1779506,metalness:.65,roughness:.42}),brass:new Ei({color:13476972,metalness:.75,roughness:.3}),yarnA:new Ei({color:14272682,roughness:.82,side:On}),yarnB:new Ei({color:7846331,roughness:.78,side:On}),wood:new Ei({color:7359283,roughness:.64}),cloth:new Ei({color:11982283,roughness:.8,side:On})},jn=(s,e,t,n,i,r,o,a)=>{const c=new Ht(new zr(e,t,n),a);return c.position.set(i,r,o),c.castShadow=!0,c.receiveShadow=!0,s.add(c),c},pc=(s,e,t,n,i,r,o,a="x")=>{const c=new Ht(new Fa(e,e,t,24),o);return a==="x"&&(c.rotation.z=Math.PI/2),a==="z"&&(c.rotation.x=Math.PI/2),c.position.set(n,i,r),c.castShadow=!0,c.receiveShadow=!0,s.add(c),c},cu=(s,e,t,n)=>{const i=new rf(e),r=new Ht(new fl(i,Math.max(8,e.length*5),t,5,!1),n);return s.add(r),r};class cE{root=new Qt;groups={};heddleA=new Qt;heddleB=new Qt;reedPivot=new Qt;shuttle=new Qt;warpLines=[];rollers=[];clothMesh;yarnTrail;constructor(){this.root.name="LOOM_FINAL";for(const e of["frame","warp","heddles","reed","shuttle","cloth","rollers"])this.groups[e]=new Qt,this.groups[e].name=e,this.root.add(this.groups[e]);this.build()}build(){const e=this.groups.frame;for(const f of[-3.4,3.4]){for(const g of[-3,3])jn(e,.22,3.3,.24,f,.6,g,Lt.steel);jn(e,.3,.16,6.3,f,2.25,0,Lt.dark),jn(e,.32,.16,6.4,f,-.95,0,Lt.dark)}for(const f of[-2.85,2.85])jn(e,7.1,.16,.24,0,2.2,f,Lt.steel),jn(e,7.1,.16,.22,0,-.85,f,Lt.dark);for(let f=0;f<9;f++){const g=-3.1+f*.78;jn(e,.06,.08,6,g,-.9,0,Lt.brass)}const t=this.groups.rollers;for(const[f,g,_]of[[.18,-2.85,.36],[-.12,2.65,.3],[.05,3.1,.27]]){const m=pc(t,_,6.5,0,f,g,Lt.wood);this.rollers.push(m);for(const p of[-3.18,3.18])pc(t,_*1.16,.13,p,f,g,Lt.brass)}const n=this.groups.warp,i=64;for(let f=0;f<i;f++){const g=(f/(i-1)-.5)*5.8,_=[new L(g,.3,-2.95),new L(g,.32,-1.25),new L(g,.3,.2),new L(g,.17,1.3),new L(g,.06,2.3)],m=new Dn().setFromPoints(_),p=new Ea(m,new ef({color:f%2?13023392:15326665,transparent:!0,opacity:.87}));n.add(p),this.warpLines.push(p)}for(const[f,g]of[this.heddleA,this.heddleB].entries()){g.name=f===0?"heddle_even":"heddle_odd",g.position.z=f===0?-.85:-.55,this.groups.heddles.add(g),jn(g,6.2,.11,.12,0,.95,0,Lt.brass),jn(g,6.2,.11,.12,0,-.48,0,Lt.brass);for(let _=f;_<i;_+=2){const m=(_/(i-1)-.5)*5.8;jn(g,.018,1.4,.025,m,.24,0,Lt.steel),pc(g,.045,.035,m,.24,0,Lt.brass,"z")}}const r=this.groups.reed;this.reedPivot.position.set(0,-.62,1.15),r.add(this.reedPivot),jn(this.reedPivot,6.6,.15,.2,0,1.55,0,Lt.brass),jn(this.reedPivot,6.6,.15,.2,0,.26,0,Lt.brass);for(let f=0;f<80;f++)jn(this.reedPivot,.016,1.25,.035,(f/79-.5)*6.2,.92,0,Lt.steel);this.groups.shuttle.add(this.shuttle),this.shuttle.position.set(-2.8,.3,.85);const o=jn(this.shuttle,.68,.15,.27,0,0,0,Lt.wood);o.rotation.y=.06;for(const f of[-.38,.38]){const g=new Ht(new hl(.13,.33,4),Lt.brass);g.rotation.z=f<0?Math.PI/2:-Math.PI/2,g.position.x=f,this.shuttle.add(g)}pc(this.shuttle,.055,.28,0,.12,0,Lt.yarnB,"z"),this.yarnTrail=cu(this.shuttle,[new L(0,.08,0),new L(-.3,.08,.03),new L(-.58,.05,.05)],.018,Lt.yarnB);const a=this.groups.cloth,c=48,l=64,u=[],h=[];for(let f=0;f<=c;f++){const g=1.45+f/c*1.15;for(let _=0;_<=l;_++){const m=(_/l-.5)*5.8,p=.075+Math.sin(_*.55+f*.6)*.012;u.push(m,p,g)}}for(let f=0;f<c;f++)for(let g=0;g<l;g++){const _=f*(l+1)+g,m=_+1,p=_+l+1,S=p+1;h.push(_,p,m,m,p,S)}const d=new Dn;d.setAttribute("position",new en(u,3)),d.setIndex(h),d.computeVertexNormals(),this.clothMesh=new Ht(d,Lt.cloth),this.clothMesh.receiveShadow=!0,a.add(this.clothMesh);for(let f=0;f<32;f++){const g=(f/31-.5)*5.8,_=[];for(let m=0;m<=24;m++){const p=1.47+m/24*1.07;_.push(new L(g,.09+(m%2?.018:-.018),p))}cu(a,_,.012,f%2?Lt.yarnA:Lt.yarnB)}for(let f=0;f<20;f++){const g=1.49+f/19*1.07,_=[];for(let m=0;m<=32;m++){const p=(m/32-.5)*5.8;_.push(new L(p,.105+(m%2?.018:-.018),g))}cu(a,_,.012,f%2?Lt.yarnB:Lt.yarnA)}}pose(e,t){if(t&&t.mechanics){const o=t.mechanics,a=o.frameOffsets,c=h=>a[Math.min(a.length-1,Math.max(0,h))]??0;this.heddleA.position.y=(c(0)+c(2))/2*.64,this.heddleB.position.y=(c(1)+c(3))/2*.64,this.reedPivot.rotation.x=(.06+o.reed*.23)*Pt(.36,.48,e);const l=t.transfer.tip.x;this.shuttle.position.x=-2.8+(l+2.45)/4.9*5.6,this.shuttle.position.y=.3+Pt(.23,.33,e)*.1,this.rollers.forEach((h,d)=>h.rotation.y=e*1.9*(d%2?-1:1));const u=Pt(.65,.86,e);this.groups.cloth.scale.z=.12+.88*u,this.groups.cloth.position.z=2.3*(1-u),this.warpLines.forEach(h=>h.visible=e<.98);return}const n=e*7.5%1,i=Math.sin(n*Math.PI*2),r=Pt(.23,.33,e)*(1-Pt(.67,.8,e));this.heddleA.position.y=i*.28*r,this.heddleB.position.y=-i*.28*r,this.reedPivot.rotation.x=(.06+Math.max(0,Math.sin(n*Math.PI*2+1.3))*.23)*Pt(.36,.48,e),this.shuttle.position.x=-2.8+5.6*(.5-.5*Math.cos(n*Math.PI*2))*Pt(.42,.53,e),this.shuttle.position.y=.3+.1*r,this.shuttle.rotation.y=i*.05,this.rollers.forEach((o,a)=>o.rotation.y=e*1.9*(a%2?-1:1)),this.groups.cloth.scale.z=.12+.88*Pt(.65,.86,e),this.groups.cloth.position.z=2.3*(1-Pt(.65,.86,e)),this.warpLines.forEach(o=>o.visible=e<.98)}isolate(e){for(const[t,n]of Object.entries(this.groups))n.visible=e==="all"||t===e||t==="frame"}dispose(){this.root.traverse(e=>{(e instanceof Ht||e instanceof Ea)&&e.geometry.dispose()})}}const Um=[],Yo=[];function Qi(s,e=.2,t=.5){const n=new Ei({color:s,metalness:e,roughness:t,side:On});return Um.push(n),n}function Zs(s,e,t=0,n=0,i=0){Yo.push(s);const r=new Ht(s,e);return r.position.set(t,n,i),r.castShadow=!0,r.receiveShadow=!0,r}function Ji(s,e,t,n){const i=Zs(new zr(...n),e,...t);return s.add(i),i}function lu(s,e,t,n,i,r,o){const a=Zs(new Fa(r,r,o,24),e,t,n,i);return s.add(a),a}function op(s,e,t,n=.012){const i=new rf(e),r=Zs(new fl(i,Math.max(16,e.length*3),n,5,!1),Qi(t,.12,.65));return s.add(r),r}function lE(){const s=new Qt,e=[],t=Qi(6716033,.75,.28),n=Qi(2440002,.55,.4),i=Qi(14066029,.35,.4),r=Qi(14603453,.1,.85),o=Qi(1517099,.15,.9);Ji(s,o,[0,-2.05,-30],[17,.22,93]);for(let A=8;A>-75;A-=6){for(const x of[-7.6,7.6])Ji(s,n,[x,1,A],[.24,6.2,.26]),Ji(s,t,[x,4,A],[.4,.18,5.9]);Ji(s,n,[0,4,A],[15.3,.2,.25])}for(let A=8;A>-75;A-=12){const x=Zs(new zr(1.7,.08,.55),Qi(16768688,.2,.2),0,3.9,A);s.add(x)}const a=new Qt;a.position.z=3,s.add(a);const c=Qi(15129798,.05,.92),l=new sf(.13,1);Yo.push(l);for(let A=0;A<190;A++){const x=A*2.39996,y=Math.sqrt(A/190)*2.3,P=new Ht(l,c);P.position.set(Math.cos(x)*y,Math.sin(A*1.7)*.6+.25,Math.sin(x)*y),P.scale.set(.4+Math.random()*.6,.5+Math.random()*1.1,1.5),a.add(P)}e.push(A=>{a.rotation.y=A*.055,a.position.y=Math.sin(A*.7)*.07});const u=new Qt;u.position.z=-12,s.add(u);for(const A of[-2.9,2.9]){Ji(u,n,[A,-1.5,0],[2.5,.3,5.4]),Ji(u,t,[A,.5,0],[2.5,.13,5.4]);for(let x=0;x<9;x++){const y=-2.15+x*.54,P=lu(u,i,A,0,y,.12,1.1),N=Zs(new hl(.27,.95,18),r,A,1.07,y);u.add(N),op(u,[new L(A,1.55,y),new L(A+.2,2.2,y-.4),new L(A+.15,2.8,y-.7)],14799286,.013),e.push(z=>{P.rotation.y=z*3,N.rotation.y=z*2.2})}}const h=new Qt;h.position.z=-27,s.add(h);for(const A of[-4,4]){const x=lu(h,t,0,-.2,A,.56,7);x.rotation.z=Math.PI/2,e.push(y=>{x.rotation.y=y*.3})}for(let A=0;A<95;A++){const x=(A-47)*.065;op(h,[new L(x,-.15,4),new L(x,.12,1),new L(x,.03,-1),new L(x,-.15,-4)],A%7===0?14267531:11716808,.008)}for(const A of[-3.7,3.7])Ji(h,n,[A,-.6,0],[.24,2.2,9]);const d=new cE;d.root.position.set(0,-1.05,-44),s.add(d.root),e.push((A,x,y)=>{d.pose(x,y??null)});const f=new Qt;f.position.z=-59,s.add(f);for(let A=0;A<4;A++){const x=-3+A*2,y=lu(f,A%2?i:t,0,-.1+A%2*.55,x,.6,7);y.rotation.z=Math.PI/2,e.push(P=>{y.rotation.y=P*.35})}const g=Qi(11716284,.08,.85),_=new po(6.3,10,60,90);Yo.push(_);const m=new Ht(_,g);m.rotation.x=-Math.PI/2,m.position.set(0,-.6,-.5),f.add(m);const p=_.attributes.position,S=new Float32Array(p.array);e.push(A=>{for(let x=0;x<p.count;x++){const y=x*3;p.setZ(x,S[y+2]+Math.sin(S[y+1]*1.6+A*1.8+S[y]*.6)*.09)}p.needsUpdate=!0,_.computeVertexNormals()});const M=new Qt;M.position.z=-73,s.add(M);const v=new po(6,5.4,85,75);Yo.push(v);const b=Zs(v,r,0,.35,0);M.add(b);const R=v.attributes.position,E=new Float32Array(R.array);e.push(A=>{for(let x=0;x<R.count;x++){const y=x*3;R.setZ(x,Math.sin(E[y]*2.5+A*.45)*.26+Math.cos(E[y+1]*2.1+A*.35)*.18)}R.needsUpdate=!0,v.computeVertexNormals()});for(const A of[-3.3,3.3])Ji(M,n,[A,0,-.6],[.15,6,.2]);return Ji(M,t,[0,3,-.6],[7,.2,.2]),{root:s,update:(A,x,y)=>{for(const P of e)P(A,x,y)},dispose:()=>{for(const A of Yo)A.dispose();for(const A of Um)A.dispose()}}}const uE={INVALID_TIME:{severity:"recoverable",strategy:"RESTORE_CHECKPOINT",cause:"Non-finite or out-of-bounds timeline coordinate",steps:["Stop playback","Restore last validated cycle","Re-evaluate mechanical invariants"],automatic:!0,requiresOperator:!1},INVALID_POSE:{severity:"engineering",strategy:"INSPECT_MECHANICS",cause:"Mechanical state invariant violated",steps:["Freeze production","Capture failing pose and configuration","Inspect root cause and validate regression tests"],automatic:!1,requiresOperator:!0},INVALID_CONFIGURATION:{severity:"engineering",strategy:"VERIFY_CONFIGURATION",cause:"Invalid loom setup",steps:["Freeze production","Validate ends, RPM and pick density","Approve corrected setup before restart"],automatic:!1,requiresOperator:!0},RENDER_FAILURE:{severity:"recoverable",strategy:"REBUILD_RENDER_RESOURCES",cause:"Rendering exception or GPU resource failure",steps:["Stop playback","Release and recreate owned GPU resources via registered callback","Verify scene and last valid mechanical pose"],automatic:!0,requiresOperator:!1},WARP_BREAK:{severity:"operator",strategy:"MANUAL_WARP_KNOT",cause:"Warp stop-motion sensor triggered",steps:["Stop loom","Locate broken warp end and dropped lamella","Repair knot and verify sensor","Restart manually"],automatic:!1,requiresOperator:!0},TRANSFER_MISMATCH:{severity:"engineering",strategy:"RECALIBRATE_TRANSFER",cause:"Rapier gripper / yarn endpoint constraint mismatch",steps:["Freeze production","Check gripper overlap and ownership","Recalibrate only after geometric verification"],automatic:!1,requiresOperator:!0}};function hE(s){return{id:`${s.code}@${s.cycle.toFixed(4)}`,code:s.code,...uE[s.code]}}function ap(s,e,t){const n=e&&t;return{planId:s.id,ok:n,verified:n,reason:n?"Post-repair invariants passed":"Repair verification failed; machine remains locked",cycle:Number(s.id.split("@")[1])}}const fE=s=>({...s,endsPerDent:4,warpBeamCoreRadiusM:.22,warpBeamFullRadiusM:.48,takeupCoreRadiusM:.28,warpLayerThicknessM:15e-5,clothThicknessM:42e-5,warpCrimpFactor:1.04});function dE(s,e){return[0,1,2,3].map(t=>e==="plain"?t<2&&au(t,s,e):au(e==="basket"?t*2:t,s,e))}function pE(s,e){const t=Math.max(0,Math.floor(s)),n=t/(e.picksPerCm*100),i=Math.max(0,s)/(e.picksPerCm*100),r=n*e.warpCrimpFactor,o=1,a=Math.max(Math.PI*e.warpBeamCoreRadiusM**2,Math.PI*e.warpBeamFullRadiusM**2-r*e.warpLayerThicknessM/o),c=Math.sqrt(a/Math.PI),l=Math.sqrt(e.takeupCoreRadiusM**2+n*e.clothThicknessM/(Math.PI*o)),u=-Math.PI*o*(e.warpBeamFullRadiusM**2-c**2)/(Math.max(e.warpLayerThicknessM,1e-9)*Math.max((c+e.warpBeamFullRadiusM)/2,1e-9)),h=Math.PI*o*(l**2-e.takeupCoreRadiusM**2)/(Math.max(e.clothThicknessM,1e-9)*Math.max((l+e.takeupCoreRadiusM)/2,1e-9));return{completedPicks:t,producedLengthM:n,warpConsumedM:r,theoreticalLengthM:i,warpRadiusM:c,takeupRadiusM:l,beamAngle:u,takeupAngle:h}}function mE(s,e){const t=s-Math.floor(s),n=Math.floor(s),i=t<.18?"shed-open":t<.43?"carrier-entry":t<.46?"centre-overlap":t<.49?"receiver-grip":t<.54?"carrier-release":t<.77?"rapier-exit":t<.94?"beat-up":"take-up",r=-2.45+2.45*Pt(.18,.43,t)-2.45*Pt(.54,.72,t),o=2.45-2.45*Pt(.38,.43,t)+2.45*Pt(.54,.74,t),a=Math.abs(r-o)<.035,c=t>=.18&&t<.54,l=t>=.46&&t<.77,u=t<.18?"none":t<.46?"carrier":t<.54?"both":t<.77?"receiver":"reed",h=Pt(0,.18,t)*(1-Pt(.7,.84,t)),d=dE(n,e.weave).map(g=>(g?1:-1)*.31*h),f=Pt(.77,.91,t)*(1-Pt(.94,1,t));return{phase:i,carrierJawClosed:c,receiverJawClosed:l,transferValid:a,carrierTipX:r,receiverTipX:o,owner:u,shed:h,reed:f,frameOffsets:d}}const mc=(s,e,t)=>({x:s,y:e,z:t});function gE(s,e){const t=s.owner,n=e<.18?"waiting":e<.43?"carrier-entry":e<.46?"centre-grip":e<.54?"receiver-transfer":e<.77?"rapier-exit":"beat-up";if(t==="both"&&(!s.carrierJawClosed||!s.receiverJawClosed||!s.transferValid))throw Error("TRANSFER_MISMATCH: overlapping grippers are not secured");if(t==="carrier"&&!s.carrierJawClosed)throw Error("TRANSFER_MISMATCH: carrier jaw open");if(t==="receiver"&&!s.receiverJawClosed)throw Error("TRANSFER_MISMATCH: receiver jaw open");const i=t==="none"?-2.45:t==="carrier"?s.carrierTipX:t==="both"?(s.carrierTipX+s.receiverTipX)/2:t==="receiver"?s.receiverTipX:2.45,r=.95+1.125*s.reed,o=mc(i,1.28,r),a=[mc(-3.35,1.25,1.43),mc(-2.88,1.55,1.18),mc(-2.54,1.28,r),o];let c=0;for(let l=1;l<a.length;l++){const u=a[l-1],h=a[l];c+=Math.hypot(u.x-h.x,u.y-h.y,u.z-h.z)}return{state:n,owner:t,points:a,tip:o,length:c}}const ko=120;class _E{constructor(e){this.config=e,this.assertConfig()}config;cycle=0;mode="STOPPED";incidents=[];consecutiveResets=0;fault=null;lastGood=0;nextIncident=1;brokenEnd=0;recoveryChecks=0;reports=[];renderRecovery=null;get status(){return{cycle:this.cycle,mode:this.mode,fault:this.fault,consecutiveResets:this.consecutiveResets,brokenEnd:this.brokenEnd,recoveryChecks:this.recoveryChecks}}get logs(){return[...this.incidents]}get diagnosticReports(){return this.reports.map(e=>({...e}))}registerRenderRecovery(e){this.renderRecovery=e}diagnose(e,t){const n={code:e,detail:t,cycle:this.cycle,subsystem:e==="RENDER_FAILURE"?"render":e==="WARP_BREAK"?"warp":e==="TRANSFER_MISMATCH"?"rapier":"kinematics",recordedAt:new Date().toISOString()},i={evidence:n,plan:hE(n)};return this.reports.push(i),i}latestReport(){return this.reports[this.reports.length-1]}assertConfig(){if(!Number.isFinite(this.config.rpm)||this.config.rpm<=0||!Number.isFinite(this.config.picksPerCm)||this.config.picksPerCm<=0||!Number.isInteger(this.config.ends)||this.config.ends<2)throw Error("Invalid loom configuration")}evaluate(e=this.cycle){if(!Number.isFinite(e)||e<0||e>ko)throw Error("Invalid cycle");this.assertConfig();const t=aE(e,this.config),n=fE(this.config),i=mE(e,n),r=pE(e,n),o=gE(i,t.phase);if(t.leftX=i.carrierTipX,t.rightX=i.receiverTipX,t.shed=i.shed,t.beat=i.reed,t.transfer=i.owner==="both",t.clothLengthM=r.producedLengthM,t.beamAngle=r.beamAngle,t.takeupAngle=r.takeupAngle,[r.producedLengthM,r.warpRadiusM,r.takeupRadiusM,i.carrierTipX,i.receiverTipX].some(c=>!Number.isFinite(c)))throw Error("Non-finite mechanical state");return{cycle:e,pose:t,mechanics:i,production:r,transfer:o}}incident(e,t){this.diagnose(e,t),this.fault=e,this.mode="FAULT",this.incidents.push({id:this.nextIncident++,code:e,cycle:this.cycle,attempt:this.consecutiveResets,detail:t,at:new Date().toISOString()})}report(e,t){this.mode!=="DIAGNOSIS"&&this.incident(e,t)}handleRuntimeFailure(e){return this.incident("RENDER_FAILURE",e),this.resetSafely()}check(){try{return this.evaluate(),this.lastGood=this.cycle,!0}catch(e){return this.incident("INVALID_POSE",String(e)),!1}}dispatch(e,t){if(e==="PAUSE")return this.mode==="RUNNING"&&(this.mode="STOPPED"),!0;if(e==="BREAK")return this.mode==="DIAGNOSIS"?!1:(this.brokenEnd=Math.max(0,Math.min(this.config.ends-1,Math.trunc(t??0))),this.incident("WARP_BREAK",`Warp end ${this.brokenEnd+1} broken`),!0);if(e==="REPAIR")return this.mode!=="FAULT"||this.fault!=="WARP_BREAK"?!1:(this.mode="AWAITING_OPERATOR",!0);if(e==="RESTART")return this.mode!=="AWAITING_OPERATOR"?!1:(this.fault=null,this.mode="RUNNING",this.consecutiveResets=0,this.check());if(e==="ACK_DIAGNOSIS")return this.mode!=="DIAGNOSIS"||!this.latestReport()?.outcome?.verified?!1:(this.mode="STOPPED",this.fault=null,this.consecutiveResets=0,this.check());if(e==="RESET")return this.resetSafely();if(this.mode==="FAULT"||this.mode==="RECOVERING"||this.mode==="DIAGNOSIS"||this.mode==="AWAITING_OPERATOR")return!1;if(e==="PLAY")return this.check()?(this.mode="RUNNING",!0):!1;if(e==="STEP"||e==="BACK"||e==="SEEK"){const n=e==="STEP"?Math.min(ko,Math.floor(this.cycle)+1):e==="BACK"?Math.max(0,Math.ceil(this.cycle)-1):t;return n===void 0||!Number.isFinite(n)||n<0||n>ko?(this.incident("INVALID_TIME",String(n)),!1):(this.cycle=n,this.mode="STOPPED",this.check())}return!1}tick(e){if(this.mode==="RUNNING"){if(!Number.isFinite(e)||e<0){this.incident("INVALID_TIME",String(e));return}this.cycle=Math.min(ko,this.cycle+Math.min(e,.05)*this.config.rpm/60),this.check()&&(this.cycle>=ko?this.mode="STOPPED":this.consecutiveResets>0&&(this.recoveryChecks++,this.recoveryChecks>=120&&(this.consecutiveResets=0,this.recoveryChecks=0)))}}resetSafely(){if(this.mode==="DIAGNOSIS"||this.fault==="WARP_BREAK"||this.mode==="AWAITING_OPERATOR")return!1;if(this.consecutiveResets++,this.mode="RECOVERING",this.cycle=this.lastGood,this.recoveryChecks=0,this.consecutiveResets>=3)return this.mode="DIAGNOSIS",this.incidents.push({id:this.nextIncident++,code:this.fault??"INVALID_POSE",cycle:this.cycle,attempt:3,detail:"Three consecutive resets: diagnostics and operator intervention required",at:new Date().toISOString()}),!1;try{const e=this.latestReport()?.plan;if(!e?.automatic)return this.mode="DIAGNOSIS",!1;const t=e.strategy==="REBUILD_RENDER_RESOURCES"?this.renderRecovery?.()===!0:!0;let n=!1;try{this.evaluate(),n=!0}catch{}const i=ap(e,n,t),r=this.latestReport();return r&&(r.outcome=i),i.ok?(this.fault=null,this.mode="STOPPED",!0):(this.mode="DIAGNOSIS",!1)}catch(e){return this.incident("INVALID_POSE",`Reset failed: ${String(e)}`),!1}}verifyOperatorRepair(e,t=()=>!1){if(this.mode!=="DIAGNOSIS"||!e)return!1;let n=!1;try{this.evaluate(),n=t()}catch{}const i=this.latestReport();return i?(i.outcome=ap(i.plan,n,!0),i.outcome.verified):!1}diagnostics(){const e=this.incidents.slice(-10);return{mode:this.mode,lastGoodCycle:this.lastGood,attempts:this.consecutiveResets,recent:e,reports:this.diagnosticReports.slice(-10),advice:this.mode==="DIAGNOSIS"?"Inspect input configuration, last fault and component invariants; repair source offline, run tests, then acknowledge. No automatic code mutation.":"Monitor and validate before resuming."}}}const cp=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),vE=s=>s*s*(3-2*s),zo=[new L(0,.1,13),new L(-.3,.25,-8),new L(0,.5,-24),new L(0,.15,-39),new L(0,.8,-55),new L(0,.2,-69)];class xE{constructor(e,t){this.canvas=e,this.onStage=t;const n=matchMedia("(max-width:767px)").matches||matchMedia("(pointer:coarse)").matches;this.renderer=new ET({canvas:e,antialias:!n,alpha:!1,powerPreference:n?"low-power":"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,n?1:1.75)),this.renderer.outputColorSpace=an,this.renderer.toneMapping=Kp,this.scene.background=new qe(528147),this.scene.fog=new jh(528147,.018),this.scene.add(this.factory.root),this.scene.add(new bv(12048607,2503980,2.2));const i=new wm(16767406,3.3);i.position.set(-5,8,8),this.scene.add(i);const r=new Am(7981509,55,32);r.position.set(4,3,-30),this.scene.add(r),this.camera.position.copy(zo[0]),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),window.addEventListener("pointermove",this.handlePointer,{passive:!0}),this.observer=new IntersectionObserver(o=>{this.visible=o[0]?.isIntersecting??!0},{threshold:0}),this.observer.observe(e),this.loadMachines(),this.orch.dispatch("PLAY"),this.tick()}canvas;onStage;renderer;scene=new U0;camera=new Rn(57,1,.1,160);factory=lE();progress=0;target=0;frame=0;clock=new Lv;pointer=new Ie;disposed=!1;resizeObserver;loader=new bT;machines=new Map;visible=!0;observer;orch=new _E({ends:110,picksPerCm:12,rpm:180,weave:"plain"});snap=null;async loadMachines(){const e=[{file:"spinner.glb",stage:1,z:-12,scale:1},{file:"warper.glb",stage:2,z:-27,scale:1},{file:"loom.glb",stage:3,z:-44,scale:1},{file:"finisher.glb",stage:4,z:-59,scale:1}];for(const t of e)try{const n=[`cycle/models/${t.file}`,`models/${t.file}`,`/PratoHub/cycle/models/${t.file}`,`./models/${t.file}`];let i=null;for(const r of n)try{i=await this.loader.loadAsync(r);break}catch{}if(!i)throw new Error("GLB miss "+t.file);if(this.disposed)break;i.scene.position.set(0,-1.2,t.z),i.scene.scale.setScalar(t.scale),this.scene.add(i.scene),this.machines.set(t.stage,{scene:i.scene,rotor:i.scene.getObjectByName("rotor")||void 0,shuttle:i.scene.getObjectByName("shuttle")||void 0,heddle:i.scene.getObjectByName("heddle")||void 0,reed:i.scene.getObjectByName("reed")||void 0,roll:i.scene.getObjectByName("roll")||void 0})}catch(n){console.warn("GLB fallback proc:",t.file,n)}}poseMachines(e){const t=e*(yE()-1);this.machines.forEach((n,i)=>{const r=cp((t-(i-1)+1)*.8);n.rotor&&(n.rotor.rotation.y=r*Math.PI*16),n.shuttle&&(n.shuttle.position.x=Math.sin(r*Math.PI*12)*1.8),n.heddle&&(n.heddle.position.y=Math.sin(r*Math.PI*12)*.28),n.reed&&(n.reed.position.z=Math.sin(r*Math.PI*12+.6)*.3),n.roll&&(n.roll.rotation.y=r*Math.PI*6)})}handlePointer=e=>{this.pointer.set((e.clientX/innerWidth-.5)*2,(e.clientY/innerHeight-.5)*2)};resize(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight;!e||!t||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1))}setProgress(e){this.target=cp(e)}tick=()=>{if(this.disposed)return;this.frame=requestAnimationFrame(this.tick);const e=Math.min(this.clock.getDelta(),.05),t=this.clock.elapsedTime;if(document.hidden||!this.visible)return;this.progress+=(this.target-this.progress)*(1-Math.exp(-e*7));const n=this.progress*(zo.length-1),i=Math.min(Math.floor(n),zo.length-2),r=vE(n-i);this.camera.position.lerpVectors(zo[i],zo[i+1],r),this.camera.position.x+=this.pointer.x*.12,this.camera.position.y+=this.pointer.y*-.07;const o=this.camera.position.z-9;this.camera.lookAt(this.pointer.x*.4,.05,o),this.camera.rotation.z=Math.sin(this.progress*Math.PI*5)*.018;try{const a=this.progress*120;this.orch.dispatch("SEEK",a),this.snap=this.orch.evaluate(a)}catch{this.snap=null}this.factory.update(t,this.progress,this.snap),this.poseMachines(this.progress),this.renderer.render(this.scene,this.camera),this.onStage(Math.min(Math.floor(this.progress*ms.length),ms.length-1))};dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),window.removeEventListener("pointermove",this.handlePointer),this.resizeObserver.disconnect(),this.observer?.disconnect(),this.factory.dispose(),this.renderer.dispose()}}function yE(){return ms.length}function er(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Om(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ba={duration:.5,overwrite:!1,delay:0},hf,hn,Dt,_i=1e8,Tt=1/_i,gh=Math.PI*2,ME=gh/4,SE=0,Fm=Math.sqrt,TE=Math.cos,EE=Math.sin,ln=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},lr=function(e){return typeof e=="number"},ff=function(e){return typeof e>"u"},Vi=function(e){return typeof e=="object"},zn=function(e){return e!==!1},df=function(){return typeof window<"u"},gc=function(e){return Vt(e)||ln(e)},Bm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,bE=/random\([^)]+\)/g,AE=/,\s*/g,lp=/(?:-?\.?\d|\.)+/gi,km=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zm=/[+-]=-?[.\d]+/,wE=/[^,'"\[\]\s]+/gi,RE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,Ii,_h,pf,oi={},jc={},Hm,Vm=function(e){return(jc=vo(e,oi))&&Wn},mf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Aa=function(e,t){return!t&&console.warn(e)},Gm=function(e,t){return e&&(oi[e]=t)&&jc&&(jc[e]=t)||oi},wa=function(){return 0},CE={suppressEvents:!0,isStart:!0,kill:!1},Oc={suppressEvents:!0,kill:!1},PE={suppressEvents:!0},gf={},Pr=[],vh={},Wm,Qn={},hu={},up=30,Fc=[],_f="",vf=function(e){var t=e[0],n,i;if(Vi(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Fc.length;i--&&!Fc[i].targetTest(t););n=Fc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new fg(e[i],n)))||e.splice(i,1);return e},cs=function(e){return e._gsap||vf(vi(e))[0]._gsap},Xm=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():ff(n)&&e.getAttribute&&e.getAttribute(t)||n},Hn=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},Qs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},IE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Jc=function(){var e=Pr.length,t=Pr.slice(0),n,i;for(vh={},Pr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xf=function(e){return!!(e._initted||e._startAt||e.add)},Ym=function(e,t,n,i){Pr.length&&!hn&&Jc(),e.render(t,n,!!(hn&&t<0&&xf(e))),Pr.length&&!hn&&Jc()},qm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wE).length<2?t:ln(e)?e.trim():e},Km=function(e){return e},ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},LE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},vo=function(e,t){for(var n in t)e[n]=t[n];return e},hp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Zc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},sa=function(e){var t=e.parent||Bt,n=e.keyframes?LE(vn(e.keyframes)):ai;if(zn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},DE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},$m=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ml=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ls=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},NE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xh=function(e,t,n,i){return e._startAt&&(hn?e._startAt.revert(Oc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},UE=function s(e){return!e||e._ts&&s(e.parent)},fp=function(e){return e._repeat?xo(e._tTime,e=e.duration()+e._rDelay)*e:0},xo=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},Qc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gl=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},_l=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gl(e),n._dirty||ls(n,e)),e},jm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Qc(e.rawTime(),t),(!t._dur||ka(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),ls(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Ni=function(e,t,n,i){return t.parent&&Ur(t),t._start=Ft((lr(n)?n:!n&&el(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Bt?fi(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$m(e,t,"_first","_last",e._sort?"_start":0),el(t)||(e._recent=t),i||jm(e,t),e._ts<0&&_l(e,e._tTime),e},Jm=function(e,t){return(oi.ScrollTrigger||mf("scrollTrigger",t))&&oi.ScrollTrigger.create(t,e)},Zm=function(e,t,n,i,r){if(Mf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wm!==ti.frame)return Pr.push(e),e._lazy=[r,i],1},OE=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},el=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},FE=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&OE(e)&&!(!e._initted&&el(e))||(e._ts<0||e._dp._ts<0)&&!el(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=ka(0,e._tDur,t),u=xo(c,a),e._yoyo&&u&1&&(o=1-o),u!==xo(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||hn||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&Zm(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&xh(e,t,n,!0),e._onUpdate&&!n&&ii(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ur(e,1),!n&&!hn&&(ii(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},BE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},yo=function(e,t,n,i){var r=e._repeat,o=Ft(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Ft(o*(r+1)+e._rDelay*r):o,a>0&&!i&&_l(e,e._tTime=e._tDur*a),e.parent&&gl(e),n||ls(e.parent,e),e},dp=function(e){return e instanceof Fn?ls(e):yo(e,e._dur)},kE={_start:0,endTime:wa,totalDuration:wa},fi=function s(e,t,n){var i=e.labels,r=e._recent||kE,o=e.duration()>=_i?r.endTime(!1):e._dur,a,c,l;return ln(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(vn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},oa=function(e,t,n){var i=lr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=zn(c.vars.inherit)&&c.parent;o.immediateRender=zn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new $t(t[0],o,t[r+1])},Hr=function(e,t){return e||e===0?t(e):t},ka=function(e,t,n){return n<e?e:n>t?t:n},gn=function(e,t){return!ln(e)||!(t=RE.exec(e))?"":t[1]},zE=function(e,t,n){return Hr(n,function(i){return ka(e,t,i)})},yh=[].slice,Qm=function(e,t){return e&&Vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vi(e[0]))&&!e.nodeType&&e!==Ii},HE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ln(i)&&!t||Qm(i,1)?(r=n).push.apply(r,vi(i)):n.push(i)})||n},vi=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):ln(e)&&!n&&(_h||!Mo())?yh.call((t||pf).querySelectorAll(e),0):vn(e)?HE(e,n):Qm(e)?yh.call(e,0):e?[e]:[]},Mh=function(e){return e=vi(e)[0]||Aa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?Aa("Invalid scope")||pf.createElement("div"):e)}},eg=function(e){return e.sort(function(){return .5-Math.random()})},tg=function(e){if(Vt(e))return e;var t=Vi(e)?e:{each:e},n=us(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,h=i;return ln(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,m=o[_],p,S,M,v,b,R,E,A,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,_i])[1],!x){for(E=-_i;E<(E=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=c?Math.min(x,_)*u-.5:i%x,S=x===_i?0:c?_*h/x-.5:i/x|0,E=0,A=_i,R=0;R<_;R++)M=R%x-p,v=S-(R/x|0),m[R]=b=l?Math.abs(l==="y"?v:M):Fm(M*M+v*v),b>E&&(E=b),b<A&&(A=b);i==="random"&&eg(m),m.max=E-A,m.min=A,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:l?l==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=gn(t.amount||t.each)||0,n=n&&_<0?eb(n):n}return _=(m[d]-m.min)/m.max||0,Ft(m.b+(n?n(_):_)*m.v)+m.u}},Sh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(lr(n)?0:gn(n))}},ng=function(e,t){var n=vn(e),i,r;return!n&&Vi(e)&&(i=n=e.radius||_i,e.values?(e=vi(e.values),(r=!lr(e[0]))&&(i*=i)):e=Sh(e.increment)),Hr(t,n?Vt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=_i,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-a,f=e[h].y-c,d=d*d+f*f):d=Math.abs(e[h]-a),d<l&&(l=d,u=h);return u=!i||l<=i?e[u]:o,r||u===o||lr(o)?u:u+gn(o)}:Sh(e))},ig=function(e,t,n,i){return Hr(vn(e)?!t:n===!0?!!(n=0):!i,function(){return vn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},VE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},GE=function(e,t){return function(n){return e(parseFloat(n))+(t||gn(n))}},WE=function(e,t,n){return sg(e,t,0,1,n)},rg=function(e,t,n){return Hr(n,function(i){return e[~~t(i)]})},XE=function s(e,t,n){var i=t-e;return vn(e)?rg(e,s(0,e.length),t):Hr(n,function(r){return(i+(r-e)%i)%i+e})},YE=function s(e,t,n){var i=t-e,r=i*2;return vn(e)?rg(e,s(0,e.length-1),t):Hr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Ra=function(e){return e.replace(bE,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(AE);return ig(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},sg=function(e,t,n,i,r){var o=t-e,a=i-n;return Hr(r,function(c){return n+((c-e)/o*a||0)})},qE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=ln(e),a={},c,l,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(vn(e)&&!vn(t)){for(u=[],h=e.length,d=h-2,l=1;l<h;l++)u.push(s(e[l-1],e[l]));h--,r=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=vo(vn(e)?[]:{},e));if(!u){for(c in t)yf.call(a,e,c,"get",t[c]);r=function(g){return Ef(g,a)||(o?e.p:e)}}}return Hr(n,r)},pp=function(e,t,n){var i=e.labels,r=_i,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},ii=function(e,t,n){var i=e.vars,r=i[t],o=Dt,a=e._ctx,c,l,u;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&Pr.length&&Jc(),a&&(Dt=a),u=c?r.apply(l,c):r.call(l),Dt=o,u},qo=function(e){return Ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&ii(e,"onInterrupt"),e},qs,og=[],ag=function(e){if(e)if(e=!e.name&&e.default||e,df()||e.headless){var t=e.name,n=Vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:wa,render:Ef,add:yf,kill:ub,modifier:lb,rawVars:0},o={targetTest:0,get:0,getSetter:Tf,aliases:{},register:0};if(Mo(),e!==i){if(Qn[t])return;ai(i,ai(Zc(e,r),o)),vo(i.prototype,vo(r,Zc(e,o))),Qn[i.prop=t]=i,e.targetTest&&(Fc.push(i),gf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gm(t,i),e.register&&e.register(Wn,i,Vn)}else og.push(e)},At=255,Ko={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},fu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},cg=function(e,t,n){var i=e?lr(e)?[e>>16,e>>8&At,e&At]:0:Ko.black,r,o,a,c,l,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ko[e])i=Ko[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(lp),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=fu(c+1/3,r,o),i[1]=fu(c,r,o),i[2]=fu(c-1/3,r,o);else if(~e.indexOf("="))return i=e.match(km),n&&i.length<4&&(i[3]=1),i}else i=e.match(lp)||Ko.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/At,o=i[1]/At,a=i[2]/At,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?c=l=0:(f=h-d,l=u>.5?f/(2-h-d):f/(h+d),c=h===r?(o-a)/f+(o<a?6:0):h===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},lg=function(e){var t=[],n=[],i=-1;return e.split(Ir).forEach(function(r){var o=r.match(Ys)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},mp=function(e,t,n){var i="",r=(e+i).match(Ir),o=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!r)return e;if(r=r.map(function(d){return(d=cg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=lg(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Ir,"1").split(Ys),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(Ir),h=l.length-1;a<h;a++)i+=l[a]+r[a];return i+l[h]},Ir=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ko)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),KE=/hsl[a]?\(/,ug=function(e){var t=e.join(" "),n;if(Ir.lastIndex=0,Ir.test(t))return n=KE.test(t),e[1]=mp(e[1],n),e[0]=mp(e[0],n,lg(e[1])),!0},Ca,ti=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,u,h,d,f,g=function _(m){var p=s()-i,S=m===!0,M,v,b,R;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,M=b-o,(M>0||S)&&(R=++h.frame,d=b-h.time*1e3,h.time=b=b/1e3,o+=M+(M>=r?0:r-M),v=1),S||(c=l(_)),v)for(f=0;f<a.length;f++)a[f](b,d,R,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Hm&&(!_h&&df()&&(Ii=_h=window,pf=Ii.document||{},oi.gsap=Wn,(Ii.gsapVersions||(Ii.gsapVersions=[])).push(Wn.version),Vm(jc||Ii.GreenSockGlobals||!Ii.gsap&&Ii||{}),og.forEach(ag)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Ca=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Ca=0,l=wa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,p,S){var M=p?function(v,b,R,E){m(v,b,R,E),h.remove(M)}:m;return h.remove(m),a[S?"unshift":"push"](M),Mo(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h})(),Mo=function(){return!Ca&&ti.wake()},ut={},$E=/^[\d.\-M][\d.\-,\s]/,jE=/["']/g,JE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(jE,"").trim():+l,i=c.substr(a+1).trim();return t},ZE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},QE=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[JE(t[1])]:ZE(e).split(",").map(qm)):ut._CE&&$E.test(e)?ut._CE("",e):n},eb=function(e){return function(t){return 1-e(1-t)}},us=function(e,t){return e&&(Vt(e)?e:ut[e]||QE(e))||t},Ms=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Hn(e,function(a){ut[a]=oi[a]=r,ut[o=a.toLowerCase()]=n;for(var c in r)ut[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ut[a+"."+c]=r[c]}),r},hg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},du=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/gh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*EE((u-o)*r)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:hg(a);return r=gh/r,c.config=function(l,u){return s(e,l,u)},c},pu=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:hg(n);return i.config=function(r){return s(e,r)},i};Hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ms(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Ms("Elastic",du("in"),du("out"),du());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Ms("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ms("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ms("Circ",function(s){return-(Fm(1-s*s)-1)});Ms("Sine",function(s){return s===1?1:-TE(s*ME)+1});Ms("Back",pu("in"),pu("out"),pu());ut.SteppedEase=ut.steps=oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Tt;return function(a){return((i*ka(0,o,a)|0)+r)*n}}};ba.ease=ut["quad.out"];Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return _f+=s+","+s+"Params,"});var fg=function(e,t){this.id=SE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xm,this.set=t?t.getSetter:Tf},Pa=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,yo(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Ca||ti.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,yo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Mo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(_l(this,n),!r._dp||r.parent||jm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ym(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?xo(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Qc(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(ka(-Math.abs(this._delay),a,r),i!==!1),gl(this),NE(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Mo(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Tt,o;if(r)for(this._tTime-=Tt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Tt){r=!1;break}o=o._next}this.totalTime(i,r)}return this},e.startTime=function(n){if(arguments.length){this._start=Ft(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ni(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=PE);var i=hn;return hn=n,xf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,dp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,dp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(fi(this,n),zn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,zn(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Vt(n)?n:Km,c=function(){var u=i.then;i.then=null,r&&r(),Vt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){qo(this)},s})();ai(Pa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var Fn=(function(s){Om(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=zn(n.sortChildren),Bt&&Ni(n.parent||Bt,er(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Jm(er(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return oa(0,arguments,this),this},t.from=function(i,r,o){return oa(1,arguments,this),this},t.fromTo=function(i,r,o,a){return oa(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,sa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new $t(i,r,fi(this,o),1),this},t.call=function(i,r,o){return Ni(this,$t.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,c,l,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new $t(i,o,fi(this,c)),this},t.staggerFrom=function(i,r,o,a,c,l,u){return o.runBackwards=1,sa(o).immediateRender=zn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,u)},t.staggerFromTo=function(i,r,o,a,c,l,u,h){return a.startAt=o,sa(a).immediateRender=zn(a.immediateRender),this.staggerTo(i,r,a,c,l,u,h)},t.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Ft(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,f,g,_,m,p,S,M,v,b,R,E;if(this!==Bt&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,M=this._ts,p=!M,h&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=Ft(u%m),u===c?(_=this._repeat,d=l):(b=Ft(u/m),_=~~b,_&&_===b&&(d=l,_--),d>l&&(d=l)),b=xo(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),R&&_&1&&(d=l-d,E=1),_!==b&&!this._lock){var A=R&&b&1,x=A===(R&&_&1);if(_<b&&(A=!A),a=A?0:u%l?l:u,this._lock=1,this.render(a||(E?0:Ft(_*m)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,a=A?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=BE(this,Ft(a),Ft(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&l&&!r&&!b&&(ii(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-Tt);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,r,o||hn&&xf(f)),d!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=y?-Tt:Tt);break}}f=g}}if(S&&!r&&(this.pause(),S.render(d>=a?0:-Tt)._zTime=d>=a?1:-1,this._ts))return this._start=v,gl(this),this.render(i,r,o);this._onUpdate&&!r&&ii(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Ur(this,1),!r&&!(i<0&&!a)&&(u||a||!c)&&(ii(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(lr(r)||(r=fi(this,r,i)),!(i instanceof Pa)){if(vn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(ln(i))return this.addLabel(i,r);if(Vt(i))i=$t.delayedCall(0,i);else return this}return this!==i?Ni(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-_i);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof $t?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return ln(i)?this.removeLabel(i):Vt(i)?this.killTweensOf(i):(i.parent===this&&ml(this,i),i===this._recent&&(this._recent=this._last),ls(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=fi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=$t.delayedCall(0,r||wa,o);return a.data="isPause",this._hasPause=1,Ni(this,a,fi(this,i))},t.removePause=function(i){var r=this._first;for(i=fi(this,i);r;)r._start===i&&r.data==="isPause"&&Ur(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Tr!==a[c]&&a[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=vi(i),c=this._first,l=lr(r),u;c;)c instanceof $t?IE(c._targets,a)&&(l?(!Tr||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(u=c.getTweensOf(a,r)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=fi(o,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,f,g=$t.to(o,ai({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==m&&yo(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,ai({startAt:{time:fi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),pp(this,fi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),pp(this,fi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,c=this.labels,l;for(i=Ft(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return ls(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ls(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,c=_i,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ni(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ft(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;yo(o,o===Bt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Bt._ts&&(Ym(Bt,Qc(i,Bt)),Wm=ti.frame),ti.frame>=up){up+=si.autoSleep||120;var r=Bt._first;if((!r||!r._ts)&&si.autoSleep&&ti._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ti.sleep()}}},e})(Pa);ai(Fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var tb=function(e,t,n,i,r,o,a){var c=new Vn(this._pt,e,t,0,1,_g,null,r),l=0,u=0,h,d,f,g,_,m,p,S;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ra(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),d=n.match(uu)||[];h=uu.exec(i);)g=h[0],_=i.substring(l,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Qs(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},l=uu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(zm.test(i)||p)&&(c.e=0),this._pt=c,c},yf=function(e,t,n,i,r,o,a,c,l,u){Vt(i)&&(i=i(r||0,e,o));var h=e[t],d=n!=="get"?n:Vt(h)?l?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,f=Vt(h)?l?ob:mg:Sf,g;if(ln(i)&&(~i.indexOf("random(")&&(i=Ra(i)),i.charAt(1)==="="&&(g=Qs(d,i)+(gn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Th)return!isNaN(d*i)&&i!==""?(g=new Vn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?cb:gg,0,f),l&&(g.fp=l),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&mf(t,i),tb.call(this,e,t,d,i,f,c||si.stringFilter,l))},nb=function(e,t,n,i,r){if(Vt(e)&&(e=aa(e,r,t,n,i)),!Vi(e)||e.style&&e.nodeType||vn(e)||Bm(e))return ln(e)?aa(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=aa(e[a],r,t,n,i);return o},dg=function(e,t,n,i,r,o){var a,c,l,u;if(Qn[e]&&(a=new Qn[e]).init(r,a.rawVars?t[e]:nb(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new Vn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==qs))for(l=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Tr,Th,Mf=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!hf,v=e.timeline,b=i.easeReverse||h,R,E,A,x,y,P,N,z,V,G,W,Y,H;if(v&&(!d||!r)&&(r="none"),e._ease=us(r,ba.ease),e._rEase=b&&(us(b)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(z=m[0]?cs(m[0]).harness:0,Y=z&&i[z.prop],R=Zc(i,gf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Oc:CE),_._lazy=0),o){if(Ur(e._startAt=$t.set(m,ai({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&zn(c),startAt:null,delay:0,onUpdate:l&&function(){return ii(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!a&&!f)&&e._startAt.revert(Oc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),A=ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&zn(c),immediateRender:a,stagger:0,parent:p},R),Y&&(A[z.prop]=Y),Ur(e._startAt=$t.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(Oc):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&zn(c)||c&&!g,E=0;E<m.length;E++){if(y=m[E],N=y._gsap||vf(m)[E]._gsap,e._ptLookup[E]=G={},vh[N.id]&&Pr.length&&Jc(),W=S===m?E:S.indexOf(y),z&&(V=new z).init(y,Y||R,e,W,S)!==!1&&(e._pt=x=new Vn(e._pt,y,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(ne){G[ne]=x}),V.priority&&(P=1)),!z||Y)for(A in R)Qn[A]&&(V=dg(A,R,e,W,y,S))?V.priority&&(P=1):G[A]=x=yf.call(e,y,A,"get",R[A],W,S,0,i.stringFilter);e._op&&e._op[E]&&e.kill(y,e._op[E]),M&&e._pt&&(Tr=e,Bt.killTweensOf(y,G,e.globalTime(t)),H=!e.parent,Tr=0),e._pt&&c&&(vh[N.id]=1)}P&&vg(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&v.render(_i,!0,!0)},ib=function(e,t,n,i,r,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Th=1,e.vars[t]="+=0",Mf(e,a),Th=0,c?Aa(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Xt(n)+gn(h.e)),h.b&&(h.b=u.s+gn(h.b))},rb=function(e,t){var n=e[0]?cs(e[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return t;r=vo({},t);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},sb=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(vn(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},aa=function(e,t,n,i,r){return Vt(e)?e.call(t,n,i,r):ln(e)&&~e.indexOf("random(")?Ra(e):e},tl=_f+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",pg={};Hn(tl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return pg[s]=1});tl=tl.split(",");var $t=(function(s){Om(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:sa(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=i.parent||Bt,S=(vn(n)||Bm(n)?lr(n[0]):"length"in i)?[n]:vi(n),M,v,b,R,E,A,x,y;if(a._targets=S.length?vf(S):Aa("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||gc(l)||gc(u)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(M=a.timeline=new Fn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),M.kill(),M.parent=M._dp=er(a),M._start=0,d||gc(l)||gc(u)){if(R=S.length,x=d&&tg(d),Vi(d))for(E in d)~tl.indexOf(E)&&(y||(y={}),y[E]=d[E]);for(v=0;v<R;v++)b=Zc(i,pg),b.stagger=0,P&&(b.easeReverse=P),y&&vo(b,y),A=S[v],b.duration=+aa(l,er(a),v,A,S),b.delay=(+aa(u,er(a),v,A,S)||0)-a._delay,!d&&R===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),M.to(A,b,x?x(v,A,S):0),M._ease=ut.none;M.duration()?l=u=0:a.timeline=0}else if(g){sa(ai(M.vars.defaults,{ease:"none"})),M._ease=us(g.ease||i.ease||"none");var N=0,z,V,G;if(vn(g))g.forEach(function(W){return M.to(S,W,">")}),M.duration();else{b={};for(E in g)E==="ease"||E==="easeEach"||sb(E,g[E],b,g.easeEach);for(E in b)for(z=b[E].sort(function(W,Y){return W.t-Y.t}),N=0,v=0;v<z.length;v++)V=z[v],G={ease:V.e,duration:(V.t-(v?z[v-1].t:0))/100*l},G[E]=V.v,M.to(S,G,N),N+=G.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||a.duration(l=M.duration())}else a.timeline=0;return f===!0&&!hf&&(Tr=er(a),Bt.killTweensOf(S),Tr=0),Ni(p,er(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!g&&a._start===Ft(p._time)&&zn(h)&&UE(er(a))&&p.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),m&&Jm(er(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Tt&&!u?c:i<Tt?0:i,d,f,g,_,m,p,S,M;if(!l)FE(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,M=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(d=Ft(h%_),h===c?(g=this._repeat,d=l):(m=Ft(h/_),g=~~m,g&&g===m?(d=l,g--):d>l&&(d=l)),p=this._yoyo&&g&1,p&&(d=l-d),m=xo(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Ft(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Zm(this,u?i:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._rEase){var v=d<a;if(v!==this._inv){var b=v?a:l-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(d/l);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!r&&!m&&(ii(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&xh(this,i,r,o),ii(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&ii(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&xh(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ur(this,1),!r&&!(u&&!a)&&(h||a||p)&&(ii(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,c){Ca||ti.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Mf(this,l),u=this._ease(l/this._dur),ib(this,i,r,o,a,u,l,c)?this.resetTo(i,r,o,a,1):(_l(this,0),this.parent||$m(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?qo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Tr&&Tr.vars.overwrite!==!0)._first||qo(this),this.parent&&o!==this.timeline.totalDuration()&&yo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?vi(i):a,l=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!r||r==="all")&&DE(a,c))return r==="all"&&(this._pt=0),qo(this);for(h=this._op=this._op||[],r!=="all"&&(ln(r)&&(_={},Hn(r,function(S){return _[S]=1}),r=_),r=rb(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],r==="all"?(h[p]=r,g=d,f={}):(f=h[p]=h[p]||{},g=r);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ml(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&qo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return oa(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return oa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Bt.killTweensOf(i,r,o)},e})(Pa);ai($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hn("staggerTo,staggerFrom,staggerFromTo",function(s){$t[s]=function(){var e=new Fn,t=yh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Sf=function(e,t,n){return e[t]=n},mg=function(e,t,n){return e[t](n)},ob=function(e,t,n,i){return e[t](i.fp,n)},ab=function(e,t,n){return e.setAttribute(t,n)},Tf=function(e,t){return Vt(e[t])?mg:ff(e[t])&&e.setAttribute?ab:Sf},gg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_g=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ef=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},lb=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},ub=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ml(this,t,"_pt"):t.dep||(n=1),t=i;return!n},hb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},vg=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Vn=(function(){function s(t,n,i,r,o,a,c,l,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||gg,this.d=c||this,this.set=l||Sf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=hb,this.m=n,this.mt=r,this.tween=i},s})();Hn(_f+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return gf[s]=1});oi.TweenMax=oi.TweenLite=$t;oi.TimelineLite=oi.TimelineMax=Fn;Bt=new Fn({sortChildren:!1,defaults:ba,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=ug;var hs=[],Bc={},fb=[],gp=0,db=0,mu=function(e){return(Bc[e]||fb).map(function(t){return t()})},Ia=function(){var e=Date.now(),t=[];e-gp>2&&(mu("matchMediaInit"),hs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=Ii.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),mu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),gp=e,mu("matchMedia"))},xg=(function(){function s(t,n){this.selector=n&&Mh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=db++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Vt(n)&&(r=i,i=n,n=Vt);var o=this,a=function(){var l=Dt,u=o.selector,h;return l&&l!==o&&l.data.push(o),r&&(o.selector=Mh(r)),Dt=o,h=i.apply(o,arguments),Vt(h)&&o._r.push(h),Dt=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Vt?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Fn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof $t)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=hs.length;o--;)hs[o].id===this.id&&hs.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Ia):a.removeEventListener("change",Ia)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},s})(),pb=(function(){function s(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Vi(n)||(n={matches:n});var o=new xg(0,r||this.scope),a=o.conditions={},c,l,u;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=Ii.matchMedia(n[l]),c&&(hs.indexOf(o)<0&&hs.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(Ia):c.addEventListener("change",Ia),(o._mqs||(o._mqs=[])).push(c)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),nl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ag(i)})},timeline:function(e){return new Fn(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=vi(e)[0]);var r=cs(e||{}).get,o=n?Km:qm;return n==="native"&&(n=""),e&&(t?o((Qn[t]&&Qn[t].get||r)(e,t,n,i)):function(a,c,l){return o((Qn[a]&&Qn[a].get||r)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var i=e.map(function(u){return Wn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Qn[t],a=cs(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var h=new o;qs._pt=0,h.init(e,n?u+n:u,qs,0,[e]),h.render(1,h),qs._pt&&Ef(1,qs)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Wn.to(e,ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,u){return r.resetTo(t,c,l,u)};return o.tween=r,o},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=us(e.ease,ba.ease)),hp(ba,e||{})},config:function(e){return hp(si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Qn[a]&&!oi[a]&&Aa(t+" effect requires "+a+" plugin.")}),hu[t]=function(a,c,l){return n(vi(a),ai(c||{},r),l)},o&&(Fn.prototype[t]=function(a,c,l){return this.add(hu[t](a,Vi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ut[e]=us(t)},parseEase:function(e,t){return arguments.length?us(e,t):ut},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Fn(e),i,r;for(n.smoothChildTiming=zn(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,i=Bt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&Ni(n,i,i._start-i._delay),i=r;return Ni(Bt,n,0),n},context:function(e,t){return e?new xg(e,t):Dt},matchMedia:function(e){return new pb(e)},matchMediaRefresh:function(){return hs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ia()},addEventListener:function(e,t){var n=Bc[e]||(Bc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:XE,wrapYoyo:YE,distribute:tg,random:ig,snap:ng,normalize:WE,getUnit:gn,clamp:zE,splitColor:cg,toArray:vi,selector:Mh,mapRange:sg,pipe:VE,unitize:GE,interpolate:qE,shuffle:eg},install:Vm,effects:hu,ticker:ti,updateRoot:Fn.updateRoot,plugins:Qn,globalTimeline:Bt,core:{PropTween:Vn,globals:Gm,Tween:$t,Timeline:Fn,Animation:Pa,getCache:cs,_removeLinkedListItem:ml,reverting:function(){return hn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return hf=e}}};Hn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return nl[s]=$t[s]});ti.add(Fn.updateRoot);qs=nl.to({},{duration:0});var mb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},gb=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=mb(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},gu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(ln(r)&&(c={},Hn(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}gb(a,r)}}}},Wn=nl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},gu("roundProps",Sh),gu("modifiers"),gu("snap",ng))||nl;$t.version=Fn.version=Wn.version="3.15.1";Hm=1;df()&&Mo();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;var _p,Er,eo,bf,os,vp,Af,_b=function(){return typeof window<"u"},ur={},es=180/Math.PI,to=Math.PI/180,ks=Math.atan2,xp=1e8,wf=/([A-Z])/g,vb=/(left|right|width|margin|padding|x)/i,xb=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Eh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Mb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Tb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},yg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Mg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Eb=function(e,t,n){return e.style[t]=n},bb=function(e,t,n){return e.style.setProperty(t,n)},Ab=function(e,t,n){return e._gsap[t]=n},wb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Rb=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Cb=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},kt="transform",Gn=kt+"Origin",Pb=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in ur&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=tr(i,a)}):this.tfm[e]=o.x?o[e]:tr(i,e),e===Gn&&(this.tfm.zOrigin=o.zOrigin);else return Oi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(kt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=kt}(r||t)&&this.props.push(e,t,r[e])},Sg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ib=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(wf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Af(),(!r||!r.isStart)&&!n[kt]&&(Sg(n),i.zOrigin&&n[Gn]&&(n[Gn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Tg=function(e,t){var n={target:e,props:[],revert:Ib,save:Pb};return e._gsap||Wn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Eg,bh=function(e,t){var n=Er.createElementNS?Er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Er.createElement(e);return n&&n.style?n:Er.createElement(e)},ri=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(wf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,So(t)||t,1)||""},yp="O,Moz,ms,Ms,Webkit".split(","),So=function(e,t,n){var i=t||os,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(yp[o]+e in r););return o<0?null:(o===3?"ms":o>=0?yp[o]:"")+e},Ah=function(){_b()&&window.document&&(_p=window,Er=_p.document,eo=Er.documentElement,os=bh("div")||{style:{}},bh("div"),kt=So(kt),Gn=kt+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Eg=!!So("perspective"),Af=Wn.core.reverting,bf=1)},Mp=function(e){var t=e.ownerSVGElement,n=bh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),eo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),eo.removeChild(n),r},Sp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},bg=function(e){var t,n;try{t=e.getBBox()}catch{t=Mp(e),n=1}return t&&(t.width||t.height)||n||(t=Mp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Sp(e,["x","cx","x1"])||0,y:+Sp(e,["y","cy","y1"])||0,width:0,height:0}:t},Ag=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&bg(e))},Or=function(e,t){if(t){var n=e.style,i;t in ur&&t!==Gn&&(t=kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(wf,"-$1").toLowerCase())):n.removeAttribute(t)}},br=function(e,t,n,i,r,o){var a=new Vn(e._pt,t,n,0,1,o?Mg:yg);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Tp={deg:1,rad:1,turn:1},Lb={grid:1,flex:1},Fr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=os.style,c=vb.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!r||Tp[i]||Tp[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),p=e.getCTM&&Ag(e),(f||o==="%")&&(ur[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[u],Xt(f?r/g*h:r/100*g);if(a[c?"width":"height"]=h+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Er||!_.appendChild)&&(_=Er.body),m=_._gsap,m&&f&&m.width&&c&&m.time===ti.time&&!m.uncache)return Xt(r/m.width*h);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,g=e[u],S?e.style[t]=S:Or(e,t)}else(f||o==="%")&&!Lb[ri(_,"display")]&&(a.position=ri(e,"position")),_===e&&(a.position="static"),_.appendChild(os),g=os[u],_.removeChild(os),a.position="absolute";return c&&f&&(m=cs(_),m.time=ti.time,m.width=_[u]),Xt(d?g*r/h:g&&r?h/g*r:0)},tr=function(e,t,n,i){var r;return bf||Ah(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ur[t]&&t!=="transform"?(r=Da(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:rl(ri(e,Gn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=il[t]&&il[t](e,t,n)||ri(e,t)||Xm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Fr(e,t,r,n)+n:r},Db=function(e,t,n,i){if(!n||n==="none"){var r=So(t,e,1),o=r&&ri(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=ri(e,"borderTopColor"))}var a=new Vn(this._pt,e.style,t,0,1,_g),c=0,l=0,u,h,d,f,g,_,m,p,S,M,v,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ri(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ri(e,t)||i,_?e.style[t]=_:Or(e,t)),u=[n,i],ug(u),n=u[0],i=u[1],d=n.match(Ys)||[],b=i.match(Ys)||[],b.length){for(;h=Ys.exec(i);)m=h[0],S=i.substring(c,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=d[l++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=Qs(f,m)+v),p=parseFloat(m),M=m.substr((p+"").length),c=Ys.lastIndex-M.length,M||(M=M||si.units[t]||v,c===i.length&&(i+=M,a.e+=M)),v!==M&&(f=Fr(e,t,_,M)||0),a._pt={_next:a._pt,p:S||l===1?S:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?Mg:yg;return zm.test(i)&&(a.e=0),this._pt=a,a},Ep={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Nb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ep[n]||n,t[1]=Ep[i]||i,t.join(" ")},Ub=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],ur[a]&&(c=1,a=a==="transformOrigin"?Gn:kt),Or(n,a);c&&(Or(n,kt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Da(n,1),o.uncache=1,Sg(i)))}},il={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Vn(e._pt,t,n,0,0,Ub);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},La=[1,0,0,1,0,0],wg={},Rg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bp=function(e){var t=ri(e,kt);return Rg(t)?La:t.substr(7).match(km).map(Xt)},Rf=function(e,t){var n=e._gsap||cs(e),i=e.style,r=bp(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?La:r):(r===La&&!e.offsetParent&&e!==eo&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,a=e.nextElementSibling,eo.appendChild(e)),r=bp(e),c?i.display=c:Or(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):eo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},wh=function(e,t,n,i,r,o){var a=e._gsap,c=r||Rf(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=c[0],g=c[1],_=c[2],m=c[3],p=c[4],S=c[5],M=t.split(" "),v=parseFloat(M[0])||0,b=parseFloat(M[1])||0,R,E,A,x;n?c!==La&&(E=f*m-g*_)&&(A=v*(m/E)+b*(-_/E)+(_*S-m*p)/E,x=v*(-g/E)+b*(f/E)-(f*S-g*p)/E,v=A,b=x):(R=bg(e),v=R.x+(~M[0].indexOf("%")?v/100*R.width:v),b=R.y+(~(M[1]||M[0]).indexOf("%")?b/100*R.height:b)),i||i!==!1&&a.smooth?(p=v-l,S=b-u,a.xOffset=h+(p*f+S*_)-p,a.yOffset=d+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Gn]="0px 0px",o&&(br(o,a,"xOrigin",l,v),br(o,a,"yOrigin",u,b),br(o,a,"xOffset",h,a.xOffset),br(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},Da=function(e,t){var n=e._gsap||new fg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=ri(e,Gn)||"0",u,h,d,f,g,_,m,p,S,M,v,b,R,E,A,x,y,P,N,z,V,G,W,Y,H,ne,D,ue,Oe,st,We,Ge;return u=h=d=_=m=p=S=M=v=0,f=g=1,n.svg=!!(e.getCTM&&Ag(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[kt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[kt]!=="none"?c[kt]:"")),i.scale=i.rotate=i.translate="none"),E=Rf(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),l=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),wh(e,Y||l,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,R=n.yOrigin||0,E!==La&&(P=E[0],N=E[1],z=E[2],V=E[3],u=G=E[4],h=W=E[5],E.length===6?(f=Math.sqrt(P*P+N*N),g=Math.sqrt(V*V+z*z),_=P||N?ks(N,P)*es:0,S=z||V?ks(z,V)*es+_:0,S&&(g*=Math.abs(Math.cos(S*to))),n.svg&&(u-=b-(b*P+R*z),h-=R-(b*N+R*V))):(Ge=E[6],st=E[7],D=E[8],ue=E[9],Oe=E[10],We=E[11],u=E[12],h=E[13],d=E[14],A=ks(Ge,Oe),m=A*es,A&&(x=Math.cos(-A),y=Math.sin(-A),Y=G*x+D*y,H=W*x+ue*y,ne=Ge*x+Oe*y,D=G*-y+D*x,ue=W*-y+ue*x,Oe=Ge*-y+Oe*x,We=st*-y+We*x,G=Y,W=H,Ge=ne),A=ks(-z,Oe),p=A*es,A&&(x=Math.cos(-A),y=Math.sin(-A),Y=P*x-D*y,H=N*x-ue*y,ne=z*x-Oe*y,We=V*y+We*x,P=Y,N=H,z=ne),A=ks(N,P),_=A*es,A&&(x=Math.cos(A),y=Math.sin(A),Y=P*x+N*y,H=G*x+W*y,N=N*x-P*y,W=W*x-G*y,P=Y,G=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Xt(Math.sqrt(P*P+N*N+z*z)),g=Xt(Math.sqrt(W*W+Ge*Ge)),A=ks(G,W),S=Math.abs(A)>2e-4?A*es:0,v=We?1/(We<0?-We:We):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Rg(ri(e,kt)),Y&&e.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Xt(f),n.scaleY=Xt(g),n.rotation=Xt(_)+a,n.rotationX=Xt(m)+a,n.rotationY=Xt(p)+a,n.skewX=S+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Gn]=rl(l)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?Fb:Eg?Cg:Ob,n.uncache=0,n},rl=function(e){return(e=e.split(" "))[0]+" "+e[1]},_u=function(e,t,n){var i=gn(t);return Xt(parseFloat(t)+parseFloat(Fr(e,"x",n+"px",i)))+i},Ob=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Cg(e,t)},jr="0deg",Ho="0px",Jr=") ",Cg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,M=n.zOrigin,v="",b=p==="auto"&&e&&e!==1||p===!0;if(M&&(h!==jr||u!==jr)){var R=parseFloat(u)*to,E=Math.sin(R),A=Math.cos(R),x;R=parseFloat(h)*to,x=Math.cos(R),o=_u(S,o,E*x*-M),a=_u(S,a,-Math.sin(R)*-M),c=_u(S,c,A*x*-M+M)}m!==Ho&&(v+="perspective("+m+Jr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(b||o!==Ho||a!==Ho||c!==Ho)&&(v+=c!==Ho||b?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Jr),l!==jr&&(v+="rotate("+l+Jr),u!==jr&&(v+="rotateY("+u+Jr),h!==jr&&(v+="rotateX("+h+Jr),(d!==jr||f!==jr)&&(v+="skew("+d+", "+f+Jr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Jr),S.style[kt]=v||"translate(0, 0)"},Fb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,M=parseFloat(o),v=parseFloat(a),b,R,E,A,x;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=to,l*=to,b=Math.cos(c)*h,R=Math.sin(c)*h,E=Math.sin(c-l)*-d,A=Math.cos(c-l)*d,l&&(u*=to,x=Math.tan(l-u),x=Math.sqrt(1+x*x),E*=x,A*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),b*=x,R*=x)),b=Xt(b),R=Xt(R),E=Xt(E),A=Xt(A)):(b=h,A=d,R=E=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=Fr(f,"x",o,"px"),v=Fr(f,"y",a,"px")),(g||_||m||p)&&(M=Xt(M+g-(g*b+_*E)+m),v=Xt(v+_-(g*R+_*A)+p)),(i||r)&&(x=f.getBBox(),M=Xt(M+i/100*x.width),v=Xt(v+r/100*x.height)),x="matrix("+b+","+R+","+E+","+A+","+M+","+v+")",f.setAttribute("transform",x),S&&(f.style[kt]=x)},Bb=function(e,t,n,i,r){var o=360,a=ln(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?es:1),l=c-i,u=i+l+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*xp)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*xp)%o-~~(l/o)*o)),e._pt=d=new Vn(e._pt,t,n,i,l,yb),d.e=u,d.u="deg",e._props.push(n),d},Ap=function(e,t){for(var n in t)e[n]=t[n];return e},kb=function(e,t,n){var i=Ap({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,d,f,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[kt]=t,a=Da(n,1),Or(n,kt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[kt],o[kt]=t,a=Da(n,1),o[kt]=l);for(c in ur)l=i[c],u=a[c],l!==u&&r.indexOf(c)<0&&(f=gn(l),g=gn(u),h=f!==g?Fr(n,c,l,g):parseFloat(l),d=parseFloat(u),e._pt=new Vn(e._pt,a,c,h,d-h,Eh),e._pt.u=g||0,e._props.push(c));Ap(a,i)};Hn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});il[e>1?"border"+s:s]=function(a,c,l,u,h){var d,f;if(arguments.length<4)return d=o.map(function(g){return tr(a,g,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(c,f,h)}});var Pg={name:"css",register:Ah,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,c=n.vars.startAt,l,u,h,d,f,g,_,m,p,S,M,v,b,R,E,A,x;bf||Ah(),this.styles=this.styles||Tg(e),A=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Qn[_]&&dg(_,t,n,i,e,r)))){if(f=typeof u,g=il[_],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ra(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ir.lastIndex=0,Ir.test(l)||(m=gn(l),p=gn(u),p?m!==p&&(l=Fr(e,_,l,p)+p):m&&(u+=m)),this.add(a,"setProperty",l,u,i,r,0,0,_),o.push(_),A.push(_,0,a[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,r):c[_],ln(l)&&~l.indexOf("random(")&&(l=Ra(l)),gn(l+"")||l==="auto"||(l+=si.units[_]||gn(tr(e,_))||""),(l+"").charAt(1)==="="&&(l=tr(e,_))):l=tr(e,_),d=parseFloat(l),S=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in Oi&&(_==="autoAlpha"&&(d===1&&tr(e,"visibility")==="hidden"&&h&&(d=0),A.push("visibility",0,a.visibility),br(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Oi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in ur,M){if(this.styles.save(_),x=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=ri(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=ri(e,"perspective"),y?e.style.perspective=y:Or(e,"perspective")}h=parseFloat(u)}if(v||(b=e._gsap,b.renderTransform&&!t.parseTransform||Da(e,t.parseTransform),R=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new Vn(this._pt,a,kt,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new Vn(this._pt,b,"scaleY",b.scaleY,(S?Qs(b.scaleY,S+h):h)-b.scaleY||0,Eh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(Gn,0,a[Gn]),u=Nb(u),b.svg?wh(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&br(this,b,"zOrigin",b.zOrigin,p),br(this,a,_,rl(l),rl(u)));continue}else if(_==="svgOrigin"){wh(e,u,1,R,0,this);continue}else if(_ in wg){Bb(this,b,_,d,S?Qs(d,S+u):u);continue}else if(_==="smoothOrigin"){br(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){kb(this,u,e);continue}}else _ in a||(_=So(_)||_);if(M||(h||h===0)&&(d||d===0)&&!xb.test(u)&&_ in a)m=(l+"").substr((d+"").length),h||(h=0),p=gn(u)||(_ in si.units?si.units[_]:m),m!==p&&(d=Fr(e,_,l,p)),this._pt=new Vn(this._pt,M?b:a,_,d,(S?Qs(d,S+h):h)-d,!M&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Tb:Eh),this._pt.u=p||0,M&&x!==u?(this._pt.b=l,this._pt.e=x,this._pt.r=Sb):m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=Mb);else if(_ in a)Db.call(this,e,_,l,S?S+u:u);else if(_ in e)this.add(e,_,l||e[_],S?S+u:u,i,r);else if(_!=="parseTransform"){mf(_,u);continue}M||(_ in a?A.push(_,0,a[_]):typeof e[_]=="function"?A.push(_,2,e[_]()):A.push(_,1,l||e[_])),o.push(_)}}E&&vg(this)},render:function(e,t){if(t.tween._time||!Af())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:tr,aliases:Oi,getSetter:function(e,t,n){var i=Oi[t];return i&&i.indexOf(",")<0&&(t=i),t in ur&&t!==Gn&&(e._gsap.x||tr(e,"x"))?n&&vp===n?t==="scale"?wb:Ab:(vp=n||{})&&(t==="scale"?Rb:Cb):e.style&&!ff(e.style[t])?Eb:~t.indexOf("-")?bb:Tf(e,t)},core:{_removeProperty:Or,_getMatrix:Rf}};Wn.utils.checkPrefix=So;Wn.core.getStyleSaver=Tg;(function(s,e,t,n){var i=Hn(s+","+e+","+t,function(r){ur[r]=1});Hn(e,function(r){si.units[r]="deg",wg[r]=1}),Oi[i[13]]=s+","+e,Hn(n,function(r){var o=r.split(":");Oi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){si.units[s]="px"});Wn.registerPlugin(Pg);var no=Wn.registerPlugin(Pg)||Wn;no.core.Tween;function zb(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Hb(s,e,t){return e&&zb(s.prototype,e),s}var un,kc,Bn,Ar,wr,io,Ig,ts,ro,Lg,sr,Ti,Dg,Ng=function(){return un||typeof window<"u"&&(un=window.gsap)&&un.registerPlugin&&un},Ug=1,Ks=[],it=[],ki=[],ca=Date.now,Rh=function(e,t){return t},Vb=function(){var e=ro.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,ki),it=n,ki=i,Rh=function(o,a){return t[o](a)}},Lr=function(e,t){return~ki.indexOf(e)&&ki[ki.indexOf(e)+1][t]},la=function(e){return!!~Lg.indexOf(e)},Tn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},_c="scrollLeft",vc="scrollTop",Ch=function(){return sr&&sr.isPressed||it.cache++},sl=function(e,t){var n=function i(r){if(r||r===0){Ug&&Bn.history.scrollRestoration!=="manual"&&(Bn.history.scrollRestoration="manual");var o=sr&&sr.isPressed;r=i.v=Math.round(r)||(sr&&sr.iOS?1:0),e(r),i.cacheID=it.cache,o&&Rh("ss",r)}else(t||it.cache!==i.cacheID||Rh("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Cn={s:_c,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sl(function(s){return arguments.length?Bn.scrollTo(s,Zt.sc()):Bn.pageXOffset||Ar[_c]||wr[_c]||io[_c]||0})},Zt={s:vc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Cn,sc:sl(function(s){return arguments.length?Bn.scrollTo(Cn.sc(),s):Bn.pageYOffset||Ar[vc]||wr[vc]||io[vc]||0})},Un=function(e,t){return(t&&t._ctx&&t._ctx.selector||un.utils.toArray)(e)[0]||(typeof e=="string"&&un.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Gb=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Br=function(e,t){var n=t.s,i=t.sc;la(e)&&(e=Ar.scrollingElement||wr);var r=it.indexOf(e),o=i===Zt.sc?1:2;!~r&&(r=it.push(e)-1),it[r+o]||Tn(e,"scroll",Ch);var a=it[r+o],c=a||(it[r+o]=sl(Lr(e,n),!0)||(la(e)?i:sl(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=un.getProperty(e,"scrollBehavior")==="smooth"),c},Ph=function(e,t,n){var i=e,r=e,o=ca(),a=o,c=t||50,l=Math.max(500,c*3),u=function(g,_){var m=ca();_||m-o>c?(r=i,i=g,a=o,o=m):n?i+=g:i=r+(g-r)/(m-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},d=function(g){var _=a,m=r,p=ca();return(g||g===0)&&g!==i&&u(g),o===a||p-a>l?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},Vo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},wp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Og=function(){ro=un.core.globals().ScrollTrigger,ro&&ro.core&&Vb()},Fg=function(e){return un=e||Ng(),!kc&&un&&typeof document<"u"&&document.body&&(Bn=window,Ar=document,wr=Ar.documentElement,io=Ar.body,Lg=[Bn,Ar,wr,io],un.utils.clamp,Dg=un.core.context||function(){},ts="onpointerenter"in io?"pointer":"mouse",Ig=Yt.isTouch=Bn.matchMedia&&Bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ti=Yt.eventTypes=("ontouchstart"in wr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in wr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ug=0},500),kc=1),ro||Og(),kc};Cn.op=Zt;it.cache=0;var Yt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){kc||Fg(un)||console.warn("Please gsap.registerPlugin(Observer)"),ro||Og();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,M=n.onPress,v=n.onRelease,b=n.onRight,R=n.onLeft,E=n.onUp,A=n.onDown,x=n.onChangeX,y=n.onChangeY,P=n.onChange,N=n.onToggleX,z=n.onToggleY,V=n.onHover,G=n.onHoverEnd,W=n.onMove,Y=n.ignoreCheck,H=n.isNormalizer,ne=n.onGestureStart,D=n.onGestureEnd,ue=n.onWheel,Oe=n.onEnable,st=n.onDisable,We=n.onClick,Ge=n.scrollSpeed,$=n.capture,J=n.allowClicks,fe=n.lockAxis,Ae=n.onLockAxis;this.target=a=Un(a)||wr,this.vars=n,f&&(f=un.utils.toArray(f)),i=i||1e-9,r=r||0,g=g||1,Ge=Ge||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Bn.getComputedStyle(io).lineHeight)||22);var Te,Be,ft,I,Xe,Le,we,O=this,ot=0,_e=0,He=n.passive||!u&&n.passive!==!1,$e=Br(a,Cn),mt=Br(a,Zt),C=$e(),T=mt(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ti[0]==="pointerdown",j=la(a),Z=a.ownerDocument||Ar,K=[0,0,0],ve=[0,0,0],se=0,Ee=function(){return se=ca()},he=function(Re,Ke){return(O.event=Re)&&f&&Gb(Re.target,f)||Ke&&k&&Re.pointerType!=="touch"||Y&&Y(Re,Ke)},re=function(){O._vx.reset(),O._vy.reset(),Be.pause(),h&&h(O)},le=function(){var Re=O.deltaX=wp(K),Ke=O.deltaY=wp(ve),de=Math.abs(Re)>=i,ke=Math.abs(Ke)>=i;P&&(de||ke)&&P(O,Re,Ke,K,ve),de&&(b&&O.deltaX>0&&b(O),R&&O.deltaX<0&&R(O),x&&x(O),N&&O.deltaX<0!=ot<0&&N(O),ot=O.deltaX,K[0]=K[1]=K[2]=0),ke&&(A&&O.deltaY>0&&A(O),E&&O.deltaY<0&&E(O),y&&y(O),z&&O.deltaY<0!=_e<0&&z(O),_e=O.deltaY,ve[0]=ve[1]=ve[2]=0),(I||ft)&&(W&&W(O),ft&&(m&&ft===1&&m(O),S&&S(O),ft=0),I=!1),Le&&!(Le=!1)&&Ae&&Ae(O),Xe&&(ue(O),Xe=!1),Te=0},Ne=function(Re,Ke,de){K[de]+=Re,ve[de]+=Ke,O._vx.update(Re),O._vy.update(Ke),l?Te||(Te=requestAnimationFrame(le)):le()},be=function(Re,Ke){fe&&!we&&(O.axis=we=Math.abs(Re)>Math.abs(Ke)?"x":"y",Le=!0),we!=="y"&&(K[2]+=Re,O._vx.update(Re,!0)),we!=="x"&&(ve[2]+=Ke,O._vy.update(Ke,!0)),l?Te||(Te=requestAnimationFrame(le)):le()},ce=function(Re){if(!he(Re,1)){Re=Vo(Re,u);var Ke=Re.clientX,de=Re.clientY,ke=Ke-O.x,De=de-O.y,Ye=O.isDragging;O.x=Ke,O.y=de,(Ye||(ke||De)&&(Math.abs(O.startX-Ke)>=r||Math.abs(O.startY-de)>=r))&&(ft||(ft=Ye?2:1),Ye||(O.isDragging=!0),be(ke,De))}},Ve=O.onPress=function(ge){he(ge,1)||ge&&ge.button||(O.axis=we=null,Be.pause(),O.isPressed=!0,ge=Vo(ge),ot=_e=0,O.startX=O.x=ge.clientX,O.startY=O.y=ge.clientY,O._vx.reset(),O._vy.reset(),Tn(H?a:Z,Ti[1],ce,He,!0),O.deltaX=O.deltaY=0,M&&M(O))},U=O.onRelease=function(ge){if(!he(ge,1)){Sn(H?a:Z,Ti[1],ce,!0);var Re=!isNaN(O.y-O.startY),Ke=O.isDragging,de=Ke&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),ke=Vo(ge);!de&&Re&&(O._vx.reset(),O._vy.reset(),u&&J&&un.delayedCall(.08,function(){if(ca()-se>300&&!ge.defaultPrevented){if(ge.target.click)ge.target.click();else if(Z.createEvent){var De=Z.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,Bn,1,ke.screenX,ke.screenY,ke.clientX,ke.clientY,!1,!1,!1,!1,0,null),ge.target.dispatchEvent(De)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,h&&Ke&&!H&&Be.restart(!0),ft&&le(),p&&Ke&&p(O),v&&v(O,de)}},ie=function(Re){return Re.touches&&Re.touches.length>1&&(O.isGesturing=!0)&&ne(Re,O.isDragging)},oe=function(){return(O.isGesturing=!1)||D(O)},pe=function(Re){if(!he(Re)){var Ke=$e(),de=mt();Ne((Ke-C)*Ge,(de-T)*Ge,1),C=Ke,T=de,h&&Be.restart(!0)}},te=function(Re){if(!he(Re)){Re=Vo(Re,u),ue&&(Xe=!0);var Ke=(Re.deltaMode===1?c:Re.deltaMode===2?Bn.innerHeight:1)*g;Ne(Re.deltaX*Ke,Re.deltaY*Ke,0),h&&!H&&Be.restart(!0)}},Q=function(Re){if(!he(Re)){var Ke=Re.clientX,de=Re.clientY,ke=Ke-O.x,De=de-O.y;O.x=Ke,O.y=de,I=!0,h&&Be.restart(!0),(ke||De)&&be(ke,De)}},ye=function(Re){O.event=Re,V(O)},Fe=function(Re){O.event=Re,G(O)},dt=function(Re){return he(Re)||Vo(Re,u)&&We(O)};Be=O._dc=un.delayedCall(d||.25,re).pause(),O.deltaX=O.deltaY=0,O._vx=Ph(0,50,!0),O._vy=Ph(0,50,!0),O.scrollX=$e,O.scrollY=mt,O.isDragging=O.isGesturing=O.isPressed=!1,Dg(this),O.enable=function(ge){return O.isEnabled||(Tn(j?Z:a,"scroll",Ch),o.indexOf("scroll")>=0&&Tn(j?Z:a,"scroll",pe,He,$),o.indexOf("wheel")>=0&&Tn(a,"wheel",te,He,$),(o.indexOf("touch")>=0&&Ig||o.indexOf("pointer")>=0)&&(Tn(a,Ti[0],Ve,He,$),Tn(Z,Ti[2],U),Tn(Z,Ti[3],U),J&&Tn(a,"click",Ee,!0,!0),We&&Tn(a,"click",dt),ne&&Tn(Z,"gesturestart",ie),D&&Tn(Z,"gestureend",oe),V&&Tn(a,ts+"enter",ye),G&&Tn(a,ts+"leave",Fe),W&&Tn(a,ts+"move",Q)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=I=ft=!1,O._vx.reset(),O._vy.reset(),C=$e(),T=mt(),ge&&ge.type&&Ve(ge),Oe&&Oe(O)),O},O.disable=function(){O.isEnabled&&(Ks.filter(function(ge){return ge!==O&&la(ge.target)}).length||Sn(j?Z:a,"scroll",Ch),O.isPressed&&(O._vx.reset(),O._vy.reset(),Sn(H?a:Z,Ti[1],ce,!0)),Sn(j?Z:a,"scroll",pe,$),Sn(a,"wheel",te,$),Sn(a,Ti[0],Ve,$),Sn(Z,Ti[2],U),Sn(Z,Ti[3],U),Sn(a,"click",Ee,!0),Sn(a,"click",dt),Sn(Z,"gesturestart",ie),Sn(Z,"gestureend",oe),Sn(a,ts+"enter",ye),Sn(a,ts+"leave",Fe),Sn(a,ts+"move",Q),O.isEnabled=O.isPressed=O.isDragging=!1,st&&st(O))},O.kill=O.revert=function(){O.disable();var ge=Ks.indexOf(O);ge>=0&&Ks.splice(ge,1),sr===O&&(sr=0)},Ks.push(O),H&&la(a)&&(sr=O),O.enable(_)},Hb(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Yt.version="3.15.1";Yt.create=function(s){return new Yt(s)};Yt.register=Fg;Yt.getAll=function(){return Ks.slice()};Yt.getById=function(s){return Ks.filter(function(e){return e.vars.id===s})[0]};Ng()&&un.registerPlugin(Yt);var Se,Gs,nt,xt,ei,_t,Cf,ol,Na,ua,$o,xc,pn,vl,Ih,An,Rp,Cp,Ws,Bg,vu,kg,bn,Lh,zg,Hg,yr,Dh,Pf,so,If,Dr,Nh,xu,yc=1,mn=Date.now,yu=mn(),xi=0,jo=0,Pp=function(e,t,n){var i=Zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ip=function(e,t){return t&&(!Zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Wb=function s(){return jo&&requestAnimationFrame(s)},Lp=function(){return vl=1},Dp=function(){return vl=0},Li=function(e){return e},Jo=function(e){return Math.round(e*1e5)/1e5||0},Vg=function(){return typeof window<"u"},Gg=function(){return Se||Vg()&&(Se=window.gsap)&&Se.registerPlugin&&Se},vs=function(e){return!!~Cf.indexOf(e)},Wg=function(e){return(e==="Height"?If:nt["inner"+e])||ei["client"+e]||_t["client"+e]},Xg=function(e){return Lr(e,"getBoundingClientRect")||(vs(e)?function(){return Wc.width=nt.innerWidth,Wc.height=If,Wc}:function(){return nr(e)})},Xb=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Lr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Wg(r):e["client"+r])||0}},Yb=function(e,t){return!t||~ki.indexOf(e)?Xg(e):function(){return Wc}},Fi=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Lr(e,n))?o()-Xg(e)()[r]:vs(e)?(ei[n]||_t[n])-Wg(i):e[n]-e["offset"+i])},Mc=function(e,t){for(var n=0;n<Ws.length;n+=3)(!t||~t.indexOf(Ws[n+1]))&&e(Ws[n],Ws[n+1],Ws[n+2])},Zn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},Zo=function(e){return typeof e=="number"},ns=function(e){return typeof e=="object"},Go=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},zs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Hs=Math.abs,Yg="left",qg="top",Lf="right",Df="bottom",fs="width",ds="height",ha="Right",fa="Left",da="Top",pa="Bottom",Kt="padding",pi="margin",To="Width",Nf="Height",Jt="px",mi=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},qb=function(e){var t=mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Np=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nr=function(e,t){var n=t&&mi(e)[Ih]!=="matrix(1, 0, 0, 1, 0, 0)"&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},al=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Kg=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Kb=function(e){return function(t){return Se.utils.snap(Kg(e),t)}},Uf=function(e){var t=Se.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},$b=function(e){return function(t,n){return Uf(Kg(e))(t,n.direction)}},Sc=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},on=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Tc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Up={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ec={toggleActions:"play",anticipatePin:0},cl={top:0,left:0,center:.5,bottom:1,right:1},zc=function(e,t){if(Zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in cl?cl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},bc=function(e,t,n,i,r,o,a,c){var l=r.startColor,u=r.endColor,h=r.fontSize,d=r.indent,f=r.fontWeight,g=xt.createElement("div"),_=vs(n)||Lr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?_t:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,M=S?l:u,v="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||c)&&_?"fixed;":"absolute;"),(m||c||!_)&&(v+=(i===Zt?Lf:Df)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Hc(g,0,i,S),g},Hc=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+To]=1,r["border"+a+To]=0,r[n.p]=t+"px",Se.set(e,r)},tt=[],Uh={},Ua,Op=function(){return mn()-xi>34&&(Ua||(Ua=requestAnimationFrame(ar)))},Vs=function(){(!bn||!bn.isPressed||bn.startX>_t.clientWidth)&&(it.cache++,bn?Ua||(Ua=requestAnimationFrame(ar)):ar(),xi||ys("scrollStart"),xi=mn())},Mu=function(){Hg=nt.innerWidth,zg=nt.innerHeight},Qo=function(e){it.cache++,(e===!0||!pn&&!kg&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!Lh||Hg!==nt.innerWidth||Math.abs(nt.innerHeight-zg)>nt.innerHeight*.25))&&ol.restart(!0)},xs={},jb=[],$g=function s(){return sn(at,"scrollEnd",s)||as(!0)},ys=function(e){return xs[e]&&xs[e].map(function(t){return t()})||jb},Jn=[],jg=function(e){for(var t=0;t<Jn.length;t+=5)(!e||Jn[t+4]&&Jn[t+4].query===e)&&(Jn[t].style.cssText=Jn[t+1],Jn[t].getBBox&&Jn[t].setAttribute("transform",Jn[t+2]||""),Jn[t+3].uncache=1)},Jg=function(){it.cache++,it.forEach(function(e){return _n(e)&&(e.rec=e())})},Of=function(e,t){var n;for(An=0;An<tt.length;An++)n=tt[An],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Dr=!0,t&&jg(t),t||ys("revert")},Zg=function(e,t){it.cache++,(t||!wn)&&it.forEach(function(n){return _n(n)&&n.cacheID++&&(n.rec=0)}),Zn(e)&&(Pf=e,nt.history.scrollRestoration!==e&&(nt.history.scrollRestoration=e))},wn,ps=0,Fp,Jb=function(){if(Fp!==ps){var e=Fp=ps;requestAnimationFrame(function(){return e===ps&&as(!0)})}},Qg=function(){_t.appendChild(so),If=!bn&&so.offsetHeight||nt.innerHeight,_t.removeChild(so)},Bp=function(e){return Na(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},as=function(e,t){if(ei=xt.documentElement,_t=xt.body,Cf=[nt,xt,ei,_t],xi&&!e&&!Dr){on(at,"scrollEnd",$g);return}Qg(),wn=at.isRefreshing=!0,Dr||Jg();var n=ys("refreshInit");Bg&&at.sort(),t||Of(),it.forEach(function(i){_n(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),Dr=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Nh=1,Bp(!0),tt.forEach(function(i){var r=Fi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Bp(!1),Nh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){_n(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Zg(Pf,1),ol.pause(),ps++,wn=2,ar(2),tt.forEach(function(i){return _n(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=at.isRefreshing=!1,ys("refresh")},Oh=0,Vc=1,ma,ar=function(e){if(e===2||!wn&&!Dr){at.isUpdating=!0,ma&&ma.update(0);var t=tt.length,n=mn(),i=n-yu>=50,r=t&&tt[0].scroll();if(Vc=Oh>r?-1:1,wn||(Oh=r),i&&(xi&&!vl&&n-xi>200&&(xi=0,ys("scrollEnd")),$o=yu,yu=n),Vc<0){for(An=t;An-- >0;)tt[An]&&tt[An].update(0,i);Vc=1}else for(An=0;An<t;An++)tt[An]&&tt[An].update(0,i);at.isUpdating=!1}Ua=0},Fh=[Yg,qg,Df,Lf,pi+pa,pi+ha,pi+da,pi+fa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gc=Fh.concat([fs,ds,"boxSizing","max"+To,"max"+Nf,"position",pi,Kt,Kt+da,Kt+ha,Kt+pa,Kt+fa]),Zb=function(e,t,n){oo(n);var i=e._gsap;if(i.spacerIsNative)oo(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Su=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Fh.length,o=t.style,a=e.style,c;r--;)c=Fh[r],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Df]=a[Lf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[fs]=al(e,Cn)+Jt,o[ds]=al(e,Zt)+Jt,o[Kt]=a[pi]=a[qg]=a[Yg]="0",oo(i),a[fs]=a["max"+To]=n[fs],a[ds]=a["max"+Nf]=n[ds],a[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Qb=/([A-Z])/g,oo=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Qb,"-$1").toLowerCase())}},Ac=function(e){for(var t=Gc.length,n=e.style,i=[],r=0;r<t;r++)i.push(Gc[r],n[Gc[r]]);return i.t=e,i},eA=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Wc={left:0,top:0},kp=function(e,t,n,i,r,o,a,c,l,u,h,d,f,g){_n(e)&&(e=e(c)),Zn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?zc("0"+e.substr(3),n):0));var _=f?f.time():0,m,p,S;if(f&&f.seek(0),isNaN(e)||(e=+e),Zo(e))f&&(e=Se.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Hc(a,n,i,!0);else{_n(t)&&(t=t(c));var M=(e||"0").split(" "),v,b,R,E;S=Un(t,c)||_t,v=nr(S)||{},(!v||!v.left&&!v.top)&&mi(S).display==="none"&&(E=S.style.display,S.style.display="block",v=nr(S),E?S.style.display=E:S.style.removeProperty("display")),b=zc(M[0],v[i.d]),R=zc(M[1]||"0",n),e=v[i.p]-l[i.p]-u+b+r-R,a&&Hc(a,R,i,n-R<20||a._isStart&&R>20),n-=n-R}if(g&&(c[g]=e||-.001,e<0&&(e=0)),o){var A=e+n,x=o._isStart;m="scroll"+i.d2,Hc(o,A,i,x&&A>20||!x&&(h?Math.max(_t[m],ei[m]):o.parentNode[m])<=A+1),h&&(l=nr(a),h&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+Jt))}return f&&S&&(m=nr(S),f.seek(d),p=nr(S),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},tA=/(webkit|moz|length|cssText|inset)/i,zp=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===_t){e._stOrig=r.cssText,a=mi(e);for(o in a)!+o&&!tA.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}},e_=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},wc=function(e,t,n){var i={};i[t.p]="+="+n,Se.set(e,i)},Hp=function(e,t){var n=Br(e,t),i="_scroll"+t.p2,r=function o(a,c,l,u,h){var d=o.tween,f=c.onComplete,g={};l=l||n();var _=e_(n,l,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-l,d&&d.kill(),c[i]=a,c.inherit=!1,c.modifiers=g,g[i]=function(){return _(l+u*d.ratio+h*d.ratio*d.ratio)},c.onUpdate=function(){it.cache++,o.tween&&ar()},c.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Se.to(e,c),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},on(e,"wheel",n.wheelHandler),at.isTouch&&on(e,"touchmove",n.wheelHandler),r},at=(function(){function s(t,n){Gs||s.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dh(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!jo){this.update=this.refresh=this.kill=Li;return}n=Np(Zn(n)||Zo(n)||n.nodeType?{trigger:n}:n,Ec);var r=n,o=r.onUpdate,a=r.toggleClass,c=r.id,l=r.onToggle,u=r.onRefresh,h=r.scrub,d=r.trigger,f=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,S=r.onSnapComplete,M=r.once,v=r.snap,b=r.pinReparent,R=r.pinSpacer,E=r.containerAnimation,A=r.fastScrollEnd,x=r.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Cn:Zt,P=!h&&h!==0,N=Un(n.scroller||nt),z=Se.core.getCache(N),V=vs(N),G=("pinType"in n?n.pinType:Lr(N,"pinType")||V&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:Ec.markers,ne=V?0:parseFloat(mi(N)["border"+y.p2+To])||0,D=this,ue=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Oe=Xb(N,V,y),st=Yb(N,V),We=0,Ge=0,$=0,J=Br(N,y),fe,Ae,Te,Be,ft,I,Xe,Le,we,O,ot,_e,He,$e,mt,C,T,k,j,Z,K,ve,se,Ee,he,re,le,Ne,be,ce,Ve,U,ie,oe,pe,te,Q,ye,Fe;if(D._startClamp=D._endClamp=!1,D._dir=y,m*=45,D.scroller=N,D.scroll=E?E.time.bind(E):J,Be=J(),Dr&&J.rec==null&&(J.rec=Be),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(Bg=1,n.refreshPriority===-9999&&(ma=D)),z.tweenScroll=z.tweenScroll||{top:Hp(N,Zt),left:Hp(N,Cn)},D.tweenTo=fe=z.tweenScroll[y.p],D.scrubDuration=function(de){ie=Zo(de)&&de,ie?U?U.duration(de):U=Se.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return p&&p(D)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),ce=0,c||(c=i.vars.id)),v&&((!ns(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in _t.style&&Se.set(V?[_t,ei]:N,{scrollBehavior:"auto"}),it.forEach(function(de){return _n(de)&&de.target===(V?xt.scrollingElement||ei:N)&&(de.smooth=!1)}),Te=_n(v.snapTo)?v.snapTo:v.snapTo==="labels"?Kb(i):v.snapTo==="labelsDirectional"?$b(i):v.directional!==!1?function(de,ke){return Uf(v.snapTo)(de,mn()-Ge<500?0:ke.direction)}:Se.utils.snap(v.snapTo),oe=v.duration||{min:.1,max:2},oe=ns(oe)?ua(oe.min,oe.max):ua(oe,oe),pe=Se.delayedCall(v.delay||ie/2||.1,function(){var de=J(),ke=mn()-Ge<500,De=fe.tween;if((ke||Math.abs(D.getVelocity())<10)&&!De&&!vl&&We!==de){var Ye=(de-I)/$e,Gt=i&&!P?i.totalProgress():Ye,Qe=ke?0:(Gt-Ve)/(mn()-$o)*1e3||0,It=Se.utils.clamp(-Ye,1-Ye,Hs(Qe/2)*Qe/.185),Wt=Ye+(v.inertia===!1?0:It),wt,Et,vt=v,Xn=vt.onStart,Rt=vt.onInterrupt,xn=vt.onComplete;if(wt=Te(Wt,D),Zo(wt)||(wt=Wt),Et=Math.max(0,Math.round(I+wt*$e)),de<=Xe&&de>=I&&Et!==de){if(De&&!De._initted&&De.data<=Hs(Et-de))return;v.inertia===!1&&(It=wt-Ye),fe(Et,{duration:oe(Hs(Math.max(Hs(Wt-Gt),Hs(wt-Gt))*.185/Qe/.05||0)),ease:v.ease||"power3",data:Hs(Et-de),onInterrupt:function(){return pe.restart(!0)&&Rt&&zs(D,Rt)},onComplete:function(){D.update(),We=J(),i&&!P&&(U?U.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),ce=Ve=i&&!P?i.totalProgress():D.progress,S&&S(D),xn&&zs(D,xn)}},de,It*$e,Et-de-It*$e),Xn&&zs(D,Xn,fe.tween)}}else D.isActive&&We!==de&&pe.restart(!0)}).pause()),c&&(Uh[c]=D),d=D.trigger=Un(d||f!==!0&&f),Fe=d&&d._gsap&&d._gsap.stRevert,Fe&&(Fe=Fe(D)),f=f===!0?d:Un(f),Zn(a)&&(a={targets:d,className:a}),f&&(g===!1||g===pi||(g=!g&&f.parentNode&&f.parentNode.style&&mi(f.parentNode).display==="flex"?!1:Kt),D.pin=f,Ae=Se.core.getCache(f),Ae.spacer?mt=Ae.pinState:(R&&(R=Un(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Ae.spacerIsNative=!!R,R&&(Ae.spacerState=Ac(R))),Ae.spacer=k=R||xt.createElement("div"),k.classList.add("pin-spacer"),c&&k.classList.add("pin-spacer-"+c),Ae.pinState=mt=Ac(f)),n.force3D!==!1&&Se.set(f,{force3D:!0}),D.spacer=k=Ae.spacer,be=mi(f),Ee=be[g+y.os2],Z=Se.getProperty(f),K=Se.quickSetter(f,y.a,Jt),Su(f,k,be),T=Ac(f)),H){_e=ns(H)?Np(H,Up):Up,O=bc("scroller-start",c,N,y,_e,0),ot=bc("scroller-end",c,N,y,_e,0,O),j=O["offset"+y.op.d2];var dt=Un(Lr(N,"content")||N);Le=this.markerStart=bc("start",c,dt,y,_e,j,0,E),we=this.markerEnd=bc("end",c,dt,y,_e,j,0,E),E&&(ye=Se.quickSetter([Le,we],y.a,Jt)),!G&&!(ki.length&&Lr(N,"fixedMarkers")===!0)&&(qb(V?_t:N),Se.set([O,ot],{force3D:!0}),re=Se.quickSetter(O,y.a,Jt),Ne=Se.quickSetter(ot,y.a,Jt))}if(E){var ge=E.vars.onUpdate,Re=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),ge&&ge.apply(E,Re||[])})}if(D.previous=function(){return tt[tt.indexOf(D)-1]},D.next=function(){return tt[tt.indexOf(D)+1]},D.revert=function(de,ke){if(!ke)return D.kill(!0);var De=de!==!1||!D.enabled,Ye=pn;De!==D.isReverted&&(De&&(te=Math.max(J(),D.scroll.rec||0),$=D.progress,Q=i&&i.progress()),Le&&[Le,we,O,ot].forEach(function(Gt){return Gt.style.display=De?"none":"block"}),De&&(pn=D,D.update(De)),f&&(!b||!D.isActive)&&(De?Zb(f,k,mt):Su(f,k,mi(f),he)),De||D.update(De),pn=Ye,D.isReverted=De)},D.refresh=function(de,ke,De,Ye){if(!((pn||!D.enabled)&&!ke)){if(f&&de&&xi){on(s,"scrollEnd",$g);return}!wn&&ue&&ue(D),pn=D,fe.tween&&!De&&(fe.tween.kill(),fe.tween=0),U&&U.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ct){return ct.vars.immediateRender&&ct.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Gt=Oe(),Qe=st(),It=E?E.duration():Fi(N,y),Wt=$e<=.01||!$e,wt=0,Et=Ye||0,vt=ns(De)?De.end:n.end,Xn=n.endTrigger||d,Rt=ns(De)?De.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),xn=D.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,D),ci=d&&Math.max(0,tt.indexOf(D))||0,jt=ci,w,F,X,q,B,ee,ae,Me,xe,Ue,Pe,Ce,je;for(H&&ns(De)&&(Ce=Se.getProperty(O,y.p),je=Se.getProperty(ot,y.p));jt-- >0;)ee=tt[jt],ee.end||ee.refresh(0,1)||(pn=D),ae=ee.pin,ae&&(ae===d||ae===f||ae===xn)&&!ee.isReverted&&(Ue||(Ue=[]),Ue.unshift(ee),ee.revert(!0,!0)),ee!==tt[jt]&&(ci--,jt--);for(_n(Rt)&&(Rt=Rt(D)),Rt=Pp(Rt,"start",D),I=kp(Rt,d,Gt,y,J(),Le,O,D,Qe,ne,G,It,E,D._startClamp&&"_startClamp")||(f?-.001:0),_n(vt)&&(vt=vt(D)),Zn(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(Zn(Rt)?Rt.split(" ")[0]:"")+vt:(wt=zc(vt.substr(2),Gt),vt=Zn(Rt)?Rt:(E?Se.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,I):I)+wt,Xn=d)),vt=Pp(vt,"end",D),Xe=Math.max(I,kp(vt||(Xn?"100% 0":It),Xn,Gt,y,J()+wt,we,ot,D,Qe,ne,G,It,E,D._endClamp&&"_endClamp"))||-.001,wt=0,jt=ci;jt--;)ee=tt[jt]||{},ae=ee.pin,ae&&ee.start-ee._pinPush<=I&&!E&&ee.end>0&&(w=ee.end-(D._startClamp?Math.max(0,ee.start):ee.start),(ae===d&&ee.start-ee._pinPush<I||ae===xn)&&isNaN(Rt)&&(wt+=w*(1-ee.progress)),ae===f&&(Et+=w));if(I+=wt,Xe+=wt,D._startClamp&&(D._startClamp+=wt),D._endClamp&&!wn&&(D._endClamp=Xe||-.001,Xe=Math.min(Xe,Fi(N,y))),$e=Xe-I||(I-=.01)&&.001,Wt&&($=Se.utils.clamp(0,1,Se.utils.normalize(I,Xe,te))),D._pinPush=Et,Le&&wt&&(w={},w[y.a]="+="+wt,xn&&(w[y.p]="-="+J()),Se.set([Le,we],w)),f&&!(Nh&&D.end>=Fi(N,y)))w=mi(f),q=y===Zt,X=J(),ve=parseFloat(Z(y.a))+Et,!It&&Xe>1&&(Pe=(V?xt.scrollingElement||ei:N).style,Pe={style:Pe,value:Pe["overflow"+y.a.toUpperCase()]},V&&mi(_t)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Pe.style["overflow"+y.a.toUpperCase()]="scroll")),Su(f,k,w),T=Ac(f),F=nr(f,!0),Me=G&&Br(N,q?Cn:Zt)(),g?(he=[g+y.os2,$e+Et+Jt],he.t=k,jt=g===Kt?al(f,y)+$e+Et:0,jt&&(he.push(y.d,jt+Jt),k.style.flexBasis!=="auto"&&(k.style.flexBasis=jt+Jt)),oo(he),xn&&tt.forEach(function(ct){ct.pin===xn&&ct.vars.pinSpacing!==!1&&(ct._subPinOffset=!0)}),G&&J(te)):(jt=al(f,y),jt&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=jt+Jt)),G&&(B={top:F.top+(q?X-I:Me)+Jt,left:F.left+(q?Me:X-I)+Jt,boxSizing:"border-box",position:"fixed"},B[fs]=B["max"+To]=Math.ceil(F.width)+Jt,B[ds]=B["max"+Nf]=Math.ceil(F.height)+Jt,B[pi]=B[pi+da]=B[pi+ha]=B[pi+pa]=B[pi+fa]="0",B[Kt]=w[Kt],B[Kt+da]=w[Kt+da],B[Kt+ha]=w[Kt+ha],B[Kt+pa]=w[Kt+pa],B[Kt+fa]=w[Kt+fa],C=eA(mt,B,b),wn&&J(0)),i?(xe=i._initted,vu(1),i.render(i.duration(),!0,!0),se=Z(y.a)-ve+$e+Et,le=Math.abs($e-se)>1,G&&le&&C.splice(C.length-2,2),i.render(0,!0,!0),xe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),vu(0)):se=$e,Pe&&(Pe.value?Pe.style["overflow"+y.a.toUpperCase()]=Pe.value:Pe.style.removeProperty("overflow-"+y.a));else if(d&&J()&&!E)for(F=d.parentNode;F&&F!==_t;)F._pinOffset&&(I-=F._pinOffset,Xe-=F._pinOffset),F=F.parentNode;Ue&&Ue.forEach(function(ct){return ct.revert(!1,!0)}),D.start=I,D.end=Xe,Be=ft=wn?te:J(),!E&&!wn&&!Dr&&(Be<te&&J(te),D.scroll.rec=0),D.revert(!1,!0),Ge=mn(),pe&&(We=-1,pe.restart(!0)),pn=0,i&&P&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Wt||$!==D.progress||E||_||i&&!i._initted)&&(i&&!P&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(E&&I<-.001&&!$?Se.utils.normalize(I,Xe,0):$,!0),D.progress=Wt||(Be-I)/$e===$?0:$),f&&g&&(k._pinOffset=Math.round(D.progress*se)),U&&U.invalidate(),isNaN(Ce)||(Ce-=Se.getProperty(O,y.p),je-=Se.getProperty(ot,y.p),wc(O,y,Ce),wc(Le,y,Ce-(Ye||0)),wc(ot,y,je),wc(we,y,je-(Ye||0))),Wt&&!wn&&D.update(),u&&!wn&&!He&&(He=!0,u(D),He=!1)}},D.getVelocity=function(){return(J()-ft)/(mn()-$o)*1e3||0},D.endAnimation=function(){Go(D.callbackAnimation),i&&(U?U.progress(1):i.paused()?P||Go(i,D.direction<0,1):Go(i,i.reversed()))},D.labelToScroll=function(de){return i&&i.labels&&(I||D.refresh()||I)+i.labels[de]/i.duration()*$e||0},D.getTrailing=function(de){var ke=tt.indexOf(D),De=D.direction>0?tt.slice(0,ke).reverse():tt.slice(ke+1);return(Zn(de)?De.filter(function(Ye){return Ye.vars.preventOverlaps===de}):De).filter(function(Ye){return D.direction>0?Ye.end<=I:Ye.start>=Xe})},D.update=function(de,ke,De){if(!(E&&!De&&!de)){var Ye=wn===!0?te:D.scroll(),Gt=de?0:(Ye-I)/$e,Qe=Gt<0?0:Gt>1?1:Gt||0,It=D.progress,Wt,wt,Et,vt,Xn,Rt,xn,ci;if(ke&&(ft=Be,Be=E?J():Ye,v&&(Ve=ce,ce=i&&!P?i.totalProgress():Qe)),m&&f&&!pn&&!yc&&xi&&(!Qe&&I<Ye+(Ye-ft)/(mn()-$o)*m?Qe=1e-4:Qe===1&&Xe>Ye+(Ye-ft)/(mn()-$o)*m&&(Qe=.9999)),Qe!==It&&D.enabled){if(Wt=D.isActive=!!Qe&&Qe<1,wt=!!It&&It<1,Rt=Wt!==wt,Xn=Rt||!!Qe!=!!It,D.direction=Qe>It?1:-1,D.progress=Qe,Xn&&!pn&&(Et=Qe&&!It?0:Qe===1?1:It===1?2:3,P&&(vt=!Rt&&Y[Et+1]!=="none"&&Y[Et+1]||Y[Et],ci=i&&(vt==="complete"||vt==="reset"||vt in i))),x&&(Rt||ci)&&(ci||h||!i)&&(_n(x)?x(D):D.getTrailing(x).forEach(function(X){return X.endAnimation()})),P||(U&&!pn&&!yc?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",Qe,i._tTime/i._tDur):(U.vars.totalProgress=Qe,U.invalidate().restart())):i&&i.totalProgress(Qe,!!(pn&&(Ge||de)))),f){if(de&&g&&(k.style[g+y.os2]=Ee),!G)K(Jo(ve+se*Qe));else if(Xn){if(xn=!de&&Qe>It&&Xe+1>Ye&&Ye+1>=Fi(N,y),b)if(!de&&(Wt||xn)){var jt=nr(f,!0),w=Ye-I;zp(f,_t,jt.top+(y===Zt?w:0)+Jt,jt.left+(y===Zt?0:w)+Jt)}else zp(f,k);oo(Wt||xn?C:T),le&&Qe<1&&Wt||K(ve+(Qe===1&&!xn?se:0))}}v&&!fe.tween&&!pn&&!yc&&pe.restart(!0),a&&(Rt||M&&Qe&&(Qe<1||!xu))&&Na(a.targets).forEach(function(X){return X.classList[Wt||M?"add":"remove"](a.className)}),o&&!P&&!de&&o(D),Xn&&!pn?(P&&(ci&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(D)),(Rt||!xu)&&(l&&Rt&&zs(D,l),W[Et]&&zs(D,W[Et]),M&&(Qe===1?D.kill(!1,1):W[Et]=0),Rt||(Et=Qe===1?1:3,W[Et]&&zs(D,W[Et]))),A&&!Wt&&Math.abs(D.getVelocity())>(Zo(A)?A:2500)&&(Go(D.callbackAnimation),U?U.progress(1):Go(i,vt==="reverse"?1:!Qe,1))):P&&o&&!pn&&o(D)}if(Ne){var F=E?Ye/E.duration()*(E._caScrollDist||0):Ye;re(F+(O._isFlipped?1:0)),Ne(F)}ye&&ye(-Ye/E.duration()*(E._caScrollDist||0))}},D.enable=function(de,ke){D.enabled||(D.enabled=!0,on(N,"resize",Qo),V||on(N,"scroll",Vs),ue&&on(s,"refreshInit",ue),de!==!1&&(D.progress=$=0,Be=ft=We=J()),ke!==!1&&D.refresh())},D.getTween=function(de){return de&&fe?fe.tween:U},D.setPositions=function(de,ke,De,Ye){if(E){var Gt=E.scrollTrigger,Qe=E.duration(),It=Gt.end-Gt.start;de=Gt.start+It*de/Qe,ke=Gt.start+It*ke/Qe}D.refresh(!1,!1,{start:Ip(de,De&&!!D._startClamp),end:Ip(ke,De&&!!D._endClamp)},Ye),D.update()},D.adjustPinSpacing=function(de){if(he&&de){var ke=he.indexOf(y.d)+1;he[ke]=parseFloat(he[ke])+de+Jt,he[1]=parseFloat(he[1])+de+Jt,oo(he)}},D.disable=function(de,ke){if(de!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,ke||U&&U.pause(),te=0,Ae&&(Ae.uncache=1),ue&&sn(s,"refreshInit",ue),pe&&(pe.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!V)){for(var De=tt.length;De--;)if(tt[De].scroller===N&&tt[De]!==D)return;sn(N,"resize",Qo),V||sn(N,"scroll",Vs)}},D.kill=function(de,ke){D.disable(de,ke),U&&!ke&&U.kill(),c&&delete Uh[c];var De=tt.indexOf(D);De>=0&&tt.splice(De,1),De===An&&Vc>0&&An--,De=0,tt.forEach(function(Ye){return Ye.scroller===D.scroller&&(De=1)}),De||wn||Dr||(D.scroll.rec=0),i&&(i.scrollTrigger=null,de&&i.revert({kill:!1}),ke||i.kill()),Le&&[Le,we,O,ot].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),ma===D&&(ma=0),f&&(Ae&&(Ae.uncache=1),De=0,tt.forEach(function(Ye){return Ye.pin===f&&De++}),De||(Ae.spacer=0)),n.onKill&&n.onKill(D)},tt.push(D),D.enable(!1,!1),Fe&&Fe(D),i&&i.add&&!$e){var Ke=D.update;D.update=function(){D.update=Ke,it.cache++,I||Xe||D.refresh()},Se.delayedCall(.01,D.update),$e=.01,I=Xe=0}else D.refresh();f&&Jb()},s.register=function(n){return Gs||(Se=n||Gg(),Vg()&&window.document&&s.enable(),Gs=jo),Gs},s.defaults=function(n){if(n)for(var i in n)Ec[i]=n[i];return Ec},s.disable=function(n,i){jo=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),sn(nt,"wheel",Vs),sn(xt,"scroll",Vs),clearInterval(xc),sn(xt,"touchcancel",Li),sn(_t,"touchstart",Li),Sc(sn,xt,"pointerdown,touchstart,mousedown",Lp),Sc(sn,xt,"pointerup,touchend,mouseup",Dp),ol.kill(),Mc(sn);for(var r=0;r<it.length;r+=3)Tc(sn,it[r],it[r+1]),Tc(sn,it[r],it[r+2])},s.enable=function(){if(nt=window,xt=document,ei=xt.documentElement,_t=xt.body,Se){if(Na=Se.utils.toArray,ua=Se.utils.clamp,Dh=Se.core.context||Li,vu=Se.core.suppressOverwrites||Li,Pf=nt.history.scrollRestoration||"auto",Oh=nt.pageYOffset||0,Se.core.globals("ScrollTrigger",s),_t){jo=1,so=document.createElement("div"),so.style.height="100vh",so.style.position="absolute",Qg(),Wb(),Yt.register(Se),s.isTouch=Yt.isTouch,yr=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Lh=Yt.isTouch===1,on(nt,"wheel",Vs),Cf=[nt,xt,ei,_t],Se.matchMedia?(s.matchMedia=function(u){var h=Se.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},Se.addEventListener("matchMediaInit",function(){Jg(),Of()}),Se.addEventListener("matchMediaRevert",function(){return jg()}),Se.addEventListener("matchMedia",function(){as(0,1),ys("matchMedia")}),Se.matchMedia().add("(orientation: portrait)",function(){return Mu(),Mu})):console.warn("Requires GSAP 3.11.0 or later"),Mu(),on(xt,"scroll",Vs);var n=_t.hasAttribute("style"),i=_t.style,r=i.borderTopStyle,o=Se.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=nr(_t),Zt.m=Math.round(a.top+Zt.sc())||0,Cn.m=Math.round(a.left+Cn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),xc=setInterval(Op,250),Se.delayedCall(.5,function(){return yc=0}),on(xt,"touchcancel",Li),on(_t,"touchstart",Li),Sc(on,xt,"pointerdown,touchstart,mousedown",Lp),Sc(on,xt,"pointerup,touchend,mouseup",Dp),Ih=Se.utils.checkPrefix("transform"),Gc.push(Ih),Gs=mn(),ol=Se.delayedCall(.2,as).pause(),Ws=[xt,"visibilitychange",function(){var u=nt.innerWidth,h=nt.innerHeight;xt.hidden?(Rp=u,Cp=h):(Rp!==u||Cp!==h)&&Qo()},xt,"DOMContentLoaded",as,nt,"load",as,nt,"resize",Qo],Mc(on),tt.forEach(function(u){return u.enable(0,1)}),c=0;c<it.length;c+=3)Tc(sn,it[c],it[c+1]),Tc(sn,it[c],it[c+2])}else if(xt){var l=function u(){s.enable(),xt.removeEventListener("DOMContentLoaded",u)};xt.addEventListener("DOMContentLoaded",l)}}},s.config=function(n){"limitCallbacks"in n&&(xu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(xc)||(xc=i)&&setInterval(Op,i),"ignoreMobileResize"in n&&(Lh=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Mc(sn)||Mc(on,n.autoRefreshEvents||"none"),kg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Un(n),o=it.indexOf(r),a=vs(r);~o&&it.splice(o,a?6:2),i&&(a?ki.unshift(nt,i,_t,i,ei,i):ki.unshift(r,i))},s.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Zn(n)?Un(n):n).getBoundingClientRect(),a=o[r?fs:ds]*i||0;return r?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},s.positionInViewport=function(n,i,r){Zn(n)&&(n=Un(n));var o=n.getBoundingClientRect(),a=o[r?fs:ds],c=i==null?a/2:i in cl?cl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+c)/nt.innerWidth:(o.top+c)/nt.innerHeight},s.killAll=function(n){if(tt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=xs.killAll||[];xs={},i.forEach(function(r){return r()})}},s})();at.version="3.15.1";at.saveStyles=function(s){return s?Na(s).forEach(function(e){if(e&&e.style){var t=Jn.indexOf(e);t>=0&&Jn.splice(t,5),Jn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),Dh())}}):Jn};at.revert=function(s,e){return Of(!s,e)};at.create=function(s,e){return new at(s,e)};at.refresh=function(s){return s?Qo(!0):(Gs||at.register())&&as(!0)};at.update=function(s){return++it.cache&&ar(s===!0?2:0)};at.clearScrollMemory=Zg;at.maxScroll=function(s,e){return Fi(s,e?Cn:Zt)};at.getScrollFunc=function(s,e){return Br(Un(s),e?Cn:Zt)};at.getById=function(s){return Uh[s]};at.getAll=function(){return tt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!xi};at.snapDirectional=Uf;at.addEventListener=function(s,e){var t=xs[s]||(xs[s]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(s,e){var t=xs[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(l,u){var h=[],d=[],f=Se.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),r<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&_n(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return _n(r)&&(r=r(),on(at,"refresh",function(){return r=e.batchMax()})),Na(s).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(at.create(l))}),t};var Vp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Tu=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===ei&&s(_t,t)},Rc={auto:1,scroll:1},nA=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Se.core.getCache(r),a=mn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==_t&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Rc[(c=mi(r)).overflowY]||Rc[c.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!vs(r)&&(Rc[(c=mi(r)).overflowY]||Rc[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},t_=function(e,t,n,i){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&nA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(xt,Yt.eventTypes[0],Wp,!1,!0)},onDisable:function(){return sn(xt,Yt.eventTypes[0],Wp,!0)}})},iA=/(input|label|select|textarea)/i,Gp,Wp=function(e){var t=iA.test(e.target.tagName);(t||Gp)&&(e._gsapAllow=!0,Gp=t)},rA=function(e){ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,c,l=Un(e.target)||ei,u=Se.core.globals().ScrollSmoother,h=u&&u.get(),d=yr&&(e.content&&Un(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Br(l,Zt),g=Br(l,Cn),_=1,m=(Yt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,p=0,S=_n(i)?function(){return i(a)}:function(){return i||2.8},M,v,b=t_(l,e.type,!0,r),R=function(){return v=!1},E=Li,A=Li,x=function(){c=Fi(l,Zt),A=ua(yr?1:0,c),n&&(E=ua(0,Fi(l,Cn))),M=ps},y=function(){d._gsap.y=Jo(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(v){requestAnimationFrame(R);var H=Jo(a.deltaY/2),ne=A(f.v-H);if(d&&ne!==f.v+f.offset){f.offset=ne-f.v;var D=Jo((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",f.cacheID=it.cache,ar()}return!0}f.offset&&y(),v=!0},N,z,V,G,W=function(){x(),N.isActive()&&N.vars.scrollY>c&&(f()>c?N.progress(1)&&f(c):N.resetTo("scrollY",c))};return d&&Se.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return yr&&Y.type==="touchmove"&&P()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=_;_=Jo((nt.visualViewport&&nt.visualViewport.scale||1)/m),N.pause(),Y!==_&&Tu(l,_>1.01?!0:n?!1:"x"),z=g(),V=f(),x(),M=ps},e.onRelease=e.onGestureStart=function(Y,H){if(f.offset&&y(),!H)G.restart(!0);else{it.cache++;var ne=S(),D,ue;n&&(D=g(),ue=D+ne*.05*-Y.velocityX/.227,ne*=Vp(g,D,ue,Fi(l,Cn)),N.vars.scrollX=E(ue)),D=f(),ue=D+ne*.05*-Y.velocityY/.227,ne*=Vp(f,D,ue,Fi(l,Zt)),N.vars.scrollY=A(ue),N.invalidate().duration(ne).play(.01),(yr&&N.vars.scrollY>=c||D>=c-1)&&Se.to({},{onUpdate:W,duration:ne})}o&&o(Y)},e.onWheel=function(){N._ts&&N.pause(),mn()-p>1e3&&(M=0,p=mn())},e.onChange=function(Y,H,ne,D,ue){if(ps!==M&&x(),H&&n&&g(E(D[2]===H?z+(Y.startX-Y.x):g()+H-D[1])),ne){f.offset&&y();var Oe=ue[2]===ne,st=Oe?V+Y.startY-Y.y:f()+ne-ue[1],We=A(st);Oe&&st!==We&&(V+=We-st),f(We)}(ne||H)&&ar()},e.onEnable=function(){Tu(l,n?!1:"x"),at.addEventListener("refresh",W),on(nt,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){Tu(l,!0),sn(nt,"resize",W),at.removeEventListener("refresh",W),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Yt(e),a.iOS=yr,yr&&!f()&&f(1),yr&&Se.ticker.add(Li),G=a._dc,N=Se.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:e_(f,f(),function(){return N.pause()})},onUpdate:ar,onComplete:G.vars.onComplete}),a};at.sort=function(s){if(_n(s))return tt.sort(s);var e=nt.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),tt.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(s){return new Yt(s)};at.normalizeScroll=function(s){if(typeof s>"u")return bn;if(s===!0&&bn)return bn.enable();if(s===!1){bn&&bn.kill(),bn=s;return}var e=s instanceof Yt?s:rA(s);return bn&&bn.target===e.target&&bn.kill(),vs(e.target)&&(bn=e),e};at.core={_getVelocityProp:Ph,_inputObserver:t_,_scrollers:it,_proxies:ki,bridge:{ss:function(){xi||ys("scrollStart"),xi=mn()},ref:function(){return pn}}};Gg()&&Se.registerPlugin(at);no.registerPlugin(at);const sA=document.querySelector("#app"),Bh=location.pathname.split("/").pop()?.replace(".html","")||"index",oA=["filiera","imprese","circolarita"];sA.innerHTML=oA.includes(Bh)?i_(Bh):n_();const kh=matchMedia("(prefers-reduced-motion: reduce)").matches;if(Bh==="index"){const s=document.querySelector("#world");let e=null,t=-1;const n=i=>{if(t===i)return;t=i;const r=ms[i],o=document.getElementById("stage-title"),a=document.getElementById("stage-description"),c=document.getElementById("stage-eyebrow"),l=document.getElementById("stage-number"),u=document.getElementById("stage-tags");o.textContent=r.title,a.textContent=r.description,c.textContent=r.eyebrow,l.textContent=r.number,u.innerHTML=r.details.map(h=>`<span>${h}</span>`).join(""),document.getElementById("stage-current").textContent=r.number,document.querySelectorAll(".stage-dot").forEach((h,d)=>h.classList.toggle("active",d===i)),document.documentElement.style.setProperty("--accent",r.accent),kh||no.fromTo("#world-copy > *",{opacity:0,y:20},{opacity:1,y:0,duration:.55,stagger:.07,overwrite:!0,ease:"power2.out"})};n(0);try{e=new xE(s,n)}catch(i){console.error("WebGL unavailable",i),s.style.display="none",document.querySelector(".world-sticky")?.classList.add("fallback")}at.create({trigger:".experience",start:"top top",end:"bottom bottom",onUpdate:i=>{const r=i.progress;e?.setProgress(r),document.getElementById("world-progress").style.transform=`scaleX(${r})`,e||n(Math.min(Math.floor(r*6),5))}}),document.querySelectorAll(".stage-dot").forEach((i,r)=>i.addEventListener("click",()=>{const o=document.querySelector(`#chapter-${ms[r].id}`);o&&scrollTo({top:o.offsetTop+o.offsetHeight*.5,behavior:kh?"auto":"smooth"})})),window.addEventListener("pagehide",()=>e?.dispose(),{once:!0})}kh||(no.utils.toArray(".editorial-card, .interlude-grid, .topic-section, .section-heading").forEach(s=>no.from(s,{y:75,opacity:0,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 88%",toggleActions:"play reverse play reverse"}})),no.to(".intro-orbit",{rotation:55,scale:1.18,ease:"none",scrollTrigger:{trigger:".intro",start:"top top",end:"bottom top",scrub:!0}}));const Xp=document.querySelector(".menu-toggle");Xp?.addEventListener("click",()=>{const s=document.querySelector(".header")?.classList.toggle("open");Xp.setAttribute("aria-expanded",String(!!s))});
