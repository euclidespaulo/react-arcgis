import{G as t}from"./geometryEngineBase-fef23fa3.js";import{hydratedAdapter as r}from"./hydrated-6cfe6f44.js";import"./index-cc0ee9b2.js";function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function g(e){return t.extendedSpatialReferenceInfo(e)}function h(e,n){return t.clip(r,i(e),e,n)}function m(e,n){return t.cut(r,i(e),e,n)}function w(e,n){return t.contains(r,i(e),e,n)}function R(e,n){return t.crosses(r,i(e),e,n)}function x(e,n,a){return t.distance(r,i(e),e,n,a)}function y(e,n){return t.equals(r,i(e),e,n)}function S(e,n){return t.intersects(r,i(e),e,n)}function A(e,n){return t.touches(r,i(e),e,n)}function D(e,n){return t.within(r,i(e),e,n)}function L(e,n){return t.disjoint(r,i(e),e,n)}function T(e,n){return t.overlaps(r,i(e),e,n)}function V(e,n,a){return t.relate(r,i(e),e,n,a)}function v(e){return t.isSimple(r,i(e),e)}function z(e){return t.simplify(r,i(e),e)}function H(e,n=!1){return t.convexHull(r,i(e),e,n)}function I(e,n){return t.difference(r,i(e),e,n)}function J(e,n){return t.symmetricDifference(r,i(e),e,n)}function N(e,n){return t.intersect(r,i(e),e,n)}function O(e,n=null){return t.union(r,i(e),e,n)}function b(e,n,a,s,c,o){return t.offset(r,i(e),e,n,a,s,c,o)}function j(e,n,a,s=!1){return t.buffer(r,i(e),e,n,a,s)}function q(e,n,a,s,c,o){return t.geodesicBuffer(r,i(e),e,n,a,s,c,o)}function B(e,n,a=!0){return t.nearestCoordinate(r,i(e),e,n,a)}function C(e,n){return t.nearestVertex(r,i(e),e,n)}function E(e,n,a,s){return t.nearestVertices(r,i(e),e,n,a,s)}function f(e){var n;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?((n=e.extent)==null?void 0:n.center)??null:null}function P(e,n,a){if(e==null)throw new u;const s=e.spatialReference;if((a=a??f(e))==null)throw new u;const c=e.constructor.fromJSON(t.rotate(e,n,a));return c.spatialReference=s,c}function G(e,n){if(e==null)throw new u;const a=e.spatialReference;if((n=n??f(e))==null)throw new u;const s=e.constructor.fromJSON(t.flipHorizontal(e,n));return s.spatialReference=a,s}function $(e,n){if(e==null)throw new u;const a=e.spatialReference;if((n=n??f(e))==null)throw new u;const s=e.constructor.fromJSON(t.flipVertical(e,n));return s.spatialReference=a,s}function k(e,n,a,s){return t.generalize(r,i(e),e,n,a,s)}function F(e,n,a){return t.densify(r,i(e),e,n,a)}function K(e,n,a,s=0){return t.geodesicDensify(r,i(e),e,n,a,s)}function M(e,n){return t.planarArea(r,i(e),e,n)}function Q(e,n){return t.planarLength(r,i(e),e,n)}function U(e,n,a){return t.geodesicArea(r,i(e),e,n,a)}function W(e,n,a){return t.geodesicLength(r,i(e),e,n,a)}function X(e,n){return t.intersectLinesToPoints(r,i(e),e,n)}function Y(e,n){t.changeDefaultSpatialReferenceTolerance(e,n)}function Z(e){t.clearDefaultSpatialReferenceTolerance(e)}class u extends Error{constructor(){super("Illegal Argument Exception")}}export{j as buffer,Y as changeDefaultSpatialReferenceTolerance,Z as clearDefaultSpatialReferenceTolerance,h as clip,w as contains,H as convexHull,R as crosses,m as cut,F as densify,I as difference,L as disjoint,x as distance,y as equals,g as extendedSpatialReferenceInfo,G as flipHorizontal,$ as flipVertical,k as generalize,U as geodesicArea,q as geodesicBuffer,K as geodesicDensify,W as geodesicLength,N as intersect,X as intersectLinesToPoints,S as intersects,v as isSimple,B as nearestCoordinate,C as nearestVertex,E as nearestVertices,b as offset,T as overlaps,M as planarArea,Q as planarLength,V as relate,P as rotate,z as simplify,J as symmetricDifference,A as touches,O as union,D as within};
