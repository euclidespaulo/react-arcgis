import{a,b as o,c as f,Q as T,d as _,s as P,j as b,cI as I,as as B,df as z,l as x,eC as R,a2 as U,U as V,ap as E,i as A,ds as $,V as S}from"./index-7963d4d4.js";import{d as C,f as M,h as O}from"./RasterVFDisplayObject-44f4176b.js";import{f as N,d as j}from"./LayerView-3efe014e.js";import{o as J}from"./GraphicsView2D-5ca51403.js";import{n as L}from"./HighlightGraphicContainer-c0aac09d.js";import{M as G,m as H,f as W}from"./dataUtils-70ab71e7.js";import{a as Q}from"./BitmapContainer-9b6733bc.js";import{h as K}from"./Container-befcc23e.js";import{l as X}from"./Bitmap-6ebd9187.js";import{v as Y}from"./ExportStrategy-70579e0e.js";import{q as Z}from"./rasterProjectionHelper-65eca283.js";import{T as q}from"./color-d3e8ab8e.js";import{i as tt}from"./WGLContainer-3dae3c93.js";import{b as et}from"./commonProperties-6814a39e.js";import{b as it}from"./Query-9b208b7c.js";import{p as rt}from"./popupUtils-ddd57d6e.js";import{a as st}from"./RefreshableLayerView-f654c5c1.js";import"./VertexArrayObject-ebe38004.js";import"./Texture-e38be9d6.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./ExpandedCIM-c79660a9.js";import"./BidiEngine-9a40f2f4.js";import"./OptimizedGeometry-33b2eb0d.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./utils-7e5c14d1.js";import"./GeometryUtils-a033350a.js";import"./definitions-4190f5ba.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-553ec169.js";import"./floatRGBA-fe98b328.js";import"./normalizeUtilsSync-5b9d123d.js";import"./normalizeUtilsCommon-062a2641.js";import"./projectionSupport-41108da0.js";import"./json-48e3ea08.js";import"./LabelClass-3855bc1c.js";import"./labelUtils-29518584.js";import"./defaultsJSON-b087dd4d.js";import"./featureFlags-170ded2f.js";import"./AttributeStoreView-ca2862eb.js";import"./TiledDisplayObject-82b4a106.js";import"./diffUtils-c3909250.js";import"./labelingInfo-57ed1c35.js";import"./visualVariablesUtils-0d14d0fe.js";import"./clusterUtils-329049e2.js";import"./SizeVariable-30352570.js";import"./colorRamps-4a2c033a.js";import"./LegendOptions-abb39b11.js";import"./lengthUtils-3299f41f.js";import"./util-bfebac90.js";import"./Matcher-4a921192.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-bd7d5d5c.js";import"./earcut-3cfd4c3d.js";import"./LRUCache-50962364.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-90aa8275.js";import"./webStyleSymbolUtils-60ad02c8.js";import"./ComputedAttributeStorage-0c5a6941.js";import"./featureConversionUtils-b964f182.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./FieldsIndex-86e1c691.js";import"./arcadeTimeUtils-354ea643.js";import"./executionError-c92d3b85.js";import"./normalizeUtils-177a2192.js";import"./BaseGraphicContainer-0ab44722.js";import"./FeatureContainer-95c48ed6.js";import"./TileContainer-a7d277aa.js";import"./vec3f32-ad1dc57f.js";import"./parser-554850ab.js";import"./ProgramTemplate-ab52180b.js";import"./heatmapUtils-c2534201.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./ElevationInfo-ee94dcc6.js";import"./Field-d77a8215.js";import"./fieldType-673942bd.js";let h=class extends T{constructor(){super(...arguments),this.attached=!1,this.container=new K,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Q}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(e=>{_(e)||P.getLogger(this).error(e)})}hitTest(t){return new b({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new Y({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:e.extent}}).catch(t=>{_(t)||P.getLogger(this).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map(s=>s.source).filter(s=>s.extent&&s.extent.intersects(e)).map(s=>({extent:s.extent,pixelBlock:s.originalPixelBlock})),r=G(i,e);return r!=null?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){var d;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(t,e,i,r);if(s.imageBitmap)return s.imageBitmap;const n=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),l=new X(n.pixelBlock,(d=n.extent)==null?void 0:d.clone(),s.pixelData.pixelBlock);return l.filter=p=>this.layer.applyFilter(p),l}};a([o()],h.prototype,"attached",void 0),a([o()],h.prototype,"container",void 0),a([o()],h.prototype,"layer",void 0),a([o()],h.prototype,"strategy",void 0),a([o()],h.prototype,"timeExtent",void 0),a([o()],h.prototype,"view",void 0),a([o()],h.prototype,"updateRequested",void 0),a([o()],h.prototype,"updating",null),a([o()],h.prototype,"type",void 0),h=a([f("esri.views.2d.layers.imagery.ImageryView2D")],h);const at=h;class ot extends tt{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[C],target:()=>this.children,drawPhase:q.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===q.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let y=class extends T{constructor(t){super(t),this._loading=null,this.update=I((e,i)=>this._update(e,i).catch(r=>{_(r)||P.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:s}=t.state,n=new B({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[l,d]=t.state.size;this._loading=this.fetchPixels(n,l,d,i);const p=await this._loading;this._addToDisplay(p,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(t.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=t,n=new M(s);n.offset=[0,0],n.symbolizerParameters=e,n.rawPixelData=t,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=s.width*e.symbolTileSize,n.height=s.height*e.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};a([o()],y.prototype,"fetchPixels",void 0),a([o()],y.prototype,"container",void 0),a([o()],y.prototype,"_loading",void 0),a([o()],y.prototype,"updating",null),y=a([f("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const nt=y;let m=class extends z{constructor(){super(...arguments),this.attached=!1,this.container=new ot,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:l,width:d,height:p}=H(t,e,i,n,s);if(s!=null&&!s.intersects(t))return{extent:l,pixelBlock:null};const c={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(c)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===c.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,d,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=c;const w=g==null?void 0:g.pixelBlock;return w==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?W(w,"vector-uv"):w}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new nt({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(x(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),R),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const t=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new b({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams)}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,s=this._dataParameters.bbox===t.bbox;return e&&i&&r&&s}async _getProjectedFullExtent(t){try{return await Z(this.layer.fullExtent,t)}catch{try{const i=(await U(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?B.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};a([o()],m.prototype,"attached",void 0),a([o()],m.prototype,"container",void 0),a([o()],m.prototype,"layer",void 0),a([o()],m.prototype,"timeExtent",void 0),a([o()],m.prototype,"type",void 0),a([o()],m.prototype,"view",void 0),a([o()],m.prototype,"updating",null),m=a([f("esri.views.2d.layers.imagery.VectorFieldView2D")],m);const lt=m,ht=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,r){const{layer:s}=this;if(!i)throw new V("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:n}=s,l=rt(s,r);if(!n||l==null)throw new V("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const d=await l.getRequiredFields(),p=new it;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=d,p.outSpatialReference=i.spatialReference;const{resolution:c,spatialReference:g}=this.view,w=this.view.type==="2d"?new E(c,c,g):new E(.5*c,.5*c,g),{returnTopmostRaster:u,showNoDataRecords:D}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:w,showNoDataRecords:D,signal:r!=null?r.signal:null};return s.queryVisibleRasters(p,k).then(F=>F)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return a([o()],e.prototype,"layer",void 0),a([o()],e.prototype,"suspended",void 0),a([o(et)],e.prototype,"timeExtent",void 0),a([o()],e.prototype,"view",void 0),e=a([f("esri.views.layers.ImageryLayerView")],e),e};let v=class extends ht(st(N(j))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new A,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}async hitTest(t,e){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(t),layer:this.layer,mapPoint:t}]:null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new J({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new L(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([x(()=>this.layer.blendMode??"normal",t=>this.subview&&(this.subview.container.blendMode=t),R),x(()=>this.layer.effect??null,t=>this.subview&&(this.subview.container.effect=t),R),x(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},$),x(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},$),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),x(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:S.isCollection(t)?t.at(0):t)instanceof b))return{remove:()=>{}};let i=[];return Array.isArray(t)||S.isCollection(t)?i=t.map(r=>r.clone()):t instanceof b&&(i=[t.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:s}=this.subview;if(s===e)return this._attachSubview(this.subview),void(s==="flow"?this.subview.redrawOrRefetch():s==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new at({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new lt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new O({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0),t.container.blendMode=this.layer.blendMode,t.container.effect=this.layer.effect)}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};a([o()],v.prototype,"pixelData",null),a([o()],v.prototype,"subview",void 0),v=a([f("esri.views.2d.layers.ImageryLayerView2D")],v);const Ie=v;export{Ie as default};