import{y as p,u as _,i as m,c as y,l as F,p as w,o as g,m as b,T as E,h as v,a as $,b as A,d as T,A as M,O,x,g as B,w as D,E as G,L as C,B as U,F as S,I as V,U as j,j as z,V as L,M as q,S as J,k as K,q as k,v as N,z as P,C as Q,D as R,G as W,H as X}from"./BufferView-09c61577.js";import{e as c}from"./types-1305598a.js";import"./index-cc0ee9b2.js";import"./vec4f64-aa64c7e9.js";class Y{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function Z(n,e){if(!n){e=e||"Assertion";const t=new Error(e).stack;throw new Y(`${e} at ${t}`)}}function he(n,e,t,s){let i,r=(t[0]-n[0])/e[0],h=(s[0]-n[0])/e[0];r>h&&(i=r,r=h,h=i);let d=(t[1]-n[1])/e[1],u=(s[1]-n[1])/e[1];if(d>u&&(i=d,d=u,u=i),r>u||d>h)return!1;d>r&&(r=d),u<h&&(h=u);let l=(t[2]-n[2])/e[2],f=(s[2]-n[2])/e[2];return l>f&&(i=l,l=f,f=i),!(r>f||l>h)&&(f<h&&(h=f),!(h<0))}class o{constructor(e,t){this.layout=e,this.buffer=typeof t=="number"?new ArrayBuffer(t*e.stride):t;for(const s of e.fields.keys()){const i=e.fields.get(s);this[s]=new i.constructor(this.buffer,i.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const s=this[e];return s&&s.elementCount===t.ElementCount&&s.elementType===t.ElementType?s:null}slice(e,t){return new o(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,s=0,i=e.count){const r=this.stride;if(r%4==0){const h=new Uint32Array(e.buffer,t*r,i*r/4);new Uint32Array(this.buffer,s*r,i*r/4).set(h)}else{const h=new Uint8Array(e.buffer,t*r,i*r);new Uint8Array(this.buffer,s*r,i*r).set(h)}return this}}class a{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach(t=>this._fields.set(t[0],{...t[1],constructor:te(t[1].constructor)})))}vec2f(e,t){return this._appendField(e,_,t),this}vec2f64(e,t){return this._appendField(e,b,t),this}vec3f(e,t){return this._appendField(e,m,t),this}vec3f64(e,t){return this._appendField(e,E,t),this}vec4f(e,t){return this._appendField(e,y,t),this}vec4f64(e,t){return this._appendField(e,v,t),this}mat3f(e,t){return this._appendField(e,F,t),this}mat3f64(e,t){return this._appendField(e,$,t),this}mat4f(e,t){return this._appendField(e,w,t),this}mat4f64(e,t){return this._appendField(e,A,t),this}vec4u8(e,t){return this._appendField(e,x,t),this}f32(e,t){return this._appendField(e,p,t),this}f64(e,t){return this._appendField(e,g,t),this}u8(e,t){return this._appendField(e,T,t),this}u16(e,t){return this._appendField(e,B,t),this}i8(e,t){return this._appendField(e,z,t),this}vec2i8(e,t){return this._appendField(e,L,t),this}vec2i16(e,t){return this._appendField(e,k,t),this}vec2u8(e,t){return this._appendField(e,M,t),this}vec4u16(e,t){return this._appendField(e,C,t),this}u32(e,t){return this._appendField(e,U,t),this}_appendField(e,t,s){if(this._fields.has(e))return void Z(!1,`${e} already added to vertex buffer layout`);const i=t.ElementCount*c(t.ElementType),r=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:r,optional:s})}createBuffer(e){return new o(this,e)}createView(e){return new o(this,e)}clone(){const e=new a;return e._stride=this._stride,e._fields=new Map,this._fields.forEach((t,s)=>e._fields.set(s,t)),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach(t=>e=Math.max(e,c(t.constructor.ElementType))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function de(){return new a}class ue{constructor(e){this.fields=new Array,e.fields.forEach((t,s)=>{const i={...t,constructor:H(t.constructor)};this.fields.push([s,i])}),this.stride=e.stride}}const ee=[p,_,m,y,F,w,g,b,E,v,$,A,T,M,O,x,B,D,G,C,U,S,V,j,z,L,q,J,K,k,N,P,Q,R,W,X];function H(n){return`${n.ElementType}_${n.ElementCount}`}function te(n){return I.get(n)}const I=new Map;ee.forEach(n=>I.set(H(n),n));export{de as H,ue as I,he as i,Z as s};
