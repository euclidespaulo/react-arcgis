import{d as s,s as p,a as r,b as a,c as m}from"./index-7963d4d4.js";import{a as h}from"./BitmapContainer-9b6733bc.js";import{f as n,d}from"./LayerView-3efe014e.js";import{v as c}from"./ExportStrategy-70579e0e.js";import{a as g}from"./RefreshableLayerView-f654c5c1.js";import"./WGLContainer-3dae3c93.js";import"./definitions-4190f5ba.js";import"./VertexArrayObject-ebe38004.js";import"./Texture-e38be9d6.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-d3e8ab8e.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-ab52180b.js";import"./GeometryUtils-a033350a.js";import"./heatmapUtils-c2534201.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-befcc23e.js";import"./parser-554850ab.js";import"./earcut-3cfd4c3d.js";import"./featureConversionUtils-b964f182.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Bitmap-6ebd9187.js";let t=class extends g(n(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const G=t;export{G as default};