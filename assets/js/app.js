import{WebGLExperience}from'./webgl-engine.js';
import{SceneDirector}from'./scene-director.js';
import{MotionEngine}from'./motion-engine.js';
import{LoomCanvas}from'./loom-canvas.js';
import{initMenu,initFilters,initPointer}from'./interactions.js';
const boot=()=>{initMenu();initFilters();initPointer();new MotionEngine();new SceneDirector();new WebGLExperience();new LoomCanvas(document.querySelector('#loom-canvas'))};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
