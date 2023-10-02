import{bu as p,a7 as y,a2 as u,cP as c,aF as m,a as o,b as s,ay as d,as as h,c as f,cQ as n,cR as S,cS as v,cT as g,cU as b,bn as C}from"./index-a26e98ab.js";import{O as G}from"./MultiOriginJSONSupport-22dda0e4.js";import{a as P}from"./BlendLayer-3f004e5c.js";import{c as R}from"./OperationalLayer-2a2adf8f.js";import{j as _}from"./PortalLayer-a515f725.js";import{p as w}from"./RefreshableLayer-357b8e2e.js";import{t as x}from"./ScaleRangeLayer-b9e42dfc.js";import{v as j,c as k,f as F}from"./commonProperties-b510eaa4.js";import"./jsonUtils-a00688b5.js";import"./parser-ce394cd3.js";import"./portalItemUtils-ba315a46.js";import"./ElevationInfo-724ed470.js";import"./lengthUtils-7c024139.js";const $=["atom","xml"],E={base:n,key:"type",typeMap:{"simple-line":S},errorContext:"symbol"},M={base:n,key:"type",typeMap:{"picture-marker":v,"simple-marker":g},errorContext:"symbol"},L={base:n,key:"type",typeMap:{"simple-fill":b},errorContext:"symbol"};let t=class extends P(w(R(_(x(G(C)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(i=>{var a;const l=i.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&((a=l.outline)!=null&&a.style.includes("esriSFS"))&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?p(this.url,$)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(y).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:i}=await u(m.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:c(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return i}_hasGeometry(e){var r;return((r=this.featureCollections)==null?void 0:r.some(i=>{var l,a;return((l=i.featureSet)==null?void 0:l.geometryType)===e&&((a=i.featureSet.features)==null?void 0:a.length)>0}))??!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([d("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:h,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(j)],t.prototype,"id",void 0),o([s(k)],t.prototype,"legendEnabled",void 0),o([s({types:E,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:M,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:L,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s(F)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([f("esri.layers.GeoRSSLayer")],t);const K=t;export{K as default};