import{n as ye,j as Xa,r as Rn,i as Ja,z as pi,a as kn,c as an,h as Za,A as mi,e as gi,u as yi,g as vi,f as Ci,B as el,d as ft,C as nn,o as tl,D as wi}from"../chunks/scheduler.CwIiqDyD.js";import{y as nl,z as sl,A as il,B as rl,n as Te,l as Se,S as An,i as Dn,e as S,c as N,a as z,d as y,o as P,g as A,q as ol,m as al,t as me,s as O,b as ge,f as L,p as Pt,h as E,j as De,C as Ei,u as ct,v as ht,w as ut,D as le,E as ll,F as cl,x as dt,G as sn,H as Z,I as hl,J as Br,K as Mt}from"../chunks/index.CIKh10TN.js";import{d as ul,w as os,r as dl}from"../chunks/index.NVK073Jc.js";function fl(n,e,t,s){if(!e)return ye;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return ye;const{delay:r=0,duration:o=300,easing:a=Xa,start:l=nl()+r,end:c=l+o,tick:h=ye,css:u}=t(n,{from:e,to:i},s);let d=!0,f=!1,_;function v(){u&&(_=il(n,0,1,o,r,a,u)),r||(f=!0)}function p(){u&&rl(n,_),d=!1}return sl(I=>{if(!f&&I>=l&&(f=!0),f&&I>=c&&(h(1,0),p()),!d)return!1;if(f){const F=I-l,T=0+1*a(F/o);h(T,1-T)}return!0}),v(),h(0,1),p}function _l(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,$r(n,i)}}function $r(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function $e(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function pl(n,e){n.d(1),e.delete(n.key)}function ml(n,e){Se(n,1,1,()=>{e.delete(n.key)})}function gl(n,e){n.f(),ml(n,e)}function Hr(n,e,t,s,i,r,o,a,l,c,h,u){let d=n.length,f=r.length,_=d;const v={};for(;_--;)v[n[_].key]=_;const p=[],I=new Map,F=new Map,T=[];for(_=f;_--;){const b=u(i,r,_),C=t(b);let w=o.get(C);w?s&&T.push(()=>w.p(b,e)):(w=c(C,b),w.c()),I.set(C,p[_]=w),C in v&&F.set(C,Math.abs(_-v[C]))}const D=new Set,q=new Set;function B(b){Te(b,1),b.m(a,h),o.set(b.key,b),h=b.first,f--}for(;d&&f;){const b=p[f-1],C=n[d-1],w=b.key,M=C.key;b===C?(h=b.first,d--,f--):I.has(M)?!o.has(w)||D.has(w)?B(b):q.has(M)?d--:F.get(w)>F.get(M)?(q.add(w),B(b)):(D.add(M),d--):(l(C,o),d--)}for(;d--;){const b=n[d];I.has(b.key)||l(b,o)}for(;f;)B(p[f-1]);return Rn(T),p}const yl=!0,tp=Object.freeze(Object.defineProperty({__proto__:null,prerender:yl},Symbol.toStringTag,{value:"Module"}));function Ur(n){const e=n-1;return e*e*e+1}function vl(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:h=0,duration:u=f=>Math.sqrt(f)*120,easing:d=Ur}=s;return{delay:h,duration:Ja(u)?u(Math.sqrt(l*l+c*c)):u,easing:d,css:(f,_)=>{const v=_*l,p=_*c,I=f+_*e.width/t.width,F=f+_*e.height/t.height;return`transform: ${r} translate(${v}px, ${p}px) scale(${I}, ${F});`}}}function Ii(n,{delay:e=0,duration:t=400,easing:s=Ur,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o),[u,d]=pi(i),[f,_]=pi(r);return{delay:e,duration:t,easing:s,css:(v,p)=>`
			transform: ${c} translate(${(1-v)*u}${d}, ${(1-v)*f}${_});
			opacity: ${l-h*p}`}}function Cl(n){const e=os([]);function t(r,o="default",a){e.update(l=>[...l,{id:wl(),type:o,message:r,timeout:a}])}const s=ul(e,(r,o)=>{if(o(r),r.length>0){const a=setTimeout(()=>{e.update(l=>(l.shift(),l))},r[0].timeout);return()=>{clearTimeout(a)}}}),{subscribe:i}=s;return{subscribe:i,send:t,default:(r,o)=>t(r,"default",o),danger:(r,o)=>t(r,"danger",o),warning:(r,o)=>t(r,"warning",o),info:(r,o)=>t(r,"info",o),success:(r,o)=>t(r,"success",o)}}function wl(){return"_"+Math.random().toString(36).substr(2,9)}const ln=Cl();function bi(n,e,t){const s=n.slice();return s[1]=e[t],s}function Ti(n){let e,t;return{c(){e=S("i"),this.h()},l(s){e=N(s,"I",{class:!0}),z(e).forEach(y),this.h()},h(){P(e,"class",t=mi(n[1].icon)+" svelte-15ecllt")},m(s,i){A(s,e,i)},p(s,i){i&1&&t!==(t=mi(s[1].icon)+" svelte-15ecllt")&&P(e,"class",t)},d(s){s&&y(e)}}}function Si(n,e){let t,s,i=e[1].message+"",r,o,a,l,c,h=ye,u,d=e[1].icon&&Ti(e);return{key:n,first:null,c(){t=S("div"),s=S("div"),r=me(i),o=O(),d&&d.c(),a=O(),this.h()},l(f){t=N(f,"DIV",{class:!0,style:!0});var _=z(t);s=N(_,"DIV",{class:!0});var v=z(s);r=ge(v,i),v.forEach(y),o=L(_),d&&d.l(_),a=L(_),_.forEach(y),this.h()},h(){P(s,"class","content svelte-15ecllt"),P(t,"class","toast svelte-15ecllt"),Pt(t,"background","#EBEBEB"),this.first=t},m(f,_){A(f,t,_),E(t,s),E(s,r),E(t,o),d&&d.m(t,null),E(t,a),u=!0},p(f,_){e=f,(!u||_&1)&&i!==(i=e[1].message+"")&&De(r,i),e[1].icon?d?d.p(e,_):(d=Ti(e),d.c(),d.m(t,a)):d&&(d.d(1),d=null)},r(){c=t.getBoundingClientRect()},f(){_l(t),h(),$r(t,c)},a(){h(),h=fl(t,c,vl,{})},i(f){u||(f&&Za(()=>{u&&(l||(l=Ei(t,Ii,{y:30},!0)),l.run(1))}),u=!0)},o(f){f&&(l||(l=Ei(t,Ii,{y:30},!1)),l.run(0)),u=!1},d(f){f&&y(t),d&&d.d(),f&&l&&l.end()}}}function El(n){let e,t=[],s=new Map,i,r=$e(n[0]);const o=a=>a[1].id;for(let a=0;a<r.length;a+=1){let l=bi(n,r,a),c=o(l);s.set(c,t[a]=Si(c,l))}return{c(){e=S("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=N(a,"DIV",{class:!0});var l=z(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(y),this.h()},h(){P(e,"class","notifications svelte-15ecllt")},m(a,l){A(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);i=!0},p(a,[l]){if(l&1){r=$e(a[0]),ol();for(let c=0;c<t.length;c+=1)t[c].r();t=Hr(t,l,o,1,a,r,s,e,gl,Si,null,bi);for(let c=0;c<t.length;c+=1)t[c].a();al()}},i(a){if(!i){for(let l=0;l<r.length;l+=1)Te(t[l]);i=!0}},o(a){for(let l=0;l<t.length;l+=1)Se(t[l]);i=!1},d(a){a&&y(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function Il(n,e,t){let s;return an(n,ln,i=>t(0,s=i)),[s]}class Wr extends An{constructor(e){super(),Dn(this,e,Il,El,kn,{})}}const bl=n=>({}),Ni=n=>({});function Ri(n){let e,t,s;return{c(){e=S("i"),this.h()},l(i){e=N(i,"I",{class:!0}),z(e).forEach(y),this.h()},h(){P(e,"class","fa-solid fa-xmark svelte-kvu5ns")},m(i,r){A(i,e,r),t||(s=le(e,"click",n[6]),t=!0)},p:ye,d(i){i&&y(e),t=!1,s()}}}function Tl(n){let e,t,s,i,r,o,a,l,c,h,u,d,f,_;s=new Wr({});const v=n[4].header,p=gi(v,n,n[3],Ni);let I=!n[1]&&Ri(n);const F=n[4].default,T=gi(F,n,n[3],null);return{c(){e=S("dialog"),t=S("div"),ct(s.$$.fragment),i=O(),r=S("div"),p&&p.c(),o=O(),a=S("div"),l=O(),I&&I.c(),c=O(),h=S("hr"),u=O(),T&&T.c(),this.h()},l(D){e=N(D,"DIALOG",{class:!0});var q=z(e);t=N(q,"DIV",{class:!0});var B=z(t);ht(s.$$.fragment,B),i=L(B),r=N(B,"DIV",{class:!0});var b=z(r);p&&p.l(b),o=L(b),a=N(b,"DIV",{class:!0}),z(a).forEach(y),l=L(b),I&&I.l(b),b.forEach(y),c=L(B),h=N(B,"HR",{}),u=L(B),T&&T.l(B),B.forEach(y),q.forEach(y),this.h()},h(){P(a,"class","spacer svelte-kvu5ns"),P(r,"class","flex-container svelte-kvu5ns"),P(t,"class","svelte-kvu5ns"),P(e,"class","svelte-kvu5ns")},m(D,q){A(D,e,q),E(e,t),ut(s,t,null),E(t,i),E(t,r),p&&p.m(r,null),E(r,o),E(r,a),E(r,l),I&&I.m(r,null),E(t,c),E(t,h),E(t,u),T&&T.m(t,null),n[7](e),d=!0,f||(_=[le(t,"click",ll(n[5])),le(e,"close",n[8]),le(e,"click",cl(n[9]))],f=!0)},p(D,[q]){p&&p.p&&(!d||q&8)&&yi(p,v,D,D[3],d?Ci(v,D[3],q,bl):vi(D[3]),Ni),D[1]?I&&(I.d(1),I=null):I?I.p(D,q):(I=Ri(D),I.c(),I.m(r,null)),T&&T.p&&(!d||q&8)&&yi(T,F,D,D[3],d?Ci(F,D[3],q,null):vi(D[3]),null)},i(D){d||(Te(s.$$.fragment,D),Te(p,D),Te(T,D),d=!0)},o(D){Se(s.$$.fragment,D),Se(p,D),Se(T,D),d=!1},d(D){D&&y(e),dt(s),p&&p.d(D),I&&I.d(),T&&T.d(D),n[7](null),f=!1,Rn(_)}}}function Sl(n,e,t){let{$$slots:s={},$$scope:i}=e,{showModal:r}=e,{hide_close:o=!1}=e,a;function l(f){el.call(this,n,f)}const c=()=>a.close();function h(f){ft[f?"unshift":"push"](()=>{a=f,t(2,a)})}const u=()=>t(0,r=!1),d=()=>!o&&a.close();return n.$$set=f=>{"showModal"in f&&t(0,r=f.showModal),"hide_close"in f&&t(1,o=f.hide_close),"$$scope"in f&&t(3,i=f.$$scope)},n.$$.update=()=>{n.$$.dirty&5&&a&&(r?a.showModal():a.close()),n.$$.dirty&5&&a&&r===!1&&a.open&&a.close()},[r,o,a,i,s,l,c,h,u,d]}class jn extends An{constructor(e){super(),Dn(this,e,Sl,Tl,kn,{showModal:0,hide_close:1})}}const Nl=""+new URL("../assets/ex-solution.DMtatkDj.png",import.meta.url).href,Rl=""+new URL("../assets/ex-letter-box.mgBNjwYG.png",import.meta.url).href;var ki={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw bt(e)},bt=function(n){return new Error("Firebase Database ("+Vr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},kl=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ns={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[h],t[u],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Al;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),u!==64){const _=c<<6&192|u;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Al extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jr=function(n){const e=qr(n);return Ns.encodeByteArray(e,!0)},cn=function(n){return jr(n).replace(/\./g,"")},as=function(n){try{return Ns.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(n){return Gr(void 0,n)}function Gr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Pl(t)||(n[t]=Gr(n[t],e[t]));return n}function Pl(n){return n!=="__proto__"}/**
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
 */function Ml(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xl=()=>Ml().__FIREBASE_DEFAULTS__,Ol=()=>{if(typeof process>"u"||typeof ki>"u")return;const n=ki.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ll=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&as(n[1]);return e&&JSON.parse(e)},zr=()=>{try{return xl()||Ol()||Ll()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fl=n=>{var e,t;return(t=(e=zr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Bl=n=>{const e=Fl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Kr=()=>{var n;return(n=zr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function $l(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cn(JSON.stringify(t)),cn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Hl())}function Ul(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qr(){return Vr.NODE_ADMIN===!0}function Xr(){try{return typeof indexedDB=="object"}catch{return!1}}function Jr(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function Vl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="FirebaseError";class it extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ql,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pn.prototype.create)}}class Pn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?jl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new it(i,a,s)}}function jl(n,e){return n.replace(Gl,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Gl=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n){return JSON.parse(n)}function re(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=$t(as(r[0])||""),t=$t(as(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},zl=function(n){const e=Zr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Kl=function(n){const e=Zr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ct(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ai(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function hn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function un(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Di(r)&&Di(o)){if(!un(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Di(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(i<<5|i>>>27)+c+l+h+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function eo(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Mn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Jl=1e3,Zl=2,ec=4*60*60*1e3,tc=.5;function Pi(n,e=Jl,t=Zl){const s=e*Math.pow(t,n),i=Math.round(tc*s*(Math.random()-.5)*2);return Math.min(ec,s+i)}/**
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
 */function Tt(n){return n&&n._delegate?n._delegate:n}class Me{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ge="[DEFAULT]";/**
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
 */class nc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Rs;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ic(e))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ge){return this.instances.has(e)}getOptions(e=Ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sc(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ge){return this.component?this.component.multipleInstances?e:Ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sc(n){return n===Ge?void 0:n}function ic(n){return n.instantiationMode==="EAGER"}/**
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
 */class rc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const oc={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},ac=Q.INFO,lc={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},cc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=lc[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ks{constructor(e){this.name=e,this._logLevel=ac,this._logHandler=cc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const hc=(n,e)=>e.some(t=>n instanceof t);let Mi,xi;function uc(){return Mi||(Mi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dc(){return xi||(xi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const to=new WeakMap,ls=new WeakMap,no=new WeakMap,Gn=new WeakMap,As=new WeakMap;function fc(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(He(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&to.set(t,n)}).catch(()=>{}),As.set(e,n),e}function _c(n){if(ls.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ls.set(n,e)}let cs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ls.get(n);if(e==="objectStoreNames")return n.objectStoreNames||no.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pc(n){cs=n(cs)}function mc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(zn(this),e,...t);return no.set(s,e.sort?e.sort():[e]),He(s)}:dc().includes(n)?function(...e){return n.apply(zn(this),e),He(to.get(this))}:function(...e){return He(n.apply(zn(this),e))}}function gc(n){return typeof n=="function"?mc(n):(n instanceof IDBTransaction&&_c(n),hc(n,uc())?new Proxy(n,cs):n)}function He(n){if(n instanceof IDBRequest)return fc(n);if(Gn.has(n))return Gn.get(n);const e=gc(n);return e!==n&&(Gn.set(n,e),As.set(e,n)),e}const zn=n=>As.get(n);function so(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=He(o);return s&&o.addEventListener("upgradeneeded",l=>{s(He(o.result),l.oldVersion,l.newVersion,He(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const yc=["get","getKey","getAll","getAllKeys","count"],vc=["put","add","delete","clear"],Kn=new Map;function Oi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Kn.get(e))return Kn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=vc.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||yc.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Kn.set(e,r),r}pc(n=>({...n,get:(e,t,s)=>Oi(e,t)||n.get(e,t,s),has:(e,t)=>!!Oi(e,t)||n.has(e,t)}));/**
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
 */class Cc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function wc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hs="@firebase/app",Li="0.9.27";/**
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
 */const Xe=new ks("@firebase/app"),Ec="@firebase/app-compat",Ic="@firebase/analytics-compat",bc="@firebase/analytics",Tc="@firebase/app-check-compat",Sc="@firebase/app-check",Nc="@firebase/auth",Rc="@firebase/auth-compat",kc="@firebase/database",Ac="@firebase/database-compat",Dc="@firebase/functions",Pc="@firebase/functions-compat",Mc="@firebase/installations",xc="@firebase/installations-compat",Oc="@firebase/messaging",Lc="@firebase/messaging-compat",Fc="@firebase/performance",Bc="@firebase/performance-compat",$c="@firebase/remote-config",Hc="@firebase/remote-config-compat",Uc="@firebase/storage",Wc="@firebase/storage-compat",Vc="@firebase/firestore",qc="@firebase/firestore-compat",jc="firebase",Gc="10.8.0";/**
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
 */const us="[DEFAULT]",zc={[hs]:"fire-core",[Ec]:"fire-core-compat",[bc]:"fire-analytics",[Ic]:"fire-analytics-compat",[Sc]:"fire-app-check",[Tc]:"fire-app-check-compat",[Nc]:"fire-auth",[Rc]:"fire-auth-compat",[kc]:"fire-rtdb",[Ac]:"fire-rtdb-compat",[Dc]:"fire-fn",[Pc]:"fire-fn-compat",[Mc]:"fire-iid",[xc]:"fire-iid-compat",[Oc]:"fire-fcm",[Lc]:"fire-fcm-compat",[Fc]:"fire-perf",[Bc]:"fire-perf-compat",[$c]:"fire-rc",[Hc]:"fire-rc-compat",[Uc]:"fire-gcs",[Wc]:"fire-gcs-compat",[Vc]:"fire-fst",[qc]:"fire-fst-compat","fire-js":"fire-js",[jc]:"fire-js-all"};/**
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
 */const dn=new Map,ds=new Map;function Kc(n,e){try{n.container.addComponent(e)}catch(t){Xe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ve(n){const e=n.name;if(ds.has(e))return Xe.debug(`There were multiple attempts to register component ${e}.`),!1;ds.set(e,n);for(const t of dn.values())Kc(t,n);return!0}function Kt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Yc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ue=new Pn("app","Firebase",Yc);/**
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
 */class Qc{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
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
 */const Xc=Gc;function io(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:us,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ue.create("bad-app-name",{appName:String(i)});if(t||(t=Kr()),!t)throw Ue.create("no-options");const r=dn.get(i);if(r){if(un(t,r.options)&&un(s,r.config))return r;throw Ue.create("duplicate-app",{appName:i})}const o=new rc(i);for(const l of ds.values())o.addComponent(l);const a=new Qc(t,s,o);return dn.set(i,a),a}function ro(n=us){const e=dn.get(n);if(!e&&n===us&&Kr())return io();if(!e)throw Ue.create("no-app",{appName:n});return e}function Ne(n,e,t){var s;let i=(s=zc[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xe.warn(a.join(" "));return}Ve(new Me(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Jc="firebase-heartbeat-database",Zc=1,Ht="firebase-heartbeat-store";let Yn=null;function oo(){return Yn||(Yn=so(Jc,Zc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ht)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),Yn}async function eh(n){try{const t=(await oo()).transaction(Ht),s=await t.objectStore(Ht).get(ao(n));return await t.done,s}catch(e){if(e instanceof it)Xe.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xe.warn(t.message)}}}async function Fi(n,e){try{const s=(await oo()).transaction(Ht,"readwrite");await s.objectStore(Ht).put(e,ao(n)),await s.done}catch(t){if(t instanceof it)Xe.warn(t.message);else{const s=Ue.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xe.warn(s.message)}}}function ao(n){return`${n.name}!${n.options.appId}`}/**
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
 */const th=1024,nh=30*24*60*60*1e3;class sh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bi();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bi(),{heartbeatsToSend:s,unsentEntries:i}=ih(this._heartbeatsCache.heartbeats),r=cn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Bi(){return new Date().toISOString().substring(0,10)}function ih(n,e=th){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),$i(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),$i(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class rh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xr()?Jr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $i(n){return cn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function oh(n){Ve(new Me("platform-logger",e=>new Cc(e),"PRIVATE")),Ve(new Me("heartbeat",e=>new sh(e),"PRIVATE")),Ne(hs,Li,n),Ne(hs,Li,"esm2017"),Ne("fire-js","")}oh("");var ah="firebase",lh="10.8.0";/**
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
 */Ne(ah,lh,"app");const ch={apiKey:"AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",authDomain:"circlepuzzlegame-1738d.firebaseapp.com",projectId:"circlepuzzlegame-1738d",storageBucket:"circlepuzzlegame-1738d.appspot.com",messagingSenderId:"62490740969",appId:"1:62490740969:web:719c6ea78f8148089f4878",measurementId:"G-EEEKPPSEN9"},hh=io(ch);var Hi={};const Ui="@firebase/database",Wi="1.0.3";/**
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
 */let lo="";function uh(n){lo=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:$t(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Oe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dh(e)}}catch{}return new fh},Ke=co("localStorage"),fs=co("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new ks("@firebase/database"),_h=function(){let n=1;return function(){return n++}}(),ho=function(n){const e=Xl(n),t=new Ql;t.update(e);const s=t.digest();return Ns.encodeByteArray(s)},Yt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Yt.apply(null,s):typeof s=="object"?e+=re(s):e+=s,e+=" "}return e};let Qe=null,Vi=!0;const ph=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(mt.logLevel=Q.VERBOSE,Qe=mt.log.bind(mt),e&&fs.set("logging_enabled",!0)):typeof n=="function"?Qe=n:(Qe=null,fs.remove("logging_enabled"))},oe=function(...n){if(Vi===!0&&(Vi=!1,Qe===null&&fs.get("logging_enabled")===!0&&ph(!0)),Qe){const e=Yt.apply(null,n);Qe(e)}},Qt=function(n){return function(...e){oe(n,...e)}},_s=function(...n){const e="FIREBASE INTERNAL ERROR: "+Yt(...n);mt.error(e)},xe=function(...n){const e=`FIREBASE FATAL ERROR: ${Yt(...n)}`;throw mt.error(e),new Error(e)},ve=function(...n){const e="FIREBASE WARNING: "+Yt(...n);mt.warn(e)},mh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},gh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},wt="[MIN_NAME]",Je="[MAX_NAME]",St=function(n,e){if(n===e)return 0;if(n===wt||e===Je)return-1;if(e===wt||n===Je)return 1;{const t=qi(n),s=qi(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},yh=function(n,e){return n===e?0:n<e?-1:1},Rt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+re(e))},Ds=function(n){if(typeof n!="object"||n===null)return re(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=re(e[s]),t+=":",t+=Ds(n[e[s]]);return t+="}",t},fo=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function de(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const _o=function(n){m(!uo(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},vh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ch=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Eh=new RegExp("^-?(0*)\\d{1,10}$"),Ih=-2147483648,bh=2147483647,qi=function(n){if(Eh.test(n)){const e=Number(n);if(e>=Ih&&e<=bh)return e}return null},Xt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ve("Exception was thrown by user callback.",t),e},Math.floor(0))}},Th=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Sh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ve(e)}}class gt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="5",po="v",mo="s",go="r",yo="f",vo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Co="ls",wo="p",ps="ac",Eo="websocket",Io="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ke.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ke.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Rh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function To(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===Eo)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Io)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Rh(n)&&(t.ns=n.namespace);const i=[];return de(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.counters_={}}incrementCounter(e,t=1){Oe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Dl(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={},Xn={};function Ms(n){const e=n.toString();return Qn[e]||(Qn[e]=new kh),Qn[e]}function Ah(n,e){const t=n.toString();return Xn[t]||(Xn[t]=e()),Xn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Xt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="start",Ph="close",Mh="pLPCommand",xh="pRTLPCB",So="id",No="pw",Ro="ser",Oh="cb",Lh="seg",Fh="ts",Bh="d",$h="dframe",ko=1870,Ao=30,Hh=ko-Ao,Uh=25e3,Wh=3e4;class _t{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qt(e),this.stats_=Ms(t),this.urlFn=l=>(this.appCheckToken&&(l[ps]=this.appCheckToken),To(t,Io,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Dh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Wh)),gh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xs((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ji)this.id=a,this.password=l;else if(o===Ph)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ji]="t",s[Ro]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Oh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[po]=Ps,this.transportSessionId&&(s[mo]=this.transportSessionId),this.lastSessionId&&(s[Co]=this.lastSessionId),this.applicationId&&(s[wo]=this.applicationId),this.appCheckToken&&(s[ps]=this.appCheckToken),typeof location<"u"&&location.hostname&&vo.test(location.hostname)&&(s[go]=yo);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_t.forceAllow_=!0}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){return _t.forceAllow_?!0:!_t.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vh()&&!Ch()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=jr(t),i=fo(s,Hh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[$h]="t",s[So]=e,s[No]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class xs{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_h(),window[Mh+this.uniqueCallbackIdentifier]=e,window[xh+this.uniqueCallbackIdentifier]=t,this.myIFrame=xs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){oe("frame writing exception"),a.stack&&oe(a.stack),oe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||oe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[So]=this.myID,e[No]=this.myPW,e[Ro]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ao+s.length<=ko;){const o=this.pendingSegs.shift();s=s+"&"+Lh+i+"="+o.seg+"&"+Fh+i+"="+o.ts+"&"+Bh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Uh)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=16384,qh=45e3;let fn=null;typeof MozWebSocket<"u"?fn=MozWebSocket:typeof WebSocket<"u"&&(fn=WebSocket);class we{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qt(this.connId),this.stats_=Ms(t),this.connURL=we.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[po]=Ps,typeof location<"u"&&location.hostname&&vo.test(location.hostname)&&(o[go]=yo),t&&(o[mo]=t),s&&(o[Co]=s),i&&(o[ps]=i),r&&(o[wo]=r),To(e,Eo,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ke.set("previous_websocket_failure",!0);try{let s;Qr(),this.mySock=new fn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){we.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&fn!==null&&!we.forceDisallow_}static previouslyFailed(){return Ke.isInMemoryStorage||Ke.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ke.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=$t(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=fo(t,Vh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}we.responsesRequiredToBeHealthy=2;we.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_t,we]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=we&&we.isAvailable();let s=t&&!we.previouslyFailed();if(e.webSocketOnly&&(t||ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[we];else{const i=this.transports_=[];for(const r of Ut.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ut.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ut.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=6e4,Gh=5e3,zh=10*1024,Kh=100*1024,Jn="t",Gi="d",Yh="s",zi="r",Qh="e",Ki="o",Yi="a",Qi="n",Xi="p",Xh="h";class Jh{constructor(e,t,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qt("c:"+this.id+":"),this.transportManager_=new Ut(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=xt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Kh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jn in e){const t=e[Jn];t===Yi?this.upgradeIfSecondaryHealthy_():t===zi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ki&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Rt("t",e),s=Rt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Rt("t",e),s=Rt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Rt(Jn,e);if(Gi in e){const s=e[Gi];if(t===Xh){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Qi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Yh?this.onConnectionShutdown_(s):t===zi?this.onReset_(s):t===Qh?_s("Server Error: "+s):t===Ki?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_s("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ps!==s&&ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),xt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ke.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Po{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _n}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=32,Zi=768;class Y{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function K(){return new Y("")}function H(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function qe(n){return n.pieces_.length-n.pieceNum_}function X(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Y(n.pieces_,e)}function Mo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Zh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function xo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Oo(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Y(e,0)}function ne(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Y)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Y(t,0)}function U(n){return n.pieceNum_>=n.pieces_.length}function ce(n,e){const t=H(n),s=H(e);if(t===null)return e;if(t===s)return ce(X(n),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Os(n,e){if(qe(n)!==qe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ee(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(qe(n)>qe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class eu{constructor(e,t){this.errorPrefix_=t,this.parts_=xo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Mn(this.parts_[s]);Lo(this)}}function tu(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Mn(e),Lo(n)}function nu(n){const e=n.parts_.pop();n.byteLength_-=Mn(e),n.parts_.length>0&&(n.byteLength_-=1)}function Lo(n){if(n.byteLength_>Zi)throw new Error(n.errorPrefix_+"has a key path longer than "+Zi+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ji)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ji+") or object contains a cycle "+ze(n))}function ze(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Po{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ls}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=1e3,su=60*5*1e3,er=30*1e3,iu=1.3,ru=3e4,ou="server_kill",tr=3;class Pe extends Do{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pe.nextPersistentConnectionId_++,this.log_=Qt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=kt,this.maxReconnectDelay_=su,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Qr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ls.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_n.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(re(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Rs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Pe.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Oe(e,"w")){const s=Ct(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=er)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=zl(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):_s("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ru&&(this.reconnectDelay_=kt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?oe("getToken() completed but was canceled"):(oe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Jh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{ve(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(ou)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ve(u),l())}}}interrupt(e){oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ai(this.interruptReasons_)&&(this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ds(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Y(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){oe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=tr&&(this.reconnectDelay_=er,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){oe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=tr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+lo.replace(/\./g,"-")]=1,Yr()?e["framework.cordova"]=1:Wl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_n.getInstance().currentlyOnline();return Ai(this.interruptReasons_)&&e}}Pe.nextPersistentConnectionId_=0;Pe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new $(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new $(wt,e),i=new $(wt,t);return this.compare(s,i)!==0}minPost(){return $.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn;class Fo extends xn{static get __EMPTY_NODE(){return rn}static set __EMPTY_NODE(e){rn=e}compare(e,t){return St(e.name,t.name)}isDefinedOn(e){throw bt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return $.MIN}maxPost(){return new $(Je,rn)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,rn)}toString(){return".key"}}const yt=new Fo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ie{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ie.RED,this.left=i??he.EMPTY_NODE,this.right=r??he.EMPTY_NODE}copy(e,t,s,i,r){return new ie(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return he.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return he.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ie.RED=!0;ie.BLACK=!1;class au{copy(e,t,s,i,r){return this}insert(e,t,s){return new ie(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class he{constructor(e,t=he.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new he(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ie.BLACK,null,null))}remove(e){return new he(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ie.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new on(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new on(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new on(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new on(this.root_,null,this.comparator_,!0,e)}}he.EMPTY_NODE=new au;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n,e){return St(n.name,e.name)}function Fs(n,e){return St(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms;function cu(n){ms=n}const Bo=function(n){return typeof n=="number"?"number:"+_o(n):"string:"+n},$o=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Oe(e,".sv"),"Priority must be a string or number.")}else m(n===ms||n.isEmpty(),"priority of unexpected type.");m(n===ms||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr;class se{constructor(e,t=se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$o(this.priorityNode_)}static set __childrenNodeConstructor(e){nr=e}static get __childrenNodeConstructor(){return nr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:H(e)===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=H(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||qe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,se.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=_o(this.value_):e+=this.value_,this.lazyHash_=ho(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof se.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=se.VALUE_TYPE_ORDER.indexOf(t),r=se.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho,Uo;function hu(n){Ho=n}function uu(n){Uo=n}class du extends xn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?St(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return $.MIN}maxPost(){return new $(Je,new se("[PRIORITY-POST]",Uo))}makePost(e,t){const s=Ho(e);return new $(t,new se("[PRIORITY-POST]",s))}toString(){return".priority"}}const ee=new du;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=Math.log(2);class _u{constructor(e){const t=r=>parseInt(Math.log(r)/fu,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pn=function(n,e,t,s){n.sort(e);const i=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new ie(d,u.node,ie.BLACK,null,null);{const f=parseInt(h/2,10)+l,_=i(l,f),v=i(f+1,c);return u=n[f],d=t?t(u):u,new ie(d,u.node,ie.BLACK,_,v)}},r=function(l){let c=null,h=null,u=n.length;const d=function(_,v){const p=u-_,I=u;u-=_;const F=i(p+1,I),T=n[p],D=t?t(T):T;f(new ie(D,T.node,v,null,F))},f=function(_){c?(c.left=_,c=_):(h=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),p=Math.pow(2,l.count-(_+1));v?d(p,ie.BLACK):(d(p,ie.BLACK),d(p,ie.RED))}return h},o=new _u(n.length),a=r(o);return new he(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn;const lt={};class Ae{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(lt&&ee,"ChildrenNode.ts has not been loaded"),Zn=Zn||new Ae({".priority":lt},{".priority":ee}),Zn}get(e){const t=Ct(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof he?t:null}hasIndex(e){return Oe(this.indexSet_,e.toString())}addIndex(e,t){m(e!==yt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator($.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=pn(s,e.getCompare()):a=lt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Ae(h,c)}addToIndexes(e,t){const s=hn(this.indexes_,(i,r)=>{const o=Ct(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===lt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator($.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),pn(a,o.getCompare())}else return lt;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new $(e.name,a))),l.insert(e,e.node)}});return new Ae(s,this.indexSet_)}removeFromIndexes(e,t){const s=hn(this.indexes_,i=>{if(i===lt)return i;{const r=t.get(e.name);return r?i.remove(new $(e.name,r)):i}});return new Ae(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At;class x{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&$o(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return At||(At=new x(new he(Fs),null,Ae.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||At}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?At:t}}getChild(e){const t=H(e);return t===null?this:this.getImmediateChild(t).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new $(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?At:this.priorityNode_;return new x(i,o,r)}}updateChild(e,t){const s=H(e);if(s===null)return t;{m(H(e)!==".priority"||qe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(X(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(ee,(o,a)=>{t[o]=a.val(e),s++,r&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bo(this.getPriority().val())+":"),this.forEachChild(ee,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":ho(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new $(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new $(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new $(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jt?-1:0}withIndex(e){if(e===yt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===yt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(ee),i=t.getIterator(ee);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yt?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pu extends x{constructor(){super(new he(Fs),x.EMPTY_NODE,Ae.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const Jt=new pu;Object.defineProperties($,{MIN:{value:new $(wt,x.EMPTY_NODE)},MAX:{value:new $(Je,Jt)}});Fo.__EMPTY_NODE=x.EMPTY_NODE;se.__childrenNodeConstructor=x;cu(Jt);uu(Jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=!0;function ae(n,e=null){if(n===null)return x.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new se(t,ae(e))}if(!(n instanceof Array)&&mu){const t=[];let s=!1;if(de(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ae(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new $(o,l)))}}),t.length===0)return x.EMPTY_NODE;const r=pn(t,lu,o=>o.name,Fs);if(s){const o=pn(t,ee.getCompare());return new x(r,ae(e),new Ae({".priority":o},{".priority":ee}))}else return new x(r,ae(e),Ae.Default)}else{let t=x.EMPTY_NODE;return de(n,(s,i)=>{if(Oe(n,s)&&s.substring(0,1)!=="."){const r=ae(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(ae(e))}}hu(ae);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends xn{constructor(e){super(),this.indexPath_=e,m(!U(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?St(e.name,t.name):r}makePost(e,t){const s=ae(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,s);return new $(t,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,Jt);return new $(Je,e)}toString(){return xo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends xn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?St(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,t){const s=ae(e);return new $(t,s)}toString(){return".value"}}const vu=new yu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n){return{type:"value",snapshotNode:n}}function Et(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Wt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Vt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Cu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Wt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Et(t,s)):o.trackChildChange(Vt(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ee,(i,r)=>{t.hasChild(i)||s.trackChildChange(Wt(i,r))}),t.isLeafNode()||t.forEachChild(ee,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Vt(i,r,o))}else s.trackChildChange(Et(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.indexedFilter_=new Bs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qt.getStartPost_(e),this.endPost_=qt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new $(t,s))||(s=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=x.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const r=this;return t.forEachChild(ee,(o,a)=>{r.matches(new $(o,a))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new qt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new $(t,s))||(s=x.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new $(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Vt(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Wt(t,u));const v=a.updateImmediateChild(t,x.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Et(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Wt(c.name,c.node)),r.trackChildChange(Et(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,x.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Je}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new $s;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Eu(n){return n.loadsAllData()?new Bs(n.getIndex()):n.hasLimit()?new wu(n):new qt(n)}function sr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ee?t="$priority":n.index_===vu?t="$value":n.index_===yt?t="$key":(m(n.index_ instanceof gu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=re(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=re(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+re(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=re(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+re(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ir(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ee&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Do{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Qt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=mn.getListenId_(e,s),a={};this.listens_[o]=a;const l=sr(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),Ct(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=mn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=sr(e._queryParams),s=e._path.toString(),i=new Rs;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yl(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=$t(a.responseText)}catch{ve("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ve("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return{value:null,children:new Map}}function Vo(n,e,t){if(U(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=H(e);n.children.has(s)||n.children.set(s,gn());const i=n.children.get(s);e=X(e),Vo(i,e,t)}}function gs(n,e,t){n.value!==null?t(e,n.value):bu(n,(s,i)=>{const r=new Y(e.toString()+"/"+s);gs(i,r,t)})}function bu(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&de(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=10*1e3,Su=30*1e3,Nu=5*60*1e3;class Ru{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Tu(e);const s=rr+(Su-rr)*Math.random();xt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;de(e,(i,r)=>{r>0&&Oe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),xt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Nu))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ie||(Ie={}));function qo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Us(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ie.ACK_USER_WRITE,this.source=qo()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Y(e));return new yn(K(),t,this.revert)}}else return m(H(this.path)===e,"operationForChild called for unrelated child."),new yn(X(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.source=e,this.path=t,this.type=Ie.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new jt(this.source,K()):new jt(this.source,X(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ie.OVERWRITE}operationForChild(e){return U(this.path)?new Ze(this.source,K(),this.snap.getImmediateChild(e)):new Ze(this.source,X(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ie.MERGE}operationForChild(e){if(U(this.path)){const t=this.children.subtree(new Y(e));return t.isEmpty()?null:t.value?new Ze(this.source,K(),t.value):new Gt(this.source,K(),t)}else return m(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gt(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const t=H(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Au(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Cu(o.childName,o.snapshotNode))}),Dt(n,i,"child_removed",e,s,t),Dt(n,i,"child_added",e,s,t),Dt(n,i,"child_moved",r,s,t),Dt(n,i,"child_changed",e,s,t),Dt(n,i,"value",e,s,t),i}function Dt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Pu(n,a,l)),o.forEach(a=>{const l=Du(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Du(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Pu(n,e,t){if(e.childName==null||t.childName==null)throw bt("Should only compare child_ events.");const s=new $(e.childName,e.snapshotNode),i=new $(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n,e){return{eventCache:n,serverCache:e}}function Ot(n,e,t,s){return On(new et(e,t,s),n.serverCache)}function jo(n,e,t,s){return On(n.eventCache,new et(e,t,s))}function ys(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function tt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es;const Mu=()=>(es||(es=new he(yh)),es);class J{constructor(e,t=Mu()){this.value=e,this.children=t}static fromObject(e){let t=new J(null);return de(e,(s,i)=>{t=t.set(new Y(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:K(),value:this.value};if(U(e))return null;{const s=H(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(X(e),t);return r!=null?{path:ne(new Y(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const t=H(e),s=this.children.get(t);return s!==null?s.subtree(X(e)):new J(null)}}set(e,t){if(U(e))return new J(t,this.children);{const s=H(e),r=(this.children.get(s)||new J(null)).set(X(e),t),o=this.children.insert(s,r);return new J(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const t=H(e),s=this.children.get(t);if(s){const i=s.remove(X(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new J(null):new J(this.value,r)}else return this}}get(e){if(U(e))return this.value;{const t=H(e),s=this.children.get(t);return s?s.get(X(e)):null}}setTree(e,t){if(U(e))return t;{const s=H(e),r=(this.children.get(s)||new J(null)).setTree(X(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new J(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ne(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,K(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(U(e))return null;{const r=H(e),o=this.children.get(r);return o?o.findOnPath_(X(e),ne(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,K(),t)}foreachOnPath_(e,t,s){if(U(e))return this;{this.value&&s(t,this.value);const i=H(e),r=this.children.get(i);return r?r.foreachOnPath_(X(e),ne(t,i),s):new J(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(ne(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.writeTree_=e}static empty(){return new be(new J(null))}}function Lt(n,e,t){if(U(e))return new be(new J(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ce(i,e);return r=r.updateChild(o,t),new be(n.writeTree_.set(i,r))}else{const i=new J(t),r=n.writeTree_.setTree(e,i);return new be(r)}}}function or(n,e,t){let s=n;return de(t,(i,r)=>{s=Lt(s,ne(e,i),r)}),s}function ar(n,e){if(U(e))return be.empty();{const t=n.writeTree_.setTree(e,new J(null));return new be(t)}}function vs(n,e){return rt(n,e)!=null}function rt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ce(t.path,e)):null}function lr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ee,(s,i)=>{e.push(new $(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new $(s,i.value))}),e}function We(n,e){if(U(e))return n;{const t=rt(n,e);return t!=null?new be(new J(t)):new be(n.writeTree_.subtree(e))}}function Cs(n){return n.writeTree_.isEmpty()}function It(n,e){return Go(K(),n.writeTree_,e)}function Go(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Go(ne(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ne(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n,e){return Qo(e,n)}function xu(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Lt(n.visibleWrites,e,t)),n.lastWriteId=s}function Ou(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Lu(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Fu(a,s.path)?i=!1:Ee(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Bu(n),!0;if(s.snap)n.visibleWrites=ar(n.visibleWrites,s.path);else{const a=s.children;de(a,l=>{n.visibleWrites=ar(n.visibleWrites,ne(s.path,l))})}return!0}else return!1}function Fu(n,e){if(n.snap)return Ee(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ee(ne(n.path,t),e))return!0;return!1}function Bu(n){n.visibleWrites=zo(n.allWrites,$u,K()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function $u(n){return n.visible}function zo(n,e,t){let s=be.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Ee(t,o)?(a=ce(t,o),s=Lt(s,a,r.snap)):Ee(o,t)&&(a=ce(o,t),s=Lt(s,K(),r.snap.getChild(a)));else if(r.children){if(Ee(t,o))a=ce(t,o),s=or(s,a,r.children);else if(Ee(o,t))if(a=ce(o,t),U(a))s=or(s,K(),r.children);else{const l=Ct(r.children,H(a));if(l){const c=l.getChild(X(a));s=Lt(s,K(),c)}}}else throw bt("WriteRecord should have .snap or .children")}}return s}function Ko(n,e,t,s,i){if(!s&&!i){const r=rt(n.visibleWrites,e);if(r!=null)return r;{const o=We(n.visibleWrites,e);if(Cs(o))return t;if(t==null&&!vs(o,K()))return null;{const a=t||x.EMPTY_NODE;return It(o,a)}}}else{const r=We(n.visibleWrites,e);if(!i&&Cs(r))return t;if(!i&&t==null&&!vs(r,K()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ee(c.path,e)||Ee(e,c.path))},a=zo(n.allWrites,o,e),l=t||x.EMPTY_NODE;return It(a,l)}}}function Hu(n,e,t){let s=x.EMPTY_NODE;const i=rt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ee,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=We(n.visibleWrites,e);return t.forEachChild(ee,(o,a)=>{const l=It(We(r,new Y(o)),a);s=s.updateImmediateChild(o,l)}),lr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=We(n.visibleWrites,e);return lr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Uu(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ne(e,t);if(vs(n.visibleWrites,r))return null;{const o=We(n.visibleWrites,r);return Cs(o)?i.getChild(t):It(o,i.getChild(t))}}function Wu(n,e,t,s){const i=ne(e,t),r=rt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=We(n.visibleWrites,i);return It(o,s.getNode().getImmediateChild(t))}else return null}function Vu(n,e){return rt(n.visibleWrites,e)}function qu(n,e,t,s,i,r,o){let a;const l=We(n.visibleWrites,e),c=rt(l,K());if(c!=null)a=c;else if(t!=null)a=It(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&h.length<i;)u(f,s)!==0&&h.push(f),f=d.getNext();return h}else return[]}function ju(){return{visibleWrites:be.empty(),allWrites:[],lastWriteId:-1}}function vn(n,e,t,s){return Ko(n.writeTree,n.treePath,e,t,s)}function Vs(n,e){return Hu(n.writeTree,n.treePath,e)}function cr(n,e,t,s){return Uu(n.writeTree,n.treePath,e,t,s)}function Cn(n,e){return Vu(n.writeTree,ne(n.treePath,e))}function Gu(n,e,t,s,i,r){return qu(n.writeTree,n.treePath,e,t,s,i,r)}function qs(n,e,t){return Wu(n.writeTree,n.treePath,e,t)}function Yo(n,e){return Qo(ne(n.treePath,e),n.writeTree)}function Qo(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Vt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Wt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Et(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Vt(s,e.snapshotNode,i.oldSnap));else throw bt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Xo=new Ku;class js{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new et(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qs(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tt(this.viewCache_),r=Gu(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n){return{filter:n}}function Qu(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Xu(n,e,t,s,i){const r=new zu;let o,a;if(t.type===Ie.OVERWRITE){const c=t;c.source.fromUser?o=ws(n,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=wn(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===Ie.MERGE){const c=t;c.source.fromUser?o=Zu(n,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Es(n,e,c.path,c.children,s,i,a,r))}else if(t.type===Ie.ACK_USER_WRITE){const c=t;c.revert?o=nd(n,e,c.path,s,i,r):o=ed(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Ie.LISTEN_COMPLETE)o=td(n,e,t.path,s,r);else throw bt("Unknown operation type: "+t.type);const l=r.getChanges();return Ju(e,o,l),{viewCache:o,changes:l}}function Ju(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ys(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Wo(ys(e)))}}function Jo(n,e,t,s,i,r){const o=e.eventCache;if(Cn(s,t)!=null)return e;{let a,l;if(U(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=tt(e),h=c instanceof x?c:x.EMPTY_NODE,u=Vs(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=vn(s,tt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=H(t);if(c===".priority"){m(qe(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=cr(s,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=X(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=cr(s,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=qs(s,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,i,r):a=o.getNode()}}return Ot(e,a,o.isFullyInitialized()||U(t),n.filter.filtersNodes())}}function wn(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(U(t))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=h.updateFullNode(l.getNode(),f,null)}else{const f=H(t);if(!l.isCompleteForPath(t)&&qe(t)>1)return e;const _=X(t),p=l.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=h.updatePriority(l.getNode(),p):c=h.updateChild(l.getNode(),f,p,_,Xo,null)}const u=jo(e,c,l.isFullyInitialized()||U(t),h.filtersNodes()),d=new js(i,u,r);return Jo(n,u,t,i,d,a)}function ws(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const h=new js(i,e,r);if(U(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ot(e,c,!0,n.filter.filtersNodes());else{const u=H(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Ot(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=X(t),f=a.getNode().getImmediateChild(u);let _;if(U(d))_=s;else{const v=h.getCompleteChild(u);v!=null?Mo(d)===".priority"&&v.getChild(Oo(d)).isEmpty()?_=v:_=v.updateChild(d,s):_=x.EMPTY_NODE}if(f.equals(_))l=e;else{const v=n.filter.updateChild(a.getNode(),u,_,d,h,o);l=Ot(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function hr(n,e){return n.eventCache.isCompleteForChild(e)}function Zu(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=ne(t,l);hr(e,H(h))&&(a=ws(n,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=ne(t,l);hr(e,H(h))||(a=ws(n,a,h,c,i,r,o))}),a}function ur(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Es(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;U(t)?c=s:c=new J(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),_=ur(n,f,d);l=wn(n,l,new Y(u),_,i,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const _=e.serverCache.getNode().getImmediateChild(u),v=ur(n,_,d);l=wn(n,l,new Y(u),v,i,r,o,a)}}),l}function ed(n,e,t,s,i,r,o){if(Cn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(U(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return wn(n,e,t,l.getNode().getChild(t),i,r,a,o);if(U(t)){let c=new J(null);return l.getNode().forEachChild(yt,(h,u)=>{c=c.set(new Y(h),u)}),Es(n,e,t,c,i,r,a,o)}else return e}else{let c=new J(null);return s.foreach((h,u)=>{const d=ne(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Es(n,e,t,c,i,r,a,o)}}function td(n,e,t,s,i){const r=e.serverCache,o=jo(e,r.getNode(),r.isFullyInitialized()||U(t),r.isFiltered());return Jo(n,o,t,s,Xo,i)}function nd(n,e,t,s,i,r){let o;if(Cn(s,t)!=null)return e;{const a=new js(s,e,i),l=e.eventCache.getNode();let c;if(U(t)||H(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=vn(s,tt(e));else{const u=e.serverCache.getNode();m(u instanceof x,"serverChildren would be complete if leaf node"),h=Vs(s,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=H(t);let u=qs(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,X(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,x.EMPTY_NODE,X(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vn(s,tt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Cn(s,K())!=null,Ot(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Bs(s.getIndex()),r=Eu(s);this.processor_=Yu(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(x.EMPTY_NODE,a.getNode(),null),h=new et(l,o.isFullyInitialized(),i.filtersNodes()),u=new et(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=On(u,h),this.eventGenerator_=new ku(this.query_)}get query(){return this.query_}}function id(n){return n.viewCache_.serverCache.getNode()}function rd(n,e){const t=tt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!U(e)&&!t.getImmediateChild(H(e)).isEmpty())?t.getChild(e):null}function dr(n){return n.eventRegistrations_.length===0}function od(n,e){n.eventRegistrations_.push(e)}function fr(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function _r(n,e,t,s){e.type===Ie.MERGE&&e.source.queryId!==null&&(m(tt(n.viewCache_),"We should always have a full cache before handling merges"),m(ys(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Xu(n.processor_,i,e,t,s);return Qu(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Zo(n,r.changes,r.viewCache.eventCache.getNode(),null)}function ad(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ee,(r,o)=>{s.push(Et(r,o))}),t.isFullyInitialized()&&s.push(Wo(t.getNode())),Zo(n,s,t.getNode(),e)}function Zo(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Au(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En;class ld{constructor(){this.views=new Map}}function cd(n){m(!En,"__referenceConstructor has already been defined"),En=n}function hd(){return m(En,"Reference.ts has not been loaded"),En}function ud(n){return n.views.size===0}function Gs(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),_r(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(_r(o,e,t,s));return r}}function dd(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=vn(t,i?s:null),l=!1;a?l=!0:s instanceof x?(a=Vs(t,s),l=!1):(a=x.EMPTY_NODE,l=!1);const c=On(new et(a,l,!1),new et(s,i,!1));return new sd(e,c)}return o}function fd(n,e,t,s,i,r){const o=dd(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),od(o,t),ad(o,t)}function _d(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=je(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(fr(c,t,s)),dr(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(fr(l,t,s)),dr(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!je(n)&&r.push(new(hd())(e._repo,e._path)),{removed:r,events:o}}function ea(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function vt(n,e){let t=null;for(const s of n.views.values())t=t||rd(s,e);return t}function ta(n,e){if(e._queryParams.loadsAllData())return Ln(n);{const s=e._queryIdentifier;return n.views.get(s)}}function na(n,e){return ta(n,e)!=null}function je(n){return Ln(n)!=null}function Ln(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In;function pd(n){m(!In,"__referenceConstructor has already been defined"),In=n}function md(){return m(In,"Reference.ts has not been loaded"),In}let gd=1;class pr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=ju(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yd(n,e,t,s,i){return xu(n.pendingWriteTree_,e,t,s,i),i?Zt(n,new Ze(qo(),e,t)):[]}function pt(n,e,t=!1){const s=Ou(n.pendingWriteTree_,e);if(Lu(n.pendingWriteTree_,e)){let r=new J(null);return s.snap!=null?r=r.set(K(),!0):de(s.children,o=>{r=r.set(new Y(o),!0)}),Zt(n,new yn(s.path,r,t))}else return[]}function Fn(n,e,t){return Zt(n,new Ze(Hs(),e,t))}function vd(n,e,t){const s=J.fromObject(t);return Zt(n,new Gt(Hs(),e,s))}function Cd(n,e){return Zt(n,new jt(Hs(),e))}function wd(n,e,t){const s=zs(n,t);if(s){const i=Ks(s),r=i.path,o=i.queryId,a=ce(r,e),l=new jt(Us(o),a);return Ys(n,r,l)}else return[]}function Is(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||na(o,e))){const l=_d(o,e,t,s);ud(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>je(f));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=bd(d);for(let _=0;_<f.length;++_){const v=f[_],p=v.query,I=oa(n,v);n.listenProvider_.startListening(Ft(p),bn(n,p),I.hashFn,I.onComplete)}}}!u&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Ft(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(Bn(d));n.listenProvider_.stopListening(Ft(d),f)}))}Td(n,c)}return a}function Ed(n,e,t,s){const i=zs(n,s);if(i!=null){const r=Ks(i),o=r.path,a=r.queryId,l=ce(o,e),c=new Ze(Us(a),l,t);return Ys(n,o,c)}else return[]}function Id(n,e,t,s){const i=zs(n,s);if(i){const r=Ks(i),o=r.path,a=r.queryId,l=ce(o,e),c=J.fromObject(t),h=new Gt(Us(a),l,c);return Ys(n,o,h)}else return[]}function mr(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const _=ce(d,i);r=r||vt(f,_),o=o||je(f)});let a=n.syncPointTree_.get(i);a?(o=o||je(a),r=r||vt(a,K())):(a=new ld,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=x.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,_)=>{const v=vt(_,K());v&&(r=r.updateImmediateChild(f,v))}));const c=na(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Bn(e);m(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Sd();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=Ws(n.pendingWriteTree_,i);let u=fd(a,e,t,h,r,l);if(!c&&!o&&!s){const d=ta(a,e);u=u.concat(Nd(n,e,d))}return u}function sa(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ce(o,e),c=vt(a,l);if(c)return c});return Ko(i,e,r,t,!0)}function Zt(n,e){return ia(e,n.syncPointTree_,null,Ws(n.pendingWriteTree_,K()))}function ia(n,e,t,s){if(U(n.path))return ra(n,e,t,s);{const i=e.get(K());t==null&&i!=null&&(t=vt(i,K()));let r=[];const o=H(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Yo(s,o);r=r.concat(ia(a,l,c,h))}return i&&(r=r.concat(Gs(i,n,s,t))),r}}function ra(n,e,t,s){const i=e.get(K());t==null&&i!=null&&(t=vt(i,K()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Yo(s,o),h=n.operationForChild(o);h&&(r=r.concat(ra(h,a,l,c)))}),i&&(r=r.concat(Gs(i,n,s,t))),r}function oa(n,e){const t=e.query,s=bn(n,t);return{hashFn:()=>(id(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?wd(n,t._path,s):Cd(n,t._path);{const r=wh(i,t);return Is(n,t,null,r)}}}}function bn(n,e){const t=Bn(e);return n.queryToTagMap.get(t)}function Bn(n){return n._path.toString()+"$"+n._queryIdentifier}function zs(n,e){return n.tagToQueryMap.get(e)}function Ks(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Y(n.substr(0,e))}}function Ys(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=Ws(n.pendingWriteTree_,e);return Gs(s,t,i,null)}function bd(n){return n.fold((e,t,s)=>{if(t&&je(t))return[Ln(t)];{let i=[];return t&&(i=ea(t)),de(s,(r,o)=>{i=i.concat(o)}),i}})}function Ft(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(md())(n._repo,n._path):n}function Td(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Bn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Sd(){return gd++}function Nd(n,e,t){const s=e._path,i=bn(n,e),r=oa(n,t),o=n.listenProvider_.startListening(Ft(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!je(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!U(c)&&h&&je(h))return[Ln(h).query];{let d=[];return h&&(d=d.concat(ea(h).map(f=>f.query))),de(u,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Ft(h),bn(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qs(t)}node(){return this.node_}}class Xs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ne(this.path_,e);return new Xs(this.syncTree_,t)}node(){return sa(this.syncTree_,this.path_)}}const Rd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},gr=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return kd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Ad(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},kd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Ad=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Dd=function(n,e,t,s){return Js(e,new Xs(t,n),s)},Pd=function(n,e,t){return Js(n,new Qs(e),t)};function Js(n,e,t){const s=n.getPriority().val(),i=gr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=gr(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new se(a,ae(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new se(i))),o.forEachChild(ee,(a,l)=>{const c=Js(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ei(n,e){let t=e instanceof Y?e:new Y(e),s=n,i=H(t);for(;i!==null;){const r=Ct(s.node.children,i)||{children:{},childCount:0};s=new Zs(i,s,r),t=X(t),i=H(t)}return s}function Nt(n){return n.node.value}function aa(n,e){n.node.value=e,bs(n)}function la(n){return n.node.childCount>0}function Md(n){return Nt(n)===void 0&&!la(n)}function $n(n,e){de(n.node.children,(t,s)=>{e(new Zs(t,n,s))})}function ca(n,e,t,s){t&&!s&&e(n),$n(n,i=>{ca(i,e,!0,s)}),t&&s&&e(n)}function xd(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function en(n){return new Y(n.parent===null?n.name:en(n.parent)+"/"+n.name)}function bs(n){n.parent!==null&&Od(n.parent,n.name,n)}function Od(n,e,t){const s=Md(t),i=Oe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,bs(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,bs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=/[\[\].#$\/\u0000-\u001F\u007F]/,Fd=/[\[\].#$\u0000-\u001F\u007F]/,ts=10*1024*1024,ha=function(n){return typeof n=="string"&&n.length!==0&&!Ld.test(n)},ua=function(n){return typeof n=="string"&&n.length!==0&&!Fd.test(n)},Bd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ua(n)},da=function(n,e,t){const s=t instanceof Y?new eu(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ze(s));if(typeof e=="function")throw new Error(n+"contains a function "+ze(s)+" with contents = "+e.toString());if(uo(e))throw new Error(n+"contains "+e.toString()+" "+ze(s));if(typeof e=="string"&&e.length>ts/3&&Mn(e)>ts)throw new Error(n+"contains a string greater than "+ts+" utf8 bytes "+ze(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(de(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ha(o)))throw new Error(n+" contains an invalid key ("+o+") "+ze(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tu(s,o),da(n,a,s),nu(s)}),i&&r)throw new Error(n+' contains ".value" child '+ze(s)+" in addition to actual children.")}},fa=function(n,e,t,s){if(!(s&&t===void 0)&&!ua(t))throw new Error(eo(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$d=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fa(n,e,t,s)},Hd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ha(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Bd(t))throw new Error(eo(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _a(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Os(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function pa(n,e,t){_a(n,t),ma(n,s=>Os(s,e))}function ot(n,e,t){_a(n,t),ma(n,s=>Ee(s,e)||Ee(e,s))}function ma(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Wd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Wd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Qe&&oe("event: "+t.toString()),Xt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="repo_interrupt",qd=25;class jd{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ud,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gn(),this.transactionQueueTree_=new Zs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Gd(n,e,t){if(n.stats_=Ms(n.repoInfo_),n.forceRestClient_||Th())n.server_=new mn(n.repoInfo_,(s,i,r,o)=>{yr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>vr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Pe(n.repoInfo_,e,(s,i,r,o)=>{yr(n,s,i,r,o)},s=>{vr(n,s)},s=>{Kd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ah(n.repoInfo_,()=>new Ru(n.stats_,n.server_)),n.infoData_=new Iu,n.infoSyncTree_=new pr({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Fn(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ti(n,"connected",!1),n.serverSyncTree_=new pr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ot(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function zd(n){const t=n.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ga(n){return Rd({timestamp:zd(n)})}function yr(n,e,t,s,i){n.dataUpdateCount++;const r=new Y(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=hn(t,c=>ae(c));o=Id(n.serverSyncTree_,r,l,i)}else{const l=ae(t);o=Ed(n.serverSyncTree_,r,l,i)}else if(s){const l=hn(t,c=>ae(c));o=vd(n.serverSyncTree_,r,l)}else{const l=ae(t);o=Fn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=si(n,r)),ot(n.eventQueue_,a,o)}function vr(n,e){ti(n,"connected",e),e===!1&&Qd(n)}function Kd(n,e){de(e,(t,s)=>{ti(n,t,s)})}function ti(n,e,t){const s=new Y("/.info/"+e),i=ae(t);n.infoData_.updateSnapshot(s,i);const r=Fn(n.infoSyncTree_,s,i);ot(n.eventQueue_,s,r)}function Yd(n){return n.nextWriteId_++}function Qd(n){ya(n,"onDisconnectEvents");const e=ga(n),t=gn();gs(n.onDisconnect_,K(),(i,r)=>{const o=Dd(i,r,n.serverSyncTree_,e);Vo(t,i,o)});let s=[];gs(t,K(),(i,r)=>{s=s.concat(Fn(n.serverSyncTree_,i,r));const o=tf(n,i);si(n,o)}),n.onDisconnect_=gn(),ot(n.eventQueue_,K(),s)}function Xd(n,e,t){let s;H(e._path)===".info"?s=mr(n.infoSyncTree_,e,t):s=mr(n.serverSyncTree_,e,t),pa(n.eventQueue_,e._path,s)}function Cr(n,e,t){let s;H(e._path)===".info"?s=Is(n.infoSyncTree_,e,t):s=Is(n.serverSyncTree_,e,t),pa(n.eventQueue_,e._path,s)}function Jd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Vd)}function ya(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),oe(t,...e)}function va(n,e,t){return sa(n.serverSyncTree_,e,t)||x.EMPTY_NODE}function ni(n,e=n.transactionQueueTree_){if(e||Hn(n,e),Nt(e)){const t=wa(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Zd(n,en(e),t)}else la(e)&&$n(e,t=>{ni(n,t)})}function Zd(n,e,t){const s=t.map(c=>c.currentWriteId),i=va(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];m(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ce(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ya(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(pt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Hn(n,ei(n.transactionQueueTree_,e)),ni(n,n.transactionQueueTree_),ot(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)Xt(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ve("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}si(n,e)}},o)}function si(n,e){const t=Ca(n,e),s=en(t),i=wa(n,t);return ef(n,i,s),s}function ef(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ce(t,l.path);let h=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,i=i.concat(pt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=qd)h=!0,u="maxretry",i=i.concat(pt(n.serverSyncTree_,l.currentWriteId,!0));else{const d=va(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){da("transaction failed: Data returned ",f,l.path);let _=ae(f);typeof f=="object"&&f!=null&&Oe(f,".priority")||(_=_.updatePriority(d.getPriority()));const p=l.currentWriteId,I=ga(n),F=Pd(_,d,I);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=F,l.currentWriteId=Yd(n),o.splice(o.indexOf(p),1),i=i.concat(yd(n.serverSyncTree_,l.path,F,l.currentWriteId,l.applyLocally)),i=i.concat(pt(n.serverSyncTree_,p,!0))}else h=!0,u="nodata",i=i.concat(pt(n.serverSyncTree_,l.currentWriteId,!0))}ot(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Hn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Xt(s[a]);ni(n,n.transactionQueueTree_)}function Ca(n,e){let t,s=n.transactionQueueTree_;for(t=H(e);t!==null&&Nt(s)===void 0;)s=ei(s,t),e=X(e),t=H(e);return s}function wa(n,e){const t=[];return Ea(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Ea(n,e,t){const s=Nt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);$n(e,i=>{Ea(n,i,t)})}function Hn(n,e){const t=Nt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,aa(e,t.length>0?t:void 0)}$n(e,s=>{Hn(n,s)})}function tf(n,e){const t=en(Ca(n,e)),s=ei(n.transactionQueueTree_,e);return xd(s,i=>{ns(n,i)}),ns(n,s),ca(s,i=>{ns(n,i)}),t}function ns(n,e){const t=Nt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(pt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?aa(e,void 0):t.length=r+1,ot(n.eventQueue_,en(e),i);for(let o=0;o<s.length;o++)Xt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sf(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ve(`Invalid query segment '${t}' in query '${n}'`)}return e}const wr=function(n,e){const t=rf(n),s=t.namespace;t.domain==="firebase.com"&&xe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&xe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||mh();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new bo(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Y(t.pathString)}},rf=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=nf(n.substring(h,u)));const d=sf(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class ba{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ii{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return U(this._path)?null:Mo(this._path)}get ref(){return new Le(this._repo,this._path)}get _queryIdentifier(){const e=ir(this._queryParams),t=Ds(e);return t==="{}"?"default":t}get _queryObject(){return ir(this._queryParams)}isEqual(e){if(e=Tt(e),!(e instanceof ii))return!1;const t=this._repo===e._repo,s=Os(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Zh(this._path)}}class Le extends ii{constructor(e,t){super(e,t,new $s,!1)}get parent(){const e=Oo(this._path);return e===null?null:new Le(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Y(e),s=Tn(this.ref,e);return new zt(this._node.getChild(t),s,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zt(i,Tn(this.ref,s),ee)))}hasChild(e){const t=new Y(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function af(n,e){return n=Tt(n),n._checkNotDeleted("ref"),e!==void 0?Tn(n._root,e):n._root}function Tn(n,e){return n=Tt(n),H(n._path)===null?$d("child","path",e,!1):fa("child","path",e,!1),new Le(n._repo,ne(n._path,e))}class ri{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Ia("value",this,new zt(e.snapshotNode,new Le(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ba(this,e,t):null}matches(e){return e instanceof ri?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class oi{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ba(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");const s=Tn(new Le(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Ia(e.type,this,new zt(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof oi?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function lf(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(h,u)=>{Cr(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new of(t,r||void 0),a=e==="value"?new ri(o):new oi(e,o);return Xd(n._repo,n,a),()=>Cr(n._repo,n,a)}function cf(n,e,t,s){return lf(n,"value",e,t,s)}cd(Le);pd(Le);/**
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
 */const hf="FIREBASE_DATABASE_EMULATOR_HOST",Ts={};let uf=!1;function df(n,e,t,s){n.repoInfo_=new bo(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function ff(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||xe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),oe("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=wr(r,i),a=o.repoInfo,l,c;typeof process<"u"&&Hi&&(c=Hi[hf]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=wr(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new gt(gt.OWNER):new Nh(n.name,n.options,e);Hd("Invalid Firebase Database URL",o),U(o.path)||xe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=pf(a,n,h,new Sh(n.name,t));return new mf(u,n)}function _f(n,e){const t=Ts[e];(!t||t[n.key]!==n)&&xe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Jd(n),delete t[n.key]}function pf(n,e,t,s){let i=Ts[e.name];i||(i={},Ts[e.name]=i);let r=i[n.toURLString()];return r&&xe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new jd(n,uf,t,s),i[n.toURLString()]=r,r}class mf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Gd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Le(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_f(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xe("Cannot call "+e+" on a deleted database.")}}function gf(n=ro(),e){const t=Kt(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Bl("database");s&&yf(t,...s)}return t}function yf(n,e,t,s={}){n=Tt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&xe("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&xe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new gt(gt.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:$l(s.mockUserToken,n.app.options.projectId);r=new gt(o)}df(i,e,t,r)}/**
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
 */function vf(n){uh(Xc),Ve(new Me("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ff(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ne(Ui,Wi,n),Ne(Ui,Wi,"esm2017")}Pe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Pe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};vf();async function Cf(n){const e=gf(),t=af(e,n);return new Promise((s,i)=>{cf(t,r=>{const o=r.val()||[];s(o)},r=>{i(r)})})}const Ta="@firebase/installations",ai="0.6.5";/**
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
 */const Sa=1e4,Na=`w:${ai}`,Ra="FIS_v2",wf="https://firebaseinstallations.googleapis.com/v1",Ef=60*60*1e3,If="installations",bf="Installations";/**
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
 */const Tf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nt=new Pn(If,bf,Tf);function ka(n){return n instanceof it&&n.code.includes("request-failed")}/**
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
 */function Aa({projectId:n}){return`${wf}/projects/${n}/installations`}function Da(n){return{token:n.token,requestStatus:2,expiresIn:Nf(n.expiresIn),creationTime:Date.now()}}async function Pa(n,e){const s=(await e.json()).error;return nt.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ma({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Sf(n,{refreshToken:e}){const t=Ma(n);return t.append("Authorization",Rf(e)),t}async function xa(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Nf(n){return Number(n.replace("s","000"))}function Rf(n){return`${Ra} ${n}`}/**
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
 */async function kf({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Aa(n),i=Ma(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:t,authVersion:Ra,appId:n.appId,sdkVersion:Na},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await xa(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Da(c.authToken)}}else throw await Pa("Create Installation",l)}/**
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
 */function Oa(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Af(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Df=/^[cdef][\w-]{21}$/,Ss="";function Pf(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Mf(n);return Df.test(t)?t:Ss}catch{return Ss}}function Mf(n){return Af(n).substr(0,22)}/**
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
 */function Un(n){return`${n.appName}!${n.appId}`}/**
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
 */const La=new Map;function Fa(n,e){const t=Un(n);Ba(t,e),xf(t,e)}function Ba(n,e){const t=La.get(n);if(t)for(const s of t)s(e)}function xf(n,e){const t=Of();t&&t.postMessage({key:n,fid:e}),Lf()}let Ye=null;function Of(){return!Ye&&"BroadcastChannel"in self&&(Ye=new BroadcastChannel("[Firebase] FID Change"),Ye.onmessage=n=>{Ba(n.data.key,n.data.fid)}),Ye}function Lf(){La.size===0&&Ye&&(Ye.close(),Ye=null)}/**
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
 */const Ff="firebase-installations-database",Bf=1,st="firebase-installations-store";let ss=null;function li(){return ss||(ss=so(Ff,Bf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(st)}}})),ss}async function Sn(n,e){const t=Un(n),i=(await li()).transaction(st,"readwrite"),r=i.objectStore(st),o=await r.get(t);return await r.put(e,t),await i.done,(!o||o.fid!==e.fid)&&Fa(n,e.fid),e}async function $a(n){const e=Un(n),s=(await li()).transaction(st,"readwrite");await s.objectStore(st).delete(e),await s.done}async function Wn(n,e){const t=Un(n),i=(await li()).transaction(st,"readwrite"),r=i.objectStore(st),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&Fa(n,a.fid),a}/**
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
 */async function ci(n){let e;const t=await Wn(n.appConfig,s=>{const i=$f(s),r=Hf(n,i);return e=r.registrationPromise,r.installationEntry});return t.fid===Ss?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function $f(n){const e=n||{fid:Pf(),registrationStatus:0};return Ha(e)}function Hf(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(nt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Uf(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Wf(n)}:{installationEntry:e}}async function Uf(n,e){try{const t=await kf(n,e);return Sn(n.appConfig,t)}catch(t){throw ka(t)&&t.customData.serverCode===409?await $a(n.appConfig):await Sn(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Wf(n){let e=await Er(n.appConfig);for(;e.registrationStatus===1;)await Oa(100),e=await Er(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await ci(n);return s||t}return e}function Er(n){return Wn(n,e=>{if(!e)throw nt.create("installation-not-found");return Ha(e)})}function Ha(n){return Vf(n)?{fid:n.fid,registrationStatus:0}:n}function Vf(n){return n.registrationStatus===1&&n.registrationTime+Sa<Date.now()}/**
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
 */async function qf({appConfig:n,heartbeatServiceProvider:e},t){const s=jf(n,t),i=Sf(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Na,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await xa(()=>fetch(s,a));if(l.ok){const c=await l.json();return Da(c)}else throw await Pa("Generate Auth Token",l)}function jf(n,{fid:e}){return`${Aa(n)}/${e}/authTokens:generate`}/**
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
 */async function hi(n,e=!1){let t;const s=await Wn(n.appConfig,r=>{if(!Ua(r))throw nt.create("not-registered");const o=r.authToken;if(!e&&Kf(o))return r;if(o.requestStatus===1)return t=Gf(n,e),r;{if(!navigator.onLine)throw nt.create("app-offline");const a=Qf(r);return t=zf(n,a),a}});return t?await t:s.authToken}async function Gf(n,e){let t=await Ir(n.appConfig);for(;t.authToken.requestStatus===1;)await Oa(100),t=await Ir(n.appConfig);const s=t.authToken;return s.requestStatus===0?hi(n,e):s}function Ir(n){return Wn(n,e=>{if(!Ua(e))throw nt.create("not-registered");const t=e.authToken;return Xf(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function zf(n,e){try{const t=await qf(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Sn(n.appConfig,s),t}catch(t){if(ka(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await $a(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Sn(n.appConfig,s)}throw t}}function Ua(n){return n!==void 0&&n.registrationStatus===2}function Kf(n){return n.requestStatus===2&&!Yf(n)}function Yf(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Ef}function Qf(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Xf(n){return n.requestStatus===1&&n.requestTime+Sa<Date.now()}/**
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
 */async function Jf(n){const e=n,{installationEntry:t,registrationPromise:s}=await ci(e);return s?s.catch(console.error):hi(e).catch(console.error),t.fid}/**
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
 */async function Zf(n,e=!1){const t=n;return await e_(t),(await hi(t,e)).token}async function e_(n){const{registrationPromise:e}=await ci(n);e&&await e}/**
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
 */function t_(n){if(!n||!n.options)throw is("App Configuration");if(!n.name)throw is("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw is(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function is(n){return nt.create("missing-app-config-values",{valueName:n})}/**
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
 */const Wa="installations",n_="installations-internal",s_=n=>{const e=n.getProvider("app").getImmediate(),t=t_(e),s=Kt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},i_=n=>{const e=n.getProvider("app").getImmediate(),t=Kt(e,Wa).getImmediate();return{getId:()=>Jf(t),getToken:i=>Zf(t,i)}};function r_(){Ve(new Me(Wa,s_,"PUBLIC")),Ve(new Me(n_,i_,"PRIVATE"))}r_();Ne(Ta,ai);Ne(Ta,ai,"esm2017");/**
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
 */const Nn="analytics",o_="firebase_id",a_="origin",l_=60*1e3,c_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ui="https://www.googletagmanager.com/gtag/js";/**
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
 */const ue=new ks("@firebase/analytics");/**
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
 */const h_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ce=new Pn("analytics","Analytics",h_);/**
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
 */function u_(n){if(!n.startsWith(ui)){const e=Ce.create("invalid-gtag-resource",{gtagURL:n});return ue.warn(e.message),""}return n}function Va(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function d_(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function f_(n,e){const t=d_("firebase-js-sdk-policy",{createScriptURL:u_}),s=document.createElement("script"),i=`${ui}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function __(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function p_(n,e,t,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await Va(t)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){ue.error(a)}n("config",i,r)}async function m_(n,e,t,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Va(t);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",s,i||{})}catch(r){ue.error(r)}}function g_(n,e,t,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await m_(n,e,t,a,l)}else if(r==="config"){const[a,l]=o;await p_(n,e,t,s,a,l)}else if(r==="consent"){const[a]=o;n("consent","update",a)}else if(r==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){ue.error(a)}}return i}function y_(n,e,t,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=g_(r,n,e,t),{gtagCore:r,wrappedGtag:window[i]}}function v_(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ui)&&t.src.includes(n))return t;return null}/**
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
 */const C_=30,w_=1e3;class E_{constructor(e={},t=w_){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qa=new E_;function I_(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function b_(n){var e;const{appId:t,apiKey:s}=n,i={method:"GET",headers:I_(s)},r=c_.replace("{app-id}",t),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ce.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function T_(n,e=qa,t){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw Ce.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Ce.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new R_;return setTimeout(async()=>{a.abort()},t!==void 0?t:l_),ja({appId:s,apiKey:i,measurementId:r},o,a,e)}async function ja(n,{throttleEndTimeMillis:e,backoffCount:t},s,i=qa){var r;const{appId:o,measurementId:a}=n;try{await S_(s,e)}catch(l){if(a)return ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await b_(n);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!N_(c)){if(i.deleteThrottleMetadata(o),a)return ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Pi(t,i.intervalMillis,C_):Pi(t,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:t+1};return i.setThrottleMetadata(o,u),ue.debug(`Calling attemptFetch again in ${h} millis`),ja(n,u,s,i)}}function S_(n,e){return new Promise((t,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(r),s(Ce.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function N_(n){if(!(n instanceof it)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class R_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function k_(n,e,t,s,i){if(i&&i.global){n("event",t,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});n("event",t,o)}}/**
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
 */async function A_(){if(Xr())try{await Jr()}catch(n){return ue.warn(Ce.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return ue.warn(Ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function D_(n,e,t,s,i,r,o){var a;const l=T_(n);l.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&ue.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>ue.error(f)),e.push(l);const c=A_().then(f=>{if(f)return s.getId()}),[h,u]=await Promise.all([l,c]);v_(r)||f_(r,h.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[a_]="firebase",d.update=!0,u!=null&&(d[o_]=u),i("config",h.measurementId,d),h.measurementId}/**
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
 */class P_{constructor(e){this.app=e}_delete(){return delete Bt[this.app.options.appId],Promise.resolve()}}let Bt={},br=[];const Tr={};let rs="dataLayer",M_="gtag",Sr,Ga,Nr=!1;function x_(){const n=[];if(Ul()&&n.push("This is a browser extension environment."),Vl()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),t=Ce.create("invalid-analytics-context",{errorInfo:e});ue.warn(t.message)}}function O_(n,e,t){x_();const s=n.options.appId;if(!s)throw Ce.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ce.create("no-api-key");if(Bt[s]!=null)throw Ce.create("already-exists",{id:s});if(!Nr){__(rs);const{wrappedGtag:r,gtagCore:o}=y_(Bt,br,Tr,rs,M_);Ga=r,Sr=o,Nr=!0}return Bt[s]=D_(n,br,Tr,e,Sr,rs,t),new P_(n)}function L_(n=ro()){n=Tt(n);const e=Kt(n,Nn);return e.isInitialized()?e.getImmediate():F_(n)}function F_(n,e={}){const t=Kt(n,Nn);if(t.isInitialized()){const i=t.getImmediate();if(un(e,t.getOptions()))return i;throw Ce.create("already-initialized")}return t.initialize({options:e})}function za(n,e,t,s){n=Tt(n),k_(Ga,Bt[n.app.options.appId],e,t,s).catch(i=>ue.error(i))}const Rr="@firebase/analytics",kr="0.10.1";function B_(){Ve(new Me(Nn,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return O_(s,i,t)},"PUBLIC")),Ve(new Me("analytics-internal",n,"PRIVATE")),Ne(Rr,kr),Ne(Rr,kr,"esm2017");function n(e){try{const t=e.getProvider(Nn).getImmediate();return{logEvent:(s,i,r)=>za(t,s,i,r)}}catch(t){throw Ce.create("interop-component-reg-failed",{reason:t})}}}B_();function $_(n){let e,t,s=ke(n[2])+"",i,r,o,a=ke(n[1])+"",l,c,h,u=ke(n[0])+"",d;return{c(){e=S("span"),t=S("span"),i=me(s),r=me(":"),o=S("span"),l=me(a),c=me(":"),h=S("span"),d=me(u),this.h()},l(f){e=N(f,"SPAN",{class:!0});var _=z(e);t=N(_,"SPAN",{class:!0});var v=z(t);i=ge(v,s),v.forEach(y),r=ge(_,":"),o=N(_,"SPAN",{class:!0});var p=z(o);l=ge(p,a),p.forEach(y),c=ge(_,":"),h=N(_,"SPAN",{class:!0});var I=z(h);d=ge(I,u),I.forEach(y),_.forEach(y),this.h()},h(){P(t,"class","value"),P(o,"class","value"),P(h,"class","value"),P(e,"class","timer svelte-1y1osaq")},m(f,_){A(f,e,_),E(e,t),E(t,i),E(e,r),E(e,o),E(o,l),E(e,c),E(e,h),E(h,d)},p(f,[_]){_&4&&s!==(s=ke(f[2])+"")&&De(i,s),_&2&&a!==(a=ke(f[1])+"")&&De(l,a),_&1&&u!==(u=ke(f[0])+"")&&De(d,u)},i:ye,o:ye,d(f){f&&y(e)}}}function ke(n){return n<10?`0${n}`:n.toString()}function H_(n,e,t){let s,i,r,o,a,l,{elapsedSeconds:c}=e,h=Date.now(),u=os(!1);an(n,u,I=>t(12,o=I));let d=os(0);an(n,d,I=>t(13,a=I));const f=dl(0,function(F){const D=setInterval(()=>{o&&(d.set(Math.round((Date.now()-h)/1e3)),F(a))},1e3);return function(){clearInterval(D)}});an(n,f,I=>t(10,l=I));function _(){o||(h=Date.now()-a*1e3,u.set(!0))}function v(){o&&u.set(!1)}function p(){v(),h=Date.now(),d.set(0)}return n.$$set=I=>{"elapsedSeconds"in I&&t(6,c=I.elapsedSeconds)},n.$$.update=()=>{n.$$.dirty&1024&&t(2,s=Math.floor(l/3600)),n.$$.dirty&1028&&t(1,i=Math.floor((l-s*3600)/60)),n.$$.dirty&1030&&t(0,r=l-s*3600-i*60),n.$$.dirty&7&&t(6,c=ke(s)+":"+ke(i)+":"+ke(r))},[r,i,s,u,d,f,c,_,v,p,l]}class U_ extends An{constructor(e){super(),Dn(this,e,H_,$_,kn,{elapsedSeconds:6,start:7,stop:8,reset:9})}get start(){return this.$$.ctx[7]}get stop(){return this.$$.ctx[8]}get reset(){return this.$$.ctx[9]}}function Ar(n,e,t){const s=n.slice();return s[31]=e[t],s}function Dr(n,e,t){const s=n.slice();return s[34]=e[t],s[36]=t,s}function Pr(n,e,t){const s=n.slice();return s[34]=e[t],s[36]=t,s}function W_(n){let e,t="Loading Game...";return{c(){e=S("p"),e.textContent=t},l(s){e=N(s,"P",{"data-svelte-h":!0}),Z(e)!=="svelte-kk77ic"&&(e.textContent=t)},m(s,i){A(s,e,i)},p:ye,d(s){s&&y(e)}}}function V_(n){let e,t,s,i=[],r=new Map,o,a,l='<i class="fa-solid fa-eraser"></i>',c,h,u='<i class="fa-solid fa-shuffle"></i>',d,f,_='<i class="fa-solid fa-delete-left"></i>',v,p,I="Enter",F,T,D,q,B,b,C=$e(n[4]),w=[];for(let R=0;R<C.length;R+=1)w[R]=Mr(Pr(n,C,R));let M=$e(n[5]);const te=R=>R[36];for(let R=0;R<M.length;R+=1){let W=Dr(n,M,R),g=te(W);r.set(g,i[R]=xr(g,W))}return{c(){e=S("div");for(let R=0;R<w.length;R+=1)w[R].c();t=O(),s=S("div");for(let R=0;R<i.length;R+=1)i[R].c();o=O(),a=S("div"),a.innerHTML=l,c=O(),h=S("div"),h.innerHTML=u,d=O(),f=S("div"),f.innerHTML=_,v=O(),p=S("div"),p.textContent=I,F=O(),T=S("p"),D=me("Puzzle for "),q=me(n[8]),this.h()},l(R){e=N(R,"DIV",{class:!0});var W=z(e);for(let fe=0;fe<w.length;fe+=1)w[fe].l(W);W.forEach(y),t=L(R),s=N(R,"DIV",{class:!0});var g=z(s);for(let fe=0;fe<i.length;fe+=1)i[fe].l(g);o=L(g),a=N(g,"DIV",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-qtb4kv"&&(a.innerHTML=l),c=L(g),h=N(g,"DIV",{class:!0,"data-svelte-h":!0}),Z(h)!=="svelte-krp8l1"&&(h.innerHTML=u),d=L(g),f=N(g,"DIV",{class:!0,"data-svelte-h":!0}),Z(f)!=="svelte-1jsmx3m"&&(f.innerHTML=_),v=L(g),p=N(g,"DIV",{class:!0,"data-svelte-h":!0}),Z(p)!=="svelte-1qinv54"&&(p.textContent=I),g.forEach(y),F=L(R),T=N(R,"P",{class:!0});var j=z(T);D=ge(j,"Puzzle for "),q=ge(j,n[8]),j.forEach(y),this.h()},h(){P(e,"class","circle-container svelte-t5r176"),P(a,"class","key svelte-t5r176"),P(h,"class","key svelte-t5r176"),P(f,"class","key svelte-t5r176"),P(p,"class","key enter-key svelte-t5r176"),P(s,"class","keyboard svelte-t5r176"),P(T,"class","date svelte-t5r176")},m(R,W){A(R,e,W);for(let g=0;g<w.length;g+=1)w[g]&&w[g].m(e,null);A(R,t,W),A(R,s,W);for(let g=0;g<i.length;g+=1)i[g]&&i[g].m(s,null);E(s,o),E(s,a),E(s,c),E(s,h),E(s,d),E(s,f),E(s,v),E(s,p),A(R,F,W),A(R,T,W),E(T,D),E(T,q),B||(b=[le(a,"click",n[14]),le(h,"click",n[15]),le(f,"click",n[16]),le(p,"click",n[13])],B=!0)},p(R,W){if(W[0]&1040){C=$e(R[4]);let g;for(g=0;g<C.length;g+=1){const j=Pr(R,C,g);w[g]?w[g].p(j,W):(w[g]=Mr(j),w[g].c(),w[g].m(e,null))}for(;g<w.length;g+=1)w[g].d(1);w.length=C.length}W[0]&4640&&(M=$e(R[5]),i=Hr(i,W,te,1,R,M,r,s,pl,xr,o,Dr)),W[0]&256&&De(q,R[8])},d(R){R&&(y(e),y(t),y(s),y(F),y(T)),Br(w,R);for(let W=0;W<i.length;W+=1)i[W].d();B=!1,Rn(b)}}}function Mr(n){let e,t=(n[34]==""?"":n[34])+"",s,i,r;return{c(){e=S("div"),s=me(t),i=O(),this.h()},l(o){e=N(o,"DIV",{class:!0,style:!0});var a=z(e);s=ge(a,t),i=L(a),a.forEach(y),this.h()},h(){P(e,"class","circle svelte-t5r176"),P(e,"style",r=`
						left: calc(40% + ${Math.cos(n[36]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
						top: calc(37% + ${Math.sin(n[36]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
				`),Mt(e,"filled",n[34]!=""),Mt(e,"shared",n[10].includes(n[36]))},m(o,a){A(o,e,a),E(e,s),E(e,i)},p(o,a){a[0]&16&&t!==(t=(o[34]==""?"":o[34])+"")&&De(s,t),a[0]&16&&r!==(r=`
						left: calc(40% + ${Math.cos(o[36]/o[4].length*2*Math.PI-Math.PI/2)*100}px);
						top: calc(37% + ${Math.sin(o[36]/o[4].length*2*Math.PI-Math.PI/2)*100}px);
				`)&&P(e,"style",r),a[0]&16&&Mt(e,"filled",o[34]!="")},d(o){o&&y(e)}}}function xr(n,e){let t,s=e[34]+"",i,r,o,a;function l(){return e[24](e[34],e[36])}return{key:n,first:null,c(){t=S("div"),i=me(s),r=O(),this.h()},l(c){t=N(c,"DIV",{class:!0});var h=z(t);i=ge(h,s),r=L(h),h.forEach(y),this.h()},h(){P(t,"class","key svelte-t5r176"),Mt(t,"disabled",e[9](e[36])),this.first=t},m(c,h){A(c,t,h),E(t,i),E(t,r),o||(a=le(t,"click",l),o=!0)},p(c,h){e=c,h[0]&32&&s!==(s=e[34]+"")&&De(i,s),h[0]&544&&Mt(t,"disabled",e[9](e[36]))},d(c){c&&y(t),o=!1,a()}}}function Or(n){let e,t=Fr(n[31])+"",s;return{c(){e=S("div"),s=me(t),this.h()},l(i){e=N(i,"DIV",{class:!0});var r=z(e);s=ge(r,t),r.forEach(y),this.h()},h(){P(e,"class","solution")},m(i,r){A(i,e,r),E(e,s)},p(i,r){r[0]&8&&t!==(t=Fr(i[31])+"")&&De(s,t)},d(i){i&&y(e)}}}function q_(n){let e,t,s,i,r,o,a,l="Other Possible Solutions",c,h,u,d,f,_,v,p,I="Share",F,T,D,q,B=$e(n[3]),b=[];for(let C=0;C<B.length;C+=1)b[C]=Or(Ar(n,B,C));return{c(){e=S("span"),t=me("Solved in "),s=me(n[7]),i=O(),r=S("hr"),o=O(),a=S("span"),a.textContent=l,c=O();for(let C=0;C<b.length;C+=1)b[C].c();h=O(),u=S("br"),d=O(),f=S("div"),_=S("div"),v=O(),p=S("button"),p.textContent=I,F=O(),T=S("div"),this.h()},l(C){e=N(C,"SPAN",{class:!0});var w=z(e);t=ge(w,"Solved in "),s=ge(w,n[7]),w.forEach(y),i=L(C),r=N(C,"HR",{}),o=L(C),a=N(C,"SPAN",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-zm2m22"&&(a.textContent=l),c=L(C);for(let te=0;te<b.length;te+=1)b[te].l(C);h=L(C),u=N(C,"BR",{}),d=L(C),f=N(C,"DIV",{class:!0});var M=z(f);_=N(M,"DIV",{class:!0}),z(_).forEach(y),v=L(M),p=N(M,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(p)!=="svelte-1urjot1"&&(p.textContent=I),F=L(M),T=N(M,"DIV",{class:!0}),z(T).forEach(y),M.forEach(y),this.h()},h(){P(e,"class","sub-header svelte-t5r176"),P(a,"class","sub-header svelte-t5r176"),P(_,"class","spacer svelte-t5r176"),P(p,"class","share-button svelte-t5r176"),P(T,"class","spacer svelte-t5r176"),P(f,"class","flex-container svelte-t5r176")},m(C,w){A(C,e,w),E(e,t),E(e,s),A(C,i,w),A(C,r,w),A(C,o,w),A(C,a,w),A(C,c,w);for(let M=0;M<b.length;M+=1)b[M]&&b[M].m(C,w);A(C,h,w),A(C,u,w),A(C,d,w),A(C,f,w),E(f,_),E(f,v),E(f,p),E(f,F),E(f,T),D||(q=le(p,"click",n[17]),D=!0)},p(C,w){if(w[0]&128&&De(s,C[7]),w[0]&8){B=$e(C[3]);let M;for(M=0;M<B.length;M+=1){const te=Ar(C,B,M);b[M]?b[M].p(te,w):(b[M]=Or(te),b[M].c(),b[M].m(h.parentNode,h))}for(;M<b.length;M+=1)b[M].d(1);b.length=B.length}},d(C){C&&(y(e),y(i),y(r),y(o),y(a),y(c),y(h),y(u),y(d),y(f)),Br(b,C),D=!1,q()}}}function j_(n){let e,t=`<span class="styled-header svelte-t5r176">Congratulations!</span> <br/>
		Share your results with your friends.`;return{c(){e=S("div"),e.innerHTML=t,this.h()},l(s){e=N(s,"DIV",{slot:!0,"data-svelte-h":!0}),Z(e)!=="svelte-jqfhji"&&(e.innerHTML=t),this.h()},h(){P(e,"slot","header")},m(s,i){A(s,e,i)},p:ye,d(s){s&&y(e)}}}function G_(n){let e,t="Find the 8-letter circle word",s,i,r="<li>There are 2 words to find.</li> <li>Letters may only be used once and have to be in the letter bank.</li> <li>The red circles are shared letters between the two words.</li>",o,a,l="Example",c,h,u="If we had these letters:",d,f,_,v,p,I=`We could spell the words 
			<b><span style="color: red;">M</span>USI<span style="color: red;">C</span></b> 
			and 
			<b><span style="color: red;">C</span>HAR<span style="color: red;">M</span> </b>.`,F,T,D='Notice how these words share an <b><span style="color: red;">M</span></b> and a <b><span style="color: red;">C</span></b>.',q,B,b="One correct solution:",C,w,M,te,R,W="Remember there can be more than one solution.";return{c(){e=S("h3"),e.textContent=t,s=O(),i=S("ul"),i.innerHTML=r,o=O(),a=S("h3"),a.textContent=l,c=O(),h=S("p"),h.textContent=u,d=O(),f=S("img"),v=O(),p=S("p"),p.innerHTML=I,F=O(),T=S("p"),T.innerHTML=D,q=O(),B=S("p"),B.textContent=b,C=O(),w=S("img"),te=O(),R=S("p"),R.textContent=W,this.h()},l(g){e=N(g,"H3",{"data-svelte-h":!0}),Z(e)!=="svelte-1j8js8f"&&(e.textContent=t),s=L(g),i=N(g,"UL",{class:!0,"data-svelte-h":!0}),Z(i)!=="svelte-wtdfry"&&(i.innerHTML=r),o=L(g),a=N(g,"H3",{"data-svelte-h":!0}),Z(a)!=="svelte-qg4234"&&(a.textContent=l),c=L(g),h=N(g,"P",{"data-svelte-h":!0}),Z(h)!=="svelte-eqhtsw"&&(h.textContent=u),d=L(g),f=N(g,"IMG",{src:!0,alt:!0,style:!0}),v=L(g),p=N(g,"P",{"data-svelte-h":!0}),Z(p)!=="svelte-14urd7p"&&(p.innerHTML=I),F=L(g),T=N(g,"P",{"data-svelte-h":!0}),Z(T)!=="svelte-1xer9do"&&(T.innerHTML=D),q=L(g),B=N(g,"P",{"data-svelte-h":!0}),Z(B)!=="svelte-1tryhud"&&(B.textContent=b),C=L(g),w=N(g,"IMG",{src:!0,alt:!0,style:!0}),te=L(g),R=N(g,"P",{"data-svelte-h":!0}),Z(R)!=="svelte-1imbt6f"&&(R.textContent=W),this.h()},h(){P(i,"class","definition-list"),wi(f.src,_=Rl)||P(f,"src",_),P(f,"alt","Welcome"),Pt(f,"width","350px"),Pt(f,"height","auto"),wi(w.src,M=Nl)||P(w,"src",M),P(w,"alt","Welcome"),Pt(w,"width","150px"),Pt(w,"height","auto")},m(g,j){A(g,e,j),A(g,s,j),A(g,i,j),A(g,o,j),A(g,a,j),A(g,c,j),A(g,h,j),A(g,d,j),A(g,f,j),A(g,v,j),A(g,p,j),A(g,F,j),A(g,T,j),A(g,q,j),A(g,B,j),A(g,C,j),A(g,w,j),A(g,te,j),A(g,R,j)},p:ye,d(g){g&&(y(e),y(s),y(i),y(o),y(a),y(c),y(h),y(d),y(f),y(v),y(p),y(F),y(T),y(q),y(B),y(C),y(w),y(te),y(R))}}}function z_(n){let e,t='<span class="styled-header svelte-t5r176">How To Play</span>';return{c(){e=S("h2"),e.innerHTML=t,this.h()},l(s){e=N(s,"H2",{slot:!0,"data-svelte-h":!0}),Z(e)!=="svelte-agigkf"&&(e.innerHTML=t),this.h()},h(){P(e,"slot","header")},m(s,i){A(s,e,i)},p:ye,d(s){s&&y(e)}}}function K_(n){let e,t,s,i,r="Resume",o,a,l,c;return{c(){e=S("div"),t=S("div"),s=O(),i=S("button"),i.textContent=r,o=O(),a=S("div"),this.h()},l(h){e=N(h,"DIV",{class:!0});var u=z(e);t=N(u,"DIV",{class:!0}),z(t).forEach(y),s=L(u),i=N(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(i)!=="svelte-o41kx2"&&(i.textContent=r),o=L(u),a=N(u,"DIV",{class:!0}),z(a).forEach(y),u.forEach(y),this.h()},h(){P(t,"class","spacer svelte-t5r176"),P(i,"class","share-button svelte-t5r176"),P(a,"class","spacer svelte-t5r176"),P(e,"class","flex-container svelte-t5r176")},m(h,u){A(h,e,u),E(e,t),E(e,s),E(e,i),E(e,o),E(e,a),l||(c=le(i,"click",n[19]),l=!0)},p:ye,d(h){h&&y(e),l=!1,c()}}}function Y_(n){let e,t='<span class="styled-header svelte-t5r176">Paused</span>';return{c(){e=S("h2"),e.innerHTML=t,this.h()},l(s){e=N(s,"H2",{slot:!0,"data-svelte-h":!0}),Z(e)!=="svelte-he3kx2"&&(e.innerHTML=t),this.h()},h(){P(e,"slot","header")},m(s,i){A(s,e,i)},p:ye,d(s){s&&y(e)}}}function Q_(n){let e,t,s,i='<p class="title svelte-t5r176">LetterLoop</p> <small style="color: rgb(46, 46, 46);">(public beta) · Edited by Henry Macht</small>',r,o,a,l,c='<i class="fa-regular fa-circle-question"></i> <p class="how-to-play svelte-t5r176">How to play</p>',h,u,d,f,_,v,p,I,F,T,D='<i class="fa-solid fa-pause"></i>',q,B,b,C,w,M,te,R,W,g,j,fe,G;f=new Wr({});function _e(k){n[23](k)}let Fe={};n[7]!==void 0&&(Fe.elapsedSeconds=n[7]),p=new U_({props:Fe}),n[22](p),ft.push(()=>sn(p,"elapsedSeconds",_e));function tn(k,V){return k[3].length>0?V_:W_}let Be=tn(n),pe=Be(n);function Ka(k){n[25](k)}let di={$$slots:{header:[j_],default:[q_]},$$scope:{ctx:n}};n[0]!==void 0&&(di.showModal=n[0]),b=new jn({props:di}),ft.push(()=>sn(b,"showModal",Ka));function Ya(k){n[26](k)}let fi={$$slots:{header:[z_],default:[G_]},$$scope:{ctx:n}};n[1]!==void 0&&(fi.showModal=n[1]),M=new jn({props:fi}),ft.push(()=>sn(M,"showModal",Ya));function Qa(k){n[27](k)}let _i={hide_close:!0,$$slots:{header:[Y_],default:[K_]},$$scope:{ctx:n}};return n[2]!==void 0&&(_i.showModal=n[2]),W=new jn({props:_i}),ft.push(()=>sn(W,"showModal",Qa)),{c(){e=S("main"),t=S("div"),s=S("div"),s.innerHTML=i,r=O(),o=S("div"),a=O(),l=S("div"),l.innerHTML=c,h=O(),u=S("div"),d=O(),ct(f.$$.fragment),_=O(),v=S("div"),ct(p.$$.fragment),F=O(),T=S("div"),T.innerHTML=D,q=O(),pe.c(),B=O(),ct(b.$$.fragment),w=O(),ct(M.$$.fragment),R=O(),ct(W.$$.fragment),this.h()},l(k){e=N(k,"MAIN",{class:!0});var V=z(e);t=N(V,"DIV",{class:!0});var Re=z(t);s=N(Re,"DIV",{class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-12b2d73"&&(s.innerHTML=i),r=L(Re),o=N(Re,"DIV",{class:!0}),z(o).forEach(y),a=L(Re),l=N(Re,"DIV",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-zy39qn"&&(l.innerHTML=c),Re.forEach(y),h=L(V),u=N(V,"DIV",{class:!0}),z(u).forEach(y),d=L(V),ht(f.$$.fragment,V),_=L(V),v=N(V,"DIV",{class:!0});var at=z(v);ht(p.$$.fragment,at),at.forEach(y),F=L(V),T=N(V,"DIV",{"data-svelte-h":!0}),Z(T)!=="svelte-1mxj5gn"&&(T.innerHTML=D),q=L(V),pe.l(V),V.forEach(y),B=L(k),ht(b.$$.fragment,k),w=L(k),ht(M.$$.fragment,k),R=L(k),ht(W.$$.fragment,k),this.h()},h(){P(s,"class","title-container  svelte-t5r176"),P(o,"class","spacer svelte-t5r176"),P(l,"class","help-container svelte-t5r176"),P(t,"class","nav-flex-container svelte-t5r176"),P(u,"class","divider svelte-t5r176"),P(v,"class","timer-container svelte-t5r176"),P(e,"class","svelte-t5r176")},m(k,V){A(k,e,V),E(e,t),E(t,s),E(t,r),E(t,o),E(t,a),E(t,l),E(e,h),E(e,u),E(e,d),ut(f,e,null),E(e,_),E(e,v),ut(p,v,null),E(e,F),E(e,T),E(e,q),pe.m(e,null),A(k,B,V),ut(b,k,V),A(k,w,V),ut(M,k,V),A(k,R,V),ut(W,k,V),j=!0,fe||(G=[le(window,"keydown",hl(n[11])),le(l,"click",n[21]),le(T,"click",n[18])],fe=!0)},p(k,V){const Re={};!I&&V[0]&128&&(I=!0,Re.elapsedSeconds=k[7],nn(()=>I=!1)),p.$set(Re),Be===(Be=tn(k))&&pe?pe.p(k,V):(pe.d(1),pe=Be(k),pe&&(pe.c(),pe.m(e,null)));const at={};V[0]&136|V[1]&128&&(at.$$scope={dirty:V,ctx:k}),!C&&V[0]&1&&(C=!0,at.showModal=k[0],nn(()=>C=!1)),b.$set(at);const Vn={};V[1]&128&&(Vn.$$scope={dirty:V,ctx:k}),!te&&V[0]&2&&(te=!0,Vn.showModal=k[1],nn(()=>te=!1)),M.$set(Vn);const qn={};V[1]&128&&(qn.$$scope={dirty:V,ctx:k}),!g&&V[0]&4&&(g=!0,qn.showModal=k[2],nn(()=>g=!1)),W.$set(qn)},i(k){j||(Te(f.$$.fragment,k),Te(p.$$.fragment,k),Te(b.$$.fragment,k),Te(M.$$.fragment,k),Te(W.$$.fragment,k),j=!0)},o(k){Se(f.$$.fragment,k),Se(p.$$.fragment,k),Se(b.$$.fragment,k),Se(M.$$.fragment,k),Se(W.$$.fragment,k),j=!1},d(k){k&&(y(e),y(B),y(w),y(R)),dt(f),n[22](null),dt(p),pe.d(),dt(b,k),dt(M,k),dt(W,k),fe=!1,Rn(G)}}}function Lr(n){return n.split("").sort(()=>Math.random()-.5).join("")}function Fr(n){const e=n.substring(0,5),t=n.substring(4,8)+e[0];return`${e} + ${t}`}function X_(n,e,t){let s,i,r=!1,o=!1,a=!1,l=[];l=l.map(G=>G.toLowerCase());let c,h=Array(8).fill(""),u=[],d,f=0,_=[0,4],v,p=0;tl(async()=>{const G=L_(hh);za(G,"screen_view",{firebase_screen:"game_board_view",firebase_screen_class:"game_board_controller"});const _e=new Date,Fe={year:"numeric",month:"2-digit",day:"2-digit"},tn=_e.toLocaleDateString("en-US",Fe).replace(/\//g,"-");try{const Be=await Cf("solutions/"+tn),pe=Object.values(Be);t(3,l=pe),c=l[0],t(5,d=Lr(c)),v.start()}catch(Be){console.error("Error fetching data from Firebase:",Be)}});function I(G){const _e=G.key.toLowerCase(),Fe=d.indexOf(_e);G.keyCode===13?T():G.keyCode===8?B():Fe!==-1&&!s(Fe)&&F(_e,Fe)}function F(G,_e){f<h.length&&!s(_e)&&(t(4,h[f]=G,h),f+=1,t(20,u=[...u,_e]))}function T(){const G=h.join("");l.includes(G)?(t(0,r=!0),v.stop()):ln.default("Incorrect",1e3)}function D(){t(4,h=Array(8).fill("")),f=0,t(20,u=[])}function q(){t(5,d=Lr(c)),D()}function B(){f>0&&(t(4,h[f-1]="",h),f-=1,t(20,u=u.slice(0,-1)))}function b(){let G=`I completed the LetterLoop in: 
🔴`+p+"🔴";navigator.clipboard.writeText(G).then(()=>{console.log("Text successfully copied to clipboard:",G),ln.default("Copied Text!",1e3)}).catch(_e=>{console.error("Error copying text to clipboard:",_e),ln.default("Error",1e3)})}function C(){v.stop(),t(2,a=!0)}function w(){v.start(),t(2,a=!1)}const M=()=>t(1,o=!0);function te(G){ft[G?"unshift":"push"](()=>{v=G,t(6,v)})}function R(G){p=G,t(7,p)}const W=(G,_e)=>F(G,_e);function g(G){r=G,t(0,r)}function j(G){o=G,t(1,o)}function fe(G){a=G,t(2,a)}return n.$$.update=()=>{n.$$.dirty[0]&1048576&&t(9,s=G=>u.includes(G))},t(8,i=new Date().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})),[r,o,a,l,h,d,v,p,i,s,_,I,F,T,D,q,B,b,C,w,u,M,te,R,W,g,j,fe]}class np extends An{constructor(e){super(),Dn(this,e,X_,Q_,kn,{},null,[-1,-1])}}export{np as component,tp as universal};
