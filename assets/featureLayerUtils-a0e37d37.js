import{x as P,U as o,_ as g,aM as A,aN as E,aI as c,aG as O}from"./index-cc0ee9b2.js";import{e as R}from"./LabelClass-889faf92.js";import{p as x}from"./jsonUtils-fe49b272.js";import{A as j}from"./UniqueValueRenderer-dfcbf549.js";import{c as L}from"./AttachmentQuery-c7c7e92b.js";import{b as l}from"./Query-39fea8fb.js";import I from"./RelationshipQuery-5c512fcf.js";const T=new P({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function D(e,t,n,r){const a=await i(e);if(await m(e,t,r),!a.addAttachment)throw new o(r,"Layer source does not support addAttachment capability");return a.addAttachment(t,n)}function m(e,t,n){const{attributes:r}=t,{objectIdField:a}=e;return e.get("capabilities.data.supportsAttachment")?t?r?a&&r[a]?Promise.resolve():Promise.reject(new o(n,`feature is missing the identifying attribute ${a}`)):Promise.reject(new o(n,"'attributes' are required on a feature to query attachments")):Promise.reject(new o(n,"A feature is required to add/delete/update attachments")):Promise.reject(new o(n,"this layer doesn't support attachments"))}async function Q(e,t,n,r,a){const s=await i(e);if(await m(e,t,a),!s.updateAttachment)throw new o(a,"Layer source does not support updateAttachment capability");return s.updateAttachment(t,n,r)}async function N(e,t,n){const{applyEdits:r}=await g(()=>import("./editingSupport-15286635.js"),["assets/editingSupport-15286635.js","assets/index-cc0ee9b2.js","assets/index-82df6a78.css","assets/normalizeUtils-9942c350.js","assets/normalizeUtilsCommon-5daab86a.js","assets/FeatureLayerBase-ffb62e13.js","assets/Field-bf5ace58.js","assets/fieldType-a8735abb.js","assets/commonProperties-2a96b451.js","assets/ElevationInfo-18e9ce10.js","assets/lengthUtils-80770c4f.js","assets/serviceCapabilitiesUtils-5e90b29f.js","assets/LabelClass-889faf92.js","assets/labelUtils-1b17ff16.js","assets/defaultsJSON-b087dd4d.js","assets/featureFlags-b7471751.js","assets/jsonUtils-fe49b272.js","assets/UniqueValueRenderer-dfcbf549.js","assets/LegendOptions-a48dfe3c.js","assets/diffUtils-232a480c.js","assets/SizeVariable-c56811d6.js","assets/colorRamps-756b6677.js","assets/ColorStop-4b4d398e.js","assets/styleUtils-26d43f85.js","assets/DictionaryLoader-99da79b0.js","assets/LRUCache-347f2d39.js","assets/FieldsIndex-05a45e5a.js","assets/heatmapUtils-8f838e1c.js","assets/vec4f64-aa64c7e9.js","assets/AttachmentQuery-c7c7e92b.js","assets/Query-39fea8fb.js","assets/RelationshipQuery-5c512fcf.js"]),a=await e.load();return r(a,a.source,t,n)}async function Z(e,t,n){const{uploadAssets:r}=await g(()=>import("./editingSupport-15286635.js"),["assets/editingSupport-15286635.js","assets/index-cc0ee9b2.js","assets/index-82df6a78.css","assets/normalizeUtils-9942c350.js","assets/normalizeUtilsCommon-5daab86a.js","assets/FeatureLayerBase-ffb62e13.js","assets/Field-bf5ace58.js","assets/fieldType-a8735abb.js","assets/commonProperties-2a96b451.js","assets/ElevationInfo-18e9ce10.js","assets/lengthUtils-80770c4f.js","assets/serviceCapabilitiesUtils-5e90b29f.js","assets/LabelClass-889faf92.js","assets/labelUtils-1b17ff16.js","assets/defaultsJSON-b087dd4d.js","assets/featureFlags-b7471751.js","assets/jsonUtils-fe49b272.js","assets/UniqueValueRenderer-dfcbf549.js","assets/LegendOptions-a48dfe3c.js","assets/diffUtils-232a480c.js","assets/SizeVariable-c56811d6.js","assets/colorRamps-756b6677.js","assets/ColorStop-4b4d398e.js","assets/styleUtils-26d43f85.js","assets/DictionaryLoader-99da79b0.js","assets/LRUCache-347f2d39.js","assets/FieldsIndex-05a45e5a.js","assets/heatmapUtils-8f838e1c.js","assets/vec4f64-aa64c7e9.js","assets/AttachmentQuery-c7c7e92b.js","assets/Query-39fea8fb.js","assets/RelationshipQuery-5c512fcf.js"]),a=await e.load();return r(a,a.source,t,n)}async function H(e,t,n,r){const a=await i(e);if(await m(e,t,r),!a.deleteAttachments)throw new o(r,"Layer source does not support deleteAttachments capability");return a.deleteAttachments(t,n)}async function J(e,t,n){const r=(await e.load({signal:t==null?void 0:t.signal})).source;if(!r.fetchRecomputedExtents)throw new o(n,"Layer source does not support fetchUpdates capability");return r.fetchRecomputedExtents(t)}async function k(e,t,n,r){var w,b;t=L.from(t),await e.load();const a=e.source,s=e.capabilities;if(!((w=s==null?void 0:s.data)!=null&&w.supportsAttachment))throw new o(r,"this layer doesn't support attachments");const{attachmentTypes:p,objectIds:d,globalIds:u,num:q,size:y,start:F,where:h}=t;if(!((b=s==null?void 0:s.operations)!=null&&b.supportsQueryAttachments)&&((p==null?void 0:p.length)>0||(u==null?void 0:u.length)>0||(y==null?void 0:y.length)>0||q||F||h))throw new o(r,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(d!=null&&d.length||u!=null&&u.length||h))throw new o(r,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);if(!a.queryAttachments)throw new o(r,"Layer source does not support queryAttachments capability",t);return a.queryAttachments(t)}async function z(e,t,n,r){const a=await i(e);if(!a.queryObjectIds)throw new o(r,"Layer source does not support queryObjectIds capability");return a.queryObjectIds(l.from(t)??e.createQuery(),n)}async function B(e,t,n,r){const a=await i(e);if(!a.queryFeatureCount)throw new o(r,"Layer source does not support queryFeatureCount capability");return a.queryFeatureCount(l.from(t)??e.createQuery(),n)}async function K(e,t,n,r){const a=await i(e);if(!a.queryExtent)throw new o(r,"Layer source does not support queryExtent capability");return a.queryExtent(l.from(t)??e.createQuery(),n)}async function W(e,t,n,r){const a=await i(e);if(!a.queryRelatedFeatures)throw new o(r,"Layer source does not support queryRelatedFeatures capability");return a.queryRelatedFeatures(I.from(t),n)}async function X(e,t,n,r){const a=await i(e);if(!a.queryRelatedFeaturesCount)throw new o(r,"Layer source does not support queryRelatedFeaturesCount capability");return a.queryRelatedFeaturesCount(I.from(t),n)}async function Y(e){const t=e.source;if(t!=null&&t.refresh)try{const{dataChanged:n,updates:r}=await t.refresh();if(r!=null&&(e.sourceJSON={...e.sourceJSON,...r},e.read(r,{origin:"service",url:e.parsedUrl})),n)return!0}catch{}if(e.definitionExpression)try{return(await R(e.definitionExpression,e.fieldsIndex)).hasDateFunctions}catch{}return!1}function ee(e){const t=new l,n=e.get("capabilities.data"),r=e.get("capabilities.query");t.historicMoment=e.historicMoment,t.gdbVersion=e.gdbVersion,t.returnGeometry=!0,r&&(t.compactGeometryEnabled=r.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=r.supportsDefaultSpatialReference),n&&(n.supportsZ&&e.returnZ!=null&&(t.returnZ=e.returnZ),n.supportsM&&e.returnM!=null&&(t.returnM=e.returnM)),t.outFields=["*"];const{timeOffset:a,timeExtent:s}=e;return t.timeExtent=a!=null&&s!=null?s.offset(-a.value,a.unit):s||null,t.multipatchOption=e.geometryType==="multipatch"?"xyFootprint":null,t}function te(e){const{globalIdField:t,fields:n}=e;if(t)return t;if(n){for(const r of n)if(r.type==="esriFieldTypeGlobalID")return r.name}}function re(e){const{objectIdField:t,fields:n}=e;if(t)return t;if(n){for(const r of n)if(r.type==="esriFieldTypeOID")return r.name}}function ne(e){return e.currentVersion?e.currentVersion:e.hasOwnProperty("capabilities")||e.hasOwnProperty("drawingInfo")||e.hasOwnProperty("hasAttachments")||e.hasOwnProperty("htmlPopupType")||e.hasOwnProperty("relationships")||e.hasOwnProperty("timeInfo")||e.hasOwnProperty("typeIdField")||e.hasOwnProperty("types")?10:9.3}async function i(e){return(await e.load()).source}async function S(e,t){if(!c||c.findCredential(e))return;let n;try{const r=await O(e,t);r&&(n=await c.checkSignInStatus(`${r}/sharing`))}catch{}if(n)try{const r=t!=null?t.signal:null;await c.getCredential(e,{signal:r})}catch{}}async function ae(e,t){var r;const n=(r=e.parsedUrl)==null?void 0:r.path;n&&_(e)&&await S(n,t)}function _(e){const t=e.editFieldsInfo;return!(!(t!=null&&t.creatorField)&&!(t!=null&&t.editorField))||(e.userHasUpdateItemPrivileges?e.hasUpdateItemRestrictions:!!e.userHasFullEditingPrivileges&&e.hasFullEditingRestrictions)}function oe(e){var t;return!((t=e.sourceJSON)!=null&&t.isMultiServicesView)&&(e.userHasUpdateItemPrivileges||e.editingEnabled)}const f=A({types:E});function se(e,t){if(e.defaultSymbol)return e.types&&e.types.length?new j({defaultSymbol:f(e.defaultSymbol,e,t),field:e.typeIdField,uniqueValueInfos:e.types.map(n=>({id:n.id,symbol:f(n.symbol,n,t)}))}):new x({symbol:f(e.defaultSymbol,e,t)})}export{X as A,ee as E,B as F,K as I,ae as M,Y as O,W as P,oe as Q,re as R,te as S,H as b,T as d,J as g,N as h,k as j,Q as m,z as q,se as v,Z as w,ne as x,D as y};
