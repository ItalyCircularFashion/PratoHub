export const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
export const lerp=(a,b,t)=>a+(b-a)*t;
export const smooth=t=>{t=clamp(t);return t*t*(3-2*t)};
export function rangeProgress(value,start,end){return clamp((value-start)/Math.max(1,end-start))}
export function viewportProgress(rect,height=window.innerHeight){return clamp((height-rect.top)/(height+rect.height))}
export function elementReveal(rect,height=window.innerHeight){return smooth(rangeProgress(height-rect.top,height*.07,height*.63))}
export function sectionProgress(rect,height=window.innerHeight){return clamp(-rect.top/Math.max(1,rect.height-height))}
export const css=(el,key,value)=>el.style.setProperty(key,String(value));
