import{s as Y,v as k,U as u,n as w,eR as C}from"./index-cc0ee9b2.js";import{A as K,f as E,P as s,B as I,G as d,M as x,U as L,L as R,D as N,V as F}from"./enums-b14466b3.js";const q=Y.getLogger("esri.views.webgl.checkWebGLError");function j(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const H=!!k("enable-feature:webgl-debug");function Z(){return H}function ce(){return H}function b(t){if(Z()){const e=t.getError();if(e){const r=j(t,e),o=new Error().stack;q.error(new u("webgl-error","WebGL error occured",{message:r,stack:o}))}}}var O;(function(t){t[t.Texture=0]="Texture",t[t.RenderBuffer=1]="RenderBuffer"})(O||(O={}));function le(t){const e=t.gl;switch(e.getError()){case e.NO_ERROR:return null;case e.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case e.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case e.INVALID_OPERATION:return"The specified command is not allowed for the current state";case e.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case e.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case e.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function _e(t,e,r,o,i=0){const c=t.gl,l=t.capabilities.instancing;t.bindBuffer(r);for(const a of o){const n=e.get(a.name);n===void 0&&console.error(`There is no location for vertex attribute '${a.name}' defined.`);const h=i*a.stride;if(a.count<=4)c.vertexAttribPointer(n,a.count,a.type,a.normalized,a.stride,a.offset+h),c.enableVertexAttribArray(n),a.divisor>0&&l&&l.vertexAttribDivisor(n,a.divisor);else if(a.count===9)for(let _=0;_<3;_++)c.vertexAttribPointer(n+_,3,a.type,a.normalized,a.stride,a.offset+12*_+h),c.enableVertexAttribArray(n+_),a.divisor>0&&l&&l.vertexAttribDivisor(n+_,a.divisor);else if(a.count===16)for(let _=0;_<4;_++)c.vertexAttribPointer(n+_,4,a.type,a.normalized,a.stride,a.offset+16*_+h),c.enableVertexAttribArray(n+_),a.divisor>0&&l&&l.vertexAttribDivisor(n+_,a.divisor);else console.error("Unsupported vertex attribute element count: "+a.count)}}function he(t,e,r,o){const i=t.gl,c=t.capabilities.instancing;t.bindBuffer(r);for(const l of o){const a=e.get(l.name);if(l.count<=4)i.disableVertexAttribArray(a),l.divisor&&l.divisor>0&&c&&c.vertexAttribDivisor(a,0);else if(l.count===9)for(let n=0;n<3;n++)i.disableVertexAttribArray(a+n),l.divisor&&l.divisor>0&&c&&c.vertexAttribDivisor(a+n,0);else if(l.count===16)for(let n=0;n<4;n++)i.disableVertexAttribArray(a+n),l.divisor&&l.divisor>0&&c&&c.vertexAttribDivisor(a+n,0);else console.error("Unsupported vertex attribute element count: "+l.count)}t.unbindBuffer(K.ARRAY_BUFFER)}function J(t){switch(t){case d.ALPHA:case d.LUMINANCE:case d.RED:case d.RED_INTEGER:case s.R8:case s.R8I:case s.R8UI:case s.R8_SNORM:case I.STENCIL_INDEX8:return 1;case d.LUMINANCE_ALPHA:case d.RG:case d.RG_INTEGER:case s.RGBA4:case s.R16F:case s.R16I:case s.R16UI:case s.RG8:case s.RG8I:case s.RG8UI:case s.RG8_SNORM:case s.RGB565:case s.RGB5_A1:case I.DEPTH_COMPONENT16:return 2;case d.DEPTH_COMPONENT:case d.RGB:case d.RGB_INTEGER:case s.RGB8:case s.RGB8I:case s.RGB8UI:case s.RGB8_SNORM:case s.SRGB8:case I.DEPTH_COMPONENT24:return 3;case d.DEPTH_STENCIL:case d.DEPTH24_STENCIL8:case d.RGBA:case d.RGBA_INTEGER:case s.RGBA8:case s.R32F:case s.R11F_G11F_B10F:case s.RG16F:case s.R32I:case s.R32UI:case s.RG16I:case s.RG16UI:case s.RGBA8I:case s.RGBA8UI:case s.RGBA8_SNORM:case s.SRGB8_ALPHA8:case s.RGB9_E5:case s.RGB10_A2UI:case s.RGB10_A2:case I.DEPTH_STENCIL:case I.DEPTH_COMPONENT32F:case I.DEPTH24_STENCIL8:return 4;case I.DEPTH32F_STENCIL8:return 5;case s.RGB16F:case s.RGB16I:case s.RGB16UI:return 6;case s.RG32F:case s.RG32I:case s.RG32UI:case s.RGBA16F:case s.RGBA16I:case s.RGBA16UI:return 8;case s.RGB32F:case s.RGB32I:case s.RGB32UI:return 12;case s.RGBA32F:case s.RGBA32I:case s.RGBA32UI:return 16;case E.COMPRESSED_RGB_S3TC_DXT1_EXT:case E.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case E.COMPRESSED_RGBA_S3TC_DXT3_EXT:case E.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case E.COMPRESSED_R11_EAC:case E.COMPRESSED_SIGNED_R11_EAC:case E.COMPRESSED_RGB8_ETC2:case E.COMPRESSED_SRGB8_ETC2:case E.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case E.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case E.COMPRESSED_RG11_EAC:case E.COMPRESSED_SIGNED_RG11_EAC:case E.COMPRESSED_RGBA8_ETC2_EAC:case E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}class Q{constructor(e=0,r=e){this.width=e,this.height=r,this.target=x.TEXTURE_2D,this.pixelFormat=d.RGBA,this.dataType=L.UNSIGNED_BYTE,this.samplingMode=R.LINEAR,this.wrapMode=N.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function ee(t){return t.width<=0||t.height<=0||t.internalFormat==null?0:t.width*t.height*(t.hasMipmap?4/3:1)*J(t.internalFormat)}class B extends Q{constructor(e,r){switch(super(),this.context=e,Object.assign(this,r),this.internalFormat){case s.R16F:case s.R16I:case s.R16UI:case s.R32F:case s.R32I:case s.R32UI:case s.R8_SNORM:case s.R8:case s.R8I:case s.R8UI:this.pixelFormat=d.RED}}static validate(e,r){return new B(e,r)}}const v=4;let f=class{constructor(e,r=null,o=null){if(this.type=O.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,o=r;else{const i=B.validate(e,r);if(!i)throw new u("Texture descriptor invalid");this._descriptor=i}if(this._descriptor.context.instanceCounter.increment(F.Texture,this),this._descriptor.context.type!==w.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),M(this._descriptor.target)))throw new u("3D and array textures are not supported in WebGL1");this._descriptor.target===x.TEXTURE_CUBE_MAP?this._setDataCubeMap(o):this.setData(o)}get glName(){return this._glName}get descriptor(){return this._descriptor}get gpuMemoryUsage(){return ae.delete(this),ee(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null,this._descriptor.context.instanceCounter.decrement(F.Texture,this))}release(){this.dispose()}resize(e,r){const o=this._descriptor;if(o.width!==e||o.height!==r){if(this._wasImmutablyAllocated)throw new u("Immutable textures can't be resized!");o.width=e,o.height=r,this._descriptor.target===x.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let r=x.TEXTURE_CUBE_MAP_POSITIVE_X;r<=x.TEXTURE_CUBE_MAP_NEGATIVE_Z;r++)this._setData(e,r)}setData(e){this._setData(e)}_setData(e,r){if(!this._descriptor.context||!this._descriptor.context.gl)return;const o=this._descriptor.context.gl;b(o),this._glName||(this._glName=o.createTexture()),e===void 0&&(e=null);const i=this._descriptor,c=r??i.target,l=M(c);e===null&&(i.width=i.width||v,i.height=i.height||v,l&&(i.depth=i.depth??1));const a=this._descriptor.context.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(f.TEXTURE_UNIT_FOR_UPDATES),U(this._descriptor.context,i),this._configurePixelStorage(),b(o);const n=this._deriveInternalFormat();if(G(e)){let h=e.width,_=e.height;const p=1;e instanceof HTMLVideoElement&&(h=e.videoWidth,_=e.videoHeight),i.width&&i.height,l&&i.depth,i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,n,i.hasMipmap,h,_,p),this._texImage(c,0,n,h,_,p,e),b(o),i.hasMipmap&&this.generateMipmap(),i.width||(i.width=h),i.height||(i.height=_),l&&!i.depth&&(i.depth=p)}else{const{width:h,height:_,depth:p}=i;if(h==null||_==null)throw new u("Width and height must be specified!");if(l&&p==null)throw new u("Depth must be specified!");if(i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,n,i.hasMipmap,h,_,p),S(e)){const m=e.levels,g=W(c,h,_,p),A=Math.min(g-1,m.length-1);this._descriptor.context.gl2!=null?o.texParameteri(i.target,this._descriptor.context.gl2.TEXTURE_MAX_LEVEL,A):i.hasMipmap=i.hasMipmap&&g===m.length;const T=n;if(!ie(T))throw new u("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel((D,P,V,$)=>{const z=m[Math.min(D,m.length-1)];this._compressedTexImage(c,D,T,P,V,$,z)},A)}else this._texImage(c,0,n,h,_,p,e),b(o),i.hasMipmap&&this.generateMipmap()}y(o,this._descriptor),X(o,this._descriptor),te(this._descriptor.context,this._descriptor),b(o),this._descriptor.context.bindTexture(a,f.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,r,o,i,c,l,a=0){l||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const n=this._descriptor.context.gl,h=this._descriptor.context.gl2,_=this._descriptor,p=this._deriveInternalFormat(),{pixelFormat:m,dataType:g,target:A,isImmutable:T}=_;if(T&&!this._wasImmutablyAllocated)throw new u("Cannot update immutable texture before allocation!");const D=this._descriptor.context.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES,!0);if((r<0||o<0||i>_.width||c>_.height||r+i>_.width||o+c>_.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),a){if(!h)return void console.error("Webgl2 must be enabled to use dataRowOffset!");n.pixelStorei(h.UNPACK_SKIP_ROWS,a)}if(G(l)?h?h.texSubImage2D(A,e,r,o,i,c,m,g,l):n.texSubImage2D(A,e,r,o,m,g,l):S(l)?n.compressedTexSubImage2D(A,e,r,o,i,c,p,l.levels[e]):n.texSubImage2D(A,e,r,o,i,c,m,g,l),a){if(!h)return void console.error("Webgl2 must be enabled to use dataRowOffset!");n.pixelStorei(h.UNPACK_SKIP_ROWS,0)}this._descriptor.context.bindTexture(D,f.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,r,o,i,c,l,a,n){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const h=this._descriptor.context.gl2;if(h==null)throw new u("3D textures are not supported in WebGL1");const _=this._descriptor,p=this._deriveInternalFormat(),{pixelFormat:m,dataType:g,isImmutable:A,target:T}=_;if(A&&!this._wasImmutablyAllocated)throw new u("Cannot update immutable texture before allocation!");M(T)||console.warn("Attempting to set 3D texture data on a non-3D texture");const D=this._descriptor.context.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES);if(this._descriptor.context.setActiveTexture(f.TEXTURE_UNIT_FOR_UPDATES),(r<0||o<0||i<0||c>_.width||l>_.height||a>_.depth||r+c>_.width||o+l>_.height||i+a>_.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),S(n))n=n.levels[e],h.compressedTexSubImage3D(T,e,r,o,i,c,l,a,p,n);else{const P=n;h.texSubImage3D(T,e,r,o,i,c,l,a,m,g,P)}this._descriptor.context.bindTexture(D,f.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new u("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,U(this._descriptor.context,e)}e.samplingMode===R.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=R.LINEAR_MIPMAP_NEAREST):e.samplingMode===R.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=R.NEAREST_MIPMAP_NEAREST);const r=this._descriptor.context.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(f.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(r,f.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,U(this._descriptor.context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor.context.gl,r=this._descriptor;this._samplingModeDirty&&(y(e,r),this._samplingModeDirty=!1),this._wrapModeDirty&&(X(e,r),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.context.type===w.WEBGL1)return this._descriptor.internalFormat=this._descriptor.pixelFormat;if(this._descriptor.internalFormat!=null)return this._descriptor.internalFormat===d.DEPTH_STENCIL&&(this._descriptor.internalFormat=d.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case L.FLOAT:switch(this._descriptor.pixelFormat){case d.RGBA:return this._descriptor.internalFormat=s.RGBA32F;case d.RGB:return this._descriptor.internalFormat=s.RGB32F;default:throw new u("Unable to derive format")}case L.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case d.RGBA:return this._descriptor.internalFormat=s.RGBA8;case d.RGB:return this._descriptor.internalFormat=s.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===d.DEPTH_STENCIL?d.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:r,flipped:o,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,r,o,i,c,l){const a=this._descriptor.context.gl2;if(a==null)throw new u("Immutable textures are not supported in WebGL1");if(!re(r))throw new u("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const n=o?W(e,i,c,l):1;if(M(e)){if(l==null)throw new u("Missing depth dimension for 3D texture upload");a.texStorage3D(e,n,r,i,c,l)}else a.texStorage2D(e,n,r,i,c);this._wasImmutablyAllocated=!0}_texImage(e,r,o,i,c,l,a){const n=this._descriptor.context.gl,h=M(e),{isImmutable:_,pixelFormat:p,dataType:m}=this._descriptor,g=this._descriptor.context.type===w.WEBGL2,A=g?n:null;if(g||!G(a))if(_){if(a!=null){const T=a;if(h){if(l==null)throw new u("Missing depth dimension for 3D texture upload");A.texSubImage3D(e,r,0,0,0,i,c,l,p,m,T)}else n.texSubImage2D(e,r,0,0,i,c,p,m,T)}}else{const T=a;if(h){if(l==null)throw new u("Missing depth dimension for 3D texture upload");A.texImage3D(e,r,o,i,c,l,0,p,m,T)}else n.texImage2D(e,r,o,i,c,0,p,m,T)}else n.texImage2D(e,0,o,p,m,a)}_compressedTexImage(e,r,o,i,c,l,a){const n=this._descriptor.context.gl;let h=null;const _=M(e),p=this._descriptor.isImmutable;if(_){if(this._descriptor.context.type!==w.WEBGL2)throw new u("3D textures are not supported in WebGL1");h=n}if(p){if(a!=null)if(_){if(l==null)throw new u("Missing depth dimension for 3D texture upload");h.compressedTexSubImage3D(e,r,0,0,0,i,c,l,o,a)}else n.compressedTexSubImage2D(e,r,0,0,i,c,o,a)}else if(_){if(l==null)throw new u("Missing depth dimension for 3D texture upload");h.compressedTexImage3D(e,r,o,i,c,l,0,a)}else n.compressedTexImage2D(e,r,o,i,c,0,a)}_forEachMipmapLevel(e,r=1/0){let{width:o,height:i,depth:c,hasMipmap:l,target:a}=this._descriptor;const n=a===x.TEXTURE_3D;if(o==null||i==null||n&&c==null)throw new u("Missing texture dimensions for mipmap calculation");for(let h=0;e(h,o,i,c),l&&(o!==1||i!==1||n&&c!==1)&&!(h>=r);++h)o=Math.max(1,o>>1),i=Math.max(1,i>>1),n&&(c=Math.max(1,c>>1))}};function U(t,e){(e.width!=null&&e.width<0||e.height!=null&&e.height<0||e.depth!=null&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!");const r=t.type===w.WEBGL2;r||!e.isImmutable&&!M(e.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),!r&&(e.width!=null&&C(e.width)&&e.height!=null&&C(e.height)||(typeof e.wrapMode=="number"?e.wrapMode!==N.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):e.wrapMode.s===N.CLAMP_TO_EDGE&&e.wrapMode.t===N.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),e.hasMipmap&&console.error("Mipmapping requires power-of-two textures!")))}function y(t,e){let r=e.samplingMode,o=e.samplingMode;r===R.LINEAR_MIPMAP_NEAREST||r===R.LINEAR_MIPMAP_LINEAR?(r=R.LINEAR,e.hasMipmap||(o=R.LINEAR)):r!==R.NEAREST_MIPMAP_NEAREST&&r!==R.NEAREST_MIPMAP_LINEAR||(r=R.NEAREST,e.hasMipmap||(o=R.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,r),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,o)}function X(t,e){typeof e.wrapMode=="number"?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function te(t,e){const r=t.capabilities.textureFilterAnisotropic;r&&t.gl.texParameterf(e.target,r.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function re(t){return t in s}function ie(t){return t in E}function S(t){return t!=null&&"type"in t&&t.type==="compressed"}function se(t){return t!=null&&"byteLength"in t}function G(t){return t!=null&&!S(t)&&!se(t)}function M(t){return t===x.TEXTURE_3D||t===x.TEXTURE_2D_ARRAY}function W(t,e,r,o=1){let i=Math.max(e,r);return t===x.TEXTURE_3D&&(i=Math.max(i,o)),Math.round(Math.log(i)/Math.LN2)+1}f.TEXTURE_UNIT_FOR_UPDATES=0;const ae=new Map;export{J as E,_e as R,f as T,O as a,Z as b,ce as c,le as d,Q as e,he as o,b as u};
