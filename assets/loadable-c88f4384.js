import{co as t}from"./index-cc0ee9b2.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.8.0
 */const n=new WeakMap,a=new WeakMap;function c(e){a.set(e,new Promise(o=>n.set(e,o)))}function i(e){n.get(e)()}function s(e){return a.get(e)}async function p(e){return await s(e),t(e),new Promise(o=>requestAnimationFrame(()=>o()))}export{i as a,p as c,c as s};
