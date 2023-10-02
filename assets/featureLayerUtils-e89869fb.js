import{s as T,cI as y,cJ as x,U as n,cK as E,cL as K,aD as D,a8 as F,aB as R,cM as j}from"./index-a26e98ab.js";import{i as f}from"./originUtils-1469eeaf.js";import{B}from"./FeatureLayer-288888d6.js";import{r as M}from"./fetchService-8f20b9d4.js";import{o as w}from"./jsonContext-475bdb58.js";import{i as c,a as U,u as I,l as m}from"./portalItemUtils-ba315a46.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./UniqueValueRenderer-d2af26fd.js";import"./LegendOptions-a86e5b35.js";import"./diffUtils-9fa31343.js";import"./SizeVariable-5d9d8acc.js";import"./colorRamps-d2fd7542.js";import"./lengthUtils-7c024139.js";import"./ColorStop-dce0028a.js";import"./featureFlags-16b1389e.js";import"./styleUtils-2b465ce9.js";import"./jsonUtils-1dd2b4d8.js";import"./DictionaryLoader-436b190a.js";import"./LRUCache-d3e18b51.js";import"./FieldsIndex-b036a266.js";import"./heatmapUtils-f6e6c33e.js";import"./vec4f64-aa64c7e9.js";import"./MultiOriginJSONSupport-22dda0e4.js";import"./LabelClass-6bea0e41.js";import"./labelUtils-3735a12d.js";import"./defaultsJSON-b087dd4d.js";import"./FeatureLayerBase-86cbd791.js";import"./Field-e0151ddf.js";import"./fieldType-ca0e5c42.js";import"./commonProperties-b510eaa4.js";import"./ElevationInfo-724ed470.js";import"./featureLayerUtils-89dae7ca.js";import"./AttachmentQuery-ed334db8.js";import"./Query-bc8c811c.js";import"./RelationshipQuery-2a4659d6.js";import"./serviceCapabilitiesUtils-91ea42cd.js";import"./queryZScale-aad5333e.js";import"./FeatureSet-af8e9871.js";import"./APIKeyMixin-64deb976.js";import"./ArcGISService-fee92b3d.js";import"./BlendLayer-3f004e5c.js";import"./jsonUtils-a00688b5.js";import"./parser-ce394cd3.js";import"./CustomParametersMixin-2e27dbc4.js";import"./FeatureEffectLayer-e233c148.js";import"./FeatureEffect-e87396b9.js";import"./FeatureReductionLayer-335b39e3.js";import"./clusterUtils-f11e08f0.js";import"./OperationalLayer-2a2adf8f.js";import"./OrderedLayer-339ded15.js";import"./PortalLayer-a515f725.js";import"./RefreshableLayer-357b8e2e.js";import"./ScaleRangeLayer-b9e42dfc.js";import"./TemporalLayer-3e6dd18a.js";import"./FeatureTemplate-8c242fbb.js";import"./FeatureType-800c4020.js";import"./fieldProperties-3a8267fe.js";import"./labelingInfo-93f1793b.js";import"./versionUtils-2b0448e1.js";import"./styleUtils-e5780e46.js";import"./TopFeaturesQuery-48dc5382.js";import"./popupUtils-eb61fc31.js";const q=T.getLogger("esri.layers.FeatureLayer"),d="Feature Service";function u(a,t){return`Layer (title: ${a.title}, id: ${a.id}) of type '${a.declaredClass}' ${t}`}function g(a,t){if(t.type!==d)throw new n("feature-layer:portal-item-wrong-type",u(a,`should have portal item of type "${d}"`))}async function J(a){if(await a.load(),x(a))throw new n("feature-layer:save",u(a,"using an in-memory source cannot be saved to a portal item"))}function z(a,t){let r=(a.messages??[]).filter(({type:e})=>e==="error").map(({name:e,message:s,details:o})=>new n(e,s,o));if(t!=null&&t.ignoreUnsupported&&(r=r.filter(({name:e})=>e!=="layer:unsupported"&&e!=="symbol:unsupported"&&e!=="symbol-layer:unsupported"&&e!=="property:unsupported"&&e!=="url:unsupported")),r.length>0)throw new n("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}async function v(a,t,r){"beforeSave"in a&&typeof a.beforeSave=="function"&&await a.beforeSave();const e=a.write({},t);return z(t,r),e}function A(a){const{layer:t,layerJSON:r}=a;return t.isTable?{layers:[],tables:[r]}:{layers:[r],tables:[]}}function h(a){c(a,m.JSAPI),a.typeKeywords&&(a.typeKeywords=a.typeKeywords.filter((t,r,e)=>e.indexOf(t)===r))}function Y(a){const t=a.portalItem;if(!t)throw q.error("save: requires the portalItem property to be set"),new n("feature-layer:portal-item-not-set",u(a,"requires the portalItem property to be set"));if(!t.loaded)throw new n("feature-layer:portal-item-not-loaded",u(a,"cannot be saved to a portal item that does not exist or is inaccessible"));g(a,t)}async function N(a,t){return/\/\d+\/?$/.test(a.url??"")?A(t[0]):_(a,t)}async function _(a,t){const{layer:{url:r,customParameters:e,apiKey:s}}=t[0];let o=await a.fetchData("json");o&&o.layers!=null&&o.tables!=null||(o=await C(o,{url:r??"",customParameters:e,apiKey:s},t.map(i=>i.layer.layerId)));for(const i of t)O(i.layer,i.layerJSON,o);return o}async function C(a,t,r){a||(a={}),a.layers||(a.layers=[]),a.tables||(a.tables=[]);const{url:e,customParameters:s,apiKey:o}=t,{serviceJSON:i,layersJSON:l}=await M(e,{customParameters:s,apiKey:o}),p=S(a.layers,i.layers,r),b=S(a.tables,i.tables,r);a.layers=p.itemResources,a.tables=b.itemResources;const L=[...p.added,...b.added],P=l?[...l.layers,...l.tables]:[];return await k(a,L,e,P),a}function S(a,t,r){const e=E(a,t,(o,i)=>o.id===i.id);a=a.filter(o=>!e.removed.some(i=>i.id===o.id));const s=e.added.map(({id:o})=>({id:o}));return s.forEach(({id:o})=>{a.push({id:o})}),{itemResources:a,added:s.filter(({id:o})=>!r.includes(o))}}async function k(a,t,r,e){const s=t.map(({id:o})=>new B({url:r,layerId:o,sourceJSON:e.find(({id:i})=>i===o)}));await K(s.map(o=>o.load())),s.forEach(o=>{const{layerId:i,loaded:l,defaultPopupTemplate:p}=o;!l||p==null||O(o,{id:i,popupInfo:p.toJSON()},a)})}function O(a,t,r){a.isTable?$(r.tables,t):$(r.layers,t)}function $(a,t){if(!a)return;const r=a.findIndex(({id:e})=>e===t.id);r===-1?a.push(t):a[r]=t}function G(a){const{portalItem:t}=a;return j(a)&&!a.dynamicDataSource&&!!(t!=null&&t.loaded)&&t.type===d}async function H(a){if(!(a!=null&&a.length))throw new n("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(a.map(e=>e.load()));for(const e of a)if(!G(e))throw new n("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${u(e,"does not conform")}`,{layer:e});const t=a.map(e=>e.portalItem.id);if(new Set(t).size>1)throw new n("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const r=a.map(e=>e.layerId);if(new Set(r).size!==r.length)throw new n("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function Q(a,t){let r=D.from(t);return r.id&&(r=r.clone(),r.id=null),r.type??(r.type=d),r.portal??(r.portal=F.getDefault()),g(a,r),r}async function V(a,t){const{url:r,layerId:e,title:s,fullExtent:o,isTable:i}=a,l=R(r),p=l!=null&&l.serverType==="FeatureServer";t.url=p?r:`${r}/${e}`,t.title||(t.title=s),t.extent=null,i||o==null||(t.extent=await U(o)),I(t,m.METADATA),I(t,m.MULTI_LAYER),c(t,m.SINGLE_LAYER),i&&c(t,m.TABLE),h(t)}async function W(a,t,r){var s;const e=a.portal;await(e==null?void 0:e.signIn()),await((s=e==null?void 0:e.user)==null?void 0:s.addItem({item:a,data:t,folder:r==null?void 0:r.folder}))}const nt=y(X);async function X(a,t){await J(a),Y(a);const r=a.portalItem,e=w(r),s=await v(a,e,t),o=await N(r,[{layer:a,layerJSON:s}]);return h(r),await r.update({data:o}),f(e),r}const pt=y(async(a,t)=>{await H(a);const r=a[0].portalItem,e=w(r),s=await Promise.all(a.map(i=>v(i,e,t))),o=await N(r,a.map((i,l)=>({layer:i,layerJSON:s[l]})));return h(r),await r.update({data:o}),await Promise.all(a.slice(1).map(i=>i.portalItem.reload())),f(e),r.clone()}),mt=y(Z);async function Z(a,t,r){await J(a);const e=Q(a,t),s=w(e),o=A({layer:a,layerJSON:await v(a,s,r)});return await V(a,e),await W(e,o,r),a.portalItem=e,f(s),e}export{nt as save,pt as saveAll,mt as saveAs};