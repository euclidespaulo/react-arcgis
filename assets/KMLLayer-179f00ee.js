import{eb as L,cN as _,q as c,l as y,ds as u,eD as v,as as d,aw as $,V as b,a as r,b as l,eE as j,ay as h,c as g,eo as F,u as M,O as S,bu as C,a7 as I,av as N,bn as K}from"./index-7963d4d4.js";import{O as P}from"./MultiOriginJSONSupport-83229f36.js";import{a as R}from"./BlendLayer-67be0a8f.js";import{c as T}from"./OperationalLayer-3a2f433d.js";import{j as J}from"./PortalLayer-92877bf2.js";import{p as z}from"./RefreshableLayer-2eb6c233.js";import{t as A}from"./ScaleRangeLayer-b13c2b3b.js";import{f as V}from"./commonProperties-6814a39e.js";import{j as W,S as w,g as x,d as E}from"./kmlUtils-ca36da63.js";import"./jsonUtils-1f71c911.js";import"./parser-554850ab.js";import"./portalItemUtils-abfce48b.js";import"./ElevationInfo-ee94dcc6.js";import"./lengthUtils-3299f41f.js";import"./jsonUtils-55a27fb8.js";import"./UniqueValueRenderer-d9c6adaa.js";import"./LegendOptions-abb39b11.js";import"./diffUtils-c3909250.js";import"./SizeVariable-30352570.js";import"./colorRamps-4a2c033a.js";import"./ColorStop-9a1877a7.js";import"./featureFlags-170ded2f.js";import"./styleUtils-90aa8275.js";import"./DictionaryLoader-3032dcef.js";import"./LRUCache-50962364.js";import"./FieldsIndex-86e1c691.js";import"./heatmapUtils-c2534201.js";import"./vec4f64-aa64c7e9.js";import"./FeatureSet-dbb0e0b5.js";import"./Field-d77a8215.js";import"./fieldType-673942bd.js";var p;let a=p=class extends L.EventedMixin(_(F)){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([c(()=>this.sublayers,"after-add",({item:e})=>{e.parent=this,e.layer=this.layer},u),c(()=>this.sublayers,"after-remove",({item:e})=>{e.layer=e.parent=null},u),y(()=>this.sublayers,(e,s)=>{if(s)for(const i of s)i.layer=i.parent=null;if(e)for(const i of e)i.parent=this,i.layer=this.layer},u),y(()=>this.layer,e=>{if(this.sublayers)for(const s of this.sublayers)s.layer=e},u)])}initialize(){v(()=>this.networkLink).then(()=>v(()=>this.visible===!0)).then(()=>this.load())}load(t){var i;if(!this.networkLink||this.networkLink.viewFormat)return;const e=t!=null?t.signal:null,s=this._fetchService(((i=this._get("networkLink"))==null?void 0:i.href)??"",e).then(n=>{var m;const k=W(n.sublayers);this.fullExtent=d.fromJSON(k),this.sourceJSON=n;const f=$(b.ofType(p),w(p,n));this.sublayers?this.sublayers.addMany(f):this.sublayers=f,(m=this.layer)==null||m.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(s),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(t,e){return!!e.visibility}_fetchService(t,e){return x(t,this.layer.outSpatialReference,this.layer.refreshInterval,e).then(s=>E(s.data))}};r([l()],a.prototype,"description",void 0),r([l({type:d})],a.prototype,"fullExtent",void 0),r([l()],a.prototype,"id",void 0),r([l({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),r([l({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),r([l({type:b.ofType(p),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),r([l({value:null,json:{read:{source:"name",reader:t=>j(t)}}})],a.prototype,"title",void 0),r([l({value:!0})],a.prototype,"visible",null),r([h("visible",["visibility"])],a.prototype,"readVisible",null),r([l()],a.prototype,"sourceJSON",void 0),r([l()],a.prototype,"layer",void 0),a=p=r([g("esri.layers.support.KMLSublayer")],a);const O=a,D=["kml","xml"];let o=class extends R(z(A(T(J(P(K)))))){constructor(...t){super(...t),this._visibleFolders=[],this.allSublayers=new M({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=S.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([y(()=>this.sublayers,(t,e)=>{e&&e.forEach(s=>{s.parent=null,s.layer=null}),t&&t.forEach(s=>{s.parent=this,s.layer=this})},u),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}readSublayersFromItemOrWebMap(t,e){this._visibleFolders=e.visibleFolders}readSublayers(t,e,s){return w(O,e,s,this._visibleFolders)}writeSublayers(t,e){const s=[],i=t.toArray();for(;i.length;){const n=i[0];n.networkLink||(n.visible&&s.push(n.id),n.sublayers&&i.push(...n.sublayers.toArray())),i.shift()}e.visibleFolders=s}get title(){const t=this._get("title");return t&&this.originOf("title")!=="defaults"?t:this.url?C(this.url,D)||"KML":t||""}set title(t){this._set("title",t)}get visibleSublayers(){const t=this.sublayers,e=[],s=i=>{i.visible&&(e.push(i),i.sublayers&&i.sublayers.forEach(s))};return t&&t.forEach(s),e}get fullExtent(){return this._recomputeFullExtent()}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},t).catch(I).then(()=>this._fetchService(e))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(t){const e=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,t)),s=E(e.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let t=null;this.extent!=null&&(t=this.extent.clone());const e=s=>{if(s.sublayers)for(const i of s.sublayers.items)e(i),i.visible&&i.fullExtent&&(t!=null?t.union(i.fullExtent):t=i.fullExtent.clone())};return e(this),t}};r([l({readOnly:!0})],o.prototype,"allSublayers",void 0),r([l({type:S})],o.prototype,"outSpatialReference",void 0),r([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),r([l({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),r([l({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),r([l({type:["KML"]})],o.prototype,"operationalLayerType",void 0),r([l({})],o.prototype,"resourceInfo",void 0),r([l({type:b.ofType(O),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),r([h(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null),r([h("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null),r([N("sublayers")],o.prototype,"writeSublayers",null),r([l({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null),r([l(V)],o.prototype,"url",void 0),r([l({readOnly:!0})],o.prototype,"visibleSublayers",null),r([l({type:d})],o.prototype,"extent",void 0),r([l()],o.prototype,"fullExtent",null),o=r([g("esri.layers.KMLLayer")],o);const xt=o;export{xt as default};