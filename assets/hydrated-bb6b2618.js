import{ap as r,aq as c,N as h,ar as x,as as m}from"./index-a26e98ab.js";const Z={convertToGEGeometry:p,exportPoint:g,exportPolygon:u,exportPolyline:l,exportMultipoint:M,exportExtent:f};function p(t,e){if(e==null)return null;let a="cache"in e?e.cache._geVersion:void 0;return a==null&&(a=t.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=a)),a}function g(t,e,a){const s=t.hasZ(e),i=t.hasM(e),o=new r({x:t.getPointX(e),y:t.getPointY(e),spatialReference:a});return s&&(o.z=t.getPointZ(e)),i&&(o.m=t.getPointM(e)),o.cache._geVersion=e,o}function u(t,e,a){const s=new c({rings:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:a});return s.cache._geVersion=e,s}function l(t,e,a){const s=new h({paths:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:a});return s.cache._geVersion=e,s}function M(t,e,a){const s=new x({hasZ:t.hasZ(e),hasM:t.hasM(e),points:t.exportPoints(e),spatialReference:a});return s.cache._geVersion=e,s}function f(t,e,a){const s=t.hasZ(e),i=t.hasM(e),o=new m({xmin:t.getXMin(e),ymin:t.getYMin(e),xmax:t.getXMax(e),ymax:t.getYMax(e),spatialReference:a});if(s){const n=t.getZExtent(e);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=t.getMExtent(e);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=e,o}export{Z as hydratedAdapter};