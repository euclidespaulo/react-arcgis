import{d as s,s as p,a as r,b as a,c as m}from"./index-cc0ee9b2.js";import{a as h}from"./BitmapContainer-fe6e3851.js";import{f as n,d}from"./LayerView-9a13043e.js";import{v as c}from"./ExportStrategy-bd33f5a9.js";import{a as g}from"./RefreshableLayerView-fa03773e.js";import"./WGLContainer-7ef41b2a.js";import"./definitions-a1a4a3f0.js";import"./VertexArrayObject-543ec7e5.js";import"./Texture-5990832d.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-a4a9afe7.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-21b8f5f6.js";import"./GeometryUtils-6eab8caf.js";import"./heatmapUtils-8f838e1c.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-be4e1fda.js";import"./parser-7cb9f852.js";import"./earcut-046ea0be.js";import"./featureConversionUtils-21ed310a.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Bitmap-d040d28f.js";let t=class extends g(n(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const G=t;export{G as default};
