import{n as ge,j as vu,r as Vn,i as yu,z as Lr,a as $t,c as Xn,h as Iu,A as xr,e as Fr,u as Ur,g as $r,f as Vr,B as wu,d as ft,C as li,D as zt,o as Ia}from"../chunks/scheduler.CMvsSfs7.js";import{y as Eu,z as Cu,A as bu,B as Tu,n as pe,l as _e,S as Vt,i as Ht,e as E,c as C,a as W,d as _,o as R,g as P,q as wa,m as Ea,t as ve,s as M,b as ye,f as L,p as Tt,h as m,j as He,C as Hr,u as Oe,v as De,w as Me,D as Ie,E as Su,F as ku,x as Le,G as Q,H as Gt,I as Ru,J as Ca,K as wn}from"../chunks/index.DDDBvH_P.js";import{d as Au,w as ci,r as Nu}from"../chunks/index.DBtNhGCQ.js";function Pu(n,e,t,s){if(!e)return ge;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return ge;const{delay:r=0,duration:o=300,easing:a=vu,start:l=Eu()+r,end:c=l+o,tick:u=ge,css:h}=t(n,{from:e,to:i},s);let d=!0,f=!1,p;function I(){h&&(p=bu(n,0,1,o,r,a,h)),r||(f=!0)}function g(){h&&Tu(n,p),d=!1}return Cu(b=>{if(!f&&b>=l&&(f=!0),f&&b>=c&&(u(1,0),g()),!d)return!1;if(f){const F=b-l,A=0+1*a(F/o);u(A,1-A)}return!0}),I(),u(0,1),g}function Ou(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,ba(n,i)}}function ba(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function pt(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Du(n,e){n.d(1),e.delete(n.key)}function Mu(n,e){_e(n,1,1,()=>{e.delete(n.key)})}function Lu(n,e){n.f(),Mu(n,e)}function Ta(n,e,t,s,i,r,o,a,l,c,u,h){let d=n.length,f=r.length,p=d;const I={};for(;p--;)I[n[p].key]=p;const g=[],b=new Map,F=new Map,A=[];for(p=f;p--;){const k=h(i,r,p),T=t(k);let w=o.get(T);w?s&&A.push(()=>w.p(k,e)):(w=c(T,k),w.c()),b.set(T,g[p]=w),T in I&&F.set(T,Math.abs(p-I[T]))}const S=new Set,V=new Set;function D(k){pe(k,1),k.m(a,u),o.set(k.key,k),u=k.first,f--}for(;d&&f;){const k=g[f-1],T=n[d-1],w=k.key,x=T.key;k===T?(u=k.first,d--,f--):b.has(x)?!o.has(w)||S.has(w)?D(k):V.has(x)?d--:F.get(w)>F.get(x)?(V.add(w),D(k)):(S.add(x),d--):(l(T,o),d--)}for(;d--;){const k=n[d];b.has(k.key)||l(k,o)}for(;f;)D(g[f-1]);return Vn(A),g}const xu=!0,Oy=Object.freeze(Object.defineProperty({__proto__:null,prerender:xu},Symbol.toStringTag,{value:"Module"}));function Sa(n){const e=n-1;return e*e*e+1}function Fu(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:h=f=>Math.sqrt(f)*120,easing:d=Sa}=s;return{delay:u,duration:yu(h)?h(Math.sqrt(l*l+c*c)):h,easing:d,css:(f,p)=>{const I=p*l,g=p*c,b=f+p*e.width/t.width,F=f+p*e.height/t.height;return`transform: ${r} translate(${I}px, ${g}px) scale(${b}, ${F});`}}}function Br(n,{delay:e=0,duration:t=400,easing:s=Sa,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o),[h,d]=Lr(i),[f,p]=Lr(r);return{delay:e,duration:t,easing:s,css:(I,g)=>`
			transform: ${c} translate(${(1-I)*h}${d}, ${(1-I)*f}${p});
			opacity: ${l-u*g}`}}function Uu(n){const e=ci([]);function t(r,o="default",a){e.update(l=>[...l,{id:$u(),type:o,message:r,timeout:a}])}const s=Au(e,(r,o)=>{if(o(r),r.length>0){const a=setTimeout(()=>{e.update(l=>(l.shift(),l))},r[0].timeout);return()=>{clearTimeout(a)}}}),{subscribe:i}=s;return{subscribe:i,send:t,default:(r,o)=>t(r,"default",o),danger:(r,o)=>t(r,"danger",o),warning:(r,o)=>t(r,"warning",o),info:(r,o)=>t(r,"info",o),success:(r,o)=>t(r,"success",o)}}function $u(){return"_"+Math.random().toString(36).substr(2,9)}const In=Uu();function Wr(n,e,t){const s=n.slice();return s[1]=e[t],s}function jr(n){let e,t;return{c(){e=E("i"),this.h()},l(s){e=C(s,"I",{class:!0}),W(e).forEach(_),this.h()},h(){R(e,"class",t=xr(n[1].icon)+" svelte-3xaubh")},m(s,i){P(s,e,i)},p(s,i){i&1&&t!==(t=xr(s[1].icon)+" svelte-3xaubh")&&R(e,"class",t)},d(s){s&&_(e)}}}function qr(n,e){let t,s,i=e[1].message+"",r,o,a,l,c,u=ge,h,d=e[1].icon&&jr(e);return{key:n,first:null,c(){t=E("div"),s=E("div"),r=ve(i),o=M(),d&&d.c(),a=M(),this.h()},l(f){t=C(f,"DIV",{class:!0,style:!0});var p=W(t);s=C(p,"DIV",{class:!0});var I=W(s);r=ye(I,i),I.forEach(_),o=L(p),d&&d.l(p),a=L(p),p.forEach(_),this.h()},h(){R(s,"class","content svelte-3xaubh"),R(t,"class","toast svelte-3xaubh"),Tt(t,"background","#EBEBEB"),this.first=t},m(f,p){P(f,t,p),m(t,s),m(s,r),m(t,o),d&&d.m(t,null),m(t,a),h=!0},p(f,p){e=f,(!h||p&1)&&i!==(i=e[1].message+"")&&He(r,i),e[1].icon?d?d.p(e,p):(d=jr(e),d.c(),d.m(t,a)):d&&(d.d(1),d=null)},r(){c=t.getBoundingClientRect()},f(){Ou(t),u(),ba(t,c)},a(){u(),u=Pu(t,c,Fu,{})},i(f){h||(f&&Iu(()=>{h&&(l||(l=Hr(t,Br,{y:30},!0)),l.run(1))}),h=!0)},o(f){f&&(l||(l=Hr(t,Br,{y:30},!1)),l.run(0)),h=!1},d(f){f&&_(t),d&&d.d(),f&&l&&l.end()}}}function Vu(n){let e,t=[],s=new Map,i,r=pt(n[0]);const o=a=>a[1].id;for(let a=0;a<r.length;a+=1){let l=Wr(n,r,a),c=o(l);s.set(c,t[a]=qr(c,l))}return{c(){e=E("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=C(a,"DIV",{class:!0});var l=W(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(_),this.h()},h(){R(e,"class","notifications svelte-3xaubh")},m(a,l){P(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);i=!0},p(a,[l]){if(l&1){r=pt(a[0]),wa();for(let c=0;c<t.length;c+=1)t[c].r();t=Ta(t,l,o,1,a,r,s,e,Lu,qr,null,Wr);for(let c=0;c<t.length;c+=1)t[c].a();Ea()}},i(a){if(!i){for(let l=0;l<r.length;l+=1)pe(t[l]);i=!0}},o(a){for(let l=0;l<t.length;l+=1)_e(t[l]);i=!1},d(a){a&&_(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function Hu(n,e,t){let s;return Xn(n,In,i=>t(0,s=i)),[s]}class ka extends Vt{constructor(e){super(),Ht(this,e,Hu,Vu,$t,{})}}const Bu=n=>({}),zr=n=>({});function Gr(n){let e,t,s;return{c(){e=E("i"),this.h()},l(i){e=C(i,"I",{class:!0}),W(e).forEach(_),this.h()},h(){R(e,"class","fa-solid fa-xmark svelte-kvu5ns")},m(i,r){P(i,e,r),t||(s=Ie(e,"click",n[6]),t=!0)},p:ge,d(i){i&&_(e),t=!1,s()}}}function Wu(n){let e,t,s,i,r,o,a,l,c,u,h,d,f,p;s=new ka({});const I=n[4].header,g=Fr(I,n,n[3],zr);let b=!n[1]&&Gr(n);const F=n[4].default,A=Fr(F,n,n[3],null);return{c(){e=E("dialog"),t=E("div"),Oe(s.$$.fragment),i=M(),r=E("div"),g&&g.c(),o=M(),a=E("div"),l=M(),b&&b.c(),c=M(),u=E("hr"),h=M(),A&&A.c(),this.h()},l(S){e=C(S,"DIALOG",{class:!0});var V=W(e);t=C(V,"DIV",{class:!0});var D=W(t);De(s.$$.fragment,D),i=L(D),r=C(D,"DIV",{class:!0});var k=W(r);g&&g.l(k),o=L(k),a=C(k,"DIV",{class:!0}),W(a).forEach(_),l=L(k),b&&b.l(k),k.forEach(_),c=L(D),u=C(D,"HR",{}),h=L(D),A&&A.l(D),D.forEach(_),V.forEach(_),this.h()},h(){R(a,"class","spacer svelte-kvu5ns"),R(r,"class","flex-container svelte-kvu5ns"),R(t,"class","svelte-kvu5ns"),R(e,"class","svelte-kvu5ns")},m(S,V){P(S,e,V),m(e,t),Me(s,t,null),m(t,i),m(t,r),g&&g.m(r,null),m(r,o),m(r,a),m(r,l),b&&b.m(r,null),m(t,c),m(t,u),m(t,h),A&&A.m(t,null),n[7](e),d=!0,f||(p=[Ie(t,"click",Su(n[5])),Ie(e,"close",n[8]),Ie(e,"click",ku(n[9]))],f=!0)},p(S,[V]){g&&g.p&&(!d||V&8)&&Ur(g,I,S,S[3],d?Vr(I,S[3],V,Bu):$r(S[3]),zr),S[1]?b&&(b.d(1),b=null):b?b.p(S,V):(b=Gr(S),b.c(),b.m(r,null)),A&&A.p&&(!d||V&8)&&Ur(A,F,S,S[3],d?Vr(F,S[3],V,null):$r(S[3]),null)},i(S){d||(pe(s.$$.fragment,S),pe(g,S),pe(A,S),d=!0)},o(S){_e(s.$$.fragment,S),_e(g,S),_e(A,S),d=!1},d(S){S&&_(e),Le(s),g&&g.d(S),b&&b.d(),A&&A.d(S),n[7](null),f=!1,Vn(p)}}}function ju(n,e,t){let{$$slots:s={},$$scope:i}=e,{showModal:r}=e,{hide_close:o=!1}=e,a;function l(f){wu.call(this,n,f)}const c=()=>a.close();function u(f){ft[f?"unshift":"push"](()=>{a=f,t(2,a)})}const h=()=>t(0,r=!1),d=()=>!o&&a.close();return n.$$set=f=>{"showModal"in f&&t(0,r=f.showModal),"hide_close"in f&&t(1,o=f.hide_close),"$$scope"in f&&t(3,i=f.$$scope)},n.$$.update=()=>{n.$$.dirty&5&&a&&(r?a.showModal():a.close()),n.$$.dirty&5&&a&&r===!1&&a.open&&a.close()},[r,o,a,i,s,l,c,u,h,d]}class Zn extends Vt{constructor(e){super(),Ht(this,e,ju,Wu,$t,{showModal:0,hide_close:1})}}var Kr={};/**
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
 */const Ra={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const y=function(n,e){if(!n)throw ln(e)},ln=function(n){return new Error("Firebase Database ("+Ra.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Aa=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Aa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new zu;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Na=function(n){const e=Aa(n);return Oi.encodeByteArray(e,!0)},is=function(n){return Na(n).replace(/\./g,"")},rs=function(n){try{return Oi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gu(n){return Pa(void 0,n)}function Pa(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ku(t)||(n[t]=Pa(n[t],e[t]));return n}function Ku(n){return n!=="__proto__"}/**
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
 */function Yu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qu=()=>Yu().__FIREBASE_DEFAULTS__,Ju=()=>{if(typeof process>"u"||typeof Kr>"u")return;const n=Kr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&rs(n[1]);return e&&JSON.parse(e)},Di=()=>{try{return Qu()||Ju()||Xu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Oa=n=>{var e,t;return(t=(e=Di())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Zu=n=>{const e=Oa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Da=()=>{var n;return(n=Di())===null||n===void 0?void 0:n.config},Ma=n=>{var e;return(e=Di())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function eh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[is(JSON.stringify(t)),is(JSON.stringify(o)),""].join(".")}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function La(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function th(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fa(){return Ra.NODE_ADMIN===!0}function Ua(){try{return typeof indexedDB=="object"}catch{return!1}}function $a(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function nh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const sh="FirebaseError";class qe extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=sh,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bt.prototype.create)}}class Bt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ih(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qe(i,a,s)}}function ih(n,e){return n.replace(rh,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const rh=/\{\$([^}]+)}/g;/**
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
 */function Rn(n){return JSON.parse(n)}function de(n){return JSON.stringify(n)}/**
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
 */const Va=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Rn(rs(r[0])||""),t=Rn(rs(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},oh=function(n){const e=Va(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ah=function(n){const e=Va(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function st(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function nn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ui(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function os(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function An(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Yr(r)&&Yr(o)){if(!An(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Yr(n){return n!==null&&typeof n=="object"}/**
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
 */function cn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class lh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ch(n,e){const t=new uh(n,e);return t.subscribe.bind(t)}class uh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");hh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=qs),i.error===void 0&&(i.error=qs),i.complete===void 0&&(i.complete=qs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qs(){}function Li(n,e){return`${n} failed: ${e} argument `}/**
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
 */const dh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,y(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Rs=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const fh=1e3,ph=2,_h=4*60*60*1e3,gh=.5;function Qr(n,e=fh,t=ph){const s=e*Math.pow(t,n),i=Math.round(gh*s*(Math.random()-.5)*2);return Math.min(_h,s+i)}/**
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
 */function Re(n){return n&&n._delegate?n._delegate:n}class Ve{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ct="[DEFAULT]";/**
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
 */class mh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ks;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yh(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vh(n){return n===Ct?void 0:n}function yh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ih{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const wh={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Eh=X.INFO,Ch={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},bh=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ch[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class As{constructor(e){this.name=e,this._logLevel=Eh,this._logHandler=bh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Th=(n,e)=>e.some(t=>n instanceof t);let Jr,Xr;function Sh(){return Jr||(Jr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kh(){return Xr||(Xr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ha=new WeakMap,hi=new WeakMap,Ba=new WeakMap,zs=new WeakMap,xi=new WeakMap;function Rh(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(_t(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ha.set(t,n)}).catch(()=>{}),xi.set(e,n),e}function Ah(n){if(hi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});hi.set(n,e)}let di={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ba.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Nh(n){di=n(di)}function Ph(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Gs(this),e,...t);return Ba.set(s,e.sort?e.sort():[e]),_t(s)}:kh().includes(n)?function(...e){return n.apply(Gs(this),e),_t(Ha.get(this))}:function(...e){return _t(n.apply(Gs(this),e))}}function Oh(n){return typeof n=="function"?Ph(n):(n instanceof IDBTransaction&&Ah(n),Th(n,Sh())?new Proxy(n,di):n)}function _t(n){if(n instanceof IDBRequest)return Rh(n);if(zs.has(n))return zs.get(n);const e=Oh(n);return e!==n&&(zs.set(n,e),xi.set(e,n)),e}const Gs=n=>xi.get(n);function Wa(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=_t(o);return s&&o.addEventListener("upgradeneeded",l=>{s(_t(o.result),l.oldVersion,l.newVersion,_t(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Dh=["get","getKey","getAll","getAllKeys","count"],Mh=["put","add","delete","clear"],Ks=new Map;function Zr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ks.get(e))return Ks.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Mh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Dh.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Ks.set(e,r),r}Nh(n=>({...n,get:(e,t,s)=>Zr(e,t)||n.get(e,t,s),has:(e,t)=>!!Zr(e,t)||n.has(e,t)}));/**
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
 */class Lh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function xh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fi="@firebase/app",eo="0.9.27";/**
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
 */const Pt=new As("@firebase/app"),Fh="@firebase/app-compat",Uh="@firebase/analytics-compat",$h="@firebase/analytics",Vh="@firebase/app-check-compat",Hh="@firebase/app-check",Bh="@firebase/auth",Wh="@firebase/auth-compat",jh="@firebase/database",qh="@firebase/database-compat",zh="@firebase/functions",Gh="@firebase/functions-compat",Kh="@firebase/installations",Yh="@firebase/installations-compat",Qh="@firebase/messaging",Jh="@firebase/messaging-compat",Xh="@firebase/performance",Zh="@firebase/performance-compat",ed="@firebase/remote-config",td="@firebase/remote-config-compat",nd="@firebase/storage",sd="@firebase/storage-compat",id="@firebase/firestore",rd="@firebase/firestore-compat",od="firebase",ad="10.8.0";/**
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
 */const pi="[DEFAULT]",ld={[fi]:"fire-core",[Fh]:"fire-core-compat",[$h]:"fire-analytics",[Uh]:"fire-analytics-compat",[Hh]:"fire-app-check",[Vh]:"fire-app-check-compat",[Bh]:"fire-auth",[Wh]:"fire-auth-compat",[jh]:"fire-rtdb",[qh]:"fire-rtdb-compat",[zh]:"fire-fn",[Gh]:"fire-fn-compat",[Kh]:"fire-iid",[Yh]:"fire-iid-compat",[Qh]:"fire-fcm",[Jh]:"fire-fcm-compat",[Xh]:"fire-perf",[Zh]:"fire-perf-compat",[ed]:"fire-rc",[td]:"fire-rc-compat",[nd]:"fire-gcs",[sd]:"fire-gcs-compat",[id]:"fire-fst",[rd]:"fire-fst-compat","fire-js":"fire-js",[od]:"fire-js-all"};/**
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
 */const as=new Map,_i=new Map;function cd(n,e){try{n.container.addComponent(e)}catch(t){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function je(n){const e=n.name;if(_i.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;_i.set(e,n);for(const t of as.values())cd(t,n);return!0}function Wt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ud={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new Bt("app","Firebase",ud);/**
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
 */class hd{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const un=ad;function ja(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(t||(t=Da()),!t)throw gt.create("no-options");const r=as.get(i);if(r){if(An(t,r.options)&&An(s,r.config))return r;throw gt.create("duplicate-app",{appName:i})}const o=new Ih(i);for(const l of _i.values())o.addComponent(l);const a=new hd(t,s,o);return as.set(i,a),a}function Fi(n=pi){const e=as.get(n);if(!e&&n===pi&&Da())return ja();if(!e)throw gt.create("no-app",{appName:n});return e}function Ne(n,e,t){var s;let i=(s=ld[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(a.join(" "));return}je(new Ve(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dd="firebase-heartbeat-database",fd=1,Nn="firebase-heartbeat-store";let Ys=null;function qa(){return Ys||(Ys=Wa(dd,fd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nn)}catch(t){console.warn(t)}}}}).catch(n=>{throw gt.create("idb-open",{originalErrorMessage:n.message})})),Ys}async function pd(n){try{const t=(await qa()).transaction(Nn),s=await t.objectStore(Nn).get(za(n));return await t.done,s}catch(e){if(e instanceof qe)Pt.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(t.message)}}}async function to(n,e){try{const s=(await qa()).transaction(Nn,"readwrite");await s.objectStore(Nn).put(e,za(n)),await s.done}catch(t){if(t instanceof qe)Pt.warn(t.message);else{const s=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pt.warn(s.message)}}}function za(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _d=1024,gd=30*24*60*60*1e3;class md{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yd(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=no();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=no(),{heartbeatsToSend:s,unsentEntries:i}=vd(this._heartbeatsCache.heartbeats),r=is(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function no(){return new Date().toISOString().substring(0,10)}function vd(n,e=_d){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),so(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),so(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class yd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ua()?$a().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return to(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return to(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function so(n){return is(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Id(n){je(new Ve("platform-logger",e=>new Lh(e),"PRIVATE")),je(new Ve("heartbeat",e=>new md(e),"PRIVATE")),Ne(fi,eo,n),Ne(fi,eo,"esm2017"),Ne("fire-js","")}Id("");var wd="firebase",Ed="10.8.0";/**
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
 */Ne(wd,Ed,"app");function Ui(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Ga(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cd=Ga,Ka=new Bt("auth","Firebase",Ga());/**
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
 */const ls=new As("@firebase/auth");function bd(n,...e){ls.logLevel<=X.WARN&&ls.warn(`Auth (${un}): ${n}`,...e)}function es(n,...e){ls.logLevel<=X.ERROR&&ls.error(`Auth (${un}): ${n}`,...e)}/**
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
 */function Ze(n,...e){throw $i(n,...e)}function Be(n,...e){return $i(n,...e)}function Td(n,e,t){const s=Object.assign(Object.assign({},Cd()),{[e]:t});return new Bt("auth","Firebase",s).create(e,{appName:n.name})}function $i(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ka.create(n,...e)}function B(n,e,...t){if(!n)throw $i(e,...t)}function Ye(n){const e="INTERNAL ASSERTION FAILED: "+n;throw es(e),new Error(e)}function et(n,e){n||Ye(e)}/**
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
 */function gi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Sd(){return io()==="http:"||io()==="https:"}function io(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function kd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sd()||La()||"connection"in navigator)?navigator.onLine:!0}function Rd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Hn{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=Mi()||xa()}get(){return kd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vi(n,e){et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ya{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ad={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Nd=new Hn(3e4,6e4);function Ns(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function hn(n,e,t,s,i={}){return Qa(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=cn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Ya.fetch()(Xa(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Qa(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ad),e);try{const i=new Pd(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Yn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yn(n,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Td(n,u,c);Ze(n,u)}}catch(i){if(i instanceof qe)throw i;Ze(n,"network-request-failed",{message:String(i)})}}async function Ja(n,e,t,s,i={}){const r=await hn(n,e,t,s,i);return"mfaPendingCredential"in r&&Ze(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Xa(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Vi(n.config,i):`${n.config.apiScheme}://${i}`}class Pd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Be(this.auth,"network-request-failed")),Nd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Be(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function Od(n,e){return hn(n,"POST","/v1/accounts:delete",e)}async function Dd(n,e){return hn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function En(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Md(n,e=!1){const t=Re(n),s=await t.getIdToken(e),i=Hi(s);B(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:En(Qs(i.auth_time)),issuedAtTime:En(Qs(i.iat)),expirationTime:En(Qs(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qs(n){return Number(n)*1e3}function Hi(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return es("JWT malformed, contained fewer than 3 sections"),null;try{const i=rs(t);return i?JSON.parse(i):(es("Failed to decode base64 JWT payload"),null)}catch(i){return es("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ld(n){const e=Hi(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof qe&&xd(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function xd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Fd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Za{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cs(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Pn(n,Dd(t,{idToken:s}));B(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Vd(r.providerUserInfo):[],a=$d(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Za(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Ud(n){const e=Re(n);await cs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $d(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Vd(n){return n.map(e=>{var{providerId:t}=e,s=Ui(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Hd(n,e){const t=await Qa(n,{},async()=>{const s=cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Xa(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ya.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Bd(n,e){return hn(n,"POST","/v2/accounts:revokeToken",Ns(n,e))}/**
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
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ld(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Hd(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new On;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
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
 */function lt(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=Ui(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Za(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Md(this,e)}reload(){return Ud(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await cs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pn(this,Od(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,l,c,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,g=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=t.createdAt)!==null&&c!==void 0?c:void 0,F=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:S,isAnonymous:V,providerData:D,stsTokenManager:k}=t;B(A&&k,e,"internal-error");const T=On.fromJSON(this.name,k);B(typeof A=="string",e,"internal-error"),lt(h,e.name),lt(d,e.name),B(typeof S=="boolean",e,"internal-error"),B(typeof V=="boolean",e,"internal-error"),lt(f,e.name),lt(p,e.name),lt(I,e.name),lt(g,e.name),lt(b,e.name),lt(F,e.name);const w=new At({uid:A,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:V,photoURL:p,phoneNumber:f,tenantId:I,stsTokenManager:T,createdAt:b,lastLoginAt:F});return D&&Array.isArray(D)&&(w.providerData=D.map(x=>Object.assign({},x))),g&&(w._redirectEventId=g),w}static async _fromIdTokenResponse(e,t,s=!1){const i=new On;i.updateFromServerResponse(t);const r=new At({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await cs(r),r}}/**
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
 */const ro=new Map;function Qe(n){et(n instanceof Function,"Expected a class definition");let e=ro.get(n);return e?(et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ro.set(n,e),e)}/**
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
 */class el{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}el.type="NONE";const oo=el;/**
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
 */function ts(n,e,t){return`firebase:${n}:${e}:${t}`}class Qt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ts(this.userKey,i.apiKey,r),this.fullPersistenceKey=ts("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Qt(Qe(oo),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Qe(oo);const o=ts(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=At._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Qt(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Qt(r,e,s))}}/**
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
 */function ao(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rl(e))return"Blackberry";if(ol(e))return"Webos";if(Bi(e))return"Safari";if((e.includes("chrome/")||nl(e))&&!e.includes("edge/"))return"Chrome";if(il(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function tl(n=we()){return/firefox\//i.test(n)}function Bi(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nl(n=we()){return/crios\//i.test(n)}function sl(n=we()){return/iemobile/i.test(n)}function il(n=we()){return/android/i.test(n)}function rl(n=we()){return/blackberry/i.test(n)}function ol(n=we()){return/webos/i.test(n)}function Ps(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wd(n=we()){var e;return Ps(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jd(){return th()&&document.documentMode===10}function al(n=we()){return Ps(n)||il(n)||ol(n)||rl(n)||/windows phone/i.test(n)||sl(n)}function qd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ll(n,e=[]){let t;switch(n){case"Browser":t=ao(we());break;case"Worker":t=`${ao(we())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${un}/${s}`}/**
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
 */class zd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Gd(n,e={}){return hn(n,"GET","/v2/passwordPolicy",Ns(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Kd=6;class Yd{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Kd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Qd{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lo(this),this.idTokenSubscription=new lo(this),this.beforeStateQueue=new zd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ka,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qe(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Qt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await cs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Re(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gd(this),t=new Yd(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Bd(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qe(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await Qt.create(this,[Qe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ll(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bd(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Os(n){return Re(n)}class lo{constructor(e){this.auth=e,this.observer=null,this.addObserver=ch(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jd(n){Wi=n}function Xd(n){return Wi.loadJS(n)}function Zd(){return Wi.gapiScript}function ef(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function tf(n,e){const t=Wt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(An(r,e??{}))return i;Ze(i,"already-initialized")}return t.initialize({options:e})}function nf(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Qe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function sf(n,e,t){const s=Os(n);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=cl(e),{host:o,port:a}=rf(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||of()}function cl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function rf(n){const e=cl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:co(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:co(o)}}}function co(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function of(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ul{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,t){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}/**
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
 */async function Jt(n,e){return Ja(n,"POST","/v1/accounts:signInWithIdp",Ns(n,e))}/**
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
 */const af="http://localhost";class Ot extends ul{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=Ui(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ot(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Jt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Jt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jt(e,t)}buildRequest(){const e={requestUri:af,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cn(t)}return e}}/**
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
 */class hl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bn extends hl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ct extends Bn{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
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
 */class ut extends Bn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ot._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ut.credential(t,s)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
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
 */class ht extends Bn{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
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
 */class dt extends Bn{constructor(){super("twitter.com")}static credential(e,t){return Ot._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return dt.credential(t,s)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
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
 */async function lf(n,e){return Ja(n,"POST","/v1/accounts:signUp",Ns(n,e))}/**
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
 */class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await At._fromIdTokenResponse(e,s,i),o=uo(s);return new vt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=uo(s);return new vt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function uo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function cf(n){var e;const t=Os(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new vt({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await lf(t,{returnSecureToken:!0}),i=await vt._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class us extends qe{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,us.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new us(e,t,s,i)}}function dl(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?us._fromErrorAndOperation(n,r,e,s):r})}async function uf(n,e,t=!1){const s=await Pn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vt._forOperation(n,"link",s)}/**
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
 */async function hf(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await Pn(n,dl(s,i,e,n),t);B(r.idToken,s,"internal-error");const o=Hi(r.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(n.uid===a,s,"user-mismatch"),vt._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ze(s,"user-mismatch"),r}}/**
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
 */async function df(n,e,t=!1){const s="signIn",i=await dl(n,s,e),r=await vt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function ff(n,e,t,s){return Re(n).onIdTokenChanged(e,t,s)}function pf(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}const hs="__sak";/**
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
 */class fl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _f(){const n=we();return Bi(n)||Ps(n)}const gf=1e3,mf=10;class pl extends fl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_f()&&qd(),this.fallbackToPolling=al(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);jd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mf):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},gf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pl.type="LOCAL";const vf=pl;/**
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
 */class _l extends fl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_l.type="SESSION";const gl=_l;/**
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
 */function yf(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Ds(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await yf(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ds.receivers=[];/**
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
 */function ji(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class If{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ji("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function We(){return window}function wf(n){We().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function ml(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function Ef(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bf(){return ml()?self:null}/**
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
 */const vl="firebaseLocalStorageDb",Tf=1,ds="firebaseLocalStorage",yl="fbase_key";class Wn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ms(n,e){return n.transaction([ds],e?"readwrite":"readonly").objectStore(ds)}function Sf(){const n=indexedDB.deleteDatabase(vl);return new Wn(n).toPromise()}function mi(){const n=indexedDB.open(vl,Tf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ds,{keyPath:yl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ds)?e(s):(s.close(),await Sf(),e(await mi()))})})}async function ho(n,e,t){const s=Ms(n,!0).put({[yl]:e,value:t});return new Wn(s).toPromise()}async function kf(n,e){const t=Ms(n,!1).get(e),s=await new Wn(t).toPromise();return s===void 0?null:s.value}function fo(n,e){const t=Ms(n,!0).delete(e);return new Wn(t).toPromise()}const Rf=800,Af=3;class Il{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Af)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ml()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ds._getInstance(bf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ef(),!this.activeServiceWorker)return;this.sender=new If(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mi();return await ho(e,hs,"1"),await fo(e,hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ho(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>kf(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ms(i,!1).getAll();return new Wn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Il.type="LOCAL";const Nf=Il;new Hn(3e4,6e4);/**
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
 */function Pf(n,e){return e?Qe(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class qi extends ul{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Of(n){return df(n.auth,new qi(n),n.bypassAuthState)}function Df(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),hf(t,new qi(n),n.bypassAuthState)}async function Mf(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),uf(t,new qi(n),n.bypassAuthState)}/**
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
 */class wl{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Of;case"linkViaPopup":case"linkViaRedirect":return Mf;case"reauthViaPopup":case"reauthViaRedirect":return Df;default:Ze(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Lf=new Hn(2e3,1e4);class Kt extends wl{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=ji();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lf.get())};e()}}Kt.currentPopupAction=null;/**
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
 */const xf="pendingRedirect",ns=new Map;class Ff extends wl{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ns.get(this.auth._key());if(!e){try{const s=await Uf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ns.set(this.auth._key(),e)}return this.bypassAuthState||ns.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uf(n,e){const t=Hf(e),s=Vf(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function $f(n,e){ns.set(n._key(),e)}function Vf(n){return Qe(n._redirectPersistence)}function Hf(n){return ts(xf,n.config.apiKey,n.name)}async function Bf(n,e,t=!1){const s=Os(n),i=Pf(s,e),o=await new Ff(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Wf=10*60*1e3;class jf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!El(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Be(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wf&&this.cachedEventUids.clear(),this.cachedEventUids.has(po(e))}saveEventToCache(e){this.cachedEventUids.add(po(e)),this.lastProcessedEventTime=Date.now()}}function po(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function El({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return El(n);default:return!1}}/**
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
 */async function zf(n,e={}){return hn(n,"GET","/v1/projects",e)}/**
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
 */const Gf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kf=/^https?/;async function Yf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zf(n);for(const t of e)try{if(Qf(t))return}catch{}Ze(n,"unauthorized-domain")}function Qf(n){const e=gi(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Kf.test(t))return!1;if(Gf.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Jf=new Hn(3e4,6e4);function _o(){const n=We().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xf(n){return new Promise((e,t)=>{var s,i,r;function o(){_o(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_o(),t(Be(n,"network-request-failed"))},timeout:Jf.get()})}if(!((i=(s=We().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=We().gapi)===null||r===void 0)&&r.load)o();else{const a=ef("iframefcb");return We()[a]=()=>{gapi.load?o():t(Be(n,"network-request-failed"))},Xd(`${Zd()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw ss=null,e})}let ss=null;function Zf(n){return ss=ss||Xf(n),ss}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ep=new Hn(5e3,15e3),tp="__/auth/iframe",np="emulator/auth/iframe",sp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ip=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rp(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vi(e,np):`https://${n.config.authDomain}/${tp}`,s={apiKey:e.apiKey,appName:n.name,v:un},i=ip.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${cn(s).slice(1)}`}async function op(n){const e=await Zf(n),t=We().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:rp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sp,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Be(n,"network-request-failed"),a=We().setTimeout(()=>{r(o)},ep.get());function l(){We().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ap={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lp=500,cp=600,up="_blank",hp="http://localhost";class go{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dp(n,e,t,s=lp,i=cp){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ap),{width:s.toString(),height:i.toString(),top:r,left:o}),c=we().toLowerCase();t&&(a=nl(c)?up:t),tl(c)&&(e=e||hp,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Wd(c)&&a!=="_self")return fp(e||"",a),new go(null);const h=window.open(e||"",a,u);B(h,n,"popup-blocked");try{h.focus()}catch{}return new go(h)}function fp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const pp="__/auth/handler",_p="emulator/auth/handler",gp=encodeURIComponent("fac");async function mo(n,e,t,s,i,r){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:un,eventId:i};if(e instanceof hl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ui(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Bn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${gp}=${encodeURIComponent(l)}`:"";return`${mp(n)}?${cn(a).slice(1)}${c}`}function mp({config:n}){return n.emulator?Vi(n,_p):`https://${n.authDomain}/${pp}`}/**
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
 */const Js="webStorageSupport";class vp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gl,this._completeRedirectFn=Bf,this._overrideRedirectResult=$f}async _openPopup(e,t,s,i){var r;et((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await mo(e,t,s,gi(),i);return dp(e,o,ji())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await mo(e,t,s,gi(),i);return wf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(et(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await op(e),s=new jf(e);return t.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Js,{type:Js},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Js];o!==void 0&&t(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return al()||Bi()||Ps()}}const yp=vp;var vo="@firebase/auth",yo="1.6.0";/**
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
 */class Ip{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ep(n){je(new Ve("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ll(n)},c=new Qd(s,i,r,l);return nf(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),je(new Ve("auth-internal",e=>{const t=Os(e.getProvider("auth").getImmediate());return(s=>new Ip(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ne(vo,yo,wp(n)),Ne(vo,yo,"esm2017")}/**
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
 */const Cp=5*60,bp=Ma("authIdTokenMaxAge")||Cp;let Io=null;const Tp=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>bp)return;const i=t==null?void 0:t.token;Io!==i&&(Io=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sp(n=Fi()){const e=Wt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=tf(n,{popupRedirectResolver:yp,persistence:[Nf,vf,gl]}),s=Ma("authTokenSyncURL");if(s){const r=Tp(s);pf(t,r,()=>r(t.currentUser)),ff(t,o=>r(o))}const i=Oa("auth");return i&&sf(t,`http://${i}`),t}function kp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Jd({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Be("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",kp().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ep("Browser");const Rp={apiKey:"AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",authDomain:"circlepuzzlegame-1738d.firebaseapp.com",projectId:"circlepuzzlegame-1738d",storageBucket:"circlepuzzlegame-1738d.appspot.com",messagingSenderId:"62490740969",appId:"1:62490740969:web:719c6ea78f8148089f4878",measurementId:"G-EEEKPPSEN9"},Cl=ja(Rp),Ap=Sp(Cl);async function Np(){return new Promise((n,e)=>{cf(Ap).then(()=>{n(!0)}).catch(t=>{t.code;var s=t.message;console.error("Failed to sign in anonymously:",s),n(!1)})})}var wo={};const Eo="@firebase/database",Co="1.0.3";/**
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
 */let bl="";function Pp(n){bl=n}/**
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
 */class Op{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Rn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Dp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return st(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Tl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Op(e)}}catch{}return new Dp},St=Tl("localStorage"),vi=Tl("sessionStorage");/**
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
 */const Xt=new As("@firebase/database"),Mp=function(){let n=1;return function(){return n++}}(),Sl=function(n){const e=dh(n),t=new lh;t.update(e);const s=t.digest();return Oi.encodeByteArray(s)},jn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=jn.apply(null,s):typeof s=="object"?e+=de(s):e+=s,e+=" "}return e};let Nt=null,bo=!0;const Lp=function(n,e){y(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Xt.logLevel=X.VERBOSE,Nt=Xt.log.bind(Xt),e&&vi.set("logging_enabled",!0)):typeof n=="function"?Nt=n:(Nt=null,vi.remove("logging_enabled"))},me=function(...n){if(bo===!0&&(bo=!1,Nt===null&&vi.get("logging_enabled")===!0&&Lp(!0)),Nt){const e=jn.apply(null,n);Nt(e)}},qn=function(n){return function(...e){me(n,...e)}},yi=function(...n){const e="FIREBASE INTERNAL ERROR: "+jn(...n);Xt.error(e)},tt=function(...n){const e=`FIREBASE FATAL ERROR: ${jn(...n)}`;throw Xt.error(e),new Error(e)},Te=function(...n){const e="FIREBASE WARNING: "+jn(...n);Xt.warn(e)},xp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Fp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},sn="[MIN_NAME]",Dt="[MAX_NAME]",dn=function(n,e){if(n===e)return 0;if(n===sn||e===Dt)return-1;if(e===sn||n===Dt)return 1;{const t=To(n),s=To(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Up=function(n,e){return n===e?0:n<e?-1:1},gn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+de(e))},zi=function(n){if(typeof n!="object"||n===null)return de(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=de(e[s]),t+=":",t+=zi(n[e[s]]);return t+="}",t},Rl=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ke(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Al=function(n){y(!kl(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},$p=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Bp=new RegExp("^-?(0*)\\d{1,10}$"),Wp=-2147483648,jp=2147483647,To=function(n){if(Bp.test(n)){const e=Number(n);if(e>=Wp&&e<=jp)return e}return null},fn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Te("Exception was thrown by user callback.",t),e},Math.floor(0))}},qp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Cn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class zp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Te(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Gp{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Te(e)}}class Zt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zt.OWNER="owner";/**
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
 */const Gi="5",Nl="v",Pl="s",Ol="r",Dl="f",Ml=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ll="ls",xl="p",Ii="ac",Fl="websocket",Ul="long_polling";/**
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
 */class $l{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=St.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&St.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Kp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Vl(n,e,t){y(typeof e=="string","typeof type must == string"),y(typeof t=="object","typeof params must == object");let s;if(e===Fl)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ul)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Kp(n)&&(t.ns=n.namespace);const i=[];return ke(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Yp{constructor(){this.counters_={}}incrementCounter(e,t=1){st(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Gu(this.counters_)}}/**
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
 */const Xs={},Zs={};function Ki(n){const e=n.toString();return Xs[e]||(Xs[e]=new Yp),Xs[e]}function Qp(n,e){const t=n.toString();return Zs[t]||(Zs[t]=e()),Zs[t]}/**
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
 */class Jp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&fn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const So="start",Xp="close",Zp="pLPCommand",e_="pRTLPCB",Hl="id",Bl="pw",Wl="ser",t_="cb",n_="seg",s_="ts",i_="d",r_="dframe",jl=1870,ql=30,o_=jl-ql,a_=25e3,l_=3e4;class Yt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qn(e),this.stats_=Ki(t),this.urlFn=l=>(this.appCheckToken&&(l[Ii]=this.appCheckToken),Vl(t,Ul,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Jp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(l_)),Fp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yi((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===So)this.id=a,this.password=l;else if(o===Xp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[So]="t",s[Wl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[t_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Nl]=Gi,this.transportSessionId&&(s[Pl]=this.transportSessionId),this.lastSessionId&&(s[Ll]=this.lastSessionId),this.applicationId&&(s[xl]=this.applicationId),this.appCheckToken&&(s[Ii]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ml.test(location.hostname)&&(s[Ol]=Dl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yt.forceAllow_=!0}static forceDisallow(){Yt.forceDisallow_=!0}static isAvailable(){return Yt.forceAllow_?!0:!Yt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$p()&&!Vp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=de(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Na(t),i=Rl(s,o_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[r_]="t",s[Hl]=e,s[Bl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=de(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Yi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Mp(),window[Zp+this.uniqueCallbackIdentifier]=e,window[e_+this.uniqueCallbackIdentifier]=t,this.myIFrame=Yi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){me("frame writing exception"),a.stack&&me(a.stack),me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||me("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hl]=this.myID,e[Bl]=this.myPW,e[Wl]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ql+s.length<=jl;){const o=this.pendingSegs.shift();s=s+"&"+n_+i+"="+o.seg+"&"+s_+i+"="+o.ts+"&"+i_+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(a_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const c_=16384,u_=45e3;let fs=null;typeof MozWebSocket<"u"?fs=MozWebSocket:typeof WebSocket<"u"&&(fs=WebSocket);class xe{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qn(this.connId),this.stats_=Ki(t),this.connURL=xe.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Nl]=Gi,typeof location<"u"&&location.hostname&&Ml.test(location.hostname)&&(o[Ol]=Dl),t&&(o[Pl]=t),s&&(o[Ll]=s),i&&(o[Ii]=i),r&&(o[xl]=r),Vl(e,Fl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,St.set("previous_websocket_failure",!0);try{let s;Fa(),this.mySock=new fs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&fs!==null&&!xe.forceDisallow_}static previouslyFailed(){return St.isInMemoryStorage||St.get("previous_websocket_failure")===!0}markConnectionHealthy(){St.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Rn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=de(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Rl(t,c_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(u_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xe.responsesRequiredToBeHealthy=2;xe.healthyTimeout=3e4;/**
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
 */class Dn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Yt,xe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=xe&&xe.isAvailable();let s=t&&!xe.previouslyFailed();if(e.webSocketOnly&&(t||Te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[xe];else{const i=this.transports_=[];for(const r of Dn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Dn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Dn.globalTransportInitialized_=!1;/**
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
 */const h_=6e4,d_=5e3,f_=10*1024,p_=100*1024,ei="t",ko="d",__="s",Ro="r",g_="e",Ao="o",No="a",Po="n",Oo="p",m_="h";class v_{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qn("c:"+this.id+":"),this.transportManager_=new Dn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Cn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>p_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>f_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ei in e){const t=e[ei];t===No?this.upgradeIfSecondaryHealthy_():t===Ro?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ao&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=gn("t",e),s=gn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Oo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:No,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Po,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=gn("t",e),s=gn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=gn(ei,e);if(ko in e){const s=e[ko];if(t===m_){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Po){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===__?this.onConnectionShutdown_(s):t===Ro?this.onReset_(s):t===g_?yi("Server Error: "+s):t===Ao?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Gi!==s&&Te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Cn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(h_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(d_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Oo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(St.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class zl{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Gl{constructor(e){this.allowedEvents_=e,this.listeners_={},y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){y(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ps extends Gl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ps}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Do=32,Mo=768;class Z{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Y(){return new Z("")}function q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function yt(n){return n.pieces_.length-n.pieceNum_}function te(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Z(n.pieces_,e)}function Kl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function y_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Yl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ql(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Z(e,0)}function ce(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Z(t,0)}function G(n){return n.pieceNum_>=n.pieces_.length}function Ce(n,e){const t=q(n),s=q(e);if(t===null)return e;if(t===s)return Ce(te(n),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Qi(n,e){if(yt(n)!==yt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Fe(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(yt(n)>yt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class I_{constructor(e,t){this.errorPrefix_=t,this.parts_=Yl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Rs(this.parts_[s]);Jl(this)}}function w_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Rs(e),Jl(n)}function E_(n){const e=n.parts_.pop();n.byteLength_-=Rs(e),n.parts_.length>0&&(n.byteLength_-=1)}function Jl(n){if(n.byteLength_>Mo)throw new Error(n.errorPrefix_+"has a key path longer than "+Mo+" bytes ("+n.byteLength_+").");if(n.parts_.length>Do)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Do+") or object contains a cycle "+bt(n))}function bt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ji extends Gl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ji}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const mn=1e3,C_=60*5*1e3,Lo=30*1e3,b_=1.3,T_=3e4,S_="server_kill",xo=3;class Xe extends zl{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xe.nextPersistentConnectionId_++,this.log_=qn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mn,this.maxReconnectDelay_=C_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Fa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ji.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ps.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(de(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ks,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Xe.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&st(e,"w")){const s=nn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ah(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=oh(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):yi("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>T_&&(this.reconnectDelay_=mn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*b_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?me("getToken() completed but was canceled"):(me("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new v_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Te(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(S_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Te(h),l())}}}interrupt(e){me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ui(this.interruptReasons_)&&(this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>zi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){me("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xo&&(this.reconnectDelay_=Lo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){me("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+bl.replace(/\./g,"-")]=1,Mi()?e["framework.cordova"]=1:xa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ps.getInstance().currentlyOnline();return ui(this.interruptReasons_)&&e}}Xe.nextPersistentConnectionId_=0;Xe.nextConnectionId_=0;/**
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
 */class z{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new z(e,t)}}/**
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
 */class Ls{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new z(sn,e),i=new z(sn,t);return this.compare(s,i)!==0}minPost(){return z.MIN}}/**
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
 */let Qn;class Xl extends Ls{static get __EMPTY_NODE(){return Qn}static set __EMPTY_NODE(e){Qn=e}compare(e,t){return dn(e.name,t.name)}isDefinedOn(e){throw ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return z.MIN}maxPost(){return new z(Dt,Qn)}makePost(e,t){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Qn)}toString(){return".key"}}const en=new Xl;/**
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
 */class Jn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class he{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??he.RED,this.left=i??be.EMPTY_NODE,this.right=r??be.EMPTY_NODE}copy(e,t,s,i,r){return new he(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}he.RED=!0;he.BLACK=!1;class k_{copy(e,t,s,i,r){return this}insert(e,t,s){return new he(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,t=be.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new be(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,he.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,he.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Jn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Jn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Jn(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new k_;/**
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
 */function R_(n,e){return dn(n.name,e.name)}function Xi(n,e){return dn(n,e)}/**
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
 */let wi;function A_(n){wi=n}const Zl=function(n){return typeof n=="number"?"number:"+Al(n):"string:"+n},ec=function(n){if(n.isLeafNode()){const e=n.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&st(e,".sv"),"Priority must be a string or number.")}else y(n===wi||n.isEmpty(),"priority of unexpected type.");y(n===wi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Fo;class ue{constructor(e,t=ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ec(this.priorityNode_)}static set __childrenNodeConstructor(e){Fo=e}static get __childrenNodeConstructor(){return Fo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:q(e)===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=q(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(y(s!==".priority"||yt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Al(this.value_):e+=this.value_,this.lazyHash_=Sl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ue.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ue.VALUE_TYPE_ORDER.indexOf(t),r=ue.VALUE_TYPE_ORDER.indexOf(s);return y(i>=0,"Unknown leaf type: "+t),y(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let tc,nc;function N_(n){tc=n}function P_(n){nc=n}class O_ extends Ls{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?dn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Dt,new ue("[PRIORITY-POST]",nc))}makePost(e,t){const s=tc(e);return new z(t,new ue("[PRIORITY-POST]",s))}toString(){return".priority"}}const re=new O_;/**
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
 */const D_=Math.log(2);class M_{constructor(e){const t=r=>parseInt(Math.log(r)/D_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _s=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new he(d,h.node,he.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),I=i(f+1,c);return h=n[f],d=t?t(h):h,new he(d,h.node,he.BLACK,p,I)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,I){const g=h-p,b=h;h-=p;const F=i(g+1,b),A=n[g],S=t?t(A):A;f(new he(S,A.node,I,null,F))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const I=l.nextBitIsOne(),g=Math.pow(2,l.count-(p+1));I?d(g,he.BLACK):(d(g,he.BLACK),d(g,he.RED))}return u},o=new M_(n.length),a=r(o);return new be(s||e,a)};/**
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
 */let ti;const qt={};class Je{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return y(qt&&re,"ChildrenNode.ts has not been loaded"),ti=ti||new Je({".priority":qt},{".priority":re}),ti}get(e){const t=nn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof be?t:null}hasIndex(e){return st(this.indexSet_,e.toString())}addIndex(e,t){y(e!==en,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=_s(s,e.getCompare()):a=qt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Je(u,c)}addToIndexes(e,t){const s=os(this.indexes_,(i,r)=>{const o=nn(this.indexSet_,r);if(y(o,"Missing index implementation for "+r),i===qt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),_s(a,o.getCompare())}else return qt;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new Je(s,this.indexSet_)}removeFromIndexes(e,t){const s=os(this.indexes_,i=>{if(i===qt)return i;{const r=t.get(e.name);return r?i.remove(new z(e.name,r)):i}});return new Je(s,this.indexSet_)}}/**
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
 */let vn;class U{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ec(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vn||(vn=new U(new be(Xi),null,Je.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vn}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?vn:t}}getChild(e){const t=q(e);return t===null?this:this.getImmediateChild(t).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(y(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new z(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?vn:this.priorityNode_;return new U(i,o,r)}}updateChild(e,t){const s=q(e);if(s===null)return t;{y(q(e)!==".priority"||yt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(te(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(re,(o,a)=>{t[o]=a.val(e),s++,r&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zl(this.getPriority().val())+":"),this.forEachChild(re,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Sl(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new z(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new z(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new z(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zn?-1:0}withIndex(e){if(e===en||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===en||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(re),i=t.getIterator(re);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===en?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class L_ extends U{constructor(){super(new be(Xi),U.EMPTY_NODE,Je.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const zn=new L_;Object.defineProperties(z,{MIN:{value:new z(sn,U.EMPTY_NODE)},MAX:{value:new z(Dt,zn)}});Xl.__EMPTY_NODE=U.EMPTY_NODE;ue.__childrenNodeConstructor=U;A_(zn);P_(zn);/**
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
 */const x_=!0;function fe(n,e=null){if(n===null)return U.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ue(t,fe(e))}if(!(n instanceof Array)&&x_){const t=[];let s=!1;if(ke(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=fe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new z(o,l)))}}),t.length===0)return U.EMPTY_NODE;const r=_s(t,R_,o=>o.name,Xi);if(s){const o=_s(t,re.getCompare());return new U(r,fe(e),new Je({".priority":o},{".priority":re}))}else return new U(r,fe(e),Je.Default)}else{let t=U.EMPTY_NODE;return ke(n,(s,i)=>{if(st(n,s)&&s.substring(0,1)!=="."){const r=fe(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(fe(e))}}N_(fe);/**
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
 */class F_ extends Ls{constructor(e){super(),this.indexPath_=e,y(!G(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?dn(e.name,t.name):r}makePost(e,t){const s=fe(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,s);return new z(t,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,zn);return new z(Dt,e)}toString(){return Yl(this.indexPath_,0).join("/")}}/**
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
 */class U_ extends Ls{compare(e,t){const s=e.node.compareTo(t.node);return s===0?dn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,t){const s=fe(e);return new z(t,s)}toString(){return".value"}}const $_=new U_;/**
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
 */function sc(n){return{type:"value",snapshotNode:n}}function rn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Mn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ln(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function V_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Zi{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){y(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Mn(t,a)):y(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(rn(t,s)):o.trackChildChange(Ln(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(re,(i,r)=>{t.hasChild(i)||s.trackChildChange(Mn(i,r))}),t.isLeafNode()||t.forEachChild(re,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ln(i,r,o))}else s.trackChildChange(rn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class xn{constructor(e){this.indexedFilter_=new Zi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xn.getStartPost_(e),this.endPost_=xn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new z(t,s))||(s=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=U.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const r=this;return t.forEachChild(re,(o,a)=>{r.matches(new z(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class H_{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new z(t,s))||(s=U.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;y(a.numChildren()===this.limit_,"");const l=new z(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Ln(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Mn(t,h));const I=a.updateImmediateChild(t,U.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(rn(d.name,d.node)),I.updateImmediateChild(d.name,d.node)):I}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Mn(c.name,c.node)),r.trackChildChange(rn(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
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
 */class er{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:sn}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new er;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function B_(n){return n.loadsAllData()?new Zi(n.getIndex()):n.hasLimit()?new H_(n):new xn(n)}function Uo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===re?t="$priority":n.index_===$_?t="$value":n.index_===en?t="$key":(y(n.index_ instanceof F_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=de(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=de(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+de(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=de(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+de(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function $o(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==re&&(e.i=n.index_.toString()),e}/**
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
 */class gs extends zl{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=qn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=gs.getListenId_(e,s),a={};this.listens_[o]=a;const l=Uo(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),nn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=gs.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Uo(e._queryParams),s=e._path.toString(),i=new ks;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Rn(a.responseText)}catch{Te("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Te("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class W_{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ms(){return{value:null,children:new Map}}function ic(n,e,t){if(G(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=q(e);n.children.has(s)||n.children.set(s,ms());const i=n.children.get(s);e=te(e),ic(i,e,t)}}function Ei(n,e,t){n.value!==null?t(e,n.value):j_(n,(s,i)=>{const r=new Z(e.toString()+"/"+s);Ei(i,r,t)})}function j_(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class q_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ke(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Vo=10*1e3,z_=30*1e3,G_=5*60*1e3;class K_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new q_(e);const s=Vo+(z_-Vo)*Math.random();Cn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ke(e,(i,r)=>{r>0&&st(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Cn(this.reportStats_.bind(this),Math.floor(Math.random()*2*G_))}}/**
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
 */var Ue;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ue||(Ue={}));function rc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class vs{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ue.ACK_USER_WRITE,this.source=rc()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Z(e));return new vs(Y(),t,this.revert)}}else return y(q(this.path)===e,"operationForChild called for unrelated child."),new vs(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fn{constructor(e,t){this.source=e,this.path=t,this.type=Ue.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Fn(this.source,Y()):new Fn(this.source,te(this.path))}}/**
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
 */class Mt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ue.OVERWRITE}operationForChild(e){return G(this.path)?new Mt(this.source,Y(),this.snap.getImmediateChild(e)):new Mt(this.source,te(this.path),this.snap)}}/**
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
 */class Un{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ue.MERGE}operationForChild(e){if(G(this.path)){const t=this.children.subtree(new Z(e));return t.isEmpty()?null:t.value?new Mt(this.source,Y(),t.value):new Un(this.source,Y(),t)}else return y(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Un(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Lt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const t=q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Y_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Q_(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(V_(o.childName,o.snapshotNode))}),yn(n,i,"child_removed",e,s,t),yn(n,i,"child_added",e,s,t),yn(n,i,"child_moved",r,s,t),yn(n,i,"child_changed",e,s,t),yn(n,i,"value",e,s,t),i}function yn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>X_(n,a,l)),o.forEach(a=>{const l=J_(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function J_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function X_(n,e,t){if(e.childName==null||t.childName==null)throw ln("Should only compare child_ events.");const s=new z(e.childName,e.snapshotNode),i=new z(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function xs(n,e){return{eventCache:n,serverCache:e}}function bn(n,e,t,s){return xs(new Lt(e,t,s),n.serverCache)}function oc(n,e,t,s){return xs(n.eventCache,new Lt(e,t,s))}function Ci(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function xt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ni;const Z_=()=>(ni||(ni=new be(Up)),ni);class ne{constructor(e,t=Z_()){this.value=e,this.children=t}static fromObject(e){let t=new ne(null);return ke(e,(s,i)=>{t=t.set(new Z(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Y(),value:this.value};if(G(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(te(e),t);return r!=null?{path:ce(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const t=q(e),s=this.children.get(t);return s!==null?s.subtree(te(e)):new ne(null)}}set(e,t){if(G(e))return new ne(t,this.children);{const s=q(e),r=(this.children.get(s)||new ne(null)).set(te(e),t),o=this.children.insert(s,r);return new ne(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const t=q(e),s=this.children.get(t);if(s){const i=s.remove(te(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new ne(null):new ne(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const t=q(e),s=this.children.get(t);return s?s.get(te(e)):null}}setTree(e,t){if(G(e))return t;{const s=q(e),r=(this.children.get(s)||new ne(null)).setTree(te(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ne(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ce(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Y(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(G(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(te(e),ce(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Y(),t)}foreachOnPath_(e,t,s){if(G(e))return this;{this.value&&s(t,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(te(e),ce(t,i),s):new ne(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(ce(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class $e{constructor(e){this.writeTree_=e}static empty(){return new $e(new ne(null))}}function Tn(n,e,t){if(G(e))return new $e(new ne(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ce(i,e);return r=r.updateChild(o,t),new $e(n.writeTree_.set(i,r))}else{const i=new ne(t),r=n.writeTree_.setTree(e,i);return new $e(r)}}}function Ho(n,e,t){let s=n;return ke(t,(i,r)=>{s=Tn(s,ce(e,i),r)}),s}function Bo(n,e){if(G(e))return $e.empty();{const t=n.writeTree_.setTree(e,new ne(null));return new $e(t)}}function bi(n,e){return jt(n,e)!=null}function jt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ce(t.path,e)):null}function Wo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(re,(s,i)=>{e.push(new z(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new z(s,i.value))}),e}function mt(n,e){if(G(e))return n;{const t=jt(n,e);return t!=null?new $e(new ne(t)):new $e(n.writeTree_.subtree(e))}}function Ti(n){return n.writeTree_.isEmpty()}function on(n,e){return ac(Y(),n.writeTree_,e)}function ac(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ac(ce(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ce(n,".priority"),s)),t}}/**
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
 */function sr(n,e){return hc(e,n)}function eg(n,e,t,s,i){y(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Tn(n.visibleWrites,e,t)),n.lastWriteId=s}function tg(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function ng(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);y(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&sg(a,s.path)?i=!1:Fe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return ig(n),!0;if(s.snap)n.visibleWrites=Bo(n.visibleWrites,s.path);else{const a=s.children;ke(a,l=>{n.visibleWrites=Bo(n.visibleWrites,ce(s.path,l))})}return!0}else return!1}function sg(n,e){if(n.snap)return Fe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Fe(ce(n.path,t),e))return!0;return!1}function ig(n){n.visibleWrites=lc(n.allWrites,rg,Y()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function rg(n){return n.visible}function lc(n,e,t){let s=$e.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Fe(t,o)?(a=Ce(t,o),s=Tn(s,a,r.snap)):Fe(o,t)&&(a=Ce(o,t),s=Tn(s,Y(),r.snap.getChild(a)));else if(r.children){if(Fe(t,o))a=Ce(t,o),s=Ho(s,a,r.children);else if(Fe(o,t))if(a=Ce(o,t),G(a))s=Ho(s,Y(),r.children);else{const l=nn(r.children,q(a));if(l){const c=l.getChild(te(a));s=Tn(s,Y(),c)}}}else throw ln("WriteRecord should have .snap or .children")}}return s}function cc(n,e,t,s,i){if(!s&&!i){const r=jt(n.visibleWrites,e);if(r!=null)return r;{const o=mt(n.visibleWrites,e);if(Ti(o))return t;if(t==null&&!bi(o,Y()))return null;{const a=t||U.EMPTY_NODE;return on(o,a)}}}else{const r=mt(n.visibleWrites,e);if(!i&&Ti(r))return t;if(!i&&t==null&&!bi(r,Y()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Fe(c.path,e)||Fe(e,c.path))},a=lc(n.allWrites,o,e),l=t||U.EMPTY_NODE;return on(a,l)}}}function og(n,e,t){let s=U.EMPTY_NODE;const i=jt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=mt(n.visibleWrites,e);return t.forEachChild(re,(o,a)=>{const l=on(mt(r,new Z(o)),a);s=s.updateImmediateChild(o,l)}),Wo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=mt(n.visibleWrites,e);return Wo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ag(n,e,t,s,i){y(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ce(e,t);if(bi(n.visibleWrites,r))return null;{const o=mt(n.visibleWrites,r);return Ti(o)?i.getChild(t):on(o,i.getChild(t))}}function lg(n,e,t,s){const i=ce(e,t),r=jt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=mt(n.visibleWrites,i);return on(o,s.getNode().getImmediateChild(t))}else return null}function cg(n,e){return jt(n.visibleWrites,e)}function ug(n,e,t,s,i,r,o){let a;const l=mt(n.visibleWrites,e),c=jt(l,Y());if(c!=null)a=c;else if(t!=null)a=on(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function hg(){return{visibleWrites:$e.empty(),allWrites:[],lastWriteId:-1}}function ys(n,e,t,s){return cc(n.writeTree,n.treePath,e,t,s)}function ir(n,e){return og(n.writeTree,n.treePath,e)}function jo(n,e,t,s){return ag(n.writeTree,n.treePath,e,t,s)}function Is(n,e){return cg(n.writeTree,ce(n.treePath,e))}function dg(n,e,t,s,i,r){return ug(n.writeTree,n.treePath,e,t,s,i,r)}function rr(n,e,t){return lg(n.writeTree,n.treePath,e,t)}function uc(n,e){return hc(ce(n.treePath,e),n.writeTree)}function hc(n,e){return{treePath:n,writeTree:e}}/**
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
 */class fg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;y(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),y(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ln(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Mn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,rn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ln(s,e.snapshotNode,i.oldSnap));else throw ln("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class pg{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const dc=new pg;class or{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Lt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xt(this.viewCache_),r=dg(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function _g(n){return{filter:n}}function gg(n,e){y(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function mg(n,e,t,s,i){const r=new fg;let o,a;if(t.type===Ue.OVERWRITE){const c=t;c.source.fromUser?o=Si(n,e,c.path,c.snap,s,i,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=ws(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===Ue.MERGE){const c=t;c.source.fromUser?o=yg(n,e,c.path,c.children,s,i,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ki(n,e,c.path,c.children,s,i,a,r))}else if(t.type===Ue.ACK_USER_WRITE){const c=t;c.revert?o=Eg(n,e,c.path,s,i,r):o=Ig(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Ue.LISTEN_COMPLETE)o=wg(n,e,t.path,s,r);else throw ln("Unknown operation type: "+t.type);const l=r.getChanges();return vg(e,o,l),{viewCache:o,changes:l}}function vg(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ci(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(sc(Ci(e)))}}function fc(n,e,t,s,i,r){const o=e.eventCache;if(Is(s,t)!=null)return e;{let a,l;if(G(t))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xt(e),u=c instanceof U?c:U.EMPTY_NODE,h=ir(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ys(s,xt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=q(t);if(c===".priority"){y(yt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=jo(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=te(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=jo(s,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=rr(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return bn(e,a,o.isFullyInitialized()||G(t),n.filter.filtersNodes())}}function ws(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(G(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=q(t);if(!l.isCompleteForPath(t)&&yt(t)>1)return e;const p=te(t),g=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),g):c=u.updateChild(l.getNode(),f,g,p,dc,null)}const h=oc(e,c,l.isFullyInitialized()||G(t),u.filtersNodes()),d=new or(i,h,r);return fc(n,h,t,i,d,a)}function Si(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new or(i,e,r);if(G(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=bn(e,c,!0,n.filter.filtersNodes());else{const h=q(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=bn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=te(t),f=a.getNode().getImmediateChild(h);let p;if(G(d))p=s;else{const I=u.getCompleteChild(h);I!=null?Kl(d)===".priority"&&I.getChild(Ql(d)).isEmpty()?p=I:p=I.updateChild(d,s):p=U.EMPTY_NODE}if(f.equals(p))l=e;else{const I=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=bn(e,I,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function qo(n,e){return n.eventCache.isCompleteForChild(e)}function yg(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ce(t,l);qo(e,q(u))&&(a=Si(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ce(t,l);qo(e,q(u))||(a=Si(n,a,u,c,i,r,o))}),a}function zo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ki(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;G(t)?c=s:c=new ne(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=zo(n,f,d);l=ws(n,l,new Z(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),I=zo(n,p,d);l=ws(n,l,new Z(h),I,i,r,o,a)}}),l}function Ig(n,e,t,s,i,r,o){if(Is(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(G(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ws(n,e,t,l.getNode().getChild(t),i,r,a,o);if(G(t)){let c=new ne(null);return l.getNode().forEachChild(en,(u,h)=>{c=c.set(new Z(u),h)}),ki(n,e,t,c,i,r,a,o)}else return e}else{let c=new ne(null);return s.foreach((u,h)=>{const d=ce(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ki(n,e,t,c,i,r,a,o)}}function wg(n,e,t,s,i){const r=e.serverCache,o=oc(e,r.getNode(),r.isFullyInitialized()||G(t),r.isFiltered());return fc(n,o,t,s,dc,i)}function Eg(n,e,t,s,i,r){let o;if(Is(s,t)!=null)return e;{const a=new or(s,e,i),l=e.eventCache.getNode();let c;if(G(t)||q(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ys(s,xt(e));else{const h=e.serverCache.getNode();y(h instanceof U,"serverChildren would be complete if leaf node"),u=ir(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=q(t);let h=rr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,te(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,U.EMPTY_NODE,te(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ys(s,xt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Is(s,Y())!=null,bn(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Cg{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Zi(s.getIndex()),r=B_(s);this.processor_=_g(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(U.EMPTY_NODE,a.getNode(),null),u=new Lt(l,o.isFullyInitialized(),i.filtersNodes()),h=new Lt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=xs(h,u),this.eventGenerator_=new Y_(this.query_)}get query(){return this.query_}}function bg(n){return n.viewCache_.serverCache.getNode()}function Tg(n,e){const t=xt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!G(e)&&!t.getImmediateChild(q(e)).isEmpty())?t.getChild(e):null}function Go(n){return n.eventRegistrations_.length===0}function Sg(n,e){n.eventRegistrations_.push(e)}function Ko(n,e,t){const s=[];if(t){y(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Yo(n,e,t,s){e.type===Ue.MERGE&&e.source.queryId!==null&&(y(xt(n.viewCache_),"We should always have a full cache before handling merges"),y(Ci(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=mg(n.processor_,i,e,t,s);return gg(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,pc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function kg(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(re,(r,o)=>{s.push(rn(r,o))}),t.isFullyInitialized()&&s.push(sc(t.getNode())),pc(n,s,t.getNode(),e)}function pc(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Q_(n.eventGenerator_,e,t,i)}/**
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
 */let Es;class Rg{constructor(){this.views=new Map}}function Ag(n){y(!Es,"__referenceConstructor has already been defined"),Es=n}function Ng(){return y(Es,"Reference.ts has not been loaded"),Es}function Pg(n){return n.views.size===0}function ar(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return y(r!=null,"SyncTree gave us an op for an invalid query."),Yo(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Yo(o,e,t,s));return r}}function Og(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=ys(t,i?s:null),l=!1;a?l=!0:s instanceof U?(a=ir(t,s),l=!1):(a=U.EMPTY_NODE,l=!1);const c=xs(new Lt(a,l,!1),new Lt(s,i,!1));return new Cg(e,c)}return o}function Dg(n,e,t,s,i,r){const o=Og(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Sg(o,t),kg(o,t)}function Mg(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=It(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Ko(c,t,s)),Go(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Ko(l,t,s)),Go(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!It(n)&&r.push(new(Ng())(e._repo,e._path)),{removed:r,events:o}}function _c(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function tn(n,e){let t=null;for(const s of n.views.values())t=t||Tg(s,e);return t}function gc(n,e){if(e._queryParams.loadsAllData())return Fs(n);{const s=e._queryIdentifier;return n.views.get(s)}}function mc(n,e){return gc(n,e)!=null}function It(n){return Fs(n)!=null}function Fs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Cs;function Lg(n){y(!Cs,"__referenceConstructor has already been defined"),Cs=n}function xg(){return y(Cs,"Reference.ts has not been loaded"),Cs}let Fg=1;class Qo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=hg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vc(n,e,t,s,i){return eg(n.pendingWriteTree_,e,t,s,i),i?Gn(n,new Mt(rc(),e,t)):[]}function kt(n,e,t=!1){const s=tg(n.pendingWriteTree_,e);if(ng(n.pendingWriteTree_,e)){let r=new ne(null);return s.snap!=null?r=r.set(Y(),!0):ke(s.children,o=>{r=r.set(new Z(o),!0)}),Gn(n,new vs(s.path,r,t))}else return[]}function Us(n,e,t){return Gn(n,new Mt(tr(),e,t))}function Ug(n,e,t){const s=ne.fromObject(t);return Gn(n,new Un(tr(),e,s))}function $g(n,e){return Gn(n,new Fn(tr(),e))}function Vg(n,e,t){const s=cr(n,t);if(s){const i=ur(s),r=i.path,o=i.queryId,a=Ce(r,e),l=new Fn(nr(o),a);return hr(n,r,l)}else return[]}function Ri(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||mc(o,e))){const l=Mg(o,e,t,s);Pg(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>It(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Wg(d);for(let p=0;p<f.length;++p){const I=f[p],g=I.query,b=wc(n,I);n.listenProvider_.startListening(Sn(g),bs(n,g),b.hashFn,b.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Sn(e),null):c.forEach(d=>{const f=n.queryToTagMap.get($s(d));n.listenProvider_.stopListening(Sn(d),f)}))}jg(n,c)}return a}function Hg(n,e,t,s){const i=cr(n,s);if(i!=null){const r=ur(i),o=r.path,a=r.queryId,l=Ce(o,e),c=new Mt(nr(a),l,t);return hr(n,o,c)}else return[]}function Bg(n,e,t,s){const i=cr(n,s);if(i){const r=ur(i),o=r.path,a=r.queryId,l=Ce(o,e),c=ne.fromObject(t),u=new Un(nr(a),l,c);return hr(n,o,u)}else return[]}function Jo(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=Ce(d,i);r=r||tn(f,p),o=o||It(f)});let a=n.syncPointTree_.get(i);a?(o=o||It(a),r=r||tn(a,Y())):(a=new Rg,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=U.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const I=tn(p,Y());I&&(r=r.updateImmediateChild(f,I))}));const c=mc(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=$s(e);y(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=qg();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=sr(n.pendingWriteTree_,i);let h=Dg(a,e,t,u,r,l);if(!c&&!o&&!s){const d=gc(a,e);h=h.concat(zg(n,e,d))}return h}function lr(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ce(o,e),c=tn(a,l);if(c)return c});return cc(i,e,r,t,!0)}function Gn(n,e){return yc(e,n.syncPointTree_,null,sr(n.pendingWriteTree_,Y()))}function yc(n,e,t,s){if(G(n.path))return Ic(n,e,t,s);{const i=e.get(Y());t==null&&i!=null&&(t=tn(i,Y()));let r=[];const o=q(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=uc(s,o);r=r.concat(yc(a,l,c,u))}return i&&(r=r.concat(ar(i,n,s,t))),r}}function Ic(n,e,t,s){const i=e.get(Y());t==null&&i!=null&&(t=tn(i,Y()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=uc(s,o),u=n.operationForChild(o);u&&(r=r.concat(Ic(u,a,l,c)))}),i&&(r=r.concat(ar(i,n,s,t))),r}function wc(n,e){const t=e.query,s=bs(n,t);return{hashFn:()=>(bg(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Vg(n,t._path,s):$g(n,t._path);{const r=Hp(i,t);return Ri(n,t,null,r)}}}}function bs(n,e){const t=$s(e);return n.queryToTagMap.get(t)}function $s(n){return n._path.toString()+"$"+n._queryIdentifier}function cr(n,e){return n.tagToQueryMap.get(e)}function ur(n){const e=n.indexOf("$");return y(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Z(n.substr(0,e))}}function hr(n,e,t){const s=n.syncPointTree_.get(e);y(s,"Missing sync point for query tag that we're tracking");const i=sr(n.pendingWriteTree_,e);return ar(s,t,i,null)}function Wg(n){return n.fold((e,t,s)=>{if(t&&It(t))return[Fs(t)];{let i=[];return t&&(i=_c(t)),ke(s,(r,o)=>{i=i.concat(o)}),i}})}function Sn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(xg())(n._repo,n._path):n}function jg(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=$s(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function qg(){return Fg++}function zg(n,e,t){const s=e._path,i=bs(n,e),r=wc(n,t),o=n.listenProvider_.startListening(Sn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)y(!It(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!G(c)&&u&&It(u))return[Fs(u).query];{let d=[];return u&&(d=d.concat(_c(u).map(f=>f.query))),ke(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Sn(u),bs(n,u))}}return o}/**
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
 */class dr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new dr(t)}node(){return this.node_}}class fr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ce(this.path_,e);return new fr(this.syncTree_,t)}node(){return lr(this.syncTree_,this.path_)}}const Gg=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Xo=function(n,e,t){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Kg(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Yg(n[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Kg=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:y(!1,"Unexpected server value: "+n)}},Yg=function(n,e,t){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&y(!1,"Unexpected increment value: "+s);const i=e.node();if(y(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Qg=function(n,e,t,s){return pr(e,new fr(t,n),s)},Ec=function(n,e,t){return pr(n,new dr(e),t)};function pr(n,e,t){const s=n.getPriority().val(),i=Xo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Xo(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ue(a,fe(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ue(i))),o.forEachChild(re,(a,l)=>{const c=pr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class _r{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function gr(n,e){let t=e instanceof Z?e:new Z(e),s=n,i=q(t);for(;i!==null;){const r=nn(s.node.children,i)||{children:{},childCount:0};s=new _r(i,s,r),t=te(t),i=q(t)}return s}function pn(n){return n.node.value}function Cc(n,e){n.node.value=e,Ai(n)}function bc(n){return n.node.childCount>0}function Jg(n){return pn(n)===void 0&&!bc(n)}function Vs(n,e){ke(n.node.children,(t,s)=>{e(new _r(t,n,s))})}function Tc(n,e,t,s){t&&!s&&e(n),Vs(n,i=>{Tc(i,e,!0,s)}),t&&s&&e(n)}function Xg(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Kn(n){return new Z(n.parent===null?n.name:Kn(n.parent)+"/"+n.name)}function Ai(n){n.parent!==null&&Zg(n.parent,n.name,n)}function Zg(n,e,t){const s=Jg(t),i=st(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Ai(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Ai(n))}/**
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
 */const em=/[\[\].#$\/\u0000-\u001F\u007F]/,tm=/[\[\].#$\u0000-\u001F\u007F]/,si=10*1024*1024,Sc=function(n){return typeof n=="string"&&n.length!==0&&!em.test(n)},kc=function(n){return typeof n=="string"&&n.length!==0&&!tm.test(n)},nm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kc(n)},Rc=function(n,e,t,s){s&&e===void 0||mr(Li(n,"value"),e,t)},mr=function(n,e,t){const s=t instanceof Z?new I_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+bt(s));if(typeof e=="function")throw new Error(n+"contains a function "+bt(s)+" with contents = "+e.toString());if(kl(e))throw new Error(n+"contains "+e.toString()+" "+bt(s));if(typeof e=="string"&&e.length>si/3&&Rs(e)>si)throw new Error(n+"contains a string greater than "+si+" utf8 bytes "+bt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ke(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Sc(o)))throw new Error(n+" contains an invalid key ("+o+") "+bt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);w_(s,o),mr(n,a,s),E_(s)}),i&&r)throw new Error(n+' contains ".value" child '+bt(s)+" in addition to actual children.")}},Ac=function(n,e,t,s){if(!(s&&t===void 0)&&!kc(t))throw new Error(Li(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sm=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ac(n,e,t,s)},Nc=function(n,e){if(q(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},im=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!nm(t))throw new Error(Li(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class rm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vr(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Qi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Pc(n,e,t){vr(n,t),Oc(n,s=>Qi(s,e))}function nt(n,e,t){vr(n,t),Oc(n,s=>Fe(s,e)||Fe(e,s))}function Oc(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(om(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function om(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Nt&&me("event: "+t.toString()),fn(s)}}}/**
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
 */const am="repo_interrupt",lm=25;class cm{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ms(),this.transactionQueueTree_=new _r,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function um(n,e,t){if(n.stats_=Ki(n.repoInfo_),n.forceRestClient_||qp())n.server_=new gs(n.repoInfo_,(s,i,r,o)=>{Zo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ea(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Xe(n.repoInfo_,e,(s,i,r,o)=>{Zo(n,s,i,r,o)},s=>{ea(n,s)},s=>{hm(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Qp(n.repoInfo_,()=>new K_(n.stats_,n.server_)),n.infoData_=new W_,n.infoSyncTree_=new Qo({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Us(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ir(n,"connected",!1),n.serverSyncTree_=new Qo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);nt(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Dc(n){const t=n.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function yr(n){return Gg({timestamp:Dc(n)})}function Zo(n,e,t,s,i){n.dataUpdateCount++;const r=new Z(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=os(t,c=>fe(c));o=Bg(n.serverSyncTree_,r,l,i)}else{const l=fe(t);o=Hg(n.serverSyncTree_,r,l,i)}else if(s){const l=os(t,c=>fe(c));o=Ug(n.serverSyncTree_,r,l)}else{const l=fe(t);o=Us(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Hs(n,r)),nt(n.eventQueue_,a,o)}function ea(n,e){Ir(n,"connected",e),e===!1&&fm(n)}function hm(n,e){ke(e,(t,s)=>{Ir(n,t,s)})}function Ir(n,e,t){const s=new Z("/.info/"+e),i=fe(t);n.infoData_.updateSnapshot(s,i);const r=Us(n.infoSyncTree_,s,i);nt(n.eventQueue_,s,r)}function Mc(n){return n.nextWriteId_++}function dm(n,e,t,s,i){wr(n,"set",{path:e.toString(),value:t,priority:s});const r=yr(n),o=fe(t,s),a=lr(n.serverSyncTree_,e),l=Ec(o,a,r),c=Mc(n),u=vc(n.serverSyncTree_,e,l,c,!0);vr(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||Te("set at "+e+" failed: "+d);const I=kt(n.serverSyncTree_,c,!p);nt(n.eventQueue_,e,I),gm(n,i,d,f)});const h=$c(n,e);Hs(n,h),nt(n.eventQueue_,h,[])}function fm(n){wr(n,"onDisconnectEvents");const e=yr(n),t=ms();Ei(n.onDisconnect_,Y(),(i,r)=>{const o=Qg(i,r,n.serverSyncTree_,e);ic(t,i,o)});let s=[];Ei(t,Y(),(i,r)=>{s=s.concat(Us(n.serverSyncTree_,i,r));const o=$c(n,i);Hs(n,o)}),n.onDisconnect_=ms(),nt(n.eventQueue_,Y(),s)}function pm(n,e,t){let s;q(e._path)===".info"?s=Jo(n.infoSyncTree_,e,t):s=Jo(n.serverSyncTree_,e,t),Pc(n.eventQueue_,e._path,s)}function ta(n,e,t){let s;q(e._path)===".info"?s=Ri(n.infoSyncTree_,e,t):s=Ri(n.serverSyncTree_,e,t),Pc(n.eventQueue_,e._path,s)}function _m(n){n.persistentConnection_&&n.persistentConnection_.interrupt(am)}function wr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),me(t,...e)}function gm(n,e,t,s){e&&fn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Lc(n,e,t){return lr(n.serverSyncTree_,e,t)||U.EMPTY_NODE}function Er(n,e=n.transactionQueueTree_){if(e||Bs(n,e),pn(e)){const t=Fc(n,e);y(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&mm(n,Kn(e),t)}else bc(e)&&Vs(e,t=>{Er(n,t)})}function mm(n,e,t){const s=t.map(c=>c.currentWriteId),i=Lc(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];y(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ce(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{wr(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(kt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Bs(n,gr(n.transactionQueueTree_,e)),Er(n,n.transactionQueueTree_),nt(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)fn(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Te("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Hs(n,e)}},o)}function Hs(n,e){const t=xc(n,e),s=Kn(t),i=Fc(n,t);return vm(n,i,s),s}function vm(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ce(t,l.path);let u=!1,h;if(y(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(kt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=lm)u=!0,h="maxretry",i=i.concat(kt(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Lc(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){mr("transaction failed: Data returned ",f,l.path);let p=fe(f);typeof f=="object"&&f!=null&&st(f,".priority")||(p=p.updatePriority(d.getPriority()));const g=l.currentWriteId,b=yr(n),F=Ec(p,d,b);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=F,l.currentWriteId=Mc(n),o.splice(o.indexOf(g),1),i=i.concat(vc(n.serverSyncTree_,l.path,F,l.currentWriteId,l.applyLocally)),i=i.concat(kt(n.serverSyncTree_,g,!0))}else u=!0,h="nodata",i=i.concat(kt(n.serverSyncTree_,l.currentWriteId,!0))}nt(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Bs(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)fn(s[a]);Er(n,n.transactionQueueTree_)}function xc(n,e){let t,s=n.transactionQueueTree_;for(t=q(e);t!==null&&pn(s)===void 0;)s=gr(s,t),e=te(e),t=q(e);return s}function Fc(n,e){const t=[];return Uc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Uc(n,e,t){const s=pn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Vs(e,i=>{Uc(n,i,t)})}function Bs(n,e){const t=pn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Cc(e,t.length>0?t:void 0)}Vs(e,s=>{Bs(n,s)})}function $c(n,e){const t=Kn(xc(n,e)),s=gr(n.transactionQueueTree_,e);return Xg(s,i=>{ii(n,i)}),ii(n,s),Tc(s,i=>{ii(n,i)}),t}function ii(n,e){const t=pn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(y(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(y(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(kt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cc(e,void 0):t.length=r+1,nt(n.eventQueue_,Kn(e),i);for(let o=0;o<s.length;o++)fn(s[o])}}/**
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
 */function ym(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Im(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Te(`Invalid query segment '${t}' in query '${n}'`)}return e}const na=function(n,e){const t=wm(n),s=t.namespace;t.domain==="firebase.com"&&tt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&tt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||xp();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new $l(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Z(t.pathString)}},wm=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=ym(n.substring(u,h)));const d=Im(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const sa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Em=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=sa.charAt(t%64),t=Math.floor(t/64);y(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=sa.charAt(e[i]);return y(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Vc{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class Hc{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Cm{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return y(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Cr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:Kl(this._path)}get ref(){return new it(this._repo,this._path)}get _queryIdentifier(){const e=$o(this._queryParams),t=zi(e);return t==="{}"?"default":t}get _queryObject(){return $o(this._queryParams)}isEqual(e){if(e=Re(e),!(e instanceof Cr))return!1;const t=this._repo===e._repo,s=Qi(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+y_(this._path)}}class it extends Cr{constructor(e,t){super(e,t,new er,!1)}get parent(){const e=Ql(this._path);return e===null?null:new it(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $n{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Z(e),s=an(this.ref,e);return new $n(this._node.getChild(t),s,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new $n(i,an(this.ref,s),re)))}hasChild(e){const t=new Z(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bc(n,e){return n=Re(n),n._checkNotDeleted("ref"),e!==void 0?an(n._root,e):n._root}function an(n,e){return n=Re(n),q(n._path)===null?sm("child","path",e,!1):Ac("child","path",e,!1),new it(n._repo,ce(n._path,e))}function bm(n,e){n=Re(n),Nc("push",n._path),Rc("push",e,n._path,!0);const t=Dc(n._repo),s=Em(t),i=an(n,s),r=an(n,s);let o;return e!=null?o=Wc(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Wc(n,e){n=Re(n),Nc("set",n._path),Rc("set",e,n._path,!1);const t=new ks;return dm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class br{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Vc("value",this,new $n(e.snapshotNode,new it(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Hc(this,e,t):null}matches(e){return e instanceof br?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Tr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Hc(this,e,t):null}createEvent(e,t){y(e.childName!=null,"Child events should have a childName.");const s=an(new it(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Vc(e.type,this,new $n(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Tr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Tm(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(u,h)=>{ta(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Cm(t,r||void 0),a=e==="value"?new br(o):new Tr(e,o);return pm(n._repo,n,a),()=>ta(n._repo,n,a)}function Sm(n,e,t,s){return Tm(n,"value",e,t,s)}Ag(it);Lg(it);/**
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
 */const km="FIREBASE_DATABASE_EMULATOR_HOST",Ni={};let Rm=!1;function Am(n,e,t,s){n.repoInfo_=new $l(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Nm(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||tt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),me("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=na(r,i),a=o.repoInfo,l,c;typeof process<"u"&&wo&&(c=wo[km]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=na(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Zt(Zt.OWNER):new Gp(n.name,n.options,e);im("Invalid Firebase Database URL",o),G(o.path)||tt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Om(a,n,u,new zp(n.name,t));return new Dm(h,n)}function Pm(n,e){const t=Ni[e];(!t||t[n.key]!==n)&&tt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),_m(n),delete t[n.key]}function Om(n,e,t,s){let i=Ni[e.name];i||(i={},Ni[e.name]=i);let r=i[n.toURLString()];return r&&tt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new cm(n,Rm,t,s),i[n.toURLString()]=r,r}class Dm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(um(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new it(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Pm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tt("Cannot call "+e+" on a deleted database.")}}function jc(n=Fi(),e){const t=Wt(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Zu("database");s&&Mm(t,...s)}return t}function Mm(n,e,t,s={}){n=Re(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&tt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&tt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Zt(Zt.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:eh(s.mockUserToken,n.app.options.projectId);r=new Zt(o)}Am(i,e,t,r)}/**
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
 */function Lm(n){Pp(un),je(new Ve("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Nm(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ne(Eo,Co,n),Ne(Eo,Co,"esm2017")}Xe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Xe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Lm();async function xm(n){const e=jc(),t=Bc(e,n);return new Promise((s,i)=>{Sm(t,r=>{const o=r.val()||[];s(o)},r=>{i(r)})})}async function Fm(n){const e=jc(),t=Bc(e,"UserData/CompletionTimes"),s=new Date().toLocaleString(),i=bm(t);return Wc(i,{time:n,timestamp:s}),i.key}const qc="@firebase/installations",Sr="0.6.5";/**
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
 */const zc=1e4,Gc=`w:${Sr}`,Kc="FIS_v2",Um="https://firebaseinstallations.googleapis.com/v1",$m=60*60*1e3,Vm="installations",Hm="Installations";/**
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
 */const Bm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ft=new Bt(Vm,Hm,Bm);function Yc(n){return n instanceof qe&&n.code.includes("request-failed")}/**
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
 */function Qc({projectId:n}){return`${Um}/projects/${n}/installations`}function Jc(n){return{token:n.token,requestStatus:2,expiresIn:jm(n.expiresIn),creationTime:Date.now()}}async function Xc(n,e){const s=(await e.json()).error;return Ft.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Zc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Wm(n,{refreshToken:e}){const t=Zc(n);return t.append("Authorization",qm(e)),t}async function eu(n){const e=await n();return e.status>=500&&e.status<600?n():e}function jm(n){return Number(n.replace("s","000"))}function qm(n){return`${Kc} ${n}`}/**
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
 */async function zm({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Qc(n),i=Zc(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:t,authVersion:Kc,appId:n.appId,sdkVersion:Gc},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await eu(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Jc(c.authToken)}}else throw await Xc("Create Installation",l)}/**
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
 */function tu(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Gm(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Km=/^[cdef][\w-]{21}$/,Pi="";function Ym(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Qm(n);return Km.test(t)?t:Pi}catch{return Pi}}function Qm(n){return Gm(n).substr(0,22)}/**
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
 */function Ws(n){return`${n.appName}!${n.appId}`}/**
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
 */const nu=new Map;function su(n,e){const t=Ws(n);iu(t,e),Jm(t,e)}function iu(n,e){const t=nu.get(n);if(t)for(const s of t)s(e)}function Jm(n,e){const t=Xm();t&&t.postMessage({key:n,fid:e}),Zm()}let Rt=null;function Xm(){return!Rt&&"BroadcastChannel"in self&&(Rt=new BroadcastChannel("[Firebase] FID Change"),Rt.onmessage=n=>{iu(n.data.key,n.data.fid)}),Rt}function Zm(){nu.size===0&&Rt&&(Rt.close(),Rt=null)}/**
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
 */const ev="firebase-installations-database",tv=1,Ut="firebase-installations-store";let ri=null;function kr(){return ri||(ri=Wa(ev,tv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ut)}}})),ri}async function Ts(n,e){const t=Ws(n),i=(await kr()).transaction(Ut,"readwrite"),r=i.objectStore(Ut),o=await r.get(t);return await r.put(e,t),await i.done,(!o||o.fid!==e.fid)&&su(n,e.fid),e}async function ru(n){const e=Ws(n),s=(await kr()).transaction(Ut,"readwrite");await s.objectStore(Ut).delete(e),await s.done}async function js(n,e){const t=Ws(n),i=(await kr()).transaction(Ut,"readwrite"),r=i.objectStore(Ut),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&su(n,a.fid),a}/**
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
 */async function Rr(n){let e;const t=await js(n.appConfig,s=>{const i=nv(s),r=sv(n,i);return e=r.registrationPromise,r.installationEntry});return t.fid===Pi?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function nv(n){const e=n||{fid:Ym(),registrationStatus:0};return ou(e)}function sv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ft.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=iv(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:rv(n)}:{installationEntry:e}}async function iv(n,e){try{const t=await zm(n,e);return Ts(n.appConfig,t)}catch(t){throw Yc(t)&&t.customData.serverCode===409?await ru(n.appConfig):await Ts(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function rv(n){let e=await ia(n.appConfig);for(;e.registrationStatus===1;)await tu(100),e=await ia(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Rr(n);return s||t}return e}function ia(n){return js(n,e=>{if(!e)throw Ft.create("installation-not-found");return ou(e)})}function ou(n){return ov(n)?{fid:n.fid,registrationStatus:0}:n}function ov(n){return n.registrationStatus===1&&n.registrationTime+zc<Date.now()}/**
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
 */async function av({appConfig:n,heartbeatServiceProvider:e},t){const s=lv(n,t),i=Wm(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Gc,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await eu(()=>fetch(s,a));if(l.ok){const c=await l.json();return Jc(c)}else throw await Xc("Generate Auth Token",l)}function lv(n,{fid:e}){return`${Qc(n)}/${e}/authTokens:generate`}/**
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
 */async function Ar(n,e=!1){let t;const s=await js(n.appConfig,r=>{if(!au(r))throw Ft.create("not-registered");const o=r.authToken;if(!e&&hv(o))return r;if(o.requestStatus===1)return t=cv(n,e),r;{if(!navigator.onLine)throw Ft.create("app-offline");const a=fv(r);return t=uv(n,a),a}});return t?await t:s.authToken}async function cv(n,e){let t=await ra(n.appConfig);for(;t.authToken.requestStatus===1;)await tu(100),t=await ra(n.appConfig);const s=t.authToken;return s.requestStatus===0?Ar(n,e):s}function ra(n){return js(n,e=>{if(!au(e))throw Ft.create("not-registered");const t=e.authToken;return pv(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function uv(n,e){try{const t=await av(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Ts(n.appConfig,s),t}catch(t){if(Yc(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ru(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ts(n.appConfig,s)}throw t}}function au(n){return n!==void 0&&n.registrationStatus===2}function hv(n){return n.requestStatus===2&&!dv(n)}function dv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+$m}function fv(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function pv(n){return n.requestStatus===1&&n.requestTime+zc<Date.now()}/**
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
 */async function _v(n){const e=n,{installationEntry:t,registrationPromise:s}=await Rr(e);return s?s.catch(console.error):Ar(e).catch(console.error),t.fid}/**
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
 */async function gv(n,e=!1){const t=n;return await mv(t),(await Ar(t,e)).token}async function mv(n){const{registrationPromise:e}=await Rr(n);e&&await e}/**
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
 */function vv(n){if(!n||!n.options)throw oi("App Configuration");if(!n.name)throw oi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw oi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function oi(n){return Ft.create("missing-app-config-values",{valueName:n})}/**
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
 */const lu="installations",yv="installations-internal",Iv=n=>{const e=n.getProvider("app").getImmediate(),t=vv(e),s=Wt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},wv=n=>{const e=n.getProvider("app").getImmediate(),t=Wt(e,lu).getImmediate();return{getId:()=>_v(t),getToken:i=>gv(t,i)}};function Ev(){je(new Ve(lu,Iv,"PUBLIC")),je(new Ve(yv,wv,"PRIVATE"))}Ev();Ne(qc,Sr);Ne(qc,Sr,"esm2017");/**
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
 */const Ss="analytics",Cv="firebase_id",bv="origin",Tv=60*1e3,Sv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nr="https://www.googletagmanager.com/gtag/js";/**
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
 */const Se=new As("@firebase/analytics");/**
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
 */const kv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ae=new Bt("analytics","Analytics",kv);/**
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
 */function Rv(n){if(!n.startsWith(Nr)){const e=Ae.create("invalid-gtag-resource",{gtagURL:n});return Se.warn(e.message),""}return n}function cu(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Av(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Nv(n,e){const t=Av("firebase-js-sdk-policy",{createScriptURL:Rv}),s=document.createElement("script"),i=`${Nr}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Pv(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Ov(n,e,t,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await cu(t)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Se.error(a)}n("config",i,r)}async function Dv(n,e,t,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await cu(t);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",s,i||{})}catch(r){Se.error(r)}}function Mv(n,e,t,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await Dv(n,e,t,a,l)}else if(r==="config"){const[a,l]=o;await Ov(n,e,t,s,a,l)}else if(r==="consent"){const[a]=o;n("consent","update",a)}else if(r==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){Se.error(a)}}return i}function Lv(n,e,t,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Mv(r,n,e,t),{gtagCore:r,wrappedGtag:window[i]}}function xv(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Nr)&&t.src.includes(n))return t;return null}/**
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
 */const Fv=30,Uv=1e3;class $v{constructor(e={},t=Uv){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uu=new $v;function Vv(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Hv(n){var e;const{appId:t,apiKey:s}=n,i={method:"GET",headers:Vv(s)},r=Sv.replace("{app-id}",t),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ae.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Bv(n,e=uu,t){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw Ae.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Ae.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new qv;return setTimeout(async()=>{a.abort()},t!==void 0?t:Tv),hu({appId:s,apiKey:i,measurementId:r},o,a,e)}async function hu(n,{throttleEndTimeMillis:e,backoffCount:t},s,i=uu){var r;const{appId:o,measurementId:a}=n;try{await Wv(s,e)}catch(l){if(a)return Se.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Hv(n);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!jv(c)){if(i.deleteThrottleMetadata(o),a)return Se.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Qr(t,i.intervalMillis,Fv):Qr(t,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return i.setThrottleMetadata(o,h),Se.debug(`Calling attemptFetch again in ${u} millis`),hu(n,h,s,i)}}function Wv(n,e){return new Promise((t,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(r),s(Ae.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jv(n){if(!(n instanceof qe)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class qv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zv(n,e,t,s,i){if(i&&i.global){n("event",t,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});n("event",t,o)}}/**
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
 */async function Gv(){if(Ua())try{await $a()}catch(n){return Se.warn(Ae.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Se.warn(Ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Kv(n,e,t,s,i,r,o){var a;const l=Bv(n);l.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&Se.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Se.error(f)),e.push(l);const c=Gv().then(f=>{if(f)return s.getId()}),[u,h]=await Promise.all([l,c]);xv(r)||Nv(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[bv]="firebase",d.update=!0,h!=null&&(d[Cv]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class Yv{constructor(e){this.app=e}_delete(){return delete kn[this.app.options.appId],Promise.resolve()}}let kn={},oa=[];const aa={};let ai="dataLayer",Qv="gtag",la,du,ca=!1;function Jv(){const n=[];if(La()&&n.push("This is a browser extension environment."),nh()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),t=Ae.create("invalid-analytics-context",{errorInfo:e});Se.warn(t.message)}}function Xv(n,e,t){Jv();const s=n.options.appId;if(!s)throw Ae.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Se.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ae.create("no-api-key");if(kn[s]!=null)throw Ae.create("already-exists",{id:s});if(!ca){Pv(ai);const{wrappedGtag:r,gtagCore:o}=Lv(kn,oa,aa,ai,Qv);du=r,la=o,ca=!0}return kn[s]=Kv(n,oa,aa,e,la,ai,t),new Yv(n)}function Zv(n=Fi()){n=Re(n);const e=Wt(n,Ss);return e.isInitialized()?e.getImmediate():ey(n)}function ey(n,e={}){const t=Wt(n,Ss);if(t.isInitialized()){const i=t.getImmediate();if(An(e,t.getOptions()))return i;throw Ae.create("already-initialized")}return t.initialize({options:e})}function fu(n,e,t,s){n=Re(n),zv(du,kn[n.app.options.appId],e,t,s).catch(i=>Se.error(i))}const ua="@firebase/analytics",ha="0.10.1";function ty(){je(new Ve(Ss,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Xv(s,i,t)},"PUBLIC")),je(new Ve("analytics-internal",n,"PRIVATE")),Ne(ua,ha),Ne(ua,ha,"esm2017");function n(e){try{const t=e.getProvider(Ss).getImmediate();return{logEvent:(s,i,r)=>fu(t,s,i,r)}}catch(t){throw Ae.create("interop-component-reg-failed",{reason:t})}}}ty();function ny(n){let e,t,s=Ke(n[2])+"",i,r,o,a=Ke(n[1])+"",l,c,u,h=Ke(n[0])+"",d;return{c(){e=E("span"),t=E("span"),i=ve(s),r=ve(":"),o=E("span"),l=ve(a),c=ve(":"),u=E("span"),d=ve(h),this.h()},l(f){e=C(f,"SPAN",{class:!0});var p=W(e);t=C(p,"SPAN",{class:!0});var I=W(t);i=ye(I,s),I.forEach(_),r=ye(p,":"),o=C(p,"SPAN",{class:!0});var g=W(o);l=ye(g,a),g.forEach(_),c=ye(p,":"),u=C(p,"SPAN",{class:!0});var b=W(u);d=ye(b,h),b.forEach(_),p.forEach(_),this.h()},h(){R(t,"class","value"),R(o,"class","value"),R(u,"class","value"),R(e,"class","timer svelte-1y1osaq")},m(f,p){P(f,e,p),m(e,t),m(t,i),m(e,r),m(e,o),m(o,l),m(e,c),m(e,u),m(u,d)},p(f,[p]){p&4&&s!==(s=Ke(f[2])+"")&&He(i,s),p&2&&a!==(a=Ke(f[1])+"")&&He(l,a),p&1&&h!==(h=Ke(f[0])+"")&&He(d,h)},i:ge,o:ge,d(f){f&&_(e)}}}function Ke(n){return n<10?`0${n}`:n.toString()}function sy(n,e,t){let s,i,r,o,a,l,{elapsedSeconds:c}=e,u=Date.now(),h=ci(!1);Xn(n,h,b=>t(12,o=b));let d=ci(0);Xn(n,d,b=>t(13,a=b));const f=Nu(0,function(F){const S=setInterval(()=>{o&&(d.set(Math.round((Date.now()-u)/1e3)),F(a))},1e3);return function(){clearInterval(S)}});Xn(n,f,b=>t(10,l=b));function p(){o||(u=Date.now()-a*1e3,h.set(!0))}function I(){o&&h.set(!1)}function g(){I(),u=Date.now(),d.set(0)}return n.$$set=b=>{"elapsedSeconds"in b&&t(6,c=b.elapsedSeconds)},n.$$.update=()=>{n.$$.dirty&1024&&t(2,s=Math.floor(l/3600)),n.$$.dirty&1028&&t(1,i=Math.floor((l-s*3600)/60)),n.$$.dirty&1030&&t(0,r=l-s*3600-i*60),n.$$.dirty&7&&t(6,c=Ke(s)+":"+Ke(i)+":"+Ke(r))},[r,i,s,h,d,f,c,p,I,g,l]}class iy extends Vt{constructor(e){super(),Ht(this,e,sy,ny,$t,{elapsedSeconds:6,start:7,stop:8,reset:9})}get start(){return this.$$.ctx[7]}get stop(){return this.$$.ctx[8]}get reset(){return this.$$.ctx[9]}}const ry=""+new URL("../assets/ex-solution.DMtatkDj.png",import.meta.url).href,oy=""+new URL("../assets/ex-letter-box.mgBNjwYG.png",import.meta.url).href;function ay(n){let e,t="Find the 8-letter circle word",s,i,r="<li>There are 2 words to find.</li> <li>Letters may only be used once and have to be in the letter bank.</li> <li>The red circles are shared letters between the two words.</li> <li>You must fill in every word before submitting.</li>",o,a,l="Example",c,u,h="If we had these letters:",d,f,p,I,g,b=`We could spell the words 
    <b><span style="color: red;">M</span>USI<span style="color: red;">C</span></b> 
    and 
    <b><span style="color: red;">C</span>HAR<span style="color: red;">M</span> </b>.`,F,A,S='Notice how these words share an <b><span style="color: red;">M</span></b> and a <b><span style="color: red;">C</span></b>.',V,D,k="One correct solution:",T,w,x,se,N,H="Remember there can be more than one solution.";return{c(){e=E("h3"),e.textContent=t,s=M(),i=E("ul"),i.innerHTML=r,o=M(),a=E("h3"),a.textContent=l,c=M(),u=E("p"),u.textContent=h,d=M(),f=E("img"),I=M(),g=E("p"),g.innerHTML=b,F=M(),A=E("p"),A.innerHTML=S,V=M(),D=E("p"),D.textContent=k,T=M(),w=E("img"),se=M(),N=E("p"),N.textContent=H,this.h()},l(v){e=C(v,"H3",{"data-svelte-h":!0}),Q(e)!=="svelte-1j8js8f"&&(e.textContent=t),s=L(v),i=C(v,"UL",{class:!0,"data-svelte-h":!0}),Q(i)!=="svelte-1eowta5"&&(i.innerHTML=r),o=L(v),a=C(v,"H3",{"data-svelte-h":!0}),Q(a)!=="svelte-qg4234"&&(a.textContent=l),c=L(v),u=C(v,"P",{"data-svelte-h":!0}),Q(u)!=="svelte-eqhtsw"&&(u.textContent=h),d=L(v),f=C(v,"IMG",{src:!0,alt:!0,style:!0}),I=L(v),g=C(v,"P",{"data-svelte-h":!0}),Q(g)!=="svelte-9c7ajy"&&(g.innerHTML=b),F=L(v),A=C(v,"P",{"data-svelte-h":!0}),Q(A)!=="svelte-1xer9do"&&(A.innerHTML=S),V=L(v),D=C(v,"P",{"data-svelte-h":!0}),Q(D)!=="svelte-1tryhud"&&(D.textContent=k),T=L(v),w=C(v,"IMG",{src:!0,alt:!0,style:!0}),se=L(v),N=C(v,"P",{"data-svelte-h":!0}),Q(N)!=="svelte-1imbt6f"&&(N.textContent=H),this.h()},h(){R(i,"class","definition-list"),li(f.src,p=oy)||R(f,"src",p),R(f,"alt","Welcome"),Tt(f,"width","350px"),Tt(f,"height","auto"),li(w.src,x=ry)||R(w,"src",x),R(w,"alt","Welcome"),Tt(w,"width","150px"),Tt(w,"height","auto")},m(v,j){P(v,e,j),P(v,s,j),P(v,i,j),P(v,o,j),P(v,a,j),P(v,c,j),P(v,u,j),P(v,d,j),P(v,f,j),P(v,I,j),P(v,g,j),P(v,F,j),P(v,A,j),P(v,V,j),P(v,D,j),P(v,T,j),P(v,w,j),P(v,se,j),P(v,N,j)},p:ge,i:ge,o:ge,d(v){v&&(_(e),_(s),_(i),_(o),_(a),_(c),_(u),_(d),_(f),_(I),_(g),_(F),_(A),_(V),_(D),_(T),_(w),_(se),_(N))}}}class pu extends Vt{constructor(e){super(),Ht(this,e,null,ay,$t,{})}}function da(n,e,t){const s=n.slice();return s[32]=e[t],s}function fa(n,e,t){const s=n.slice();return s[35]=e[t],s[37]=t,s}function pa(n,e,t){const s=n.slice();return s[35]=e[t],s[37]=t,s}function ly(n){let e,t="Loading Game...";return{c(){e=E("p"),e.textContent=t},l(s){e=C(s,"P",{"data-svelte-h":!0}),Q(e)!=="svelte-kk77ic"&&(e.textContent=t)},m(s,i){P(s,e,i)},p:ge,d(s){s&&_(e)}}}function cy(n){let e,t,s,i=[],r=new Map,o,a,l='<i class="fa-solid fa-eraser"></i>',c,u,h='<i class="fa-solid fa-shuffle"></i>',d,f,p='<i class="fa-solid fa-delete-left"></i>',I,g,b="Enter",F,A,S,V,D,k,T=pt(n[4]),w=[];for(let N=0;N<T.length;N+=1)w[N]=_a(pa(n,T,N));let x=pt(n[5]);const se=N=>N[37];for(let N=0;N<x.length;N+=1){let H=fa(n,x,N),v=se(H);r.set(v,i[N]=ga(v,H))}return{c(){e=E("div");for(let N=0;N<w.length;N+=1)w[N].c();t=M(),s=E("div");for(let N=0;N<i.length;N+=1)i[N].c();o=M(),a=E("div"),a.innerHTML=l,c=M(),u=E("div"),u.innerHTML=h,d=M(),f=E("div"),f.innerHTML=p,I=M(),g=E("div"),g.textContent=b,F=M(),A=E("p"),S=ve("Puzzle for "),V=ve(n[9]),this.h()},l(N){e=C(N,"DIV",{class:!0});var H=W(e);for(let J=0;J<w.length;J+=1)w[J].l(H);H.forEach(_),t=L(N),s=C(N,"DIV",{class:!0});var v=W(s);for(let J=0;J<i.length;J+=1)i[J].l(v);o=L(v),a=C(v,"DIV",{class:!0,"data-svelte-h":!0}),Q(a)!=="svelte-pcdrzy"&&(a.innerHTML=l),c=L(v),u=C(v,"DIV",{class:!0,"data-svelte-h":!0}),Q(u)!=="svelte-1nazuqy"&&(u.innerHTML=h),d=L(v),f=C(v,"DIV",{class:!0,"data-svelte-h":!0}),Q(f)!=="svelte-1lzlrm1"&&(f.innerHTML=p),I=L(v),g=C(v,"DIV",{class:!0,"data-svelte-h":!0}),Q(g)!=="svelte-10umx21"&&(g.textContent=b),v.forEach(_),F=L(N),A=C(N,"P",{class:!0});var j=W(A);S=ye(j,"Puzzle for "),V=ye(j,n[9]),j.forEach(_),this.h()},h(){R(e,"class","circle-container"),R(a,"class","key"),R(u,"class","key"),R(f,"class","key"),R(g,"class","key enter-key"),R(s,"class","keyboard"),R(A,"class","date")},m(N,H){P(N,e,H);for(let v=0;v<w.length;v+=1)w[v]&&w[v].m(e,null);P(N,t,H),P(N,s,H);for(let v=0;v<i.length;v+=1)i[v]&&i[v].m(s,null);m(s,o),m(s,a),m(s,c),m(s,u),m(s,d),m(s,f),m(s,I),m(s,g),P(N,F,H),P(N,A,H),m(A,S),m(A,V),D||(k=[Ie(a,"click",n[15]),Ie(u,"click",n[16]),Ie(f,"click",n[17]),Ie(g,"click",n[14])],D=!0)},p(N,H){if(H[0]&2064){T=pt(N[4]);let v;for(v=0;v<T.length;v+=1){const j=pa(N,T,v);w[v]?w[v].p(j,H):(w[v]=_a(j),w[v].c(),w[v].m(e,null))}for(;v<w.length;v+=1)w[v].d(1);w.length=T.length}H[0]&9248&&(x=pt(N[5]),i=Ta(i,H,se,1,N,x,r,s,Du,ga,o,fa)),H[0]&512&&He(V,N[9])},d(N){N&&(_(e),_(t),_(s),_(F),_(A)),Ca(w,N);for(let H=0;H<i.length;H+=1)i[H].d();D=!1,Vn(k)}}}function _a(n){let e,t=(n[35]==""?"":n[35])+"",s,i,r;return{c(){e=E("div"),s=ve(t),i=M(),this.h()},l(o){e=C(o,"DIV",{class:!0,style:!0});var a=W(e);s=ye(a,t),i=L(a),a.forEach(_),this.h()},h(){R(e,"class","circle"),R(e,"style",r=`
              left: calc(38% + ${Math.cos(n[37]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(n[37]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
          `),wn(e,"filled",n[35]!=""),wn(e,"shared",n[11].includes(n[37]))},m(o,a){P(o,e,a),m(e,s),m(e,i)},p(o,a){a[0]&16&&t!==(t=(o[35]==""?"":o[35])+"")&&He(s,t),a[0]&16&&r!==(r=`
              left: calc(38% + ${Math.cos(o[37]/o[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(o[37]/o[4].length*2*Math.PI-Math.PI/2)*100}px);
          `)&&R(e,"style",r),a[0]&16&&wn(e,"filled",o[35]!="")},d(o){o&&_(e)}}}function ga(n,e){let t,s=e[35]+"",i,r,o,a;function l(){return e[25](e[35],e[37])}return{key:n,first:null,c(){t=E("div"),i=ve(s),r=M(),this.h()},l(c){t=C(c,"DIV",{class:!0});var u=W(t);i=ye(u,s),r=L(u),u.forEach(_),this.h()},h(){R(t,"class","key"),wn(t,"disabled",e[10](e[37])),this.first=t},m(c,u){P(c,t,u),m(t,i),m(t,r),o||(a=Ie(t,"click",l),o=!0)},p(c,u){e=c,u[0]&32&&s!==(s=e[35]+"")&&He(i,s),u[0]&1056&&wn(t,"disabled",e[10](e[37]))},d(c){c&&_(t),o=!1,a()}}}function ma(n){let e,t=ya(n[32])+"",s;return{c(){e=E("div"),s=ve(t),this.h()},l(i){e=C(i,"DIV",{class:!0});var r=W(e);s=ye(r,t),r.forEach(_),this.h()},h(){R(e,"class","solution")},m(i,r){P(i,e,r),m(e,s)},p(i,r){r[0]&8&&t!==(t=ya(i[32])+"")&&He(s,t)},d(i){i&&_(e)}}}function uy(n){let e,t,s,i,r,o,a,l="Other Possible Solutions",c,u,h,d,f,p,I,g,b="Share",F,A,S,V,D=pt(n[3]),k=[];for(let T=0;T<D.length;T+=1)k[T]=ma(da(n,D,T));return{c(){e=E("span"),t=ve("Solved in "),s=ve(n[7]),i=M(),r=E("hr"),o=M(),a=E("span"),a.textContent=l,c=M();for(let T=0;T<k.length;T+=1)k[T].c();u=M(),h=E("br"),d=M(),f=E("div"),p=E("div"),I=M(),g=E("button"),g.textContent=b,F=M(),A=E("div"),this.h()},l(T){e=C(T,"SPAN",{class:!0});var w=W(e);t=ye(w,"Solved in "),s=ye(w,n[7]),w.forEach(_),i=L(T),r=C(T,"HR",{}),o=L(T),a=C(T,"SPAN",{class:!0,"data-svelte-h":!0}),Q(a)!=="svelte-zm2m22"&&(a.textContent=l),c=L(T);for(let se=0;se<k.length;se+=1)k[se].l(T);u=L(T),h=C(T,"BR",{}),d=L(T),f=C(T,"DIV",{class:!0});var x=W(f);p=C(x,"DIV",{class:!0}),W(p).forEach(_),I=L(x),g=C(x,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(g)!=="svelte-1urjot1"&&(g.textContent=b),F=L(x),A=C(x,"DIV",{class:!0}),W(A).forEach(_),x.forEach(_),this.h()},h(){R(e,"class","sub-header"),R(a,"class","sub-header"),R(p,"class","spacer"),R(g,"class","share-button"),R(A,"class","spacer"),R(f,"class","flex-container")},m(T,w){P(T,e,w),m(e,t),m(e,s),P(T,i,w),P(T,r,w),P(T,o,w),P(T,a,w),P(T,c,w);for(let x=0;x<k.length;x+=1)k[x]&&k[x].m(T,w);P(T,u,w),P(T,h,w),P(T,d,w),P(T,f,w),m(f,p),m(f,I),m(f,g),m(f,F),m(f,A),S||(V=Ie(g,"click",n[18]),S=!0)},p(T,w){if(w[0]&128&&He(s,T[7]),w[0]&8){D=pt(T[3]);let x;for(x=0;x<D.length;x+=1){const se=da(T,D,x);k[x]?k[x].p(se,w):(k[x]=ma(se),k[x].c(),k[x].m(u.parentNode,u))}for(;x<k.length;x+=1)k[x].d(1);k.length=D.length}},d(T){T&&(_(e),_(i),_(r),_(o),_(a),_(c),_(u),_(h),_(d),_(f)),Ca(k,T),S=!1,V()}}}function hy(n){let e,t=`<span class="styled-header">Congratulations!</span> <br/>
      Share your results with your friends.`;return{c(){e=E("div"),e.innerHTML=t,this.h()},l(s){e=C(s,"DIV",{slot:!0,"data-svelte-h":!0}),Q(e)!=="svelte-wca559"&&(e.innerHTML=t),this.h()},h(){R(e,"slot","header")},m(s,i){P(s,e,i)},p:ge,d(s){s&&_(e)}}}function dy(n){let e,t;return e=new pu({}),{c(){Oe(e.$$.fragment)},l(s){De(e.$$.fragment,s)},m(s,i){Me(e,s,i),t=!0},i(s){t||(pe(e.$$.fragment,s),t=!0)},o(s){_e(e.$$.fragment,s),t=!1},d(s){Le(e,s)}}}function fy(n){let e,t='<span class="styled-header">How To Play</span>';return{c(){e=E("h2"),e.innerHTML=t,this.h()},l(s){e=C(s,"H2",{slot:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1kct8zk"&&(e.innerHTML=t),this.h()},h(){R(e,"slot","header")},m(s,i){P(s,e,i)},p:ge,d(s){s&&_(e)}}}function py(n){let e,t,s,i,r="Resume",o,a,l,c;return{c(){e=E("div"),t=E("div"),s=M(),i=E("button"),i.textContent=r,o=M(),a=E("div"),this.h()},l(u){e=C(u,"DIV",{class:!0});var h=W(e);t=C(h,"DIV",{class:!0}),W(t).forEach(_),s=L(h),i=C(h,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(i)!=="svelte-o41kx2"&&(i.textContent=r),o=L(h),a=C(h,"DIV",{class:!0}),W(a).forEach(_),h.forEach(_),this.h()},h(){R(t,"class","spacer"),R(i,"class","share-button"),R(a,"class","spacer"),R(e,"class","flex-container")},m(u,h){P(u,e,h),m(e,t),m(e,s),m(e,i),m(e,o),m(e,a),l||(c=Ie(i,"click",n[20]),l=!0)},p:ge,d(u){u&&_(e),l=!1,c()}}}function _y(n){let e,t='<span class="styled-header">Paused</span>';return{c(){e=E("h2"),e.innerHTML=t,this.h()},l(s){e=C(s,"H2",{slot:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1ught0z"&&(e.innerHTML=t),this.h()},h(){R(e,"slot","header")},m(s,i){P(s,e,i)},p:ge,d(s){s&&_(e)}}}function gy(n){let e,t,s,i,r="LetterLoop",o,a,l,c,u,h,d,f,p='<i class="fa-regular fa-circle-question"></i> <p class="how-to-play">How to play</p>',I,g,b,F,A,S,V,D,k,T,w,x='<i class="fa-solid fa-pause"></i>',se,N,H,v,j,J,ze,Pe,$,ie,oe,rt,ee;F=new ka({});function le(O){n[24](O)}let ae={};n[7]!==void 0&&(ae.elapsedSeconds=n[7]),D=new iy({props:ae}),n[23](D),ft.push(()=>Gt(D,"elapsedSeconds",le));function _n(O,K){return O[3].length>0?cy:ly}let wt=_n(n),Ee=wt(n);function _u(O){n[26](O)}let Pr={$$slots:{header:[hy],default:[uy]},$$scope:{ctx:n}};n[0]!==void 0&&(Pr.showModal=n[0]),H=new Zn({props:Pr}),ft.push(()=>Gt(H,"showModal",_u));function gu(O){n[27](O)}let Or={$$slots:{header:[fy],default:[dy]},$$scope:{ctx:n}};n[1]!==void 0&&(Or.showModal=n[1]),J=new Zn({props:Or}),ft.push(()=>Gt(J,"showModal",gu));function mu(O){n[28](O)}let Dr={hide_close:!0,$$slots:{header:[_y],default:[py]},$$scope:{ctx:n}};return n[2]!==void 0&&(Dr.showModal=n[2]),$=new Zn({props:Dr}),ft.push(()=>Gt($,"showModal",mu)),{c(){e=E("main"),t=E("div"),s=E("div"),i=E("p"),i.textContent=r,o=M(),a=E("small"),l=ve("(public beta) · Edited by "),c=ve(n[8]),u=M(),h=E("div"),d=M(),f=E("div"),f.innerHTML=p,I=M(),g=E("div"),b=M(),Oe(F.$$.fragment),A=M(),S=E("div"),V=E("div"),Oe(D.$$.fragment),T=M(),w=E("div"),w.innerHTML=x,se=M(),Ee.c(),N=M(),Oe(H.$$.fragment),j=M(),Oe(J.$$.fragment),Pe=M(),Oe($.$$.fragment),this.h()},l(O){e=C(O,"MAIN",{});var K=W(e);t=C(K,"DIV",{class:!0});var Ge=W(t);s=C(Ge,"DIV",{class:!0});var ot=W(s);i=C(ot,"P",{class:!0,"data-svelte-h":!0}),Q(i)!=="svelte-1qmyjs9"&&(i.textContent=r),o=L(ot),a=C(ot,"SMALL",{style:!0});var Et=W(a);l=ye(Et,"(public beta) · Edited by "),c=ye(Et,n[8]),Et.forEach(_),ot.forEach(_),u=L(Ge),h=C(Ge,"DIV",{class:!0}),W(h).forEach(_),d=L(Ge),f=C(Ge,"DIV",{class:!0,"data-svelte-h":!0}),Q(f)!=="svelte-1i75e1h"&&(f.innerHTML=p),Ge.forEach(_),I=L(K),g=C(K,"DIV",{class:!0}),W(g).forEach(_),b=L(K),De(F.$$.fragment,K),A=L(K),S=C(K,"DIV",{class:!0});var at=W(S);V=C(at,"DIV",{class:!0});var Mr=W(V);De(D.$$.fragment,Mr),Mr.forEach(_),T=L(at),w=C(at,"DIV",{"data-svelte-h":!0}),Q(w)!=="svelte-1mqs5ls"&&(w.innerHTML=x),at.forEach(_),se=L(K),Ee.l(K),K.forEach(_),N=L(O),De(H.$$.fragment,O),j=L(O),De(J.$$.fragment,O),Pe=L(O),De($.$$.fragment,O),this.h()},h(){R(i,"class","title"),Tt(a,"color","rgb(46, 46, 46)"),R(s,"class","title-container "),R(h,"class","spacer"),R(f,"class","help-container"),R(t,"class","nav-flex-container"),R(g,"class","divider"),R(V,"class","timer-container"),R(S,"class","flex-container")},m(O,K){P(O,e,K),m(e,t),m(t,s),m(s,i),m(s,o),m(s,a),m(a,l),m(a,c),m(t,u),m(t,h),m(t,d),m(t,f),m(e,I),m(e,g),m(e,b),Me(F,e,null),m(e,A),m(e,S),m(S,V),Me(D,V,null),m(S,T),m(S,w),m(e,se),Ee.m(e,null),P(O,N,K),Me(H,O,K),P(O,j,K),Me(J,O,K),P(O,Pe,K),Me($,O,K),oe=!0,rt||(ee=[Ie(window,"keydown",Ru(n[12])),Ie(f,"click",n[22]),Ie(w,"click",n[19])],rt=!0)},p(O,K){(!oe||K[0]&256)&&He(c,O[8]);const Ge={};!k&&K[0]&128&&(k=!0,Ge.elapsedSeconds=O[7],zt(()=>k=!1)),D.$set(Ge),wt===(wt=_n(O))&&Ee?Ee.p(O,K):(Ee.d(1),Ee=wt(O),Ee&&(Ee.c(),Ee.m(e,null)));const ot={};K[0]&136|K[1]&256&&(ot.$$scope={dirty:K,ctx:O}),!v&&K[0]&1&&(v=!0,ot.showModal=O[0],zt(()=>v=!1)),H.$set(ot);const Et={};K[1]&256&&(Et.$$scope={dirty:K,ctx:O}),!ze&&K[0]&2&&(ze=!0,Et.showModal=O[1],zt(()=>ze=!1)),J.$set(Et);const at={};K[1]&256&&(at.$$scope={dirty:K,ctx:O}),!ie&&K[0]&4&&(ie=!0,at.showModal=O[2],zt(()=>ie=!1)),$.$set(at)},i(O){oe||(pe(F.$$.fragment,O),pe(D.$$.fragment,O),pe(H.$$.fragment,O),pe(J.$$.fragment,O),pe($.$$.fragment,O),oe=!0)},o(O){_e(F.$$.fragment,O),_e(D.$$.fragment,O),_e(H.$$.fragment,O),_e(J.$$.fragment,O),_e($.$$.fragment,O),oe=!1},d(O){O&&(_(e),_(N),_(j),_(Pe)),Le(F),n[23](null),Le(D),Ee.d(),Le(H,O),Le(J,O),Le($,O),rt=!1,Vn(ee)}}}function va(n){return n.split("").sort(()=>Math.random()-.5).join("")}function ya(n){const e=n.substring(0,5),t=n.substring(4,8)+e[0];return`${e} + ${t}`}function my(n,e,t){let s,i,r=!1,o=!1,a=!1,l=[];l=l.map($=>$.toLowerCase());let c,u=Array(8).fill(""),h=[],d,f=0,p=[0,4],I,g=0,b="---";Ia(async()=>{const $=Zv(Cl);fu($,"screen_view",{firebase_screen:"game_board_view",firebase_screen_class:"game_board_controller"});const ie=new Date,oe={year:"numeric",month:"2-digit",day:"2-digit"},rt=ie.toLocaleDateString("en-US",oe).replace(/\//g,"-");try{if(await Np()){const ee=await xm("solutions/"+rt),le=Object.values(ee);t(8,b=le[0]),t(3,l=le[1]),c=l[0],t(5,d=va(c)),I.start()}}catch(ee){console.error("Error fetching data from Firebase:",ee)}});function F($,ie){for(let oe=0;oe<$.length;oe++)if($[oe]==ie&&!s(oe))return oe;return-1}function A($){const ie=$.key.toLowerCase(),oe=F(d,ie);$.keyCode===13?V():$.keyCode===8?T():oe!==-1&&!s(oe)&&S(ie,oe)}function S($,ie){f<u.length&&!s(ie)&&(t(4,u[f]=$,u),f+=1,t(21,h=[...h,ie]))}function V(){const $=u.join(""),ie=u.filter(oe=>oe!=="").length;console.log(u),l.includes($)?(t(0,r=!0),I.stop(),Fm(g)):ie!=8?In.default("You Must fill in every letter",1e3):In.default("Incorrect",1e3)}function D(){t(4,u=Array(8).fill("")),f=0,t(21,h=[])}function k(){t(5,d=va(c)),D()}function T(){f>0&&(t(4,u[f-1]="",u),f-=1,t(21,h=h.slice(0,-1)))}function w(){let $=`I completed the LetterLoop in: 
🔴`+g+"🔴";navigator.clipboard.writeText($).then(()=>{console.log("Text successfully copied to clipboard:",$),In.default("Copied Text!",1e3)}).catch(ie=>{console.error("Error copying text to clipboard:",ie),In.default("Error",1e3)})}function x(){I.stop(),t(2,a=!0)}function se(){I.start(),t(2,a=!1)}const N=()=>t(1,o=!0);function H($){ft[$?"unshift":"push"](()=>{I=$,t(6,I)})}function v($){g=$,t(7,g)}const j=($,ie)=>S($,ie);function J($){r=$,t(0,r)}function ze($){o=$,t(1,o)}function Pe($){a=$,t(2,a)}return n.$$.update=()=>{n.$$.dirty[0]&2097152&&t(10,s=$=>h.includes($))},t(9,i=new Date().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})),[r,o,a,l,u,d,I,g,b,i,s,p,A,S,V,D,k,T,w,x,se,h,N,H,v,j,J,ze,Pe]}class vy extends Vt{constructor(e){super(),Ht(this,e,my,gy,$t,{},null,[-1,-1])}}const yy=""+new URL("../assets/logo.R4y_qj9s.png",import.meta.url).href;function Iy(n){let e,t;return e=new pu({}),{c(){Oe(e.$$.fragment)},l(s){De(e.$$.fragment,s)},m(s,i){Me(e,s,i),t=!0},i(s){t||(pe(e.$$.fragment,s),t=!0)},o(s){_e(e.$$.fragment,s),t=!1},d(s){Le(e,s)}}}function wy(n){let e,t='<span class="styled-header">How To Play</span>';return{c(){e=E("h2"),e.innerHTML=t,this.h()},l(s){e=C(s,"H2",{slot:!0,"data-svelte-h":!0}),Q(e)!=="svelte-r01ry8"&&(e.innerHTML=t),this.h()},h(){R(e,"slot","header")},m(s,i){P(s,e,i)},p:ge,d(s){s&&_(e)}}}function Ey(n){let e,t,s,i,r,o,a="The LetterLoop",l,c,u="Two 5-letter words, two shared letters, one loop",h,d,f,p="Play",I,g,b,F="How to play",A,S,V,D,k,T="For those who love morning games",w,x,se='<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8474194726617008" data-ad-slot="5686489609" data-ad-format="auto" data-full-width-responsive="true"></ins>',N,H,v="*advertisement",j,J,ze,Pe,$,ie;function oe(ee){n[5](ee)}let rt={$$slots:{header:[wy],default:[Iy]},$$scope:{ctx:n}};return n[0]!==void 0&&(rt.showModal=n[0]),J=new Zn({props:rt}),ft.push(()=>Gt(J,"showModal",oe)),{c(){e=E("div"),t=E("div"),s=E("img"),r=M(),o=E("p"),o.textContent=a,l=M(),c=E("p"),c.textContent=u,h=M(),d=E("div"),f=E("button"),f.textContent=p,I=M(),g=E("div"),b=E("button"),b.textContent=F,A=M(),S=E("p"),V=ve(n[1]),D=M(),k=E("i"),k.textContent=T,w=M(),x=E("div"),x.innerHTML=se,N=M(),H=E("i"),H.textContent=v,j=M(),Oe(J.$$.fragment),this.h()},l(ee){e=C(ee,"DIV",{class:!0});var le=W(e);t=C(le,"DIV",{class:!0});var ae=W(t);s=C(ae,"IMG",{class:!0,src:!0,alt:!0}),r=L(ae),o=C(ae,"P",{class:!0,"data-svelte-h":!0}),Q(o)!=="svelte-1k2sjsl"&&(o.textContent=a),l=L(ae),c=C(ae,"P",{class:!0,"data-svelte-h":!0}),Q(c)!=="svelte-j0rk1k"&&(c.textContent=u),h=L(ae),d=C(ae,"DIV",{});var _n=W(d);f=C(_n,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(f)!=="svelte-1h0esab"&&(f.textContent=p),_n.forEach(_),I=L(ae),g=C(ae,"DIV",{});var wt=W(g);b=C(wt,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(b)!=="svelte-lan869"&&(b.textContent=F),wt.forEach(_),A=L(ae),S=C(ae,"P",{class:!0});var Ee=W(S);V=ye(Ee,n[1]),Ee.forEach(_),D=L(ae),k=C(ae,"I",{class:!0,"data-svelte-h":!0}),Q(k)!=="svelte-1ec062z"&&(k.textContent=T),ae.forEach(_),w=L(le),x=C(le,"DIV",{class:!0,"data-svelte-h":!0}),Q(x)!=="svelte-u5tbbf"&&(x.innerHTML=se),N=L(le),H=C(le,"I",{style:!0,"data-svelte-h":!0}),Q(H)!=="svelte-z3pww"&&(H.textContent=v),le.forEach(_),j=L(ee),De(J.$$.fragment,ee),this.h()},h(){R(s,"class","logo svelte-179v2fh"),li(s.src,i=yy)||R(s,"src",i),R(s,"alt","Our Little Loop Logo"),R(o,"class","menu-header svelte-179v2fh"),R(c,"class","menu-sub-header svelte-179v2fh"),R(f,"class","menu-btn svelte-179v2fh"),R(b,"class","menu-btn no-fill svelte-179v2fh"),R(S,"class","menu-date svelte-179v2fh"),R(k,"class","menu-small-text svelte-179v2fh"),R(t,"class","content svelte-179v2fh"),R(x,"class","adparent svelte-179v2fh"),Tt(H,"font-size","12px"),R(e,"class","page svelte-179v2fh")},m(ee,le){P(ee,e,le),m(e,t),m(t,s),m(t,r),m(t,o),m(t,l),m(t,c),m(t,h),m(t,d),m(d,f),m(t,I),m(t,g),m(g,b),m(t,A),m(t,S),m(S,V),m(t,D),m(t,k),m(e,w),m(e,x),m(e,N),m(e,H),P(ee,j,le),Me(J,ee,le),Pe=!0,$||(ie=[Ie(f,"click",n[2]),Ie(b,"click",n[4])],$=!0)},p(ee,[le]){const ae={};le&64&&(ae.$$scope={dirty:le,ctx:ee}),!ze&&le&1&&(ze=!0,ae.showModal=ee[0],zt(()=>ze=!1)),J.$set(ae)},i(ee){Pe||(pe(J.$$.fragment,ee),Pe=!0)},o(ee){_e(J.$$.fragment,ee),Pe=!1},d(ee){ee&&(_(e),_(j)),Le(J,ee),$=!1,Vn(ie)}}}function Cy(n,e,t){let{gameHasStarted:s}=e,i=!1,r=new Date().toLocaleDateString();function o(){t(3,s=!0)}Ia(()=>{(window.adsbygoogle=window.adsbygoogle||[]).push({})});const a=()=>t(0,i=!0);function l(c){i=c,t(0,i)}return n.$$set=c=>{"gameHasStarted"in c&&t(3,s=c.gameHasStarted)},[i,r,o,s,a,l]}class by extends Vt{constructor(e){super(),Ht(this,e,Cy,Ey,$t,{gameHasStarted:3})}}function Ty(n){let e,t,s;function i(o){n[1](o)}let r={};return n[0]!==void 0&&(r.gameHasStarted=n[0]),e=new by({props:r}),ft.push(()=>Gt(e,"gameHasStarted",i)),{c(){Oe(e.$$.fragment)},l(o){De(e.$$.fragment,o)},m(o,a){Me(e,o,a),s=!0},p(o,a){const l={};!t&&a&1&&(t=!0,l.gameHasStarted=o[0],zt(()=>t=!1)),e.$set(l)},i(o){s||(pe(e.$$.fragment,o),s=!0)},o(o){_e(e.$$.fragment,o),s=!1},d(o){Le(e,o)}}}function Sy(n){let e,t;return e=new vy({}),{c(){Oe(e.$$.fragment)},l(s){De(e.$$.fragment,s)},m(s,i){Me(e,s,i),t=!0},p:ge,i(s){t||(pe(e.$$.fragment,s),t=!0)},o(s){_e(e.$$.fragment,s),t=!1},d(s){Le(e,s)}}}function ky(n){let e,t,s,i;const r=[Sy,Ty],o=[];function a(l,c){return l[0]?0:1}return t=a(n),s=o[t]=r[t](n),{c(){e=E("main"),s.c()},l(l){e=C(l,"MAIN",{});var c=W(e);s.l(c),c.forEach(_)},m(l,c){P(l,e,c),o[t].m(e,null),i=!0},p(l,[c]){let u=t;t=a(l),t===u?o[t].p(l,c):(wa(),_e(o[u],1,1,()=>{o[u]=null}),Ea(),s=o[t],s?s.p(l,c):(s=o[t]=r[t](l),s.c()),pe(s,1),s.m(e,null))},i(l){i||(pe(s),i=!0)},o(l){_e(s),i=!1},d(l){l&&_(e),o[t].d()}}}function Ry(n,e,t){let s=!1;function i(r){s=r,t(0,s)}return[s,i]}class Dy extends Vt{constructor(e){super(),Ht(this,e,Ry,ky,$t,{})}}export{Dy as component,Oy as universal};
