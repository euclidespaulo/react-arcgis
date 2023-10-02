import{l,f as h,V as g,k as f,a as w,c as d}from"./index-a26e98ab.js";import{t as u,p as n}from"./jsonUtils-1dd2b4d8.js";import{d as V}from"./FeatureSet-af8e9871.js";import{f as b,d as S}from"./LayerView-4592d96d.js";import{i as _}from"./GraphicContainer-e859f01a.js";import{o as T}from"./GraphicsView2D-64fe09ce.js";import"./UniqueValueRenderer-d2af26fd.js";import"./LegendOptions-a86e5b35.js";import"./diffUtils-9fa31343.js";import"./SizeVariable-5d9d8acc.js";import"./colorRamps-d2fd7542.js";import"./lengthUtils-7c024139.js";import"./ColorStop-dce0028a.js";import"./featureFlags-16b1389e.js";import"./styleUtils-2b465ce9.js";import"./DictionaryLoader-436b190a.js";import"./LRUCache-d3e18b51.js";import"./FieldsIndex-b036a266.js";import"./heatmapUtils-f6e6c33e.js";import"./vec4f64-aa64c7e9.js";import"./Field-e0151ddf.js";import"./fieldType-ca0e5c42.js";import"./Container-59a6e30f.js";import"./parser-ce394cd3.js";import"./definitions-488e84f0.js";import"./enums-b14466b3.js";import"./Texture-cc756a21.js";import"./color-1e18bdac.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-639b3c8c.js";import"./FeatureContainer-bea49602.js";import"./AttributeStoreView-3c9a7542.js";import"./TiledDisplayObject-04be7531.js";import"./LabelClass-6bea0e41.js";import"./labelUtils-3735a12d.js";import"./defaultsJSON-b087dd4d.js";import"./labelingInfo-93f1793b.js";import"./WGLContainer-6872b593.js";import"./VertexArrayObject-eb7bfefa.js";import"./ProgramTemplate-cc521a01.js";import"./GeometryUtils-fd046837.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-442283ab.js";import"./featureConversionUtils-017d5cd7.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-47ec8279.js";import"./ExpandedCIM-e13246c2.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-58b41238.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-abbc9471.js";import"./floatRGBA-487247ff.js";import"./clusterUtils-f11e08f0.js";import"./util-de37cc50.js";import"./TileContainer-4201b8a8.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtils-9b68c844.js";import"./normalizeUtilsCommon-5787e1d1.js";import"./normalizeUtilsSync-1ef3adf0.js";import"./projectionSupport-b16d8eb4.js";import"./json-48e3ea08.js";import"./Matcher-29b415a9.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-eaed12fc.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-2a6cabe5.js";import"./ComputedAttributeStorage-04bd3dbb.js";import"./arcadeTimeUtils-767f88ec.js";import"./executionError-c92d3b85.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,o){if(!this.graphicsViews.length)return null;const e=this.layer;return this.graphicsViews.reverse().map(r=>{const t=this._popupTemplates.get(r),s=r.hitTest(i);for(const p of s)p.layer=e,p.sourceLayer=e,p.popupTemplate=t;return s}).flat().map(r=>({type:"graphic",graphic:r,layer:e,mapPoint:i}))}update(i){if(this.graphicsViews)for(const o of this.graphicsViews)o.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:o,featureSet:e,layerDefinition:r}of i){const t=V.fromJSON(e),s=new g(t.features),p=r.drawingInfo,c=o?f.fromJSON(o):null,m=u(p.renderer),a=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:m,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=a,this._popupTemplates.set(a,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=m.symbol):this.layer.lineSymbol=m.symbol:this.layer.polygonSymbol=m.symbol,this.graphicsViews.push(a),this.container.addChild(a.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=w([d("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Ri=y;export{Ri as default};