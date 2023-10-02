import{a as t,b as p,c as m}from"./index-7963d4d4.js";import a from"./FeatureLayerView2D-18d75c2a.js";import"./Container-befcc23e.js";import"./parser-554850ab.js";import"./definitions-4190f5ba.js";import"./enums-b14466b3.js";import"./Texture-e38be9d6.js";import"./FeatureEffect-807f136d.js";import"./jsonUtils-1f71c911.js";import"./Query-9b208b7c.js";import"./Field-d77a8215.js";import"./fieldType-673942bd.js";import"./FeatureSet-dbb0e0b5.js";import"./LayerView-3efe014e.js";import"./AttributeStoreView-ca2862eb.js";import"./TiledDisplayObject-82b4a106.js";import"./LabelClass-3855bc1c.js";import"./labelUtils-29518584.js";import"./defaultsJSON-b087dd4d.js";import"./featureFlags-170ded2f.js";import"./diffUtils-c3909250.js";import"./labelingInfo-57ed1c35.js";import"./color-d3e8ab8e.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-3dae3c93.js";import"./VertexArrayObject-ebe38004.js";import"./ProgramTemplate-ab52180b.js";import"./GeometryUtils-a033350a.js";import"./heatmapUtils-c2534201.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-3cfd4c3d.js";import"./featureConversionUtils-b964f182.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-0d14d0fe.js";import"./ExpandedCIM-c79660a9.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-7e5c14d1.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-553ec169.js";import"./floatRGBA-fe98b328.js";import"./clusterUtils-329049e2.js";import"./SizeVariable-30352570.js";import"./colorRamps-4a2c033a.js";import"./LegendOptions-abb39b11.js";import"./lengthUtils-3299f41f.js";import"./util-bfebac90.js";import"./BitmapTileContainer-31dfd530.js";import"./Bitmap-6ebd9187.js";import"./TileContainer-a7d277aa.js";import"./CircularArray-ef508845.js";import"./BufferPool-d93e55c1.js";import"./FeatureContainer-95c48ed6.js";import"./commonProperties-6814a39e.js";import"./ElevationInfo-ee94dcc6.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-ddd57d6e.js";import"./RefreshableLayerView-f654c5c1.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(e=>e.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([m("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([m("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const wr=o;export{wr as default};