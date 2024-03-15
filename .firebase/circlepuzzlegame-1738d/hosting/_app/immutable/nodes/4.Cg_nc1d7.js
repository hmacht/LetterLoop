import{n as ue,j as mu,r as zn,i as gu,z as Hr,s as bt,d as rs,h as vu,A as Vr,c as Br,u as Wr,g as jr,a as qr,B as yu,f as Je,C as _i,o as ba,D as Pt}from"../chunks/scheduler.DnBvKLbz.js";import{z as wu,A as Iu,B as Eu,C as Cu,t as pe,g as _e,S as Tt,i as St,e as w,c as I,a as V,d as _,p as k,b,r as Ta,o as Sa,j as he,s as N,k as de,l as P,q as Xe,f as v,m as Fe,D as zr,v as Se,w as ke,x as Re,E as Ee,F as bu,G as Tu,y as Ae,h as Y,n as Gr,H as Ot,I as Su,J as ku,K as Sn}from"../chunks/index.C7zLSUab.js";import{d as Ru,w as mi,r as Au}from"../chunks/index.BowKdKRL.js";function Nu(n,e,t,s){if(!e)return ue;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return ue;const{delay:r=0,duration:o=300,easing:a=mu,start:l=wu()+r,end:c=l+o,tick:u=ue,css:h}=t(n,{from:e,to:i},s);let d=!0,f=!1,p;function m(){h&&(p=Eu(n,0,1,o,r,a,h)),r||(f=!0)}function E(){h&&Cu(n,p),d=!1}return Iu(T=>{if(!f&&T>=l&&(f=!0),f&&T>=c&&(u(1,0),E()),!d)return!1;if(f){const y=T-l,S=0+1*a(y/o);u(S,1-S)}return!0}),m(),u(0,1),E}function Pu(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,ka(n,i)}}function ka(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function Jt(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ou(n,e){n.d(1),e.delete(n.key)}function Du(n,e){_e(n,1,1,()=>{e.delete(n.key)})}function Mu(n,e){n.f(),Du(n,e)}function Ra(n,e,t,s,i,r,o,a,l,c,u,h){let d=n.length,f=r.length,p=d;const m={};for(;p--;)m[n[p].key]=p;const E=[],T=new Map,y=new Map,S=[];for(p=f;p--;){const j=h(i,r,p),$=t(j);let O=o.get($);O?s&&S.push(()=>O.p(j,e)):(O=c($,j),O.c()),T.set($,E[p]=O),$ in m&&y.set($,Math.abs(p-m[$]))}const x=new Set,D=new Set;function U(j){pe(j,1),j.m(a,u),o.set(j.key,j),u=j.first,f--}for(;d&&f;){const j=E[f-1],$=n[d-1],O=j.key,te=$.key;j===$?(u=j.first,d--,f--):T.has(te)?!o.has(O)||x.has(O)?U(j):D.has(te)?d--:y.get(O)>y.get(te)?(D.add(O),U(j)):(x.add(te),d--):(l($,o),d--)}for(;d--;){const j=n[d];T.has(j.key)||l(j,o)}for(;f;)U(E[f-1]);return zn(S),E}const Lu=!0,qy=Object.freeze(Object.defineProperty({__proto__:null,prerender:Lu},Symbol.toStringTag,{value:"Module"}));function Aa(n){const e=n-1;return e*e*e+1}function xu(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:h=f=>Math.sqrt(f)*120,easing:d=Aa}=s;return{delay:u,duration:gu(h)?h(Math.sqrt(l*l+c*c)):h,easing:d,css:(f,p)=>{const m=p*l,E=p*c,T=f+p*e.width/t.width,y=f+p*e.height/t.height;return`transform: ${r} translate(${m}px, ${E}px) scale(${T}, ${y});`}}}function Kr(n,{delay:e=0,duration:t=400,easing:s=Aa,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o),[h,d]=Hr(i),[f,p]=Hr(r);return{delay:e,duration:t,easing:s,css:(m,E)=>`
			transform: ${c} translate(${(1-m)*h}${d}, ${(1-m)*f}${p});
			opacity: ${l-u*E}`}}function Fu(n){const e=mi([]);function t(r,o="default",a){e.update(l=>[...l,{id:Uu(),type:o,message:r,timeout:a}])}const s=Ru(e,(r,o)=>{if(o(r),r.length>0){const a=setTimeout(()=>{e.update(l=>(l.shift(),l))},r[0].timeout);return()=>{clearTimeout(a)}}}),{subscribe:i}=s;return{subscribe:i,send:t,default:(r,o)=>t(r,"default",o),danger:(r,o)=>t(r,"danger",o),warning:(r,o)=>t(r,"warning",o),info:(r,o)=>t(r,"info",o),success:(r,o)=>t(r,"success",o)}}function Uu(){return"_"+Math.random().toString(36).substr(2,9)}const Tn=Fu();function Yr(n,e,t){const s=n.slice();return s[1]=e[t],s}function Qr(n){let e,t;return{c(){e=w("i"),this.h()},l(s){e=I(s,"I",{class:!0}),V(e).forEach(_),this.h()},h(){k(e,"class",t=Vr(n[1].icon)+" svelte-3xaubh")},m(s,i){b(s,e,i)},p(s,i){i&1&&t!==(t=Vr(s[1].icon)+" svelte-3xaubh")&&k(e,"class",t)},d(s){s&&_(e)}}}function Jr(n,e){let t,s,i=e[1].message+"",r,o,a,l,c,u=ue,h,d=e[1].icon&&Qr(e);return{key:n,first:null,c(){t=w("div"),s=w("div"),r=he(i),o=N(),d&&d.c(),a=N(),this.h()},l(f){t=I(f,"DIV",{class:!0,style:!0});var p=V(t);s=I(p,"DIV",{class:!0});var m=V(s);r=de(m,i),m.forEach(_),o=P(p),d&&d.l(p),a=P(p),p.forEach(_),this.h()},h(){k(s,"class","content svelte-3xaubh"),k(t,"class","toast svelte-3xaubh"),Xe(t,"background","#EBEBEB"),this.first=t},m(f,p){b(f,t,p),v(t,s),v(s,r),v(t,o),d&&d.m(t,null),v(t,a),h=!0},p(f,p){e=f,(!h||p&1)&&i!==(i=e[1].message+"")&&Fe(r,i),e[1].icon?d?d.p(e,p):(d=Qr(e),d.c(),d.m(t,a)):d&&(d.d(1),d=null)},r(){c=t.getBoundingClientRect()},f(){Pu(t),u(),ka(t,c)},a(){u(),u=Nu(t,c,xu,{})},i(f){h||(f&&vu(()=>{h&&(l||(l=zr(t,Kr,{y:30},!0)),l.run(1))}),h=!0)},o(f){f&&(l||(l=zr(t,Kr,{y:30},!1)),l.run(0)),h=!1},d(f){f&&_(t),d&&d.d(),f&&l&&l.end()}}}function $u(n){let e,t=[],s=new Map,i,r=Jt(n[0]);const o=a=>a[1].id;for(let a=0;a<r.length;a+=1){let l=Yr(n,r,a),c=o(l);s.set(c,t[a]=Jr(c,l))}return{c(){e=w("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=I(a,"DIV",{class:!0});var l=V(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(_),this.h()},h(){k(e,"class","notifications svelte-3xaubh")},m(a,l){b(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);i=!0},p(a,[l]){if(l&1){r=Jt(a[0]),Ta();for(let c=0;c<t.length;c+=1)t[c].r();t=Ra(t,l,o,1,a,r,s,e,Mu,Jr,null,Yr);for(let c=0;c<t.length;c+=1)t[c].a();Sa()}},i(a){if(!i){for(let l=0;l<r.length;l+=1)pe(t[l]);i=!0}},o(a){for(let l=0;l<t.length;l+=1)_e(t[l]);i=!1},d(a){a&&_(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function Hu(n,e,t){let s;return rs(n,Tn,i=>t(0,s=i)),[s]}class Na extends Tt{constructor(e){super(),St(this,e,Hu,$u,bt,{})}}const Vu=n=>({}),Xr=n=>({});function Zr(n){let e,t,s;return{c(){e=w("i"),this.h()},l(i){e=I(i,"I",{class:!0}),V(e).forEach(_),this.h()},h(){k(e,"class","fa-solid fa-xmark svelte-kvu5ns")},m(i,r){b(i,e,r),t||(s=Ee(e,"click",n[7]),t=!0)},p:ue,d(i){i&&_(e),t=!1,s()}}}function Bu(n){let e,t,s,i,r,o,a,l,c,u,h,d;s=new Na({});let f=!n[1]&&Zr(n);const p=n[5].header,m=Br(p,n,n[4],Xr),E=n[5].default,T=Br(E,n,n[4],null);return{c(){e=w("dialog"),t=w("div"),Se(s.$$.fragment),i=N(),r=w("div"),o=w("div"),a=N(),f&&f.c(),l=N(),m&&m.c(),c=N(),T&&T.c(),this.h()},l(y){e=I(y,"DIALOG",{class:!0});var S=V(e);t=I(S,"DIV",{class:!0});var x=V(t);ke(s.$$.fragment,x),i=P(x),r=I(x,"DIV",{class:!0});var D=V(r);o=I(D,"DIV",{class:!0}),V(o).forEach(_),a=P(D),f&&f.l(D),D.forEach(_),l=P(x),m&&m.l(x),c=P(x),T&&T.l(x),x.forEach(_),S.forEach(_),this.h()},h(){k(o,"class","spacer svelte-kvu5ns"),k(r,"class","flex-container svelte-kvu5ns"),k(t,"class","svelte-kvu5ns"),k(e,"class","svelte-kvu5ns")},m(y,S){b(y,e,S),v(e,t),Re(s,t,null),v(t,i),v(t,r),v(r,o),v(r,a),f&&f.m(r,null),v(t,l),m&&m.m(t,null),v(t,c),T&&T.m(t,null),n[8](e),u=!0,h||(d=[Ee(t,"click",bu(n[6])),Ee(e,"close",n[9]),Ee(e,"click",Tu(n[10]))],h=!0)},p(y,[S]){y[1]?f&&(f.d(1),f=null):f?f.p(y,S):(f=Zr(y),f.c(),f.m(r,null)),m&&m.p&&(!u||S&16)&&Wr(m,p,y,y[4],u?qr(p,y[4],S,Vu):jr(y[4]),Xr),T&&T.p&&(!u||S&16)&&Wr(T,E,y,y[4],u?qr(E,y[4],S,null):jr(y[4]),null)},i(y){u||(pe(s.$$.fragment,y),pe(m,y),pe(T,y),u=!0)},o(y){_e(s.$$.fragment,y),_e(m,y),_e(T,y),u=!1},d(y){y&&_(e),Ae(s),f&&f.d(),m&&m.d(y),T&&T.d(y),n[8](null),h=!1,zn(d)}}}function Wu(n,e,t){let{$$slots:s={},$$scope:i}=e,{showModal:r}=e,{hide_close:o=!1}=e,{modalType:a}=e,l;function c(p){yu.call(this,n,p)}const u=()=>l.close();function h(p){Je[p?"unshift":"push"](()=>{l=p,t(2,l)})}const d=()=>t(0,r=!1),f=()=>!o&&l.close();return n.$$set=p=>{"showModal"in p&&t(0,r=p.showModal),"hide_close"in p&&t(1,o=p.hide_close),"modalType"in p&&t(3,a=p.modalType),"$$scope"in p&&t(4,i=p.$$scope)},n.$$.update=()=>{n.$$.dirty&5&&l&&(r?l.showModal():l.close()),n.$$.dirty&5&&l&&r===!1&&l.open&&l.close()},[r,o,l,a,i,s,c,u,h,d,f]}class kn extends Tt{constructor(e){super(),St(this,e,Wu,Bu,bt,{showModal:0,hide_close:1,modalType:3})}}var eo={};/**
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
 */const Pa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(n,e){if(!n)throw dn(e)},dn=function(n){return new Error("Firebase Database ("+Pa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Oa=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ju=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Oa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ju(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new qu;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Da=function(n){const e=Oa(n);return $i.encodeByteArray(e,!0)},us=function(n){return Da(n).replace(/\./g,"")},hs=function(n){try{return $i.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zu(n){return Ma(void 0,n)}function Ma(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Gu(t)||(n[t]=Ma(n[t],e[t]));return n}function Gu(n){return n!=="__proto__"}/**
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
 */function Ku(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yu=()=>Ku().__FIREBASE_DEFAULTS__,Qu=()=>{if(typeof process>"u"||typeof eo>"u")return;const n=eo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ju=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hs(n[1]);return e&&JSON.parse(e)},Hi=()=>{try{return Yu()||Qu()||Ju()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},La=n=>{var e,t;return(t=(e=Hi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xu=n=>{const e=La(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},xa=()=>{var n;return(n=Hi())===null||n===void 0?void 0:n.config},Fa=n=>{var e;return(e=Hi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Zu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[us(JSON.stringify(t)),us(JSON.stringify(o)),""].join(".")}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Ua(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $a(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eh(){const n=be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ha(){return Pa.NODE_ADMIN===!0}function Va(){try{return typeof indexedDB=="object"}catch{return!1}}function Ba(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function th(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const nh="FirebaseError";class Ge extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nh,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zt.prototype.create)}}class zt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?sh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ge(i,a,s)}}function sh(n,e){return n.replace(ih,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ih=/\{\$([^}]+)}/g;/**
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
 */function Mn(n){return JSON.parse(n)}function we(n){return JSON.stringify(n)}/**
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
 */const Wa=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Mn(hs(r[0])||""),t=Mn(hs(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},rh=function(n){const e=Wa(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},oh=function(n){const e=Wa(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function at(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function an(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function gi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ds(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Ln(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(to(r)&&to(o)){if(!Ln(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function to(n){return n!==null&&typeof n=="object"}/**
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
 */function fn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class ah{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function lh(n,e){const t=new ch(n,e);return t.subscribe.bind(t)}class ch{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");uh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Xs),i.error===void 0&&(i.error=Xs),i.complete===void 0&&(i.complete=Xs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xs(){}function Bi(n,e){return`${n} failed: ${e} argument `}/**
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
 */const hh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ls=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const dh=1e3,fh=2,ph=4*60*60*1e3,_h=.5;function no(n,e=dh,t=fh){const s=e*Math.pow(t,n),i=Math.round(_h*s*(Math.random()-.5)*2);return Math.min(ph,s+i)}/**
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
 */function xe(n){return n&&n._delegate?n._delegate:n}class We{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class mh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ms;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vh(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gh(n){return n===At?void 0:n}function vh(n){return n.instantiationMode==="EAGER"}/**
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
 */class yh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const wh={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Ih=ee.INFO,Eh={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Ch=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Eh[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xs{constructor(e){this.name=e,this._logLevel=Ih,this._logHandler=Ch,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const bh=(n,e)=>e.some(t=>n instanceof t);let so,io;function Th(){return so||(so=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sh(){return io||(io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ja=new WeakMap,vi=new WeakMap,qa=new WeakMap,Zs=new WeakMap,Wi=new WeakMap;function kh(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(vt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ja.set(t,n)}).catch(()=>{}),Wi.set(e,n),e}function Rh(n){if(vi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});vi.set(n,e)}let yi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ah(n){yi=n(yi)}function Nh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ei(this),e,...t);return qa.set(s,e.sort?e.sort():[e]),vt(s)}:Sh().includes(n)?function(...e){return n.apply(ei(this),e),vt(ja.get(this))}:function(...e){return vt(n.apply(ei(this),e))}}function Ph(n){return typeof n=="function"?Nh(n):(n instanceof IDBTransaction&&Rh(n),bh(n,Th())?new Proxy(n,yi):n)}function vt(n){if(n instanceof IDBRequest)return kh(n);if(Zs.has(n))return Zs.get(n);const e=Ph(n);return e!==n&&(Zs.set(n,e),Wi.set(e,n)),e}const ei=n=>Wi.get(n);function za(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=vt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(vt(o.result),l.oldVersion,l.newVersion,vt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Oh=["get","getKey","getAll","getAllKeys","count"],Dh=["put","add","delete","clear"],ti=new Map;function ro(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ti.get(e))return ti.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Dh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Oh.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return ti.set(e,r),r}Ah(n=>({...n,get:(e,t,s)=>ro(e,t)||n.get(e,t,s),has:(e,t)=>!!ro(e,t)||n.has(e,t)}));/**
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
 */class Mh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Lh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wi="@firebase/app",oo="0.9.27";/**
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
 */const Ut=new xs("@firebase/app"),xh="@firebase/app-compat",Fh="@firebase/analytics-compat",Uh="@firebase/analytics",$h="@firebase/app-check-compat",Hh="@firebase/app-check",Vh="@firebase/auth",Bh="@firebase/auth-compat",Wh="@firebase/database",jh="@firebase/database-compat",qh="@firebase/functions",zh="@firebase/functions-compat",Gh="@firebase/installations",Kh="@firebase/installations-compat",Yh="@firebase/messaging",Qh="@firebase/messaging-compat",Jh="@firebase/performance",Xh="@firebase/performance-compat",Zh="@firebase/remote-config",ed="@firebase/remote-config-compat",td="@firebase/storage",nd="@firebase/storage-compat",sd="@firebase/firestore",id="@firebase/firestore-compat",rd="firebase",od="10.8.0";/**
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
 */const Ii="[DEFAULT]",ad={[wi]:"fire-core",[xh]:"fire-core-compat",[Uh]:"fire-analytics",[Fh]:"fire-analytics-compat",[Hh]:"fire-app-check",[$h]:"fire-app-check-compat",[Vh]:"fire-auth",[Bh]:"fire-auth-compat",[Wh]:"fire-rtdb",[jh]:"fire-rtdb-compat",[qh]:"fire-fn",[zh]:"fire-fn-compat",[Gh]:"fire-iid",[Kh]:"fire-iid-compat",[Yh]:"fire-fcm",[Qh]:"fire-fcm-compat",[Jh]:"fire-perf",[Xh]:"fire-perf-compat",[Zh]:"fire-rc",[ed]:"fire-rc-compat",[td]:"fire-gcs",[nd]:"fire-gcs-compat",[sd]:"fire-fst",[id]:"fire-fst-compat","fire-js":"fire-js",[rd]:"fire-js-all"};/**
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
 */const fs=new Map,Ei=new Map;function ld(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ze(n){const e=n.name;if(Ei.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Ei.set(e,n);for(const t of fs.values())ld(t,n);return!0}function Gt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const cd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yt=new zt("app","Firebase",cd);/**
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
 */class ud{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
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
 */const pn=od;function Ga(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ii,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(t||(t=xa()),!t)throw yt.create("no-options");const r=fs.get(i);if(r){if(Ln(t,r.options)&&Ln(s,r.config))return r;throw yt.create("duplicate-app",{appName:i})}const o=new yh(i);for(const l of Ei.values())o.addComponent(l);const a=new ud(t,s,o);return fs.set(i,a),a}function ji(n=Ii){const e=fs.get(n);if(!e&&n===Ii&&xa())return Ga();if(!e)throw yt.create("no-app",{appName:n});return e}function Ue(n,e,t){var s;let i=(s=ad[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}ze(new We(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const hd="firebase-heartbeat-database",dd=1,xn="firebase-heartbeat-store";let ni=null;function Ka(){return ni||(ni=za(hd,dd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xn)}catch(t){console.warn(t)}}}}).catch(n=>{throw yt.create("idb-open",{originalErrorMessage:n.message})})),ni}async function fd(n){try{const t=(await Ka()).transaction(xn),s=await t.objectStore(xn).get(Ya(n));return await t.done,s}catch(e){if(e instanceof Ge)Ut.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function ao(n,e){try{const s=(await Ka()).transaction(xn,"readwrite");await s.objectStore(xn).put(e,Ya(n)),await s.done}catch(t){if(t instanceof Ge)Ut.warn(t.message);else{const s=yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(s.message)}}}function Ya(n){return`${n.name}!${n.options.appId}`}/**
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
 */const pd=1024,_d=30*24*60*60*1e3;class md{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vd(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=_d}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lo(),{heartbeatsToSend:s,unsentEntries:i}=gd(this._heartbeatsCache.heartbeats),r=us(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function lo(){return new Date().toISOString().substring(0,10)}function gd(n,e=pd){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),co(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),co(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class vd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Va()?Ba().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ao(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ao(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function co(n){return us(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function yd(n){ze(new We("platform-logger",e=>new Mh(e),"PRIVATE")),ze(new We("heartbeat",e=>new md(e),"PRIVATE")),Ue(wi,oo,n),Ue(wi,oo,"esm2017"),Ue("fire-js","")}yd("");var wd="firebase",Id="10.8.0";/**
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
 */Ue(wd,Id,"app");function qi(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Qa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ed=Qa,Ja=new zt("auth","Firebase",Qa());/**
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
 */const ps=new xs("@firebase/auth");function Cd(n,...e){ps.logLevel<=ee.WARN&&ps.warn(`Auth (${pn}): ${n}`,...e)}function os(n,...e){ps.logLevel<=ee.ERROR&&ps.error(`Auth (${pn}): ${n}`,...e)}/**
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
 */function st(n,...e){throw zi(n,...e)}function je(n,...e){return zi(n,...e)}function bd(n,e,t){const s=Object.assign(Object.assign({},Ed()),{[e]:t});return new zt("auth","Firebase",s).create(e,{appName:n.name})}function zi(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ja.create(n,...e)}function B(n,e,...t){if(!n)throw zi(e,...t)}function Ze(n){const e="INTERNAL ASSERTION FAILED: "+n;throw os(e),new Error(e)}function it(n,e){n||Ze(e)}/**
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
 */function Ci(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Td(){return uo()==="http:"||uo()==="https:"}function uo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Sd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Td()||Ua()||"connection"in navigator)?navigator.onLine:!0}function kd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Gn{constructor(e,t){this.shortDelay=e,this.longDelay=t,it(t>e,"Short delay should be less than long delay!"),this.isMobile=Vi()||$a()}get(){return Sd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gi(n,e){it(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Xa{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ad=new Gn(3e4,6e4);function Fs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function _n(n,e,t,s,i={}){return Za(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=fn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Xa.fetch()(tl(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Za(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Rd),e);try{const i=new Nd(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ns(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ns(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ns(n,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bd(n,u,c);st(n,u)}}catch(i){if(i instanceof Ge)throw i;st(n,"network-request-failed",{message:String(i)})}}async function el(n,e,t,s,i={}){const r=await _n(n,e,t,s,i);return"mfaPendingCredential"in r&&st(n,"multi-factor-auth-required",{_serverResponse:r}),r}function tl(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Gi(n.config,i):`${n.config.apiScheme}://${i}`}class Nd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(je(this.auth,"network-request-failed")),Ad.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ns(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=je(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function Pd(n,e){return _n(n,"POST","/v1/accounts:delete",e)}async function Od(n,e){return _n(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Rn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dd(n,e=!1){const t=xe(n),s=await t.getIdToken(e),i=Ki(s);B(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Rn(si(i.auth_time)),issuedAtTime:Rn(si(i.iat)),expirationTime:Rn(si(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function si(n){return Number(n)*1e3}function Ki(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return os("JWT malformed, contained fewer than 3 sections"),null;try{const i=hs(t);return i?JSON.parse(i):(os("Failed to decode base64 JWT payload"),null)}catch(i){return os("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Md(n){const e=Ki(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ge&&Ld(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ld({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class xd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rn(this.lastLoginAt),this.creationTime=Rn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _s(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Fn(n,Od(t,{idToken:s}));B(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?$d(r.providerUserInfo):[],a=Ud(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nl(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Fd(n){const e=xe(n);await _s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ud(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function $d(n){return n.map(e=>{var{providerId:t}=e,s=qi(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Hd(n,e){const t=await Za(n,{},async()=>{const s=fn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=tl(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xa.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vd(n,e){return _n(n,"POST","/v2/accounts:revokeToken",Fs(n,e))}/**
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
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Md(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Hd(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Un;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
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
 */function ft(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dd(this,e)}reload(){return Fd(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await _s(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fn(this,Pd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,l,c,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=t.createdAt)!==null&&c!==void 0?c:void 0,y=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:x,isAnonymous:D,providerData:U,stsTokenManager:j}=t;B(S&&j,e,"internal-error");const $=Un.fromJSON(this.name,j);B(typeof S=="string",e,"internal-error"),ft(h,e.name),ft(d,e.name),B(typeof x=="boolean",e,"internal-error"),B(typeof D=="boolean",e,"internal-error"),ft(f,e.name),ft(p,e.name),ft(m,e.name),ft(E,e.name),ft(T,e.name),ft(y,e.name);const O=new xt({uid:S,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:D,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:$,createdAt:T,lastLoginAt:y});return U&&Array.isArray(U)&&(O.providerData=U.map(te=>Object.assign({},te))),E&&(O._redirectEventId=E),O}static async _fromIdTokenResponse(e,t,s=!1){const i=new Un;i.updateFromServerResponse(t);const r=new xt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await _s(r),r}}/**
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
 */const ho=new Map;function et(n){it(n instanceof Function,"Expected a class definition");let e=ho.get(n);return e?(it(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ho.set(n,e),e)}/**
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
 */class sl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sl.type="NONE";const fo=sl;/**
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
 */function as(n,e,t){return`firebase:${n}:${e}:${t}`}class en{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=as(this.userKey,i.apiKey,r),this.fullPersistenceKey=as("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new en(et(fo),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||et(fo);const o=as(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=xt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new en(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new en(r,e,s))}}/**
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
 */function po(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ol(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(il(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ll(e))return"Blackberry";if(cl(e))return"Webos";if(Yi(e))return"Safari";if((e.includes("chrome/")||rl(e))&&!e.includes("edge/"))return"Chrome";if(al(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function il(n=be()){return/firefox\//i.test(n)}function Yi(n=be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rl(n=be()){return/crios\//i.test(n)}function ol(n=be()){return/iemobile/i.test(n)}function al(n=be()){return/android/i.test(n)}function ll(n=be()){return/blackberry/i.test(n)}function cl(n=be()){return/webos/i.test(n)}function Us(n=be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Bd(n=be()){var e;return Us(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wd(){return eh()&&document.documentMode===10}function ul(n=be()){return Us(n)||al(n)||cl(n)||ll(n)||/windows phone/i.test(n)||ol(n)}function jd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hl(n,e=[]){let t;switch(n){case"Browser":t=po(be());break;case"Worker":t=`${po(be())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${pn}/${s}`}/**
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
 */class qd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function zd(n,e={}){return _n(n,"GET","/v2/passwordPolicy",Fs(n,e))}/**
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
 */const Gd=6;class Kd{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Gd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Yd{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _o(this),this.idTokenSubscription=new _o(this),this.beforeStateQueue=new qd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ja,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=et(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _s(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?xe(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zd(this),t=new Kd(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Vd(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&et(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Cd(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $s(n){return xe(n)}class _o{constructor(e){this.auth=e,this.observer=null,this.addObserver=lh(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qd(n){Qi=n}function Jd(n){return Qi.loadJS(n)}function Xd(){return Qi.gapiScript}function Zd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ef(n,e){const t=Gt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Ln(r,e??{}))return i;st(i,"already-initialized")}return t.initialize({options:e})}function tf(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function nf(n,e,t){const s=$s(n);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=dl(e),{host:o,port:a}=sf(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||rf()}function dl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function sf(n){const e=dl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:mo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:mo(o)}}}function mo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function rf(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class fl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,t){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}/**
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
 */async function tn(n,e){return el(n,"POST","/v1/accounts:signInWithIdp",Fs(n,e))}/**
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
 */const of="http://localhost";class $t extends fl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):st("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=qi(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new $t(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return tn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,tn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tn(e,t)}buildRequest(){const e={requestUri:of,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fn(t)}return e}}/**
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
 */class pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kn extends pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pt extends Kn{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
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
 */class _t extends Kn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return _t.credential(t,s)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
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
 */class mt extends Kn{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com";mt.PROVIDER_ID="github.com";/**
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
 */class gt extends Kn{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return gt.credential(t,s)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
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
 */async function af(n,e){return el(n,"POST","/v1/accounts:signUp",Fs(n,e))}/**
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
 */class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await xt._fromIdTokenResponse(e,s,i),o=go(s);return new It({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=go(s);return new It({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function go(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function lf(n){var e;const t=$s(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new It({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await af(t,{returnSecureToken:!0}),i=await It._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class ms extends Ge{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ms.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new ms(e,t,s,i)}}function _l(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ms._fromErrorAndOperation(n,r,e,s):r})}async function cf(n,e,t=!1){const s=await Fn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return It._forOperation(n,"link",s)}/**
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
 */async function uf(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await Fn(n,_l(s,i,e,n),t);B(r.idToken,s,"internal-error");const o=Ki(r.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(n.uid===a,s,"user-mismatch"),It._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&st(s,"user-mismatch"),r}}/**
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
 */async function hf(n,e,t=!1){const s="signIn",i=await _l(n,s,e),r=await It._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function df(n,e,t,s){return xe(n).onIdTokenChanged(e,t,s)}function ff(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}const gs="__sak";/**
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
 */class ml{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gs,"1"),this.storage.removeItem(gs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pf(){const n=be();return Yi(n)||Us(n)}const _f=1e3,mf=10;class gl extends ml{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pf()&&jd(),this.fallbackToPolling=ul(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Wd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mf):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},_f)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gl.type="LOCAL";const gf=gl;/**
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
 */class vl extends ml{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vl.type="SESSION";const yl=vl;/**
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
 */function vf(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Hs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Hs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await vf(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hs.receivers=[];/**
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
 */function Ji(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class yf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ji("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qe(){return window}function wf(n){qe().location.href=n}/**
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
 */function wl(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function If(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ef(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cf(){return wl()?self:null}/**
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
 */const Il="firebaseLocalStorageDb",bf=1,vs="firebaseLocalStorage",El="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vs(n,e){return n.transaction([vs],e?"readwrite":"readonly").objectStore(vs)}function Tf(){const n=indexedDB.deleteDatabase(Il);return new Yn(n).toPromise()}function bi(){const n=indexedDB.open(Il,bf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(vs,{keyPath:El})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(vs)?e(s):(s.close(),await Tf(),e(await bi()))})})}async function vo(n,e,t){const s=Vs(n,!0).put({[El]:e,value:t});return new Yn(s).toPromise()}async function Sf(n,e){const t=Vs(n,!1).get(e),s=await new Yn(t).toPromise();return s===void 0?null:s.value}function yo(n,e){const t=Vs(n,!0).delete(e);return new Yn(t).toPromise()}const kf=800,Rf=3;class Cl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Rf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hs._getInstance(Cf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await If(),!this.activeServiceWorker)return;this.sender=new yf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ef()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bi();return await vo(e,gs,"1"),await yo(e,gs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>vo(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Sf(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>yo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Vs(i,!1).getAll();return new Yn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cl.type="LOCAL";const Af=Cl;new Gn(3e4,6e4);/**
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
 */function Nf(n,e){return e?et(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Xi extends fl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pf(n){return hf(n.auth,new Xi(n),n.bypassAuthState)}function Of(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),uf(t,new Xi(n),n.bypassAuthState)}async function Df(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),cf(t,new Xi(n),n.bypassAuthState)}/**
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
 */class bl{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pf;case"linkViaPopup":case"linkViaRedirect":return Df;case"reauthViaPopup":case"reauthViaRedirect":return Of;default:st(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mf=new Gn(2e3,1e4);class Xt extends bl{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=Ji();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mf.get())};e()}}Xt.currentPopupAction=null;/**
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
 */const Lf="pendingRedirect",ls=new Map;class xf extends bl{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ls.get(this.auth._key());if(!e){try{const s=await Ff(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ls.set(this.auth._key(),e)}return this.bypassAuthState||ls.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ff(n,e){const t=Hf(e),s=$f(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Uf(n,e){ls.set(n._key(),e)}function $f(n){return et(n._redirectPersistence)}function Hf(n){return as(Lf,n.config.apiKey,n.name)}async function Vf(n,e,t=!1){const s=$s(n),i=Nf(s,e),o=await new xf(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Bf=10*60*1e3;class Wf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Tl(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(je(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bf&&this.cachedEventUids.clear(),this.cachedEventUids.has(wo(e))}saveEventToCache(e){this.cachedEventUids.add(wo(e)),this.lastProcessedEventTime=Date.now()}}function wo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Tl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tl(n);default:return!1}}/**
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
 */async function qf(n,e={}){return _n(n,"GET","/v1/projects",e)}/**
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
 */const zf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gf=/^https?/;async function Kf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qf(n);for(const t of e)try{if(Yf(t))return}catch{}st(n,"unauthorized-domain")}function Yf(n){const e=Ci(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Gf.test(t))return!1;if(zf.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Qf=new Gn(3e4,6e4);function Io(){const n=qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jf(n){return new Promise((e,t)=>{var s,i,r;function o(){Io(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Io(),t(je(n,"network-request-failed"))},timeout:Qf.get()})}if(!((i=(s=qe().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=qe().gapi)===null||r===void 0)&&r.load)o();else{const a=Zd("iframefcb");return qe()[a]=()=>{gapi.load?o():t(je(n,"network-request-failed"))},Jd(`${Xd()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw cs=null,e})}let cs=null;function Xf(n){return cs=cs||Jf(n),cs}/**
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
 */const Zf=new Gn(5e3,15e3),ep="__/auth/iframe",tp="emulator/auth/iframe",np={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ip(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gi(e,tp):`https://${n.config.authDomain}/${ep}`,s={apiKey:e.apiKey,appName:n.name,v:pn},i=sp.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${fn(s).slice(1)}`}async function rp(n){const e=await Xf(n),t=qe().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:ip(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:np,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=je(n,"network-request-failed"),a=qe().setTimeout(()=>{r(o)},Zf.get());function l(){qe().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const op={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ap=500,lp=600,cp="_blank",up="http://localhost";class Eo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hp(n,e,t,s=ap,i=lp){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},op),{width:s.toString(),height:i.toString(),top:r,left:o}),c=be().toLowerCase();t&&(a=rl(c)?cp:t),il(c)&&(e=e||up,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Bd(c)&&a!=="_self")return dp(e||"",a),new Eo(null);const h=window.open(e||"",a,u);B(h,n,"popup-blocked");try{h.focus()}catch{}return new Eo(h)}function dp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const fp="__/auth/handler",pp="emulator/auth/handler",_p=encodeURIComponent("fac");async function Co(n,e,t,s,i,r){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:pn,eventId:i};if(e instanceof pl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",gi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Kn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${_p}=${encodeURIComponent(l)}`:"";return`${mp(n)}?${fn(a).slice(1)}${c}`}function mp({config:n}){return n.emulator?Gi(n,pp):`https://${n.authDomain}/${fp}`}/**
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
 */const ii="webStorageSupport";class gp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yl,this._completeRedirectFn=Vf,this._overrideRedirectResult=Uf}async _openPopup(e,t,s,i){var r;it((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Co(e,t,s,Ci(),i);return hp(e,o,Ji())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Co(e,t,s,Ci(),i);return wf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(it(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await rp(e),s=new Wf(e);return t.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ii,{type:ii},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ii];o!==void 0&&t(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ul()||Yi()||Us()}}const vp=gp;var bo="@firebase/auth",To="1.6.0";/**
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
 */class yp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ip(n){ze(new We("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hl(n)},c=new Yd(s,i,r,l);return tf(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ze(new We("auth-internal",e=>{const t=$s(e.getProvider("auth").getImmediate());return(s=>new yp(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(bo,To,wp(n)),Ue(bo,To,"esm2017")}/**
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
 */const Ep=5*60,Cp=Fa("authIdTokenMaxAge")||Ep;let So=null;const bp=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Cp)return;const i=t==null?void 0:t.token;So!==i&&(So=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tp(n=ji()){const e=Gt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ef(n,{popupRedirectResolver:vp,persistence:[Af,gf,yl]}),s=Fa("authTokenSyncURL");if(s){const r=bp(s);ff(t,r,()=>r(t.currentUser)),df(t,o=>r(o))}const i=La("auth");return i&&nf(t,`http://${i}`),t}function Sp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Qd({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=je("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Sp().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ip("Browser");const kp={apiKey:"AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",authDomain:"circlepuzzlegame-1738d.firebaseapp.com",projectId:"circlepuzzlegame-1738d",storageBucket:"circlepuzzlegame-1738d.appspot.com",messagingSenderId:"62490740969",appId:"1:62490740969:web:719c6ea78f8148089f4878",measurementId:"G-EEEKPPSEN9"},Sl=Ga(kp),Rp=Tp(Sl);async function Ap(){return new Promise((n,e)=>{lf(Rp).then(()=>{n(!0)}).catch(t=>{t.code;var s=t.message;console.error("Failed to sign in anonymously:",s),n(!1)})})}var ko={};const Ro="@firebase/database",Ao="1.0.3";/**
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
 */let kl="";function Np(n){kl=n}/**
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
 */class Pp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Mn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Op{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return at(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Rl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Pp(e)}}catch{}return new Op},Dt=Rl("localStorage"),Ti=Rl("sessionStorage");/**
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
 */const nn=new xs("@firebase/database"),Dp=function(){let n=1;return function(){return n++}}(),Al=function(n){const e=hh(n),t=new ah;t.update(e);const s=t.digest();return $i.encodeByteArray(s)},Qn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Qn.apply(null,s):typeof s=="object"?e+=we(s):e+=s,e+=" "}return e};let Ft=null,No=!0;const Mp=function(n,e){C(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(nn.logLevel=ee.VERBOSE,Ft=nn.log.bind(nn),e&&Ti.set("logging_enabled",!0)):typeof n=="function"?Ft=n:(Ft=null,Ti.remove("logging_enabled"))},Ce=function(...n){if(No===!0&&(No=!1,Ft===null&&Ti.get("logging_enabled")===!0&&Mp(!0)),Ft){const e=Qn.apply(null,n);Ft(e)}},Jn=function(n){return function(...e){Ce(n,...e)}},Si=function(...n){const e="FIREBASE INTERNAL ERROR: "+Qn(...n);nn.error(e)},rt=function(...n){const e=`FIREBASE FATAL ERROR: ${Qn(...n)}`;throw nn.error(e),new Error(e)},Oe=function(...n){const e="FIREBASE WARNING: "+Qn(...n);nn.warn(e)},Lp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},xp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ln="[MIN_NAME]",Ht="[MAX_NAME]",mn=function(n,e){if(n===e)return 0;if(n===ln||e===Ht)return-1;if(e===ln||n===Ht)return 1;{const t=Po(n),s=Po(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Fp=function(n,e){return n===e?0:n<e?-1:1},In=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+we(e))},Zi=function(n){if(typeof n!="object"||n===null)return we(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=we(e[s]),t+=":",t+=Zi(n[e[s]]);return t+="}",t},Pl=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Me(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ol=function(n){C(!Nl(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Up=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$p=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Vp=new RegExp("^-?(0*)\\d{1,10}$"),Bp=-2147483648,Wp=2147483647,Po=function(n){if(Vp.test(n)){const e=Number(n);if(e>=Bp&&e<=Wp)return e}return null},gn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Oe("Exception was thrown by user callback.",t),e},Math.floor(0))}},jp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},An=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class qp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class zp{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class sn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sn.OWNER="owner";/**
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
 */const er="5",Dl="v",Ml="s",Ll="r",xl="f",Fl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ul="ls",$l="p",ki="ac",Hl="websocket",Vl="long_polling";/**
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
 */class Bl{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Dt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Dt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Gp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Wl(n,e,t){C(typeof e=="string","typeof type must == string"),C(typeof t=="object","typeof params must == object");let s;if(e===Hl)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Vl)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gp(n)&&(t.ns=n.namespace);const i=[];return Me(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Kp{constructor(){this.counters_={}}incrementCounter(e,t=1){at(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return zu(this.counters_)}}/**
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
 */const ri={},oi={};function tr(n){const e=n.toString();return ri[e]||(ri[e]=new Kp),ri[e]}function Yp(n,e){const t=n.toString();return oi[t]||(oi[t]=e()),oi[t]}/**
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
 */class Qp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&gn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Oo="start",Jp="close",Xp="pLPCommand",Zp="pRTLPCB",jl="id",ql="pw",zl="ser",e_="cb",t_="seg",n_="ts",s_="d",i_="dframe",Gl=1870,Kl=30,r_=Gl-Kl,o_=25e3,a_=3e4;class Zt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Jn(e),this.stats_=tr(t),this.urlFn=l=>(this.appCheckToken&&(l[ki]=this.appCheckToken),Wl(t,Vl,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Qp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(a_)),xp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nr((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Oo)this.id=a,this.password=l;else if(o===Jp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Oo]="t",s[zl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[e_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Dl]=er,this.transportSessionId&&(s[Ml]=this.transportSessionId),this.lastSessionId&&(s[Ul]=this.lastSessionId),this.applicationId&&(s[$l]=this.applicationId),this.appCheckToken&&(s[ki]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fl.test(location.hostname)&&(s[Ll]=xl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zt.forceAllow_=!0}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){return Zt.forceAllow_?!0:!Zt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Up()&&!$p()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=we(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Da(t),i=Pl(s,r_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[i_]="t",s[jl]=e,s[ql]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=we(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class nr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Dp(),window[Xp+this.uniqueCallbackIdentifier]=e,window[Zp+this.uniqueCallbackIdentifier]=t,this.myIFrame=nr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ce("frame writing exception"),a.stack&&Ce(a.stack),Ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jl]=this.myID,e[ql]=this.myPW,e[zl]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kl+s.length<=Gl;){const o=this.pendingSegs.shift();s=s+"&"+t_+i+"="+o.seg+"&"+n_+i+"="+o.ts+"&"+s_+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(o_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const l_=16384,c_=45e3;let ys=null;typeof MozWebSocket<"u"?ys=MozWebSocket:typeof WebSocket<"u"&&(ys=WebSocket);class $e{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Jn(this.connId),this.stats_=tr(t),this.connURL=$e.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Dl]=er,typeof location<"u"&&location.hostname&&Fl.test(location.hostname)&&(o[Ll]=xl),t&&(o[Ml]=t),s&&(o[Ul]=s),i&&(o[ki]=i),r&&(o[$l]=r),Wl(e,Hl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Dt.set("previous_websocket_failure",!0);try{let s;Ha(),this.mySock=new ys(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ys!==null&&!$e.forceDisallow_}static previouslyFailed(){return Dt.isInMemoryStorage||Dt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Dt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Mn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=we(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Pl(t,l_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(c_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2;$e.healthyTimeout=3e4;/**
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
 */class $n{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zt,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=$e&&$e.isAvailable();let s=t&&!$e.previouslyFailed();if(e.webSocketOnly&&(t||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$e];else{const i=this.transports_=[];for(const r of $n.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);$n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$n.globalTransportInitialized_=!1;/**
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
 */const u_=6e4,h_=5e3,d_=10*1024,f_=100*1024,ai="t",Do="d",p_="s",Mo="r",__="e",Lo="o",xo="a",Fo="n",Uo="p",m_="h";class g_{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Jn("c:"+this.id+":"),this.transportManager_=new $n(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=An(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>f_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>d_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ai in e){const t=e[ai];t===xo?this.upgradeIfSecondaryHealthy_():t===Mo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Lo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=In("t",e),s=In("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=In("t",e),s=In("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=In(ai,e);if(Do in e){const s=e[Do];if(t===m_){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Fo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===p_?this.onConnectionShutdown_(s):t===Mo?this.onReset_(s):t===__?Si("Server Error: "+s):t===Lo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Si("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),er!==s&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),An(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(u_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):An(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(h_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Dt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Yl{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Ql{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ws extends Ql{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ws}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $o=32,Ho=768;class se{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function X(){return new se("")}function z(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Et(n){return n.pieces_.length-n.pieceNum_}function re(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new se(n.pieces_,e)}function Jl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function v_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Xl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Zl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new se(e,0)}function me(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new se(t,0)}function K(n){return n.pieceNum_>=n.pieces_.length}function Ne(n,e){const t=z(n),s=z(e);if(t===null)return e;if(t===s)return Ne(re(n),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function sr(n,e){if(Et(n)!==Et(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function He(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Et(n)>Et(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class y_{constructor(e,t){this.errorPrefix_=t,this.parts_=Xl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ls(this.parts_[s]);ec(this)}}function w_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ls(e),ec(n)}function I_(n){const e=n.parts_.pop();n.byteLength_-=Ls(e),n.parts_.length>0&&(n.byteLength_-=1)}function ec(n){if(n.byteLength_>Ho)throw new Error(n.errorPrefix_+"has a key path longer than "+Ho+" bytes ("+n.byteLength_+").");if(n.parts_.length>$o)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$o+") or object contains a cycle "+Nt(n))}function Nt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ir extends Ql{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ir}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const En=1e3,E_=60*5*1e3,Vo=30*1e3,C_=1.3,b_=3e4,T_="server_kill",Bo=3;class nt extends Yl{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=nt.nextPersistentConnectionId_++,this.log_=Jn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=En,this.maxReconnectDelay_=E_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ha())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ir.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ws.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(we(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Ms,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;nt.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&at(e,"w")){const s=an(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||oh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=rh(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Si("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>b_&&(this.reconnectDelay_=En),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*C_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new g_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Oe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(T_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Oe(h),l())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gi(this.interruptReasons_)&&(this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Zi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Ce("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bo&&(this.reconnectDelay_=Vo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ce("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+kl.replace(/\./g,"-")]=1,Vi()?e["framework.cordova"]=1:$a()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ws.getInstance().currentlyOnline();return gi(this.interruptReasons_)&&e}}nt.nextPersistentConnectionId_=0;nt.nextConnectionId_=0;/**
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
 */class G{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new G(e,t)}}/**
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
 */class Bs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new G(ln,e),i=new G(ln,t);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
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
 */let ss;class tc extends Bs{static get __EMPTY_NODE(){return ss}static set __EMPTY_NODE(e){ss=e}compare(e,t){return mn(e.name,t.name)}isDefinedOn(e){throw dn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return G.MIN}maxPost(){return new G(Ht,ss)}makePost(e,t){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,ss)}toString(){return".key"}}const rn=new tc;/**
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
 */class is{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ye{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ye.RED,this.left=i??Pe.EMPTY_NODE,this.right=r??Pe.EMPTY_NODE}copy(e,t,s,i,r){return new ye(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ye.RED=!0;ye.BLACK=!1;class S_{copy(e,t,s,i,r){return this}insert(e,t,s){return new ye(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pe{constructor(e,t=Pe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Pe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ye.BLACK,null,null))}remove(e){return new Pe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ye.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new is(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new is(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new is(this.root_,null,this.comparator_,!0,e)}}Pe.EMPTY_NODE=new S_;/**
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
 */function k_(n,e){return mn(n.name,e.name)}function rr(n,e){return mn(n,e)}/**
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
 */let Ri;function R_(n){Ri=n}const nc=function(n){return typeof n=="number"?"number:"+Ol(n):"string:"+n},sc=function(n){if(n.isLeafNode()){const e=n.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&at(e,".sv"),"Priority must be a string or number.")}else C(n===Ri||n.isEmpty(),"priority of unexpected type.");C(n===Ri||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Wo;class ve{constructor(e,t=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sc(this.priorityNode_)}static set __childrenNodeConstructor(e){Wo=e}static get __childrenNodeConstructor(){return Wo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:z(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=z(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||Et(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ol(this.value_):e+=this.value_,this.lazyHash_=Al(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(t),r=ve.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+t),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ic,rc;function A_(n){ic=n}function N_(n){rc=n}class P_ extends Bs{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?mn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Ht,new ve("[PRIORITY-POST]",rc))}makePost(e,t){const s=ic(e);return new G(t,new ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new P_;/**
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
 */const O_=Math.log(2);class D_{constructor(e){const t=r=>parseInt(Math.log(r)/O_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Is=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new ye(d,h.node,ye.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),m=i(f+1,c);return h=n[f],d=t?t(h):h,new ye(d,h.node,ye.BLACK,p,m)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,m){const E=h-p,T=h;h-=p;const y=i(E+1,T),S=n[E],x=t?t(S):S;f(new ye(x,S.node,m,null,y))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),E=Math.pow(2,l.count-(p+1));m?d(E,ye.BLACK):(d(E,ye.BLACK),d(E,ye.RED))}return u},o=new D_(n.length),a=r(o);return new Pe(s||e,a)};/**
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
 */let li;const Qt={};class tt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return C(Qt&&fe,"ChildrenNode.ts has not been loaded"),li=li||new tt({".priority":Qt},{".priority":fe}),li}get(e){const t=an(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Pe?t:null}hasIndex(e){return at(this.indexSet_,e.toString())}addIndex(e,t){C(e!==rn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Is(s,e.getCompare()):a=Qt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new tt(u,c)}addToIndexes(e,t){const s=ds(this.indexes_,(i,r)=>{const o=an(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===Qt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Is(a,o.getCompare())}else return Qt;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new tt(s,this.indexSet_)}removeFromIndexes(e,t){const s=ds(this.indexes_,i=>{if(i===Qt)return i;{const r=t.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new tt(s,this.indexSet_)}}/**
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
 */let Cn;class F{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&sc(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Cn||(Cn=new F(new Pe(rr),null,tt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Cn}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Cn:t}}getChild(e){const t=z(e);return t===null?this:this.getImmediateChild(t).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(C(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new G(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Cn:this.priorityNode_;return new F(i,o,r)}}updateChild(e,t){const s=z(e);if(s===null)return t;{C(z(e)!==".priority"||Et(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,a)=>{t[o]=a.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nc(this.getPriority().val())+":"),this.forEachChild(fe,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Al(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new G(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new G(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xn?-1:0}withIndex(e){if(e===rn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===rn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(fe),i=t.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class M_ extends F{constructor(){super(new Pe(rr),F.EMPTY_NODE,tt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Xn=new M_;Object.defineProperties(G,{MIN:{value:new G(ln,F.EMPTY_NODE)},MAX:{value:new G(Ht,Xn)}});tc.__EMPTY_NODE=F.EMPTY_NODE;ve.__childrenNodeConstructor=F;R_(Xn);N_(Xn);/**
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
 */const L_=!0;function Ie(n,e=null){if(n===null)return F.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ve(t,Ie(e))}if(!(n instanceof Array)&&L_){const t=[];let s=!1;if(Me(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ie(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new G(o,l)))}}),t.length===0)return F.EMPTY_NODE;const r=Is(t,k_,o=>o.name,rr);if(s){const o=Is(t,fe.getCompare());return new F(r,Ie(e),new tt({".priority":o},{".priority":fe}))}else return new F(r,Ie(e),tt.Default)}else{let t=F.EMPTY_NODE;return Me(n,(s,i)=>{if(at(n,s)&&s.substring(0,1)!=="."){const r=Ie(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Ie(e))}}A_(Ie);/**
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
 */class x_ extends Bs{constructor(e){super(),this.indexPath_=e,C(!K(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?mn(e.name,t.name):r}makePost(e,t){const s=Ie(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(t,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Xn);return new G(Ht,e)}toString(){return Xl(this.indexPath_,0).join("/")}}/**
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
 */class F_ extends Bs{compare(e,t){const s=e.node.compareTo(t.node);return s===0?mn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,t){const s=Ie(e);return new G(t,s)}toString(){return".value"}}const U_=new F_;/**
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
 */function oc(n){return{type:"value",snapshotNode:n}}function cn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Hn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Vn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function $_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class or{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Hn(t,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(cn(t,s)):o.trackChildChange(Vn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{t.hasChild(i)||s.trackChildChange(Hn(i,r))}),t.isLeafNode()||t.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Vn(i,r,o))}else s.trackChildChange(cn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Bn{constructor(e){this.indexedFilter_=new or(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bn.getStartPost_(e),this.endPost_=Bn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new G(t,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=F.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return t.forEachChild(fe,(o,a)=>{r.matches(new G(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class H_{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Bn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new G(t,s))||(s=F.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new G(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Vn(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Hn(t,h));const m=a.updateImmediateChild(t,F.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(cn(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Hn(c.name,c.node)),r.trackChildChange(cn(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
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
 */class ar{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ln}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ht}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new ar;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function V_(n){return n.loadsAllData()?new or(n.getIndex()):n.hasLimit()?new H_(n):new Bn(n)}function jo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===fe?t="$priority":n.index_===U_?t="$value":n.index_===rn?t="$key":(C(n.index_ instanceof x_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=we(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=we(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+we(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=we(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+we(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function qo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==fe&&(e.i=n.index_.toString()),e}/**
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
 */class Es extends Yl{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Jn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Es.getListenId_(e,s),a={};this.listens_[o]=a;const l=jo(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),an(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Es.getListenId_(e,t);delete this.listens_[s]}get(e){const t=jo(e._queryParams),s=e._path.toString(),i=new Ms;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Mn(a.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class B_{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Cs(){return{value:null,children:new Map}}function ac(n,e,t){if(K(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=z(e);n.children.has(s)||n.children.set(s,Cs());const i=n.children.get(s);e=re(e),ac(i,e,t)}}function Ai(n,e,t){n.value!==null?t(e,n.value):W_(n,(s,i)=>{const r=new se(e.toString()+"/"+s);Ai(i,r,t)})}function W_(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class j_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const zo=10*1e3,q_=30*1e3,z_=5*60*1e3;class G_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new j_(e);const s=zo+(q_-zo)*Math.random();An(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Me(e,(i,r)=>{r>0&&at(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),An(this.reportStats_.bind(this),Math.floor(Math.random()*2*z_))}}/**
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
 */var Ve;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ve||(Ve={}));function lc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class bs{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ve.ACK_USER_WRITE,this.source=lc()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new se(e));return new bs(X(),t,this.revert)}}else return C(z(this.path)===e,"operationForChild called for unrelated child."),new bs(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class Wn{constructor(e,t){this.source=e,this.path=t,this.type=Ve.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new Wn(this.source,X()):new Wn(this.source,re(this.path))}}/**
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
 */class Vt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ve.OVERWRITE}operationForChild(e){return K(this.path)?new Vt(this.source,X(),this.snap.getImmediateChild(e)):new Vt(this.source,re(this.path),this.snap)}}/**
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
 */class jn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ve.MERGE}operationForChild(e){if(K(this.path)){const t=this.children.subtree(new se(e));return t.isEmpty()?null:t.value?new Vt(this.source,X(),t.value):new jn(this.source,X(),t)}else return C(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jn(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Bt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const t=z(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class K_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Y_(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push($_(o.childName,o.snapshotNode))}),bn(n,i,"child_removed",e,s,t),bn(n,i,"child_added",e,s,t),bn(n,i,"child_moved",r,s,t),bn(n,i,"child_changed",e,s,t),bn(n,i,"value",e,s,t),i}function bn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>J_(n,a,l)),o.forEach(a=>{const l=Q_(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Q_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function J_(n,e,t){if(e.childName==null||t.childName==null)throw dn("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Ws(n,e){return{eventCache:n,serverCache:e}}function Nn(n,e,t,s){return Ws(new Bt(e,t,s),n.serverCache)}function cc(n,e,t,s){return Ws(n.eventCache,new Bt(e,t,s))}function Ni(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Wt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ci;const X_=()=>(ci||(ci=new Pe(Fp)),ci);class le{constructor(e,t=X_()){this.value=e,this.children=t}static fromObject(e){let t=new le(null);return Me(e,(s,i)=>{t=t.set(new se(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:X(),value:this.value};if(K(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),t);return r!=null?{path:me(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const t=z(e),s=this.children.get(t);return s!==null?s.subtree(re(e)):new le(null)}}set(e,t){if(K(e))return new le(t,this.children);{const s=z(e),r=(this.children.get(s)||new le(null)).set(re(e),t),o=this.children.insert(s,r);return new le(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const t=z(e),s=this.children.get(t);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new le(null):new le(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const t=z(e),s=this.children.get(t);return s?s.get(re(e)):null}}setTree(e,t){if(K(e))return t;{const s=z(e),r=(this.children.get(s)||new le(null)).setTree(re(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new le(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(me(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,X(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(K(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(re(e),me(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,X(),t)}foreachOnPath_(e,t,s){if(K(e))return this;{this.value&&s(t,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),me(t,i),s):new le(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(me(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Be{constructor(e){this.writeTree_=e}static empty(){return new Be(new le(null))}}function Pn(n,e,t){if(K(e))return new Be(new le(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,t),new Be(n.writeTree_.set(i,r))}else{const i=new le(t),r=n.writeTree_.setTree(e,i);return new Be(r)}}}function Go(n,e,t){let s=n;return Me(t,(i,r)=>{s=Pn(s,me(e,i),r)}),s}function Ko(n,e){if(K(e))return Be.empty();{const t=n.writeTree_.setTree(e,new le(null));return new Be(t)}}function Pi(n,e){return Kt(n,e)!=null}function Kt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ne(t.path,e)):null}function Yo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(fe,(s,i)=>{e.push(new G(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function wt(n,e){if(K(e))return n;{const t=Kt(n,e);return t!=null?new Be(new le(t)):new Be(n.writeTree_.subtree(e))}}function Oi(n){return n.writeTree_.isEmpty()}function un(n,e){return uc(X(),n.writeTree_,e)}function uc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=uc(me(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(me(n,".priority"),s)),t}}/**
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
 */function ur(n,e){return pc(e,n)}function Z_(n,e,t,s,i){C(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Pn(n.visibleWrites,e,t)),n.lastWriteId=s}function em(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function tm(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);C(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&nm(a,s.path)?i=!1:He(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return sm(n),!0;if(s.snap)n.visibleWrites=Ko(n.visibleWrites,s.path);else{const a=s.children;Me(a,l=>{n.visibleWrites=Ko(n.visibleWrites,me(s.path,l))})}return!0}else return!1}function nm(n,e){if(n.snap)return He(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&He(me(n.path,t),e))return!0;return!1}function sm(n){n.visibleWrites=hc(n.allWrites,im,X()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function im(n){return n.visible}function hc(n,e,t){let s=Be.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)He(t,o)?(a=Ne(t,o),s=Pn(s,a,r.snap)):He(o,t)&&(a=Ne(o,t),s=Pn(s,X(),r.snap.getChild(a)));else if(r.children){if(He(t,o))a=Ne(t,o),s=Go(s,a,r.children);else if(He(o,t))if(a=Ne(o,t),K(a))s=Go(s,X(),r.children);else{const l=an(r.children,z(a));if(l){const c=l.getChild(re(a));s=Pn(s,X(),c)}}}else throw dn("WriteRecord should have .snap or .children")}}return s}function dc(n,e,t,s,i){if(!s&&!i){const r=Kt(n.visibleWrites,e);if(r!=null)return r;{const o=wt(n.visibleWrites,e);if(Oi(o))return t;if(t==null&&!Pi(o,X()))return null;{const a=t||F.EMPTY_NODE;return un(o,a)}}}else{const r=wt(n.visibleWrites,e);if(!i&&Oi(r))return t;if(!i&&t==null&&!Pi(r,X()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(He(c.path,e)||He(e,c.path))},a=hc(n.allWrites,o,e),l=t||F.EMPTY_NODE;return un(a,l)}}}function rm(n,e,t){let s=F.EMPTY_NODE;const i=Kt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=wt(n.visibleWrites,e);return t.forEachChild(fe,(o,a)=>{const l=un(wt(r,new se(o)),a);s=s.updateImmediateChild(o,l)}),Yo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=wt(n.visibleWrites,e);return Yo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function om(n,e,t,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=me(e,t);if(Pi(n.visibleWrites,r))return null;{const o=wt(n.visibleWrites,r);return Oi(o)?i.getChild(t):un(o,i.getChild(t))}}function am(n,e,t,s){const i=me(e,t),r=Kt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=wt(n.visibleWrites,i);return un(o,s.getNode().getImmediateChild(t))}else return null}function lm(n,e){return Kt(n.visibleWrites,e)}function cm(n,e,t,s,i,r,o){let a;const l=wt(n.visibleWrites,e),c=Kt(l,X());if(c!=null)a=c;else if(t!=null)a=un(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function um(){return{visibleWrites:Be.empty(),allWrites:[],lastWriteId:-1}}function Ts(n,e,t,s){return dc(n.writeTree,n.treePath,e,t,s)}function hr(n,e){return rm(n.writeTree,n.treePath,e)}function Qo(n,e,t,s){return om(n.writeTree,n.treePath,e,t,s)}function Ss(n,e){return lm(n.writeTree,me(n.treePath,e))}function hm(n,e,t,s,i,r){return cm(n.writeTree,n.treePath,e,t,s,i,r)}function dr(n,e,t){return am(n.writeTree,n.treePath,e,t)}function fc(n,e){return pc(me(n.treePath,e),n.writeTree)}function pc(n,e){return{treePath:n,writeTree:e}}/**
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
 */class dm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;C(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Vn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Hn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,cn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Vn(s,e.snapshotNode,i.oldSnap));else throw dn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class fm{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const _c=new fm;class fr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wt(this.viewCache_),r=hm(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function pm(n){return{filter:n}}function _m(n,e){C(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function mm(n,e,t,s,i){const r=new dm;let o,a;if(t.type===Ve.OVERWRITE){const c=t;c.source.fromUser?o=Di(n,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=ks(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===Ve.MERGE){const c=t;c.source.fromUser?o=vm(n,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Mi(n,e,c.path,c.children,s,i,a,r))}else if(t.type===Ve.ACK_USER_WRITE){const c=t;c.revert?o=Im(n,e,c.path,s,i,r):o=ym(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Ve.LISTEN_COMPLETE)o=wm(n,e,t.path,s,r);else throw dn("Unknown operation type: "+t.type);const l=r.getChanges();return gm(e,o,l),{viewCache:o,changes:l}}function gm(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ni(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(oc(Ni(e)))}}function mc(n,e,t,s,i,r){const o=e.eventCache;if(Ss(s,t)!=null)return e;{let a,l;if(K(t))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Wt(e),u=c instanceof F?c:F.EMPTY_NODE,h=hr(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ts(s,Wt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(t);if(c===".priority"){C(Et(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Qo(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=re(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Qo(s,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=dr(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Nn(e,a,o.isFullyInitialized()||K(t),n.filter.filtersNodes())}}function ks(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(K(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=z(t);if(!l.isCompleteForPath(t)&&Et(t)>1)return e;const p=re(t),E=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),E):c=u.updateChild(l.getNode(),f,E,p,_c,null)}const h=cc(e,c,l.isFullyInitialized()||K(t),u.filtersNodes()),d=new fr(i,h,r);return mc(n,h,t,i,d,a)}function Di(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new fr(i,e,r);if(K(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Nn(e,c,!0,n.filter.filtersNodes());else{const h=z(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Nn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=re(t),f=a.getNode().getImmediateChild(h);let p;if(K(d))p=s;else{const m=u.getCompleteChild(h);m!=null?Jl(d)===".priority"&&m.getChild(Zl(d)).isEmpty()?p=m:p=m.updateChild(d,s):p=F.EMPTY_NODE}if(f.equals(p))l=e;else{const m=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=Nn(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Jo(n,e){return n.eventCache.isCompleteForChild(e)}function vm(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=me(t,l);Jo(e,z(u))&&(a=Di(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=me(t,l);Jo(e,z(u))||(a=Di(n,a,u,c,i,r,o))}),a}function Xo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Mi(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;K(t)?c=s:c=new le(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Xo(n,f,d);l=ks(n,l,new se(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),m=Xo(n,p,d);l=ks(n,l,new se(h),m,i,r,o,a)}}),l}function ym(n,e,t,s,i,r,o){if(Ss(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(K(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ks(n,e,t,l.getNode().getChild(t),i,r,a,o);if(K(t)){let c=new le(null);return l.getNode().forEachChild(rn,(u,h)=>{c=c.set(new se(u),h)}),Mi(n,e,t,c,i,r,a,o)}else return e}else{let c=new le(null);return s.foreach((u,h)=>{const d=me(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Mi(n,e,t,c,i,r,a,o)}}function wm(n,e,t,s,i){const r=e.serverCache,o=cc(e,r.getNode(),r.isFullyInitialized()||K(t),r.isFiltered());return mc(n,o,t,s,_c,i)}function Im(n,e,t,s,i,r){let o;if(Ss(s,t)!=null)return e;{const a=new fr(s,e,i),l=e.eventCache.getNode();let c;if(K(t)||z(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ts(s,Wt(e));else{const h=e.serverCache.getNode();C(h instanceof F,"serverChildren would be complete if leaf node"),u=hr(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=z(t);let h=dr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,re(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,F.EMPTY_NODE,re(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ts(s,Wt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ss(s,X())!=null,Nn(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Em{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new or(s.getIndex()),r=V_(s);this.processor_=pm(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(F.EMPTY_NODE,a.getNode(),null),u=new Bt(l,o.isFullyInitialized(),i.filtersNodes()),h=new Bt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ws(h,u),this.eventGenerator_=new K_(this.query_)}get query(){return this.query_}}function Cm(n){return n.viewCache_.serverCache.getNode()}function bm(n,e){const t=Wt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!K(e)&&!t.getImmediateChild(z(e)).isEmpty())?t.getChild(e):null}function Zo(n){return n.eventRegistrations_.length===0}function Tm(n,e){n.eventRegistrations_.push(e)}function ea(n,e,t){const s=[];if(t){C(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function ta(n,e,t,s){e.type===Ve.MERGE&&e.source.queryId!==null&&(C(Wt(n.viewCache_),"We should always have a full cache before handling merges"),C(Ni(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=mm(n.processor_,i,e,t,s);return _m(n.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,gc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Sm(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(fe,(r,o)=>{s.push(cn(r,o))}),t.isFullyInitialized()&&s.push(oc(t.getNode())),gc(n,s,t.getNode(),e)}function gc(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Y_(n.eventGenerator_,e,t,i)}/**
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
 */let Rs;class km{constructor(){this.views=new Map}}function Rm(n){C(!Rs,"__referenceConstructor has already been defined"),Rs=n}function Am(){return C(Rs,"Reference.ts has not been loaded"),Rs}function Nm(n){return n.views.size===0}function pr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),ta(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(ta(o,e,t,s));return r}}function Pm(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ts(t,i?s:null),l=!1;a?l=!0:s instanceof F?(a=hr(t,s),l=!1):(a=F.EMPTY_NODE,l=!1);const c=Ws(new Bt(a,l,!1),new Bt(s,i,!1));return new Em(e,c)}return o}function Om(n,e,t,s,i,r){const o=Pm(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Tm(o,t),Sm(o,t)}function Dm(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ct(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(ea(c,t,s)),Zo(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(ea(l,t,s)),Zo(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ct(n)&&r.push(new(Am())(e._repo,e._path)),{removed:r,events:o}}function vc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function on(n,e){let t=null;for(const s of n.views.values())t=t||bm(s,e);return t}function yc(n,e){if(e._queryParams.loadsAllData())return js(n);{const s=e._queryIdentifier;return n.views.get(s)}}function wc(n,e){return yc(n,e)!=null}function Ct(n){return js(n)!=null}function js(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let As;function Mm(n){C(!As,"__referenceConstructor has already been defined"),As=n}function Lm(){return C(As,"Reference.ts has not been loaded"),As}let xm=1;class na{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=um(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ic(n,e,t,s,i){return Z_(n.pendingWriteTree_,e,t,s,i),i?Zn(n,new Vt(lc(),e,t)):[]}function Mt(n,e,t=!1){const s=em(n.pendingWriteTree_,e);if(tm(n.pendingWriteTree_,e)){let r=new le(null);return s.snap!=null?r=r.set(X(),!0):Me(s.children,o=>{r=r.set(new se(o),!0)}),Zn(n,new bs(s.path,r,t))}else return[]}function qs(n,e,t){return Zn(n,new Vt(lr(),e,t))}function Fm(n,e,t){const s=le.fromObject(t);return Zn(n,new jn(lr(),e,s))}function Um(n,e){return Zn(n,new Wn(lr(),e))}function $m(n,e,t){const s=mr(n,t);if(s){const i=gr(s),r=i.path,o=i.queryId,a=Ne(r,e),l=new Wn(cr(o),a);return vr(n,r,l)}else return[]}function Li(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||wc(o,e))){const l=Dm(o,e,t,s);Nm(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>Ct(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Bm(d);for(let p=0;p<f.length;++p){const m=f[p],E=m.query,T=bc(n,m);n.listenProvider_.startListening(On(E),Ns(n,E),T.hashFn,T.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(On(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(zs(d));n.listenProvider_.stopListening(On(d),f)}))}Wm(n,c)}return a}function Hm(n,e,t,s){const i=mr(n,s);if(i!=null){const r=gr(i),o=r.path,a=r.queryId,l=Ne(o,e),c=new Vt(cr(a),l,t);return vr(n,o,c)}else return[]}function Vm(n,e,t,s){const i=mr(n,s);if(i){const r=gr(i),o=r.path,a=r.queryId,l=Ne(o,e),c=le.fromObject(t),u=new jn(cr(a),l,c);return vr(n,o,u)}else return[]}function sa(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=Ne(d,i);r=r||on(f,p),o=o||Ct(f)});let a=n.syncPointTree_.get(i);a?(o=o||Ct(a),r=r||on(a,X())):(a=new km,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=F.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const m=on(p,X());m&&(r=r.updateImmediateChild(f,m))}));const c=wc(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=zs(e);C(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=jm();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=ur(n.pendingWriteTree_,i);let h=Om(a,e,t,u,r,l);if(!c&&!o&&!s){const d=yc(a,e);h=h.concat(qm(n,e,d))}return h}function _r(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ne(o,e),c=on(a,l);if(c)return c});return dc(i,e,r,t,!0)}function Zn(n,e){return Ec(e,n.syncPointTree_,null,ur(n.pendingWriteTree_,X()))}function Ec(n,e,t,s){if(K(n.path))return Cc(n,e,t,s);{const i=e.get(X());t==null&&i!=null&&(t=on(i,X()));let r=[];const o=z(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=fc(s,o);r=r.concat(Ec(a,l,c,u))}return i&&(r=r.concat(pr(i,n,s,t))),r}}function Cc(n,e,t,s){const i=e.get(X());t==null&&i!=null&&(t=on(i,X()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=fc(s,o),u=n.operationForChild(o);u&&(r=r.concat(Cc(u,a,l,c)))}),i&&(r=r.concat(pr(i,n,s,t))),r}function bc(n,e){const t=e.query,s=Ns(n,t);return{hashFn:()=>(Cm(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?$m(n,t._path,s):Um(n,t._path);{const r=Hp(i,t);return Li(n,t,null,r)}}}}function Ns(n,e){const t=zs(e);return n.queryToTagMap.get(t)}function zs(n){return n._path.toString()+"$"+n._queryIdentifier}function mr(n,e){return n.tagToQueryMap.get(e)}function gr(n){const e=n.indexOf("$");return C(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new se(n.substr(0,e))}}function vr(n,e,t){const s=n.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=ur(n.pendingWriteTree_,e);return pr(s,t,i,null)}function Bm(n){return n.fold((e,t,s)=>{if(t&&Ct(t))return[js(t)];{let i=[];return t&&(i=vc(t)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function On(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Lm())(n._repo,n._path):n}function Wm(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=zs(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function jm(){return xm++}function qm(n,e,t){const s=e._path,i=Ns(n,e),r=bc(n,t),o=n.listenProvider_.startListening(On(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)C(!Ct(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!K(c)&&u&&Ct(u))return[js(u).query];{let d=[];return u&&(d=d.concat(vc(u).map(f=>f.query))),Me(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(On(u),Ns(n,u))}}return o}/**
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
 */class yr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new yr(t)}node(){return this.node_}}class wr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=me(this.path_,e);return new wr(this.syncTree_,t)}node(){return _r(this.syncTree_,this.path_)}}const zm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ia=function(n,e,t){if(!n||typeof n!="object")return n;if(C(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Gm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Km(n[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Gm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:C(!1,"Unexpected server value: "+n)}},Km=function(n,e,t){n.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ym=function(n,e,t,s){return Ir(e,new wr(t,n),s)},Tc=function(n,e,t){return Ir(n,new yr(e),t)};function Ir(n,e,t){const s=n.getPriority().val(),i=ia(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ia(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ve(a,Ie(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ve(i))),o.forEachChild(fe,(a,l)=>{const c=Ir(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Er{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Cr(n,e){let t=e instanceof se?e:new se(e),s=n,i=z(t);for(;i!==null;){const r=an(s.node.children,i)||{children:{},childCount:0};s=new Er(i,s,r),t=re(t),i=z(t)}return s}function vn(n){return n.node.value}function Sc(n,e){n.node.value=e,xi(n)}function kc(n){return n.node.childCount>0}function Qm(n){return vn(n)===void 0&&!kc(n)}function Gs(n,e){Me(n.node.children,(t,s)=>{e(new Er(t,n,s))})}function Rc(n,e,t,s){t&&!s&&e(n),Gs(n,i=>{Rc(i,e,!0,s)}),t&&s&&e(n)}function Jm(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function es(n){return new se(n.parent===null?n.name:es(n.parent)+"/"+n.name)}function xi(n){n.parent!==null&&Xm(n.parent,n.name,n)}function Xm(n,e,t){const s=Qm(t),i=at(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,xi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,xi(n))}/**
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
 */const Zm=/[\[\].#$\/\u0000-\u001F\u007F]/,eg=/[\[\].#$\u0000-\u001F\u007F]/,ui=10*1024*1024,Ac=function(n){return typeof n=="string"&&n.length!==0&&!Zm.test(n)},Nc=function(n){return typeof n=="string"&&n.length!==0&&!eg.test(n)},tg=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Nc(n)},ng=function(n,e,t,s){s&&e===void 0||br(Bi(n,"value"),e,t)},br=function(n,e,t){const s=t instanceof se?new y_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Nt(s));if(typeof e=="function")throw new Error(n+"contains a function "+Nt(s)+" with contents = "+e.toString());if(Nl(e))throw new Error(n+"contains "+e.toString()+" "+Nt(s));if(typeof e=="string"&&e.length>ui/3&&Ls(e)>ui)throw new Error(n+"contains a string greater than "+ui+" utf8 bytes "+Nt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ac(o)))throw new Error(n+" contains an invalid key ("+o+") "+Nt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);w_(s,o),br(n,a,s),I_(s)}),i&&r)throw new Error(n+' contains ".value" child '+Nt(s)+" in addition to actual children.")}},Pc=function(n,e,t,s){if(!(s&&t===void 0)&&!Nc(t))throw new Error(Bi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sg=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Pc(n,e,t,s)},ig=function(n,e){if(z(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},rg=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ac(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!tg(t))throw new Error(Bi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class og{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Tr(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!sr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Oc(n,e,t){Tr(n,t),Dc(n,s=>sr(s,e))}function ot(n,e,t){Tr(n,t),Dc(n,s=>He(s,e)||He(e,s))}function Dc(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(ag(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ag(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ft&&Ce("event: "+t.toString()),gn(s)}}}/**
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
 */const lg="repo_interrupt",cg=25;class ug{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new og,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cs(),this.transactionQueueTree_=new Er,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hg(n,e,t){if(n.stats_=tr(n.repoInfo_),n.forceRestClient_||jp())n.server_=new Es(n.repoInfo_,(s,i,r,o)=>{ra(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>oa(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new nt(n.repoInfo_,e,(s,i,r,o)=>{ra(n,s,i,r,o)},s=>{oa(n,s)},s=>{fg(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Yp(n.repoInfo_,()=>new G_(n.stats_,n.server_)),n.infoData_=new B_,n.infoSyncTree_=new na({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=qs(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),kr(n,"connected",!1),n.serverSyncTree_=new na({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ot(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function dg(n){const t=n.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Sr(n){return zm({timestamp:dg(n)})}function ra(n,e,t,s,i){n.dataUpdateCount++;const r=new se(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=ds(t,c=>Ie(c));o=Vm(n.serverSyncTree_,r,l,i)}else{const l=Ie(t);o=Hm(n.serverSyncTree_,r,l,i)}else if(s){const l=ds(t,c=>Ie(c));o=Fm(n.serverSyncTree_,r,l)}else{const l=Ie(t);o=qs(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ks(n,r)),ot(n.eventQueue_,a,o)}function oa(n,e){kr(n,"connected",e),e===!1&&_g(n)}function fg(n,e){Me(e,(t,s)=>{kr(n,t,s)})}function kr(n,e,t){const s=new se("/.info/"+e),i=Ie(t);n.infoData_.updateSnapshot(s,i);const r=qs(n.infoSyncTree_,s,i);ot(n.eventQueue_,s,r)}function Mc(n){return n.nextWriteId_++}function pg(n,e,t,s,i){Rr(n,"set",{path:e.toString(),value:t,priority:s});const r=Sr(n),o=Ie(t,s),a=_r(n.serverSyncTree_,e),l=Tc(o,a,r),c=Mc(n),u=Ic(n.serverSyncTree_,e,l,c,!0);Tr(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||Oe("set at "+e+" failed: "+d);const m=Mt(n.serverSyncTree_,c,!p);ot(n.eventQueue_,e,m),vg(n,i,d,f)});const h=$c(n,e);Ks(n,h),ot(n.eventQueue_,h,[])}function _g(n){Rr(n,"onDisconnectEvents");const e=Sr(n),t=Cs();Ai(n.onDisconnect_,X(),(i,r)=>{const o=Ym(i,r,n.serverSyncTree_,e);ac(t,i,o)});let s=[];Ai(t,X(),(i,r)=>{s=s.concat(qs(n.serverSyncTree_,i,r));const o=$c(n,i);Ks(n,o)}),n.onDisconnect_=Cs(),ot(n.eventQueue_,X(),s)}function mg(n,e,t){let s;z(e._path)===".info"?s=sa(n.infoSyncTree_,e,t):s=sa(n.serverSyncTree_,e,t),Oc(n.eventQueue_,e._path,s)}function aa(n,e,t){let s;z(e._path)===".info"?s=Li(n.infoSyncTree_,e,t):s=Li(n.serverSyncTree_,e,t),Oc(n.eventQueue_,e._path,s)}function gg(n){n.persistentConnection_&&n.persistentConnection_.interrupt(lg)}function Rr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ce(t,...e)}function vg(n,e,t,s){e&&gn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Lc(n,e,t){return _r(n.serverSyncTree_,e,t)||F.EMPTY_NODE}function Ar(n,e=n.transactionQueueTree_){if(e||Ys(n,e),vn(e)){const t=Fc(n,e);C(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&yg(n,es(e),t)}else kc(e)&&Gs(e,t=>{Ar(n,t)})}function yg(n,e,t){const s=t.map(c=>c.currentWriteId),i=Lc(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ne(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Rr(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Mt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Ys(n,Cr(n.transactionQueueTree_,e)),Ar(n,n.transactionQueueTree_),ot(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)gn(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Oe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Ks(n,e)}},o)}function Ks(n,e){const t=xc(n,e),s=es(t),i=Fc(n,t);return wg(n,i,s),s}function wg(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ne(t,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Mt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cg)u=!0,h="maxretry",i=i.concat(Mt(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Lc(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){br("transaction failed: Data returned ",f,l.path);let p=Ie(f);typeof f=="object"&&f!=null&&at(f,".priority")||(p=p.updatePriority(d.getPriority()));const E=l.currentWriteId,T=Sr(n),y=Tc(p,d,T);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=y,l.currentWriteId=Mc(n),o.splice(o.indexOf(E),1),i=i.concat(Ic(n.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),i=i.concat(Mt(n.serverSyncTree_,E,!0))}else u=!0,h="nodata",i=i.concat(Mt(n.serverSyncTree_,l.currentWriteId,!0))}ot(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ys(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)gn(s[a]);Ar(n,n.transactionQueueTree_)}function xc(n,e){let t,s=n.transactionQueueTree_;for(t=z(e);t!==null&&vn(s)===void 0;)s=Cr(s,t),e=re(e),t=z(e);return s}function Fc(n,e){const t=[];return Uc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Uc(n,e,t){const s=vn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Gs(e,i=>{Uc(n,i,t)})}function Ys(n,e){const t=vn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Sc(e,t.length>0?t:void 0)}Gs(e,s=>{Ys(n,s)})}function $c(n,e){const t=es(xc(n,e)),s=Cr(n.transactionQueueTree_,e);return Jm(s,i=>{hi(n,i)}),hi(n,s),Rc(s,i=>{hi(n,i)}),t}function hi(n,e){const t=vn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(C(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Mt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Sc(e,void 0):t.length=r+1,ot(n.eventQueue_,es(e),i);for(let o=0;o<s.length;o++)gn(s[o])}}/**
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
 */function Ig(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Eg(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Oe(`Invalid query segment '${t}' in query '${n}'`)}return e}const la=function(n,e){const t=Cg(n),s=t.namespace;t.domain==="firebase.com"&&rt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&rt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Lp();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Bl(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new se(t.pathString)}},Cg=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Ig(n.substring(u,h)));const d=Eg(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Hc{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class Vc{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class bg{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Nr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:Jl(this._path)}get ref(){return new lt(this._repo,this._path)}get _queryIdentifier(){const e=qo(this._queryParams),t=Zi(e);return t==="{}"?"default":t}get _queryObject(){return qo(this._queryParams)}isEqual(e){if(e=xe(e),!(e instanceof Nr))return!1;const t=this._repo===e._repo,s=sr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+v_(this._path)}}class lt extends Nr{constructor(e,t){super(e,t,new ar,!1)}get parent(){const e=Zl(this._path);return e===null?null:new lt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new se(e),s=Ps(this.ref,e);return new qn(this._node.getChild(t),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new qn(i,Ps(this.ref,s),fe)))}hasChild(e){const t=new se(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bc(n,e){return n=xe(n),n._checkNotDeleted("ref"),e!==void 0?Ps(n._root,e):n._root}function Ps(n,e){return n=xe(n),z(n._path)===null?sg("child","path",e,!1):Pc("child","path",e,!1),new lt(n._repo,me(n._path,e))}function ca(n,e){n=xe(n),ig("set",n._path),ng("set",e,n._path,!1);const t=new Ms;return pg(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Pr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Hc("value",this,new qn(e.snapshotNode,new lt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vc(this,e,t):null}matches(e){return e instanceof Pr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Or{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vc(this,e,t):null}createEvent(e,t){C(e.childName!=null,"Child events should have a childName.");const s=Ps(new lt(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Hc(e.type,this,new qn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Or?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Tg(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(u,h)=>{aa(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new bg(t,r||void 0),a=e==="value"?new Pr(o):new Or(e,o);return mg(n._repo,n,a),()=>aa(n._repo,n,a)}function Sg(n,e,t,s){return Tg(n,"value",e,t,s)}Rm(lt);Mm(lt);/**
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
 */const kg="FIREBASE_DATABASE_EMULATOR_HOST",Fi={};let Rg=!1;function Ag(n,e,t,s){n.repoInfo_=new Bl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Ng(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||rt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=la(r,i),a=o.repoInfo,l,c;typeof process<"u"&&ko&&(c=ko[kg]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=la(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new sn(sn.OWNER):new zp(n.name,n.options,e);rg("Invalid Firebase Database URL",o),K(o.path)||rt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Og(a,n,u,new qp(n.name,t));return new Dg(h,n)}function Pg(n,e){const t=Fi[e];(!t||t[n.key]!==n)&&rt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),gg(n),delete t[n.key]}function Og(n,e,t,s){let i=Fi[e.name];i||(i={},Fi[e.name]=i);let r=i[n.toURLString()];return r&&rt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ug(n,Rg,t,s),i[n.toURLString()]=r,r}class Dg{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new lt(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Pg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rt("Cannot call "+e+" on a deleted database.")}}function Wc(n=ji(),e){const t=Gt(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Xu("database");s&&Mg(t,...s)}return t}function Mg(n,e,t,s={}){n=xe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&rt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&rt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new sn(sn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Zu(s.mockUserToken,n.app.options.projectId);r=new sn(o)}Ag(i,e,t,r)}/**
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
 */function Lg(n){Np(pn),ze(new We("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ng(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ue(Ro,Ao,n),Ue(Ro,Ao,"esm2017")}nt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};nt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Lg();async function Dr(n){const e=Wc(),t=Bc(e,n);return new Promise((s,i)=>{Sg(t,r=>{if(r.exists()){const o=r.val()||[];s(o)}else s("NOREF")},r=>{i(r)})})}async function xg(n){const e=Wc(),t=Bc(e,"Stats/"+jc()),s=await Fg();if(s==="NOREF")return ca(t,{averageTime:n,minTime:n,count:1}),{averageTime:n,minTime:n,count:1,isUnderAverage:!0,isHighScore:!0};{const i=s.averageTime,r=s.minTime,o=s.count,a=$g(i,o,n),l=Hg(n,r),c=o+1;return ca(t,{averageTime:a,minTime:l,count:c}),{averageTime:i,minTime:l,count:c,isUnderAverage:ua(n,i),isHighScore:ua(n,r)}}}function jc(){const n=new Date,e={year:"numeric",month:"2-digit",day:"2-digit"};return n.toLocaleDateString("en-US",e).replace(/\//g,"-")}async function Fg(){try{return await Dr("Stats/"+jc())}catch{return null}}function hn(n){const[e,t,s]=n.split(":").map(Number);return e*3600+t*60+s}function Ug(n){const e=Math.floor(n/3600),t=Math.floor(n%3600/60),s=Math.round(n%60);return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}function $g(n,e,t){const s=hn(n),i=hn(t),r=(s*e+i)/(e+1);return Ug(r)}function Hg(n,e){const t=hn(n),s=hn(e);return t<s?n:e}function ua(n,e){const t=hn(n),s=hn(e);return t<s}const qc="@firebase/installations",Mr="0.6.5";/**
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
 */const zc=1e4,Gc=`w:${Mr}`,Kc="FIS_v2",Vg="https://firebaseinstallations.googleapis.com/v1",Bg=60*60*1e3,Wg="installations",jg="Installations";/**
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
 */const qg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},jt=new zt(Wg,jg,qg);function Yc(n){return n instanceof Ge&&n.code.includes("request-failed")}/**
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
 */function Qc({projectId:n}){return`${Vg}/projects/${n}/installations`}function Jc(n){return{token:n.token,requestStatus:2,expiresIn:Gg(n.expiresIn),creationTime:Date.now()}}async function Xc(n,e){const s=(await e.json()).error;return jt.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Zc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function zg(n,{refreshToken:e}){const t=Zc(n);return t.append("Authorization",Kg(e)),t}async function eu(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Gg(n){return Number(n.replace("s","000"))}function Kg(n){return`${Kc} ${n}`}/**
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
 */async function Yg({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Qc(n),i=Zc(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:t,authVersion:Kc,appId:n.appId,sdkVersion:Gc},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await eu(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Jc(c.authToken)}}else throw await Xc("Create Installation",l)}/**
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
 */function Qg(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Jg=/^[cdef][\w-]{21}$/,Ui="";function Xg(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Zg(n);return Jg.test(t)?t:Ui}catch{return Ui}}function Zg(n){return Qg(n).substr(0,22)}/**
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
 */function Qs(n){return`${n.appName}!${n.appId}`}/**
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
 */const nu=new Map;function su(n,e){const t=Qs(n);iu(t,e),ev(t,e)}function iu(n,e){const t=nu.get(n);if(t)for(const s of t)s(e)}function ev(n,e){const t=tv();t&&t.postMessage({key:n,fid:e}),nv()}let Lt=null;function tv(){return!Lt&&"BroadcastChannel"in self&&(Lt=new BroadcastChannel("[Firebase] FID Change"),Lt.onmessage=n=>{iu(n.data.key,n.data.fid)}),Lt}function nv(){nu.size===0&&Lt&&(Lt.close(),Lt=null)}/**
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
 */const sv="firebase-installations-database",iv=1,qt="firebase-installations-store";let di=null;function Lr(){return di||(di=za(sv,iv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(qt)}}})),di}async function Os(n,e){const t=Qs(n),i=(await Lr()).transaction(qt,"readwrite"),r=i.objectStore(qt),o=await r.get(t);return await r.put(e,t),await i.done,(!o||o.fid!==e.fid)&&su(n,e.fid),e}async function ru(n){const e=Qs(n),s=(await Lr()).transaction(qt,"readwrite");await s.objectStore(qt).delete(e),await s.done}async function Js(n,e){const t=Qs(n),i=(await Lr()).transaction(qt,"readwrite"),r=i.objectStore(qt),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&su(n,a.fid),a}/**
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
 */async function xr(n){let e;const t=await Js(n.appConfig,s=>{const i=rv(s),r=ov(n,i);return e=r.registrationPromise,r.installationEntry});return t.fid===Ui?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function rv(n){const e=n||{fid:Xg(),registrationStatus:0};return ou(e)}function ov(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(jt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=av(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lv(n)}:{installationEntry:e}}async function av(n,e){try{const t=await Yg(n,e);return Os(n.appConfig,t)}catch(t){throw Yc(t)&&t.customData.serverCode===409?await ru(n.appConfig):await Os(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function lv(n){let e=await ha(n.appConfig);for(;e.registrationStatus===1;)await tu(100),e=await ha(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await xr(n);return s||t}return e}function ha(n){return Js(n,e=>{if(!e)throw jt.create("installation-not-found");return ou(e)})}function ou(n){return cv(n)?{fid:n.fid,registrationStatus:0}:n}function cv(n){return n.registrationStatus===1&&n.registrationTime+zc<Date.now()}/**
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
 */async function uv({appConfig:n,heartbeatServiceProvider:e},t){const s=hv(n,t),i=zg(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Gc,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await eu(()=>fetch(s,a));if(l.ok){const c=await l.json();return Jc(c)}else throw await Xc("Generate Auth Token",l)}function hv(n,{fid:e}){return`${Qc(n)}/${e}/authTokens:generate`}/**
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
 */async function Fr(n,e=!1){let t;const s=await Js(n.appConfig,r=>{if(!au(r))throw jt.create("not-registered");const o=r.authToken;if(!e&&pv(o))return r;if(o.requestStatus===1)return t=dv(n,e),r;{if(!navigator.onLine)throw jt.create("app-offline");const a=mv(r);return t=fv(n,a),a}});return t?await t:s.authToken}async function dv(n,e){let t=await da(n.appConfig);for(;t.authToken.requestStatus===1;)await tu(100),t=await da(n.appConfig);const s=t.authToken;return s.requestStatus===0?Fr(n,e):s}function da(n){return Js(n,e=>{if(!au(e))throw jt.create("not-registered");const t=e.authToken;return gv(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fv(n,e){try{const t=await uv(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Os(n.appConfig,s),t}catch(t){if(Yc(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ru(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Os(n.appConfig,s)}throw t}}function au(n){return n!==void 0&&n.registrationStatus===2}function pv(n){return n.requestStatus===2&&!_v(n)}function _v(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Bg}function mv(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function gv(n){return n.requestStatus===1&&n.requestTime+zc<Date.now()}/**
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
 */async function vv(n){const e=n,{installationEntry:t,registrationPromise:s}=await xr(e);return s?s.catch(console.error):Fr(e).catch(console.error),t.fid}/**
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
 */async function yv(n,e=!1){const t=n;return await wv(t),(await Fr(t,e)).token}async function wv(n){const{registrationPromise:e}=await xr(n);e&&await e}/**
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
 */function Iv(n){if(!n||!n.options)throw fi("App Configuration");if(!n.name)throw fi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw fi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function fi(n){return jt.create("missing-app-config-values",{valueName:n})}/**
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
 */const lu="installations",Ev="installations-internal",Cv=n=>{const e=n.getProvider("app").getImmediate(),t=Iv(e),s=Gt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},bv=n=>{const e=n.getProvider("app").getImmediate(),t=Gt(e,lu).getImmediate();return{getId:()=>vv(t),getToken:i=>yv(t,i)}};function Tv(){ze(new We(lu,Cv,"PUBLIC")),ze(new We(Ev,bv,"PRIVATE"))}Tv();Ue(qc,Mr);Ue(qc,Mr,"esm2017");/**
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
 */const Ds="analytics",Sv="firebase_id",kv="origin",Rv=60*1e3,Av="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ur="https://www.googletagmanager.com/gtag/js";/**
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
 */const De=new xs("@firebase/analytics");/**
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
 */const Nv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Le=new zt("analytics","Analytics",Nv);/**
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
 */function Pv(n){if(!n.startsWith(Ur)){const e=Le.create("invalid-gtag-resource",{gtagURL:n});return De.warn(e.message),""}return n}function cu(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Ov(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Dv(n,e){const t=Ov("firebase-js-sdk-policy",{createScriptURL:Pv}),s=document.createElement("script"),i=`${Ur}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Mv(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Lv(n,e,t,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await cu(t)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){De.error(a)}n("config",i,r)}async function xv(n,e,t,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await cu(t);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",s,i||{})}catch(r){De.error(r)}}function Fv(n,e,t,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await xv(n,e,t,a,l)}else if(r==="config"){const[a,l]=o;await Lv(n,e,t,s,a,l)}else if(r==="consent"){const[a]=o;n("consent","update",a)}else if(r==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){De.error(a)}}return i}function Uv(n,e,t,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Fv(r,n,e,t),{gtagCore:r,wrappedGtag:window[i]}}function $v(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ur)&&t.src.includes(n))return t;return null}/**
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
 */const Hv=30,Vv=1e3;class Bv{constructor(e={},t=Vv){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uu=new Bv;function Wv(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function jv(n){var e;const{appId:t,apiKey:s}=n,i={method:"GET",headers:Wv(s)},r=Av.replace("{app-id}",t),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Le.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function qv(n,e=uu,t){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw Le.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Le.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Kv;return setTimeout(async()=>{a.abort()},t!==void 0?t:Rv),hu({appId:s,apiKey:i,measurementId:r},o,a,e)}async function hu(n,{throttleEndTimeMillis:e,backoffCount:t},s,i=uu){var r;const{appId:o,measurementId:a}=n;try{await zv(s,e)}catch(l){if(a)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await jv(n);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Gv(c)){if(i.deleteThrottleMetadata(o),a)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?no(t,i.intervalMillis,Hv):no(t,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return i.setThrottleMetadata(o,h),De.debug(`Calling attemptFetch again in ${u} millis`),hu(n,h,s,i)}}function zv(n,e){return new Promise((t,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(r),s(Le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Gv(n){if(!(n instanceof Ge)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Kv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Yv(n,e,t,s,i){if(i&&i.global){n("event",t,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});n("event",t,o)}}/**
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
 */async function Qv(){if(Va())try{await Ba()}catch(n){return De.warn(Le.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return De.warn(Le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Jv(n,e,t,s,i,r,o){var a;const l=qv(n);l.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>De.error(f)),e.push(l);const c=Qv().then(f=>{if(f)return s.getId()}),[u,h]=await Promise.all([l,c]);$v(r)||Dv(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[kv]="firebase",d.update=!0,h!=null&&(d[Sv]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class Xv{constructor(e){this.app=e}_delete(){return delete Dn[this.app.options.appId],Promise.resolve()}}let Dn={},fa=[];const pa={};let pi="dataLayer",Zv="gtag",_a,du,ma=!1;function ey(){const n=[];if(Ua()&&n.push("This is a browser extension environment."),th()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),t=Le.create("invalid-analytics-context",{errorInfo:e});De.warn(t.message)}}function ty(n,e,t){ey();const s=n.options.appId;if(!s)throw Le.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Le.create("no-api-key");if(Dn[s]!=null)throw Le.create("already-exists",{id:s});if(!ma){Mv(pi);const{wrappedGtag:r,gtagCore:o}=Uv(Dn,fa,pa,pi,Zv);du=r,_a=o,ma=!0}return Dn[s]=Jv(n,fa,pa,e,_a,pi,t),new Xv(n)}function ny(n=ji()){n=xe(n);const e=Gt(n,Ds);return e.isInitialized()?e.getImmediate():sy(n)}function sy(n,e={}){const t=Gt(n,Ds);if(t.isInitialized()){const i=t.getImmediate();if(Ln(e,t.getOptions()))return i;throw Le.create("already-initialized")}return t.initialize({options:e})}function fu(n,e,t,s){n=xe(n),Yv(du,Dn[n.app.options.appId],e,t,s).catch(i=>De.error(i))}const ga="@firebase/analytics",va="0.10.1";function iy(){ze(new We(Ds,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ty(s,i,t)},"PUBLIC")),ze(new We("analytics-internal",n,"PRIVATE")),Ue(ga,va),Ue(ga,va,"esm2017");function n(e){try{const t=e.getProvider(Ds).getImmediate();return{logEvent:(s,i,r)=>fu(t,s,i,r)}}catch(t){throw Le.create("interop-component-reg-failed",{reason:t})}}}iy();function ry(n){let e,t,s=Qe(n[2])+"",i,r,o,a=Qe(n[1])+"",l,c,u,h=Qe(n[0])+"",d;return{c(){e=w("span"),t=w("span"),i=he(s),r=he(":"),o=w("span"),l=he(a),c=he(":"),u=w("span"),d=he(h),this.h()},l(f){e=I(f,"SPAN",{class:!0});var p=V(e);t=I(p,"SPAN",{class:!0});var m=V(t);i=de(m,s),m.forEach(_),r=de(p,":"),o=I(p,"SPAN",{class:!0});var E=V(o);l=de(E,a),E.forEach(_),c=de(p,":"),u=I(p,"SPAN",{class:!0});var T=V(u);d=de(T,h),T.forEach(_),p.forEach(_),this.h()},h(){k(t,"class","value"),k(o,"class","value"),k(u,"class","value"),k(e,"class","timer svelte-1y1osaq")},m(f,p){b(f,e,p),v(e,t),v(t,i),v(e,r),v(e,o),v(o,l),v(e,c),v(e,u),v(u,d)},p(f,[p]){p&4&&s!==(s=Qe(f[2])+"")&&Fe(i,s),p&2&&a!==(a=Qe(f[1])+"")&&Fe(l,a),p&1&&h!==(h=Qe(f[0])+"")&&Fe(d,h)},i:ue,o:ue,d(f){f&&_(e)}}}function Qe(n){return n<10?`0${n}`:n.toString()}function oy(n,e,t){let s,i,r,o,a,l,{elapsedSeconds:c}=e,u=Date.now(),h=mi(!1);rs(n,h,T=>t(12,o=T));let d=mi(0);rs(n,d,T=>t(13,a=T));const f=Au(0,function(y){const x=setInterval(()=>{o&&(d.set(Math.round((Date.now()-u)/1e3)),y(a))},1e3);return function(){clearInterval(x)}});rs(n,f,T=>t(10,l=T));function p(){o||(u=Date.now()-a*1e3,h.set(!0))}function m(){o&&h.set(!1)}function E(){m(),u=Date.now(),d.set(0)}return n.$$set=T=>{"elapsedSeconds"in T&&t(6,c=T.elapsedSeconds)},n.$$.update=()=>{n.$$.dirty&1024&&t(2,s=Math.floor(l/3600)),n.$$.dirty&1028&&t(1,i=Math.floor((l-s*3600)/60)),n.$$.dirty&1030&&t(0,r=l-s*3600-i*60),n.$$.dirty&7&&t(6,c=Qe(s)+":"+Qe(i)+":"+Qe(r))},[r,i,s,h,d,f,c,p,m,E,l]}class ay extends Tt{constructor(e){super(),St(this,e,oy,ry,bt,{elapsedSeconds:6,start:7,stop:8,reset:9})}get start(){return this.$$.ctx[7]}get stop(){return this.$$.ctx[8]}get reset(){return this.$$.ctx[9]}}const ly=""+new URL("../assets/ex-solution.DMtatkDj.png",import.meta.url).href,cy=""+new URL("../assets/ex-letter-box.mgBNjwYG.png",import.meta.url).href;function uy(n){let e,t="Find the 8-letter circle word",s,i,r="<li>There are 2 words to find.</li> <li>Letters may only be used once and have to be in the letter bank.</li> <li>The red circles are shared letters between the two words.</li> <li>You must fill in every word before submitting.</li>",o,a,l="Example",c,u,h="If we had these letters:",d,f,p,m,E,T=`We could spell the words 
    <b><span style="color: red;">M</span>USI<span style="color: red;">C</span></b> 
    and 
    <b><span style="color: red;">C</span>HAR<span style="color: red;">M</span> </b>.`,y,S,x='Notice how these words share an <b><span style="color: red;">M</span></b> and a <b><span style="color: red;">C</span></b>.',D,U,j="One correct solution:",$,O,te,ne,A,H="Remember there can be more than one solution.";return{c(){e=w("h3"),e.textContent=t,s=N(),i=w("ul"),i.innerHTML=r,o=N(),a=w("h3"),a.textContent=l,c=N(),u=w("p"),u.textContent=h,d=N(),f=w("img"),m=N(),E=w("p"),E.innerHTML=T,y=N(),S=w("p"),S.innerHTML=x,D=N(),U=w("p"),U.textContent=j,$=N(),O=w("img"),ne=N(),A=w("p"),A.textContent=H,this.h()},l(g){e=I(g,"H3",{"data-svelte-h":!0}),Y(e)!=="svelte-1j8js8f"&&(e.textContent=t),s=P(g),i=I(g,"UL",{class:!0,"data-svelte-h":!0}),Y(i)!=="svelte-1eowta5"&&(i.innerHTML=r),o=P(g),a=I(g,"H3",{"data-svelte-h":!0}),Y(a)!=="svelte-qg4234"&&(a.textContent=l),c=P(g),u=I(g,"P",{"data-svelte-h":!0}),Y(u)!=="svelte-eqhtsw"&&(u.textContent=h),d=P(g),f=I(g,"IMG",{src:!0,alt:!0,style:!0}),m=P(g),E=I(g,"P",{"data-svelte-h":!0}),Y(E)!=="svelte-9c7ajy"&&(E.innerHTML=T),y=P(g),S=I(g,"P",{"data-svelte-h":!0}),Y(S)!=="svelte-1xer9do"&&(S.innerHTML=x),D=P(g),U=I(g,"P",{"data-svelte-h":!0}),Y(U)!=="svelte-1tryhud"&&(U.textContent=j),$=P(g),O=I(g,"IMG",{src:!0,alt:!0,style:!0}),ne=P(g),A=I(g,"P",{"data-svelte-h":!0}),Y(A)!=="svelte-1imbt6f"&&(A.textContent=H),this.h()},h(){k(i,"class","definition-list"),_i(f.src,p=cy)||k(f,"src",p),k(f,"alt","Welcome"),Xe(f,"width","350px"),Xe(f,"height","auto"),_i(O.src,te=ly)||k(O,"src",te),k(O,"alt","Welcome"),Xe(O,"width","150px"),Xe(O,"height","auto")},m(g,q){b(g,e,q),b(g,s,q),b(g,i,q),b(g,o,q),b(g,a,q),b(g,c,q),b(g,u,q),b(g,d,q),b(g,f,q),b(g,m,q),b(g,E,q),b(g,y,q),b(g,S,q),b(g,D,q),b(g,U,q),b(g,$,q),b(g,O,q),b(g,ne,q),b(g,A,q)},p:ue,i:ue,o:ue,d(g){g&&(_(e),_(s),_(i),_(o),_(a),_(c),_(u),_(d),_(f),_(m),_(E),_(y),_(S),_(D),_(U),_($),_(O),_(ne),_(A))}}}class pu extends Tt{constructor(e){super(),St(this,e,null,uy,bt,{})}}function hy(n){let e,t="Loading Stats...";return{c(){e=w("p"),e.textContent=t},l(s){e=I(s,"P",{"data-svelte-h":!0}),Y(e)!=="svelte-lb7i7x"&&(e.textContent=t)},m(s,i){b(s,e,i)},p:ue,d(s){s&&_(e)}}}function dy(n){let e,t,s=n[0].count+"",i,r,o,a,l,c=n[0].averageTime+"",u,h,d,f,p,m=n[0].minTime+"",E,T;return{c(){e=w("p"),t=w("b"),i=he(s),r=he(" people have looped today."),o=N(),a=w("p"),l=he("Average Time: 🔴 "),u=he(c),h=he(" 🔴"),d=N(),f=w("p"),p=he("High Score: 🔴 "),E=he(m),T=he(" 🔴"),this.h()},l(y){e=I(y,"P",{class:!0,style:!0});var S=V(e);t=I(S,"B",{});var x=V(t);i=de(x,s),x.forEach(_),r=de(S," people have looped today."),S.forEach(_),o=P(y),a=I(y,"P",{class:!0,style:!0});var D=V(a);l=de(D,"Average Time: 🔴 "),u=de(D,c),h=de(D," 🔴"),D.forEach(_),d=P(y),f=I(y,"P",{class:!0});var U=V(f);p=de(U,"High Score: 🔴 "),E=de(U,m),T=de(U," 🔴"),U.forEach(_),this.h()},h(){k(e,"class","large-modal-text"),Xe(e,"padding-top","10px"),k(a,"class","large-modal-text"),Xe(a,"padding-top","10px"),k(f,"class","large-modal-text")},m(y,S){b(y,e,S),v(e,t),v(t,i),v(e,r),b(y,o,S),b(y,a,S),v(a,l),v(a,u),v(a,h),b(y,d,S),b(y,f,S),v(f,p),v(f,E),v(f,T)},p(y,S){S&1&&s!==(s=y[0].count+"")&&Fe(i,s),S&1&&c!==(c=y[0].averageTime+"")&&Fe(u,c),S&1&&m!==(m=y[0].minTime+"")&&Fe(E,m)},d(y){y&&(_(e),_(o),_(a),_(d),_(f))}}}function fy(n){let e,t="Stats not availible yet today";return{c(){e=w("p"),e.textContent=t},l(s){e=I(s,"P",{"data-svelte-h":!0}),Y(e)!=="svelte-3f4ohi"&&(e.textContent=t)},m(s,i){b(s,e,i)},p:ue,d(s){s&&_(e)}}}function py(n){let e;function t(r,o){return r[0]=="NOREF"?fy:r[0]?dy:hy}let s=t(n),i=s(n);return{c(){i.c(),e=Gr()},l(r){i.l(r),e=Gr()},m(r,o){i.m(r,o),b(r,e,o)},p(r,[o]){s===(s=t(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:ue,o:ue,d(r){r&&_(e),i.d(r)}}}function _y(){const n=new Date,e={year:"numeric",month:"2-digit",day:"2-digit"};return n.toLocaleDateString("en-US",e).replace(/\//g,"-")}function my(n,e,t){let{globalStats:s}=e;ba(async()=>{s||i()});function i(){t(0,s=r().then(o=>{t(0,s=o)}).catch(o=>{console.error("Error:",o)}))}async function r(){try{return await Dr("Stats/"+_y())}catch{return null}}return n.$$set=o=>{"globalStats"in o&&t(0,s=o.globalStats)},[s]}class _u extends Tt{constructor(e){super(),St(this,e,my,py,bt,{globalStats:0})}}function ya(n,e,t){const s=n.slice();return s[33]=e[t],s[35]=t,s}function wa(n,e,t){const s=n.slice();return s[33]=e[t],s[35]=t,s}function gy(n){let e,t="Loading Game...";return{c(){e=w("p"),e.textContent=t},l(s){e=I(s,"P",{"data-svelte-h":!0}),Y(e)!=="svelte-kk77ic"&&(e.textContent=t)},m(s,i){b(s,e,i)},p:ue,d(s){s&&_(e)}}}function vy(n){let e,t,s,i=[],r=new Map,o,a,l='<i class="fa-solid fa-eraser"></i>',c,u,h='<i class="fa-solid fa-shuffle"></i>',d,f,p='<i class="fa-solid fa-delete-left"></i>',m,E,T="Enter",y,S,x,D,U,j,$=Jt(n[4]),O=[];for(let A=0;A<$.length;A+=1)O[A]=Ia(wa(n,$,A));let te=Jt(n[5]);const ne=A=>A[35];for(let A=0;A<te.length;A+=1){let H=ya(n,te,A),g=ne(H);r.set(g,i[A]=Ea(g,H))}return{c(){e=w("div");for(let A=0;A<O.length;A+=1)O[A].c();t=N(),s=w("div");for(let A=0;A<i.length;A+=1)i[A].c();o=N(),a=w("div"),a.innerHTML=l,c=N(),u=w("div"),u.innerHTML=h,d=N(),f=w("div"),f.innerHTML=p,m=N(),E=w("div"),E.textContent=T,y=N(),S=w("p"),x=he("Puzzle for "),D=he(n[10]),this.h()},l(A){e=I(A,"DIV",{class:!0});var H=V(e);for(let Z=0;Z<O.length;Z+=1)O[Z].l(H);H.forEach(_),t=P(A),s=I(A,"DIV",{class:!0});var g=V(s);for(let Z=0;Z<i.length;Z+=1)i[Z].l(g);o=P(g),a=I(g,"DIV",{class:!0,"data-svelte-h":!0}),Y(a)!=="svelte-pcdrzy"&&(a.innerHTML=l),c=P(g),u=I(g,"DIV",{class:!0,"data-svelte-h":!0}),Y(u)!=="svelte-1nazuqy"&&(u.innerHTML=h),d=P(g),f=I(g,"DIV",{class:!0,"data-svelte-h":!0}),Y(f)!=="svelte-1lzlrm1"&&(f.innerHTML=p),m=P(g),E=I(g,"DIV",{class:!0,"data-svelte-h":!0}),Y(E)!=="svelte-10umx21"&&(E.textContent=T),g.forEach(_),y=P(A),S=I(A,"P",{class:!0});var q=V(S);x=de(q,"Puzzle for "),D=de(q,n[10]),q.forEach(_),this.h()},h(){k(e,"class","circle-container"),k(a,"class","key"),k(u,"class","key"),k(f,"class","key"),k(E,"class","key enter-key"),k(s,"class","keyboard"),k(S,"class","date")},m(A,H){b(A,e,H);for(let g=0;g<O.length;g+=1)O[g]&&O[g].m(e,null);b(A,t,H),b(A,s,H);for(let g=0;g<i.length;g+=1)i[g]&&i[g].m(s,null);v(s,o),v(s,a),v(s,c),v(s,u),v(s,d),v(s,f),v(s,m),v(s,E),b(A,y,H),b(A,S,H),v(S,x),v(S,D),U||(j=[Ee(a,"click",n[16]),Ee(u,"click",n[17]),Ee(f,"click",n[18]),Ee(E,"click",n[15])],U=!0)},p(A,H){if(H[0]&4112){$=Jt(A[4]);let g;for(g=0;g<$.length;g+=1){const q=wa(A,$,g);O[g]?O[g].p(q,H):(O[g]=Ia(q),O[g].c(),O[g].m(e,null))}for(;g<O.length;g+=1)O[g].d(1);O.length=$.length}H[0]&18464&&(te=Jt(A[5]),i=Ra(i,H,ne,1,A,te,r,s,Ou,Ea,o,ya)),H[0]&1024&&Fe(D,A[10])},d(A){A&&(_(e),_(t),_(s),_(y),_(S)),ku(O,A);for(let H=0;H<i.length;H+=1)i[H].d();U=!1,zn(j)}}}function Ia(n){let e,t=(n[33]==""?"":n[33])+"",s,i,r;return{c(){e=w("div"),s=he(t),i=N(),this.h()},l(o){e=I(o,"DIV",{class:!0,style:!0});var a=V(e);s=de(a,t),i=P(a),a.forEach(_),this.h()},h(){k(e,"class","circle"),k(e,"style",r=`
              left: calc(38% + ${Math.cos(n[35]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(n[35]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
          `),Sn(e,"filled",n[33]!=""),Sn(e,"shared",n[12].includes(n[35]))},m(o,a){b(o,e,a),v(e,s),v(e,i)},p(o,a){a[0]&16&&t!==(t=(o[33]==""?"":o[33])+"")&&Fe(s,t),a[0]&16&&r!==(r=`
              left: calc(38% + ${Math.cos(o[35]/o[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(o[35]/o[4].length*2*Math.PI-Math.PI/2)*100}px);
          `)&&k(e,"style",r),a[0]&16&&Sn(e,"filled",o[33]!="")},d(o){o&&_(e)}}}function Ea(n,e){let t,s=e[33]+"",i,r,o,a;function l(){return e[26](e[33],e[35])}return{key:n,first:null,c(){t=w("div"),i=he(s),r=N(),this.h()},l(c){t=I(c,"DIV",{class:!0});var u=V(t);i=de(u,s),r=P(u),u.forEach(_),this.h()},h(){k(t,"class","key"),Sn(t,"disabled",e[11](e[35])),this.first=t},m(c,u){b(c,t,u),v(t,i),v(t,r),o||(a=Ee(t,"click",l),o=!0)},p(c,u){e=c,u[0]&32&&s!==(s=e[33]+"")&&Fe(i,s),u[0]&2080&&Sn(t,"disabled",e[11](e[35]))},d(c){c&&_(t),o=!1,a()}}}function yy(n){let e,t='<span style="font-size:30px;padding-right:5px;">🥉</span> <div><p class="small-modal-text">Oooof.</p> <p class="small-modal-text">You&#39;re over today&#39;s average - try for gold tomorrow</p></div>';return{c(){e=w("div"),e.innerHTML=t,this.h()},l(s){e=I(s,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1dnxwdz"&&(e.innerHTML=t),this.h()},h(){k(e,"class","flex-container")},m(s,i){b(s,e,i)},d(s){s&&_(e)}}}function wy(n){let e,t='<span style="font-size:30px;padding-right:5px;">🥇</span> <div><p class="small-modal-text">Congratulations speedster.</p> <p class="small-modal-text">You&#39;re under today&#39;s average - very clever.</p></div>';return{c(){e=w("div"),e.innerHTML=t,this.h()},l(s){e=I(s,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-s6v4wd"&&(e.innerHTML=t),this.h()},h(){k(e,"class","flex-container")},m(s,i){b(s,e,i)},d(s){s&&_(e)}}}function Iy(n){let e,t='<span style="font-size:30px;padding-right:5px;">🙀</span> <div><p class="small-modal-text">New High Score!</p> <p class="small-modal-text">You&#39;re officialy the fastest looper today!</p></div>';return{c(){e=w("div"),e.innerHTML=t,this.h()},l(s){e=I(s,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1mo40wc"&&(e.innerHTML=t),this.h()},h(){k(e,"class","flex-container")},m(s,i){b(s,e,i)},d(s){s&&_(e)}}}function Ey(n){let e,t="Solved in",s,i,r,o,a,l,c,u="Global Stats",h,d,f,p,m,E,T,y,S,x,D,U,j,$,O="Share",te,ne,A,H,g;p=new _u({props:{globalStats:n[9]}});function q(R,W){return R[9]&&R[9].isHighScore?Iy:R[9]&&R[9].isUnderAverage?wy:yy}let Z=q(n),oe=Z(n);return{c(){e=w("p"),e.textContent=t,s=N(),i=w("p"),r=he(n[7]),o=N(),a=w("hr"),l=N(),c=w("span"),c.textContent=u,h=N(),d=w("br"),f=N(),Se(p.$$.fragment),m=N(),E=w("hr"),T=N(),oe.c(),y=N(),S=w("hr"),x=N(),D=w("div"),U=w("div"),j=N(),$=w("button"),$.textContent=O,te=N(),ne=w("div"),this.h()},l(R){e=I(R,"P",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1do05u2"&&(e.textContent=t),s=P(R),i=I(R,"P",{class:!0});var W=V(i);r=de(W,n[7]),W.forEach(_),o=P(R),a=I(R,"HR",{}),l=P(R),c=I(R,"SPAN",{class:!0,"data-svelte-h":!0}),Y(c)!=="svelte-eapto"&&(c.textContent=u),h=P(R),d=I(R,"BR",{}),f=P(R),ke(p.$$.fragment,R),m=P(R),E=I(R,"HR",{}),T=P(R),oe.l(R),y=P(R),S=I(R,"HR",{}),x=P(R),D=I(R,"DIV",{class:!0});var L=V(D);U=I(L,"DIV",{class:!0}),V(U).forEach(_),j=P(L),$=I(L,"BUTTON",{class:!0,"data-svelte-h":!0}),Y($)!=="svelte-1urjot1"&&($.textContent=O),te=P(L),ne=I(L,"DIV",{class:!0}),V(ne).forEach(_),L.forEach(_),this.h()},h(){k(e,"class","small-header"),k(i,"class","large-header"),k(c,"class","small-header"),k(U,"class","spacer"),k($,"class","share-button"),k(ne,"class","spacer"),k(D,"class","flex-container")},m(R,W){b(R,e,W),b(R,s,W),b(R,i,W),v(i,r),b(R,o,W),b(R,a,W),b(R,l,W),b(R,c,W),b(R,h,W),b(R,d,W),b(R,f,W),Re(p,R,W),b(R,m,W),b(R,E,W),b(R,T,W),oe.m(R,W),b(R,y,W),b(R,S,W),b(R,x,W),b(R,D,W),v(D,U),v(D,j),v(D,$),v(D,te),v(D,ne),A=!0,H||(g=Ee($,"click",n[19]),H=!0)},p(R,W){(!A||W[0]&128)&&Fe(r,R[7]);const L={};W[0]&512&&(L.globalStats=R[9]),p.$set(L),Z!==(Z=q(R))&&(oe.d(1),oe=Z(R),oe&&(oe.c(),oe.m(y.parentNode,y)))},i(R){A||(pe(p.$$.fragment,R),A=!0)},o(R){_e(p.$$.fragment,R),A=!1},d(R){R&&(_(e),_(s),_(i),_(o),_(a),_(l),_(c),_(h),_(d),_(f),_(m),_(E),_(T),_(y),_(S),_(x),_(D)),Ae(p,R),oe.d(R),H=!1,g()}}}function Cy(n){let e,t,s,i;return s=new pu({}),{c(){e=w("hr"),t=N(),Se(s.$$.fragment)},l(r){e=I(r,"HR",{}),t=P(r),ke(s.$$.fragment,r)},m(r,o){b(r,e,o),b(r,t,o),Re(s,r,o),i=!0},p:ue,i(r){i||(pe(s.$$.fragment,r),i=!0)},o(r){_e(s.$$.fragment,r),i=!1},d(r){r&&(_(e),_(t)),Ae(s,r)}}}function by(n){let e,t='<span class="styled-header">How To Play</span>';return{c(){e=w("h2"),e.innerHTML=t,this.h()},l(s){e=I(s,"H2",{slot:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1kct8zk"&&(e.innerHTML=t),this.h()},h(){k(e,"slot","header")},m(s,i){b(s,e,i)},p:ue,d(s){s&&_(e)}}}function Ty(n){let e,t,s,i,r,o,a="Resume",l,c,u,h;return{c(){e=w("hr"),t=N(),s=w("div"),i=w("div"),r=N(),o=w("button"),o.textContent=a,l=N(),c=w("div"),this.h()},l(d){e=I(d,"HR",{}),t=P(d),s=I(d,"DIV",{class:!0});var f=V(s);i=I(f,"DIV",{class:!0}),V(i).forEach(_),r=P(f),o=I(f,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(o)!=="svelte-o41kx2"&&(o.textContent=a),l=P(f),c=I(f,"DIV",{class:!0}),V(c).forEach(_),f.forEach(_),this.h()},h(){k(i,"class","spacer"),k(o,"class","share-button"),k(c,"class","spacer"),k(s,"class","flex-container")},m(d,f){b(d,e,f),b(d,t,f),b(d,s,f),v(s,i),v(s,r),v(s,o),v(s,l),v(s,c),u||(h=Ee(o,"click",n[21]),u=!0)},p:ue,d(d){d&&(_(e),_(t),_(s)),u=!1,h()}}}function Sy(n){let e,t='<span class="styled-header">Paused</span>';return{c(){e=w("h2"),e.innerHTML=t,this.h()},l(s){e=I(s,"H2",{slot:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1ught0z"&&(e.innerHTML=t),this.h()},h(){k(e,"slot","header")},m(s,i){b(s,e,i)},p:ue,d(s){s&&_(e)}}}function ky(n){let e,t,s,i,r="LetterLoop",o,a,l,c,u,h,d,f,p='<i class="fa-regular fa-circle-question"></i> <p class="how-to-play">How to play</p>',m,E,T,y,S,x,D,U,j,$,O,te='<i class="fa-solid fa-pause"></i>',ne,A,H,g,q,Z,oe,R,W,L,ae,ie,ct;y=new Na({});function ut(M){n[25](M)}let kt={};n[7]!==void 0&&(kt.elapsedSeconds=n[7]),U=new ay({props:kt}),n[24](U),Je.push(()=>Ot(U,"elapsedSeconds",ut));function yn(M,Q){return M[3].length>0?vy:gy}let Yt=yn(n),Te=Yt(n);function J(M){n[27](M)}let ge={modalType:"end",$$slots:{default:[Ey]},$$scope:{ctx:n}};n[0]!==void 0&&(ge.showModal=n[0]),H=new kn({props:ge}),Je.push(()=>Ot(H,"showModal",J));function ce(M){n[28](M)}let Ke={modalType:"help",$$slots:{header:[by],default:[Cy]},$$scope:{ctx:n}};n[1]!==void 0&&(Ke.showModal=n[1]),Z=new kn({props:Ke}),Je.push(()=>Ot(Z,"showModal",ce));function ts(M){n[29](M)}let wn={hide_close:!0,modalType:"pause",$$slots:{header:[Sy],default:[Ty]},$$scope:{ctx:n}};return n[2]!==void 0&&(wn.showModal=n[2]),W=new kn({props:wn}),Je.push(()=>Ot(W,"showModal",ts)),{c(){e=w("main"),t=w("div"),s=w("div"),i=w("p"),i.textContent=r,o=N(),a=w("small"),l=he("(public beta) · Edited by "),c=he(n[8]),u=N(),h=w("div"),d=N(),f=w("div"),f.innerHTML=p,m=N(),E=w("div"),T=N(),Se(y.$$.fragment),S=N(),x=w("div"),D=w("div"),Se(U.$$.fragment),$=N(),O=w("div"),O.innerHTML=te,ne=N(),Te.c(),A=N(),Se(H.$$.fragment),q=N(),Se(Z.$$.fragment),R=N(),Se(W.$$.fragment),this.h()},l(M){e=I(M,"MAIN",{});var Q=V(e);t=I(Q,"DIV",{class:!0});var Ye=V(t);s=I(Ye,"DIV",{class:!0});var ht=V(s);i=I(ht,"P",{class:!0,"data-svelte-h":!0}),Y(i)!=="svelte-1qmyjs9"&&(i.textContent=r),o=P(ht),a=I(ht,"SMALL",{style:!0});var Rt=V(a);l=de(Rt,"(public beta) · Edited by "),c=de(Rt,n[8]),Rt.forEach(_),ht.forEach(_),u=P(Ye),h=I(Ye,"DIV",{class:!0}),V(h).forEach(_),d=P(Ye),f=I(Ye,"DIV",{class:!0,"data-svelte-h":!0}),Y(f)!=="svelte-1i75e1h"&&(f.innerHTML=p),Ye.forEach(_),m=P(Q),E=I(Q,"DIV",{class:!0}),V(E).forEach(_),T=P(Q),ke(y.$$.fragment,Q),S=P(Q),x=I(Q,"DIV",{class:!0});var dt=V(x);D=I(dt,"DIV",{class:!0});var $r=V(D);ke(U.$$.fragment,$r),$r.forEach(_),$=P(dt),O=I(dt,"DIV",{"data-svelte-h":!0}),Y(O)!=="svelte-1mqs5ls"&&(O.innerHTML=te),dt.forEach(_),ne=P(Q),Te.l(Q),Q.forEach(_),A=P(M),ke(H.$$.fragment,M),q=P(M),ke(Z.$$.fragment,M),R=P(M),ke(W.$$.fragment,M),this.h()},h(){k(i,"class","title"),Xe(a,"color","rgb(46, 46, 46)"),k(s,"class","title-container "),k(h,"class","spacer"),k(f,"class","help-container"),k(t,"class","nav-flex-container"),k(E,"class","divider"),k(D,"class","timer-container"),k(x,"class","flex-container")},m(M,Q){b(M,e,Q),v(e,t),v(t,s),v(s,i),v(s,o),v(s,a),v(a,l),v(a,c),v(t,u),v(t,h),v(t,d),v(t,f),v(e,m),v(e,E),v(e,T),Re(y,e,null),v(e,S),v(e,x),v(x,D),Re(U,D,null),v(x,$),v(x,O),v(e,ne),Te.m(e,null),b(M,A,Q),Re(H,M,Q),b(M,q,Q),Re(Z,M,Q),b(M,R,Q),Re(W,M,Q),ae=!0,ie||(ct=[Ee(window,"keydown",Su(n[13])),Ee(f,"click",n[23]),Ee(O,"click",n[20])],ie=!0)},p(M,Q){(!ae||Q[0]&256)&&Fe(c,M[8]);const Ye={};!j&&Q[0]&128&&(j=!0,Ye.elapsedSeconds=M[7],Pt(()=>j=!1)),U.$set(Ye),Yt===(Yt=yn(M))&&Te?Te.p(M,Q):(Te.d(1),Te=Yt(M),Te&&(Te.c(),Te.m(e,null)));const ht={};Q[0]&640|Q[1]&64&&(ht.$$scope={dirty:Q,ctx:M}),!g&&Q[0]&1&&(g=!0,ht.showModal=M[0],Pt(()=>g=!1)),H.$set(ht);const Rt={};Q[1]&64&&(Rt.$$scope={dirty:Q,ctx:M}),!oe&&Q[0]&2&&(oe=!0,Rt.showModal=M[1],Pt(()=>oe=!1)),Z.$set(Rt);const dt={};Q[1]&64&&(dt.$$scope={dirty:Q,ctx:M}),!L&&Q[0]&4&&(L=!0,dt.showModal=M[2],Pt(()=>L=!1)),W.$set(dt)},i(M){ae||(pe(y.$$.fragment,M),pe(U.$$.fragment,M),pe(H.$$.fragment,M),pe(Z.$$.fragment,M),pe(W.$$.fragment,M),ae=!0)},o(M){_e(y.$$.fragment,M),_e(U.$$.fragment,M),_e(H.$$.fragment,M),_e(Z.$$.fragment,M),_e(W.$$.fragment,M),ae=!1},d(M){M&&(_(e),_(A),_(q),_(R)),Ae(y),n[24](null),Ae(U),Te.d(),Ae(H,M),Ae(Z,M),Ae(W,M),ie=!1,zn(ct)}}}function Ca(n){return n.split("").sort(()=>Math.random()-.5).join("")}function Ry(n,e,t){let s,i,r=!1,o=!1,a=!1,l=[];l=l.map(L=>L.toLowerCase());let c,u=Array(8).fill(""),h=[],d,f=0,p=[0,4],m,E=0,T="---",y;ba(async()=>{const L=ny(Sl);fu(L,"screen_view",{firebase_screen:"game_board_view",firebase_screen_class:"game_board_controller"});const ae=new Date,ie={year:"numeric",month:"2-digit",day:"2-digit"},ct=ae.toLocaleDateString("en-US",ie).replace(/\//g,"-");try{if(await Ap()){const ut=await Dr("solutions/"+ct),kt=Object.values(ut);t(8,T=kt[0]),t(3,l=kt[1]),c=l[0],t(5,d=Ca(c)),m.start()}}catch(ut){console.error("Error fetching data from Firebase:",ut)}});function S(L,ae){for(let ie=0;ie<L.length;ie++)if(L[ie]==ae&&!s(ie))return ie;return-1}function x(L){const ae=L.key.toLowerCase(),ie=S(d,ae);L.keyCode===13?U():L.keyCode===8?O():ie!==-1&&!s(ie)&&D(ae,ie)}function D(L,ae){f<u.length&&!s(ae)&&(t(4,u[f]=L,u),f+=1,t(22,h=[...h,ae]))}function U(){const L=u.join(""),ae=u.filter(ie=>ie!=="").length;l.includes(L)?(t(0,r=!0),m.stop(),xg(E).then(ie=>{t(9,y=ie)}).catch(ie=>{console.error("Error:",ie)})):ae!=8?Tn.default("You Must fill in every letter",1e3):Tn.default("Incorrect",1e3)}function j(){t(4,u=Array(8).fill("")),f=0,t(22,h=[])}function $(){t(5,d=Ca(c)),j()}function O(){f>0&&(t(4,u[f-1]="",u),f-=1,t(22,h=h.slice(0,-1)))}function te(){let L=`I completed the LetterLoop in: 
🔴`+E+"🔴";navigator.clipboard.writeText(L).then(()=>{Tn.default("Copied Text!",1e3)}).catch(ae=>{console.error("Error copying text to clipboard:",ae),Tn.default("Error",1e3)})}function ne(){m.stop(),t(2,a=!0)}function A(){m.start(),t(2,a=!1)}const H=()=>t(1,o=!0);function g(L){Je[L?"unshift":"push"](()=>{m=L,t(6,m)})}function q(L){E=L,t(7,E)}const Z=(L,ae)=>D(L,ae);function oe(L){r=L,t(0,r)}function R(L){o=L,t(1,o)}function W(L){a=L,t(2,a)}return n.$$.update=()=>{n.$$.dirty[0]&4194304&&t(11,s=L=>h.includes(L))},t(10,i=new Date().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})),[r,o,a,l,u,d,m,E,T,y,i,s,p,x,D,U,j,$,O,te,ne,A,h,H,g,q,Z,oe,R,W]}class Ay extends Tt{constructor(e){super(),St(this,e,Ry,ky,bt,{},null,[-1,-1])}}const Ny=""+new URL("../assets/logo.R4y_qj9s.png",import.meta.url).href;function Py(n){let e,t,s,i;return s=new pu({}),{c(){e=w("hr"),t=N(),Se(s.$$.fragment)},l(r){e=I(r,"HR",{}),t=P(r),ke(s.$$.fragment,r)},m(r,o){b(r,e,o),b(r,t,o),Re(s,r,o),i=!0},p:ue,i(r){i||(pe(s.$$.fragment,r),i=!0)},o(r){_e(s.$$.fragment,r),i=!1},d(r){r&&(_(e),_(t)),Ae(s,r)}}}function Oy(n){let e,t='<span class="styled-header">How To Play</span>';return{c(){e=w("h2"),e.innerHTML=t,this.h()},l(s){e=I(s,"H2",{slot:!0,"data-svelte-h":!0}),Y(e)!=="svelte-r01ry8"&&(e.innerHTML=t),this.h()},h(){k(e,"slot","header")},m(s,i){b(s,e,i)},p:ue,d(s){s&&_(e)}}}function Dy(n){let e,t,s,i;return s=new _u({}),{c(){e=w("hr"),t=N(),Se(s.$$.fragment)},l(r){e=I(r,"HR",{}),t=P(r),ke(s.$$.fragment,r)},m(r,o){b(r,e,o),b(r,t,o),Re(s,r,o),i=!0},p:ue,i(r){i||(pe(s.$$.fragment,r),i=!0)},o(r){_e(s.$$.fragment,r),i=!1},d(r){r&&(_(e),_(t)),Ae(s,r)}}}function My(n){let e,t='<span class="styled-header">Today&#39;s Stats</span>';return{c(){e=w("h2"),e.innerHTML=t,this.h()},l(s){e=I(s,"H2",{slot:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1gfnj8z"&&(e.innerHTML=t),this.h()},h(){k(e,"slot","header")},m(s,i){b(s,e,i)},p:ue,d(s){s&&_(e)}}}function Ly(n){let e,t,s,i,r,o,a="The LetterLoop",l,c,u="Two 5-letter words, two shared letters, one loop",h,d,f,p="Play",m,E,T,y="How to play",S,x,D,U="Stats",j,$,O,te,ne,A="For those who love morning games",H,g,q=`<a href="/Privacy-Policy">Privacy Policy</a>
        |
        <a href="/Terms">terms and conditions</a>`,Z,oe,R,W,L,ae,ie,ct,ut;function kt(J){n[7](J)}let yn={modalType:"help",$$slots:{header:[Oy],default:[Py]},$$scope:{ctx:n}};n[0]!==void 0&&(yn.showModal=n[0]),oe=new kn({props:yn}),Je.push(()=>Ot(oe,"showModal",kt));function Yt(J){n[8](J)}let Te={modalType:"stats",$$slots:{header:[My],default:[Dy]},$$scope:{ctx:n}};return n[1]!==void 0&&(Te.showModal=n[1]),L=new kn({props:Te}),Je.push(()=>Ot(L,"showModal",Yt)),{c(){e=w("div"),t=w("div"),s=w("img"),r=N(),o=w("p"),o.textContent=a,l=N(),c=w("p"),c.textContent=u,h=N(),d=w("div"),f=w("button"),f.textContent=p,m=N(),E=w("div"),T=w("button"),T.textContent=y,S=N(),x=w("div"),D=w("button"),D.textContent=U,j=N(),$=w("p"),O=he(n[2]),te=N(),ne=w("i"),ne.textContent=A,H=N(),g=w("div"),g.innerHTML=q,Z=N(),Se(oe.$$.fragment),W=N(),Se(L.$$.fragment),this.h()},l(J){e=I(J,"DIV",{class:!0});var ge=V(e);t=I(ge,"DIV",{class:!0});var ce=V(t);s=I(ce,"IMG",{class:!0,src:!0,alt:!0}),r=P(ce),o=I(ce,"P",{class:!0,"data-svelte-h":!0}),Y(o)!=="svelte-1k2sjsl"&&(o.textContent=a),l=P(ce),c=I(ce,"P",{class:!0,"data-svelte-h":!0}),Y(c)!=="svelte-j0rk1k"&&(c.textContent=u),h=P(ce),d=I(ce,"DIV",{});var Ke=V(d);f=I(Ke,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(f)!=="svelte-1h0esab"&&(f.textContent=p),Ke.forEach(_),m=P(ce),E=I(ce,"DIV",{});var ts=V(E);T=I(ts,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(T)!=="svelte-lan869"&&(T.textContent=y),ts.forEach(_),S=P(ce),x=I(ce,"DIV",{});var wn=V(x);D=I(wn,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(D)!=="svelte-136ie3n"&&(D.textContent=U),wn.forEach(_),j=P(ce),$=I(ce,"P",{class:!0});var M=V($);O=de(M,n[2]),M.forEach(_),te=P(ce),ne=I(ce,"I",{class:!0,"data-svelte-h":!0}),Y(ne)!=="svelte-1ec062z"&&(ne.textContent=A),H=P(ce),g=I(ce,"DIV",{style:!0,"data-svelte-h":!0}),Y(g)!=="svelte-zj8w2l"&&(g.innerHTML=q),ce.forEach(_),ge.forEach(_),Z=P(J),ke(oe.$$.fragment,J),W=P(J),ke(L.$$.fragment,J),this.h()},h(){k(s,"class","logo svelte-1fbxowr"),_i(s.src,i=Ny)||k(s,"src",i),k(s,"alt","Our Little Loop Logo"),k(o,"class","menu-header svelte-1fbxowr"),k(c,"class","menu-sub-header svelte-1fbxowr"),k(f,"class","menu-btn svelte-1fbxowr"),k(T,"class","menu-btn no-fill svelte-1fbxowr"),k(D,"class","menu-btn no-fill svelte-1fbxowr"),k($,"class","menu-date svelte-1fbxowr"),k(ne,"class","menu-small-text svelte-1fbxowr"),Xe(g,"padding-top","10px"),k(t,"class","content svelte-1fbxowr"),k(e,"class","page svelte-1fbxowr")},m(J,ge){b(J,e,ge),v(e,t),v(t,s),v(t,r),v(t,o),v(t,l),v(t,c),v(t,h),v(t,d),v(d,f),v(t,m),v(t,E),v(E,T),v(t,S),v(t,x),v(x,D),v(t,j),v(t,$),v($,O),v(t,te),v(t,ne),v(t,H),v(t,g),b(J,Z,ge),Re(oe,J,ge),b(J,W,ge),Re(L,J,ge),ie=!0,ct||(ut=[Ee(f,"click",n[3]),Ee(T,"click",n[5]),Ee(D,"click",n[6])],ct=!0)},p(J,[ge]){const ce={};ge&512&&(ce.$$scope={dirty:ge,ctx:J}),!R&&ge&1&&(R=!0,ce.showModal=J[0],Pt(()=>R=!1)),oe.$set(ce);const Ke={};ge&512&&(Ke.$$scope={dirty:ge,ctx:J}),!ae&&ge&2&&(ae=!0,Ke.showModal=J[1],Pt(()=>ae=!1)),L.$set(Ke)},i(J){ie||(pe(oe.$$.fragment,J),pe(L.$$.fragment,J),ie=!0)},o(J){_e(oe.$$.fragment,J),_e(L.$$.fragment,J),ie=!1},d(J){J&&(_(e),_(Z),_(W)),Ae(oe,J),Ae(L,J),ct=!1,zn(ut)}}}function xy(n,e,t){let{gameHasStarted:s}=e,i=!1,r=!1,o=new Date().toLocaleDateString();function a(){t(4,s=!0)}const l=()=>t(0,i=!0),c=()=>t(1,r=!0);function u(d){i=d,t(0,i)}function h(d){r=d,t(1,r)}return n.$$set=d=>{"gameHasStarted"in d&&t(4,s=d.gameHasStarted)},[i,r,o,a,s,l,c,u,h]}class Fy extends Tt{constructor(e){super(),St(this,e,xy,Ly,bt,{gameHasStarted:4})}}function Uy(n){let e,t,s;function i(o){n[1](o)}let r={};return n[0]!==void 0&&(r.gameHasStarted=n[0]),e=new Fy({props:r}),Je.push(()=>Ot(e,"gameHasStarted",i)),{c(){Se(e.$$.fragment)},l(o){ke(e.$$.fragment,o)},m(o,a){Re(e,o,a),s=!0},p(o,a){const l={};!t&&a&1&&(t=!0,l.gameHasStarted=o[0],Pt(()=>t=!1)),e.$set(l)},i(o){s||(pe(e.$$.fragment,o),s=!0)},o(o){_e(e.$$.fragment,o),s=!1},d(o){Ae(e,o)}}}function $y(n){let e,t;return e=new Ay({}),{c(){Se(e.$$.fragment)},l(s){ke(e.$$.fragment,s)},m(s,i){Re(e,s,i),t=!0},p:ue,i(s){t||(pe(e.$$.fragment,s),t=!0)},o(s){_e(e.$$.fragment,s),t=!1},d(s){Ae(e,s)}}}function Hy(n){let e,t,s,i;const r=[$y,Uy],o=[];function a(l,c){return l[0]?0:1}return t=a(n),s=o[t]=r[t](n),{c(){e=w("main"),s.c()},l(l){e=I(l,"MAIN",{});var c=V(e);s.l(c),c.forEach(_)},m(l,c){b(l,e,c),o[t].m(e,null),i=!0},p(l,[c]){let u=t;t=a(l),t===u?o[t].p(l,c):(Ta(),_e(o[u],1,1,()=>{o[u]=null}),Sa(),s=o[t],s?s.p(l,c):(s=o[t]=r[t](l),s.c()),pe(s,1),s.m(e,null))},i(l){i||(pe(s),i=!0)},o(l){_e(s),i=!1},d(l){l&&_(e),o[t].d()}}}function Vy(n,e,t){let s=!1;function i(r){s=r,t(0,s)}return[s,i]}class zy extends Tt{constructor(e){super(),St(this,e,Vy,Hy,bt,{})}}export{zy as component,qy as universal};
