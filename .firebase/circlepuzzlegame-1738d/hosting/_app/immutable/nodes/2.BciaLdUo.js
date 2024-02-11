import{n as ye,j as cl,r as An,i as hl,z as Ei,a as Dn,c as hn,h as ul,A as Ii,e as bi,u as Ti,g as Si,f as Ni,B as dl,d as gt,C as on,o as fl,D as Ri}from"../chunks/scheduler.CwIiqDyD.js";import{y as pl,z as _l,A as ml,B as gl,n as Te,l as Se,S as Pn,i as Mn,e as b,c as T,a as G,d as y,o as P,g as D,q as yl,m as vl,t as me,s as O,b as ge,f as L,p as Lt,h as I,j as De,C as ki,u as ft,v as pt,w as _t,D as he,E as Cl,F as wl,x as mt,G as an,H as ee,I as El,J as Gr,K as Ft}from"../chunks/index.CIKh10TN.js";import{d as Il,w as cs,r as bl}from"../chunks/index.NVK073Jc.js";function Tl(n,e,t,s){if(!e)return ye;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return ye;const{delay:r=0,duration:o=300,easing:a=cl,start:l=pl()+r,end:c=l+o,tick:h=ye,css:u}=t(n,{from:e,to:i},s);let d=!0,f=!1,p;function v(){u&&(p=ml(n,0,1,o,r,a,u)),r||(f=!0)}function g(){u&&gl(n,p),d=!1}return _l(w=>{if(!f&&w>=l&&(f=!0),f&&w>=c&&(h(1,0),g()),!d)return!1;if(f){const F=w-l,R=0+1*a(F/o);h(R,1-R)}return!0}),v(),h(0,1),g}function Sl(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,zr(n,i)}}function zr(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function $e(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Nl(n,e){n.d(1),e.delete(n.key)}function Rl(n,e){Se(n,1,1,()=>{e.delete(n.key)})}function kl(n,e){n.f(),Rl(n,e)}function Kr(n,e,t,s,i,r,o,a,l,c,h,u){let d=n.length,f=r.length,p=d;const v={};for(;p--;)v[n[p].key]=p;const g=[],w=new Map,F=new Map,R=[];for(p=f;p--;){const N=u(i,r,p),C=t(N);let E=o.get(C);E?s&&R.push(()=>E.p(N,e)):(E=c(C,N),E.c()),w.set(C,g[p]=E),C in v&&F.set(C,Math.abs(p-v[C]))}const S=new Set,V=new Set;function B(N){Te(N,1),N.m(a,h),o.set(N.key,N),h=N.first,f--}for(;d&&f;){const N=g[f-1],C=n[d-1],E=N.key,x=C.key;N===C?(h=N.first,d--,f--):w.has(x)?!o.has(E)||S.has(E)?B(N):V.has(x)?d--:F.get(E)>F.get(x)?(V.add(E),B(N)):(S.add(x),d--):(l(C,o),d--)}for(;d--;){const N=n[d];w.has(N.key)||l(N,o)}for(;f;)B(g[f-1]);return An(R),g}const Al=!0,u_=Object.freeze(Object.defineProperty({__proto__:null,prerender:Al},Symbol.toStringTag,{value:"Module"}));function Yr(n){const e=n-1;return e*e*e+1}function Dl(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:h=0,duration:u=f=>Math.sqrt(f)*120,easing:d=Yr}=s;return{delay:h,duration:hl(u)?u(Math.sqrt(l*l+c*c)):u,easing:d,css:(f,p)=>{const v=p*l,g=p*c,w=f+p*e.width/t.width,F=f+p*e.height/t.height;return`transform: ${r} translate(${v}px, ${g}px) scale(${w}, ${F});`}}}function Ai(n,{delay:e=0,duration:t=400,easing:s=Yr,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o),[u,d]=Ei(i),[f,p]=Ei(r);return{delay:e,duration:t,easing:s,css:(v,g)=>`
			transform: ${c} translate(${(1-v)*u}${d}, ${(1-v)*f}${p});
			opacity: ${l-h*g}`}}function Pl(n){const e=cs([]);function t(r,o="default",a){e.update(l=>[...l,{id:Ml(),type:o,message:r,timeout:a}])}const s=Il(e,(r,o)=>{if(o(r),r.length>0){const a=setTimeout(()=>{e.update(l=>(l.shift(),l))},r[0].timeout);return()=>{clearTimeout(a)}}}),{subscribe:i}=s;return{subscribe:i,send:t,default:(r,o)=>t(r,"default",o),danger:(r,o)=>t(r,"danger",o),warning:(r,o)=>t(r,"warning",o),info:(r,o)=>t(r,"info",o),success:(r,o)=>t(r,"success",o)}}function Ml(){return"_"+Math.random().toString(36).substr(2,9)}const un=Pl();function Di(n,e,t){const s=n.slice();return s[1]=e[t],s}function Pi(n){let e,t;return{c(){e=b("i"),this.h()},l(s){e=T(s,"I",{class:!0}),G(e).forEach(y),this.h()},h(){P(e,"class",t=Ii(n[1].icon)+" svelte-15ecllt")},m(s,i){D(s,e,i)},p(s,i){i&1&&t!==(t=Ii(s[1].icon)+" svelte-15ecllt")&&P(e,"class",t)},d(s){s&&y(e)}}}function Mi(n,e){let t,s,i=e[1].message+"",r,o,a,l,c,h=ye,u,d=e[1].icon&&Pi(e);return{key:n,first:null,c(){t=b("div"),s=b("div"),r=me(i),o=O(),d&&d.c(),a=O(),this.h()},l(f){t=T(f,"DIV",{class:!0,style:!0});var p=G(t);s=T(p,"DIV",{class:!0});var v=G(s);r=ge(v,i),v.forEach(y),o=L(p),d&&d.l(p),a=L(p),p.forEach(y),this.h()},h(){P(s,"class","content svelte-15ecllt"),P(t,"class","toast svelte-15ecllt"),Lt(t,"background","#EBEBEB"),this.first=t},m(f,p){D(f,t,p),I(t,s),I(s,r),I(t,o),d&&d.m(t,null),I(t,a),u=!0},p(f,p){e=f,(!u||p&1)&&i!==(i=e[1].message+"")&&De(r,i),e[1].icon?d?d.p(e,p):(d=Pi(e),d.c(),d.m(t,a)):d&&(d.d(1),d=null)},r(){c=t.getBoundingClientRect()},f(){Sl(t),h(),zr(t,c)},a(){h(),h=Tl(t,c,Dl,{})},i(f){u||(f&&ul(()=>{u&&(l||(l=ki(t,Ai,{y:30},!0)),l.run(1))}),u=!0)},o(f){f&&(l||(l=ki(t,Ai,{y:30},!1)),l.run(0)),u=!1},d(f){f&&y(t),d&&d.d(),f&&l&&l.end()}}}function xl(n){let e,t=[],s=new Map,i,r=$e(n[0]);const o=a=>a[1].id;for(let a=0;a<r.length;a+=1){let l=Di(n,r,a),c=o(l);s.set(c,t[a]=Mi(c,l))}return{c(){e=b("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=T(a,"DIV",{class:!0});var l=G(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(y),this.h()},h(){P(e,"class","notifications svelte-15ecllt")},m(a,l){D(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);i=!0},p(a,[l]){if(l&1){r=$e(a[0]),yl();for(let c=0;c<t.length;c+=1)t[c].r();t=Kr(t,l,o,1,a,r,s,e,kl,Mi,null,Di);for(let c=0;c<t.length;c+=1)t[c].a();vl()}},i(a){if(!i){for(let l=0;l<r.length;l+=1)Te(t[l]);i=!0}},o(a){for(let l=0;l<t.length;l+=1)Se(t[l]);i=!1},d(a){a&&y(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function Ol(n,e,t){let s;return hn(n,un,i=>t(0,s=i)),[s]}class Qr extends Pn{constructor(e){super(),Mn(this,e,Ol,xl,Dn,{})}}const Ll=n=>({}),xi=n=>({});function Oi(n){let e,t,s;return{c(){e=b("i"),this.h()},l(i){e=T(i,"I",{class:!0}),G(e).forEach(y),this.h()},h(){P(e,"class","fa-solid fa-xmark svelte-kvu5ns")},m(i,r){D(i,e,r),t||(s=he(e,"click",n[6]),t=!0)},p:ye,d(i){i&&y(e),t=!1,s()}}}function Fl(n){let e,t,s,i,r,o,a,l,c,h,u,d,f,p;s=new Qr({});const v=n[4].header,g=bi(v,n,n[3],xi);let w=!n[1]&&Oi(n);const F=n[4].default,R=bi(F,n,n[3],null);return{c(){e=b("dialog"),t=b("div"),ft(s.$$.fragment),i=O(),r=b("div"),g&&g.c(),o=O(),a=b("div"),l=O(),w&&w.c(),c=O(),h=b("hr"),u=O(),R&&R.c(),this.h()},l(S){e=T(S,"DIALOG",{class:!0});var V=G(e);t=T(V,"DIV",{class:!0});var B=G(t);pt(s.$$.fragment,B),i=L(B),r=T(B,"DIV",{class:!0});var N=G(r);g&&g.l(N),o=L(N),a=T(N,"DIV",{class:!0}),G(a).forEach(y),l=L(N),w&&w.l(N),N.forEach(y),c=L(B),h=T(B,"HR",{}),u=L(B),R&&R.l(B),B.forEach(y),V.forEach(y),this.h()},h(){P(a,"class","spacer svelte-kvu5ns"),P(r,"class","flex-container svelte-kvu5ns"),P(t,"class","svelte-kvu5ns"),P(e,"class","svelte-kvu5ns")},m(S,V){D(S,e,V),I(e,t),_t(s,t,null),I(t,i),I(t,r),g&&g.m(r,null),I(r,o),I(r,a),I(r,l),w&&w.m(r,null),I(t,c),I(t,h),I(t,u),R&&R.m(t,null),n[7](e),d=!0,f||(p=[he(t,"click",Cl(n[5])),he(e,"close",n[8]),he(e,"click",wl(n[9]))],f=!0)},p(S,[V]){g&&g.p&&(!d||V&8)&&Ti(g,v,S,S[3],d?Ni(v,S[3],V,Ll):Si(S[3]),xi),S[1]?w&&(w.d(1),w=null):w?w.p(S,V):(w=Oi(S),w.c(),w.m(r,null)),R&&R.p&&(!d||V&8)&&Ti(R,F,S,S[3],d?Ni(F,S[3],V,null):Si(S[3]),null)},i(S){d||(Te(s.$$.fragment,S),Te(g,S),Te(R,S),d=!0)},o(S){Se(s.$$.fragment,S),Se(g,S),Se(R,S),d=!1},d(S){S&&y(e),mt(s),g&&g.d(S),w&&w.d(),R&&R.d(S),n[7](null),f=!1,An(p)}}}function Bl(n,e,t){let{$$slots:s={},$$scope:i}=e,{showModal:r}=e,{hide_close:o=!1}=e,a;function l(f){dl.call(this,n,f)}const c=()=>a.close();function h(f){gt[f?"unshift":"push"](()=>{a=f,t(2,a)})}const u=()=>t(0,r=!1),d=()=>!o&&a.close();return n.$$set=f=>{"showModal"in f&&t(0,r=f.showModal),"hide_close"in f&&t(1,o=f.hide_close),"$$scope"in f&&t(3,i=f.$$scope)},n.$$.update=()=>{n.$$.dirty&5&&a&&(r?a.showModal():a.close()),n.$$.dirty&5&&a&&r===!1&&a.open&&a.close()},[r,o,a,i,s,l,c,h,u,d]}class Kn extends Pn{constructor(e){super(),Mn(this,e,Bl,Fl,Dn,{showModal:0,hide_close:1})}}const $l=""+new URL("../assets/ex-solution.DMtatkDj.png",import.meta.url).href,Hl=""+new URL("../assets/ex-letter-box.mgBNjwYG.png",import.meta.url).href;var Li={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw Rt(e)},Rt=function(n){return new Error("Firebase Database ("+Xr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ul=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},As={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[h],t[u],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ul(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Wl;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),u!==64){const p=c<<6&192|u;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zr=function(n){const e=Jr(n);return As.encodeByteArray(e,!0)},dn=function(n){return Zr(n).replace(/\./g,"")},hs=function(n){try{return As.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n){return eo(void 0,n)}function eo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ql(t)||(n[t]=eo(n[t],e[t]));return n}function ql(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=()=>jl().__FIREBASE_DEFAULTS__,zl=()=>{if(typeof process>"u"||typeof Li>"u")return;const n=Li.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Kl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hs(n[1]);return e&&JSON.parse(e)},to=()=>{try{return Gl()||zl()||Kl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yl=n=>{var e,t;return(t=(e=to())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ql=n=>{const e=Yl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},no=()=>{var n;return(n=to())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[dn(JSON.stringify(t)),dn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function so(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jl())}function Zl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ec(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function io(){return Xr.NODE_ADMIN===!0}function ro(){try{return typeof indexedDB=="object"}catch{return!1}}function oo(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function tc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="FirebaseError";class at extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nc,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?sc(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new at(i,a,s)}}function sc(n,e){return n.replace(ic,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ic=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n){return JSON.parse(n)}function re(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Vt(hs(r[0])||""),t=Vt(hs(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},rc=function(n){const e=ao(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},oc=function(n){const e=ao(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function It(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Fi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function fn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function pn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Bi(r)&&Bi(o)){if(!pn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Bi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(i<<5|i>>>27)+c+l+h+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ds(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ln=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=1e3,uc=2,dc=4*60*60*1e3,fc=.5;function $i(n,e=hc,t=uc){const s=e*Math.pow(t,n),i=Math.round(fc*s*(Math.random()-.5)*2);return Math.min(dc,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n){return n&&n._delegate?n._delegate:n}class Me{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new xn;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mc(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ke){return this.instances.has(e)}getOptions(e=Ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_c(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ke){return this.component?this.component.multipleInstances?e:Ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _c(n){return n===Ke?void 0:n}function mc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const yc={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},vc=X.INFO,Cc={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},wc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Cc[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ps{constructor(e){this.name=e,this._logLevel=vc,this._logHandler=wc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Ec=(n,e)=>e.some(t=>n instanceof t);let Hi,Ui;function Ic(){return Hi||(Hi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bc(){return Ui||(Ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lo=new WeakMap,us=new WeakMap,co=new WeakMap,Yn=new WeakMap,Ms=new WeakMap;function Tc(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(He(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&lo.set(t,n)}).catch(()=>{}),Ms.set(e,n),e}function Sc(n){if(us.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});us.set(n,e)}let ds={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return us.get(n);if(e==="objectStoreNames")return n.objectStoreNames||co.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Nc(n){ds=n(ds)}function Rc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Qn(this),e,...t);return co.set(s,e.sort?e.sort():[e]),He(s)}:bc().includes(n)?function(...e){return n.apply(Qn(this),e),He(lo.get(this))}:function(...e){return He(n.apply(Qn(this),e))}}function kc(n){return typeof n=="function"?Rc(n):(n instanceof IDBTransaction&&Sc(n),Ec(n,Ic())?new Proxy(n,ds):n)}function He(n){if(n instanceof IDBRequest)return Tc(n);if(Yn.has(n))return Yn.get(n);const e=kc(n);return e!==n&&(Yn.set(n,e),Ms.set(e,n)),e}const Qn=n=>Ms.get(n);function ho(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=He(o);return s&&o.addEventListener("upgradeneeded",l=>{s(He(o.result),l.oldVersion,l.newVersion,He(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ac=["get","getKey","getAll","getAllKeys","count"],Dc=["put","add","delete","clear"],Xn=new Map;function Wi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xn.get(e))return Xn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Dc.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ac.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Xn.set(e,r),r}Nc(n=>({...n,get:(e,t,s)=>Wi(e,t)||n.get(e,t,s),has:(e,t)=>!!Wi(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Mc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Mc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fs="@firebase/app",Vi="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new Ps("@firebase/app"),xc="@firebase/app-compat",Oc="@firebase/analytics-compat",Lc="@firebase/analytics",Fc="@firebase/app-check-compat",Bc="@firebase/app-check",$c="@firebase/auth",Hc="@firebase/auth-compat",Uc="@firebase/database",Wc="@firebase/database-compat",Vc="@firebase/functions",qc="@firebase/functions-compat",jc="@firebase/installations",Gc="@firebase/installations-compat",zc="@firebase/messaging",Kc="@firebase/messaging-compat",Yc="@firebase/performance",Qc="@firebase/performance-compat",Xc="@firebase/remote-config",Jc="@firebase/remote-config-compat",Zc="@firebase/storage",eh="@firebase/storage-compat",th="@firebase/firestore",nh="@firebase/firestore-compat",sh="firebase",ih="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="[DEFAULT]",rh={[fs]:"fire-core",[xc]:"fire-core-compat",[Lc]:"fire-analytics",[Oc]:"fire-analytics-compat",[Bc]:"fire-app-check",[Fc]:"fire-app-check-compat",[$c]:"fire-auth",[Hc]:"fire-auth-compat",[Uc]:"fire-rtdb",[Wc]:"fire-rtdb-compat",[Vc]:"fire-fn",[qc]:"fire-fn-compat",[jc]:"fire-iid",[Gc]:"fire-iid-compat",[zc]:"fire-fcm",[Kc]:"fire-fcm-compat",[Yc]:"fire-perf",[Qc]:"fire-perf-compat",[Xc]:"fire-rc",[Jc]:"fire-rc-compat",[Zc]:"fire-gcs",[eh]:"fire-gcs-compat",[th]:"fire-fst",[nh]:"fire-fst-compat","fire-js":"fire-js",[sh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Map,_s=new Map;function oh(n,e){try{n.container.addComponent(e)}catch(t){et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ve(n){const e=n.name;if(_s.has(e))return et.debug(`There were multiple attempts to register component ${e}.`),!1;_s.set(e,n);for(const t of _n.values())oh(t,n);return!0}function Jt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ue=new On("app","Firebase",ah);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=ih;function uo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ps,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ue.create("bad-app-name",{appName:String(i)});if(t||(t=no()),!t)throw Ue.create("no-options");const r=_n.get(i);if(r){if(pn(t,r.options)&&pn(s,r.config))return r;throw Ue.create("duplicate-app",{appName:i})}const o=new gc(i);for(const l of _s.values())o.addComponent(l);const a=new lh(t,s,o);return _n.set(i,a),a}function fo(n=ps){const e=_n.get(n);if(!e&&n===ps&&no())return uo();if(!e)throw Ue.create("no-app",{appName:n});return e}function Ne(n,e,t){var s;let i=(s=rh[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),et.warn(a.join(" "));return}Ve(new Me(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="firebase-heartbeat-database",uh=1,qt="firebase-heartbeat-store";let Jn=null;function po(){return Jn||(Jn=ho(hh,uh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),Jn}async function dh(n){try{const t=(await po()).transaction(qt),s=await t.objectStore(qt).get(_o(n));return await t.done,s}catch(e){if(e instanceof at)et.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});et.warn(t.message)}}}async function qi(n,e){try{const s=(await po()).transaction(qt,"readwrite");await s.objectStore(qt).put(e,_o(n)),await s.done}catch(t){if(t instanceof at)et.warn(t.message);else{const s=Ue.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});et.warn(s.message)}}}function _o(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=1024,ph=30*24*60*60*1e3;class _h{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ji();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ph}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ji(),{heartbeatsToSend:s,unsentEntries:i}=mh(this._heartbeatsCache.heartbeats),r=dn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ji(){return new Date().toISOString().substring(0,10)}function mh(n,e=fh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Gi(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Gi(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class gh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ro()?oo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gi(n){return dn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){Ve(new Me("platform-logger",e=>new Pc(e),"PRIVATE")),Ve(new Me("heartbeat",e=>new _h(e),"PRIVATE")),Ne(fs,Vi,n),Ne(fs,Vi,"esm2017"),Ne("fire-js","")}yh("");var vh="firebase",Ch="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne(vh,Ch,"app");const wh={apiKey:"AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",authDomain:"circlepuzzlegame-1738d.firebaseapp.com",projectId:"circlepuzzlegame-1738d",storageBucket:"circlepuzzlegame-1738d.appspot.com",messagingSenderId:"62490740969",appId:"1:62490740969:web:719c6ea78f8148089f4878",measurementId:"G-EEEKPPSEN9"},Eh=uo(wh);var zi={};const Ki="@firebase/database",Yi="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo="";function Ih(n){mo=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Vt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Le(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bh(e)}}catch{}return new Th},Qe=go("localStorage"),ms=go("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Ps("@firebase/database"),Sh=function(){let n=1;return function(){return n++}}(),yo=function(n){const e=cc(n),t=new lc;t.update(e);const s=t.digest();return As.encodeByteArray(s)},Zt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Zt.apply(null,s):typeof s=="object"?e+=re(s):e+=s,e+=" "}return e};let Ze=null,Qi=!0;const Nh=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(vt.logLevel=X.VERBOSE,Ze=vt.log.bind(vt),e&&ms.set("logging_enabled",!0)):typeof n=="function"?Ze=n:(Ze=null,ms.remove("logging_enabled"))},ae=function(...n){if(Qi===!0&&(Qi=!1,Ze===null&&ms.get("logging_enabled")===!0&&Nh(!0)),Ze){const e=Zt.apply(null,n);Ze(e)}},en=function(n){return function(...e){ae(n,...e)}},gs=function(...n){const e="FIREBASE INTERNAL ERROR: "+Zt(...n);vt.error(e)},xe=function(...n){const e=`FIREBASE FATAL ERROR: ${Zt(...n)}`;throw vt.error(e),new Error(e)},fe=function(...n){const e="FIREBASE WARNING: "+Zt(...n);vt.warn(e)},Rh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},kh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},bt="[MIN_NAME]",tt="[MAX_NAME]",kt=function(n,e){if(n===e)return 0;if(n===bt||e===tt)return-1;if(e===bt||n===tt)return 1;{const t=Xi(n),s=Xi(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Ah=function(n,e){return n===e?0:n<e?-1:1},Pt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+re(e))},xs=function(n){if(typeof n!="object"||n===null)return re(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=re(e[s]),t+=":",t+=xs(n[e[s]]);return t+="}",t},Co=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function _e(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const wo=function(n){m(!vo(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Dh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ph=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Mh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const xh=new RegExp("^-?(0*)\\d{1,10}$"),Oh=-2147483648,Lh=2147483647,Xi=function(n){if(xh.test(n)){const e=Number(n);if(e>=Oh&&e<=Lh)return e}return null},At=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw fe("Exception was thrown by user callback.",t),e},Math.floor(0))}},Fh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fe(e)}}class Ct{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ct.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="5",Eo="v",Io="s",bo="r",To="f",So=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,No="ls",Ro="p",ys="ac",ko="websocket",Ao="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Hh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Po(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===ko)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ao)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Hh(n)&&(t.ns=n.namespace);const i=[];return _e(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.counters_={}}incrementCounter(e,t=1){Le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Vl(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn={},es={};function Ls(n){const e=n.toString();return Zn[e]||(Zn[e]=new Uh),Zn[e]}function Wh(n,e){const t=n.toString();return es[t]||(es[t]=e()),es[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&At(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="start",qh="close",jh="pLPCommand",Gh="pRTLPCB",Mo="id",xo="pw",Oo="ser",zh="cb",Kh="seg",Yh="ts",Qh="d",Xh="dframe",Lo=1870,Fo=30,Jh=Lo-Fo,Zh=25e3,eu=3e4;class yt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=en(e),this.stats_=Ls(t),this.urlFn=l=>(this.appCheckToken&&(l[ys]=this.appCheckToken),Po(t,Ao,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Vh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eu)),kh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fs((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ji)this.id=a,this.password=l;else if(o===qh)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ji]="t",s[Oo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[zh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Eo]=Os,this.transportSessionId&&(s[Io]=this.transportSessionId),this.lastSessionId&&(s[No]=this.lastSessionId),this.applicationId&&(s[Ro]=this.applicationId),this.appCheckToken&&(s[ys]=this.appCheckToken),typeof location<"u"&&location.hostname&&So.test(location.hostname)&&(s[bo]=To);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yt.forceAllow_=!0}static forceDisallow(){yt.forceDisallow_=!0}static isAvailable(){return yt.forceAllow_?!0:!yt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Dh()&&!Ph()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Zr(t),i=Co(s,Jh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Xh]="t",s[Mo]=e,s[xo]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fs{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Sh(),window[jh+this.uniqueCallbackIdentifier]=e,window[Gh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ae("frame writing exception"),a.stack&&ae(a.stack),ae(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mo]=this.myID,e[xo]=this.myPW,e[Oo]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fo+s.length<=Lo;){const o=this.pendingSegs.shift();s=s+"&"+Kh+i+"="+o.seg+"&"+Yh+i+"="+o.ts+"&"+Qh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Zh)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=16384,nu=45e3;let mn=null;typeof MozWebSocket<"u"?mn=MozWebSocket:typeof WebSocket<"u"&&(mn=WebSocket);class we{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=en(this.connId),this.stats_=Ls(t),this.connURL=we.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Eo]=Os,typeof location<"u"&&location.hostname&&So.test(location.hostname)&&(o[bo]=To),t&&(o[Io]=t),s&&(o[No]=s),i&&(o[ys]=i),r&&(o[Ro]=r),Po(e,ko,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qe.set("previous_websocket_failure",!0);try{let s;io(),this.mySock=new mn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){we.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&mn!==null&&!we.forceDisallow_}static previouslyFailed(){return Qe.isInMemoryStorage||Qe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Vt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Co(t,tu);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nu))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}we.responsesRequiredToBeHealthy=2;we.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yt,we]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=we&&we.isAvailable();let s=t&&!we.previouslyFailed();if(e.webSocketOnly&&(t||fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[we];else{const i=this.transports_=[];for(const r of jt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);jt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}jt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=6e4,iu=5e3,ru=10*1024,ou=100*1024,ts="t",Zi="d",au="s",er="r",lu="e",tr="o",nr="a",sr="n",ir="p",cu="h";class hu{constructor(e,t,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=en("c:"+this.id+":"),this.transportManager_=new jt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Bt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ou?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ru?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ts in e){const t=e[ts];t===nr?this.upgradeIfSecondaryHealthy_():t===er?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===tr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Pt("t",e),s=Pt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ir,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:nr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:sr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Pt("t",e),s=Pt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Pt(ts,e);if(Zi in e){const s=e[Zi];if(t===cu){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===sr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===au?this.onConnectionShutdown_(s):t===er?this.onReset_(s):t===lu?gs("Server Error: "+s):t===tr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Os!==s&&fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Bt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(su))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ir,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends $o{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!so()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gn}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=32,or=768;class Y{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function K(){return new Y("")}function $(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function qe(n){return n.pieces_.length-n.pieceNum_}function J(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Y(n.pieces_,e)}function Ho(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function uu(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Uo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Wo(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Y(e,0)}function ne(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Y)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Y(t,0)}function U(n){return n.pieceNum_>=n.pieces_.length}function ue(n,e){const t=$(n),s=$(e);if(t===null)return e;if(t===s)return ue(J(n),J(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Bs(n,e){if(qe(n)!==qe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ee(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(qe(n)>qe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class du{constructor(e,t){this.errorPrefix_=t,this.parts_=Uo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ln(this.parts_[s]);Vo(this)}}function fu(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ln(e),Vo(n)}function pu(n){const e=n.parts_.pop();n.byteLength_-=Ln(e),n.parts_.length>0&&(n.byteLength_-=1)}function Vo(n){if(n.byteLength_>or)throw new Error(n.errorPrefix_+"has a key path longer than "+or+" bytes ("+n.byteLength_+").");if(n.parts_.length>rr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rr+") or object contains a cycle "+Ye(n))}function Ye(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends $o{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new $s}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=1e3,_u=60*5*1e3,ar=30*1e3,mu=1.3,gu=3e4,yu="server_kill",lr=3;class Pe extends Bo{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pe.nextPersistentConnectionId_++,this.log_=en("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mt,this.maxReconnectDelay_=_u,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!io())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$s.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(re(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new xn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Pe.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Le(e,"w")){const s=It(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||oc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ar)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=rc(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):gs("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gu&&(this.reconnectDelay_=Mt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ae("getToken() completed but was canceled"):(ae("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new hu(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{fe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(yu)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&fe(u),l())}}}interrupt(e){ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fi(this.interruptReasons_)&&(this.reconnectDelay_=Mt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>xs(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Y(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ae("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lr&&(this.reconnectDelay_=ar,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ae("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+mo.replace(/\./g,"-")]=1,so()?e["framework.cordova"]=1:ec()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gn.getInstance().currentlyOnline();return Fi(this.interruptReasons_)&&e}}Pe.nextPersistentConnectionId_=0;Pe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new H(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new H(bt,e),i=new H(bt,t);return this.compare(s,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln;class qo extends Fn{static get __EMPTY_NODE(){return ln}static set __EMPTY_NODE(e){ln=e}compare(e,t){return kt(e.name,t.name)}isDefinedOn(e){throw Rt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return H.MIN}maxPost(){return new H(tt,ln)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,ln)}toString(){return".key"}}const wt=new qo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ie{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ie.RED,this.left=i??de.EMPTY_NODE,this.right=r??de.EMPTY_NODE}copy(e,t,s,i,r){return new ie(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return de.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return de.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ie.RED=!0;ie.BLACK=!1;class vu{copy(e,t,s,i,r){return this}insert(e,t,s){return new ie(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class de{constructor(e,t=de.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new de(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ie.BLACK,null,null))}remove(e){return new de(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ie.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new cn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new cn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new cn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new cn(this.root_,null,this.comparator_,!0,e)}}de.EMPTY_NODE=new vu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n,e){return kt(n.name,e.name)}function Hs(n,e){return kt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs;function wu(n){vs=n}const jo=function(n){return typeof n=="number"?"number:"+wo(n):"string:"+n},Go=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Le(e,".sv"),"Priority must be a string or number.")}else m(n===vs||n.isEmpty(),"priority of unexpected type.");m(n===vs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr;class se{constructor(e,t=se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Go(this.priorityNode_)}static set __childrenNodeConstructor(e){cr=e}static get __childrenNodeConstructor(){return cr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:$(e)===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=$(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||qe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,se.__childrenNodeConstructor.EMPTY_NODE.updateChild(J(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=wo(this.value_):e+=this.value_,this.lazyHash_=yo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof se.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=se.VALUE_TYPE_ORDER.indexOf(t),r=se.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo,Ko;function Eu(n){zo=n}function Iu(n){Ko=n}class bu extends Fn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?kt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return H.MIN}maxPost(){return new H(tt,new se("[PRIORITY-POST]",Ko))}makePost(e,t){const s=zo(e);return new H(t,new se("[PRIORITY-POST]",s))}toString(){return".priority"}}const te=new bu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=Math.log(2);class Su{constructor(e){const t=r=>parseInt(Math.log(r)/Tu,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yn=function(n,e,t,s){n.sort(e);const i=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new ie(d,u.node,ie.BLACK,null,null);{const f=parseInt(h/2,10)+l,p=i(l,f),v=i(f+1,c);return u=n[f],d=t?t(u):u,new ie(d,u.node,ie.BLACK,p,v)}},r=function(l){let c=null,h=null,u=n.length;const d=function(p,v){const g=u-p,w=u;u-=p;const F=i(g+1,w),R=n[g],S=t?t(R):R;f(new ie(S,R.node,v,null,F))},f=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),g=Math.pow(2,l.count-(p+1));v?d(g,ie.BLACK):(d(g,ie.BLACK),d(g,ie.RED))}return h},o=new Su(n.length),a=r(o);return new de(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns;const dt={};class Ae{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(dt&&te,"ChildrenNode.ts has not been loaded"),ns=ns||new Ae({".priority":dt},{".priority":te}),ns}get(e){const t=It(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof de?t:null}hasIndex(e){return Le(this.indexSet_,e.toString())}addIndex(e,t){m(e!==wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(H.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=yn(s,e.getCompare()):a=dt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Ae(h,c)}addToIndexes(e,t){const s=fn(this.indexes_,(i,r)=>{const o=It(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===dt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(H.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),yn(a,o.getCompare())}else return dt;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new Ae(s,this.indexSet_)}removeFromIndexes(e,t){const s=fn(this.indexes_,i=>{if(i===dt)return i;{const r=t.get(e.name);return r?i.remove(new H(e.name,r)):i}});return new Ae(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt;class M{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Go(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xt||(xt=new M(new de(Hs),null,Ae.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xt}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?xt:t}}getChild(e){const t=$(e);return t===null?this:this.getImmediateChild(t).getChild(J(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new H(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?xt:this.priorityNode_;return new M(i,o,r)}}updateChild(e,t){const s=$(e);if(s===null)return t;{m($(e)!==".priority"||qe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(J(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(te,(o,a)=>{t[o]=a.val(e),s++,r&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+jo(this.getPriority().val())+":"),this.forEachChild(te,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":yo(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new H(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new H(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new H(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tn?-1:0}withIndex(e){if(e===wt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(te),i=t.getIterator(te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wt?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Nu extends M{constructor(){super(new de(Hs),M.EMPTY_NODE,Ae.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const tn=new Nu;Object.defineProperties(H,{MIN:{value:new H(bt,M.EMPTY_NODE)},MAX:{value:new H(tt,tn)}});qo.__EMPTY_NODE=M.EMPTY_NODE;se.__childrenNodeConstructor=M;wu(tn);Iu(tn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=!0;function oe(n,e=null){if(n===null)return M.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new se(t,oe(e))}if(!(n instanceof Array)&&Ru){const t=[];let s=!1;if(_e(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=oe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new H(o,l)))}}),t.length===0)return M.EMPTY_NODE;const r=yn(t,Cu,o=>o.name,Hs);if(s){const o=yn(t,te.getCompare());return new M(r,oe(e),new Ae({".priority":o},{".priority":te}))}else return new M(r,oe(e),Ae.Default)}else{let t=M.EMPTY_NODE;return _e(n,(s,i)=>{if(Le(n,s)&&s.substring(0,1)!=="."){const r=oe(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(oe(e))}}Eu(oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Fn{constructor(e){super(),this.indexPath_=e,m(!U(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?kt(e.name,t.name):r}makePost(e,t){const s=oe(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,s);return new H(t,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,tn);return new H(tt,e)}toString(){return Uo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Fn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?kt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,t){const s=oe(e);return new H(t,s)}toString(){return".value"}}const Du=new Au;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n){return{type:"value",snapshotNode:n}}function Tt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Gt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function zt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Pu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Gt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tt(t,s)):o.trackChildChange(zt(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(te,(i,r)=>{t.hasChild(i)||s.trackChildChange(Gt(i,r))}),t.isLeafNode()||t.forEachChild(te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(zt(i,r,o))}else s.trackChildChange(Tt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.indexedFilter_=new Us(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Kt.getStartPost_(e),this.endPost_=Kt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new H(t,s))||(s=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=M.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const r=this;return t.forEachChild(te,(o,a)=>{r.matches(new H(o,a))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Kt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new H(t,s))||(s=M.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new H(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(zt(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Gt(t,u));const v=a.updateImmediateChild(t,M.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Tt(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Gt(c.name,c.node)),r.trackChildChange(Tt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,M.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new Ws;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xu(n){return n.loadsAllData()?new Us(n.getIndex()):n.hasLimit()?new Mu(n):new Kt(n)}function hr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===te?t="$priority":n.index_===Du?t="$value":n.index_===wt?t="$key":(m(n.index_ instanceof ku,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=re(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=re(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+re(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=re(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+re(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ur(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==te&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Bo{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=en("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vn.getListenId_(e,s),a={};this.listens_[o]=a;const l=hr(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),It(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=vn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=hr(e._queryParams),s=e._path.toString(),i=new xn;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ac(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Vt(a.responseText)}catch{fe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&fe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return{value:null,children:new Map}}function Qo(n,e,t){if(U(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=$(e);n.children.has(s)||n.children.set(s,Cn());const i=n.children.get(s);e=J(e),Qo(i,e,t)}}function Cs(n,e,t){n.value!==null?t(e,n.value):Lu(n,(s,i)=>{const r=new Y(e.toString()+"/"+s);Cs(i,r,t)})}function Lu(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&_e(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=10*1e3,Bu=30*1e3,$u=5*60*1e3;class Hu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Fu(e);const s=dr+(Bu-dr)*Math.random();Bt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;_e(e,(i,r)=>{r>0&&Le(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Bt(this.reportStats_.bind(this),Math.floor(Math.random()*2*$u))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ie||(Ie={}));function Xo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ie.ACK_USER_WRITE,this.source=Xo()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Y(e));return new wn(K(),t,this.revert)}}else return m($(this.path)===e,"operationForChild called for unrelated child."),new wn(J(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this.source=e,this.path=t,this.type=Ie.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new Yt(this.source,K()):new Yt(this.source,J(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ie.OVERWRITE}operationForChild(e){return U(this.path)?new nt(this.source,K(),this.snap.getImmediateChild(e)):new nt(this.source,J(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ie.MERGE}operationForChild(e){if(U(this.path)){const t=this.children.subtree(new Y(e));return t.isEmpty()?null:t.value?new nt(this.source,K(),t.value):new Qt(this.source,K(),t)}else return m($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qt(this.source,J(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const t=$(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Wu(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Pu(o.childName,o.snapshotNode))}),Ot(n,i,"child_removed",e,s,t),Ot(n,i,"child_added",e,s,t),Ot(n,i,"child_moved",r,s,t),Ot(n,i,"child_changed",e,s,t),Ot(n,i,"value",e,s,t),i}function Ot(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>qu(n,a,l)),o.forEach(a=>{const l=Vu(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Vu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function qu(n,e,t){if(e.childName==null||t.childName==null)throw Rt("Should only compare child_ events.");const s=new H(e.childName,e.snapshotNode),i=new H(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n,e){return{eventCache:n,serverCache:e}}function $t(n,e,t,s){return Bn(new st(e,t,s),n.serverCache)}function Jo(n,e,t,s){return Bn(n.eventCache,new st(e,t,s))}function ws(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function it(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss;const ju=()=>(ss||(ss=new de(Ah)),ss);class Z{constructor(e,t=ju()){this.value=e,this.children=t}static fromObject(e){let t=new Z(null);return _e(e,(s,i)=>{t=t.set(new Y(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:K(),value:this.value};if(U(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(J(e),t);return r!=null?{path:ne(new Y(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const t=$(e),s=this.children.get(t);return s!==null?s.subtree(J(e)):new Z(null)}}set(e,t){if(U(e))return new Z(t,this.children);{const s=$(e),r=(this.children.get(s)||new Z(null)).set(J(e),t),o=this.children.insert(s,r);return new Z(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const t=$(e),s=this.children.get(t);if(s){const i=s.remove(J(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Z(null):new Z(this.value,r)}else return this}}get(e){if(U(e))return this.value;{const t=$(e),s=this.children.get(t);return s?s.get(J(e)):null}}setTree(e,t){if(U(e))return t;{const s=$(e),r=(this.children.get(s)||new Z(null)).setTree(J(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Z(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ne(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,K(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(U(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(J(e),ne(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,K(),t)}foreachOnPath_(e,t,s){if(U(e))return this;{this.value&&s(t,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(J(e),ne(t,i),s):new Z(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(ne(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.writeTree_=e}static empty(){return new be(new Z(null))}}function Ht(n,e,t){if(U(e))return new be(new Z(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ue(i,e);return r=r.updateChild(o,t),new be(n.writeTree_.set(i,r))}else{const i=new Z(t),r=n.writeTree_.setTree(e,i);return new be(r)}}}function fr(n,e,t){let s=n;return _e(t,(i,r)=>{s=Ht(s,ne(e,i),r)}),s}function pr(n,e){if(U(e))return be.empty();{const t=n.writeTree_.setTree(e,new Z(null));return new be(t)}}function Es(n,e){return lt(n,e)!=null}function lt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ue(t.path,e)):null}function _r(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(te,(s,i)=>{e.push(new H(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new H(s,i.value))}),e}function We(n,e){if(U(e))return n;{const t=lt(n,e);return t!=null?new be(new Z(t)):new be(n.writeTree_.subtree(e))}}function Is(n){return n.writeTree_.isEmpty()}function St(n,e){return Zo(K(),n.writeTree_,e)}function Zo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Zo(ne(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ne(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n,e){return sa(e,n)}function Gu(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Ht(n.visibleWrites,e,t)),n.lastWriteId=s}function zu(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Ku(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Yu(a,s.path)?i=!1:Ee(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Qu(n),!0;if(s.snap)n.visibleWrites=pr(n.visibleWrites,s.path);else{const a=s.children;_e(a,l=>{n.visibleWrites=pr(n.visibleWrites,ne(s.path,l))})}return!0}else return!1}function Yu(n,e){if(n.snap)return Ee(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ee(ne(n.path,t),e))return!0;return!1}function Qu(n){n.visibleWrites=ea(n.allWrites,Xu,K()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Xu(n){return n.visible}function ea(n,e,t){let s=be.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Ee(t,o)?(a=ue(t,o),s=Ht(s,a,r.snap)):Ee(o,t)&&(a=ue(o,t),s=Ht(s,K(),r.snap.getChild(a)));else if(r.children){if(Ee(t,o))a=ue(t,o),s=fr(s,a,r.children);else if(Ee(o,t))if(a=ue(o,t),U(a))s=fr(s,K(),r.children);else{const l=It(r.children,$(a));if(l){const c=l.getChild(J(a));s=Ht(s,K(),c)}}}else throw Rt("WriteRecord should have .snap or .children")}}return s}function ta(n,e,t,s,i){if(!s&&!i){const r=lt(n.visibleWrites,e);if(r!=null)return r;{const o=We(n.visibleWrites,e);if(Is(o))return t;if(t==null&&!Es(o,K()))return null;{const a=t||M.EMPTY_NODE;return St(o,a)}}}else{const r=We(n.visibleWrites,e);if(!i&&Is(r))return t;if(!i&&t==null&&!Es(r,K()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ee(c.path,e)||Ee(e,c.path))},a=ea(n.allWrites,o,e),l=t||M.EMPTY_NODE;return St(a,l)}}}function Ju(n,e,t){let s=M.EMPTY_NODE;const i=lt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=We(n.visibleWrites,e);return t.forEachChild(te,(o,a)=>{const l=St(We(r,new Y(o)),a);s=s.updateImmediateChild(o,l)}),_r(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=We(n.visibleWrites,e);return _r(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Zu(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ne(e,t);if(Es(n.visibleWrites,r))return null;{const o=We(n.visibleWrites,r);return Is(o)?i.getChild(t):St(o,i.getChild(t))}}function ed(n,e,t,s){const i=ne(e,t),r=lt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=We(n.visibleWrites,i);return St(o,s.getNode().getImmediateChild(t))}else return null}function td(n,e){return lt(n.visibleWrites,e)}function nd(n,e,t,s,i,r,o){let a;const l=We(n.visibleWrites,e),c=lt(l,K());if(c!=null)a=c;else if(t!=null)a=St(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&h.length<i;)u(f,s)!==0&&h.push(f),f=d.getNext();return h}else return[]}function sd(){return{visibleWrites:be.empty(),allWrites:[],lastWriteId:-1}}function En(n,e,t,s){return ta(n.writeTree,n.treePath,e,t,s)}function Gs(n,e){return Ju(n.writeTree,n.treePath,e)}function mr(n,e,t,s){return Zu(n.writeTree,n.treePath,e,t,s)}function In(n,e){return td(n.writeTree,ne(n.treePath,e))}function id(n,e,t,s,i,r){return nd(n.writeTree,n.treePath,e,t,s,i,r)}function zs(n,e,t){return ed(n.writeTree,n.treePath,e,t)}function na(n,e){return sa(ne(n.treePath,e),n.writeTree)}function sa(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,zt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Gt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Tt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,zt(s,e.snapshotNode,i.oldSnap));else throw Rt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ia=new od;class Ks{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new st(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zs(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:it(this.viewCache_),r=id(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n){return{filter:n}}function ld(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function cd(n,e,t,s,i){const r=new rd;let o,a;if(t.type===Ie.OVERWRITE){const c=t;c.source.fromUser?o=bs(n,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=bn(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===Ie.MERGE){const c=t;c.source.fromUser?o=ud(n,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ts(n,e,c.path,c.children,s,i,a,r))}else if(t.type===Ie.ACK_USER_WRITE){const c=t;c.revert?o=pd(n,e,c.path,s,i,r):o=dd(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Ie.LISTEN_COMPLETE)o=fd(n,e,t.path,s,r);else throw Rt("Unknown operation type: "+t.type);const l=r.getChanges();return hd(e,o,l),{viewCache:o,changes:l}}function hd(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ws(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Yo(ws(e)))}}function ra(n,e,t,s,i,r){const o=e.eventCache;if(In(s,t)!=null)return e;{let a,l;if(U(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=it(e),h=c instanceof M?c:M.EMPTY_NODE,u=Gs(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=En(s,it(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=$(t);if(c===".priority"){m(qe(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=mr(s,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=J(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=mr(s,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=zs(s,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,i,r):a=o.getNode()}}return $t(e,a,o.isFullyInitialized()||U(t),n.filter.filtersNodes())}}function bn(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(U(t))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=h.updateFullNode(l.getNode(),f,null)}else{const f=$(t);if(!l.isCompleteForPath(t)&&qe(t)>1)return e;const p=J(t),g=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=h.updatePriority(l.getNode(),g):c=h.updateChild(l.getNode(),f,g,p,ia,null)}const u=Jo(e,c,l.isFullyInitialized()||U(t),h.filtersNodes()),d=new Ks(i,u,r);return ra(n,u,t,i,d,a)}function bs(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const h=new Ks(i,e,r);if(U(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=$t(e,c,!0,n.filter.filtersNodes());else{const u=$(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=$t(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=J(t),f=a.getNode().getImmediateChild(u);let p;if(U(d))p=s;else{const v=h.getCompleteChild(u);v!=null?Ho(d)===".priority"&&v.getChild(Wo(d)).isEmpty()?p=v:p=v.updateChild(d,s):p=M.EMPTY_NODE}if(f.equals(p))l=e;else{const v=n.filter.updateChild(a.getNode(),u,p,d,h,o);l=$t(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function gr(n,e){return n.eventCache.isCompleteForChild(e)}function ud(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=ne(t,l);gr(e,$(h))&&(a=bs(n,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=ne(t,l);gr(e,$(h))||(a=bs(n,a,h,c,i,r,o))}),a}function yr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ts(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;U(t)?c=s:c=new Z(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),p=yr(n,f,d);l=bn(n,l,new Y(u),p,i,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const p=e.serverCache.getNode().getImmediateChild(u),v=yr(n,p,d);l=bn(n,l,new Y(u),v,i,r,o,a)}}),l}function dd(n,e,t,s,i,r,o){if(In(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(U(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return bn(n,e,t,l.getNode().getChild(t),i,r,a,o);if(U(t)){let c=new Z(null);return l.getNode().forEachChild(wt,(h,u)=>{c=c.set(new Y(h),u)}),Ts(n,e,t,c,i,r,a,o)}else return e}else{let c=new Z(null);return s.foreach((h,u)=>{const d=ne(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Ts(n,e,t,c,i,r,a,o)}}function fd(n,e,t,s,i){const r=e.serverCache,o=Jo(e,r.getNode(),r.isFullyInitialized()||U(t),r.isFiltered());return ra(n,o,t,s,ia,i)}function pd(n,e,t,s,i,r){let o;if(In(s,t)!=null)return e;{const a=new Ks(s,e,i),l=e.eventCache.getNode();let c;if(U(t)||$(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=En(s,it(e));else{const u=e.serverCache.getNode();m(u instanceof M,"serverChildren would be complete if leaf node"),h=Gs(s,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=$(t);let u=zs(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,J(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,M.EMPTY_NODE,J(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=En(s,it(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||In(s,K())!=null,$t(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Us(s.getIndex()),r=xu(s);this.processor_=ad(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(M.EMPTY_NODE,a.getNode(),null),h=new st(l,o.isFullyInitialized(),i.filtersNodes()),u=new st(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Bn(u,h),this.eventGenerator_=new Uu(this.query_)}get query(){return this.query_}}function md(n){return n.viewCache_.serverCache.getNode()}function gd(n,e){const t=it(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!U(e)&&!t.getImmediateChild($(e)).isEmpty())?t.getChild(e):null}function vr(n){return n.eventRegistrations_.length===0}function yd(n,e){n.eventRegistrations_.push(e)}function Cr(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function wr(n,e,t,s){e.type===Ie.MERGE&&e.source.queryId!==null&&(m(it(n.viewCache_),"We should always have a full cache before handling merges"),m(ws(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=cd(n.processor_,i,e,t,s);return ld(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,oa(n,r.changes,r.viewCache.eventCache.getNode(),null)}function vd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(te,(r,o)=>{s.push(Tt(r,o))}),t.isFullyInitialized()&&s.push(Yo(t.getNode())),oa(n,s,t.getNode(),e)}function oa(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Wu(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn;class Cd{constructor(){this.views=new Map}}function wd(n){m(!Tn,"__referenceConstructor has already been defined"),Tn=n}function Ed(){return m(Tn,"Reference.ts has not been loaded"),Tn}function Id(n){return n.views.size===0}function Ys(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),wr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(wr(o,e,t,s));return r}}function bd(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=En(t,i?s:null),l=!1;a?l=!0:s instanceof M?(a=Gs(t,s),l=!1):(a=M.EMPTY_NODE,l=!1);const c=Bn(new st(a,l,!1),new st(s,i,!1));return new _d(e,c)}return o}function Td(n,e,t,s,i,r){const o=bd(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),yd(o,t),vd(o,t)}function Sd(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=je(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Cr(c,t,s)),vr(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Cr(l,t,s)),vr(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!je(n)&&r.push(new(Ed())(e._repo,e._path)),{removed:r,events:o}}function aa(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Et(n,e){let t=null;for(const s of n.views.values())t=t||gd(s,e);return t}function la(n,e){if(e._queryParams.loadsAllData())return $n(n);{const s=e._queryIdentifier;return n.views.get(s)}}function ca(n,e){return la(n,e)!=null}function je(n){return $n(n)!=null}function $n(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn;function Nd(n){m(!Sn,"__referenceConstructor has already been defined"),Sn=n}function Rd(){return m(Sn,"Reference.ts has not been loaded"),Sn}let kd=1;class Er{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=sd(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ha(n,e,t,s,i){return Gu(n.pendingWriteTree_,e,t,s,i),i?nn(n,new nt(Xo(),e,t)):[]}function Xe(n,e,t=!1){const s=zu(n.pendingWriteTree_,e);if(Ku(n.pendingWriteTree_,e)){let r=new Z(null);return s.snap!=null?r=r.set(K(),!0):_e(s.children,o=>{r=r.set(new Y(o),!0)}),nn(n,new wn(s.path,r,t))}else return[]}function Hn(n,e,t){return nn(n,new nt(Vs(),e,t))}function Ad(n,e,t){const s=Z.fromObject(t);return nn(n,new Qt(Vs(),e,s))}function Dd(n,e){return nn(n,new Yt(Vs(),e))}function Pd(n,e,t){const s=Xs(n,t);if(s){const i=Js(s),r=i.path,o=i.queryId,a=ue(r,e),l=new Yt(qs(o),a);return Zs(n,r,l)}else return[]}function Ss(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ca(o,e))){const l=Sd(o,e,t,s);Id(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>je(f));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Od(d);for(let p=0;p<f.length;++p){const v=f[p],g=v.query,w=fa(n,v);n.listenProvider_.startListening(Ut(g),Nn(n,g),w.hashFn,w.onComplete)}}}!u&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Ut(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(Un(d));n.listenProvider_.stopListening(Ut(d),f)}))}Ld(n,c)}return a}function Md(n,e,t,s){const i=Xs(n,s);if(i!=null){const r=Js(i),o=r.path,a=r.queryId,l=ue(o,e),c=new nt(qs(a),l,t);return Zs(n,o,c)}else return[]}function xd(n,e,t,s){const i=Xs(n,s);if(i){const r=Js(i),o=r.path,a=r.queryId,l=ue(o,e),c=Z.fromObject(t),h=new Qt(qs(a),l,c);return Zs(n,o,h)}else return[]}function Ir(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=ue(d,i);r=r||Et(f,p),o=o||je(f)});let a=n.syncPointTree_.get(i);a?(o=o||je(a),r=r||Et(a,K())):(a=new Cd,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=M.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const v=Et(p,K());v&&(r=r.updateImmediateChild(f,v))}));const c=ca(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Un(e);m(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Fd();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=js(n.pendingWriteTree_,i);let u=Td(a,e,t,h,r,l);if(!c&&!o&&!s){const d=la(a,e);u=u.concat(Bd(n,e,d))}return u}function Qs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ue(o,e),c=Et(a,l);if(c)return c});return ta(i,e,r,t,!0)}function nn(n,e){return ua(e,n.syncPointTree_,null,js(n.pendingWriteTree_,K()))}function ua(n,e,t,s){if(U(n.path))return da(n,e,t,s);{const i=e.get(K());t==null&&i!=null&&(t=Et(i,K()));let r=[];const o=$(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=na(s,o);r=r.concat(ua(a,l,c,h))}return i&&(r=r.concat(Ys(i,n,s,t))),r}}function da(n,e,t,s){const i=e.get(K());t==null&&i!=null&&(t=Et(i,K()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=na(s,o),h=n.operationForChild(o);h&&(r=r.concat(da(h,a,l,c)))}),i&&(r=r.concat(Ys(i,n,s,t))),r}function fa(n,e){const t=e.query,s=Nn(n,t);return{hashFn:()=>(md(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Pd(n,t._path,s):Dd(n,t._path);{const r=Mh(i,t);return Ss(n,t,null,r)}}}}function Nn(n,e){const t=Un(e);return n.queryToTagMap.get(t)}function Un(n){return n._path.toString()+"$"+n._queryIdentifier}function Xs(n,e){return n.tagToQueryMap.get(e)}function Js(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Y(n.substr(0,e))}}function Zs(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=js(n.pendingWriteTree_,e);return Ys(s,t,i,null)}function Od(n){return n.fold((e,t,s)=>{if(t&&je(t))return[$n(t)];{let i=[];return t&&(i=aa(t)),_e(s,(r,o)=>{i=i.concat(o)}),i}})}function Ut(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Rd())(n._repo,n._path):n}function Ld(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Un(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Fd(){return kd++}function Bd(n,e,t){const s=e._path,i=Nn(n,e),r=fa(n,t),o=n.listenProvider_.startListening(Ut(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!je(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!U(c)&&h&&je(h))return[$n(h).query];{let d=[];return h&&(d=d.concat(aa(h).map(f=>f.query))),_e(u,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Ut(h),Nn(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ei(t)}node(){return this.node_}}class ti{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ne(this.path_,e);return new ti(this.syncTree_,t)}node(){return Qs(this.syncTree_,this.path_)}}const $d=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},br=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Hd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Ud(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Hd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Ud=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Wd=function(n,e,t,s){return ni(e,new ti(t,n),s)},pa=function(n,e,t){return ni(n,new ei(e),t)};function ni(n,e,t){const s=n.getPriority().val(),i=br(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=br(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new se(a,oe(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new se(i))),o.forEachChild(te,(a,l)=>{const c=ni(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ii(n,e){let t=e instanceof Y?e:new Y(e),s=n,i=$(t);for(;i!==null;){const r=It(s.node.children,i)||{children:{},childCount:0};s=new si(i,s,r),t=J(t),i=$(t)}return s}function Dt(n){return n.node.value}function _a(n,e){n.node.value=e,Ns(n)}function ma(n){return n.node.childCount>0}function Vd(n){return Dt(n)===void 0&&!ma(n)}function Wn(n,e){_e(n.node.children,(t,s)=>{e(new si(t,n,s))})}function ga(n,e,t,s){t&&!s&&e(n),Wn(n,i=>{ga(i,e,!0,s)}),t&&s&&e(n)}function qd(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function sn(n){return new Y(n.parent===null?n.name:sn(n.parent)+"/"+n.name)}function Ns(n){n.parent!==null&&jd(n.parent,n.name,n)}function jd(n,e,t){const s=Vd(t),i=Le(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Ns(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Ns(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=/[\[\].#$\/\u0000-\u001F\u007F]/,zd=/[\[\].#$\u0000-\u001F\u007F]/,is=10*1024*1024,ya=function(n){return typeof n=="string"&&n.length!==0&&!Gd.test(n)},va=function(n){return typeof n=="string"&&n.length!==0&&!zd.test(n)},Kd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),va(n)},Ca=function(n,e,t,s){s&&e===void 0||ri(Ds(n,"value"),e,t)},ri=function(n,e,t){const s=t instanceof Y?new du(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ye(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ye(s)+" with contents = "+e.toString());if(vo(e))throw new Error(n+"contains "+e.toString()+" "+Ye(s));if(typeof e=="string"&&e.length>is/3&&Ln(e)>is)throw new Error(n+"contains a string greater than "+is+" utf8 bytes "+Ye(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(_e(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ya(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ye(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fu(s,o),ri(n,a,s),pu(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ye(s)+" in addition to actual children.")}},wa=function(n,e,t,s){if(!(s&&t===void 0)&&!va(t))throw new Error(Ds(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Yd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wa(n,e,t,s)},Ea=function(n,e){if($(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Qd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ya(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Kd(t))throw new Error(Ds(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oi(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Bs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Ia(n,e,t){oi(n,t),ba(n,s=>Bs(s,e))}function Oe(n,e,t){oi(n,t),ba(n,s=>Ee(s,e)||Ee(e,s))}function ba(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Jd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Jd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ze&&ae("event: "+t.toString()),At(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="repo_interrupt",ef=25;class tf{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Xd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cn(),this.transactionQueueTree_=new si,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nf(n,e,t){if(n.stats_=Ls(n.repoInfo_),n.forceRestClient_||Fh())n.server_=new vn(n.repoInfo_,(s,i,r,o)=>{Tr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Sr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Pe(n.repoInfo_,e,(s,i,r,o)=>{Tr(n,s,i,r,o)},s=>{Sr(n,s)},s=>{sf(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Wh(n.repoInfo_,()=>new Hu(n.stats_,n.server_)),n.infoData_=new Ou,n.infoSyncTree_=new Er({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Hn(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),li(n,"connected",!1),n.serverSyncTree_=new Er({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Oe(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ta(n){const t=n.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ai(n){return $d({timestamp:Ta(n)})}function Tr(n,e,t,s,i){n.dataUpdateCount++;const r=new Y(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=fn(t,c=>oe(c));o=xd(n.serverSyncTree_,r,l,i)}else{const l=oe(t);o=Md(n.serverSyncTree_,r,l,i)}else if(s){const l=fn(t,c=>oe(c));o=Ad(n.serverSyncTree_,r,l)}else{const l=oe(t);o=Hn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Vn(n,r)),Oe(n.eventQueue_,a,o)}function Sr(n,e){li(n,"connected",e),e===!1&&of(n)}function sf(n,e){_e(e,(t,s)=>{li(n,t,s)})}function li(n,e,t){const s=new Y("/.info/"+e),i=oe(t);n.infoData_.updateSnapshot(s,i);const r=Hn(n.infoSyncTree_,s,i);Oe(n.eventQueue_,s,r)}function Sa(n){return n.nextWriteId_++}function rf(n,e,t,s,i){ci(n,"set",{path:e.toString(),value:t,priority:s});const r=ai(n),o=oe(t,s),a=Qs(n.serverSyncTree_,e),l=pa(o,a,r),c=Sa(n),h=ha(n.serverSyncTree_,e,l,c,!0);oi(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||fe("set at "+e+" failed: "+d);const v=Xe(n.serverSyncTree_,c,!p);Oe(n.eventQueue_,e,v),cf(n,i,d,f)});const u=Da(n,e);Vn(n,u),Oe(n.eventQueue_,u,[])}function of(n){ci(n,"onDisconnectEvents");const e=ai(n),t=Cn();Cs(n.onDisconnect_,K(),(i,r)=>{const o=Wd(i,r,n.serverSyncTree_,e);Qo(t,i,o)});let s=[];Cs(t,K(),(i,r)=>{s=s.concat(Hn(n.serverSyncTree_,i,r));const o=Da(n,i);Vn(n,o)}),n.onDisconnect_=Cn(),Oe(n.eventQueue_,K(),s)}function af(n,e,t){let s;$(e._path)===".info"?s=Ir(n.infoSyncTree_,e,t):s=Ir(n.serverSyncTree_,e,t),Ia(n.eventQueue_,e._path,s)}function Nr(n,e,t){let s;$(e._path)===".info"?s=Ss(n.infoSyncTree_,e,t):s=Ss(n.serverSyncTree_,e,t),Ia(n.eventQueue_,e._path,s)}function lf(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Zd)}function ci(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ae(t,...e)}function cf(n,e,t,s){e&&At(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Na(n,e,t){return Qs(n.serverSyncTree_,e,t)||M.EMPTY_NODE}function hi(n,e=n.transactionQueueTree_){if(e||qn(n,e),Dt(e)){const t=ka(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&hf(n,sn(e),t)}else ma(e)&&Wn(e,t=>{hi(n,t)})}function hf(n,e,t){const s=t.map(c=>c.currentWriteId),i=Na(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];m(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ue(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ci(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Xe(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();qn(n,ii(n.transactionQueueTree_,e)),hi(n,n.transactionQueueTree_),Oe(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)At(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{fe("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Vn(n,e)}},o)}function Vn(n,e){const t=Ra(n,e),s=sn(t),i=ka(n,t);return uf(n,i,s),s}function uf(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ue(t,l.path);let h=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,i=i.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ef)h=!0,u="maxretry",i=i.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Na(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){ri("transaction failed: Data returned ",f,l.path);let p=oe(f);typeof f=="object"&&f!=null&&Le(f,".priority")||(p=p.updatePriority(d.getPriority()));const g=l.currentWriteId,w=ai(n),F=pa(p,d,w);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=F,l.currentWriteId=Sa(n),o.splice(o.indexOf(g),1),i=i.concat(ha(n.serverSyncTree_,l.path,F,l.currentWriteId,l.applyLocally)),i=i.concat(Xe(n.serverSyncTree_,g,!0))}else h=!0,u="nodata",i=i.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0))}Oe(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}qn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)At(s[a]);hi(n,n.transactionQueueTree_)}function Ra(n,e){let t,s=n.transactionQueueTree_;for(t=$(e);t!==null&&Dt(s)===void 0;)s=ii(s,t),e=J(e),t=$(e);return s}function ka(n,e){const t=[];return Aa(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Aa(n,e,t){const s=Dt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Wn(e,i=>{Aa(n,i,t)})}function qn(n,e){const t=Dt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,_a(e,t.length>0?t:void 0)}Wn(e,s=>{qn(n,s)})}function Da(n,e){const t=sn(Ra(n,e)),s=ii(n.transactionQueueTree_,e);return qd(s,i=>{rs(n,i)}),rs(n,s),ga(s,i=>{rs(n,i)}),t}function rs(n,e){const t=Dt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Xe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_a(e,void 0):t.length=r+1,Oe(n.eventQueue_,sn(e),i);for(let o=0;o<s.length;o++)At(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ff(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):fe(`Invalid query segment '${t}' in query '${n}'`)}return e}const Rr=function(n,e){const t=pf(n),s=t.namespace;t.domain==="firebase.com"&&xe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&xe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Rh();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Do(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Y(t.pathString)}},pf=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=df(n.substring(h,u)));const d=ff(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",_f=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=kr.charAt(t%64),t=Math.floor(t/64);m(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=kr.charAt(e[i]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class Ma{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return U(this._path)?null:Ho(this._path)}get ref(){return new Fe(this._repo,this._path)}get _queryIdentifier(){const e=ur(this._queryParams),t=xs(e);return t==="{}"?"default":t}get _queryObject(){return ur(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof ui))return!1;const t=this._repo===e._repo,s=Bs(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uu(this._path)}}class Fe extends ui{constructor(e,t){super(e,t,new Ws,!1)}get parent(){const e=Wo(this._path);return e===null?null:new Fe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Y(e),s=Nt(this.ref,e);return new Xt(this._node.getChild(t),s,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xt(i,Nt(this.ref,s),te)))}hasChild(e){const t=new Y(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xa(n,e){return n=Ge(n),n._checkNotDeleted("ref"),e!==void 0?Nt(n._root,e):n._root}function Nt(n,e){return n=Ge(n),$(n._path)===null?Yd("child","path",e,!1):wa("child","path",e,!1),new Fe(n._repo,ne(n._path,e))}function gf(n,e){n=Ge(n),Ea("push",n._path),Ca("push",e,n._path,!0);const t=Ta(n._repo),s=_f(t),i=Nt(n,s),r=Nt(n,s);let o;return e!=null?o=Oa(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Oa(n,e){n=Ge(n),Ea("set",n._path),Ca("set",e,n._path,!1);const t=new xn;return rf(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class di{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Pa("value",this,new Xt(e.snapshotNode,new Fe(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ma(this,e,t):null}matches(e){return e instanceof di?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class fi{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ma(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");const s=Nt(new Fe(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Pa(e.type,this,new Xt(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof fi?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function yf(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(h,u)=>{Nr(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new mf(t,r||void 0),a=e==="value"?new di(o):new fi(e,o);return af(n._repo,n,a),()=>Nr(n._repo,n,a)}function vf(n,e,t,s){return yf(n,"value",e,t,s)}wd(Fe);Nd(Fe);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="FIREBASE_DATABASE_EMULATOR_HOST",Rs={};let wf=!1;function Ef(n,e,t,s){n.repoInfo_=new Do(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function If(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||xe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ae("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Rr(r,i),a=o.repoInfo,l,c;typeof process<"u"&&zi&&(c=zi[Cf]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Rr(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new Ct(Ct.OWNER):new $h(n.name,n.options,e);Qd("Invalid Firebase Database URL",o),U(o.path)||xe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Tf(a,n,h,new Bh(n.name,t));return new Sf(u,n)}function bf(n,e){const t=Rs[e];(!t||t[n.key]!==n)&&xe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),lf(n),delete t[n.key]}function Tf(n,e,t,s){let i=Rs[e.name];i||(i={},Rs[e.name]=i);let r=i[n.toURLString()];return r&&xe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new tf(n,wf,t,s),i[n.toURLString()]=r,r}class Sf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nf(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fe(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(bf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xe("Cannot call "+e+" on a deleted database.")}}function La(n=fo(),e){const t=Jt(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Ql("database");s&&Nf(t,...s)}return t}function Nf(n,e,t,s={}){n=Ge(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&xe("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&xe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ct(Ct.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Xl(s.mockUserToken,n.app.options.projectId);r=new Ct(o)}Ef(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){Ih(ch),Ve(new Me("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return If(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ne(Ki,Yi,n),Ne(Ki,Yi,"esm2017")}Pe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Pe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Rf();async function kf(n){const e=La(),t=xa(e,n);return new Promise((s,i)=>{vf(t,r=>{const o=r.val()||[];s(o)},r=>{i(r)})})}async function Af(n){const e=La(),t=xa(e,"UserData/CompletionTimes"),s=new Date().toLocaleString(),i=gf(t);return Oa(i,{time:n,timestamp:s}),i.key}const Fa="@firebase/installations",pi="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=1e4,$a=`w:${pi}`,Ha="FIS_v2",Df="https://firebaseinstallations.googleapis.com/v1",Pf=60*60*1e3,Mf="installations",xf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rt=new On(Mf,xf,Of);function Ua(n){return n instanceof at&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa({projectId:n}){return`${Df}/projects/${n}/installations`}function Va(n){return{token:n.token,requestStatus:2,expiresIn:Ff(n.expiresIn),creationTime:Date.now()}}async function qa(n,e){const s=(await e.json()).error;return rt.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ja({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Lf(n,{refreshToken:e}){const t=ja(n);return t.append("Authorization",Bf(e)),t}async function Ga(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Ff(n){return Number(n.replace("s","000"))}function Bf(n){return`${Ha} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Wa(n),i=ja(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:t,authVersion:Ha,appId:n.appId,sdkVersion:$a},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ga(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Va(c.authToken)}}else throw await qa("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=/^[cdef][\w-]{21}$/,ks="";function Wf(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Vf(n);return Uf.test(t)?t:ks}catch{return ks}}function Vf(n){return Hf(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new Map;function Ya(n,e){const t=jn(n);Qa(t,e),qf(t,e)}function Qa(n,e){const t=Ka.get(n);if(t)for(const s of t)s(e)}function qf(n,e){const t=jf();t&&t.postMessage({key:n,fid:e}),Gf()}let Je=null;function jf(){return!Je&&"BroadcastChannel"in self&&(Je=new BroadcastChannel("[Firebase] FID Change"),Je.onmessage=n=>{Qa(n.data.key,n.data.fid)}),Je}function Gf(){Ka.size===0&&Je&&(Je.close(),Je=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="firebase-installations-database",Kf=1,ot="firebase-installations-store";let os=null;function _i(){return os||(os=ho(zf,Kf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ot)}}})),os}async function Rn(n,e){const t=jn(n),i=(await _i()).transaction(ot,"readwrite"),r=i.objectStore(ot),o=await r.get(t);return await r.put(e,t),await i.done,(!o||o.fid!==e.fid)&&Ya(n,e.fid),e}async function Xa(n){const e=jn(n),s=(await _i()).transaction(ot,"readwrite");await s.objectStore(ot).delete(e),await s.done}async function Gn(n,e){const t=jn(n),i=(await _i()).transaction(ot,"readwrite"),r=i.objectStore(ot),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&Ya(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(n){let e;const t=await Gn(n.appConfig,s=>{const i=Yf(s),r=Qf(n,i);return e=r.registrationPromise,r.installationEntry});return t.fid===ks?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Yf(n){const e=n||{fid:Wf(),registrationStatus:0};return Ja(e)}function Qf(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(rt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Xf(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Jf(n)}:{installationEntry:e}}async function Xf(n,e){try{const t=await $f(n,e);return Rn(n.appConfig,t)}catch(t){throw Ua(t)&&t.customData.serverCode===409?await Xa(n.appConfig):await Rn(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Jf(n){let e=await Ar(n.appConfig);for(;e.registrationStatus===1;)await za(100),e=await Ar(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await mi(n);return s||t}return e}function Ar(n){return Gn(n,e=>{if(!e)throw rt.create("installation-not-found");return Ja(e)})}function Ja(n){return Zf(n)?{fid:n.fid,registrationStatus:0}:n}function Zf(n){return n.registrationStatus===1&&n.registrationTime+Ba<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep({appConfig:n,heartbeatServiceProvider:e},t){const s=tp(n,t),i=Lf(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:$a,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ga(()=>fetch(s,a));if(l.ok){const c=await l.json();return Va(c)}else throw await qa("Generate Auth Token",l)}function tp(n,{fid:e}){return`${Wa(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(n,e=!1){let t;const s=await Gn(n.appConfig,r=>{if(!Za(r))throw rt.create("not-registered");const o=r.authToken;if(!e&&ip(o))return r;if(o.requestStatus===1)return t=np(n,e),r;{if(!navigator.onLine)throw rt.create("app-offline");const a=op(r);return t=sp(n,a),a}});return t?await t:s.authToken}async function np(n,e){let t=await Dr(n.appConfig);for(;t.authToken.requestStatus===1;)await za(100),t=await Dr(n.appConfig);const s=t.authToken;return s.requestStatus===0?gi(n,e):s}function Dr(n){return Gn(n,e=>{if(!Za(e))throw rt.create("not-registered");const t=e.authToken;return ap(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sp(n,e){try{const t=await ep(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Rn(n.appConfig,s),t}catch(t){if(Ua(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Xa(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rn(n.appConfig,s)}throw t}}function Za(n){return n!==void 0&&n.registrationStatus===2}function ip(n){return n.requestStatus===2&&!rp(n)}function rp(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Pf}function op(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function ap(n){return n.requestStatus===1&&n.requestTime+Ba<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(n){const e=n,{installationEntry:t,registrationPromise:s}=await mi(e);return s?s.catch(console.error):gi(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(n,e=!1){const t=n;return await hp(t),(await gi(t,e)).token}async function hp(n){const{registrationPromise:e}=await mi(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n){if(!n||!n.options)throw as("App Configuration");if(!n.name)throw as("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw as(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function as(n){return rt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="installations",dp="installations-internal",fp=n=>{const e=n.getProvider("app").getImmediate(),t=up(e),s=Jt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},pp=n=>{const e=n.getProvider("app").getImmediate(),t=Jt(e,el).getImmediate();return{getId:()=>lp(t),getToken:i=>cp(t,i)}};function _p(){Ve(new Me(el,fp,"PUBLIC")),Ve(new Me(dp,pp,"PRIVATE"))}_p();Ne(Fa,pi);Ne(Fa,pi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="analytics",mp="firebase_id",gp="origin",yp=60*1e3,vp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Ps("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ve=new On("analytics","Analytics",Cp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n){if(!n.startsWith(yi)){const e=ve.create("invalid-gtag-resource",{gtagURL:n});return pe.warn(e.message),""}return n}function tl(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Ep(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Ip(n,e){const t=Ep("firebase-js-sdk-policy",{createScriptURL:wp}),s=document.createElement("script"),i=`${yi}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function bp(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Tp(n,e,t,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await tl(t)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){pe.error(a)}n("config",i,r)}async function Sp(n,e,t,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await tl(t);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",s,i||{})}catch(r){pe.error(r)}}function Np(n,e,t,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await Sp(n,e,t,a,l)}else if(r==="config"){const[a,l]=o;await Tp(n,e,t,s,a,l)}else if(r==="consent"){const[a]=o;n("consent","update",a)}else if(r==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){pe.error(a)}}return i}function Rp(n,e,t,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Np(r,n,e,t),{gtagCore:r,wrappedGtag:window[i]}}function kp(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(yi)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=30,Dp=1e3;class Pp{constructor(e={},t=Dp){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nl=new Pp;function Mp(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function xp(n){var e;const{appId:t,apiKey:s}=n,i={method:"GET",headers:Mp(s)},r=vp.replace("{app-id}",t),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ve.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Op(n,e=nl,t){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw ve.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw ve.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Bp;return setTimeout(async()=>{a.abort()},t!==void 0?t:yp),sl({appId:s,apiKey:i,measurementId:r},o,a,e)}async function sl(n,{throttleEndTimeMillis:e,backoffCount:t},s,i=nl){var r;const{appId:o,measurementId:a}=n;try{await Lp(s,e)}catch(l){if(a)return pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await xp(n);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Fp(c)){if(i.deleteThrottleMetadata(o),a)return pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?$i(t,i.intervalMillis,Ap):$i(t,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:t+1};return i.setThrottleMetadata(o,u),pe.debug(`Calling attemptFetch again in ${h} millis`),sl(n,u,s,i)}}function Lp(n,e){return new Promise((t,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(r),s(ve.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Fp(n){if(!(n instanceof at)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Bp{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function $p(n,e,t,s,i){if(i&&i.global){n("event",t,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(){if(ro())try{await oo()}catch(n){return pe.warn(ve.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return pe.warn(ve.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Up(n,e,t,s,i,r,o){var a;const l=Op(n);l.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&pe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>pe.error(f)),e.push(l);const c=Hp().then(f=>{if(f)return s.getId()}),[h,u]=await Promise.all([l,c]);kp(r)||Ip(r,h.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[gp]="firebase",d.update=!0,u!=null&&(d[mp]=u),i("config",h.measurementId,d),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.app=e}_delete(){return delete Wt[this.app.options.appId],Promise.resolve()}}let Wt={},Pr=[];const Mr={};let ls="dataLayer",Vp="gtag",xr,il,Or=!1;function qp(){const n=[];if(Zl()&&n.push("This is a browser extension environment."),tc()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),t=ve.create("invalid-analytics-context",{errorInfo:e});pe.warn(t.message)}}function jp(n,e,t){qp();const s=n.options.appId;if(!s)throw ve.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ve.create("no-api-key");if(Wt[s]!=null)throw ve.create("already-exists",{id:s});if(!Or){bp(ls);const{wrappedGtag:r,gtagCore:o}=Rp(Wt,Pr,Mr,ls,Vp);il=r,xr=o,Or=!0}return Wt[s]=Up(n,Pr,Mr,e,xr,ls,t),new Wp(n)}function Gp(n=fo()){n=Ge(n);const e=Jt(n,kn);return e.isInitialized()?e.getImmediate():zp(n)}function zp(n,e={}){const t=Jt(n,kn);if(t.isInitialized()){const i=t.getImmediate();if(pn(e,t.getOptions()))return i;throw ve.create("already-initialized")}return t.initialize({options:e})}function rl(n,e,t,s){n=Ge(n),$p(il,Wt[n.app.options.appId],e,t,s).catch(i=>pe.error(i))}const Lr="@firebase/analytics",Fr="0.10.1";function Kp(){Ve(new Me(kn,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return jp(s,i,t)},"PUBLIC")),Ve(new Me("analytics-internal",n,"PRIVATE")),Ne(Lr,Fr),Ne(Lr,Fr,"esm2017");function n(e){try{const t=e.getProvider(kn).getImmediate();return{logEvent:(s,i,r)=>rl(t,s,i,r)}}catch(t){throw ve.create("interop-component-reg-failed",{reason:t})}}}Kp();function Yp(n){let e,t,s=ke(n[2])+"",i,r,o,a=ke(n[1])+"",l,c,h,u=ke(n[0])+"",d;return{c(){e=b("span"),t=b("span"),i=me(s),r=me(":"),o=b("span"),l=me(a),c=me(":"),h=b("span"),d=me(u),this.h()},l(f){e=T(f,"SPAN",{class:!0});var p=G(e);t=T(p,"SPAN",{class:!0});var v=G(t);i=ge(v,s),v.forEach(y),r=ge(p,":"),o=T(p,"SPAN",{class:!0});var g=G(o);l=ge(g,a),g.forEach(y),c=ge(p,":"),h=T(p,"SPAN",{class:!0});var w=G(h);d=ge(w,u),w.forEach(y),p.forEach(y),this.h()},h(){P(t,"class","value"),P(o,"class","value"),P(h,"class","value"),P(e,"class","timer svelte-1y1osaq")},m(f,p){D(f,e,p),I(e,t),I(t,i),I(e,r),I(e,o),I(o,l),I(e,c),I(e,h),I(h,d)},p(f,[p]){p&4&&s!==(s=ke(f[2])+"")&&De(i,s),p&2&&a!==(a=ke(f[1])+"")&&De(l,a),p&1&&u!==(u=ke(f[0])+"")&&De(d,u)},i:ye,o:ye,d(f){f&&y(e)}}}function ke(n){return n<10?`0${n}`:n.toString()}function Qp(n,e,t){let s,i,r,o,a,l,{elapsedSeconds:c}=e,h=Date.now(),u=cs(!1);hn(n,u,w=>t(12,o=w));let d=cs(0);hn(n,d,w=>t(13,a=w));const f=bl(0,function(F){const S=setInterval(()=>{o&&(d.set(Math.round((Date.now()-h)/1e3)),F(a))},1e3);return function(){clearInterval(S)}});hn(n,f,w=>t(10,l=w));function p(){o||(h=Date.now()-a*1e3,u.set(!0))}function v(){o&&u.set(!1)}function g(){v(),h=Date.now(),d.set(0)}return n.$$set=w=>{"elapsedSeconds"in w&&t(6,c=w.elapsedSeconds)},n.$$.update=()=>{n.$$.dirty&1024&&t(2,s=Math.floor(l/3600)),n.$$.dirty&1028&&t(1,i=Math.floor((l-s*3600)/60)),n.$$.dirty&1030&&t(0,r=l-s*3600-i*60),n.$$.dirty&7&&t(6,c=ke(s)+":"+ke(i)+":"+ke(r))},[r,i,s,u,d,f,c,p,v,g,l]}class Xp extends Pn{constructor(e){super(),Mn(this,e,Qp,Yp,Dn,{elapsedSeconds:6,start:7,stop:8,reset:9})}get start(){return this.$$.ctx[7]}get stop(){return this.$$.ctx[8]}get reset(){return this.$$.ctx[9]}}function Br(n,e,t){const s=n.slice();return s[31]=e[t],s}function $r(n,e,t){const s=n.slice();return s[34]=e[t],s[36]=t,s}function Hr(n,e,t){const s=n.slice();return s[34]=e[t],s[36]=t,s}function Jp(n){let e,t="Loading Game...";return{c(){e=b("p"),e.textContent=t},l(s){e=T(s,"P",{"data-svelte-h":!0}),ee(e)!=="svelte-kk77ic"&&(e.textContent=t)},m(s,i){D(s,e,i)},p:ye,d(s){s&&y(e)}}}function Zp(n){let e,t,s,i=[],r=new Map,o,a,l='<i class="fa-solid fa-eraser"></i>',c,h,u='<i class="fa-solid fa-shuffle"></i>',d,f,p='<i class="fa-solid fa-delete-left"></i>',v,g,w="Enter",F,R,S,V,B,N,C=$e(n[4]),E=[];for(let k=0;k<C.length;k+=1)E[k]=Ur(Hr(n,C,k));let x=$e(n[5]);const Q=k=>k[36];for(let k=0;k<x.length;k+=1){let z=$r(n,x,k),_=Q(z);r.set(_,i[k]=Wr(_,z))}return{c(){e=b("div");for(let k=0;k<E.length;k+=1)E[k].c();t=O(),s=b("div");for(let k=0;k<i.length;k+=1)i[k].c();o=O(),a=b("div"),a.innerHTML=l,c=O(),h=b("div"),h.innerHTML=u,d=O(),f=b("div"),f.innerHTML=p,v=O(),g=b("div"),g.textContent=w,F=O(),R=b("p"),S=me("Puzzle for "),V=me(n[8]),this.h()},l(k){e=T(k,"DIV",{class:!0});var z=G(e);for(let le=0;le<E.length;le+=1)E[le].l(z);z.forEach(y),t=L(k),s=T(k,"DIV",{class:!0});var _=G(s);for(let le=0;le<i.length;le+=1)i[le].l(_);o=L(_),a=T(_,"DIV",{class:!0,"data-svelte-h":!0}),ee(a)!=="svelte-qtb4kv"&&(a.innerHTML=l),c=L(_),h=T(_,"DIV",{class:!0,"data-svelte-h":!0}),ee(h)!=="svelte-krp8l1"&&(h.innerHTML=u),d=L(_),f=T(_,"DIV",{class:!0,"data-svelte-h":!0}),ee(f)!=="svelte-1jsmx3m"&&(f.innerHTML=p),v=L(_),g=T(_,"DIV",{class:!0,"data-svelte-h":!0}),ee(g)!=="svelte-1qinv54"&&(g.textContent=w),_.forEach(y),F=L(k),R=T(k,"P",{class:!0});var q=G(R);S=ge(q,"Puzzle for "),V=ge(q,n[8]),q.forEach(y),this.h()},h(){P(e,"class","circle-container svelte-1y9a3pw"),P(a,"class","key svelte-1y9a3pw"),P(h,"class","key svelte-1y9a3pw"),P(f,"class","key svelte-1y9a3pw"),P(g,"class","key enter-key svelte-1y9a3pw"),P(s,"class","keyboard svelte-1y9a3pw"),P(R,"class","date svelte-1y9a3pw")},m(k,z){D(k,e,z);for(let _=0;_<E.length;_+=1)E[_]&&E[_].m(e,null);D(k,t,z),D(k,s,z);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(s,null);I(s,o),I(s,a),I(s,c),I(s,h),I(s,d),I(s,f),I(s,v),I(s,g),D(k,F,z),D(k,R,z),I(R,S),I(R,V),B||(N=[he(a,"click",n[14]),he(h,"click",n[15]),he(f,"click",n[16]),he(g,"click",n[13])],B=!0)},p(k,z){if(z[0]&1040){C=$e(k[4]);let _;for(_=0;_<C.length;_+=1){const q=Hr(k,C,_);E[_]?E[_].p(q,z):(E[_]=Ur(q),E[_].c(),E[_].m(e,null))}for(;_<E.length;_+=1)E[_].d(1);E.length=C.length}z[0]&4640&&(x=$e(k[5]),i=Kr(i,z,Q,1,k,x,r,s,Nl,Wr,o,$r)),z[0]&256&&De(V,k[8])},d(k){k&&(y(e),y(t),y(s),y(F),y(R)),Gr(E,k);for(let z=0;z<i.length;z+=1)i[z].d();B=!1,An(N)}}}function Ur(n){let e,t=(n[34]==""?"":n[34])+"",s,i,r;return{c(){e=b("div"),s=me(t),i=O(),this.h()},l(o){e=T(o,"DIV",{class:!0,style:!0});var a=G(e);s=ge(a,t),i=L(a),a.forEach(y),this.h()},h(){P(e,"class","circle svelte-1y9a3pw"),P(e,"style",r=`
						left: calc(40% + ${Math.cos(n[36]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
						top: calc(37% + ${Math.sin(n[36]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
				`),Ft(e,"filled",n[34]!=""),Ft(e,"shared",n[10].includes(n[36]))},m(o,a){D(o,e,a),I(e,s),I(e,i)},p(o,a){a[0]&16&&t!==(t=(o[34]==""?"":o[34])+"")&&De(s,t),a[0]&16&&r!==(r=`
						left: calc(40% + ${Math.cos(o[36]/o[4].length*2*Math.PI-Math.PI/2)*100}px);
						top: calc(37% + ${Math.sin(o[36]/o[4].length*2*Math.PI-Math.PI/2)*100}px);
				`)&&P(e,"style",r),a[0]&16&&Ft(e,"filled",o[34]!="")},d(o){o&&y(e)}}}function Wr(n,e){let t,s=e[34]+"",i,r,o,a;function l(){return e[24](e[34],e[36])}return{key:n,first:null,c(){t=b("div"),i=me(s),r=O(),this.h()},l(c){t=T(c,"DIV",{class:!0});var h=G(t);i=ge(h,s),r=L(h),h.forEach(y),this.h()},h(){P(t,"class","key svelte-1y9a3pw"),Ft(t,"disabled",e[9](e[36])),this.first=t},m(c,h){D(c,t,h),I(t,i),I(t,r),o||(a=he(t,"click",l),o=!0)},p(c,h){e=c,h[0]&32&&s!==(s=e[34]+"")&&De(i,s),h[0]&544&&Ft(t,"disabled",e[9](e[36]))},d(c){c&&y(t),o=!1,a()}}}function Vr(n){let e,t=jr(n[31])+"",s;return{c(){e=b("div"),s=me(t),this.h()},l(i){e=T(i,"DIV",{class:!0});var r=G(e);s=ge(r,t),r.forEach(y),this.h()},h(){P(e,"class","solution")},m(i,r){D(i,e,r),I(e,s)},p(i,r){r[0]&8&&t!==(t=jr(i[31])+"")&&De(s,t)},d(i){i&&y(e)}}}function e_(n){let e,t,s,i,r,o,a,l="Other Possible Solutions",c,h,u,d,f,p,v,g,w="Share",F,R,S,V,B=$e(n[3]),N=[];for(let C=0;C<B.length;C+=1)N[C]=Vr(Br(n,B,C));return{c(){e=b("span"),t=me("Solved in "),s=me(n[7]),i=O(),r=b("hr"),o=O(),a=b("span"),a.textContent=l,c=O();for(let C=0;C<N.length;C+=1)N[C].c();h=O(),u=b("br"),d=O(),f=b("div"),p=b("div"),v=O(),g=b("button"),g.textContent=w,F=O(),R=b("div"),this.h()},l(C){e=T(C,"SPAN",{class:!0});var E=G(e);t=ge(E,"Solved in "),s=ge(E,n[7]),E.forEach(y),i=L(C),r=T(C,"HR",{}),o=L(C),a=T(C,"SPAN",{class:!0,"data-svelte-h":!0}),ee(a)!=="svelte-zm2m22"&&(a.textContent=l),c=L(C);for(let Q=0;Q<N.length;Q+=1)N[Q].l(C);h=L(C),u=T(C,"BR",{}),d=L(C),f=T(C,"DIV",{class:!0});var x=G(f);p=T(x,"DIV",{class:!0}),G(p).forEach(y),v=L(x),g=T(x,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(g)!=="svelte-1urjot1"&&(g.textContent=w),F=L(x),R=T(x,"DIV",{class:!0}),G(R).forEach(y),x.forEach(y),this.h()},h(){P(e,"class","sub-header svelte-1y9a3pw"),P(a,"class","sub-header svelte-1y9a3pw"),P(p,"class","spacer svelte-1y9a3pw"),P(g,"class","share-button svelte-1y9a3pw"),P(R,"class","spacer svelte-1y9a3pw"),P(f,"class","flex-container svelte-1y9a3pw")},m(C,E){D(C,e,E),I(e,t),I(e,s),D(C,i,E),D(C,r,E),D(C,o,E),D(C,a,E),D(C,c,E);for(let x=0;x<N.length;x+=1)N[x]&&N[x].m(C,E);D(C,h,E),D(C,u,E),D(C,d,E),D(C,f,E),I(f,p),I(f,v),I(f,g),I(f,F),I(f,R),S||(V=he(g,"click",n[17]),S=!0)},p(C,E){if(E[0]&128&&De(s,C[7]),E[0]&8){B=$e(C[3]);let x;for(x=0;x<B.length;x+=1){const Q=Br(C,B,x);N[x]?N[x].p(Q,E):(N[x]=Vr(Q),N[x].c(),N[x].m(h.parentNode,h))}for(;x<N.length;x+=1)N[x].d(1);N.length=B.length}},d(C){C&&(y(e),y(i),y(r),y(o),y(a),y(c),y(h),y(u),y(d),y(f)),Gr(N,C),S=!1,V()}}}function t_(n){let e,t=`<span class="styled-header svelte-1y9a3pw">Congratulations!</span> <br/>
		Share your results with your friends.`;return{c(){e=b("div"),e.innerHTML=t,this.h()},l(s){e=T(s,"DIV",{slot:!0,"data-svelte-h":!0}),ee(e)!=="svelte-jqfhji"&&(e.innerHTML=t),this.h()},h(){P(e,"slot","header")},m(s,i){D(s,e,i)},p:ye,d(s){s&&y(e)}}}function n_(n){let e,t="Find the 8-letter circle word",s,i,r="<li>There are 2 words to find.</li> <li>Letters may only be used once and have to be in the letter bank.</li> <li>The red circles are shared letters between the two words.</li>",o,a,l="Example",c,h,u="If we had these letters:",d,f,p,v,g,w=`We could spell the words 
			<b><span style="color: red;">M</span>USI<span style="color: red;">C</span></b> 
			and 
			<b><span style="color: red;">C</span>HAR<span style="color: red;">M</span> </b>.`,F,R,S='Notice how these words share an <b><span style="color: red;">M</span></b> and a <b><span style="color: red;">C</span></b>.',V,B,N="One correct solution:",C,E,x,Q,k,z="Remember there can be more than one solution.";return{c(){e=b("h3"),e.textContent=t,s=O(),i=b("ul"),i.innerHTML=r,o=O(),a=b("h3"),a.textContent=l,c=O(),h=b("p"),h.textContent=u,d=O(),f=b("img"),v=O(),g=b("p"),g.innerHTML=w,F=O(),R=b("p"),R.innerHTML=S,V=O(),B=b("p"),B.textContent=N,C=O(),E=b("img"),Q=O(),k=b("p"),k.textContent=z,this.h()},l(_){e=T(_,"H3",{"data-svelte-h":!0}),ee(e)!=="svelte-1j8js8f"&&(e.textContent=t),s=L(_),i=T(_,"UL",{class:!0,"data-svelte-h":!0}),ee(i)!=="svelte-wtdfry"&&(i.innerHTML=r),o=L(_),a=T(_,"H3",{"data-svelte-h":!0}),ee(a)!=="svelte-qg4234"&&(a.textContent=l),c=L(_),h=T(_,"P",{"data-svelte-h":!0}),ee(h)!=="svelte-eqhtsw"&&(h.textContent=u),d=L(_),f=T(_,"IMG",{src:!0,alt:!0,style:!0}),v=L(_),g=T(_,"P",{"data-svelte-h":!0}),ee(g)!=="svelte-14urd7p"&&(g.innerHTML=w),F=L(_),R=T(_,"P",{"data-svelte-h":!0}),ee(R)!=="svelte-1xer9do"&&(R.innerHTML=S),V=L(_),B=T(_,"P",{"data-svelte-h":!0}),ee(B)!=="svelte-1tryhud"&&(B.textContent=N),C=L(_),E=T(_,"IMG",{src:!0,alt:!0,style:!0}),Q=L(_),k=T(_,"P",{"data-svelte-h":!0}),ee(k)!=="svelte-1imbt6f"&&(k.textContent=z),this.h()},h(){P(i,"class","definition-list"),Ri(f.src,p=Hl)||P(f,"src",p),P(f,"alt","Welcome"),Lt(f,"width","350px"),Lt(f,"height","auto"),Ri(E.src,x=$l)||P(E,"src",x),P(E,"alt","Welcome"),Lt(E,"width","150px"),Lt(E,"height","auto")},m(_,q){D(_,e,q),D(_,s,q),D(_,i,q),D(_,o,q),D(_,a,q),D(_,c,q),D(_,h,q),D(_,d,q),D(_,f,q),D(_,v,q),D(_,g,q),D(_,F,q),D(_,R,q),D(_,V,q),D(_,B,q),D(_,C,q),D(_,E,q),D(_,Q,q),D(_,k,q)},p:ye,d(_){_&&(y(e),y(s),y(i),y(o),y(a),y(c),y(h),y(d),y(f),y(v),y(g),y(F),y(R),y(V),y(B),y(C),y(E),y(Q),y(k))}}}function s_(n){let e,t='<span class="styled-header svelte-1y9a3pw">How To Play</span>';return{c(){e=b("h2"),e.innerHTML=t,this.h()},l(s){e=T(s,"H2",{slot:!0,"data-svelte-h":!0}),ee(e)!=="svelte-agigkf"&&(e.innerHTML=t),this.h()},h(){P(e,"slot","header")},m(s,i){D(s,e,i)},p:ye,d(s){s&&y(e)}}}function i_(n){let e,t,s,i,r="Resume",o,a,l,c;return{c(){e=b("div"),t=b("div"),s=O(),i=b("button"),i.textContent=r,o=O(),a=b("div"),this.h()},l(h){e=T(h,"DIV",{class:!0});var u=G(e);t=T(u,"DIV",{class:!0}),G(t).forEach(y),s=L(u),i=T(u,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(i)!=="svelte-o41kx2"&&(i.textContent=r),o=L(u),a=T(u,"DIV",{class:!0}),G(a).forEach(y),u.forEach(y),this.h()},h(){P(t,"class","spacer svelte-1y9a3pw"),P(i,"class","share-button svelte-1y9a3pw"),P(a,"class","spacer svelte-1y9a3pw"),P(e,"class","flex-container svelte-1y9a3pw")},m(h,u){D(h,e,u),I(e,t),I(e,s),I(e,i),I(e,o),I(e,a),l||(c=he(i,"click",n[19]),l=!0)},p:ye,d(h){h&&y(e),l=!1,c()}}}function r_(n){let e,t='<span class="styled-header svelte-1y9a3pw">Paused</span>';return{c(){e=b("h2"),e.innerHTML=t,this.h()},l(s){e=T(s,"H2",{slot:!0,"data-svelte-h":!0}),ee(e)!=="svelte-he3kx2"&&(e.innerHTML=t),this.h()},h(){P(e,"slot","header")},m(s,i){D(s,e,i)},p:ye,d(s){s&&y(e)}}}function o_(n){let e,t,s,i='<p class="title svelte-1y9a3pw">LetterLoop</p> <small style="color: rgb(46, 46, 46);">(public beta) · Edited by Henry Macht</small>',r,o,a,l,c='<i class="fa-regular fa-circle-question"></i> <p class="how-to-play svelte-1y9a3pw">How to play</p>',h,u,d,f,p,v,g,w,F,R,S,V='<i class="fa-solid fa-pause"></i>',B,N,C,E,x,Q,k,z,_,q,le,W,ce;f=new Qr({});function ze(A){n[23](A)}let rn={};n[7]!==void 0&&(rn.elapsedSeconds=n[7]),w=new Xp({props:rn}),n[22](w),gt.push(()=>an(w,"elapsedSeconds",ze));function ct(A,j){return A[3].length>0?Zp:Jp}let ht=ct(n),Ce=ht(n);function ol(A){n[25](A)}let vi={$$slots:{header:[t_],default:[e_]},$$scope:{ctx:n}};n[0]!==void 0&&(vi.showModal=n[0]),C=new Kn({props:vi}),gt.push(()=>an(C,"showModal",ol));function al(A){n[26](A)}let Ci={$$slots:{header:[s_],default:[n_]},$$scope:{ctx:n}};n[1]!==void 0&&(Ci.showModal=n[1]),Q=new Kn({props:Ci}),gt.push(()=>an(Q,"showModal",al));function ll(A){n[27](A)}let wi={hide_close:!0,$$slots:{header:[r_],default:[i_]},$$scope:{ctx:n}};return n[2]!==void 0&&(wi.showModal=n[2]),_=new Kn({props:wi}),gt.push(()=>an(_,"showModal",ll)),{c(){e=b("main"),t=b("div"),s=b("div"),s.innerHTML=i,r=O(),o=b("div"),a=O(),l=b("div"),l.innerHTML=c,h=O(),u=b("div"),d=O(),ft(f.$$.fragment),p=O(),v=b("div"),g=b("div"),ft(w.$$.fragment),R=O(),S=b("div"),S.innerHTML=V,B=O(),Ce.c(),N=O(),ft(C.$$.fragment),x=O(),ft(Q.$$.fragment),z=O(),ft(_.$$.fragment),this.h()},l(A){e=T(A,"MAIN",{class:!0});var j=G(e);t=T(j,"DIV",{class:!0});var Re=G(t);s=T(Re,"DIV",{class:!0,"data-svelte-h":!0}),ee(s)!=="svelte-12b2d73"&&(s.innerHTML=i),r=L(Re),o=T(Re,"DIV",{class:!0}),G(o).forEach(y),a=L(Re),l=T(Re,"DIV",{class:!0,"data-svelte-h":!0}),ee(l)!=="svelte-zy39qn"&&(l.innerHTML=c),Re.forEach(y),h=L(j),u=T(j,"DIV",{class:!0}),G(u).forEach(y),d=L(j),pt(f.$$.fragment,j),p=L(j),v=T(j,"DIV",{class:!0});var Be=G(v);g=T(Be,"DIV",{class:!0});var ut=G(g);pt(w.$$.fragment,ut),ut.forEach(y),R=L(Be),S=T(Be,"DIV",{"data-svelte-h":!0}),ee(S)!=="svelte-sbbujr"&&(S.innerHTML=V),Be.forEach(y),B=L(j),Ce.l(j),j.forEach(y),N=L(A),pt(C.$$.fragment,A),x=L(A),pt(Q.$$.fragment,A),z=L(A),pt(_.$$.fragment,A),this.h()},h(){P(s,"class","title-container  svelte-1y9a3pw"),P(o,"class","spacer svelte-1y9a3pw"),P(l,"class","help-container svelte-1y9a3pw"),P(t,"class","nav-flex-container svelte-1y9a3pw"),P(u,"class","divider svelte-1y9a3pw"),P(g,"class","timer-container svelte-1y9a3pw"),P(v,"class","flex-container svelte-1y9a3pw"),P(e,"class","svelte-1y9a3pw")},m(A,j){D(A,e,j),I(e,t),I(t,s),I(t,r),I(t,o),I(t,a),I(t,l),I(e,h),I(e,u),I(e,d),_t(f,e,null),I(e,p),I(e,v),I(v,g),_t(w,g,null),I(v,R),I(v,S),I(e,B),Ce.m(e,null),D(A,N,j),_t(C,A,j),D(A,x,j),_t(Q,A,j),D(A,z,j),_t(_,A,j),le=!0,W||(ce=[he(window,"keydown",El(n[11])),he(l,"click",n[21]),he(S,"click",n[18])],W=!0)},p(A,j){const Re={};!F&&j[0]&128&&(F=!0,Re.elapsedSeconds=A[7],on(()=>F=!1)),w.$set(Re),ht===(ht=ct(A))&&Ce?Ce.p(A,j):(Ce.d(1),Ce=ht(A),Ce&&(Ce.c(),Ce.m(e,null)));const Be={};j[0]&136|j[1]&128&&(Be.$$scope={dirty:j,ctx:A}),!E&&j[0]&1&&(E=!0,Be.showModal=A[0],on(()=>E=!1)),C.$set(Be);const ut={};j[1]&128&&(ut.$$scope={dirty:j,ctx:A}),!k&&j[0]&2&&(k=!0,ut.showModal=A[1],on(()=>k=!1)),Q.$set(ut);const zn={};j[1]&128&&(zn.$$scope={dirty:j,ctx:A}),!q&&j[0]&4&&(q=!0,zn.showModal=A[2],on(()=>q=!1)),_.$set(zn)},i(A){le||(Te(f.$$.fragment,A),Te(w.$$.fragment,A),Te(C.$$.fragment,A),Te(Q.$$.fragment,A),Te(_.$$.fragment,A),le=!0)},o(A){Se(f.$$.fragment,A),Se(w.$$.fragment,A),Se(C.$$.fragment,A),Se(Q.$$.fragment,A),Se(_.$$.fragment,A),le=!1},d(A){A&&(y(e),y(N),y(x),y(z)),mt(f),n[22](null),mt(w),Ce.d(),mt(C,A),mt(Q,A),mt(_,A),W=!1,An(ce)}}}function qr(n){return n.split("").sort(()=>Math.random()-.5).join("")}function jr(n){const e=n.substring(0,5),t=n.substring(4,8)+e[0];return`${e} + ${t}`}function a_(n,e,t){let s,i,r=!1,o=!1,a=!1,l=[];l=l.map(W=>W.toLowerCase());let c,h=Array(8).fill(""),u=[],d,f=0,p=[0,4],v,g=0;fl(async()=>{const W=Gp(Eh);rl(W,"screen_view",{firebase_screen:"game_board_view",firebase_screen_class:"game_board_controller"});const ce=new Date,ze={year:"numeric",month:"2-digit",day:"2-digit"},rn=ce.toLocaleDateString("en-US",ze).replace(/\//g,"-");try{const ct=await kf("solutions/"+rn),ht=Object.values(ct);t(3,l=ht),c=l[0],t(5,d=qr(c)),v.start()}catch(ct){console.error("Error fetching data from Firebase:",ct)}});function w(W){const ce=W.key.toLowerCase(),ze=d.indexOf(ce);W.keyCode===13?R():W.keyCode===8?B():ze!==-1&&!s(ze)&&F(ce,ze)}function F(W,ce){f<h.length&&!s(ce)&&(t(4,h[f]=W,h),f+=1,t(20,u=[...u,ce]))}function R(){const W=h.join("");l.includes(W)?(t(0,r=!0),v.stop(),Af(g)):un.default("Incorrect",1e3)}function S(){t(4,h=Array(8).fill("")),f=0,t(20,u=[])}function V(){t(5,d=qr(c)),S()}function B(){f>0&&(t(4,h[f-1]="",h),f-=1,t(20,u=u.slice(0,-1)))}function N(){let W=`I completed the LetterLoop in: 
🔴`+g+"🔴";navigator.clipboard.writeText(W).then(()=>{console.log("Text successfully copied to clipboard:",W),un.default("Copied Text!",1e3)}).catch(ce=>{console.error("Error copying text to clipboard:",ce),un.default("Error",1e3)})}function C(){v.stop(),t(2,a=!0)}function E(){v.start(),t(2,a=!1)}const x=()=>t(1,o=!0);function Q(W){gt[W?"unshift":"push"](()=>{v=W,t(6,v)})}function k(W){g=W,t(7,g)}const z=(W,ce)=>F(W,ce);function _(W){r=W,t(0,r)}function q(W){o=W,t(1,o)}function le(W){a=W,t(2,a)}return n.$$.update=()=>{n.$$.dirty[0]&1048576&&t(9,s=W=>u.includes(W))},t(8,i=new Date().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})),[r,o,a,l,h,d,v,g,i,s,p,w,F,R,S,V,B,N,C,E,u,x,Q,k,z,_,q,le]}class d_ extends Pn{constructor(e){super(),Mn(this,e,a_,o_,Dn,{},null,[-1,-1])}}export{d_ as component,u_ as universal};
