import{x as C,ga as J,aA as j,I as y,J as h,K as V,S as Z,b8 as z,gb as B,gc as D,F as K,c3 as A,_ as E,gd as L,ge as W,gf as Y,gg as k,U as w,ca as N,c5 as H}from"./index-cc0ee9b2.js";import{d as Q,h as P,b as X,P as G,$ as tt,H as et,U as rt,K as x}from"./featureConversionUtils-21ed310a.js";import{t as S}from"./OptimizedGeometry-33b2eb0d.js";import{f as v,g as F}from"./projectionSupport-3798f02e.js";import{b as it}from"./normalizeUtils-9942c350.js";const nt=new C({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),M=Object.freeze({}),_=new S,st=new S,b=new S,m={esriGeometryPoint:G,esriGeometryPolyline:tt,esriGeometryPolygon:et,esriGeometryMultipoint:rt};function Nt(t,e,i,r=t.hasZ,n=t.hasM){if(e==null)return null;const l=t.hasZ&&r,s=t.hasM&&n;if(i){const o=P(b,e,t.hasZ,t.hasM,"esriGeometryPoint",i,r,n);return G(o,l,s)}return G(e,l,s)}function d(t,e,i,r,n,l,s=e,o=i){var R,p,g;const u=e&&s,a=i&&o,c=r!=null?"coords"in r?r:r.geometry:null;if(c==null)return null;if(n){let f=Q(st,c,e,i,t,n,s,o);return l&&(f=P(b,f,u,a,t,l)),((R=m[t])==null?void 0:R.call(m,f,u,a))??null}if(l){const f=P(b,c,e,i,t,l,s,o);return((p=m[t])==null?void 0:p.call(m,f,u,a))??null}return X(_,c,e,i,s,o),((g=m[t])==null?void 0:g.call(m,_,u,a))??null}async function xt(t,e,i){const{outFields:r,orderByFields:n,groupByFieldsForStatistics:l,outStatistics:s}=t;if(r)for(let o=0;o<r.length;o++)r[o]=r[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(l)for(let o=0;o<l.length;o++)l[o]=l[o].trim();if(s)for(let o=0;o<s.length;o++)s[o].onStatisticField&&(s[o].onStatisticField=s[o].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),lt(t,e,i)}async function lt(t,e,i){var l;if(!t)return null;let{where:r}=t;if(t.where=r=r&&r.trim(),(!r||/^1 *= *1$/.test(r)||e&&e===r)&&(t.where=null),!t.geometry)return t;let n=await at(t);if(t.distance=0,t.units=null,t.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:s}=t.geometry;n=J(n),n.spatialReference=s}if(n){await v(n.spatialReference,i),n=ot(n,i);const s=(await it(j(n)))[0];if(s==null)throw M;const o="quantizationParameters"in t&&((l=t.quantizationParameters)==null?void 0:l.tolerance)||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,u=o&&U(n,i)?{densificationStep:8*o}:void 0,a=s.toJSON(),c=await F(a,a.spatialReference,i,u);if(!c)throw M;c.spatialReference=i,t.geometry=c}return t}function U(t,e){if(!t)return!1;const i=t.spatialReference;return(y(t)||h(t)||V(t))&&!Z(i,e)&&!z(i,e)}function ot(t,e){const i=t.spatialReference;return U(t,e)&&y(t)?{spatialReference:i,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function at(t){const{distance:e,units:i}=t,r=t.geometry;if(e==null||"vertexAttributes"in r)return r;const n=r.spatialReference,l=i?nt.fromJSON(i):B(n),s=n&&(D(n)||K(n))?r:await v(n,A).then(()=>F(r,A));return(await ut())(s.spatialReference,s,e,l)}async function ut(){return(await E(()=>import("./geometryEngineJSON-82eb9395.js"),["assets/geometryEngineJSON-82eb9395.js","assets/geometryEngineBase-fef23fa3.js","assets/index-cc0ee9b2.js","assets/index-82df6a78.css","assets/geometryEngineJSON-74f9fbec.js","assets/json-48e3ea08.js"])).geodesicBuffer}function Mt(t){return t&&O in t?JSON.parse(JSON.stringify(t,ct)):t}const O="_geVersion",ct=(t,e)=>t!==O?e:void 0;function ft(t){return t==="mesh"?L:W(t)}function T(t,e){return t?e?4:3:e?3:2}function mt(t,e,i,r){return q(t,e,i,r.coords[0],r.coords[1])}function pt(t,e,i,r,n,l){const s=T(n,l),{coords:o,lengths:u}=r;if(!u)return!1;for(let a=0,c=0;a<u.length;a++,c+=s)if(!q(t,e,i,o[c],o[c+1]))return!1;return!0}function q(t,e,i,r,n){if(!t)return!1;const l=T(e,i),{coords:s,lengths:o}=t;let u=!1,a=0;for(const c of o)u=yt(u,s,l,a,c,r,n),a+=c*l;return u}function yt(t,e,i,r,n,l,s){let o=t,u=r;for(let a=r,c=r+n*i;a<c;a+=i){u=a+i,u===c&&(u=r);const R=e[a],p=e[a+1],g=e[u],f=e[u+1];(p<s&&f>=s||f<s&&p>=s)&&R+(s-p)/(f-p)*(g-R)<l&&(o=!o)}return o}const $="feature-store:unsupported-query",Rt={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},I={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function St(t){return t!=null&&I.spatialRelationship[t]===!0}function gt(t){return t!=null&&I.queryGeometry[H(t)]===!0}function dt(t){return t!=null&&I.layerGeometry[t]===!0}function ht(){return E(()=>import("./geometryEngineJSON-82eb9395.js"),["assets/geometryEngineJSON-82eb9395.js","assets/geometryEngineBase-fef23fa3.js","assets/index-cc0ee9b2.js","assets/index-82df6a78.css","assets/geometryEngineJSON-74f9fbec.js","assets/json-48e3ea08.js"])}function _t(t,e,i,r,n){if(h(e)&&i==="esriGeometryPoint"&&(t==="esriSpatialRelIntersects"||t==="esriSpatialRelContains")){const l=x(new S,e,!1,!1);return Promise.resolve(s=>mt(l,!1,!1,s))}if(h(e)&&i==="esriGeometryMultipoint"){const l=x(new S,e,!1,!1);if(t==="esriSpatialRelContains")return Promise.resolve(s=>pt(l,!1,!1,s,r,n))}if(y(e)&&i==="esriGeometryPoint"&&(t==="esriSpatialRelIntersects"||t==="esriSpatialRelContains"))return Promise.resolve(l=>Y(e,d(i,r,n,l)));if(y(e)&&i==="esriGeometryMultipoint"&&t==="esriSpatialRelContains")return Promise.resolve(l=>k(e,d(i,r,n,l)));if(y(e)&&t==="esriSpatialRelIntersects"){const l=ft(i);return Promise.resolve(s=>l(e,d(i,r,n,s)))}return ht().then(l=>{const s=l[Rt[t]].bind(null,e.spatialReference,e);return o=>s(d(i,r,n,o))})}async function Et(t,e,i){const{spatialRel:r,geometry:n}=t;if(n){if(!St(r))throw new w($,"Unsupported query spatial relationship",{query:t});if(N(n.spatialReference)&&N(i)){if(!gt(n))throw new w($,"Unsupported query geometry type",{query:t});if(!dt(e))throw new w($,"Unsupported layer geometry type",{query:t});if(t.outSR)return v(t.geometry&&t.geometry.spatialReference,t.outSR)}}}function Ft(t){if(y(t))return!0;if(h(t)){for(const e of t.rings)if(e.length!==5||e[0][0]!==e[1][0]||e[0][0]!==e[4][0]||e[2][0]!==e[3][0]||e[0][1]!==e[3][1]||e[0][1]!==e[4][1]||e[1][1]!==e[2][1])return!1;return!0}return!1}async function Ut(t,e){if(!t)return null;const i=e.featureAdapter,{startTimeField:r,endTimeField:n}=t;let l=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(r&&n)await e.forEach(o=>{const u=i.getAttribute(o,r),a=i.getAttribute(o,n);u==null||isNaN(u)||(l=Math.min(l,u)),a==null||isNaN(a)||(s=Math.max(s,a))});else{const o=r||n;await e.forEach(u=>{const a=i.getAttribute(u,o);a==null||isNaN(a)||(l=Math.min(l,a),s=Math.max(s,a))})}return{start:l,end:s}}function Ot(t,e,i){if(!e||!t)return null;const{startTimeField:r,endTimeField:n}=t;if(!r&&!n)return null;const{start:l,end:s}=e;return l===null&&s===null?null:l===void 0&&s===void 0?Pt():r&&n?wt(i,r,n,l,s):$t(i,r||n,l,s)}function wt(t,e,i,r,n){return r!=null&&n!=null?l=>{const s=t.getAttribute(l,e),o=t.getAttribute(l,i);return(s==null||s<=n)&&(o==null||o>=r)}:r!=null?l=>{const s=t.getAttribute(l,i);return s==null||s>=r}:n!=null?l=>{const s=t.getAttribute(l,e);return s==null||s<=n}:void 0}function $t(t,e,i,r){return i!=null&&r!=null&&i===r?n=>t.getAttribute(n,e)===i:i!=null&&r!=null?n=>{const l=t.getAttribute(n,e);return l>=i&&l<=r}:i!=null?n=>t.getAttribute(n,e)>=i:r!=null?n=>t.getAttribute(n,e)<=r:void 0}function Pt(){return()=>!1}export{Nt as G,Ft as I,M,d as P,Mt as Z,xt as a,Et as b,Ot as n,Ut as t,_t as v,lt as z};
