import{a as l,c as d,l as u,f as y,v as h}from"./index-a26e98ab.js";import{d as c}from"./FeatureEffect-e87396b9.js";import b from"./FeatureLayerView2D-243204c0.js";import"./jsonUtils-a00688b5.js";import"./parser-ce394cd3.js";import"./Query-bc8c811c.js";import"./Field-e0151ddf.js";import"./fieldType-ca0e5c42.js";import"./Container-59a6e30f.js";import"./definitions-488e84f0.js";import"./enums-b14466b3.js";import"./Texture-cc756a21.js";import"./FeatureSet-af8e9871.js";import"./LayerView-4592d96d.js";import"./AttributeStoreView-3c9a7542.js";import"./TiledDisplayObject-04be7531.js";import"./LabelClass-6bea0e41.js";import"./labelUtils-3735a12d.js";import"./defaultsJSON-b087dd4d.js";import"./featureFlags-16b1389e.js";import"./diffUtils-9fa31343.js";import"./labelingInfo-93f1793b.js";import"./color-1e18bdac.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-6872b593.js";import"./VertexArrayObject-eb7bfefa.js";import"./ProgramTemplate-cc521a01.js";import"./GeometryUtils-fd046837.js";import"./heatmapUtils-f6e6c33e.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-442283ab.js";import"./featureConversionUtils-017d5cd7.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-47ec8279.js";import"./ExpandedCIM-e13246c2.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-58b41238.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-abbc9471.js";import"./floatRGBA-487247ff.js";import"./clusterUtils-f11e08f0.js";import"./SizeVariable-5d9d8acc.js";import"./colorRamps-d2fd7542.js";import"./LegendOptions-a86e5b35.js";import"./lengthUtils-7c024139.js";import"./util-de37cc50.js";import"./BitmapTileContainer-5e43d6f0.js";import"./Bitmap-7cc93765.js";import"./TileContainer-4201b8a8.js";import"./CircularArray-ef508845.js";import"./BufferPool-b97d3687.js";import"./FeatureContainer-bea49602.js";import"./commonProperties-b510eaa4.js";import"./ElevationInfo-724ed470.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-221d6cf0.js";import"./RefreshableLayerView-a62e0bc5.js";function g(e,i){return!e.visible||e.minScale!==0&&i>e.minScale||e.maxScale!==0&&i<e.maxScale}let p=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var m;const e=this.layer.sublayers.some(a=>a.renderer!=null),i=this._commandsQueue.updating,o=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,s=this.tileRenderer==null||((m=this.tileRenderer)==null?void 0:m.updating),n=e&&(i||o||t||r||s);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}
  -> hasRenderer ${e}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${s}
`),n}_injectOverrides(e){let i=super._injectOverrides(e);const o=this.view.scale,t=this.layer.sublayers.filter(s=>g(s,o)).map(s=>s.subtypeCode);if(!t.length)return i;i=i??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return i.where=i.where?`(${i.where}) AND (${r})`:r,i}_setLayersForFeature(e){const i=this.layer.fieldsIndex.get(this.layer.subtypeField),o=e.attributes[i.name],t=this.layer.sublayers.find(r=>r.subtypeCode===o);e.layer=e.sourceLayer=t}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},i=this.layer.sublayers.map(r=>r.subtypeCode).join(","),o=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${i})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=o,{...super._createSchemaConfig(),...e,definitionExpression:t}}};p=l([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],p);const Si=p;export{Si as default};