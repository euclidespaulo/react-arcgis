import{a as l,c as d,l as u,f as y,v as h}from"./index-cc0ee9b2.js";import{d as c}from"./FeatureEffect-5ae8ceff.js";import b from"./FeatureLayerView2D-ad339516.js";import"./jsonUtils-ac963ed3.js";import"./parser-7cb9f852.js";import"./Query-39fea8fb.js";import"./Field-bf5ace58.js";import"./fieldType-a8735abb.js";import"./Container-be4e1fda.js";import"./definitions-a1a4a3f0.js";import"./enums-b14466b3.js";import"./Texture-5990832d.js";import"./FeatureSet-a5d2b0a7.js";import"./LayerView-9a13043e.js";import"./AttributeStoreView-2f159b09.js";import"./TiledDisplayObject-a281f45f.js";import"./LabelClass-889faf92.js";import"./labelUtils-1b17ff16.js";import"./defaultsJSON-b087dd4d.js";import"./featureFlags-b7471751.js";import"./diffUtils-232a480c.js";import"./labelingInfo-48e3897a.js";import"./color-a4a9afe7.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-7ef41b2a.js";import"./VertexArrayObject-543ec7e5.js";import"./ProgramTemplate-21b8f5f6.js";import"./GeometryUtils-6eab8caf.js";import"./heatmapUtils-8f838e1c.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-046ea0be.js";import"./featureConversionUtils-21ed310a.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-bc394404.js";import"./ExpandedCIM-96c68dce.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-a1be5c9b.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-dec0b0c6.js";import"./floatRGBA-b70dad87.js";import"./clusterUtils-d9d6aed2.js";import"./SizeVariable-c56811d6.js";import"./colorRamps-756b6677.js";import"./LegendOptions-a48dfe3c.js";import"./lengthUtils-80770c4f.js";import"./util-910d5068.js";import"./BitmapTileContainer-37b7de65.js";import"./Bitmap-d040d28f.js";import"./TileContainer-614ad5dc.js";import"./CircularArray-ef508845.js";import"./BufferPool-86bc1ff0.js";import"./FeatureContainer-75ff3578.js";import"./commonProperties-2a96b451.js";import"./ElevationInfo-18e9ce10.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-7c49fd0a.js";import"./RefreshableLayerView-fa03773e.js";function g(e,i){return!e.visible||e.minScale!==0&&i>e.minScale||e.maxScale!==0&&i<e.maxScale}let p=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var m;const e=this.layer.sublayers.some(a=>a.renderer!=null),i=this._commandsQueue.updating,o=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,s=this.tileRenderer==null||((m=this.tileRenderer)==null?void 0:m.updating),n=e&&(i||o||t||r||s);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}
  -> hasRenderer ${e}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${s}
`),n}_injectOverrides(e){let i=super._injectOverrides(e);const o=this.view.scale,t=this.layer.sublayers.filter(s=>g(s,o)).map(s=>s.subtypeCode);if(!t.length)return i;i=i??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return i.where=i.where?`(${i.where}) AND (${r})`:r,i}_setLayersForFeature(e){const i=this.layer.fieldsIndex.get(this.layer.subtypeField),o=e.attributes[i.name],t=this.layer.sublayers.find(r=>r.subtypeCode===o);e.layer=e.sourceLayer=t}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},i=this.layer.sublayers.map(r=>r.subtypeCode).join(","),o=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${i})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=o,{...super._createSchemaConfig(),...e,definitionExpression:t}}};p=l([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],p);const Si=p;export{Si as default};
