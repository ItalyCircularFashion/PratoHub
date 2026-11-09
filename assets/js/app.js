
import{SceneDirector}from'./scene-director.js';
import{MotionEngine}from'./motion-engine.js';

import{initMenu,initFilters,initPointer}from'./interactions.js';
const boot=()=>{initMenu();initFilters();initPointer();new MotionEngine();new SceneDirector();const hasCycle=!!document.querySelector('#cycle-world');if(hasCycle){}else{import('./webgl-engine.js').then(m=>new m.WebGLExperience());import('./loom-canvas.js').then(m=>new m.LoomCanvas(document.querySelector('#loom-canvas')))}};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
