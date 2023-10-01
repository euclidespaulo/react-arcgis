import{g as s,j as o,V as a,R as m,a as p,b as g,c as l}from"./index-cc0ee9b2.js";import{f as c,d as n}from"./LayerView-9a13043e.js";import{i as d}from"./GraphicContainer-45b8a6d4.js";import{o as u}from"./GraphicsView2D-b512fcb0.js";import"./Container-be4e1fda.js";import"./parser-7cb9f852.js";import"./definitions-a1a4a3f0.js";import"./enums-b14466b3.js";import"./Texture-5990832d.js";import"./color-a4a9afe7.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-8f673372.js";import"./FeatureContainer-75ff3578.js";import"./AttributeStoreView-2f159b09.js";import"./TiledDisplayObject-a281f45f.js";import"./LabelClass-889faf92.js";import"./labelUtils-1b17ff16.js";import"./defaultsJSON-b087dd4d.js";import"./featureFlags-b7471751.js";import"./diffUtils-232a480c.js";import"./labelingInfo-48e3897a.js";import"./WGLContainer-7ef41b2a.js";import"./VertexArrayObject-543ec7e5.js";import"./ProgramTemplate-21b8f5f6.js";import"./GeometryUtils-6eab8caf.js";import"./heatmapUtils-8f838e1c.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-046ea0be.js";import"./featureConversionUtils-21ed310a.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-bc394404.js";import"./ExpandedCIM-96c68dce.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-a1be5c9b.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-dec0b0c6.js";import"./floatRGBA-b70dad87.js";import"./clusterUtils-d9d6aed2.js";import"./SizeVariable-c56811d6.js";import"./colorRamps-756b6677.js";import"./LegendOptions-a48dfe3c.js";import"./lengthUtils-80770c4f.js";import"./util-910d5068.js";import"./TileContainer-614ad5dc.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtils-9942c350.js";import"./normalizeUtilsCommon-5daab86a.js";import"./normalizeUtilsSync-77d17e82.js";import"./projectionSupport-3798f02e.js";import"./json-48e3ea08.js";import"./Matcher-1c0902db.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-3a1c2e37.js";import"./LRUCache-347f2d39.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-26d43f85.js";import"./webStyleSymbolUtils-caa3c2e6.js";import"./ComputedAttributeStorage-ddbc533f.js";import"./FieldsIndex-05a45e5a.js";import"./arcadeTimeUtils-2a0a8943.js";import"./executionError-c92d3b85.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(n){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=s(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof o?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):a.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(m);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};p([g()],e.prototype,"graphicsView",void 0),e=p([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const qi=e;export{qi as default};
