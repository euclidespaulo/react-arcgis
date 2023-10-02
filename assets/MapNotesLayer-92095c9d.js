import{i as I,a as o,b as l,eF as k,c as L,bn as $,cU as H,cR as U,cT as T,eG as W,O as S,V as v,T as N,bv as E,eH as J,e4 as O,eI as R,dF as D,j as q,U as V,a$ as Y,S as K,b8 as Q,b5 as X,b6 as Z,b2 as ee,aR as x,ay as h,av as te,as as re,eJ as j}from"./index-a26e98ab.js";import{O as oe}from"./MultiOriginJSONSupport-22dda0e4.js";import{b as ie}from"./normalizeUtils-9b68c844.js";import{B as ae}from"./FeatureLayer-288888d6.js";import{a as P}from"./BlendLayer-3f004e5c.js";import{t as G}from"./ScaleRangeLayer-b9e42dfc.js";import{h as le}from"./ElevationInfo-724ed470.js";import{n as ne}from"./objectIdUtils-789e911a.js";import{c as se}from"./OperationalLayer-2a2adf8f.js";import{j as pe}from"./PortalLayer-a515f725.js";import{y as _}from"./Field-e0151ddf.js";import"./normalizeUtilsCommon-5787e1d1.js";import"./UniqueValueRenderer-d2af26fd.js";import"./LegendOptions-a86e5b35.js";import"./diffUtils-9fa31343.js";import"./SizeVariable-5d9d8acc.js";import"./colorRamps-d2fd7542.js";import"./lengthUtils-7c024139.js";import"./ColorStop-dce0028a.js";import"./featureFlags-16b1389e.js";import"./styleUtils-2b465ce9.js";import"./jsonUtils-1dd2b4d8.js";import"./DictionaryLoader-436b190a.js";import"./LRUCache-d3e18b51.js";import"./FieldsIndex-b036a266.js";import"./heatmapUtils-f6e6c33e.js";import"./vec4f64-aa64c7e9.js";import"./LabelClass-6bea0e41.js";import"./labelUtils-3735a12d.js";import"./defaultsJSON-b087dd4d.js";import"./FeatureLayerBase-86cbd791.js";import"./commonProperties-b510eaa4.js";import"./featureLayerUtils-89dae7ca.js";import"./AttachmentQuery-ed334db8.js";import"./Query-bc8c811c.js";import"./RelationshipQuery-2a4659d6.js";import"./fieldType-ca0e5c42.js";import"./serviceCapabilitiesUtils-91ea42cd.js";import"./queryZScale-aad5333e.js";import"./FeatureSet-af8e9871.js";import"./APIKeyMixin-64deb976.js";import"./ArcGISService-fee92b3d.js";import"./CustomParametersMixin-2e27dbc4.js";import"./FeatureEffectLayer-e233c148.js";import"./FeatureEffect-e87396b9.js";import"./jsonUtils-a00688b5.js";import"./parser-ce394cd3.js";import"./FeatureReductionLayer-335b39e3.js";import"./clusterUtils-f11e08f0.js";import"./OrderedLayer-339ded15.js";import"./RefreshableLayer-357b8e2e.js";import"./TemporalLayer-3e6dd18a.js";import"./FeatureTemplate-8c242fbb.js";import"./FeatureType-800c4020.js";import"./fieldProperties-3a8267fe.js";import"./labelingInfo-93f1793b.js";import"./versionUtils-2b0448e1.js";import"./styleUtils-e5780e46.js";import"./TopFeaturesQuery-48dc5382.js";import"./popupUtils-eb61fc31.js";import"./portalItemUtils-ba315a46.js";let d=class extends P(G($)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new I,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};o([l({type:le})],d.prototype,"elevationInfo",void 0),o([l(k(I,"graphics"))],d.prototype,"graphics",void 0),o([l({type:["show","hide"]})],d.prototype,"listMode",void 0),o([l()],d.prototype,"screenSizePerspectiveEnabled",void 0),o([l({readOnly:!0})],d.prototype,"type",void 0),o([l({constructOnly:!0})],d.prototype,"internal",void 0),d=o([L("esri.layers.GraphicsLayer")],d);const ye=d;function b(e){return e.featureCollectionType==="markup"||e.layers.some(t=>t.layerDefinition.visibilityField!=null||!B(t))}function B({layerDefinition:e,featureSet:t}){const r=e.geometryType??t.geometryType;return C.find(i=>{var a,s,p;return r===i.geometryTypeJSON&&((p=(s=(a=e.drawingInfo)==null?void 0:a.renderer)==null?void 0:s.symbol)==null?void 0:p.type)===i.identifyingSymbol.type})}function F(){return new re({xmin:-180,ymin:-90,xmax:180,ymax:90})}const M=new _({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),me=new _({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let m=class extends ye{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get fullExtent(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference,t=this.fullBounds;return e?t==null?O(F(),e).geometry:D(t,e):null}get fullBounds(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference;if(!e)return null;const t=E();return this.graphics.forEach(i=>{const a=i.geometry!=null?O(i.geometry,e).geometry:null;a!=null&&J(t,a.type==="point"?a:a.extent,t)}),R(t,j)?null:t}get sublayers(){return this.graphics}};o([l({readOnly:!0})],m.prototype,"fullExtent",null),o([l({readOnly:!0})],m.prototype,"fullBounds",null),o([l({readOnly:!0})],m.prototype,"sublayers",null),o([l()],m.prototype,"layer",void 0),o([l()],m.prototype,"layerId",void 0),o([l({readOnly:!0})],m.prototype,"visibilityMode",void 0),m=o([L("esri.layers.MapNotesLayer.MapNotesSublayer")],m);const C=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new H().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new U().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new T().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new T().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new W().toJSON()}];let n=class extends P(G(se(pe(oe($))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=S.WGS84,this.sublayers=new v(C.map(t=>new m({id:t.id,layerId:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!b(t)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(e,t,r){if(!b(t))return null;const i=t.layers.map(a=>{const s=new ae;return s.read(a,r),s});return new v({items:i})}readLegacyfeatureCollectionJSON(e,t){return b(t)?N(t.featureCollection):null}get fullExtent(){var r;const e=this.spatialReference,t=E();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:i})=>i!=null?J(t,i,t):t,t):(r=this.featureCollectionJSON)!=null&&r.layers.some(i=>i.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(i=>{const a=O(i.layerDefinition.extent,e).geometry;a!=null&&J(t,a,t)}),R(t,j)?O(F(),e).geometry:D(t,e)}readMinScale(e,t){for(const r of t.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?S.fromJSON(t.layers[0].layerDefinition.spatialReference):S.WGS84}readSublayers(e,t,r){if(b(t))return null;const i=[];let a=t.layers.reduce((s,p)=>Math.max(s,p.layerDefinition.id??-1),-1)+1;for(const s of t.layers){const{layerDefinition:p,featureSet:y}=s,u=p.id??a++,c=B(s);if(c!=null){const f=new m({id:c.id,title:p.name,layerId:u,layer:this,graphics:y.features.map(({geometry:g,symbol:w,attributes:z,popupInfo:A})=>q.fromJSON({attributes:z,geometry:g,symbol:w,popupTemplate:A}))});i.push(f)}}return new v(i)}writeSublayers(e,t,r,i){var c;const{minScale:a,maxScale:s}=this;if(e==null)return;const p=e.some(f=>f.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&((c=i==null?void 0:i.messages)==null?void 0:c.push(new V("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const y=[];let u=this.spatialReference.toJSON();e:for(const f of e)for(const g of f.graphics)if(g.geometry!=null){u=g.geometry.spatialReference.toJSON();break e}for(const f of C){const g=e.find(w=>f.id===w.id);this._writeMapNoteSublayer(y,g,f,a,s,u,i)}Y("featureCollection.layers",y,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=N(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(this.sublayers==null)return;let e=null;const t=[];for(const i of this.sublayers)for(const a of i.graphics)if(a.geometry!=null){const s=a.geometry;e?K(s.spatialReference,e)||(Q(s.spatialReference,e)||X()||await Z(),a.geometry=ee(s,e)):e=s.spatialReference,t.push(a)}const r=await ie(t.map(i=>i.geometry));t.forEach((i,a)=>i.geometry=r[a])}_findSublayer(e){var t;return this.sublayers==null?null:((t=this.sublayers)==null?void 0:t.find(r=>r.id===e))??null}_writeMapNoteSublayer(e,t,r,i,a,s,p){const y=[];if(t!=null){for(const u of t.graphics)this._writeMapNote(y,u,r.geometryType,p);this._normalizeObjectIds(y,M),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:i,maxScale:a,objectIdField:"OBJECTID",fields:[M.toJSON(),me.toJSON()],spatialReference:s},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,i){var u,c;if(t==null)return;const{geometry:a,symbol:s,popupTemplate:p}=t;if(a==null)return;if(a.type!==r)return void((u=i==null?void 0:i.messages)==null?void 0:u.push(new x("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(s==null)return void((c=i==null?void 0:i.messages)==null?void 0:c.push(new x("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const y={attributes:{...t.attributes},geometry:a.toJSON(),symbol:s.toJSON()};p!=null&&(y.popupInfo=p.toJSON()),e.push(y)}_normalizeObjectIds(e,t){const r=t.name;let i=ne(r,e)+1;const a=new Set;for(const s of e){s.attributes||(s.attributes={});const{attributes:p}=s;(p[r]==null||a.has(p[r]))&&(p[r]=i++),a.add(p[r])}}};o([l({readOnly:!0})],n.prototype,"capabilities",void 0),o([h(["portal-item","web-map"],"capabilities",["layers"])],n.prototype,"readCapabilities",null),o([l({readOnly:!0})],n.prototype,"featureCollections",void 0),o([h(["web-map","portal-item"],"featureCollections",["layers"])],n.prototype,"readFeatureCollections",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],n.prototype,"featureCollectionJSON",void 0),o([h(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],n.prototype,"readLegacyfeatureCollectionJSON",null),o([l({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],n.prototype,"featureCollectionType",void 0),o([l({readOnly:!0})],n.prototype,"fullExtent",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],n.prototype,"legendEnabled",void 0),o([l({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),o([l({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"minScale",void 0),o([h(["web-map","portal-item"],"minScale",["layers"])],n.prototype,"readMinScale",null),o([l({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"maxScale",void 0),o([h(["web-map","portal-item"],"maxScale",["layers"])],n.prototype,"readMaxScale",null),o([l({readOnly:!0})],n.prototype,"multipointLayer",null),o([l({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],n.prototype,"operationalLayerType",void 0),o([l({readOnly:!0})],n.prototype,"pointLayer",null),o([l({readOnly:!0})],n.prototype,"polygonLayer",null),o([l({readOnly:!0})],n.prototype,"polylineLayer",null),o([l({type:S})],n.prototype,"spatialReference",void 0),o([h(["web-map","portal-item"],"spatialReference",["layers"])],n.prototype,"readSpatialReference",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],n.prototype,"sublayers",void 0),o([h("web-map","sublayers",["layers"])],n.prototype,"readSublayers",null),o([te("web-map","sublayers")],n.prototype,"writeSublayers",null),o([l({readOnly:!0})],n.prototype,"textLayer",null),o([l()],n.prototype,"title",void 0),o([l({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),n=o([L("esri.layers.MapNotesLayer")],n);const St=n;export{St as default};