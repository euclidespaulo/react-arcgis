import{ax as a,as as i}from"./index-7963d4d4.js";import{p as e}from"./queryTopFeatures-a5cb35c7.js";import{S as n}from"./TopFeaturesQuery-b8d8f795.js";import"./normalizeUtils-177a2192.js";import"./normalizeUtilsCommon-062a2641.js";import"./query-1a324482.js";import"./pbfQueryUtils-88730ed8.js";import"./pbf-5049679b.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-b61e2d05.js";async function F(o,r,m){const p=a(o),t=await e(p,n.from(r),{...m});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{F as executeForTopExtents};