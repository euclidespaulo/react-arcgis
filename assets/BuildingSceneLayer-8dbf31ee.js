import{cO as de,a as t,b as i,ay as F,au as ce,c as p,s as x,eo as Y,g6 as ee,a2 as te,fS as he,U as I,j as me,as as fe,O as re,k as ge,bO as ie,x as ve,V as b,aR as be,i0 as Se,ao as f,T as d,i1 as we,d3 as $e,u as Oe,br as xe,a7 as Ie,d7 as Fe,bn as je}from"./index-cc0ee9b2.js";import{S as Le,O as Te}from"./MultiOriginJSONSupport-ad3656cb.js";import"./UniqueValueRenderer-dfcbf549.js";import{n as Be}from"./jsonUtils-fe49b272.js";import{B as se}from"./FeatureLayer-f41ab1a4.js";import{y as q,p as Ee,j as Ae,c as _e,d as qe}from"./commonProperties-2a96b451.js";import{t as Ne,l as Re,i as Pe}from"./FetchAssociatedFeatureLayer-0cb95950.js";import{s as Me}from"./fieldProperties-cf4f9d1d.js";import{r as ke}from"./FieldsIndex-05a45e5a.js";import{r as Ue,N as Qe,K as J}from"./SceneService-1ba4a496.js";import{s as Ke,l as De,u as Ve,m as Ce}from"./I3SLayerDefinitions-7cb74e71.js";import{b as Je}from"./Query-39fea8fb.js";import{p as He}from"./popupUtils-e2d577d1.js";import{h as Ze}from"./ElevationInfo-18e9ce10.js";import{n as Ge,p as ze}from"./popupUtils-7c49fd0a.js";import{i as We}from"./APIKeyMixin-648febcf.js";import{l as Xe}from"./ArcGISService-aea881d2.js";import{c as Ye}from"./OperationalLayer-198aa482.js";import{j as et}from"./PortalLayer-cc2d9fe0.js";import{t as tt}from"./ScaleRangeLayer-19572bd4.js";import"./LegendOptions-a48dfe3c.js";import"./diffUtils-232a480c.js";import"./SizeVariable-c56811d6.js";import"./colorRamps-756b6677.js";import"./lengthUtils-80770c4f.js";import"./ColorStop-4b4d398e.js";import"./featureFlags-b7471751.js";import"./styleUtils-26d43f85.js";import"./DictionaryLoader-99da79b0.js";import"./LRUCache-347f2d39.js";import"./heatmapUtils-8f838e1c.js";import"./vec4f64-aa64c7e9.js";import"./LabelClass-889faf92.js";import"./labelUtils-1b17ff16.js";import"./defaultsJSON-b087dd4d.js";import"./FeatureLayerBase-ffb62e13.js";import"./Field-bf5ace58.js";import"./fieldType-a8735abb.js";import"./featureLayerUtils-a0e37d37.js";import"./AttachmentQuery-c7c7e92b.js";import"./RelationshipQuery-5c512fcf.js";import"./serviceCapabilitiesUtils-5e90b29f.js";import"./queryZScale-ac0e78a5.js";import"./FeatureSet-a5d2b0a7.js";import"./BlendLayer-bd7e52ec.js";import"./jsonUtils-ac963ed3.js";import"./parser-7cb9f852.js";import"./CustomParametersMixin-4b130093.js";import"./FeatureEffectLayer-60fa475e.js";import"./FeatureEffect-5ae8ceff.js";import"./FeatureReductionLayer-8884c16c.js";import"./clusterUtils-d9d6aed2.js";import"./OrderedLayer-70afa4e8.js";import"./RefreshableLayer-74995653.js";import"./TemporalLayer-fade5e60.js";import"./FeatureTemplate-87d6fd73.js";import"./FeatureType-7e2e1119.js";import"./labelingInfo-48e3897a.js";import"./versionUtils-8d790ec0.js";import"./styleUtils-18b1a6ce.js";import"./TopFeaturesQuery-74b9c555.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-613be880.js";import"./quatf64-3363c48e.js";import"./I3SBinaryReader-708c0f67.js";import"./VertexAttribute-9f2e53ec.js";import"./spatialReferenceEllipsoidUtils-0cdf5405.js";import"./symbolColorUtils-b1d04bd8.js";import"./vec3f32-ad1dc57f.js";import"./plane-385a182a.js";import"./sphere-9f2f63df.js";import"./ByteSizeUnit-d4757d40.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-b4987dc8.js";import"./portalItemUtils-b1a175c4.js";let y=class extends de(Le){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(r,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(r){return this.id!==-1?this.id:typeof r=="number"?r:-1}};t([i({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([F("service","title",["alias","name"])],y.prototype,"readTitle",null),t([i()],y.prototype,"layer",void 0),t([i({type:ce,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([F("service","id")],y.prototype,"readIdOnlyOnce",null),t([i(q(String))],y.prototype,"modelName",void 0),t([i(q(Boolean))],y.prototype,"isEmpty",void 0),t([i({type:Boolean,nonNullable:!0})],y.prototype,"legendEnabled",void 0),t([i({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([i({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const oe=y,ae="esri.layers.buildingSublayers.BuildingComponentSublayer",rt=x.getLogger(ae),H=Me();let a=class extends Y.LoadableMixin(ee(oe)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new ke(this.fields)}readAssociatedLayer(e,r){const s=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return s!=null&&typeof o=="number"?new se({portalItem:s,layerId:o}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,s=this._fetchService(r).then(()=>{this.indexInfo=Ue(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,rt,r)});return this.addResolvingPromise(s),Promise.resolve(this)}createPopupTemplate(e){return He(this,e)}async _fetchService(e){const r=(await te(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var o,n,c;const s=(n=(o=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:o.domains)==null?void 0:n[e];return s&&s.type!=="inherited"?s:((c=this.getField(e))==null?void 0:c.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Ne,{query:r,data:{supportsZ:s,supportsM:o,isVersioned:n}}=e;return{query:r,data:{supportsZ:s,supportsM:o,isVersioned:n}}}createQuery(){const e=new Je;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),r)).then(s=>{if(s!=null&&s.features)for(const o of s.features)o.layer=this.layer,o.sourceLayer=this;return s})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const s=he(this.fieldsIndex,await Ge(this,ze(this)));return Re(this.parsedUrl.path,this.attributeStorageInfo,e,r,s)}async queryCachedFeature(e,r){const s=await this.queryCachedAttributes(e,[r]);if(!s||s.length===0)throw new I("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new me;return o.attributes=s[0],o.layer=this,o.sourceLayer=this,o}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new I("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new I("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([i({readOnly:!0})],a.prototype,"parsedUrl",null),t([i({type:Ke,readOnly:!0})],a.prototype,"nodePages",void 0),t([i({type:[De],readOnly:!0})],a.prototype,"materialDefinitions",void 0),t([i({type:[Ve],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),t([i({type:[Ce],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),t([i({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),t([i({readOnly:!0})],a.prototype,"store",void 0),t([i({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),t([i({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),t([i(H.fields)],a.prototype,"fields",void 0),t([i({readOnly:!0})],a.prototype,"fieldsIndex",null),t([i({readOnly:!0,type:se})],a.prototype,"associatedLayer",void 0),t([F("service","associatedLayer",["associatedLayerID"])],a.prototype,"readAssociatedLayer",null),t([i(H.outFields)],a.prototype,"outFields",void 0),t([i({type:String,readOnly:!0})],a.prototype,"objectIdField",null),t([i({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),t([i({readOnly:!0,type:String})],a.prototype,"apiKey",null),t([i({readOnly:!0,type:fe})],a.prototype,"fullExtent",null),t([i({readOnly:!0,type:re})],a.prototype,"spatialReference",null),t([i({readOnly:!0})],a.prototype,"version",null),t([i({readOnly:!0,type:Ze})],a.prototype,"elevationInfo",null),t([i({readOnly:!0,type:Number})],a.prototype,"minScale",null),t([i({readOnly:!0,type:Number})],a.prototype,"maxScale",null),t([i({readOnly:!0,type:Number})],a.prototype,"effectiveScaleRange",null),t([i({type:["hide","show"],json:{write:!0}})],a.prototype,"listMode",void 0),t([i({types:Be,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",void 0),t([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),t([i(Ee)],a.prototype,"popupEnabled",void 0),t([i({type:ge,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],a.prototype,"popupTemplate",void 0),t([i({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),t([i({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),t([i()],a.prototype,"types",null),t([i()],a.prototype,"typeIdField",null),t([i({json:{write:!1}}),ie(new ve({"3DObject":"3d-object",Point:"point"}))],a.prototype,"layerType",void 0),t([i()],a.prototype,"geometryType",null),t([i()],a.prototype,"profile",null),t([i({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),a=t([p(ae)],a);const N=a;var R;const Z={type:b,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ne}}},read:!1}};function ne(e,r,s){if(e&&Array.isArray(e))return new b(e.map(o=>{const n=it(o);if(n){const c=new n;return c.read(o,s),c}return s&&s.messages&&o&&s.messages.push(new be("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(o.type||"unknown")+"' are not supported",{definition:o,context:s})),null}))}let m=R=class extends oe{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Se(this,e=>R.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function it(e){return e.layerType==="group"?m:N}t([i({type:["hide","show","hide-children"],json:{write:!0}})],m.prototype,"listMode",void 0),t([i(Z)],m.prototype,"sublayers",void 0),m=R=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],m),function(e){function r(s,o){s.forEach(n=>{o(n),n.type==="building-group"&&r(n.sublayers,o)})}e.sublayersProperty=Z,e.readSublayers=ne,e.forEachSublayer=r}(m||(m={}));const g=m;let j=class extends f{constructor(){super(...arguments),this.type=null}};t([i({type:String,readOnly:!0,json:{write:!0}})],j.prototype,"type",void 0),j=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],j);const le=j;var P;let S=P=class extends f{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new P({filterType:this.filterType,filterValues:d(this.filterValues)})}};t([i({type:String,json:{write:!0}})],S.prototype,"filterType",void 0),t([i({type:[String],json:{write:!0}})],S.prototype,"filterValues",void 0),S=P=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],S);const st=S;var M;const ot=b.ofType(st);let L=M=class extends f{clone(){return new M({filterTypes:d(this.filterTypes)})}};t([i({type:ot,json:{write:!0}})],L.prototype,"filterTypes",void 0),L=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],L);const at=L;var k;const nt=b.ofType(at);let w=k=class extends le{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:d(this.filterBlocks)})}};t([i({type:["checkbox"]})],w.prototype,"type",void 0),t([i({type:nt,json:{write:!0}})],w.prototype,"filterBlocks",void 0),w=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],w);const G=w;let T=class extends f{};t([i({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),T=t([p("esri.layers.support.BuildingFilterMode")],T);const A=T;var U;let B=U=class extends A{constructor(){super(...arguments),this.type="solid"}clone(){return new U}};t([i({type:["solid"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=U=t([p("esri.layers.support.BuildingFilterModeSolid")],B);const Q=B;var K;let $=K=class extends A{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new K({edges:d(this.edges)})}};t([ie({wireFrame:"wire-frame"})],$.prototype,"type",void 0),t([i(we)],$.prototype,"edges",void 0),$=K=t([p("esri.layers.support.BuildingFilterModeWireFrame")],$);const z=$;var D;let E=D=class extends A{constructor(){super(...arguments),this.type="x-ray"}clone(){return new D}};t([i({type:["x-ray"],readOnly:!0,json:{write:!0}})],E.prototype,"type",void 0),E=D=t([p("esri.layers.support.BuildingFilterModeXRay")],E);const W=E;var V;const lt={nonNullable:!0,types:{key:"type",base:A,typeMap:{solid:Q,"wire-frame":z,"x-ray":W}},json:{read:e=>{switch(e&&e.type){case"solid":return Q.fromJSON(e);case"wireFrame":return z.fromJSON(e);case"x-ray":return W.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let v=V=class extends f{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Q,this.title=""}clone(){return new V({filterExpression:this.filterExpression,filterMode:d(this.filterMode),title:this.title})}};t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"filterExpression",void 0),t([i(lt)],v.prototype,"filterMode",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"title",void 0),v=V=t([p("esri.layers.support.BuildingFilterBlock")],v);const pt=v;var C;const yt=b.ofType(pt);let h=C=class extends f{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=$e(),this.name=null}clone(){return new C({description:this.description,filterBlocks:d(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:d(this.filterAuthoringInfo)})}};t([i({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([i({type:yt,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterBlocks",void 0),t([i({types:{key:"type",base:le,typeMap:{checkbox:G}},json:{read:e=>(e&&e.type)==="checkbox"?G.fromJSON(e):null,write:!0}})],h.prototype,"filterAuthoringInfo",void 0),t([i({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"name",void 0),h=C=t([p("esri.layers.support.BuildingFilter")],h);const ut=h;let u=class extends f{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([i({type:String})],u.prototype,"fieldName",void 0),t([i({type:String})],u.prototype,"modelName",void 0),t([i({type:String})],u.prototype,"label",void 0),t([i({type:Number})],u.prototype,"min",void 0),t([i({type:Number})],u.prototype,"max",void 0),t([i({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([i({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([p("esri.layers.support.BuildingFieldStatistics")],u);let O=class extends Y.LoadableMixin(ee(f)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(x.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await te(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([i({constructOnly:!0,type:String})],O.prototype,"url",void 0),t([i({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],O.prototype,"fields",null),O=t([p("esri.layers.support.BuildingSummaryStatistics")],O);const pe=O,ye=b.ofType(ut),ue=d(g.sublayersProperty);var X;const _=(X=ue.json)==null?void 0:X.origins;_&&(_["web-scene"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_["portal-item"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let l=class extends Qe(Xe(Ye(et(tt(Te(We(je))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Oe({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new ye,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,s){const o=g.readSublayers(e,r,s);return g.forEachSublayer(o,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(o,this._sublayerOverrides),this._sublayerOverrides=null),o}applySublayerOverrides(e,{overrides:r,context:s}){g.forEachSublayer(e,o=>o.read(r.get(o.id),s))}readSublayerOverrides(e,r){var o;const s=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?s.set(n.id,n):(o=r.messages)==null||o.push(new I("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:s,context:r}}writeSublayerOverrides(e,r,s){const o=[];g.forEachSublayer(this.sublayers,n=>{const c=n.write({},s);Object.keys(c).length>1&&o.push(c)}),o.length>0&&(r.sublayers=o)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(s=>{r.sublayers.push(d(s))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const s=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,s):this._sublayerOverrides=s}}readSummaryStatistics(e,r){var s;if(typeof r.statisticsHRef=="string"){const o=xe((s=this.parsedUrl)==null?void 0:s.path,r.statisticsHRef);return new pe({url:o})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Ie).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(s),Promise.resolve(this)}loadAll(){return Fe(this,e=>{g.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(J.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(J.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new I("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&x.getLogger(this).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&x.getLogger(this).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new Pe(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(s){x.getLogger(this).warn("Associated feature service item could not be loaded",s)}}};t([i({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],l.prototype,"allSublayers",void 0),t([i(ue)],l.prototype,"sublayers",void 0),t([F("service","sublayers")],l.prototype,"readSublayers",null),t([i({type:ye,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([i({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([i({readOnly:!0,type:pe})],l.prototype,"summaryStatistics",void 0),t([F("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([i({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([i(Ae)],l.prototype,"fullExtent",void 0),t([i(_e)],l.prototype,"legendEnabled",void 0),t([i({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([i(q(re))],l.prototype,"spatialReference",void 0),t([i(qe)],l.prototype,"elevationInfo",null),t([i({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([i()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([p("esri.layers.BuildingSceneLayer")],l);const Pr=l;export{Pr as default};
