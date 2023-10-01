import{x as j,a as h,b as d,j as S,ay as T,av as N,az as F,O as w,c as P,ao as q,aA as J,T as O,J as R}from"./index-cc0ee9b2.js";import{y as M}from"./Field-bf5ace58.js";var z;const G=new j({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let c=z=class extends q{constructor(r){super(r),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(r,a){const o=w.fromJSON(a.spatialReference),e=[];for(let s=0;s<r.length;s++){const t=r[s],i=S.fromJSON(t),m=t.geometry&&t.geometry.spatialReference;i.geometry==null||m||(i.geometry.spatialReference=o);const u=t.aggregateGeometries,n=i.aggregateGeometries;if(u&&n!=null)for(const p in n){const l=n[p],f=u[p],g=f==null?void 0:f.spatialReference;l==null||g||(l.spatialReference=o)}e.push(i)}return e}writeGeometryType(r,a,o,e){if(r)return void G.write(r,a,o,e);const{features:s}=this;if(s){for(const t of s)if(t&&t.geometry!=null)return void G.write(t.geometry.type,a,o,e)}}readQueryGeometry(r,a){if(!r)return null;const o=!!r.spatialReference,e=J(r);return e&&!o&&a.spatialReference&&(e.spatialReference=w.fromJSON(a.spatialReference)),e}writeSpatialReference(r,a){if(r)return void(a.spatialReference=r.toJSON());const{features:o}=this;if(o){for(const e of o)if(e&&e.geometry!=null&&e.geometry.spatialReference)return void(a.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new z(this.cloneProperties())}cloneProperties(){return O({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(r){const a=this.write();if(a.features&&Array.isArray(r)&&r.length>0)for(let o=0;o<a.features.length;o++){const e=a.features[o];if(e.geometry){const s=r&&r[o];e.geometry=s&&s.toJSON()||e.geometry}}return a}quantize(r){const{scale:[a,o],translate:[e,s]}=r,t=n=>Math.round((n-e)/a),i=n=>Math.round((s-n)/o),m=this.features,u=this._getQuantizationFunction(this.geometryType,t,i);for(let n=0,p=m.length;n<p;n++)u!=null&&u(m[n].geometry)||(m.splice(n,1),n--,p--);return this.transform=r,this}unquantize(){var f,g;const{geometryType:r,features:a,transform:o}=this;if(!o)return this;const{translate:[e,s],scale:[t,i]}=o,m=y=>y*t+e,u=y=>s-y*i;let n=null,p=null;if(this.hasZ&&((f=o==null?void 0:o.scale)==null?void 0:f[2])!=null){const{translate:[,,y],scale:[,,v]}=o;n=x=>x*v+y}if(this.hasM&&((g=o==null?void 0:o.scale)==null?void 0:g[3])!=null){const{translate:[,,,y],scale:[,,,v]}=o;p=x=>x==null?x:x*v+y}const l=this._getHydrationFunction(r,m,u,n,p);for(const{geometry:y}of a)y!=null&&l&&l(y);return this.transform=null,this}_quantizePoints(r,a,o){let e,s;const t=[];for(let i=0,m=r.length;i<m;i++){const u=r[i];if(i>0){const n=a(u[0]),p=o(u[1]);n===e&&p===s||(t.push([n-e,p-s]),e=n,s=p)}else e=a(u[0]),s=o(u[1]),t.push([e,s])}return t.length>0?t:null}_getQuantizationFunction(r,a,o){return r==="point"?e=>(e.x=a(e.x),e.y=o(e.y),e):r==="polyline"||r==="polygon"?e=>{const s=R(e)?e.rings:e.paths,t=[];for(let i=0,m=s.length;i<m;i++){const u=s[i],n=this._quantizePoints(u,a,o);n&&t.push(n)}return t.length>0?(R(e)?e.rings=t:e.paths=t,e):null}:r==="multipoint"?e=>{const s=this._quantizePoints(e.points,a,o);return s&&s.length>0?(e.points=s,e):null}:r==="extent"?e=>e:null}_getHydrationFunction(r,a,o,e,s){return r==="point"?t=>{t.x=a(t.x),t.y=o(t.y),e&&(t.z=e(t.z))}:r==="polyline"||r==="polygon"?t=>{const i=R(t)?t.rings:t.paths;let m,u;for(let n=0,p=i.length;n<p;n++){const l=i[n];for(let f=0,g=l.length;f<g;f++){const y=l[f];f>0?(m+=y[0],u+=y[1]):(m=y[0],u=y[1]),y[0]=a(m),y[1]=o(u)}}if(e&&s)for(let n=0,p=i.length;n<p;n++){const l=i[n];for(let f=0,g=l.length;f<g;f++){const y=l[f];y[2]=e(y[2]),y[3]=s(y[3])}}else if(e)for(let n=0,p=i.length;n<p;n++){const l=i[n];for(let f=0,g=l.length;f<g;f++){const y=l[f];y[2]=e(y[2])}}else if(s)for(let n=0,p=i.length;n<p;n++){const l=i[n];for(let f=0,g=l.length;f<g;f++){const y=l[f];y[2]=s(y[2])}}}:r==="extent"?t=>{t.xmin=a(t.xmin),t.ymin=o(t.ymin),t.xmax=a(t.xmax),t.ymax=o(t.ymax),e&&t.zmax!=null&&t.zmin!=null&&(t.zmax=e(t.zmax),t.zmin=e(t.zmin)),s&&t.mmax!=null&&t.mmin!=null&&(t.mmax=s(t.mmax),t.mmin=s(t.mmin))}:r==="multipoint"?t=>{const i=t.points;let m,u;for(let n=0,p=i.length;n<p;n++){const l=i[n];n>0?(m+=l[0],u+=l[1]):(m=l[0],u=l[1]),l[0]=a(m),l[1]=o(u)}if(e&&s)for(let n=0,p=i.length;n<p;n++){const l=i[n];l[2]=e(l[2]),l[3]=s(l[3])}else if(e)for(let n=0,p=i.length;n<p;n++){const l=i[n];l[2]=e(l[2])}else if(s)for(let n=0,p=i.length;n<p;n++){const l=i[n];l[2]=s(l[2])}}:null}};h([d({type:String,json:{write:!0}})],c.prototype,"displayFieldName",void 0),h([d({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],c.prototype,"exceededTransferLimit",void 0),h([d({type:[S],json:{write:!0}})],c.prototype,"features",void 0),h([T("features")],c.prototype,"readFeatures",null),h([d({type:[M],json:{write:!0}})],c.prototype,"fields",void 0),h([d({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:G.read}}})],c.prototype,"geometryType",void 0),h([N("geometryType")],c.prototype,"writeGeometryType",null),h([d({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],c.prototype,"hasM",void 0),h([d({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],c.prototype,"hasZ",void 0),h([d({types:F,json:{write:!0}})],c.prototype,"queryGeometry",void 0),h([T("queryGeometry")],c.prototype,"readQueryGeometry",null),h([d({type:w,json:{write:!0}})],c.prototype,"spatialReference",void 0),h([N("spatialReference")],c.prototype,"writeSpatialReference",null),h([d({json:{write:!0}})],c.prototype,"transform",void 0),c=z=h([P("esri.rest.support.FeatureSet")],c),c.prototype.toJSON.isDefaultToJSON=!0;const Z=c;export{Z as d};
