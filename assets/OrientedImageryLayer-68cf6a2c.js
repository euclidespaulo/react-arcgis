import{a as r,b as t,c as d,U as y}from"./index-a26e98ab.js";import{B as n}from"./FeatureLayer-288888d6.js";import"./UniqueValueRenderer-d2af26fd.js";import"./LegendOptions-a86e5b35.js";import"./diffUtils-9fa31343.js";import"./SizeVariable-5d9d8acc.js";import"./colorRamps-d2fd7542.js";import"./lengthUtils-7c024139.js";import"./ColorStop-dce0028a.js";import"./featureFlags-16b1389e.js";import"./styleUtils-2b465ce9.js";import"./jsonUtils-1dd2b4d8.js";import"./DictionaryLoader-436b190a.js";import"./LRUCache-d3e18b51.js";import"./FieldsIndex-b036a266.js";import"./heatmapUtils-f6e6c33e.js";import"./vec4f64-aa64c7e9.js";import"./MultiOriginJSONSupport-22dda0e4.js";import"./LabelClass-6bea0e41.js";import"./labelUtils-3735a12d.js";import"./defaultsJSON-b087dd4d.js";import"./FeatureLayerBase-86cbd791.js";import"./Field-e0151ddf.js";import"./fieldType-ca0e5c42.js";import"./commonProperties-b510eaa4.js";import"./ElevationInfo-724ed470.js";import"./featureLayerUtils-89dae7ca.js";import"./AttachmentQuery-ed334db8.js";import"./Query-bc8c811c.js";import"./RelationshipQuery-2a4659d6.js";import"./serviceCapabilitiesUtils-91ea42cd.js";import"./queryZScale-aad5333e.js";import"./FeatureSet-af8e9871.js";import"./APIKeyMixin-64deb976.js";import"./ArcGISService-fee92b3d.js";import"./BlendLayer-3f004e5c.js";import"./jsonUtils-a00688b5.js";import"./parser-ce394cd3.js";import"./CustomParametersMixin-2e27dbc4.js";import"./FeatureEffectLayer-e233c148.js";import"./FeatureEffect-e87396b9.js";import"./FeatureReductionLayer-335b39e3.js";import"./clusterUtils-f11e08f0.js";import"./OperationalLayer-2a2adf8f.js";import"./OrderedLayer-339ded15.js";import"./PortalLayer-a515f725.js";import"./portalItemUtils-ba315a46.js";import"./RefreshableLayer-357b8e2e.js";import"./ScaleRangeLayer-b9e42dfc.js";import"./TemporalLayer-3e6dd18a.js";import"./FeatureTemplate-8c242fbb.js";import"./FeatureType-800c4020.js";import"./fieldProperties-3a8267fe.js";import"./labelingInfo-93f1793b.js";import"./versionUtils-2b0448e1.js";import"./styleUtils-e5780e46.js";import"./TopFeaturesQuery-48dc5382.js";import"./popupUtils-eb61fc31.js";function o(i){return(a,m,s)=>{if(!a)return null;const p=a[0].orientedImageryProperties;return(p==null?void 0:p[i])??null}}let e=class extends n{constructor(){super(...arguments),this.geometryType="point",this.operationalLayerType="OrientedImageryLayer",this.type="oriented-imagery"}get effectiveElevationSource(){var p;const{elevationSource:i,demPathPrefix:a,demPathSuffix:m}=this;if(!((p=i==null?void 0:i.url)!=null&&p.trim()))return i;let s=i.url.trim();return a!=null&&a.trim()&&(s=`${a.trim()}/${s}`),m!=null&&m.trim()&&(s+=`/${m.trim()}`),{...i,url:s}}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new y("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("cameraHeading")}}})],e.prototype,"cameraHeading",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("cameraHeight")}}})],e.prototype,"cameraHeight",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("cameraPitch")}}})],e.prototype,"cameraPitch",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("cameraRoll")}}})],e.prototype,"cameraRoll",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("coveragePercent")}}})],e.prototype,"coveragePercent",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("demPathPrefix")}}})],e.prototype,"demPathPrefix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("demPathSuffix")}}})],e.prototype,"demPathSuffix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("depthImagePathPrefix")}}})],e.prototype,"depthImagePathPrefix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("depthImagePathSuffix")}}})],e.prototype,"depthImagePathSuffix",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("farDistance")}}})],e.prototype,"farDistance",void 0),r([t({json:{write:!0}})],e.prototype,"geometryType",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("horizontalFieldOfView")}}})],e.prototype,"horizontalFieldOfView",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("horizontalMeasurementUnit")}}})],e.prototype,"horizontalMeasurementUnit",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("imagePathPrefix")}}})],e.prototype,"imagePathPrefix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("imagePathSuffix")}}})],e.prototype,"imagePathSuffix",void 0),r([t({json:{type:Number,write:!0,read:{source:"layers",reader:o("imageRotation")}}})],e.prototype,"imageRotation",void 0),r([t({type:Number,json:{write:!0,read:{source:"layers",reader:o("maximumDistance")}}})],e.prototype,"maximumDistance",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("nearDistance")}}})],e.prototype,"nearDistance",void 0),r([t({type:["OrientedImageryLayer"]})],e.prototype,"operationalLayerType",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("orientedImageryType")}}})],e.prototype,"orientedImageryType",void 0),r([t({json:{read:!1},value:"oriented-imagery",readOnly:!0})],e.prototype,"type",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("verticalFieldOfView")}}})],e.prototype,"verticalFieldOfView",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("verticalMeasurementUnit")}}})],e.prototype,"verticalMeasurementUnit",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("videoPathPrefix")}}})],e.prototype,"videoPathPrefix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("videoPathSuffix")}}})],e.prototype,"videoPathSuffix",void 0),r([t({json:{write:!0,read:{source:"layers",reader:o("elevationSource")}}})],e.prototype,"elevationSource",void 0),r([t()],e.prototype,"effectiveElevationSource",null),e=r([d("esri.layers.OrientedImageryLayer")],e);const fe=e;export{fe as default};