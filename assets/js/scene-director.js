/** Scroll-directed 3D CSS scenes: reversible, no accumulating timelines. */
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
export class SceneDirector{
 constructor(){this.sections=[...document.querySelectorAll('[data-section], [data-sticky]')];this.cards=[...document.querySelectorAll('.story-card')];this.reduced=matchMedia('(prefers-reduced-motion: reduce)');this.frame=0;this.update=this.update.bind(this);this.schedule=this.schedule.bind(this);addEventListener('scroll',this.schedule,{passive:true});addEventListener('resize',this.schedule,{passive:true});this.schedule()}
 schedule(){if(!this.frame)this.frame=requestAnimationFrame(this.update)}
 update(){this.frame=0;const H=innerHeight,off=this.reduced.matches;for(const [i,el] of this.sections.entries()){const r=el.getBoundingClientRect();if(r.top>H*1.5||r.bottom< -H*.5)continue;const p=clamp((H-r.top)/(H+r.height));const q=off?.5:p;el.style.setProperty('--scene-p',q.toFixed(4));el.style.setProperty('--scene-rotate',`${(q-.5)*9*(i%2?-1:1)}deg`);el.style.setProperty('--scene-z',`${Math.sin(q*Math.PI)*55}px`)}for(const [i,el] of this.cards.entries()){const r=el.getBoundingClientRect();if(r.top>H*1.3||r.bottom< -H*.3)continue;const p=clamp((H-r.top)/(H+r.height));el.style.setProperty('--card-tilt',`${off?0:(.5-p)*14*(i%2?1:-1)}deg`);el.style.setProperty('--card-depth',`${off?0:Math.sin(p*Math.PI)*24}px`)}}
}
