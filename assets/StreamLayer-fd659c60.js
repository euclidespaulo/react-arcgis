import{a as t,b as r,c as b,ao as T,O as I,U as d,a7 as P,ew as u,s as F,_,el as y,dC as D,a2 as k,ex as O,as as E,au as f,k as C,ay as g,bn as U}from"./index-7963d4d4.js";import"./UniqueValueRenderer-d9c6adaa.js";import{o as N,a as A,n as L}from"./jsonUtils-55a27fb8.js";import{O as G}from"./MultiOriginJSONSupport-83229f36.js";import{l as J}from"./ArcGISService-adb6121f.js";import{a as M}from"./BlendLayer-67be0a8f.js";import{o as V}from"./CustomParametersMixin-a393e1d0.js";import{p as z}from"./FeatureEffectLayer-c295b13e.js";import{n as W}from"./FeatureReductionLayer-e3fd7e7c.js";import{c as q}from"./OperationalLayer-3a2f433d.js";import{j as Q}from"./PortalLayer-92877bf2.js";import{p as H}from"./RefreshableLayer-2eb6c233.js";import{t as K}from"./ScaleRangeLayer-b13c2b3b.js";import{a as X}from"./TemporalLayer-d4a7784e.js";import{m as B,c as Y,D as Z,I as ee,p as te,l as ie,f as re}from"./commonProperties-6814a39e.js";import{v as oe}from"./featureLayerUtils-0208ea7a.js";import{y as se}from"./Field-d77a8215.js";import{s as ne}from"./fieldProperties-6658abf8.js";import{C as ae}from"./LabelClass-3855bc1c.js";import{i as pe}from"./labelingInfo-57ed1c35.js";import{t as le}from"./styleUtils-46a7eba5.js";import{b as de}from"./Query-9b208b7c.js";import{p as me}from"./popupUtils-5de65a0b.js";import{h as ce}from"./ElevationInfo-ee94dcc6.js";import"./LegendOptions-abb39b11.js";import"./diffUtils-c3909250.js";import"./SizeVariable-30352570.js";import"./colorRamps-4a2c033a.js";import"./lengthUtils-3299f41f.js";import"./ColorStop-9a1877a7.js";import"./featureFlags-170ded2f.js";import"./styleUtils-90aa8275.js";import"./DictionaryLoader-3032dcef.js";import"./LRUCache-50962364.js";import"./FieldsIndex-86e1c691.js";import"./heatmapUtils-c2534201.js";import"./vec4f64-aa64c7e9.js";import"./jsonUtils-1f71c911.js";import"./parser-554850ab.js";import"./FeatureEffect-807f136d.js";import"./clusterUtils-329049e2.js";import"./portalItemUtils-abfce48b.js";import"./AttachmentQuery-f2e0d44e.js";import"./RelationshipQuery-6ab43a24.js";import"./fieldType-673942bd.js";import"./labelUtils-29518584.js";import"./defaultsJSON-b087dd4d.js";var h;let p=h=class extends T{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new h({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([r({type:Number,json:{write:!0}})],p.prototype,"age",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"ageReceived",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"displayCount",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"maxObservations",void 0),p=h=t([b("esri.layers.support.PurgeOptions")],p);const S=p,v=ne();function w(e,o){return new d("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${o}`,{layer:e})}let i=class extends W(z(M(X(K(H(J(q(Q(G(V(U))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new S,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=I.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const o=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(P).then(()=>this._fetchService(o))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const o=this._normalizeFeatureReduction(e);this._set("featureReduction",o)}set renderer(e){u(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,o,s){var n;o=o.layerDefinition||o;const a=(n=o.drawingInfo)==null?void 0:n.renderer;if(a){const l=N(a,o,s)||void 0;return l||F.getLogger(this).error("Failed to create renderer",{rendererDefinition:o.drawingInfo.renderer,layer:this,context:s}),l}return oe(o,s)}async connect(e){const[{createConnection:o}]=await Promise.all([_(()=>import("./createConnection-f8d32748.js"),["assets/createConnection-f8d32748.js","assets/index-7963d4d4.js","assets/index-530e9757.css","assets/query-1a324482.js","assets/normalizeUtils-177a2192.js","assets/normalizeUtilsCommon-062a2641.js","assets/pbfQueryUtils-88730ed8.js","assets/pbf-5049679b.js","assets/OptimizedGeometry-33b2eb0d.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/queryZScale-b61e2d05.js","assets/Query-9b208b7c.js","assets/Field-d77a8215.js","assets/fieldType-673942bd.js"]),this.load()]),s=this.geometryType?y.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:l=null,maxReconnectionAttempts:x=0,maxReconnectionInterval:R=20,spatialReference:$=this.spatialReference}=e||this.createConnectionParameters(),m=o(this.parsedUrl,this.spatialReference,$,s,{geometry:l,where:n},x,R,a??void 0),j=D([this.on("send-message-to-socket",c=>m.sendMessageToSocket(c)),this.on("send-message-to-client",c=>m.sendMessageToClient(c))]);return m.once("destroy",j.remove),m}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return me(this,e)}createQuery(){const e=new de;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,o){if(!this.fields)return null;let s=null;return this.fields.some(a=>(a.name===e&&(s=a.domain),!!s)),s}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}write(e,o){const s=o==null?void 0:o.messages;return this.webSocketUrl?(s==null||s.push(w(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,o):(s==null||s.push(w(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var o,s,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await k(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((o=this.timeInfo)!=null&&o.trackIdField))throw new d("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(s=this.fields.find(l=>l.type==="oid"))==null?void 0:s.name;if(!n)throw new d("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new d("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new se({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new d("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),u(this.renderer,this.fieldsIndex),O(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),le(this,{origin:"service"})}};t([r({type:String})],i.prototype,"copyright",void 0),t([r({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r({type:String})],i.prototype,"displayField",void 0),t([r({type:ce})],i.prototype,"elevationInfo",void 0),t([r({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],i.prototype,"featureReduction",null),t([r(v.fields)],i.prototype,"fields",void 0),t([r(v.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([r({type:E,json:{name:"layerDefinition.definitionGeometry",write:!0}})],i.prototype,"geometryDefinition",void 0),t([r({type:y.apiValues,json:{read:{reader:y.read}}})],i.prototype,"geometryType",void 0),t([r(B)],i.prototype,"labelsVisible",void 0),t([r({type:[ae],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:pe},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],i.prototype,"labelingInfo",void 0),t([r(Y)],i.prototype,"legendEnabled",void 0),t([r({type:["show","hide"]})],i.prototype,"listMode",void 0),t([r({type:f})],i.prototype,"maxReconnectionAttempts",void 0),t([r({type:f})],i.prototype,"maxReconnectionInterval",void 0),t([r(Z)],i.prototype,"maxScale",void 0),t([r(ee)],i.prototype,"minScale",void 0),t([r({type:String})],i.prototype,"objectIdField",void 0),t([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([r(te)],i.prototype,"popupEnabled",void 0),t([r({type:C,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([r({type:S})],i.prototype,"purgeOptions",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"refreshInterval",void 0),t([r({types:A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:L,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([g("service","renderer",["drawingInfo.renderer","defaultSymbol"]),g("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([r(ie)],i.prototype,"screenSizePerspectiveEnabled",void 0),t([r()],i.prototype,"sourceJSON",void 0),t([r({type:I,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([r({json:{read:!1}})],i.prototype,"type",void 0),t([r(re)],i.prototype,"url",void 0),t([r({type:Number})],i.prototype,"updateInterval",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"useViewTime",void 0),t([r({type:String})],i.prototype,"webSocketUrl",void 0),i=t([b("esri.layers.StreamLayer")],i);const nt=i;export{nt as default};