import{n as _e,j as mu,r as Ln,i as vu,z as Lr,a as Mt,c as Yn,h as yu,A as xr,e as Fr,u as Ur,g as $r,f as Vr,B as Iu,d as ut,C as oi,D as Bt,o as wu}from"../chunks/scheduler.CMvsSfs7.js";import{y as Eu,z as Cu,A as bu,B as Tu,n as fe,l as pe,S as Lt,i as xt,e as b,c as T,a as W,d as _,o as R,g as O,q as Ia,m as wa,t as me,s as x,b as ve,f as F,p as Wt,h as y,j as $e,C as Hr,u as Ne,v as Pe,w as Oe,D as ye,E as Su,F as ku,x as De,G as J,H as zt,I as Ru,J as Ea,K as gn}from"../chunks/index.DDDBvH_P.js";import{d as Au,w as ai,r as Nu}from"../chunks/index.DBtNhGCQ.js";function Pu(n,e,t,s){if(!e)return _e;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return _e;const{delay:r=0,duration:o=300,easing:a=mu,start:l=Eu()+r,end:c=l+o,tick:u=_e,css:h}=t(n,{from:e,to:i},s);let d=!0,f=!1,p;function I(){h&&(p=bu(n,0,1,o,r,a,h)),r||(f=!0)}function g(){h&&Tu(n,p),d=!1}return Cu(E=>{if(!f&&E>=l&&(f=!0),f&&E>=c&&(u(1,0),g()),!d)return!1;if(f){const U=E-l,A=0+1*a(U/o);u(A,1-A)}return!0}),I(),u(0,1),g}function Ou(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,Ca(n,i)}}function Ca(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function ht(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Du(n,e){n.d(1),e.delete(n.key)}function Mu(n,e){pe(n,1,1,()=>{e.delete(n.key)})}function Lu(n,e){n.f(),Mu(n,e)}function ba(n,e,t,s,i,r,o,a,l,c,u,h){let d=n.length,f=r.length,p=d;const I={};for(;p--;)I[n[p].key]=p;const g=[],E=new Map,U=new Map,A=[];for(p=f;p--;){const k=h(i,r,p),C=t(k);let w=o.get(C);w?s&&A.push(()=>w.p(k,e)):(w=c(C,k),w.c()),E.set(C,g[p]=w),C in I&&U.set(C,Math.abs(p-I[C]))}const S=new Set,V=new Set;function L(k){fe(k,1),k.m(a,u),o.set(k.key,k),u=k.first,f--}for(;d&&f;){const k=g[f-1],C=n[d-1],w=k.key,D=C.key;k===C?(u=k.first,d--,f--):E.has(D)?!o.has(w)||S.has(w)?L(k):V.has(D)?d--:U.get(w)>U.get(D)?(V.add(w),L(k)):(S.add(D),d--):(l(C,o),d--)}for(;d--;){const k=n[d];E.has(k.key)||l(k,o)}for(;f;)L(g[f-1]);return Ln(A),g}const xu=!0,Oy=Object.freeze(Object.defineProperty({__proto__:null,prerender:xu},Symbol.toStringTag,{value:"Module"}));function Ta(n){const e=n-1;return e*e*e+1}function Fu(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:h=f=>Math.sqrt(f)*120,easing:d=Ta}=s;return{delay:u,duration:vu(h)?h(Math.sqrt(l*l+c*c)):h,easing:d,css:(f,p)=>{const I=p*l,g=p*c,E=f+p*e.width/t.width,U=f+p*e.height/t.height;return`transform: ${r} translate(${I}px, ${g}px) scale(${E}, ${U});`}}}function Br(n,{delay:e=0,duration:t=400,easing:s=Ta,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o),[h,d]=Lr(i),[f,p]=Lr(r);return{delay:e,duration:t,easing:s,css:(I,g)=>`
			transform: ${c} translate(${(1-I)*h}${d}, ${(1-I)*f}${p});
			opacity: ${l-u*g}`}}function Uu(n){const e=ai([]);function t(r,o="default",a){e.update(l=>[...l,{id:$u(),type:o,message:r,timeout:a}])}const s=Au(e,(r,o)=>{if(o(r),r.length>0){const a=setTimeout(()=>{e.update(l=>(l.shift(),l))},r[0].timeout);return()=>{clearTimeout(a)}}}),{subscribe:i}=s;return{subscribe:i,send:t,default:(r,o)=>t(r,"default",o),danger:(r,o)=>t(r,"danger",o),warning:(r,o)=>t(r,"warning",o),info:(r,o)=>t(r,"info",o),success:(r,o)=>t(r,"success",o)}}function $u(){return"_"+Math.random().toString(36).substr(2,9)}const Qn=Uu();function Wr(n,e,t){const s=n.slice();return s[1]=e[t],s}function zr(n){let e,t;return{c(){e=b("i"),this.h()},l(s){e=T(s,"I",{class:!0}),W(e).forEach(_),this.h()},h(){R(e,"class",t=xr(n[1].icon)+" svelte-15ecllt")},m(s,i){O(s,e,i)},p(s,i){i&1&&t!==(t=xr(s[1].icon)+" svelte-15ecllt")&&R(e,"class",t)},d(s){s&&_(e)}}}function jr(n,e){let t,s,i=e[1].message+"",r,o,a,l,c,u=_e,h,d=e[1].icon&&zr(e);return{key:n,first:null,c(){t=b("div"),s=b("div"),r=me(i),o=x(),d&&d.c(),a=x(),this.h()},l(f){t=T(f,"DIV",{class:!0,style:!0});var p=W(t);s=T(p,"DIV",{class:!0});var I=W(s);r=ve(I,i),I.forEach(_),o=F(p),d&&d.l(p),a=F(p),p.forEach(_),this.h()},h(){R(s,"class","content svelte-15ecllt"),R(t,"class","toast svelte-15ecllt"),Wt(t,"background","#EBEBEB"),this.first=t},m(f,p){O(f,t,p),y(t,s),y(s,r),y(t,o),d&&d.m(t,null),y(t,a),h=!0},p(f,p){e=f,(!h||p&1)&&i!==(i=e[1].message+"")&&$e(r,i),e[1].icon?d?d.p(e,p):(d=zr(e),d.c(),d.m(t,a)):d&&(d.d(1),d=null)},r(){c=t.getBoundingClientRect()},f(){Ou(t),u(),Ca(t,c)},a(){u(),u=Pu(t,c,Fu,{})},i(f){h||(f&&yu(()=>{h&&(l||(l=Hr(t,Br,{y:30},!0)),l.run(1))}),h=!0)},o(f){f&&(l||(l=Hr(t,Br,{y:30},!1)),l.run(0)),h=!1},d(f){f&&_(t),d&&d.d(),f&&l&&l.end()}}}function Vu(n){let e,t=[],s=new Map,i,r=ht(n[0]);const o=a=>a[1].id;for(let a=0;a<r.length;a+=1){let l=Wr(n,r,a),c=o(l);s.set(c,t[a]=jr(c,l))}return{c(){e=b("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=T(a,"DIV",{class:!0});var l=W(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(_),this.h()},h(){R(e,"class","notifications svelte-15ecllt")},m(a,l){O(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);i=!0},p(a,[l]){if(l&1){r=ht(a[0]),Ia();for(let c=0;c<t.length;c+=1)t[c].r();t=ba(t,l,o,1,a,r,s,e,Lu,jr,null,Wr);for(let c=0;c<t.length;c+=1)t[c].a();wa()}},i(a){if(!i){for(let l=0;l<r.length;l+=1)fe(t[l]);i=!0}},o(a){for(let l=0;l<t.length;l+=1)pe(t[l]);i=!1},d(a){a&&_(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function Hu(n,e,t){let s;return Yn(n,Qn,i=>t(0,s=i)),[s]}class Sa extends Lt{constructor(e){super(),xt(this,e,Hu,Vu,Mt,{})}}const Bu=n=>({}),qr=n=>({});function Gr(n){let e,t,s;return{c(){e=b("i"),this.h()},l(i){e=T(i,"I",{class:!0}),W(e).forEach(_),this.h()},h(){R(e,"class","fa-solid fa-xmark svelte-kvu5ns")},m(i,r){O(i,e,r),t||(s=ye(e,"click",n[6]),t=!0)},p:_e,d(i){i&&_(e),t=!1,s()}}}function Wu(n){let e,t,s,i,r,o,a,l,c,u,h,d,f,p;s=new Sa({});const I=n[4].header,g=Fr(I,n,n[3],qr);let E=!n[1]&&Gr(n);const U=n[4].default,A=Fr(U,n,n[3],null);return{c(){e=b("dialog"),t=b("div"),Ne(s.$$.fragment),i=x(),r=b("div"),g&&g.c(),o=x(),a=b("div"),l=x(),E&&E.c(),c=x(),u=b("hr"),h=x(),A&&A.c(),this.h()},l(S){e=T(S,"DIALOG",{class:!0});var V=W(e);t=T(V,"DIV",{class:!0});var L=W(t);Pe(s.$$.fragment,L),i=F(L),r=T(L,"DIV",{class:!0});var k=W(r);g&&g.l(k),o=F(k),a=T(k,"DIV",{class:!0}),W(a).forEach(_),l=F(k),E&&E.l(k),k.forEach(_),c=F(L),u=T(L,"HR",{}),h=F(L),A&&A.l(L),L.forEach(_),V.forEach(_),this.h()},h(){R(a,"class","spacer svelte-kvu5ns"),R(r,"class","flex-container svelte-kvu5ns"),R(t,"class","svelte-kvu5ns"),R(e,"class","svelte-kvu5ns")},m(S,V){O(S,e,V),y(e,t),Oe(s,t,null),y(t,i),y(t,r),g&&g.m(r,null),y(r,o),y(r,a),y(r,l),E&&E.m(r,null),y(t,c),y(t,u),y(t,h),A&&A.m(t,null),n[7](e),d=!0,f||(p=[ye(t,"click",Su(n[5])),ye(e,"close",n[8]),ye(e,"click",ku(n[9]))],f=!0)},p(S,[V]){g&&g.p&&(!d||V&8)&&Ur(g,I,S,S[3],d?Vr(I,S[3],V,Bu):$r(S[3]),qr),S[1]?E&&(E.d(1),E=null):E?E.p(S,V):(E=Gr(S),E.c(),E.m(r,null)),A&&A.p&&(!d||V&8)&&Ur(A,U,S,S[3],d?Vr(U,S[3],V,null):$r(S[3]),null)},i(S){d||(fe(s.$$.fragment,S),fe(g,S),fe(A,S),d=!0)},o(S){pe(s.$$.fragment,S),pe(g,S),pe(A,S),d=!1},d(S){S&&_(e),De(s),g&&g.d(S),E&&E.d(),A&&A.d(S),n[7](null),f=!1,Ln(p)}}}function zu(n,e,t){let{$$slots:s={},$$scope:i}=e,{showModal:r}=e,{hide_close:o=!1}=e,a;function l(f){Iu.call(this,n,f)}const c=()=>a.close();function u(f){ut[f?"unshift":"push"](()=>{a=f,t(2,a)})}const h=()=>t(0,r=!1),d=()=>!o&&a.close();return n.$$set=f=>{"showModal"in f&&t(0,r=f.showModal),"hide_close"in f&&t(1,o=f.hide_close),"$$scope"in f&&t(3,i=f.$$scope)},n.$$.update=()=>{n.$$.dirty&5&&a&&(r?a.showModal():a.close()),n.$$.dirty&5&&a&&r===!1&&a.open&&a.close()},[r,o,a,i,s,l,c,u,h,d]}class Jn extends Lt{constructor(e){super(),xt(this,e,zu,Wu,Mt,{showModal:0,hide_close:1})}}var Kr={};/**
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
 */const ka={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const v=function(n,e){if(!n)throw rn(e)},rn=function(n){return new Error("Firebase Database ("+ka.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Ra=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ju=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ni={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ra(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ju(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new qu;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Aa=function(n){const e=Ra(n);return Ni.encodeByteArray(e,!0)},ns=function(n){return Aa(n).replace(/\./g,"")},ss=function(n){try{return Ni.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gu(n){return Na(void 0,n)}function Na(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ku(t)||(n[t]=Na(n[t],e[t]));return n}function Ku(n){return n!=="__proto__"}/**
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
 */const Qu=()=>Yu().__FIREBASE_DEFAULTS__,Ju=()=>{if(typeof process>"u"||typeof Kr>"u")return;const n=Kr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ss(n[1]);return e&&JSON.parse(e)},Pi=()=>{try{return Qu()||Ju()||Xu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pa=n=>{var e,t;return(t=(e=Pi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Zu=n=>{const e=Pa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Oa=()=>{var n;return(n=Pi())===null||n===void 0?void 0:n.config},Da=n=>{var e;return(e=Pi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ts{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function eh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ns(JSON.stringify(t)),ns(JSON.stringify(o)),""].join(".")}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Ma(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function La(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function th(){const n=Ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xa(){return ka.NODE_ADMIN===!0}function Fa(){try{return typeof indexedDB=="object"}catch{return!1}}function Ua(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function nh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const sh="FirebaseError";class We extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=sh,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ft.prototype.create)}}class Ft{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ih(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new We(i,a,s)}}function ih(n,e){return n.replace(rh,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const rh=/\{\$([^}]+)}/g;/**
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
 */function Cn(n){return JSON.parse(n)}function ue(n){return JSON.stringify(n)}/**
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
 */const $a=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Cn(ss(r[0])||""),t=Cn(ss(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},oh=function(n){const e=$a(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ah=function(n){const e=$a(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function et(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Zt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function li(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function is(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function bn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Yr(r)&&Yr(o)){if(!bn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Yr(n){return n!==null&&typeof n=="object"}/**
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
 */function on(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class lh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ch(n,e){const t=new uh(n,e);return t.subscribe.bind(t)}class uh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");hh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Ws),i.error===void 0&&(i.error=Ws),i.complete===void 0&&(i.complete=Ws);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ws(){}function Di(n,e){return`${n} failed: ${e} argument `}/**
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
 */const dh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,v(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ss=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Se(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yt="[DEFAULT]";/**
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
 */class mh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ts;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yh(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vh(n){return n===yt?void 0:n}function yh(n){return n.instantiationMode==="EAGER"}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const wh={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Eh=Q.INFO,Ch={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},bh=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ch[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ks{constructor(e){this.name=e,this._logLevel=Eh,this._logHandler=bh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Th=(n,e)=>e.some(t=>n instanceof t);let Jr,Xr;function Sh(){return Jr||(Jr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kh(){return Xr||(Xr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Va=new WeakMap,ci=new WeakMap,Ha=new WeakMap,zs=new WeakMap,Mi=new WeakMap;function Rh(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(dt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Va.set(t,n)}).catch(()=>{}),Mi.set(e,n),e}function Ah(n){if(ci.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ci.set(n,e)}let ui={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ci.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ha.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Nh(n){ui=n(ui)}function Ph(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(js(this),e,...t);return Ha.set(s,e.sort?e.sort():[e]),dt(s)}:kh().includes(n)?function(...e){return n.apply(js(this),e),dt(Va.get(this))}:function(...e){return dt(n.apply(js(this),e))}}function Oh(n){return typeof n=="function"?Ph(n):(n instanceof IDBTransaction&&Ah(n),Th(n,Sh())?new Proxy(n,ui):n)}function dt(n){if(n instanceof IDBRequest)return Rh(n);if(zs.has(n))return zs.get(n);const e=Oh(n);return e!==n&&(zs.set(n,e),Mi.set(e,n)),e}const js=n=>Mi.get(n);function Ba(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=dt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(dt(o.result),l.oldVersion,l.newVersion,dt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Dh=["get","getKey","getAll","getAllKeys","count"],Mh=["put","add","delete","clear"],qs=new Map;function Zr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qs.get(e))return qs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Mh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Dh.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return qs.set(e,r),r}Nh(n=>({...n,get:(e,t,s)=>Zr(e,t)||n.get(e,t,s),has:(e,t)=>!!Zr(e,t)||n.has(e,t)}));/**
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
 */class Lh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function xh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",eo="0.9.27";/**
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
 */const St=new ks("@firebase/app"),Fh="@firebase/app-compat",Uh="@firebase/analytics-compat",$h="@firebase/analytics",Vh="@firebase/app-check-compat",Hh="@firebase/app-check",Bh="@firebase/auth",Wh="@firebase/auth-compat",zh="@firebase/database",jh="@firebase/database-compat",qh="@firebase/functions",Gh="@firebase/functions-compat",Kh="@firebase/installations",Yh="@firebase/installations-compat",Qh="@firebase/messaging",Jh="@firebase/messaging-compat",Xh="@firebase/performance",Zh="@firebase/performance-compat",ed="@firebase/remote-config",td="@firebase/remote-config-compat",nd="@firebase/storage",sd="@firebase/storage-compat",id="@firebase/firestore",rd="@firebase/firestore-compat",od="firebase",ad="10.8.0";/**
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
 */const di="[DEFAULT]",ld={[hi]:"fire-core",[Fh]:"fire-core-compat",[$h]:"fire-analytics",[Uh]:"fire-analytics-compat",[Hh]:"fire-app-check",[Vh]:"fire-app-check-compat",[Bh]:"fire-auth",[Wh]:"fire-auth-compat",[zh]:"fire-rtdb",[jh]:"fire-rtdb-compat",[qh]:"fire-fn",[Gh]:"fire-fn-compat",[Kh]:"fire-iid",[Yh]:"fire-iid-compat",[Qh]:"fire-fcm",[Jh]:"fire-fcm-compat",[Xh]:"fire-perf",[Zh]:"fire-perf-compat",[ed]:"fire-rc",[td]:"fire-rc-compat",[nd]:"fire-gcs",[sd]:"fire-gcs-compat",[id]:"fire-fst",[rd]:"fire-fst-compat","fire-js":"fire-js",[od]:"fire-js-all"};/**
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
 */const rs=new Map,fi=new Map;function cd(n,e){try{n.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Be(n){const e=n.name;if(fi.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;fi.set(e,n);for(const t of rs.values())cd(t,n);return!0}function Ut(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ud={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new Ft("app","Firebase",ud);/**
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
 */class hd{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}/**
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
 */const an=ad;function Wa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:di,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ft.create("bad-app-name",{appName:String(i)});if(t||(t=Oa()),!t)throw ft.create("no-options");const r=rs.get(i);if(r){if(bn(t,r.options)&&bn(s,r.config))return r;throw ft.create("duplicate-app",{appName:i})}const o=new Ih(i);for(const l of fi.values())o.addComponent(l);const a=new hd(t,s,o);return rs.set(i,a),a}function Li(n=di){const e=rs.get(n);if(!e&&n===di&&Oa())return Wa();if(!e)throw ft.create("no-app",{appName:n});return e}function Re(n,e,t){var s;let i=(s=ld[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}Be(new Ue(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dd="firebase-heartbeat-database",fd=1,Tn="firebase-heartbeat-store";let Gs=null;function za(){return Gs||(Gs=Ba(dd,fd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Tn)}catch(t){console.warn(t)}}}}).catch(n=>{throw ft.create("idb-open",{originalErrorMessage:n.message})})),Gs}async function pd(n){try{const t=(await za()).transaction(Tn),s=await t.objectStore(Tn).get(ja(n));return await t.done,s}catch(e){if(e instanceof We)St.warn(e.message);else{const t=ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(t.message)}}}async function to(n,e){try{const s=(await za()).transaction(Tn,"readwrite");await s.objectStore(Tn).put(e,ja(n)),await s.done}catch(t){if(t instanceof We)St.warn(t.message);else{const s=ft.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});St.warn(s.message)}}}function ja(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _d=1024,gd=30*24*60*60*1e3;class md{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yd(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=no();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=no(),{heartbeatsToSend:s,unsentEntries:i}=vd(this._heartbeatsCache.heartbeats),r=ns(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function no(){return new Date().toISOString().substring(0,10)}function vd(n,e=_d){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),so(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),so(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class yd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fa()?Ua().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return to(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return to(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function so(n){return ns(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Id(n){Be(new Ue("platform-logger",e=>new Lh(e),"PRIVATE")),Be(new Ue("heartbeat",e=>new md(e),"PRIVATE")),Re(hi,eo,n),Re(hi,eo,"esm2017"),Re("fire-js","")}Id("");var wd="firebase",Ed="10.8.0";/**
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
 */Re(wd,Ed,"app");function xi(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function qa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cd=qa,Ga=new Ft("auth","Firebase",qa());/**
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
 */const os=new ks("@firebase/auth");function bd(n,...e){os.logLevel<=Q.WARN&&os.warn(`Auth (${an}): ${n}`,...e)}function Xn(n,...e){os.logLevel<=Q.ERROR&&os.error(`Auth (${an}): ${n}`,...e)}/**
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
 */function Qe(n,...e){throw Fi(n,...e)}function Ve(n,...e){return Fi(n,...e)}function Td(n,e,t){const s=Object.assign(Object.assign({},Cd()),{[e]:t});return new Ft("auth","Firebase",s).create(e,{appName:n.name})}function Fi(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ga.create(n,...e)}function H(n,e,...t){if(!n)throw Fi(e,...t)}function qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xn(e),new Error(e)}function Je(n,e){n||qe(e)}/**
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
 */function pi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Sd(){return io()==="http:"||io()==="https:"}function io(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function kd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sd()||Ma()||"connection"in navigator)?navigator.onLine:!0}function Rd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class xn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Je(t>e,"Short delay should be less than long delay!"),this.isMobile=Oi()||La()}get(){return kd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ui(n,e){Je(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ka{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Nd=new xn(3e4,6e4);function Rs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ln(n,e,t,s,i={}){return Ya(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=on(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Ka.fetch()(Ja(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ya(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ad),e);try{const i=new Pd(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw qn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw qn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw qn(n,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Td(n,u,c);Qe(n,u)}}catch(i){if(i instanceof We)throw i;Qe(n,"network-request-failed",{message:String(i)})}}async function Qa(n,e,t,s,i={}){const r=await ln(n,e,t,s,i);return"mfaPendingCredential"in r&&Qe(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Ja(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Ui(n.config,i):`${n.config.apiScheme}://${i}`}class Pd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ve(this.auth,"network-request-failed")),Nd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Ve(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function Od(n,e){return ln(n,"POST","/v1/accounts:delete",e)}async function Dd(n,e){return ln(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function mn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Md(n,e=!1){const t=Se(n),s=await t.getIdToken(e),i=$i(s);H(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:mn(Ks(i.auth_time)),issuedAtTime:mn(Ks(i.iat)),expirationTime:mn(Ks(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ks(n){return Number(n)*1e3}function $i(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Xn("JWT malformed, contained fewer than 3 sections"),null;try{const i=ss(t);return i?JSON.parse(i):(Xn("Failed to decode base64 JWT payload"),null)}catch(i){return Xn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ld(n){const e=$i(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Sn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof We&&xd(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function xd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mn(this.lastLoginAt),this.creationTime=mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function as(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Sn(n,Dd(t,{idToken:s}));H(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Vd(r.providerUserInfo):[],a=$d(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Xa(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Ud(n){const e=Se(n);await as(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $d(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Vd(n){return n.map(e=>{var{providerId:t}=e,s=xi(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Hd(n,e){const t=await Ya(n,{},async()=>{const s=on({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Ja(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ka.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Bd(n,e){return ln(n,"POST","/v2/accounts:revokeToken",Rs(n,e))}/**
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
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ld(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Hd(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new kn;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
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
 */function rt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=xi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Xa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Sn(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Md(this,e)}reload(){return Ud(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await as(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Sn(this,Od(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,l,c,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,g=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=t.createdAt)!==null&&c!==void 0?c:void 0,U=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:S,isAnonymous:V,providerData:L,stsTokenManager:k}=t;H(A&&k,e,"internal-error");const C=kn.fromJSON(this.name,k);H(typeof A=="string",e,"internal-error"),rt(h,e.name),rt(d,e.name),H(typeof S=="boolean",e,"internal-error"),H(typeof V=="boolean",e,"internal-error"),rt(f,e.name),rt(p,e.name),rt(I,e.name),rt(g,e.name),rt(E,e.name),rt(U,e.name);const w=new bt({uid:A,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:V,photoURL:p,phoneNumber:f,tenantId:I,stsTokenManager:C,createdAt:E,lastLoginAt:U});return L&&Array.isArray(L)&&(w.providerData=L.map(D=>Object.assign({},D))),g&&(w._redirectEventId=g),w}static async _fromIdTokenResponse(e,t,s=!1){const i=new kn;i.updateFromServerResponse(t);const r=new bt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await as(r),r}}/**
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
 */const ro=new Map;function Ge(n){Je(n instanceof Function,"Expected a class definition");let e=ro.get(n);return e?(Je(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ro.set(n,e),e)}/**
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
 */class Za{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Za.type="NONE";const oo=Za;/**
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
 */function Zn(n,e,t){return`firebase:${n}:${e}:${t}`}class Gt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Zn(this.userKey,i.apiKey,r),this.fullPersistenceKey=Zn("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Gt(Ge(oo),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ge(oo);const o=Zn(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=bt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Gt(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Gt(r,e,s))}}/**
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
 */function ao(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(el(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(il(e))return"Blackberry";if(rl(e))return"Webos";if(Vi(e))return"Safari";if((e.includes("chrome/")||tl(e))&&!e.includes("edge/"))return"Chrome";if(sl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function el(n=Ie()){return/firefox\//i.test(n)}function Vi(n=Ie()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tl(n=Ie()){return/crios\//i.test(n)}function nl(n=Ie()){return/iemobile/i.test(n)}function sl(n=Ie()){return/android/i.test(n)}function il(n=Ie()){return/blackberry/i.test(n)}function rl(n=Ie()){return/webos/i.test(n)}function As(n=Ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wd(n=Ie()){var e;return As(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zd(){return th()&&document.documentMode===10}function ol(n=Ie()){return As(n)||sl(n)||rl(n)||il(n)||/windows phone/i.test(n)||nl(n)}function jd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function al(n,e=[]){let t;switch(n){case"Browser":t=ao(Ie());break;case"Worker":t=`${ao(Ie())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${an}/${s}`}/**
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
 */async function Gd(n,e={}){return ln(n,"GET","/v2/passwordPolicy",Rs(n,e))}/**
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
 */class Qd{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lo(this),this.idTokenSubscription=new lo(this),this.beforeStateQueue=new qd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ga,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ge(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Gt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await as(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Se(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gd(this),t=new Yd(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ft("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Bd(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ge(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await Gt.create(this,[Ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=al(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bd(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ns(n){return Se(n)}class lo{constructor(e){this.auth=e,this.observer=null,this.addObserver=ch(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jd(n){Hi=n}function Xd(n){return Hi.loadJS(n)}function Zd(){return Hi.gapiScript}function ef(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function tf(n,e){const t=Ut(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(bn(r,e??{}))return i;Qe(i,"already-initialized")}return t.initialize({options:e})}function nf(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function sf(n,e,t){const s=Ns(n);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=ll(e),{host:o,port:a}=rf(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||of()}function ll(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function rf(n){const e=ll(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:co(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:co(o)}}}function co(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function of(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class cl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,t){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}/**
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
 */async function Kt(n,e){return Qa(n,"POST","/v1/accounts:signInWithIdp",Rs(n,e))}/**
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
 */const af="http://localhost";class kt extends cl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=xi(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new kt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Kt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Kt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kt(e,t)}buildRequest(){const e={requestUri:af,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=on(t)}return e}}/**
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
 */class ul{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fn extends ul{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ot extends Fn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
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
 */class at extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return kt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return at.credential(t,s)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
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
 */class lt extends Fn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
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
 */class ct extends Fn{constructor(){super("twitter.com")}static credential(e,t){return kt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ct.credential(t,s)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
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
 */async function lf(n,e){return Qa(n,"POST","/v1/accounts:signUp",Rs(n,e))}/**
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
 */class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await bt._fromIdTokenResponse(e,s,i),o=uo(s);return new _t({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=uo(s);return new _t({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function uo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function cf(n){var e;const t=Ns(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new _t({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await lf(t,{returnSecureToken:!0}),i=await _t._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class ls extends We{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ls.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new ls(e,t,s,i)}}function hl(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ls._fromErrorAndOperation(n,r,e,s):r})}async function uf(n,e,t=!1){const s=await Sn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _t._forOperation(n,"link",s)}/**
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
 */async function hf(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await Sn(n,hl(s,i,e,n),t);H(r.idToken,s,"internal-error");const o=$i(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(n.uid===a,s,"user-mismatch"),_t._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Qe(s,"user-mismatch"),r}}/**
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
 */async function df(n,e,t=!1){const s="signIn",i=await hl(n,s,e),r=await _t._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function ff(n,e,t,s){return Se(n).onIdTokenChanged(e,t,s)}function pf(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}const cs="__sak";/**
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
 */class dl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cs,"1"),this.storage.removeItem(cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _f(){const n=Ie();return Vi(n)||As(n)}const gf=1e3,mf=10;class fl extends dl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_f()&&jd(),this.fallbackToPolling=ol(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);zd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mf):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},gf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fl.type="LOCAL";const vf=fl;/**
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
 */class pl extends dl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pl.type="SESSION";const _l=pl;/**
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
 */class Ps{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Ps(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await yf(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ps.receivers=[];/**
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
 */function Bi(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class If{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Bi("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function He(){return window}function wf(n){He().location.href=n}/**
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
 */function gl(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function Ef(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bf(){return gl()?self:null}/**
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
 */const ml="firebaseLocalStorageDb",Tf=1,us="firebaseLocalStorage",vl="fbase_key";class Un{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Os(n,e){return n.transaction([us],e?"readwrite":"readonly").objectStore(us)}function Sf(){const n=indexedDB.deleteDatabase(ml);return new Un(n).toPromise()}function _i(){const n=indexedDB.open(ml,Tf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(us,{keyPath:vl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(us)?e(s):(s.close(),await Sf(),e(await _i()))})})}async function ho(n,e,t){const s=Os(n,!0).put({[vl]:e,value:t});return new Un(s).toPromise()}async function kf(n,e){const t=Os(n,!1).get(e),s=await new Un(t).toPromise();return s===void 0?null:s.value}function fo(n,e){const t=Os(n,!0).delete(e);return new Un(t).toPromise()}const Rf=800,Af=3;class yl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _i(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Af)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ps._getInstance(bf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ef(),!this.activeServiceWorker)return;this.sender=new If(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _i();return await ho(e,cs,"1"),await fo(e,cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ho(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>kf(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Os(i,!1).getAll();return new Un(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yl.type="LOCAL";const Nf=yl;new xn(3e4,6e4);/**
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
 */function Pf(n,e){return e?Ge(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Wi extends cl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Of(n){return df(n.auth,new Wi(n),n.bypassAuthState)}function Df(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),hf(t,new Wi(n),n.bypassAuthState)}async function Mf(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),uf(t,new Wi(n),n.bypassAuthState)}/**
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
 */class Il{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Of;case"linkViaPopup":case"linkViaRedirect":return Mf;case"reauthViaPopup":case"reauthViaRedirect":return Df;default:Qe(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Lf=new xn(2e3,1e4);class jt extends Il{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,jt.currentPopupAction&&jt.currentPopupAction.cancel(),jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=Bi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lf.get())};e()}}jt.currentPopupAction=null;/**
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
 */const xf="pendingRedirect",es=new Map;class Ff extends Il{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=es.get(this.auth._key());if(!e){try{const s=await Uf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}es.set(this.auth._key(),e)}return this.bypassAuthState||es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uf(n,e){const t=Hf(e),s=Vf(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function $f(n,e){es.set(n._key(),e)}function Vf(n){return Ge(n._redirectPersistence)}function Hf(n){return Zn(xf,n.config.apiKey,n.name)}async function Bf(n,e,t=!1){const s=Ns(n),i=Pf(s,e),o=await new Ff(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Wf=10*60*1e3;class zf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!wl(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ve(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wf&&this.cachedEventUids.clear(),this.cachedEventUids.has(po(e))}saveEventToCache(e){this.cachedEventUids.add(po(e)),this.lastProcessedEventTime=Date.now()}}function po(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wl(n);default:return!1}}/**
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
 */async function qf(n,e={}){return ln(n,"GET","/v1/projects",e)}/**
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
 */const Gf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kf=/^https?/;async function Yf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qf(n);for(const t of e)try{if(Qf(t))return}catch{}Qe(n,"unauthorized-domain")}function Qf(n){const e=pi(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Kf.test(t))return!1;if(Gf.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Jf=new xn(3e4,6e4);function _o(){const n=He().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xf(n){return new Promise((e,t)=>{var s,i,r;function o(){_o(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_o(),t(Ve(n,"network-request-failed"))},timeout:Jf.get()})}if(!((i=(s=He().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=He().gapi)===null||r===void 0)&&r.load)o();else{const a=ef("iframefcb");return He()[a]=()=>{gapi.load?o():t(Ve(n,"network-request-failed"))},Xd(`${Zd()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw ts=null,e})}let ts=null;function Zf(n){return ts=ts||Xf(n),ts}/**
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
 */const ep=new xn(5e3,15e3),tp="__/auth/iframe",np="emulator/auth/iframe",sp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ip=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rp(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ui(e,np):`https://${n.config.authDomain}/${tp}`,s={apiKey:e.apiKey,appName:n.name,v:an},i=ip.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${on(s).slice(1)}`}async function op(n){const e=await Zf(n),t=He().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:rp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sp,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ve(n,"network-request-failed"),a=He().setTimeout(()=>{r(o)},ep.get());function l(){He().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ap={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lp=500,cp=600,up="_blank",hp="http://localhost";class go{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dp(n,e,t,s=lp,i=cp){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ap),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ie().toLowerCase();t&&(a=tl(c)?up:t),el(c)&&(e=e||hp,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Wd(c)&&a!=="_self")return fp(e||"",a),new go(null);const h=window.open(e||"",a,u);H(h,n,"popup-blocked");try{h.focus()}catch{}return new go(h)}function fp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const pp="__/auth/handler",_p="emulator/auth/handler",gp=encodeURIComponent("fac");async function mo(n,e,t,s,i,r){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:an,eventId:i};if(e instanceof ul){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",li(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Fn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${gp}=${encodeURIComponent(l)}`:"";return`${mp(n)}?${on(a).slice(1)}${c}`}function mp({config:n}){return n.emulator?Ui(n,_p):`https://${n.authDomain}/${pp}`}/**
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
 */const Ys="webStorageSupport";class vp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_l,this._completeRedirectFn=Bf,this._overrideRedirectResult=$f}async _openPopup(e,t,s,i){var r;Je((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await mo(e,t,s,pi(),i);return dp(e,o,Bi())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await mo(e,t,s,pi(),i);return wf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Je(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await op(e),s=new zf(e);return t.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ys,{type:Ys},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ys];o!==void 0&&t(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ol()||Vi()||As()}}const yp=vp;var vo="@firebase/auth",yo="1.6.0";/**
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
 */class Ip{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ep(n){Be(new Ue("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:al(n)},c=new Qd(s,i,r,l);return nf(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Be(new Ue("auth-internal",e=>{const t=Ns(e.getProvider("auth").getImmediate());return(s=>new Ip(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(vo,yo,wp(n)),Re(vo,yo,"esm2017")}/**
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
 */const Cp=5*60,bp=Da("authIdTokenMaxAge")||Cp;let Io=null;const Tp=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>bp)return;const i=t==null?void 0:t.token;Io!==i&&(Io=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sp(n=Li()){const e=Ut(n,"auth");if(e.isInitialized())return e.getImmediate();const t=tf(n,{popupRedirectResolver:yp,persistence:[Nf,vf,_l]}),s=Da("authTokenSyncURL");if(s){const r=Tp(s);pf(t,r,()=>r(t.currentUser)),ff(t,o=>r(o))}const i=Pa("auth");return i&&sf(t,`http://${i}`),t}function kp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Jd({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Ve("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",kp().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ep("Browser");const Rp={apiKey:"AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",authDomain:"circlepuzzlegame-1738d.firebaseapp.com",projectId:"circlepuzzlegame-1738d",storageBucket:"circlepuzzlegame-1738d.appspot.com",messagingSenderId:"62490740969",appId:"1:62490740969:web:719c6ea78f8148089f4878",measurementId:"G-EEEKPPSEN9"},El=Wa(Rp),Ap=Sp(El);async function Np(){return new Promise((n,e)=>{cf(Ap).then(()=>{n(!0)}).catch(t=>{t.code;var s=t.message;console.error("Failed to sign in anonymously:",s),n(!1)})})}var wo={};const Eo="@firebase/database",Co="1.0.3";/**
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
 */let Cl="";function Pp(n){Cl=n}/**
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
 */class Op{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Cn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Dp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const bl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Op(e)}}catch{}return new Dp},wt=bl("localStorage"),gi=bl("sessionStorage");/**
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
 */const Yt=new ks("@firebase/database"),Mp=function(){let n=1;return function(){return n++}}(),Tl=function(n){const e=dh(n),t=new lh;t.update(e);const s=t.digest();return Ni.encodeByteArray(s)},$n=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=$n.apply(null,s):typeof s=="object"?e+=ue(s):e+=s,e+=" "}return e};let Tt=null,bo=!0;const Lp=function(n,e){v(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Yt.logLevel=Q.VERBOSE,Tt=Yt.log.bind(Yt),e&&gi.set("logging_enabled",!0)):typeof n=="function"?Tt=n:(Tt=null,gi.remove("logging_enabled"))},ge=function(...n){if(bo===!0&&(bo=!1,Tt===null&&gi.get("logging_enabled")===!0&&Lp(!0)),Tt){const e=$n.apply(null,n);Tt(e)}},Vn=function(n){return function(...e){ge(n,...e)}},mi=function(...n){const e="FIREBASE INTERNAL ERROR: "+$n(...n);Yt.error(e)},Xe=function(...n){const e=`FIREBASE FATAL ERROR: ${$n(...n)}`;throw Yt.error(e),new Error(e)},Ce=function(...n){const e="FIREBASE WARNING: "+$n(...n);Yt.warn(e)},xp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Fp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},en="[MIN_NAME]",Rt="[MAX_NAME]",cn=function(n,e){if(n===e)return 0;if(n===en||e===Rt)return-1;if(e===en||n===Rt)return 1;{const t=To(n),s=To(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Up=function(n,e){return n===e?0:n<e?-1:1},dn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ue(e))},zi=function(n){if(typeof n!="object"||n===null)return ue(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ue(e[s]),t+=":",t+=zi(n[e[s]]);return t+="}",t},kl=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Te(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Rl=function(n){v(!Sl(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},$p=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Bp=new RegExp("^-?(0*)\\d{1,10}$"),Wp=-2147483648,zp=2147483647,To=function(n){if(Bp.test(n)){const e=Number(n);if(e>=Wp&&e<=zp)return e}return null},un=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},jp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class qp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Gp{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ce(e)}}class Qt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qt.OWNER="owner";/**
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
 */const ji="5",Al="v",Nl="s",Pl="r",Ol="f",Dl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ml="ls",Ll="p",vi="ac",xl="websocket",Fl="long_polling";/**
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
 */class Ul{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Kp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function $l(n,e,t){v(typeof e=="string","typeof type must == string"),v(typeof t=="object","typeof params must == object");let s;if(e===xl)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Fl)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Kp(n)&&(t.ns=n.namespace);const i=[];return Te(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Yp{constructor(){this.counters_={}}incrementCounter(e,t=1){et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Gu(this.counters_)}}/**
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
 */const Qs={},Js={};function qi(n){const e=n.toString();return Qs[e]||(Qs[e]=new Yp),Qs[e]}function Qp(n,e){const t=n.toString();return Js[t]||(Js[t]=e()),Js[t]}/**
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
 */class Jp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&un(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const So="start",Xp="close",Zp="pLPCommand",e_="pRTLPCB",Vl="id",Hl="pw",Bl="ser",t_="cb",n_="seg",s_="ts",i_="d",r_="dframe",Wl=1870,zl=30,o_=Wl-zl,a_=25e3,l_=3e4;class qt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vn(e),this.stats_=qi(t),this.urlFn=l=>(this.appCheckToken&&(l[vi]=this.appCheckToken),$l(t,Fl,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Jp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(l_)),Fp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gi((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===So)this.id=a,this.password=l;else if(o===Xp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[So]="t",s[Bl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[t_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Al]=ji,this.transportSessionId&&(s[Nl]=this.transportSessionId),this.lastSessionId&&(s[Ml]=this.lastSessionId),this.applicationId&&(s[Ll]=this.applicationId),this.appCheckToken&&(s[vi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Dl.test(location.hostname)&&(s[Pl]=Ol);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qt.forceAllow_=!0}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){return qt.forceAllow_?!0:!qt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$p()&&!Vp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ue(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Aa(t),i=kl(s,o_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[r_]="t",s[Vl]=e,s[Hl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ue(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Gi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Mp(),window[Zp+this.uniqueCallbackIdentifier]=e,window[e_+this.uniqueCallbackIdentifier]=t,this.myIFrame=Gi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ge("frame writing exception"),a.stack&&ge(a.stack),ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ge("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vl]=this.myID,e[Hl]=this.myPW,e[Bl]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zl+s.length<=Wl;){const o=this.pendingSegs.shift();s=s+"&"+n_+i+"="+o.seg+"&"+s_+i+"="+o.ts+"&"+i_+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(a_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const c_=16384,u_=45e3;let hs=null;typeof MozWebSocket<"u"?hs=MozWebSocket:typeof WebSocket<"u"&&(hs=WebSocket);class Me{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vn(this.connId),this.stats_=qi(t),this.connURL=Me.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Al]=ji,typeof location<"u"&&location.hostname&&Dl.test(location.hostname)&&(o[Pl]=Ol),t&&(o[Nl]=t),s&&(o[Ml]=s),i&&(o[vi]=i),r&&(o[Ll]=r),$l(e,xl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wt.set("previous_websocket_failure",!0);try{let s;xa(),this.mySock=new hs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hs!==null&&!Me.forceDisallow_}static previouslyFailed(){return wt.isInMemoryStorage||wt.get("previous_websocket_failure")===!0}markConnectionHealthy(){wt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Cn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ue(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=kl(t,c_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(u_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Me.responsesRequiredToBeHealthy=2;Me.healthyTimeout=3e4;/**
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
 */class Rn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qt,Me]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Me&&Me.isAvailable();let s=t&&!Me.previouslyFailed();if(e.webSocketOnly&&(t||Ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Me];else{const i=this.transports_=[];for(const r of Rn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Rn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rn.globalTransportInitialized_=!1;/**
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
 */const h_=6e4,d_=5e3,f_=10*1024,p_=100*1024,Xs="t",ko="d",__="s",Ro="r",g_="e",Ao="o",No="a",Po="n",Oo="p",m_="h";class v_{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vn("c:"+this.id+":"),this.transportManager_=new Rn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=vn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>p_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>f_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xs in e){const t=e[Xs];t===No?this.upgradeIfSecondaryHealthy_():t===Ro?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ao&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=dn("t",e),s=dn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Oo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:No,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Po,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=dn("t",e),s=dn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=dn(Xs,e);if(ko in e){const s=e[ko];if(t===m_){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Po){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===__?this.onConnectionShutdown_(s):t===Ro?this.onReset_(s):t===g_?mi("Server Error: "+s):t===Ao?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ji!==s&&Ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),vn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(h_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(d_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Oo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class jl{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class ql{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){v(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ds extends ql{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ds}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Do=32,Mo=768;class X{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Y(){return new X("")}function z(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function gt(n){return n.pieces_.length-n.pieceNum_}function Z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new X(n.pieces_,e)}function Gl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function y_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Kl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Yl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new X(e,0)}function ae(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof X)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new X(t,0)}function q(n){return n.pieceNum_>=n.pieces_.length}function we(n,e){const t=z(n),s=z(e);if(t===null)return e;if(t===s)return we(Z(n),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ki(n,e){if(gt(n)!==gt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Le(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(gt(n)>gt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class I_{constructor(e,t){this.errorPrefix_=t,this.parts_=Kl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ss(this.parts_[s]);Ql(this)}}function w_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ss(e),Ql(n)}function E_(n){const e=n.parts_.pop();n.byteLength_-=Ss(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ql(n){if(n.byteLength_>Mo)throw new Error(n.errorPrefix_+"has a key path longer than "+Mo+" bytes ("+n.byteLength_+").");if(n.parts_.length>Do)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Do+") or object contains a cycle "+It(n))}function It(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Yi extends ql{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Yi}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const fn=1e3,C_=60*5*1e3,Lo=30*1e3,b_=1.3,T_=3e4,S_="server_kill",xo=3;class Ye extends jl{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ye.nextPersistentConnectionId_++,this.log_=Vn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fn,this.maxReconnectDelay_=C_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!xa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ds.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ue(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Ts,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ye.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&et(e,"w")){const s=Zt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ah(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=oh(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):mi("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>T_&&(this.reconnectDelay_=fn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*b_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ye.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){v(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ge("getToken() completed but was canceled"):(ge("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new v_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Ce(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(S_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ce(h),l())}}}interrupt(e){ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],li(this.interruptReasons_)&&(this.reconnectDelay_=fn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>zi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new X(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ge("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xo&&(this.reconnectDelay_=Lo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ge("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Cl.replace(/\./g,"-")]=1,Oi()?e["framework.cordova"]=1:La()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ds.getInstance().currentlyOnline();return li(this.interruptReasons_)&&e}}Ye.nextPersistentConnectionId_=0;Ye.nextConnectionId_=0;/**
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
 */class j{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new j(e,t)}}/**
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
 */class Ds{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new j(en,e),i=new j(en,t);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
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
 */let Gn;class Jl extends Ds{static get __EMPTY_NODE(){return Gn}static set __EMPTY_NODE(e){Gn=e}compare(e,t){return cn(e.name,t.name)}isDefinedOn(e){throw rn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return j.MIN}maxPost(){return new j(Rt,Gn)}makePost(e,t){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Gn)}toString(){return".key"}}const Jt=new Jl;/**
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
 */class Kn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ce.RED,this.left=i??Ee.EMPTY_NODE,this.right=r??Ee.EMPTY_NODE}copy(e,t,s,i,r){return new ce(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ee.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class k_{copy(e,t,s,i,r){return this}insert(e,t,s){return new ce(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ee{constructor(e,t=Ee.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ee(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new Ee(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Kn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Kn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Kn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Kn(this.root_,null,this.comparator_,!0,e)}}Ee.EMPTY_NODE=new k_;/**
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
 */function R_(n,e){return cn(n.name,e.name)}function Qi(n,e){return cn(n,e)}/**
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
 */let yi;function A_(n){yi=n}const Xl=function(n){return typeof n=="number"?"number:"+Rl(n):"string:"+n},Zl=function(n){if(n.isLeafNode()){const e=n.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&et(e,".sv"),"Priority must be a string or number.")}else v(n===yi||n.isEmpty(),"priority of unexpected type.");v(n===yi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Fo;class le{constructor(e,t=le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zl(this.priorityNode_)}static set __childrenNodeConstructor(e){Fo=e}static get __childrenNodeConstructor(){return Fo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=z(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(v(s!==".priority"||gt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,le.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Rl(this.value_):e+=this.value_,this.lazyHash_=Tl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof le.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=le.VALUE_TYPE_ORDER.indexOf(t),r=le.VALUE_TYPE_ORDER.indexOf(s);return v(i>=0,"Unknown leaf type: "+t),v(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ec,tc;function N_(n){ec=n}function P_(n){tc=n}class O_ extends Ds{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?cn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Rt,new le("[PRIORITY-POST]",tc))}makePost(e,t){const s=ec(e);return new j(t,new le("[PRIORITY-POST]",s))}toString(){return".priority"}}const ie=new O_;/**
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
 */const D_=Math.log(2);class M_{constructor(e){const t=r=>parseInt(Math.log(r)/D_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fs=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new ce(d,h.node,ce.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),I=i(f+1,c);return h=n[f],d=t?t(h):h,new ce(d,h.node,ce.BLACK,p,I)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,I){const g=h-p,E=h;h-=p;const U=i(g+1,E),A=n[g],S=t?t(A):A;f(new ce(S,A.node,I,null,U))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const I=l.nextBitIsOne(),g=Math.pow(2,l.count-(p+1));I?d(g,ce.BLACK):(d(g,ce.BLACK),d(g,ce.RED))}return u},o=new M_(n.length),a=r(o);return new Ee(s||e,a)};/**
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
 */let Zs;const Ht={};class Ke{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return v(Ht&&ie,"ChildrenNode.ts has not been loaded"),Zs=Zs||new Ke({".priority":Ht},{".priority":ie}),Zs}get(e){const t=Zt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ee?t:null}hasIndex(e){return et(this.indexSet_,e.toString())}addIndex(e,t){v(e!==Jt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=fs(s,e.getCompare()):a=Ht;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ke(u,c)}addToIndexes(e,t){const s=is(this.indexes_,(i,r)=>{const o=Zt(this.indexSet_,r);if(v(o,"Missing index implementation for "+r),i===Ht)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(j.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),fs(a,o.getCompare())}else return Ht;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new Ke(s,this.indexSet_)}removeFromIndexes(e,t){const s=is(this.indexes_,i=>{if(i===Ht)return i;{const r=t.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new Ke(s,this.indexSet_)}}/**
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
 */let pn;class ${constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Zl(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new $(new Ee(Qi),null,Ke.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?pn:t}}getChild(e){const t=z(e);return t===null?this:this.getImmediateChild(t).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(v(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new j(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?pn:this.priorityNode_;return new $(i,o,r)}}updateChild(e,t){const s=z(e);if(s===null)return t;{v(z(e)!==".priority"||gt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Z(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(ie,(o,a)=>{t[o]=a.val(e),s++,r&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xl(this.getPriority().val())+":"),this.forEachChild(ie,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Tl(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new j(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new j(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hn?-1:0}withIndex(e){if(e===Jt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Jt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(ie),i=t.getIterator(ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Jt?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class L_ extends ${constructor(){super(new Ee(Qi),$.EMPTY_NODE,Ke.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Hn=new L_;Object.defineProperties(j,{MIN:{value:new j(en,$.EMPTY_NODE)},MAX:{value:new j(Rt,Hn)}});Jl.__EMPTY_NODE=$.EMPTY_NODE;le.__childrenNodeConstructor=$;A_(Hn);P_(Hn);/**
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
 */const x_=!0;function de(n,e=null){if(n===null)return $.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new le(t,de(e))}if(!(n instanceof Array)&&x_){const t=[];let s=!1;if(Te(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=de(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new j(o,l)))}}),t.length===0)return $.EMPTY_NODE;const r=fs(t,R_,o=>o.name,Qi);if(s){const o=fs(t,ie.getCompare());return new $(r,de(e),new Ke({".priority":o},{".priority":ie}))}else return new $(r,de(e),Ke.Default)}else{let t=$.EMPTY_NODE;return Te(n,(s,i)=>{if(et(n,s)&&s.substring(0,1)!=="."){const r=de(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(de(e))}}N_(de);/**
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
 */class F_ extends Ds{constructor(e){super(),this.indexPath_=e,v(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?cn(e.name,t.name):r}makePost(e,t){const s=de(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(t,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Hn);return new j(Rt,e)}toString(){return Kl(this.indexPath_,0).join("/")}}/**
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
 */class U_ extends Ds{compare(e,t){const s=e.node.compareTo(t.node);return s===0?cn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,t){const s=de(e);return new j(t,s)}toString(){return".value"}}const $_=new U_;/**
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
 */function nc(n){return{type:"value",snapshotNode:n}}function tn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function An(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Nn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function V_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Ji{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(An(t,a)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(tn(t,s)):o.trackChildChange(Nn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,r)=>{t.hasChild(i)||s.trackChildChange(An(i,r))}),t.isLeafNode()||t.forEachChild(ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Nn(i,r,o))}else s.trackChildChange(tn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Pn{constructor(e){this.indexedFilter_=new Ji(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pn.getStartPost_(e),this.endPost_=Pn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new j(t,s))||(s=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=$.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const r=this;return t.forEachChild(ie,(o,a)=>{r.matches(new j(o,a))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class H_{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Pn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new j(t,s))||(s=$.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;v(a.numChildren()===this.limit_,"");const l=new j(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Nn(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(An(t,h));const I=a.updateImmediateChild(t,$.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(tn(d.name,d.node)),I.updateImmediateChild(d.name,d.node)):I}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(An(c.name,c.node)),r.trackChildChange(tn(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,$.EMPTY_NODE)):e}}/**
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
 */class Xi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:en}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Xi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function B_(n){return n.loadsAllData()?new Ji(n.getIndex()):n.hasLimit()?new H_(n):new Pn(n)}function Uo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ie?t="$priority":n.index_===$_?t="$value":n.index_===Jt?t="$key":(v(n.index_ instanceof F_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ue(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ue(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ue(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ue(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ue(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function $o(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ie&&(e.i=n.index_.toString()),e}/**
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
 */class ps extends jl{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Vn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ps.getListenId_(e,s),a={};this.listens_[o]=a;const l=Uo(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Zt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=ps.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Uo(e._queryParams),s=e._path.toString(),i=new Ts;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+on(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Cn(a.responseText)}catch{Ce("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ce("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class W_{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function _s(){return{value:null,children:new Map}}function sc(n,e,t){if(q(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=z(e);n.children.has(s)||n.children.set(s,_s());const i=n.children.get(s);e=Z(e),sc(i,e,t)}}function Ii(n,e,t){n.value!==null?t(e,n.value):z_(n,(s,i)=>{const r=new X(e.toString()+"/"+s);Ii(i,r,t)})}function z_(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class j_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Te(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Vo=10*1e3,q_=30*1e3,G_=5*60*1e3;class K_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new j_(e);const s=Vo+(q_-Vo)*Math.random();vn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Te(e,(i,r)=>{r>0&&et(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),vn(this.reportStats_.bind(this),Math.floor(Math.random()*2*G_))}}/**
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
 */var xe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xe||(xe={}));function ic(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function er(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class gs{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=xe.ACK_USER_WRITE,this.source=ic()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new X(e));return new gs(Y(),t,this.revert)}}else return v(z(this.path)===e,"operationForChild called for unrelated child."),new gs(Z(this.path),this.affectedTree,this.revert)}}/**
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
 */class On{constructor(e,t){this.source=e,this.path=t,this.type=xe.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new On(this.source,Y()):new On(this.source,Z(this.path))}}/**
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
 */class At{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=xe.OVERWRITE}operationForChild(e){return q(this.path)?new At(this.source,Y(),this.snap.getImmediateChild(e)):new At(this.source,Z(this.path),this.snap)}}/**
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
 */class Dn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=xe.MERGE}operationForChild(e){if(q(this.path)){const t=this.children.subtree(new X(e));return t.isEmpty()?null:t.value?new At(this.source,Y(),t.value):new Dn(this.source,Y(),t)}else return v(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Dn(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Nt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const t=z(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Y_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Q_(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(V_(o.childName,o.snapshotNode))}),_n(n,i,"child_removed",e,s,t),_n(n,i,"child_added",e,s,t),_n(n,i,"child_moved",r,s,t),_n(n,i,"child_changed",e,s,t),_n(n,i,"value",e,s,t),i}function _n(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>X_(n,a,l)),o.forEach(a=>{const l=J_(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function J_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function X_(n,e,t){if(e.childName==null||t.childName==null)throw rn("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Ms(n,e){return{eventCache:n,serverCache:e}}function yn(n,e,t,s){return Ms(new Nt(e,t,s),n.serverCache)}function rc(n,e,t,s){return Ms(n.eventCache,new Nt(e,t,s))}function wi(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Pt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ei;const Z_=()=>(ei||(ei=new Ee(Up)),ei);class te{constructor(e,t=Z_()){this.value=e,this.children=t}static fromObject(e){let t=new te(null);return Te(e,(s,i)=>{t=t.set(new X(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Y(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Z(e),t);return r!=null?{path:ae(new X(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const t=z(e),s=this.children.get(t);return s!==null?s.subtree(Z(e)):new te(null)}}set(e,t){if(q(e))return new te(t,this.children);{const s=z(e),r=(this.children.get(s)||new te(null)).set(Z(e),t),o=this.children.insert(s,r);return new te(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const t=z(e),s=this.children.get(t);if(s){const i=s.remove(Z(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new te(null):new te(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const t=z(e),s=this.children.get(t);return s?s.get(Z(e)):null}}setTree(e,t){if(q(e))return t;{const s=z(e),r=(this.children.get(s)||new te(null)).setTree(Z(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new te(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ae(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Y(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(Z(e),ae(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Y(),t)}foreachOnPath_(e,t,s){if(q(e))return this;{this.value&&s(t,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(Z(e),ae(t,i),s):new te(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(ae(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Fe{constructor(e){this.writeTree_=e}static empty(){return new Fe(new te(null))}}function In(n,e,t){if(q(e))return new Fe(new te(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=we(i,e);return r=r.updateChild(o,t),new Fe(n.writeTree_.set(i,r))}else{const i=new te(t),r=n.writeTree_.setTree(e,i);return new Fe(r)}}}function Ho(n,e,t){let s=n;return Te(t,(i,r)=>{s=In(s,ae(e,i),r)}),s}function Bo(n,e){if(q(e))return Fe.empty();{const t=n.writeTree_.setTree(e,new te(null));return new Fe(t)}}function Ei(n,e){return $t(n,e)!=null}function $t(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(we(t.path,e)):null}function Wo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ie,(s,i)=>{e.push(new j(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function pt(n,e){if(q(e))return n;{const t=$t(n,e);return t!=null?new Fe(new te(t)):new Fe(n.writeTree_.subtree(e))}}function Ci(n){return n.writeTree_.isEmpty()}function nn(n,e){return oc(Y(),n.writeTree_,e)}function oc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=oc(ae(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ae(n,".priority"),s)),t}}/**
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
 */function tr(n,e){return uc(e,n)}function eg(n,e,t,s,i){v(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=In(n.visibleWrites,e,t)),n.lastWriteId=s}function tg(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function ng(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);v(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&sg(a,s.path)?i=!1:Le(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return ig(n),!0;if(s.snap)n.visibleWrites=Bo(n.visibleWrites,s.path);else{const a=s.children;Te(a,l=>{n.visibleWrites=Bo(n.visibleWrites,ae(s.path,l))})}return!0}else return!1}function sg(n,e){if(n.snap)return Le(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Le(ae(n.path,t),e))return!0;return!1}function ig(n){n.visibleWrites=ac(n.allWrites,rg,Y()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function rg(n){return n.visible}function ac(n,e,t){let s=Fe.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Le(t,o)?(a=we(t,o),s=In(s,a,r.snap)):Le(o,t)&&(a=we(o,t),s=In(s,Y(),r.snap.getChild(a)));else if(r.children){if(Le(t,o))a=we(t,o),s=Ho(s,a,r.children);else if(Le(o,t))if(a=we(o,t),q(a))s=Ho(s,Y(),r.children);else{const l=Zt(r.children,z(a));if(l){const c=l.getChild(Z(a));s=In(s,Y(),c)}}}else throw rn("WriteRecord should have .snap or .children")}}return s}function lc(n,e,t,s,i){if(!s&&!i){const r=$t(n.visibleWrites,e);if(r!=null)return r;{const o=pt(n.visibleWrites,e);if(Ci(o))return t;if(t==null&&!Ei(o,Y()))return null;{const a=t||$.EMPTY_NODE;return nn(o,a)}}}else{const r=pt(n.visibleWrites,e);if(!i&&Ci(r))return t;if(!i&&t==null&&!Ei(r,Y()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Le(c.path,e)||Le(e,c.path))},a=ac(n.allWrites,o,e),l=t||$.EMPTY_NODE;return nn(a,l)}}}function og(n,e,t){let s=$.EMPTY_NODE;const i=$t(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=pt(n.visibleWrites,e);return t.forEachChild(ie,(o,a)=>{const l=nn(pt(r,new X(o)),a);s=s.updateImmediateChild(o,l)}),Wo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=pt(n.visibleWrites,e);return Wo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ag(n,e,t,s,i){v(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ae(e,t);if(Ei(n.visibleWrites,r))return null;{const o=pt(n.visibleWrites,r);return Ci(o)?i.getChild(t):nn(o,i.getChild(t))}}function lg(n,e,t,s){const i=ae(e,t),r=$t(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=pt(n.visibleWrites,i);return nn(o,s.getNode().getImmediateChild(t))}else return null}function cg(n,e){return $t(n.visibleWrites,e)}function ug(n,e,t,s,i,r,o){let a;const l=pt(n.visibleWrites,e),c=$t(l,Y());if(c!=null)a=c;else if(t!=null)a=nn(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function hg(){return{visibleWrites:Fe.empty(),allWrites:[],lastWriteId:-1}}function ms(n,e,t,s){return lc(n.writeTree,n.treePath,e,t,s)}function nr(n,e){return og(n.writeTree,n.treePath,e)}function zo(n,e,t,s){return ag(n.writeTree,n.treePath,e,t,s)}function vs(n,e){return cg(n.writeTree,ae(n.treePath,e))}function dg(n,e,t,s,i,r){return ug(n.writeTree,n.treePath,e,t,s,i,r)}function sr(n,e,t){return lg(n.writeTree,n.treePath,e,t)}function cc(n,e){return uc(ae(n.treePath,e),n.writeTree)}function uc(n,e){return{treePath:n,writeTree:e}}/**
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
 */class fg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;v(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),v(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Nn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,An(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,tn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Nn(s,e.snapshotNode,i.oldSnap));else throw rn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class pg{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const hc=new pg;class ir{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Nt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pt(this.viewCache_),r=dg(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function _g(n){return{filter:n}}function gg(n,e){v(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function mg(n,e,t,s,i){const r=new fg;let o,a;if(t.type===xe.OVERWRITE){const c=t;c.source.fromUser?o=bi(n,e,c.path,c.snap,s,i,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=ys(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===xe.MERGE){const c=t;c.source.fromUser?o=yg(n,e,c.path,c.children,s,i,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ti(n,e,c.path,c.children,s,i,a,r))}else if(t.type===xe.ACK_USER_WRITE){const c=t;c.revert?o=Eg(n,e,c.path,s,i,r):o=Ig(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===xe.LISTEN_COMPLETE)o=wg(n,e,t.path,s,r);else throw rn("Unknown operation type: "+t.type);const l=r.getChanges();return vg(e,o,l),{viewCache:o,changes:l}}function vg(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=wi(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(nc(wi(e)))}}function dc(n,e,t,s,i,r){const o=e.eventCache;if(vs(s,t)!=null)return e;{let a,l;if(q(t))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Pt(e),u=c instanceof $?c:$.EMPTY_NODE,h=nr(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ms(s,Pt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(t);if(c===".priority"){v(gt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=zo(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=Z(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=zo(s,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=sr(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return yn(e,a,o.isFullyInitialized()||q(t),n.filter.filtersNodes())}}function ys(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(q(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=z(t);if(!l.isCompleteForPath(t)&&gt(t)>1)return e;const p=Z(t),g=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),g):c=u.updateChild(l.getNode(),f,g,p,hc,null)}const h=rc(e,c,l.isFullyInitialized()||q(t),u.filtersNodes()),d=new ir(i,h,r);return dc(n,h,t,i,d,a)}function bi(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new ir(i,e,r);if(q(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=yn(e,c,!0,n.filter.filtersNodes());else{const h=z(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=yn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Z(t),f=a.getNode().getImmediateChild(h);let p;if(q(d))p=s;else{const I=u.getCompleteChild(h);I!=null?Gl(d)===".priority"&&I.getChild(Yl(d)).isEmpty()?p=I:p=I.updateChild(d,s):p=$.EMPTY_NODE}if(f.equals(p))l=e;else{const I=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=yn(e,I,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function jo(n,e){return n.eventCache.isCompleteForChild(e)}function yg(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ae(t,l);jo(e,z(u))&&(a=bi(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ae(t,l);jo(e,z(u))||(a=bi(n,a,u,c,i,r,o))}),a}function qo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ti(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(t)?c=s:c=new te(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=qo(n,f,d);l=ys(n,l,new X(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),I=qo(n,p,d);l=ys(n,l,new X(h),I,i,r,o,a)}}),l}function Ig(n,e,t,s,i,r,o){if(vs(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(q(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ys(n,e,t,l.getNode().getChild(t),i,r,a,o);if(q(t)){let c=new te(null);return l.getNode().forEachChild(Jt,(u,h)=>{c=c.set(new X(u),h)}),Ti(n,e,t,c,i,r,a,o)}else return e}else{let c=new te(null);return s.foreach((u,h)=>{const d=ae(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Ti(n,e,t,c,i,r,a,o)}}function wg(n,e,t,s,i){const r=e.serverCache,o=rc(e,r.getNode(),r.isFullyInitialized()||q(t),r.isFiltered());return dc(n,o,t,s,hc,i)}function Eg(n,e,t,s,i,r){let o;if(vs(s,t)!=null)return e;{const a=new ir(s,e,i),l=e.eventCache.getNode();let c;if(q(t)||z(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ms(s,Pt(e));else{const h=e.serverCache.getNode();v(h instanceof $,"serverChildren would be complete if leaf node"),u=nr(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=z(t);let h=sr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,Z(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,$.EMPTY_NODE,Z(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ms(s,Pt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||vs(s,Y())!=null,yn(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Cg{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ji(s.getIndex()),r=B_(s);this.processor_=_g(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode($.EMPTY_NODE,a.getNode(),null),u=new Nt(l,o.isFullyInitialized(),i.filtersNodes()),h=new Nt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ms(h,u),this.eventGenerator_=new Y_(this.query_)}get query(){return this.query_}}function bg(n){return n.viewCache_.serverCache.getNode()}function Tg(n,e){const t=Pt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!q(e)&&!t.getImmediateChild(z(e)).isEmpty())?t.getChild(e):null}function Go(n){return n.eventRegistrations_.length===0}function Sg(n,e){n.eventRegistrations_.push(e)}function Ko(n,e,t){const s=[];if(t){v(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Yo(n,e,t,s){e.type===xe.MERGE&&e.source.queryId!==null&&(v(Pt(n.viewCache_),"We should always have a full cache before handling merges"),v(wi(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=mg(n.processor_,i,e,t,s);return gg(n.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,fc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function kg(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ie,(r,o)=>{s.push(tn(r,o))}),t.isFullyInitialized()&&s.push(nc(t.getNode())),fc(n,s,t.getNode(),e)}function fc(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Q_(n.eventGenerator_,e,t,i)}/**
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
 */let Is;class Rg{constructor(){this.views=new Map}}function Ag(n){v(!Is,"__referenceConstructor has already been defined"),Is=n}function Ng(){return v(Is,"Reference.ts has not been loaded"),Is}function Pg(n){return n.views.size===0}function rr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return v(r!=null,"SyncTree gave us an op for an invalid query."),Yo(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Yo(o,e,t,s));return r}}function Og(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=ms(t,i?s:null),l=!1;a?l=!0:s instanceof $?(a=nr(t,s),l=!1):(a=$.EMPTY_NODE,l=!1);const c=Ms(new Nt(a,l,!1),new Nt(s,i,!1));return new Cg(e,c)}return o}function Dg(n,e,t,s,i,r){const o=Og(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Sg(o,t),kg(o,t)}function Mg(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=mt(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Ko(c,t,s)),Go(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Ko(l,t,s)),Go(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!mt(n)&&r.push(new(Ng())(e._repo,e._path)),{removed:r,events:o}}function pc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Xt(n,e){let t=null;for(const s of n.views.values())t=t||Tg(s,e);return t}function _c(n,e){if(e._queryParams.loadsAllData())return Ls(n);{const s=e._queryIdentifier;return n.views.get(s)}}function gc(n,e){return _c(n,e)!=null}function mt(n){return Ls(n)!=null}function Ls(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ws;function Lg(n){v(!ws,"__referenceConstructor has already been defined"),ws=n}function xg(){return v(ws,"Reference.ts has not been loaded"),ws}let Fg=1;class Qo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=hg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mc(n,e,t,s,i){return eg(n.pendingWriteTree_,e,t,s,i),i?Bn(n,new At(ic(),e,t)):[]}function Et(n,e,t=!1){const s=tg(n.pendingWriteTree_,e);if(ng(n.pendingWriteTree_,e)){let r=new te(null);return s.snap!=null?r=r.set(Y(),!0):Te(s.children,o=>{r=r.set(new X(o),!0)}),Bn(n,new gs(s.path,r,t))}else return[]}function xs(n,e,t){return Bn(n,new At(Zi(),e,t))}function Ug(n,e,t){const s=te.fromObject(t);return Bn(n,new Dn(Zi(),e,s))}function $g(n,e){return Bn(n,new On(Zi(),e))}function Vg(n,e,t){const s=ar(n,t);if(s){const i=lr(s),r=i.path,o=i.queryId,a=we(r,e),l=new On(er(o),a);return cr(n,r,l)}else return[]}function Si(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||gc(o,e))){const l=Mg(o,e,t,s);Pg(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>mt(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Wg(d);for(let p=0;p<f.length;++p){const I=f[p],g=I.query,E=Ic(n,I);n.listenProvider_.startListening(wn(g),Es(n,g),E.hashFn,E.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(wn(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(Fs(d));n.listenProvider_.stopListening(wn(d),f)}))}zg(n,c)}return a}function Hg(n,e,t,s){const i=ar(n,s);if(i!=null){const r=lr(i),o=r.path,a=r.queryId,l=we(o,e),c=new At(er(a),l,t);return cr(n,o,c)}else return[]}function Bg(n,e,t,s){const i=ar(n,s);if(i){const r=lr(i),o=r.path,a=r.queryId,l=we(o,e),c=te.fromObject(t),u=new Dn(er(a),l,c);return cr(n,o,u)}else return[]}function Jo(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=we(d,i);r=r||Xt(f,p),o=o||mt(f)});let a=n.syncPointTree_.get(i);a?(o=o||mt(a),r=r||Xt(a,Y())):(a=new Rg,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=$.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const I=Xt(p,Y());I&&(r=r.updateImmediateChild(f,I))}));const c=gc(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Fs(e);v(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=jg();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=tr(n.pendingWriteTree_,i);let h=Dg(a,e,t,u,r,l);if(!c&&!o&&!s){const d=_c(a,e);h=h.concat(qg(n,e,d))}return h}function or(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=we(o,e),c=Xt(a,l);if(c)return c});return lc(i,e,r,t,!0)}function Bn(n,e){return vc(e,n.syncPointTree_,null,tr(n.pendingWriteTree_,Y()))}function vc(n,e,t,s){if(q(n.path))return yc(n,e,t,s);{const i=e.get(Y());t==null&&i!=null&&(t=Xt(i,Y()));let r=[];const o=z(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=cc(s,o);r=r.concat(vc(a,l,c,u))}return i&&(r=r.concat(rr(i,n,s,t))),r}}function yc(n,e,t,s){const i=e.get(Y());t==null&&i!=null&&(t=Xt(i,Y()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=cc(s,o),u=n.operationForChild(o);u&&(r=r.concat(yc(u,a,l,c)))}),i&&(r=r.concat(rr(i,n,s,t))),r}function Ic(n,e){const t=e.query,s=Es(n,t);return{hashFn:()=>(bg(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Vg(n,t._path,s):$g(n,t._path);{const r=Hp(i,t);return Si(n,t,null,r)}}}}function Es(n,e){const t=Fs(e);return n.queryToTagMap.get(t)}function Fs(n){return n._path.toString()+"$"+n._queryIdentifier}function ar(n,e){return n.tagToQueryMap.get(e)}function lr(n){const e=n.indexOf("$");return v(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new X(n.substr(0,e))}}function cr(n,e,t){const s=n.syncPointTree_.get(e);v(s,"Missing sync point for query tag that we're tracking");const i=tr(n.pendingWriteTree_,e);return rr(s,t,i,null)}function Wg(n){return n.fold((e,t,s)=>{if(t&&mt(t))return[Ls(t)];{let i=[];return t&&(i=pc(t)),Te(s,(r,o)=>{i=i.concat(o)}),i}})}function wn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(xg())(n._repo,n._path):n}function zg(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Fs(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function jg(){return Fg++}function qg(n,e,t){const s=e._path,i=Es(n,e),r=Ic(n,t),o=n.listenProvider_.startListening(wn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)v(!mt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!q(c)&&u&&mt(u))return[Ls(u).query];{let d=[];return u&&(d=d.concat(pc(u).map(f=>f.query))),Te(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(wn(u),Es(n,u))}}return o}/**
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
 */class ur{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ur(t)}node(){return this.node_}}class hr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ae(this.path_,e);return new hr(this.syncTree_,t)}node(){return or(this.syncTree_,this.path_)}}const Gg=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Xo=function(n,e,t){if(!n||typeof n!="object")return n;if(v(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Kg(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Yg(n[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Kg=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:v(!1,"Unexpected server value: "+n)}},Yg=function(n,e,t){n.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&v(!1,"Unexpected increment value: "+s);const i=e.node();if(v(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Qg=function(n,e,t,s){return dr(e,new hr(t,n),s)},wc=function(n,e,t){return dr(n,new ur(e),t)};function dr(n,e,t){const s=n.getPriority().val(),i=Xo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Xo(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new le(a,de(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new le(i))),o.forEachChild(ie,(a,l)=>{const c=dr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class fr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function pr(n,e){let t=e instanceof X?e:new X(e),s=n,i=z(t);for(;i!==null;){const r=Zt(s.node.children,i)||{children:{},childCount:0};s=new fr(i,s,r),t=Z(t),i=z(t)}return s}function hn(n){return n.node.value}function Ec(n,e){n.node.value=e,ki(n)}function Cc(n){return n.node.childCount>0}function Jg(n){return hn(n)===void 0&&!Cc(n)}function Us(n,e){Te(n.node.children,(t,s)=>{e(new fr(t,n,s))})}function bc(n,e,t,s){t&&!s&&e(n),Us(n,i=>{bc(i,e,!0,s)}),t&&s&&e(n)}function Xg(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Wn(n){return new X(n.parent===null?n.name:Wn(n.parent)+"/"+n.name)}function ki(n){n.parent!==null&&Zg(n.parent,n.name,n)}function Zg(n,e,t){const s=Jg(t),i=et(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ki(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ki(n))}/**
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
 */const em=/[\[\].#$\/\u0000-\u001F\u007F]/,tm=/[\[\].#$\u0000-\u001F\u007F]/,ti=10*1024*1024,Tc=function(n){return typeof n=="string"&&n.length!==0&&!em.test(n)},Sc=function(n){return typeof n=="string"&&n.length!==0&&!tm.test(n)},nm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sc(n)},kc=function(n,e,t,s){s&&e===void 0||_r(Di(n,"value"),e,t)},_r=function(n,e,t){const s=t instanceof X?new I_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+It(s));if(typeof e=="function")throw new Error(n+"contains a function "+It(s)+" with contents = "+e.toString());if(Sl(e))throw new Error(n+"contains "+e.toString()+" "+It(s));if(typeof e=="string"&&e.length>ti/3&&Ss(e)>ti)throw new Error(n+"contains a string greater than "+ti+" utf8 bytes "+It(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Tc(o)))throw new Error(n+" contains an invalid key ("+o+") "+It(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);w_(s,o),_r(n,a,s),E_(s)}),i&&r)throw new Error(n+' contains ".value" child '+It(s)+" in addition to actual children.")}},Rc=function(n,e,t,s){if(!(s&&t===void 0)&&!Sc(t))throw new Error(Di(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sm=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Rc(n,e,t,s)},Ac=function(n,e){if(z(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},im=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!nm(t))throw new Error(Di(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class rm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gr(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Ki(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Nc(n,e,t){gr(n,t),Pc(n,s=>Ki(s,e))}function Ze(n,e,t){gr(n,t),Pc(n,s=>Le(s,e)||Le(e,s))}function Pc(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(om(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function om(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Tt&&ge("event: "+t.toString()),un(s)}}}/**
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
 */const am="repo_interrupt",lm=25;class cm{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_s(),this.transactionQueueTree_=new fr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function um(n,e,t){if(n.stats_=qi(n.repoInfo_),n.forceRestClient_||jp())n.server_=new ps(n.repoInfo_,(s,i,r,o)=>{Zo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ea(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ye(n.repoInfo_,e,(s,i,r,o)=>{Zo(n,s,i,r,o)},s=>{ea(n,s)},s=>{hm(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Qp(n.repoInfo_,()=>new K_(n.stats_,n.server_)),n.infoData_=new W_,n.infoSyncTree_=new Qo({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=xs(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vr(n,"connected",!1),n.serverSyncTree_=new Qo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ze(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Oc(n){const t=n.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function mr(n){return Gg({timestamp:Oc(n)})}function Zo(n,e,t,s,i){n.dataUpdateCount++;const r=new X(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=is(t,c=>de(c));o=Bg(n.serverSyncTree_,r,l,i)}else{const l=de(t);o=Hg(n.serverSyncTree_,r,l,i)}else if(s){const l=is(t,c=>de(c));o=Ug(n.serverSyncTree_,r,l)}else{const l=de(t);o=xs(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=$s(n,r)),Ze(n.eventQueue_,a,o)}function ea(n,e){vr(n,"connected",e),e===!1&&fm(n)}function hm(n,e){Te(e,(t,s)=>{vr(n,t,s)})}function vr(n,e,t){const s=new X("/.info/"+e),i=de(t);n.infoData_.updateSnapshot(s,i);const r=xs(n.infoSyncTree_,s,i);Ze(n.eventQueue_,s,r)}function Dc(n){return n.nextWriteId_++}function dm(n,e,t,s,i){yr(n,"set",{path:e.toString(),value:t,priority:s});const r=mr(n),o=de(t,s),a=or(n.serverSyncTree_,e),l=wc(o,a,r),c=Dc(n),u=mc(n.serverSyncTree_,e,l,c,!0);gr(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||Ce("set at "+e+" failed: "+d);const I=Et(n.serverSyncTree_,c,!p);Ze(n.eventQueue_,e,I),gm(n,i,d,f)});const h=Uc(n,e);$s(n,h),Ze(n.eventQueue_,h,[])}function fm(n){yr(n,"onDisconnectEvents");const e=mr(n),t=_s();Ii(n.onDisconnect_,Y(),(i,r)=>{const o=Qg(i,r,n.serverSyncTree_,e);sc(t,i,o)});let s=[];Ii(t,Y(),(i,r)=>{s=s.concat(xs(n.serverSyncTree_,i,r));const o=Uc(n,i);$s(n,o)}),n.onDisconnect_=_s(),Ze(n.eventQueue_,Y(),s)}function pm(n,e,t){let s;z(e._path)===".info"?s=Jo(n.infoSyncTree_,e,t):s=Jo(n.serverSyncTree_,e,t),Nc(n.eventQueue_,e._path,s)}function ta(n,e,t){let s;z(e._path)===".info"?s=Si(n.infoSyncTree_,e,t):s=Si(n.serverSyncTree_,e,t),Nc(n.eventQueue_,e._path,s)}function _m(n){n.persistentConnection_&&n.persistentConnection_.interrupt(am)}function yr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ge(t,...e)}function gm(n,e,t,s){e&&un(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Mc(n,e,t){return or(n.serverSyncTree_,e,t)||$.EMPTY_NODE}function Ir(n,e=n.transactionQueueTree_){if(e||Vs(n,e),hn(e)){const t=xc(n,e);v(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&mm(n,Wn(e),t)}else Cc(e)&&Us(e,t=>{Ir(n,t)})}function mm(n,e,t){const s=t.map(c=>c.currentWriteId),i=Mc(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];v(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=we(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{yr(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Et(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Vs(n,pr(n.transactionQueueTree_,e)),Ir(n,n.transactionQueueTree_),Ze(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)un(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Ce("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}$s(n,e)}},o)}function $s(n,e){const t=Lc(n,e),s=Wn(t),i=xc(n,t);return vm(n,i,s),s}function vm(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=we(t,l.path);let u=!1,h;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Et(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=lm)u=!0,h="maxretry",i=i.concat(Et(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Mc(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){_r("transaction failed: Data returned ",f,l.path);let p=de(f);typeof f=="object"&&f!=null&&et(f,".priority")||(p=p.updatePriority(d.getPriority()));const g=l.currentWriteId,E=mr(n),U=wc(p,d,E);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=U,l.currentWriteId=Dc(n),o.splice(o.indexOf(g),1),i=i.concat(mc(n.serverSyncTree_,l.path,U,l.currentWriteId,l.applyLocally)),i=i.concat(Et(n.serverSyncTree_,g,!0))}else u=!0,h="nodata",i=i.concat(Et(n.serverSyncTree_,l.currentWriteId,!0))}Ze(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Vs(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)un(s[a]);Ir(n,n.transactionQueueTree_)}function Lc(n,e){let t,s=n.transactionQueueTree_;for(t=z(e);t!==null&&hn(s)===void 0;)s=pr(s,t),e=Z(e),t=z(e);return s}function xc(n,e){const t=[];return Fc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Fc(n,e,t){const s=hn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Us(e,i=>{Fc(n,i,t)})}function Vs(n,e){const t=hn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ec(e,t.length>0?t:void 0)}Us(e,s=>{Vs(n,s)})}function Uc(n,e){const t=Wn(Lc(n,e)),s=pr(n.transactionQueueTree_,e);return Xg(s,i=>{ni(n,i)}),ni(n,s),bc(s,i=>{ni(n,i)}),t}function ni(n,e){const t=hn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(v(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(v(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Et(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ec(e,void 0):t.length=r+1,Ze(n.eventQueue_,Wn(e),i);for(let o=0;o<s.length;o++)un(s[o])}}/**
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
 */function ym(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Im(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const na=function(n,e){const t=wm(n),s=t.namespace;t.domain==="firebase.com"&&Xe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Xe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||xp();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ul(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new X(t.pathString)}},wm=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=ym(n.substring(u,h)));const d=Im(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const sa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Em=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=sa.charAt(t%64),t=Math.floor(t/64);v(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=sa.charAt(e[i]);return v(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class $c{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class Vc{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Cm{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class wr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Gl(this._path)}get ref(){return new tt(this._repo,this._path)}get _queryIdentifier(){const e=$o(this._queryParams),t=zi(e);return t==="{}"?"default":t}get _queryObject(){return $o(this._queryParams)}isEqual(e){if(e=Se(e),!(e instanceof wr))return!1;const t=this._repo===e._repo,s=Ki(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+y_(this._path)}}class tt extends wr{constructor(e,t){super(e,t,new Xi,!1)}get parent(){const e=Yl(this._path);return e===null?null:new tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Mn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new X(e),s=sn(this.ref,e);return new Mn(this._node.getChild(t),s,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Mn(i,sn(this.ref,s),ie)))}hasChild(e){const t=new X(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Hc(n,e){return n=Se(n),n._checkNotDeleted("ref"),e!==void 0?sn(n._root,e):n._root}function sn(n,e){return n=Se(n),z(n._path)===null?sm("child","path",e,!1):Rc("child","path",e,!1),new tt(n._repo,ae(n._path,e))}function bm(n,e){n=Se(n),Ac("push",n._path),kc("push",e,n._path,!0);const t=Oc(n._repo),s=Em(t),i=sn(n,s),r=sn(n,s);let o;return e!=null?o=Bc(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Bc(n,e){n=Se(n),Ac("set",n._path),kc("set",e,n._path,!1);const t=new Ts;return dm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Er{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new $c("value",this,new Mn(e.snapshotNode,new tt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vc(this,e,t):null}matches(e){return e instanceof Er?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Cr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vc(this,e,t):null}createEvent(e,t){v(e.childName!=null,"Child events should have a childName.");const s=sn(new tt(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new $c(e.type,this,new Mn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Cr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Tm(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(u,h)=>{ta(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Cm(t,r||void 0),a=e==="value"?new Er(o):new Cr(e,o);return pm(n._repo,n,a),()=>ta(n._repo,n,a)}function Sm(n,e,t,s){return Tm(n,"value",e,t,s)}Ag(tt);Lg(tt);/**
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
 */const km="FIREBASE_DATABASE_EMULATOR_HOST",Ri={};let Rm=!1;function Am(n,e,t,s){n.repoInfo_=new Ul(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Nm(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Xe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ge("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=na(r,i),a=o.repoInfo,l,c;typeof process<"u"&&wo&&(c=wo[km]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=na(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Qt(Qt.OWNER):new Gp(n.name,n.options,e);im("Invalid Firebase Database URL",o),q(o.path)||Xe("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Om(a,n,u,new qp(n.name,t));return new Dm(h,n)}function Pm(n,e){const t=Ri[e];(!t||t[n.key]!==n)&&Xe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),_m(n),delete t[n.key]}function Om(n,e,t,s){let i=Ri[e.name];i||(i={},Ri[e.name]=i);let r=i[n.toURLString()];return r&&Xe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new cm(n,Rm,t,s),i[n.toURLString()]=r,r}class Dm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(um(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tt(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Pm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xe("Cannot call "+e+" on a deleted database.")}}function Wc(n=Li(),e){const t=Ut(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Zu("database");s&&Mm(t,...s)}return t}function Mm(n,e,t,s={}){n=Se(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Xe("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Xe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Qt(Qt.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:eh(s.mockUserToken,n.app.options.projectId);r=new Qt(o)}Am(i,e,t,r)}/**
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
 */function Lm(n){Pp(an),Be(new Ue("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Nm(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Re(Eo,Co,n),Re(Eo,Co,"esm2017")}Ye.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ye.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Lm();async function xm(n){const e=Wc(),t=Hc(e,n);return new Promise((s,i)=>{Sm(t,r=>{const o=r.val()||[];s(o)},r=>{i(r)})})}async function Fm(n){const e=Wc(),t=Hc(e,"UserData/CompletionTimes"),s=new Date().toLocaleString(),i=bm(t);return Bc(i,{time:n,timestamp:s}),i.key}const zc="@firebase/installations",br="0.6.5";/**
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
 */const jc=1e4,qc=`w:${br}`,Gc="FIS_v2",Um="https://firebaseinstallations.googleapis.com/v1",$m=60*60*1e3,Vm="installations",Hm="Installations";/**
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
 */const Bm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ot=new Ft(Vm,Hm,Bm);function Kc(n){return n instanceof We&&n.code.includes("request-failed")}/**
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
 */function Yc({projectId:n}){return`${Um}/projects/${n}/installations`}function Qc(n){return{token:n.token,requestStatus:2,expiresIn:zm(n.expiresIn),creationTime:Date.now()}}async function Jc(n,e){const s=(await e.json()).error;return Ot.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Xc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Wm(n,{refreshToken:e}){const t=Xc(n);return t.append("Authorization",jm(e)),t}async function Zc(n){const e=await n();return e.status>=500&&e.status<600?n():e}function zm(n){return Number(n.replace("s","000"))}function jm(n){return`${Gc} ${n}`}/**
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
 */async function qm({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Yc(n),i=Xc(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:t,authVersion:Gc,appId:n.appId,sdkVersion:qc},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Zc(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Qc(c.authToken)}}else throw await Jc("Create Installation",l)}/**
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
 */function eu(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const Km=/^[cdef][\w-]{21}$/,Ai="";function Ym(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Qm(n);return Km.test(t)?t:Ai}catch{return Ai}}function Qm(n){return Gm(n).substr(0,22)}/**
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
 */function Hs(n){return`${n.appName}!${n.appId}`}/**
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
 */const tu=new Map;function nu(n,e){const t=Hs(n);su(t,e),Jm(t,e)}function su(n,e){const t=tu.get(n);if(t)for(const s of t)s(e)}function Jm(n,e){const t=Xm();t&&t.postMessage({key:n,fid:e}),Zm()}let Ct=null;function Xm(){return!Ct&&"BroadcastChannel"in self&&(Ct=new BroadcastChannel("[Firebase] FID Change"),Ct.onmessage=n=>{su(n.data.key,n.data.fid)}),Ct}function Zm(){tu.size===0&&Ct&&(Ct.close(),Ct=null)}/**
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
 */const ev="firebase-installations-database",tv=1,Dt="firebase-installations-store";let si=null;function Tr(){return si||(si=Ba(ev,tv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Dt)}}})),si}async function Cs(n,e){const t=Hs(n),i=(await Tr()).transaction(Dt,"readwrite"),r=i.objectStore(Dt),o=await r.get(t);return await r.put(e,t),await i.done,(!o||o.fid!==e.fid)&&nu(n,e.fid),e}async function iu(n){const e=Hs(n),s=(await Tr()).transaction(Dt,"readwrite");await s.objectStore(Dt).delete(e),await s.done}async function Bs(n,e){const t=Hs(n),i=(await Tr()).transaction(Dt,"readwrite"),r=i.objectStore(Dt),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&nu(n,a.fid),a}/**
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
 */async function Sr(n){let e;const t=await Bs(n.appConfig,s=>{const i=nv(s),r=sv(n,i);return e=r.registrationPromise,r.installationEntry});return t.fid===Ai?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function nv(n){const e=n||{fid:Ym(),registrationStatus:0};return ru(e)}function sv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ot.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=iv(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:rv(n)}:{installationEntry:e}}async function iv(n,e){try{const t=await qm(n,e);return Cs(n.appConfig,t)}catch(t){throw Kc(t)&&t.customData.serverCode===409?await iu(n.appConfig):await Cs(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function rv(n){let e=await ia(n.appConfig);for(;e.registrationStatus===1;)await eu(100),e=await ia(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Sr(n);return s||t}return e}function ia(n){return Bs(n,e=>{if(!e)throw Ot.create("installation-not-found");return ru(e)})}function ru(n){return ov(n)?{fid:n.fid,registrationStatus:0}:n}function ov(n){return n.registrationStatus===1&&n.registrationTime+jc<Date.now()}/**
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
 */async function av({appConfig:n,heartbeatServiceProvider:e},t){const s=lv(n,t),i=Wm(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:qc,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Zc(()=>fetch(s,a));if(l.ok){const c=await l.json();return Qc(c)}else throw await Jc("Generate Auth Token",l)}function lv(n,{fid:e}){return`${Yc(n)}/${e}/authTokens:generate`}/**
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
 */async function kr(n,e=!1){let t;const s=await Bs(n.appConfig,r=>{if(!ou(r))throw Ot.create("not-registered");const o=r.authToken;if(!e&&hv(o))return r;if(o.requestStatus===1)return t=cv(n,e),r;{if(!navigator.onLine)throw Ot.create("app-offline");const a=fv(r);return t=uv(n,a),a}});return t?await t:s.authToken}async function cv(n,e){let t=await ra(n.appConfig);for(;t.authToken.requestStatus===1;)await eu(100),t=await ra(n.appConfig);const s=t.authToken;return s.requestStatus===0?kr(n,e):s}function ra(n){return Bs(n,e=>{if(!ou(e))throw Ot.create("not-registered");const t=e.authToken;return pv(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function uv(n,e){try{const t=await av(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Cs(n.appConfig,s),t}catch(t){if(Kc(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await iu(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cs(n.appConfig,s)}throw t}}function ou(n){return n!==void 0&&n.registrationStatus===2}function hv(n){return n.requestStatus===2&&!dv(n)}function dv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+$m}function fv(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function pv(n){return n.requestStatus===1&&n.requestTime+jc<Date.now()}/**
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
 */async function _v(n){const e=n,{installationEntry:t,registrationPromise:s}=await Sr(e);return s?s.catch(console.error):kr(e).catch(console.error),t.fid}/**
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
 */async function gv(n,e=!1){const t=n;return await mv(t),(await kr(t,e)).token}async function mv(n){const{registrationPromise:e}=await Sr(n);e&&await e}/**
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
 */function vv(n){if(!n||!n.options)throw ii("App Configuration");if(!n.name)throw ii("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ii(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ii(n){return Ot.create("missing-app-config-values",{valueName:n})}/**
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
 */const au="installations",yv="installations-internal",Iv=n=>{const e=n.getProvider("app").getImmediate(),t=vv(e),s=Ut(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},wv=n=>{const e=n.getProvider("app").getImmediate(),t=Ut(e,au).getImmediate();return{getId:()=>_v(t),getToken:i=>gv(t,i)}};function Ev(){Be(new Ue(au,Iv,"PUBLIC")),Be(new Ue(yv,wv,"PRIVATE"))}Ev();Re(zc,br);Re(zc,br,"esm2017");/**
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
 */const bs="analytics",Cv="firebase_id",bv="origin",Tv=60*1e3,Sv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rr="https://www.googletagmanager.com/gtag/js";/**
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
 */const be=new ks("@firebase/analytics");/**
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
 */const kv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ke=new Ft("analytics","Analytics",kv);/**
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
 */function Rv(n){if(!n.startsWith(Rr)){const e=ke.create("invalid-gtag-resource",{gtagURL:n});return be.warn(e.message),""}return n}function lu(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Av(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Nv(n,e){const t=Av("firebase-js-sdk-policy",{createScriptURL:Rv}),s=document.createElement("script"),i=`${Rr}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Pv(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Ov(n,e,t,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await lu(t)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){be.error(a)}n("config",i,r)}async function Dv(n,e,t,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await lu(t);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",s,i||{})}catch(r){be.error(r)}}function Mv(n,e,t,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await Dv(n,e,t,a,l)}else if(r==="config"){const[a,l]=o;await Ov(n,e,t,s,a,l)}else if(r==="consent"){const[a]=o;n("consent","update",a)}else if(r==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){be.error(a)}}return i}function Lv(n,e,t,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Mv(r,n,e,t),{gtagCore:r,wrappedGtag:window[i]}}function xv(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Rr)&&t.src.includes(n))return t;return null}/**
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
 */const Fv=30,Uv=1e3;class $v{constructor(e={},t=Uv){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const cu=new $v;function Vv(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Hv(n){var e;const{appId:t,apiKey:s}=n,i={method:"GET",headers:Vv(s)},r=Sv.replace("{app-id}",t),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ke.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Bv(n,e=cu,t){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw ke.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw ke.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jv;return setTimeout(async()=>{a.abort()},t!==void 0?t:Tv),uu({appId:s,apiKey:i,measurementId:r},o,a,e)}async function uu(n,{throttleEndTimeMillis:e,backoffCount:t},s,i=cu){var r;const{appId:o,measurementId:a}=n;try{await Wv(s,e)}catch(l){if(a)return be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Hv(n);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!zv(c)){if(i.deleteThrottleMetadata(o),a)return be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Qr(t,i.intervalMillis,Fv):Qr(t,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return i.setThrottleMetadata(o,h),be.debug(`Calling attemptFetch again in ${u} millis`),uu(n,h,s,i)}}function Wv(n,e){return new Promise((t,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(r),s(ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zv(n){if(!(n instanceof We)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class jv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qv(n,e,t,s,i){if(i&&i.global){n("event",t,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});n("event",t,o)}}/**
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
 */async function Gv(){if(Fa())try{await Ua()}catch(n){return be.warn(ke.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return be.warn(ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Kv(n,e,t,s,i,r,o){var a;const l=Bv(n);l.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&be.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>be.error(f)),e.push(l);const c=Gv().then(f=>{if(f)return s.getId()}),[u,h]=await Promise.all([l,c]);xv(r)||Nv(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[bv]="firebase",d.update=!0,h!=null&&(d[Cv]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class Yv{constructor(e){this.app=e}_delete(){return delete En[this.app.options.appId],Promise.resolve()}}let En={},oa=[];const aa={};let ri="dataLayer",Qv="gtag",la,hu,ca=!1;function Jv(){const n=[];if(Ma()&&n.push("This is a browser extension environment."),nh()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),t=ke.create("invalid-analytics-context",{errorInfo:e});be.warn(t.message)}}function Xv(n,e,t){Jv();const s=n.options.appId;if(!s)throw ke.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ke.create("no-api-key");if(En[s]!=null)throw ke.create("already-exists",{id:s});if(!ca){Pv(ri);const{wrappedGtag:r,gtagCore:o}=Lv(En,oa,aa,ri,Qv);hu=r,la=o,ca=!0}return En[s]=Kv(n,oa,aa,e,la,ri,t),new Yv(n)}function Zv(n=Li()){n=Se(n);const e=Ut(n,bs);return e.isInitialized()?e.getImmediate():ey(n)}function ey(n,e={}){const t=Ut(n,bs);if(t.isInitialized()){const i=t.getImmediate();if(bn(e,t.getOptions()))return i;throw ke.create("already-initialized")}return t.initialize({options:e})}function du(n,e,t,s){n=Se(n),qv(hu,En[n.app.options.appId],e,t,s).catch(i=>be.error(i))}const ua="@firebase/analytics",ha="0.10.1";function ty(){Be(new Ue(bs,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Xv(s,i,t)},"PUBLIC")),Be(new Ue("analytics-internal",n,"PRIVATE")),Re(ua,ha),Re(ua,ha,"esm2017");function n(e){try{const t=e.getProvider(bs).getImmediate();return{logEvent:(s,i,r)=>du(t,s,i,r)}}catch(t){throw ke.create("interop-component-reg-failed",{reason:t})}}}ty();function ny(n){let e,t,s=je(n[2])+"",i,r,o,a=je(n[1])+"",l,c,u,h=je(n[0])+"",d;return{c(){e=b("span"),t=b("span"),i=me(s),r=me(":"),o=b("span"),l=me(a),c=me(":"),u=b("span"),d=me(h),this.h()},l(f){e=T(f,"SPAN",{class:!0});var p=W(e);t=T(p,"SPAN",{class:!0});var I=W(t);i=ve(I,s),I.forEach(_),r=ve(p,":"),o=T(p,"SPAN",{class:!0});var g=W(o);l=ve(g,a),g.forEach(_),c=ve(p,":"),u=T(p,"SPAN",{class:!0});var E=W(u);d=ve(E,h),E.forEach(_),p.forEach(_),this.h()},h(){R(t,"class","value"),R(o,"class","value"),R(u,"class","value"),R(e,"class","timer svelte-1y1osaq")},m(f,p){O(f,e,p),y(e,t),y(t,i),y(e,r),y(e,o),y(o,l),y(e,c),y(e,u),y(u,d)},p(f,[p]){p&4&&s!==(s=je(f[2])+"")&&$e(i,s),p&2&&a!==(a=je(f[1])+"")&&$e(l,a),p&1&&h!==(h=je(f[0])+"")&&$e(d,h)},i:_e,o:_e,d(f){f&&_(e)}}}function je(n){return n<10?`0${n}`:n.toString()}function sy(n,e,t){let s,i,r,o,a,l,{elapsedSeconds:c}=e,u=Date.now(),h=ai(!1);Yn(n,h,E=>t(12,o=E));let d=ai(0);Yn(n,d,E=>t(13,a=E));const f=Nu(0,function(U){const S=setInterval(()=>{o&&(d.set(Math.round((Date.now()-u)/1e3)),U(a))},1e3);return function(){clearInterval(S)}});Yn(n,f,E=>t(10,l=E));function p(){o||(u=Date.now()-a*1e3,h.set(!0))}function I(){o&&h.set(!1)}function g(){I(),u=Date.now(),d.set(0)}return n.$$set=E=>{"elapsedSeconds"in E&&t(6,c=E.elapsedSeconds)},n.$$.update=()=>{n.$$.dirty&1024&&t(2,s=Math.floor(l/3600)),n.$$.dirty&1028&&t(1,i=Math.floor((l-s*3600)/60)),n.$$.dirty&1030&&t(0,r=l-s*3600-i*60),n.$$.dirty&7&&t(6,c=je(s)+":"+je(i)+":"+je(r))},[r,i,s,h,d,f,c,p,I,g,l]}class iy extends Lt{constructor(e){super(),xt(this,e,sy,ny,Mt,{elapsedSeconds:6,start:7,stop:8,reset:9})}get start(){return this.$$.ctx[7]}get stop(){return this.$$.ctx[8]}get reset(){return this.$$.ctx[9]}}const ry=""+new URL("../assets/ex-solution.DMtatkDj.png",import.meta.url).href,oy=""+new URL("../assets/ex-letter-box.mgBNjwYG.png",import.meta.url).href;function ay(n){let e,t="Find the 8-letter circle word",s,i,r="<li>There are 2 words to find.</li> <li>Letters may only be used once and have to be in the letter bank.</li> <li>The red circles are shared letters between the two words.</li> <li>You must fill in every word before submitting.</li>",o,a,l="Example",c,u,h="If we had these letters:",d,f,p,I,g,E=`We could spell the words 
    <b><span style="color: red;">M</span>USI<span style="color: red;">C</span></b> 
    and 
    <b><span style="color: red;">C</span>HAR<span style="color: red;">M</span> </b>.`,U,A,S='Notice how these words share an <b><span style="color: red;">M</span></b> and a <b><span style="color: red;">C</span></b>.',V,L,k="One correct solution:",C,w,D,ne,P,B="Remember there can be more than one solution.";return{c(){e=b("h3"),e.textContent=t,s=x(),i=b("ul"),i.innerHTML=r,o=x(),a=b("h3"),a.textContent=l,c=x(),u=b("p"),u.textContent=h,d=x(),f=b("img"),I=x(),g=b("p"),g.innerHTML=E,U=x(),A=b("p"),A.innerHTML=S,V=x(),L=b("p"),L.textContent=k,C=x(),w=b("img"),ne=x(),P=b("p"),P.textContent=B,this.h()},l(m){e=T(m,"H3",{"data-svelte-h":!0}),J(e)!=="svelte-1j8js8f"&&(e.textContent=t),s=F(m),i=T(m,"UL",{class:!0,"data-svelte-h":!0}),J(i)!=="svelte-1eowta5"&&(i.innerHTML=r),o=F(m),a=T(m,"H3",{"data-svelte-h":!0}),J(a)!=="svelte-qg4234"&&(a.textContent=l),c=F(m),u=T(m,"P",{"data-svelte-h":!0}),J(u)!=="svelte-eqhtsw"&&(u.textContent=h),d=F(m),f=T(m,"IMG",{src:!0,alt:!0,style:!0}),I=F(m),g=T(m,"P",{"data-svelte-h":!0}),J(g)!=="svelte-9c7ajy"&&(g.innerHTML=E),U=F(m),A=T(m,"P",{"data-svelte-h":!0}),J(A)!=="svelte-1xer9do"&&(A.innerHTML=S),V=F(m),L=T(m,"P",{"data-svelte-h":!0}),J(L)!=="svelte-1tryhud"&&(L.textContent=k),C=F(m),w=T(m,"IMG",{src:!0,alt:!0,style:!0}),ne=F(m),P=T(m,"P",{"data-svelte-h":!0}),J(P)!=="svelte-1imbt6f"&&(P.textContent=B),this.h()},h(){R(i,"class","definition-list"),oi(f.src,p=oy)||R(f,"src",p),R(f,"alt","Welcome"),Wt(f,"width","350px"),Wt(f,"height","auto"),oi(w.src,D=ry)||R(w,"src",D),R(w,"alt","Welcome"),Wt(w,"width","150px"),Wt(w,"height","auto")},m(m,G){O(m,e,G),O(m,s,G),O(m,i,G),O(m,o,G),O(m,a,G),O(m,c,G),O(m,u,G),O(m,d,G),O(m,f,G),O(m,I,G),O(m,g,G),O(m,U,G),O(m,A,G),O(m,V,G),O(m,L,G),O(m,C,G),O(m,w,G),O(m,ne,G),O(m,P,G)},p:_e,i:_e,o:_e,d(m){m&&(_(e),_(s),_(i),_(o),_(a),_(c),_(u),_(d),_(f),_(I),_(g),_(U),_(A),_(V),_(L),_(C),_(w),_(ne),_(P))}}}class fu extends Lt{constructor(e){super(),xt(this,e,null,ay,Mt,{})}}function da(n,e,t){const s=n.slice();return s[32]=e[t],s}function fa(n,e,t){const s=n.slice();return s[35]=e[t],s[37]=t,s}function pa(n,e,t){const s=n.slice();return s[35]=e[t],s[37]=t,s}function ly(n){let e,t="Loading Game...";return{c(){e=b("p"),e.textContent=t},l(s){e=T(s,"P",{"data-svelte-h":!0}),J(e)!=="svelte-kk77ic"&&(e.textContent=t)},m(s,i){O(s,e,i)},p:_e,d(s){s&&_(e)}}}function cy(n){let e,t,s,i=[],r=new Map,o,a,l='<i class="fa-solid fa-eraser"></i>',c,u,h='<i class="fa-solid fa-shuffle"></i>',d,f,p='<i class="fa-solid fa-delete-left"></i>',I,g,E="Enter",U,A,S,V,L,k,C=ht(n[4]),w=[];for(let P=0;P<C.length;P+=1)w[P]=_a(pa(n,C,P));let D=ht(n[5]);const ne=P=>P[37];for(let P=0;P<D.length;P+=1){let B=fa(n,D,P),m=ne(B);r.set(m,i[P]=ga(m,B))}return{c(){e=b("div");for(let P=0;P<w.length;P+=1)w[P].c();t=x(),s=b("div");for(let P=0;P<i.length;P+=1)i[P].c();o=x(),a=b("div"),a.innerHTML=l,c=x(),u=b("div"),u.innerHTML=h,d=x(),f=b("div"),f.innerHTML=p,I=x(),g=b("div"),g.textContent=E,U=x(),A=b("p"),S=me("Puzzle for "),V=me(n[9]),this.h()},l(P){e=T(P,"DIV",{class:!0});var B=W(e);for(let se=0;se<w.length;se+=1)w[se].l(B);B.forEach(_),t=F(P),s=T(P,"DIV",{class:!0});var m=W(s);for(let se=0;se<i.length;se+=1)i[se].l(m);o=F(m),a=T(m,"DIV",{class:!0,"data-svelte-h":!0}),J(a)!=="svelte-pcdrzy"&&(a.innerHTML=l),c=F(m),u=T(m,"DIV",{class:!0,"data-svelte-h":!0}),J(u)!=="svelte-1nazuqy"&&(u.innerHTML=h),d=F(m),f=T(m,"DIV",{class:!0,"data-svelte-h":!0}),J(f)!=="svelte-1lzlrm1"&&(f.innerHTML=p),I=F(m),g=T(m,"DIV",{class:!0,"data-svelte-h":!0}),J(g)!=="svelte-10umx21"&&(g.textContent=E),m.forEach(_),U=F(P),A=T(P,"P",{class:!0});var G=W(A);S=ve(G,"Puzzle for "),V=ve(G,n[9]),G.forEach(_),this.h()},h(){R(e,"class","circle-container"),R(a,"class","key"),R(u,"class","key"),R(f,"class","key"),R(g,"class","key enter-key"),R(s,"class","keyboard"),R(A,"class","date")},m(P,B){O(P,e,B);for(let m=0;m<w.length;m+=1)w[m]&&w[m].m(e,null);O(P,t,B),O(P,s,B);for(let m=0;m<i.length;m+=1)i[m]&&i[m].m(s,null);y(s,o),y(s,a),y(s,c),y(s,u),y(s,d),y(s,f),y(s,I),y(s,g),O(P,U,B),O(P,A,B),y(A,S),y(A,V),L||(k=[ye(a,"click",n[15]),ye(u,"click",n[16]),ye(f,"click",n[17]),ye(g,"click",n[14])],L=!0)},p(P,B){if(B[0]&2064){C=ht(P[4]);let m;for(m=0;m<C.length;m+=1){const G=pa(P,C,m);w[m]?w[m].p(G,B):(w[m]=_a(G),w[m].c(),w[m].m(e,null))}for(;m<w.length;m+=1)w[m].d(1);w.length=C.length}B[0]&9248&&(D=ht(P[5]),i=ba(i,B,ne,1,P,D,r,s,Du,ga,o,fa)),B[0]&512&&$e(V,P[9])},d(P){P&&(_(e),_(t),_(s),_(U),_(A)),Ea(w,P);for(let B=0;B<i.length;B+=1)i[B].d();L=!1,Ln(k)}}}function _a(n){let e,t=(n[35]==""?"":n[35])+"",s,i,r;return{c(){e=b("div"),s=me(t),i=x(),this.h()},l(o){e=T(o,"DIV",{class:!0,style:!0});var a=W(e);s=ve(a,t),i=F(a),a.forEach(_),this.h()},h(){R(e,"class","circle"),R(e,"style",r=`
              left: calc(38% + ${Math.cos(n[37]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(n[37]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
          `),gn(e,"filled",n[35]!=""),gn(e,"shared",n[11].includes(n[37]))},m(o,a){O(o,e,a),y(e,s),y(e,i)},p(o,a){a[0]&16&&t!==(t=(o[35]==""?"":o[35])+"")&&$e(s,t),a[0]&16&&r!==(r=`
              left: calc(38% + ${Math.cos(o[37]/o[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(o[37]/o[4].length*2*Math.PI-Math.PI/2)*100}px);
          `)&&R(e,"style",r),a[0]&16&&gn(e,"filled",o[35]!="")},d(o){o&&_(e)}}}function ga(n,e){let t,s=e[35]+"",i,r,o,a;function l(){return e[25](e[35],e[37])}return{key:n,first:null,c(){t=b("div"),i=me(s),r=x(),this.h()},l(c){t=T(c,"DIV",{class:!0});var u=W(t);i=ve(u,s),r=F(u),u.forEach(_),this.h()},h(){R(t,"class","key"),gn(t,"disabled",e[10](e[37])),this.first=t},m(c,u){O(c,t,u),y(t,i),y(t,r),o||(a=ye(t,"click",l),o=!0)},p(c,u){e=c,u[0]&32&&s!==(s=e[35]+"")&&$e(i,s),u[0]&1056&&gn(t,"disabled",e[10](e[37]))},d(c){c&&_(t),o=!1,a()}}}function ma(n){let e,t=ya(n[32])+"",s;return{c(){e=b("div"),s=me(t),this.h()},l(i){e=T(i,"DIV",{class:!0});var r=W(e);s=ve(r,t),r.forEach(_),this.h()},h(){R(e,"class","solution")},m(i,r){O(i,e,r),y(e,s)},p(i,r){r[0]&8&&t!==(t=ya(i[32])+"")&&$e(s,t)},d(i){i&&_(e)}}}function uy(n){let e,t,s,i,r,o,a,l="Other Possible Solutions",c,u,h,d,f,p,I,g,E="Share",U,A,S,V,L=ht(n[3]),k=[];for(let C=0;C<L.length;C+=1)k[C]=ma(da(n,L,C));return{c(){e=b("span"),t=me("Solved in "),s=me(n[7]),i=x(),r=b("hr"),o=x(),a=b("span"),a.textContent=l,c=x();for(let C=0;C<k.length;C+=1)k[C].c();u=x(),h=b("br"),d=x(),f=b("div"),p=b("div"),I=x(),g=b("button"),g.textContent=E,U=x(),A=b("div"),this.h()},l(C){e=T(C,"SPAN",{class:!0});var w=W(e);t=ve(w,"Solved in "),s=ve(w,n[7]),w.forEach(_),i=F(C),r=T(C,"HR",{}),o=F(C),a=T(C,"SPAN",{class:!0,"data-svelte-h":!0}),J(a)!=="svelte-zm2m22"&&(a.textContent=l),c=F(C);for(let ne=0;ne<k.length;ne+=1)k[ne].l(C);u=F(C),h=T(C,"BR",{}),d=F(C),f=T(C,"DIV",{class:!0});var D=W(f);p=T(D,"DIV",{class:!0}),W(p).forEach(_),I=F(D),g=T(D,"BUTTON",{class:!0,"data-svelte-h":!0}),J(g)!=="svelte-1urjot1"&&(g.textContent=E),U=F(D),A=T(D,"DIV",{class:!0}),W(A).forEach(_),D.forEach(_),this.h()},h(){R(e,"class","sub-header"),R(a,"class","sub-header"),R(p,"class","spacer"),R(g,"class","share-button"),R(A,"class","spacer"),R(f,"class","flex-container")},m(C,w){O(C,e,w),y(e,t),y(e,s),O(C,i,w),O(C,r,w),O(C,o,w),O(C,a,w),O(C,c,w);for(let D=0;D<k.length;D+=1)k[D]&&k[D].m(C,w);O(C,u,w),O(C,h,w),O(C,d,w),O(C,f,w),y(f,p),y(f,I),y(f,g),y(f,U),y(f,A),S||(V=ye(g,"click",n[18]),S=!0)},p(C,w){if(w[0]&128&&$e(s,C[7]),w[0]&8){L=ht(C[3]);let D;for(D=0;D<L.length;D+=1){const ne=da(C,L,D);k[D]?k[D].p(ne,w):(k[D]=ma(ne),k[D].c(),k[D].m(u.parentNode,u))}for(;D<k.length;D+=1)k[D].d(1);k.length=L.length}},d(C){C&&(_(e),_(i),_(r),_(o),_(a),_(c),_(u),_(h),_(d),_(f)),Ea(k,C),S=!1,V()}}}function hy(n){let e,t=`<span class="styled-header">Congratulations!</span> <br/>
      Share your results with your friends.`;return{c(){e=b("div"),e.innerHTML=t,this.h()},l(s){e=T(s,"DIV",{slot:!0,"data-svelte-h":!0}),J(e)!=="svelte-wca559"&&(e.innerHTML=t),this.h()},h(){R(e,"slot","header")},m(s,i){O(s,e,i)},p:_e,d(s){s&&_(e)}}}function dy(n){let e,t;return e=new fu({}),{c(){Ne(e.$$.fragment)},l(s){Pe(e.$$.fragment,s)},m(s,i){Oe(e,s,i),t=!0},i(s){t||(fe(e.$$.fragment,s),t=!0)},o(s){pe(e.$$.fragment,s),t=!1},d(s){De(e,s)}}}function fy(n){let e,t='<span class="styled-header">How To Play</span>';return{c(){e=b("h2"),e.innerHTML=t,this.h()},l(s){e=T(s,"H2",{slot:!0,"data-svelte-h":!0}),J(e)!=="svelte-1kct8zk"&&(e.innerHTML=t),this.h()},h(){R(e,"slot","header")},m(s,i){O(s,e,i)},p:_e,d(s){s&&_(e)}}}function py(n){let e,t,s,i,r="Resume",o,a,l,c;return{c(){e=b("div"),t=b("div"),s=x(),i=b("button"),i.textContent=r,o=x(),a=b("div"),this.h()},l(u){e=T(u,"DIV",{class:!0});var h=W(e);t=T(h,"DIV",{class:!0}),W(t).forEach(_),s=F(h),i=T(h,"BUTTON",{class:!0,"data-svelte-h":!0}),J(i)!=="svelte-o41kx2"&&(i.textContent=r),o=F(h),a=T(h,"DIV",{class:!0}),W(a).forEach(_),h.forEach(_),this.h()},h(){R(t,"class","spacer"),R(i,"class","share-button"),R(a,"class","spacer"),R(e,"class","flex-container")},m(u,h){O(u,e,h),y(e,t),y(e,s),y(e,i),y(e,o),y(e,a),l||(c=ye(i,"click",n[20]),l=!0)},p:_e,d(u){u&&_(e),l=!1,c()}}}function _y(n){let e,t='<span class="styled-header">Paused</span>';return{c(){e=b("h2"),e.innerHTML=t,this.h()},l(s){e=T(s,"H2",{slot:!0,"data-svelte-h":!0}),J(e)!=="svelte-1ught0z"&&(e.innerHTML=t),this.h()},h(){R(e,"slot","header")},m(s,i){O(s,e,i)},p:_e,d(s){s&&_(e)}}}function gy(n){let e,t,s,i,r="LetterLoop",o,a,l,c,u,h,d,f,p='<i class="fa-regular fa-circle-question"></i> <p class="how-to-play">How to play</p>',I,g,E,U,A,S,V,L,k,C,w,D='<i class="fa-solid fa-pause"></i>',ne,P,B,m,G,se,ee,he,N,re,oe,nt,Vt;U=new Sa({});function zn(M){n[24](M)}let Ar={};n[7]!==void 0&&(Ar.elapsedSeconds=n[7]),L=new iy({props:Ar}),n[23](L),ut.push(()=>zt(L,"elapsedSeconds",zn));function Nr(M,K){return M[3].length>0?cy:ly}let jn=Nr(n),Ae=jn(n);function pu(M){n[26](M)}let Pr={$$slots:{header:[hy],default:[uy]},$$scope:{ctx:n}};n[0]!==void 0&&(Pr.showModal=n[0]),B=new Jn({props:Pr}),ut.push(()=>zt(B,"showModal",pu));function _u(M){n[27](M)}let Or={$$slots:{header:[fy],default:[dy]},$$scope:{ctx:n}};n[1]!==void 0&&(Or.showModal=n[1]),se=new Jn({props:Or}),ut.push(()=>zt(se,"showModal",_u));function gu(M){n[28](M)}let Dr={hide_close:!0,$$slots:{header:[_y],default:[py]},$$scope:{ctx:n}};return n[2]!==void 0&&(Dr.showModal=n[2]),N=new Jn({props:Dr}),ut.push(()=>zt(N,"showModal",gu)),{c(){e=b("main"),t=b("div"),s=b("div"),i=b("p"),i.textContent=r,o=x(),a=b("small"),l=me("(public beta) · Edited by "),c=me(n[8]),u=x(),h=b("div"),d=x(),f=b("div"),f.innerHTML=p,I=x(),g=b("div"),E=x(),Ne(U.$$.fragment),A=x(),S=b("div"),V=b("div"),Ne(L.$$.fragment),C=x(),w=b("div"),w.innerHTML=D,ne=x(),Ae.c(),P=x(),Ne(B.$$.fragment),G=x(),Ne(se.$$.fragment),he=x(),Ne(N.$$.fragment),this.h()},l(M){e=T(M,"MAIN",{});var K=W(e);t=T(K,"DIV",{class:!0});var ze=W(t);s=T(ze,"DIV",{class:!0});var st=W(s);i=T(st,"P",{class:!0,"data-svelte-h":!0}),J(i)!=="svelte-1qmyjs9"&&(i.textContent=r),o=F(st),a=T(st,"SMALL",{style:!0});var vt=W(a);l=ve(vt,"(public beta) · Edited by "),c=ve(vt,n[8]),vt.forEach(_),st.forEach(_),u=F(ze),h=T(ze,"DIV",{class:!0}),W(h).forEach(_),d=F(ze),f=T(ze,"DIV",{class:!0,"data-svelte-h":!0}),J(f)!=="svelte-1i75e1h"&&(f.innerHTML=p),ze.forEach(_),I=F(K),g=T(K,"DIV",{class:!0}),W(g).forEach(_),E=F(K),Pe(U.$$.fragment,K),A=F(K),S=T(K,"DIV",{class:!0});var it=W(S);V=T(it,"DIV",{class:!0});var Mr=W(V);Pe(L.$$.fragment,Mr),Mr.forEach(_),C=F(it),w=T(it,"DIV",{"data-svelte-h":!0}),J(w)!=="svelte-1mqs5ls"&&(w.innerHTML=D),it.forEach(_),ne=F(K),Ae.l(K),K.forEach(_),P=F(M),Pe(B.$$.fragment,M),G=F(M),Pe(se.$$.fragment,M),he=F(M),Pe(N.$$.fragment,M),this.h()},h(){R(i,"class","title"),Wt(a,"color","rgb(46, 46, 46)"),R(s,"class","title-container "),R(h,"class","spacer"),R(f,"class","help-container"),R(t,"class","nav-flex-container"),R(g,"class","divider"),R(V,"class","timer-container"),R(S,"class","flex-container")},m(M,K){O(M,e,K),y(e,t),y(t,s),y(s,i),y(s,o),y(s,a),y(a,l),y(a,c),y(t,u),y(t,h),y(t,d),y(t,f),y(e,I),y(e,g),y(e,E),Oe(U,e,null),y(e,A),y(e,S),y(S,V),Oe(L,V,null),y(S,C),y(S,w),y(e,ne),Ae.m(e,null),O(M,P,K),Oe(B,M,K),O(M,G,K),Oe(se,M,K),O(M,he,K),Oe(N,M,K),oe=!0,nt||(Vt=[ye(window,"keydown",Ru(n[12])),ye(f,"click",n[22]),ye(w,"click",n[19])],nt=!0)},p(M,K){(!oe||K[0]&256)&&$e(c,M[8]);const ze={};!k&&K[0]&128&&(k=!0,ze.elapsedSeconds=M[7],Bt(()=>k=!1)),L.$set(ze),jn===(jn=Nr(M))&&Ae?Ae.p(M,K):(Ae.d(1),Ae=jn(M),Ae&&(Ae.c(),Ae.m(e,null)));const st={};K[0]&136|K[1]&256&&(st.$$scope={dirty:K,ctx:M}),!m&&K[0]&1&&(m=!0,st.showModal=M[0],Bt(()=>m=!1)),B.$set(st);const vt={};K[1]&256&&(vt.$$scope={dirty:K,ctx:M}),!ee&&K[0]&2&&(ee=!0,vt.showModal=M[1],Bt(()=>ee=!1)),se.$set(vt);const it={};K[1]&256&&(it.$$scope={dirty:K,ctx:M}),!re&&K[0]&4&&(re=!0,it.showModal=M[2],Bt(()=>re=!1)),N.$set(it)},i(M){oe||(fe(U.$$.fragment,M),fe(L.$$.fragment,M),fe(B.$$.fragment,M),fe(se.$$.fragment,M),fe(N.$$.fragment,M),oe=!0)},o(M){pe(U.$$.fragment,M),pe(L.$$.fragment,M),pe(B.$$.fragment,M),pe(se.$$.fragment,M),pe(N.$$.fragment,M),oe=!1},d(M){M&&(_(e),_(P),_(G),_(he)),De(U),n[23](null),De(L),Ae.d(),De(B,M),De(se,M),De(N,M),nt=!1,Ln(Vt)}}}function va(n){return n.split("").sort(()=>Math.random()-.5).join("")}function ya(n){const e=n.substring(0,5),t=n.substring(4,8)+e[0];return`${e} + ${t}`}function my(n,e,t){let s,i,r=!1,o=!1,a=!1,l=[];l=l.map(N=>N.toLowerCase());let c,u=Array(8).fill(""),h=[],d,f=0,p=[0,4],I,g=0,E="---";wu(async()=>{const N=Zv(El);du(N,"screen_view",{firebase_screen:"game_board_view",firebase_screen_class:"game_board_controller"});const re=new Date,oe={year:"numeric",month:"2-digit",day:"2-digit"},nt=re.toLocaleDateString("en-US",oe).replace(/\//g,"-");try{if(await Np()){const Vt=await xm("solutions/"+nt),zn=Object.values(Vt);t(8,E=zn[0]),t(3,l=zn[1]),c=l[0],t(5,d=va(c)),I.start()}}catch(Vt){console.error("Error fetching data from Firebase:",Vt)}});function U(N,re){for(let oe=0;oe<N.length;oe++)if(N[oe]==re&&!s(oe))return oe;return-1}function A(N){const re=N.key.toLowerCase(),oe=U(d,re);N.keyCode===13?V():N.keyCode===8?C():oe!==-1&&!s(oe)&&S(re,oe)}function S(N,re){f<u.length&&!s(re)&&(t(4,u[f]=N,u),f+=1,t(21,h=[...h,re]))}function V(){const N=u.join("");l.includes(N)?(t(0,r=!0),I.stop(),Fm(g)):(Qn.default("Incorrect",1e3),attempts+=1)}function L(){t(4,u=Array(8).fill("")),f=0,t(21,h=[])}function k(){t(5,d=va(c)),L()}function C(){f>0&&(t(4,u[f-1]="",u),f-=1,t(21,h=h.slice(0,-1)))}function w(){let N=`I completed the LetterLoop in: 
🔴`+g+"🔴";navigator.clipboard.writeText(N).then(()=>{console.log("Text successfully copied to clipboard:",N),Qn.default("Copied Text!",1e3)}).catch(re=>{console.error("Error copying text to clipboard:",re),Qn.default("Error",1e3)})}function D(){I.stop(),t(2,a=!0)}function ne(){I.start(),t(2,a=!1)}const P=()=>t(1,o=!0);function B(N){ut[N?"unshift":"push"](()=>{I=N,t(6,I)})}function m(N){g=N,t(7,g)}const G=(N,re)=>S(N,re);function se(N){r=N,t(0,r)}function ee(N){o=N,t(1,o)}function he(N){a=N,t(2,a)}return n.$$.update=()=>{n.$$.dirty[0]&2097152&&t(10,s=N=>h.includes(N))},t(9,i=new Date().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})),[r,o,a,l,u,d,I,g,E,i,s,p,A,S,V,L,k,C,w,D,ne,h,P,B,m,G,se,ee,he]}class vy extends Lt{constructor(e){super(),xt(this,e,my,gy,Mt,{},null,[-1,-1])}}const yy=""+new URL("../assets/logo.R4y_qj9s.png",import.meta.url).href;function Iy(n){let e,t;return e=new fu({}),{c(){Ne(e.$$.fragment)},l(s){Pe(e.$$.fragment,s)},m(s,i){Oe(e,s,i),t=!0},i(s){t||(fe(e.$$.fragment,s),t=!0)},o(s){pe(e.$$.fragment,s),t=!1},d(s){De(e,s)}}}function wy(n){let e,t='<span class="styled-header">How To Play</span>';return{c(){e=b("h2"),e.innerHTML=t,this.h()},l(s){e=T(s,"H2",{slot:!0,"data-svelte-h":!0}),J(e)!=="svelte-r01ry8"&&(e.innerHTML=t),this.h()},h(){R(e,"slot","header")},m(s,i){O(s,e,i)},p:_e,d(s){s&&_(e)}}}function Ey(n){let e,t,s,i,r,o,a="The LetterLoop",l,c,u="Two 5-letter words, two shared letters, one loop",h,d,f,p="Play",I,g,E,U="How to play",A,S,V,L,k,C="For those who love morning games",w,D,ne,P,B,m;function G(ee){n[5](ee)}let se={$$slots:{header:[wy],default:[Iy]},$$scope:{ctx:n}};return n[0]!==void 0&&(se.showModal=n[0]),D=new Jn({props:se}),ut.push(()=>zt(D,"showModal",G)),{c(){e=b("div"),t=b("div"),s=b("img"),r=x(),o=b("p"),o.textContent=a,l=x(),c=b("p"),c.textContent=u,h=x(),d=b("div"),f=b("button"),f.textContent=p,I=x(),g=b("div"),E=b("button"),E.textContent=U,A=x(),S=b("p"),V=me(n[1]),L=x(),k=b("i"),k.textContent=C,w=x(),Ne(D.$$.fragment),this.h()},l(ee){e=T(ee,"DIV",{class:!0});var he=W(e);t=T(he,"DIV",{class:!0});var N=W(t);s=T(N,"IMG",{class:!0,src:!0,alt:!0}),r=F(N),o=T(N,"P",{class:!0,"data-svelte-h":!0}),J(o)!=="svelte-1k2sjsl"&&(o.textContent=a),l=F(N),c=T(N,"P",{class:!0,"data-svelte-h":!0}),J(c)!=="svelte-j0rk1k"&&(c.textContent=u),h=F(N),d=T(N,"DIV",{});var re=W(d);f=T(re,"BUTTON",{class:!0,"data-svelte-h":!0}),J(f)!=="svelte-1h0esab"&&(f.textContent=p),re.forEach(_),I=F(N),g=T(N,"DIV",{});var oe=W(g);E=T(oe,"BUTTON",{class:!0,"data-svelte-h":!0}),J(E)!=="svelte-lan869"&&(E.textContent=U),oe.forEach(_),A=F(N),S=T(N,"P",{class:!0});var nt=W(S);V=ve(nt,n[1]),nt.forEach(_),L=F(N),k=T(N,"I",{class:!0,"data-svelte-h":!0}),J(k)!=="svelte-1ec062z"&&(k.textContent=C),N.forEach(_),he.forEach(_),w=F(ee),Pe(D.$$.fragment,ee),this.h()},h(){R(s,"class","logo svelte-pzxcfz"),oi(s.src,i=yy)||R(s,"src",i),R(s,"alt","Our Little Loop Logo"),R(o,"class","menu-header svelte-pzxcfz"),R(c,"class","menu-sub-header svelte-pzxcfz"),R(f,"class","menu-btn svelte-pzxcfz"),R(E,"class","menu-btn no-fill svelte-pzxcfz"),R(S,"class","menu-date svelte-pzxcfz"),R(k,"class","menu-small-text svelte-pzxcfz"),R(t,"class","content svelte-pzxcfz"),R(e,"class","page svelte-pzxcfz")},m(ee,he){O(ee,e,he),y(e,t),y(t,s),y(t,r),y(t,o),y(t,l),y(t,c),y(t,h),y(t,d),y(d,f),y(t,I),y(t,g),y(g,E),y(t,A),y(t,S),y(S,V),y(t,L),y(t,k),O(ee,w,he),Oe(D,ee,he),P=!0,B||(m=[ye(f,"click",n[2]),ye(E,"click",n[4])],B=!0)},p(ee,[he]){const N={};he&64&&(N.$$scope={dirty:he,ctx:ee}),!ne&&he&1&&(ne=!0,N.showModal=ee[0],Bt(()=>ne=!1)),D.$set(N)},i(ee){P||(fe(D.$$.fragment,ee),P=!0)},o(ee){pe(D.$$.fragment,ee),P=!1},d(ee){ee&&(_(e),_(w)),De(D,ee),B=!1,Ln(m)}}}function Cy(n,e,t){let{gameHasStarted:s}=e,i=!1,r=new Date().toLocaleDateString();function o(){t(3,s=!0)}const a=()=>t(0,i=!0);function l(c){i=c,t(0,i)}return n.$$set=c=>{"gameHasStarted"in c&&t(3,s=c.gameHasStarted)},[i,r,o,s,a,l]}class by extends Lt{constructor(e){super(),xt(this,e,Cy,Ey,Mt,{gameHasStarted:3})}}function Ty(n){let e,t,s;function i(o){n[1](o)}let r={};return n[0]!==void 0&&(r.gameHasStarted=n[0]),e=new by({props:r}),ut.push(()=>zt(e,"gameHasStarted",i)),{c(){Ne(e.$$.fragment)},l(o){Pe(e.$$.fragment,o)},m(o,a){Oe(e,o,a),s=!0},p(o,a){const l={};!t&&a&1&&(t=!0,l.gameHasStarted=o[0],Bt(()=>t=!1)),e.$set(l)},i(o){s||(fe(e.$$.fragment,o),s=!0)},o(o){pe(e.$$.fragment,o),s=!1},d(o){De(e,o)}}}function Sy(n){let e,t;return e=new vy({}),{c(){Ne(e.$$.fragment)},l(s){Pe(e.$$.fragment,s)},m(s,i){Oe(e,s,i),t=!0},p:_e,i(s){t||(fe(e.$$.fragment,s),t=!0)},o(s){pe(e.$$.fragment,s),t=!1},d(s){De(e,s)}}}function ky(n){let e,t,s,i;const r=[Sy,Ty],o=[];function a(l,c){return l[0]?0:1}return t=a(n),s=o[t]=r[t](n),{c(){e=b("main"),s.c()},l(l){e=T(l,"MAIN",{});var c=W(e);s.l(c),c.forEach(_)},m(l,c){O(l,e,c),o[t].m(e,null),i=!0},p(l,[c]){let u=t;t=a(l),t===u?o[t].p(l,c):(Ia(),pe(o[u],1,1,()=>{o[u]=null}),wa(),s=o[t],s?s.p(l,c):(s=o[t]=r[t](l),s.c()),fe(s,1),s.m(e,null))},i(l){i||(fe(s),i=!0)},o(l){pe(s),i=!1},d(l){l&&_(e),o[t].d()}}}function Ry(n,e,t){let s=!1;function i(r){s=r,t(0,s)}return[s,i]}class Dy extends Lt{constructor(e){super(),xt(this,e,Ry,ky,Mt,{})}}export{Dy as component,Oy as universal};
