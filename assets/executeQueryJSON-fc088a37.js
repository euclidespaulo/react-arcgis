import{ax as i}from"./index-cc0ee9b2.js";import{m as c}from"./query-acd694de.js";import{d as e}from"./FeatureSet-a5d2b0a7.js";import{b as s}from"./Query-39fea8fb.js";async function y(r,o,t){const a=await p(r,o,t);return e.fromJSON(a)}async function p(r,o,t){const a=i(r),m={...t},n=s.from(o),{data:f}=await c(a,n,n.sourceSpatialReference,m);return f}export{p as a,y as s};
