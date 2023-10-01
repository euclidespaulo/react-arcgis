import{gh as xt,gi as vt,gj as wt,cf as Mt,fV as dt,gk as bt,a as h,b as P,c as Rt,ao as _t,bM as Y,gl as Ct,bN as it,ce as R,gm as Ot,gn as st,go as H,gp as Nt,s as lt,ee as j,gq as z,gr as J,e7 as Q,e6 as X,gs as Et,c1 as St,gt as jt,bK as zt,bL as Bt,fT as B,gu as ct,gv as Z,gw as Lt,gx as Vt,b8 as qt,gy as Gt,gz as It,eq as Wt,al as Ut}from"./index-cc0ee9b2.js";import{e as ut}from"./mat3f64-221ce671.js";import{e as M,o as E}from"./mat4f64-1413b4a7.js";import{c as b}from"./spatialReferenceEllipsoidUtils-0cdf5405.js";import{m as Yt,p as kt,t as tt,o as Dt}from"./MeshLocalVertexSpace-2110c451.js";import{m as Kt}from"./MeshGeoreferencedRelativeVertexSpace-187d1dba.js";import{v as G,y as Ht,x as Jt}from"./quat-613be880.js";import{e as k}from"./quatf64-3363c48e.js";import{n as x,s as ft,r as d}from"./vec32-179dbe04.js";import{i as $,T as A}from"./BufferView-09c61577.js";function T(t=pt){return[t[0],t[1],t[2],t[3]]}function S(t,r,e=T()){return Mt(e,t),e[3]=r,e}function rt(t,r,e=T()){return G(_,t,I(t)),G(et,r,I(r)),Ht(_,et,_),Xt(e,dt(Jt(e,_)))}function Nr(t,r,e,n=T()){return S(xt,t,C),S(vt,r,nt),S(wt,e,ot),rt(C,nt,C),rt(C,ot,n),n}function Er(t){return t}function Qt(t){return t[3]}function I(t){return bt(t[3])}function Xt(t,r){return t[3]=r,t}const pt=[0,0,1,0],_=k(),et=k();T();const C=T(),nt=T(),ot=T();var W;let y=W=class extends _t{constructor(t){super(t),this.translation=Y(),this.rotationAxis=Ct(pt),this.rotationAngle=0,this.scale=it(1,1,1)}get rotation(){return S(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=R(t),this.rotationAngle=Qt(t)}get localMatrix(){const t=M();return G(at,this.rotation,I(this.rotation)),Ot(t,at,this.translation,this.scale),t}get localMatrixInverse(){return st(M(),this.localMatrix)}applyLocal(t,r){return H(r,t,this.localMatrix)}applyLocalInverse(t,r){return H(r,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Nt(this.localMatrix,t.localMatrix)}clone(){const t={translation:R(this.translation),rotationAxis:R(this.rotationAxis),rotationAngle:this.rotationAngle,scale:R(this.scale)};return new W(t)}};h([P({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"translation",void 0),h([P({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAxis",void 0),h([P({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAngle",void 0),h([P({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"scale",void 0),h([P()],y.prototype,"rotation",null),h([P()],y.prototype,"localMatrix",null),h([P()],y.prototype,"localMatrixInverse",null),y=W=h([Rt("esri.geometry.support.MeshTransform")],y);const at=k(),Zt=y;function gt(t,r){return t.isGeographic||t.isWebMercator&&((r==null?void 0:r.geographic)??!0)}function Sr(t,r,e){const n=!t.isGeoreferenced;(e==null?void 0:e.geographic)!=null&&e.geographic!==n&&lt.getLogger(r).warnOnce(`Specifying the 'geographic' parameter (${e.geographic}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}const L=lt.getLogger("esri.geometry.support.meshUtils.normalProjection");function tr(t,r,e,n,o){return q(n)?(V(m.TO_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o)),o):(L.error("Cannot convert spatial reference to PCPF"),o)}function rr(t,r,e,n,o){return q(n)?(V(m.FROM_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o)),o):(L.error("Cannot convert to spatial reference from PCPF"),o)}function er(t,r,e){return j(t,r,0,e,b(r),0,t.length/3),e}function nr(t,r,e){return j(t,b(e),0,r,e,0,t.length/3),r}function or(t,r,e){return B(u,e),x(r,t,u),ct(u)||ft(r,r),r}function ar(t,r,e){if(B(u,e),x(r,t,u,4),ct(u)||ft(r,r,4),t!==r)for(let n=3;n<t.length;n+=4)r[n]=t[n];return r}function ir(t,r,e,n,o){if(!q(n))return L.error("Cannot convert spatial reference to PCPF"),o;V(m.TO_PCPF,$.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function sr(t,r,e,n,o){if(!q(n))return L.error("Cannot convert to spatial reference from PCPF"),o;V(m.FROM_PCPF,$.fromTypedArray(t,16),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function V(t,r,e,n,o,a){if(!r)return;const i=e.count,c=b(o);if(yt(o))for(let s=0;s<i;s++)n.getVec(s,O),r.getVec(s,g),z(c,O,N,c),J(u,N),t===m.FROM_PCPF&&Q(u,u),X(g,g,u),a.setVec(s,g);else for(let s=0;s<i;s++){n.getVec(s,O),r.getVec(s,g),z(c,O,N,c),J(u,N);const l=Et(e.get(s,1));let f=Math.cos(l);t===m.TO_PCPF&&(f=1/f),u[0]*=f,u[1]*=f,u[2]*=f,u[3]*=f,u[4]*=f,u[5]*=f,t===m.FROM_PCPF&&Q(u,u),X(g,g,u),St(g,g),a.setVec(s,g)}return a}function q(t){return yt(t)||lr(t)}function yt(t){return t.isWGS84||jt(t)||zt(t)||Bt(t)}function lr(t){return t.isWebMercator}var m;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const O=Y(),g=Y(),N=M(),u=ut();function D(t,r,e){return gt(r.spatialReference,e)?gr(t,r,e):pr(t,r,e)}function mt(t,r,e,n){const{position:o,normal:a,tangent:i}=t;if(!r.isRelative)return{position:o,normal:a,tangent:i};const c=(e==null?void 0:e.localMatrix)??E;return D({position:d(new Float64Array(o.length),o,c),normal:a!=null?or(a,new Float32Array(a.length),c):null,tangent:i!=null?ar(i,new Float32Array(i.length),c):null},r.getOriginPoint(n),{geographic:!r.isGeoreferenced})}function cr(t,r,e){if(e!=null&&e.useTransform){const{position:n,normal:o,tangent:a}=t,{x:i,y:c,z:s}=r,l=it(i,c,s??0);return{vertexAttributes:{position:n,normal:o,tangent:a},vertexSpace:e.geographic??1?new Yt({origin:l}):new Kt({origin:l}),transform:new Zt}}return{vertexAttributes:D(t,r,e),vertexSpace:new kt,transform:null}}function U(t,r,e){return gt(r.spatialReference,e)?$r(t,r,e):ht(t,r,e)}function ur(t,r,e,n,o){if(!r.isRelative)return U(t,n,o);const{spatialReference:a}=n,i=mt(t,r,e,a);return n.equals(r.getOriginPoint(a))?ht(i,n,o):U(i,n,o)}function fr({positions:t,transform:r,vertexSpace:e,inSpatialReference:n,outSpatialReference:o,outPositions:a,local:i}){const c=e.isRelative?e.origin:Z,s=e.isRelative?(r==null?void 0:r.localMatrix)??E:E;if(e.isGeoreferenced){const p=a??tt(t.length);if(Lt(s,E)?Dt(p,t):d(p,t,s),!Vt(c,Z)){const[Pt,Ft,Tt]=c;for(let w=0;w<p.length;w+=3)p[w]+=Pt,p[w+1]+=Ft,p[w+2]+=Tt}return j(p,n,0,p,o,0,p.length/3),p}const l=b(n),f=!i&&qt(n,l)?l:n;z(n,c,F,f),Gt(F,F,s);const v=a??tt(t.length);return d(v,t,F),j(v,f,0,v,o,0,v.length/3),v}function pr(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,i=r.y,c=r.z??0,s=K(e?e.unit:null,r.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=o[l]*s+a,n[l+1]=o[l+1]*s+i,n[l+2]=o[l+2]*s+c;return{position:n,normal:t.normal,tangent:t.tangent}}function gr(t,r,e){const n=r.spatialReference,o=$t(r,e,F),a=new Float64Array(t.position.length),i=yr(t.position,o,n,a),c=B(At,o);return{position:i,normal:mr(i,a,t.normal,c,n),tangent:hr(i,a,t.tangent,c,n)}}function yr(t,r,e,n){d(n,t,r);const o=new Float64Array(t.length);return nr(n,o,e)}function mr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);return x(a,e,n),rr(a,t,r,o,a),a}function hr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);x(a,e,n,4);for(let i=3;i<a.length;i+=4)a[i]=e[i];return sr(a,t,r,o,a),a}function ht(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,i=r.y,c=r.z??0,s=K(e?e.unit:null,r.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=(o[l]-a)/s,n[l+1]=(o[l+1]-i)/s,n[l+2]=(o[l+2]-c)/s;return{position:n,normal:t.normal,tangent:t.tangent}}function $r(t,r,e){const n=r.spatialReference;$t(r,e,F);const o=st(Tr,F),a=new Float64Array(t.position.length),i=Ar(t.position,n,o,a),c=B(At,o);return{position:i,normal:Pr(t.normal,t.position,a,n,c),tangent:Fr(t.tangent,t.position,a,n,c)}}function $t(t,r,e){z(t.spatialReference,[t.x,t.y,t.z??0],e,b(t.spatialReference));const n=K(r?r.unit:null,t.spatialReference);return It(e,e,[n,n,n]),e}function Ar(t,r,e,n){const o=er(t,r,n),a=new Float64Array(o.length);return d(a,o,e),a}function Pr(t,r,e,n,o){if(t==null)return null;const a=tr(t,r,e,n,new Float32Array(t.length));return x(a,a,o),a}function Fr(t,r,e,n,o){if(t==null)return null;const a=ir(t,r,e,n,new Float32Array(t.length));return x(a,a,o,4),a}function K(t,r){if(t==null)return 1;const e=Wt(r);return 1/Ut(e,"meters",t)}const F=M(),Tr=M(),At=ut(),jr=Object.freeze(Object.defineProperty({__proto__:null,georeference:D,georeferenceApplyTransform:mt,georeferenceByTransform:cr,project:fr,ungeoreference:U,ungeoreferenceByTransform:ur},Symbol.toStringTag,{value:"Module"}));export{U as D,ur as E,fr as I,Zt as N,D as O,ir as R,mt as T,tr as _,nr as a,T as b,jr as c,rt as g,er as h,rr as j,Nr as l,Sr as o,cr as q,gt as r,sr as v,I as w,Er as x};
