import{n as Ie,j as Ia,r as un,i as ba,z as zs,a as rs,c as Ta,h as Sa,A as Ks,e as Ys,u as Qs,g as Xs,f as Js,B as Na,d as Bn,C as Zs,o as Ra,D as ei}from"../chunks/scheduler.CwIiqDyD.js";import{y as Aa,z as ka,A as Da,B as Pa,n as be,l as Te,S as os,i as as,e as k,c as D,a as J,d as C,o as $,g as P,q as Ma,m as xa,t as Xe,s as W,b as Je,f as U,p as pt,h as M,j as dn,C as ti,u as Wt,v as Ut,w as Ht,D as ue,E as Oa,F as La,x as Vt,G as ni,H as X,I as Fa,J as Ba,K as mt}from"../chunks/index.CIKh10TN.js";import{d as $a,w as Wa}from"../chunks/index.C8RXO0__.js";function Ua(n,e,t,s){if(!e)return Ie;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return Ie;const{delay:r=0,duration:o=300,easing:a=Ia,start:l=Aa()+r,end:c=l+o,tick:u=Ie,css:h}=t(n,{from:e,to:i},s);let d=!0,f=!1,_;function v(){h&&(_=Da(n,0,1,o,r,a,h)),r||(f=!0)}function m(){h&&Pa(n,_),d=!1}return ka(b=>{if(!f&&b>=l&&(f=!0),f&&b>=c&&(u(1,0),m()),!d)return!1;if(f){const B=b-l,A=0+1*a(B/o);u(A,1-A)}return!0}),v(),u(0,1),m}function Ha(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,pr(n,i)}}function pr(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function Ke(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Va(n,e){n.d(1),e.delete(n.key)}function ja(n,e){Te(n,1,1,()=>{e.delete(n.key)})}function qa(n,e){n.f(),ja(n,e)}function mr(n,e,t,s,i,r,o,a,l,c,u,h){let d=n.length,f=r.length,_=d;const v={};for(;_--;)v[n[_].key]=_;const m=[],b=new Map,B=new Map,A=[];for(_=f;_--;){const N=h(i,r,_),I=t(N);let g=o.get(I);g?s&&A.push(()=>g.p(N,e)):(g=c(I,N),g.c()),b.set(I,m[_]=g),I in v&&B.set(I,Math.abs(_-v[I]))}const y=new Set,E=new Set;function x(N){be(N,1),N.m(a,u),o.set(N.key,N),u=N.first,f--}for(;d&&f;){const N=m[f-1],I=n[d-1],g=N.key,w=I.key;N===I?(u=N.first,d--,f--):b.has(w)?!o.has(g)||y.has(g)?x(N):E.has(w)?d--:B.get(g)>B.get(w)?(E.add(g),x(N)):(y.add(w),d--):(l(I,o),d--)}for(;d--;){const N=n[d];b.has(N.key)||l(N,o)}for(;f;)x(m[f-1]);return un(A),m}const Ga=!0,T_=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ga},Symbol.toStringTag,{value:"Module"}));function gr(n){const e=n-1;return e*e*e+1}function za(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:h=f=>Math.sqrt(f)*120,easing:d=gr}=s;return{delay:u,duration:ba(h)?h(Math.sqrt(l*l+c*c)):h,easing:d,css:(f,_)=>{const v=_*l,m=_*c,b=f+_*e.width/t.width,B=f+_*e.height/t.height;return`transform: ${r} translate(${v}px, ${m}px) scale(${b}, ${B});`}}}function si(n,{delay:e=0,duration:t=400,easing:s=gr,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o),[h,d]=zs(i),[f,_]=zs(r);return{delay:e,duration:t,easing:s,css:(v,m)=>`
			transform: ${c} translate(${(1-v)*h}${d}, ${(1-v)*f}${_});
			opacity: ${l-u*m}`}}function Ka(n){const e=Wa([]);function t(r,o="default",a){e.update(l=>[...l,{id:Ya(),type:o,message:r,timeout:a}])}const s=$a(e,(r,o)=>{if(o(r),r.length>0){const a=setTimeout(()=>{e.update(l=>(l.shift(),l))},r[0].timeout);return()=>{clearTimeout(a)}}}),{subscribe:i}=s;return{subscribe:i,send:t,default:(r,o)=>t(r,"default",o),danger:(r,o)=>t(r,"danger",o),warning:(r,o)=>t(r,"warning",o),info:(r,o)=>t(r,"info",o),success:(r,o)=>t(r,"success",o)}}function Ya(){return"_"+Math.random().toString(36).substr(2,9)}const jt=Ka();function ii(n,e,t){const s=n.slice();return s[1]=e[t],s}function ri(n){let e,t;return{c(){e=k("i"),this.h()},l(s){e=D(s,"I",{class:!0}),J(e).forEach(C),this.h()},h(){$(e,"class",t=Ks(n[1].icon)+" svelte-15ecllt")},m(s,i){P(s,e,i)},p(s,i){i&1&&t!==(t=Ks(s[1].icon)+" svelte-15ecllt")&&$(e,"class",t)},d(s){s&&C(e)}}}function oi(n,e){let t,s,i=e[1].message+"",r,o,a,l,c,u=Ie,h,d=e[1].icon&&ri(e);return{key:n,first:null,c(){t=k("div"),s=k("div"),r=Xe(i),o=W(),d&&d.c(),a=W(),this.h()},l(f){t=D(f,"DIV",{class:!0,style:!0});var _=J(t);s=D(_,"DIV",{class:!0});var v=J(s);r=Je(v,i),v.forEach(C),o=U(_),d&&d.l(_),a=U(_),_.forEach(C),this.h()},h(){$(s,"class","content svelte-15ecllt"),$(t,"class","toast svelte-15ecllt"),pt(t,"background","#EBEBEB"),this.first=t},m(f,_){P(f,t,_),M(t,s),M(s,r),M(t,o),d&&d.m(t,null),M(t,a),h=!0},p(f,_){e=f,(!h||_&1)&&i!==(i=e[1].message+"")&&dn(r,i),e[1].icon?d?d.p(e,_):(d=ri(e),d.c(),d.m(t,a)):d&&(d.d(1),d=null)},r(){c=t.getBoundingClientRect()},f(){Ha(t),u(),pr(t,c)},a(){u(),u=Ua(t,c,za,{})},i(f){h||(f&&Sa(()=>{h&&(l||(l=ti(t,si,{y:30},!0)),l.run(1))}),h=!0)},o(f){f&&(l||(l=ti(t,si,{y:30},!1)),l.run(0)),h=!1},d(f){f&&C(t),d&&d.d(),f&&l&&l.end()}}}function Qa(n){let e,t=[],s=new Map,i,r=Ke(n[0]);const o=a=>a[1].id;for(let a=0;a<r.length;a+=1){let l=ii(n,r,a),c=o(l);s.set(c,t[a]=oi(c,l))}return{c(){e=k("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=D(a,"DIV",{class:!0});var l=J(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(C),this.h()},h(){$(e,"class","notifications svelte-15ecllt")},m(a,l){P(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);i=!0},p(a,[l]){if(l&1){r=Ke(a[0]),Ma();for(let c=0;c<t.length;c+=1)t[c].r();t=mr(t,l,o,1,a,r,s,e,qa,oi,null,ii);for(let c=0;c<t.length;c+=1)t[c].a();xa()}},i(a){if(!i){for(let l=0;l<r.length;l+=1)be(t[l]);i=!0}},o(a){for(let l=0;l<t.length;l+=1)Te(t[l]);i=!1},d(a){a&&C(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function Xa(n,e,t){let s;return Ta(n,jt,i=>t(0,s=i)),[s]}class yr extends os{constructor(e){super(),as(this,e,Xa,Qa,rs,{})}}const Ja=n=>({}),ai=n=>({});function Za(n){let e,t,s,i,r,o,a,l,c,u,h,d,f,_,v;s=new yr({});const m=n[3].header,b=Ys(m,n,n[2],ai),B=n[3].default,A=Ys(B,n,n[2],null);return{c(){e=k("dialog"),t=k("div"),Wt(s.$$.fragment),i=W(),r=k("div"),b&&b.c(),o=W(),a=k("div"),l=W(),c=k("i"),u=W(),h=k("hr"),d=W(),A&&A.c(),this.h()},l(y){e=D(y,"DIALOG",{class:!0});var E=J(e);t=D(E,"DIV",{class:!0});var x=J(t);Ut(s.$$.fragment,x),i=U(x),r=D(x,"DIV",{class:!0});var N=J(r);b&&b.l(N),o=U(N),a=D(N,"DIV",{class:!0}),J(a).forEach(C),l=U(N),c=D(N,"I",{class:!0}),J(c).forEach(C),N.forEach(C),u=U(x),h=D(x,"HR",{}),d=U(x),A&&A.l(x),x.forEach(C),E.forEach(C),this.h()},h(){$(a,"class","spacer svelte-54d7ti"),$(c,"class","fa-solid fa-xmark svelte-54d7ti"),$(r,"class","flex-container svelte-54d7ti"),$(t,"class","svelte-54d7ti"),$(e,"class","svelte-54d7ti")},m(y,E){P(y,e,E),M(e,t),Ht(s,t,null),M(t,i),M(t,r),b&&b.m(r,null),M(r,o),M(r,a),M(r,l),M(r,c),M(t,u),M(t,h),M(t,d),A&&A.m(t,null),n[6](e),f=!0,_||(v=[ue(c,"click",n[5]),ue(t,"click",Oa(n[4])),ue(e,"close",n[7]),ue(e,"click",La(n[8]))],_=!0)},p(y,[E]){b&&b.p&&(!f||E&4)&&Qs(b,m,y,y[2],f?Js(m,y[2],E,Ja):Xs(y[2]),ai),A&&A.p&&(!f||E&4)&&Qs(A,B,y,y[2],f?Js(B,y[2],E,null):Xs(y[2]),null)},i(y){f||(be(s.$$.fragment,y),be(b,y),be(A,y),f=!0)},o(y){Te(s.$$.fragment,y),Te(b,y),Te(A,y),f=!1},d(y){y&&C(e),Vt(s),b&&b.d(y),A&&A.d(y),n[6](null),_=!1,un(v)}}}function el(n,e,t){let{$$slots:s={},$$scope:i}=e,{showModal:r}=e,o;function a(d){Na.call(this,n,d)}const l=()=>o.close();function c(d){Bn[d?"unshift":"push"](()=>{o=d,t(1,o)})}const u=()=>t(0,r=!1),h=()=>o.close();return n.$$set=d=>{"showModal"in d&&t(0,r=d.showModal),"$$scope"in d&&t(2,i=d.$$scope)},n.$$.update=()=>{n.$$.dirty&3&&o&&r&&o.showModal()},[r,o,i,s,a,l,c,u,h]}class li extends os{constructor(e){super(),as(this,e,el,Za,rs,{showModal:0})}}const tl=""+new URL("../assets/ex-solution.DMtatkDj.png",import.meta.url).href,nl=""+new URL("../assets/ex-letter-box.mgBNjwYG.png",import.meta.url).href;var ci={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(n,e){if(!n)throw at(e)},at=function(n){return new Error("Firebase Database ("+vr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},sl=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ls={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Cr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new il;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class il extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wr=function(n){const e=Cr(n);return ls.encodeByteArray(e,!0)},qt=function(n){return wr(n).replace(/\./g,"")},$n=function(n){try{return ls.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n){return Er(void 0,n)}function Er(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ol(t)||(n[t]=Er(n[t],e[t]));return n}function ol(n){return n!=="__proto__"}/**
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
 */function al(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ll=()=>al().__FIREBASE_DEFAULTS__,cl=()=>{if(typeof process>"u"||typeof ci>"u")return;const n=ci.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$n(n[1]);return e&&JSON.parse(e)},Ir=()=>{try{return ll()||cl()||hl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ul=n=>{var e,t;return(t=(e=Ir())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},dl=n=>{const e=ul(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},br=()=>{var n;return(n=Ir())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function fl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[qt(JSON.stringify(t)),qt(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_l())}function pl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ml(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sr(){return vr.NODE_ADMIN===!0}function Nr(){try{return typeof indexedDB=="object"}catch{return!1}}function Rr(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function gl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="FirebaseError";class je extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=yl,Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fn.prototype.create)}}class fn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?vl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new je(i,a,s)}}function vl(n,e){return n.replace(Cl,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Cl=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n){return JSON.parse(n)}function ne(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Et($n(r[0])||""),t=Et($n(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},wl=function(n){const e=Ar(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},El=function(n){const e=Ar(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function st(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function hi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function zt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(ui(r)&&ui(o)){if(!zt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ui(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function kr(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,p(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_n=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Sl=1e3,Nl=2,Rl=4*60*60*1e3,Al=.5;function di(n,e=Sl,t=Nl){const s=e*Math.pow(t,n),i=Math.round(Al*s*(Math.random()-.5)*2);return Math.min(Rl,s+i)}/**
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
 */function lt(n){return n&&n._delegate?n._delegate:n}class ve{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pe="[DEFAULT]";/**
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
 */class kl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new cs;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pl(e))try{this.getOrInitializeService({instanceIdentifier:Pe})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Pe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pe){return this.instances.has(e)}getOptions(e=Pe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Dl(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pe){return this.component?this.component.multipleInstances?e:Pe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dl(n){return n===Pe?void 0:n}function Pl(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ml{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const xl={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Ol=G.INFO,Ll={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Fl=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ll[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hs{constructor(e){this.name=e,this._logLevel=Ol,this._logHandler=Fl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Bl=(n,e)=>e.some(t=>n instanceof t);let fi,_i;function $l(){return fi||(fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wl(){return _i||(_i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dr=new WeakMap,Wn=new WeakMap,Pr=new WeakMap,bn=new WeakMap,us=new WeakMap;function Ul(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Se(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Dr.set(t,n)}).catch(()=>{}),us.set(e,n),e}function Hl(n){if(Wn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Wn.set(n,e)}let Un={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Se(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Vl(n){Un=n(Un)}function jl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Tn(this),e,...t);return Pr.set(s,e.sort?e.sort():[e]),Se(s)}:Wl().includes(n)?function(...e){return n.apply(Tn(this),e),Se(Dr.get(this))}:function(...e){return Se(n.apply(Tn(this),e))}}function ql(n){return typeof n=="function"?jl(n):(n instanceof IDBTransaction&&Hl(n),Bl(n,$l())?new Proxy(n,Un):n)}function Se(n){if(n instanceof IDBRequest)return Ul(n);if(bn.has(n))return bn.get(n);const e=ql(n);return e!==n&&(bn.set(n,e),us.set(e,n)),e}const Tn=n=>us.get(n);function Mr(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Se(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Se(o.result),l.oldVersion,l.newVersion,Se(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Gl=["get","getKey","getAll","getAllKeys","count"],zl=["put","add","delete","clear"],Sn=new Map;function pi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Sn.get(e))return Sn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=zl.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Gl.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Sn.set(e,r),r}Vl(n=>({...n,get:(e,t,s)=>pi(e,t)||n.get(e,t,s),has:(e,t)=>!!pi(e,t)||n.has(e,t)}));/**
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
 */class Kl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yl(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Yl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hn="@firebase/app",mi="0.9.27";/**
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
 */const Fe=new hs("@firebase/app"),Ql="@firebase/app-compat",Xl="@firebase/analytics-compat",Jl="@firebase/analytics",Zl="@firebase/app-check-compat",ec="@firebase/app-check",tc="@firebase/auth",nc="@firebase/auth-compat",sc="@firebase/database",ic="@firebase/database-compat",rc="@firebase/functions",oc="@firebase/functions-compat",ac="@firebase/installations",lc="@firebase/installations-compat",cc="@firebase/messaging",hc="@firebase/messaging-compat",uc="@firebase/performance",dc="@firebase/performance-compat",fc="@firebase/remote-config",_c="@firebase/remote-config-compat",pc="@firebase/storage",mc="@firebase/storage-compat",gc="@firebase/firestore",yc="@firebase/firestore-compat",vc="firebase",Cc="10.8.0";/**
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
 */const Vn="[DEFAULT]",wc={[Hn]:"fire-core",[Ql]:"fire-core-compat",[Jl]:"fire-analytics",[Xl]:"fire-analytics-compat",[ec]:"fire-app-check",[Zl]:"fire-app-check-compat",[tc]:"fire-auth",[nc]:"fire-auth-compat",[sc]:"fire-rtdb",[ic]:"fire-rtdb-compat",[rc]:"fire-fn",[oc]:"fire-fn-compat",[ac]:"fire-iid",[lc]:"fire-iid-compat",[cc]:"fire-fcm",[hc]:"fire-fcm-compat",[uc]:"fire-perf",[dc]:"fire-perf-compat",[fc]:"fire-rc",[_c]:"fire-rc-compat",[pc]:"fire-gcs",[mc]:"fire-gcs-compat",[gc]:"fire-fst",[yc]:"fire-fst-compat","fire-js":"fire-js",[vc]:"fire-js-all"};/**
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
 */const Kt=new Map,jn=new Map;function Ec(n,e){try{n.container.addComponent(e)}catch(t){Fe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ae(n){const e=n.name;if(jn.has(e))return Fe.debug(`There were multiple attempts to register component ${e}.`),!1;jn.set(e,n);for(const t of Kt.values())Ec(t,n);return!0}function Dt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Ic={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ne=new fn("app","Firebase",Ic);/**
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
 */class bc{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ne.create("app-deleted",{appName:this._name})}}/**
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
 */const Tc=Cc;function xr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vn,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ne.create("bad-app-name",{appName:String(i)});if(t||(t=br()),!t)throw Ne.create("no-options");const r=Kt.get(i);if(r){if(zt(t,r.options)&&zt(s,r.config))return r;throw Ne.create("duplicate-app",{appName:i})}const o=new Ml(i);for(const l of jn.values())o.addComponent(l);const a=new bc(t,s,o);return Kt.set(i,a),a}function Or(n=Vn){const e=Kt.get(n);if(!e&&n===Vn&&br())return xr();if(!e)throw Ne.create("no-app",{appName:n});return e}function me(n,e,t){var s;let i=(s=wc[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fe.warn(a.join(" "));return}Ae(new ve(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Sc="firebase-heartbeat-database",Nc=1,It="firebase-heartbeat-store";let Nn=null;function Lr(){return Nn||(Nn=Mr(Sc,Nc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(It)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ne.create("idb-open",{originalErrorMessage:n.message})})),Nn}async function Rc(n){try{const t=(await Lr()).transaction(It),s=await t.objectStore(It).get(Fr(n));return await t.done,s}catch(e){if(e instanceof je)Fe.warn(e.message);else{const t=Ne.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fe.warn(t.message)}}}async function gi(n,e){try{const s=(await Lr()).transaction(It,"readwrite");await s.objectStore(It).put(e,Fr(n)),await s.done}catch(t){if(t instanceof je)Fe.warn(t.message);else{const s=Ne.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fe.warn(s.message)}}}function Fr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ac=1024,kc=30*24*60*60*1e3;class Dc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Mc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yi();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yi(),{heartbeatsToSend:s,unsentEntries:i}=Pc(this._heartbeatsCache.heartbeats),r=qt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function yi(){return new Date().toISOString().substring(0,10)}function Pc(n,e=Ac){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),vi(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),vi(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Mc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nr()?Rr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Rc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return gi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return gi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vi(n){return qt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function xc(n){Ae(new ve("platform-logger",e=>new Kl(e),"PRIVATE")),Ae(new ve("heartbeat",e=>new Dc(e),"PRIVATE")),me(Hn,mi,n),me(Hn,mi,"esm2017"),me("fire-js","")}xc("");var Oc="firebase",Lc="10.8.0";/**
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
 */me(Oc,Lc,"app");const Fc={apiKey:"AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",authDomain:"circlepuzzlegame-1738d.firebaseapp.com",projectId:"circlepuzzlegame-1738d",storageBucket:"circlepuzzlegame-1738d.appspot.com",messagingSenderId:"62490740969",appId:"1:62490740969:web:719c6ea78f8148089f4878",measurementId:"G-EEEKPPSEN9"},Bc=xr(Fc);var Ci={};const wi="@firebase/database",Ei="1.0.3";/**
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
 */let Br="";function $c(n){Br=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ne(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Et(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return we(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Wc(e)}}catch{}return new Uc},xe=$r("localStorage"),qn=$r("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new hs("@firebase/database"),Hc=function(){let n=1;return function(){return n++}}(),Wr=function(n){const e=Tl(n),t=new bl;t.update(e);const s=t.digest();return ls.encodeByteArray(s)},Pt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Pt.apply(null,s):typeof s=="object"?e+=ne(s):e+=s,e+=" "}return e};let Le=null,Ii=!0;const Vc=function(n,e){p(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Ze.logLevel=G.VERBOSE,Le=Ze.log.bind(Ze),e&&qn.set("logging_enabled",!0)):typeof n=="function"?Le=n:(Le=null,qn.remove("logging_enabled"))},se=function(...n){if(Ii===!0&&(Ii=!1,Le===null&&qn.get("logging_enabled")===!0&&Vc(!0)),Le){const e=Pt.apply(null,n);Le(e)}},Mt=function(n){return function(...e){se(n,...e)}},Gn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Pt(...n);Ze.error(e)},Ce=function(...n){const e=`FIREBASE FATAL ERROR: ${Pt(...n)}`;throw Ze.error(e),new Error(e)},ce=function(...n){const e="FIREBASE WARNING: "+Pt(...n);Ze.warn(e)},jc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ur=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},qc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},it="[MIN_NAME]",Be="[MAX_NAME]",ct=function(n,e){if(n===e)return 0;if(n===it||e===Be)return-1;if(e===it||n===Be)return 1;{const t=bi(n),s=bi(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Gc=function(n,e){return n===e?0:n<e?-1:1},ut=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ne(e))},ds=function(n){if(typeof n!="object"||n===null)return ne(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ne(e[s]),t+=":",t+=ds(n[e[s]]);return t+="}",t},Hr=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function le(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Vr=function(n){p(!Ur(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},zc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Kc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Yc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Qc=new RegExp("^-?(0*)\\d{1,10}$"),Xc=-2147483648,Jc=2147483647,bi=function(n){if(Qc.test(n)){const e=Number(n);if(e>=Xc&&e<=Jc)return e}return null},xt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},Zc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class eh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class et{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}et.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="5",jr="v",qr="s",Gr="r",zr="f",Kr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yr="ls",Qr="p",zn="ac",Xr="websocket",Jr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function nh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function eo(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let s;if(e===Xr)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Jr)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nh(n)&&(t.ns=n.namespace);const i=[];return le(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.counters_={}}incrementCounter(e,t=1){we(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return rl(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={},An={};function _s(n){const e=n.toString();return Rn[e]||(Rn[e]=new sh),Rn[e]}function ih(n,e){const t=n.toString();return An[t]||(An[t]=e()),An[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&xt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="start",oh="close",ah="pLPCommand",lh="pRTLPCB",to="id",no="pw",so="ser",ch="cb",hh="seg",uh="ts",dh="d",fh="dframe",io=1870,ro=30,_h=io-ro,ph=25e3,mh=3e4;class Ye{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mt(e),this.stats_=_s(t),this.urlFn=l=>(this.appCheckToken&&(l[zn]=this.appCheckToken),eo(t,Jr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new rh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mh)),qc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ps((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ti)this.id=a,this.password=l;else if(o===oh)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ti]="t",s[so]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ch]=this.scriptTagHolder.uniqueCallbackIdentifier),s[jr]=fs,this.transportSessionId&&(s[qr]=this.transportSessionId),this.lastSessionId&&(s[Yr]=this.lastSessionId),this.applicationId&&(s[Qr]=this.applicationId),this.appCheckToken&&(s[zn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kr.test(location.hostname)&&(s[Gr]=zr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ye.forceAllow_=!0}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){return Ye.forceAllow_?!0:!Ye.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zc()&&!Kc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ne(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=wr(t),i=Hr(s,_h);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[fh]="t",s[to]=e,s[no]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ne(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ps{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Hc(),window[ah+this.uniqueCallbackIdentifier]=e,window[lh+this.uniqueCallbackIdentifier]=t,this.myIFrame=ps.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){se("frame writing exception"),a.stack&&se(a.stack),se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||se("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[to]=this.myID,e[no]=this.myPW,e[so]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ro+s.length<=io;){const o=this.pendingSegs.shift();s=s+"&"+hh+i+"="+o.seg+"&"+uh+i+"="+o.ts+"&"+dh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(ph)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=16384,yh=45e3;let Yt=null;typeof MozWebSocket<"u"?Yt=MozWebSocket:typeof WebSocket<"u"&&(Yt=WebSocket);class de{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mt(this.connId),this.stats_=_s(t),this.connURL=de.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[jr]=fs,typeof location<"u"&&location.hostname&&Kr.test(location.hostname)&&(o[Gr]=zr),t&&(o[qr]=t),s&&(o[Yr]=s),i&&(o[zn]=i),r&&(o[Qr]=r),eo(e,Xr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xe.set("previous_websocket_failure",!0);try{let s;Sr(),this.mySock=new Yt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){de.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Yt!==null&&!de.forceDisallow_}static previouslyFailed(){return xe.isInMemoryStorage||xe.get("previous_websocket_failure")===!0}markConnectionHealthy(){xe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Et(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ne(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Hr(t,gh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}de.responsesRequiredToBeHealthy=2;de.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ye,de]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=de&&de.isAvailable();let s=t&&!de.previouslyFailed();if(e.webSocketOnly&&(t||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[de];else{const i=this.transports_=[];for(const r of bt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);bt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=6e4,Ch=5e3,wh=10*1024,Eh=100*1024,kn="t",Si="d",Ih="s",Ni="r",bh="e",Ri="o",Ai="a",ki="n",Di="p",Th="h";class Sh{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mt("c:"+this.id+":"),this.transportManager_=new bt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=gt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Eh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(kn in e){const t=e[kn];t===Ai?this.upgradeIfSecondaryHealthy_():t===Ni?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ri&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ut("t",e),s=ut("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Di,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ai,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ki,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ut("t",e),s=ut("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ut(kn,e);if(Si in e){const s=e[Si];if(t===Th){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ki){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ih?this.onConnectionShutdown_(s):t===Ni?this.onReset_(s):t===bh?Gn("Server Error: "+s):t===Ri?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),fs!==s&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),gt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ch))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Di,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends ao{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qt}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=32,Mi=768;class q{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function H(){return new q("")}function L(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ke(n){return n.pieces_.length-n.pieceNum_}function z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new q(n.pieces_,e)}function lo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Nh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function co(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ho(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new q(e,0)}function Z(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof q)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new q(t,0)}function F(n){return n.pieceNum_>=n.pieces_.length}function re(n,e){const t=L(n),s=L(e);if(t===null)return e;if(t===s)return re(z(n),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ms(n,e){if(ke(n)!==ke(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function fe(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ke(n)>ke(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Rh{constructor(e,t){this.errorPrefix_=t,this.parts_=co(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_n(this.parts_[s]);uo(this)}}function Ah(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=_n(e),uo(n)}function kh(n){const e=n.parts_.pop();n.byteLength_-=_n(e),n.parts_.length>0&&(n.byteLength_-=1)}function uo(n){if(n.byteLength_>Mi)throw new Error(n.errorPrefix_+"has a key path longer than "+Mi+" bytes ("+n.byteLength_+").");if(n.parts_.length>Pi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Pi+") or object contains a cycle "+Me(n))}function Me(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends ao{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new gs}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=1e3,Dh=60*5*1e3,xi=30*1e3,Ph=1.3,Mh=3e4,xh="server_kill",Oi=3;class ye extends oo{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ye.nextPersistentConnectionId_++,this.log_=Mt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=dt,this.maxReconnectDelay_=Dh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Sr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ne(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new cs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ye.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&we(e,"w")){const s=st(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||El(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=wl(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ne(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Gn("Unrecognized action received from server: "+ne(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=dt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=dt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Mh&&(this.reconnectDelay_=dt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ph)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ye.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?se("getToken() completed but was canceled"):(se("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Sh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{ce(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(xh)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ce(h),l())}}}interrupt(e){se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hi(this.interruptReasons_)&&(this.reconnectDelay_=dt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>ds(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new q(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){se("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Oi&&(this.reconnectDelay_=xi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){se("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Oi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Br.replace(/\./g,"-")]=1,Tr()?e["framework.cordova"]=1:ml()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qt.getInstance().currentlyOnline();return hi(this.interruptReasons_)&&e}}ye.nextPersistentConnectionId_=0;ye.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new O(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new O(it,e),i=new O(it,t);return this.compare(s,i)!==0}minPost(){return O.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt;class fo extends pn{static get __EMPTY_NODE(){return Bt}static set __EMPTY_NODE(e){Bt=e}compare(e,t){return ct(e.name,t.name)}isDefinedOn(e){throw at("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return O.MIN}maxPost(){return new O(Be,Bt)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new O(e,Bt)}toString(){return".key"}}const tt=new fo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class te{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??te.RED,this.left=i??oe.EMPTY_NODE,this.right=r??oe.EMPTY_NODE}copy(e,t,s,i,r){return new te(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}te.RED=!0;te.BLACK=!1;class Oh{copy(e,t,s,i,r){return this}insert(e,t,s){return new te(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class oe{constructor(e,t=oe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new oe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,te.BLACK,null,null))}remove(e){return new oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,te.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $t(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $t(this.root_,null,this.comparator_,!0,e)}}oe.EMPTY_NODE=new Oh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n,e){return ct(n.name,e.name)}function ys(n,e){return ct(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn;function Fh(n){Kn=n}const _o=function(n){return typeof n=="number"?"number:"+Vr(n):"string:"+n},po=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&we(e,".sv"),"Priority must be a string or number.")}else p(n===Kn||n.isEmpty(),"priority of unexpected type.");p(n===Kn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li;class ee{constructor(e,t=ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),po(this.priorityNode_)}static set __childrenNodeConstructor(e){Li=e}static get __childrenNodeConstructor(){return Li}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:L(e)===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=L(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(p(s!==".priority"||ke(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_o(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Vr(this.value_):e+=this.value_,this.lazyHash_=Wr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ee.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ee.VALUE_TYPE_ORDER.indexOf(t),r=ee.VALUE_TYPE_ORDER.indexOf(s);return p(i>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo,go;function Bh(n){mo=n}function $h(n){go=n}class Wh extends pn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ct(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return O.MIN}maxPost(){return new O(Be,new ee("[PRIORITY-POST]",go))}makePost(e,t){const s=mo(e);return new O(t,new ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const Q=new Wh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=Math.log(2);class Hh{constructor(e){const t=r=>parseInt(Math.log(r)/Uh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xt=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new te(d,h.node,te.BLACK,null,null);{const f=parseInt(u/2,10)+l,_=i(l,f),v=i(f+1,c);return h=n[f],d=t?t(h):h,new te(d,h.node,te.BLACK,_,v)}},r=function(l){let c=null,u=null,h=n.length;const d=function(_,v){const m=h-_,b=h;h-=_;const B=i(m+1,b),A=n[m],y=t?t(A):A;f(new te(y,A.node,v,null,B))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),m=Math.pow(2,l.count-(_+1));v?d(m,te.BLACK):(d(m,te.BLACK),d(m,te.RED))}return u},o=new Hh(n.length),a=r(o);return new oe(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn;const ze={};class ge{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return p(ze&&Q,"ChildrenNode.ts has not been loaded"),Dn=Dn||new ge({".priority":ze},{".priority":Q}),Dn}get(e){const t=st(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof oe?t:null}hasIndex(e){return we(this.indexSet_,e.toString())}addIndex(e,t){p(e!==tt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(O.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Xt(s,e.getCompare()):a=ze;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ge(u,c)}addToIndexes(e,t){const s=Gt(this.indexes_,(i,r)=>{const o=st(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),i===ze)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(O.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Xt(a,o.getCompare())}else return ze;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new O(e.name,a))),l.insert(e,e.node)}});return new ge(s,this.indexSet_)}removeFromIndexes(e,t){const s=Gt(this.indexes_,i=>{if(i===ze)return i;{const r=t.get(e.name);return r?i.remove(new O(e.name,r)):i}});return new ge(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ft;class S{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&po(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ft||(ft=new S(new oe(ys),null,ge.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ft}updatePriority(e){return this.children_.isEmpty()?this:new S(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ft:t}}getChild(e){const t=L(e);return t===null?this:this.getImmediateChild(t).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new O(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ft:this.priorityNode_;return new S(i,o,r)}}updateChild(e,t){const s=L(e);if(s===null)return t;{p(L(e)!==".priority"||ke(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(z(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Q,(o,a)=>{t[o]=a.val(e),s++,r&&S.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_o(this.getPriority().val())+":"),this.forEachChild(Q,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Wr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new O(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new O(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new O(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,O.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,O.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ot?-1:0}withIndex(e){if(e===tt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new S(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===tt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Q),i=t.getIterator(Q);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===tt?null:this.indexMap_.get(e.toString())}}S.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Vh extends S{constructor(){super(new oe(ys),S.EMPTY_NODE,ge.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return S.EMPTY_NODE}isEmpty(){return!1}}const Ot=new Vh;Object.defineProperties(O,{MIN:{value:new O(it,S.EMPTY_NODE)},MAX:{value:new O(Be,Ot)}});fo.__EMPTY_NODE=S.EMPTY_NODE;ee.__childrenNodeConstructor=S;Fh(Ot);$h(Ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=!0;function ie(n,e=null){if(n===null)return S.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ee(t,ie(e))}if(!(n instanceof Array)&&jh){const t=[];let s=!1;if(le(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ie(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new O(o,l)))}}),t.length===0)return S.EMPTY_NODE;const r=Xt(t,Lh,o=>o.name,ys);if(s){const o=Xt(t,Q.getCompare());return new S(r,ie(e),new ge({".priority":o},{".priority":Q}))}else return new S(r,ie(e),ge.Default)}else{let t=S.EMPTY_NODE;return le(n,(s,i)=>{if(we(n,s)&&s.substring(0,1)!=="."){const r=ie(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(ie(e))}}Bh(ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh extends pn{constructor(e){super(),this.indexPath_=e,p(!F(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ct(e.name,t.name):r}makePost(e,t){const s=ie(e),i=S.EMPTY_NODE.updateChild(this.indexPath_,s);return new O(t,i)}maxPost(){const e=S.EMPTY_NODE.updateChild(this.indexPath_,Ot);return new O(Be,e)}toString(){return co(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh extends pn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ct(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return O.MIN}maxPost(){return O.MAX}makePost(e,t){const s=ie(e);return new O(t,s)}toString(){return".value"}}const zh=new Gh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n){return{type:"value",snapshotNode:n}}function rt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Tt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function St(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Kh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Tt(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(rt(t,s)):o.trackChildChange(St(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Q,(i,r)=>{t.hasChild(i)||s.trackChildChange(Tt(i,r))}),t.isLeafNode()||t.forEachChild(Q,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(St(i,r,o))}else s.trackChildChange(rt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?S.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.indexedFilter_=new vs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nt.getStartPost_(e),this.endPost_=Nt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new O(t,s))||(s=S.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=S.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(S.EMPTY_NODE);const r=this;return t.forEachChild(Q,(o,a)=>{r.matches(new O(o,a))||(i=i.updateImmediateChild(o,S.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Nt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new O(t,s))||(s=S.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=S.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=S.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(S.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,S.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const l=new O(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(St(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Tt(t,h));const v=a.updateImmediateChild(t,S.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(rt(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Tt(c.name,c.node)),r.trackChildChange(rt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,S.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:it}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Be}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Q}copy(){const e=new Cs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qh(n){return n.loadsAllData()?new vs(n.getIndex()):n.hasLimit()?new Yh(n):new Nt(n)}function Fi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Q?t="$priority":n.index_===zh?t="$value":n.index_===tt?t="$key":(p(n.index_ instanceof qh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ne(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ne(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ne(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ne(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ne(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Bi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends oo{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Mt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Jt.getListenId_(e,s),a={};this.listens_[o]=a;const l=Fi(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),st(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Jt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Fi(e._queryParams),s=e._path.toString(),i=new cs;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Il(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Et(a.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.rootNode_=S.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return{value:null,children:new Map}}function vo(n,e,t){if(F(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=L(e);n.children.has(s)||n.children.set(s,Zt());const i=n.children.get(s);e=z(e),vo(i,e,t)}}function Yn(n,e,t){n.value!==null?t(e,n.value):Jh(n,(s,i)=>{const r=new q(e.toString()+"/"+s);Yn(i,r,t)})}function Jh(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&le(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=10*1e3,eu=30*1e3,tu=5*60*1e3;class nu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Zh(e);const s=$i+(eu-$i)*Math.random();gt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;le(e,(i,r)=>{r>0&&we(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),gt(this.reportStats_.bind(this),Math.floor(Math.random()*2*tu))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_e||(_e={}));function Co(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ws(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Es(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=_e.ACK_USER_WRITE,this.source=Co()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new q(e));return new en(H(),t,this.revert)}}else return p(L(this.path)===e,"operationForChild called for unrelated child."),new en(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t){this.source=e,this.path=t,this.type=_e.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new Rt(this.source,H()):new Rt(this.source,z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=_e.OVERWRITE}operationForChild(e){return F(this.path)?new $e(this.source,H(),this.snap.getImmediateChild(e)):new $e(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=_e.MERGE}operationForChild(e){if(F(this.path)){const t=this.children.subtree(new q(e));return t.isEmpty()?null:t.value?new $e(this.source,H(),t.value):new At(this.source,H(),t)}else return p(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new At(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const t=L(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iu(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Kh(o.childName,o.snapshotNode))}),_t(n,i,"child_removed",e,s,t),_t(n,i,"child_added",e,s,t),_t(n,i,"child_moved",r,s,t),_t(n,i,"child_changed",e,s,t),_t(n,i,"value",e,s,t),i}function _t(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>ou(n,a,l)),o.forEach(a=>{const l=ru(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function ru(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ou(n,e,t){if(e.childName==null||t.childName==null)throw at("Should only compare child_ events.");const s=new O(e.childName,e.snapshotNode),i=new O(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n,e){return{eventCache:n,serverCache:e}}function yt(n,e,t,s){return mn(new We(e,t,s),n.serverCache)}function wo(n,e,t,s){return mn(n.eventCache,new We(e,t,s))}function Qn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ue(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn;const au=()=>(Pn||(Pn=new oe(Gc)),Pn);class K{constructor(e,t=au()){this.value=e,this.children=t}static fromObject(e){let t=new K(null);return le(e,(s,i)=>{t=t.set(new q(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:H(),value:this.value};if(F(e))return null;{const s=L(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(z(e),t);return r!=null?{path:Z(new q(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const t=L(e),s=this.children.get(t);return s!==null?s.subtree(z(e)):new K(null)}}set(e,t){if(F(e))return new K(t,this.children);{const s=L(e),r=(this.children.get(s)||new K(null)).set(z(e),t),o=this.children.insert(s,r);return new K(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const t=L(e),s=this.children.get(t);if(s){const i=s.remove(z(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new K(null):new K(this.value,r)}else return this}}get(e){if(F(e))return this.value;{const t=L(e),s=this.children.get(t);return s?s.get(z(e)):null}}setTree(e,t){if(F(e))return t;{const s=L(e),r=(this.children.get(s)||new K(null)).setTree(z(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new K(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Z(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,H(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(F(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(z(e),Z(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,H(),t)}foreachOnPath_(e,t,s){if(F(e))return this;{this.value&&s(t,this.value);const i=L(e),r=this.children.get(i);return r?r.foreachOnPath_(z(e),Z(t,i),s):new K(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(Z(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.writeTree_=e}static empty(){return new pe(new K(null))}}function vt(n,e,t){if(F(e))return new pe(new K(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=re(i,e);return r=r.updateChild(o,t),new pe(n.writeTree_.set(i,r))}else{const i=new K(t),r=n.writeTree_.setTree(e,i);return new pe(r)}}}function Wi(n,e,t){let s=n;return le(t,(i,r)=>{s=vt(s,Z(e,i),r)}),s}function Ui(n,e){if(F(e))return pe.empty();{const t=n.writeTree_.setTree(e,new K(null));return new pe(t)}}function Xn(n,e){return qe(n,e)!=null}function qe(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(re(t.path,e)):null}function Hi(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Q,(s,i)=>{e.push(new O(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new O(s,i.value))}),e}function Re(n,e){if(F(e))return n;{const t=qe(n,e);return t!=null?new pe(new K(t)):new pe(n.writeTree_.subtree(e))}}function Jn(n){return n.writeTree_.isEmpty()}function ot(n,e){return Eo(H(),n.writeTree_,e)}function Eo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Eo(Z(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Z(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n,e){return So(e,n)}function lu(n,e,t,s,i){p(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=vt(n.visibleWrites,e,t)),n.lastWriteId=s}function cu(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function hu(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&uu(a,s.path)?i=!1:fe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return du(n),!0;if(s.snap)n.visibleWrites=Ui(n.visibleWrites,s.path);else{const a=s.children;le(a,l=>{n.visibleWrites=Ui(n.visibleWrites,Z(s.path,l))})}return!0}else return!1}function uu(n,e){if(n.snap)return fe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&fe(Z(n.path,t),e))return!0;return!1}function du(n){n.visibleWrites=Io(n.allWrites,fu,H()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function fu(n){return n.visible}function Io(n,e,t){let s=pe.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)fe(t,o)?(a=re(t,o),s=vt(s,a,r.snap)):fe(o,t)&&(a=re(o,t),s=vt(s,H(),r.snap.getChild(a)));else if(r.children){if(fe(t,o))a=re(t,o),s=Wi(s,a,r.children);else if(fe(o,t))if(a=re(o,t),F(a))s=Wi(s,H(),r.children);else{const l=st(r.children,L(a));if(l){const c=l.getChild(z(a));s=vt(s,H(),c)}}}else throw at("WriteRecord should have .snap or .children")}}return s}function bo(n,e,t,s,i){if(!s&&!i){const r=qe(n.visibleWrites,e);if(r!=null)return r;{const o=Re(n.visibleWrites,e);if(Jn(o))return t;if(t==null&&!Xn(o,H()))return null;{const a=t||S.EMPTY_NODE;return ot(o,a)}}}else{const r=Re(n.visibleWrites,e);if(!i&&Jn(r))return t;if(!i&&t==null&&!Xn(r,H()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(fe(c.path,e)||fe(e,c.path))},a=Io(n.allWrites,o,e),l=t||S.EMPTY_NODE;return ot(a,l)}}}function _u(n,e,t){let s=S.EMPTY_NODE;const i=qe(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Q,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Re(n.visibleWrites,e);return t.forEachChild(Q,(o,a)=>{const l=ot(Re(r,new q(o)),a);s=s.updateImmediateChild(o,l)}),Hi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Re(n.visibleWrites,e);return Hi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function pu(n,e,t,s,i){p(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Z(e,t);if(Xn(n.visibleWrites,r))return null;{const o=Re(n.visibleWrites,r);return Jn(o)?i.getChild(t):ot(o,i.getChild(t))}}function mu(n,e,t,s){const i=Z(e,t),r=qe(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Re(n.visibleWrites,i);return ot(o,s.getNode().getImmediateChild(t))}else return null}function gu(n,e){return qe(n.visibleWrites,e)}function yu(n,e,t,s,i,r,o){let a;const l=Re(n.visibleWrites,e),c=qe(l,H());if(c!=null)a=c;else if(t!=null)a=ot(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function vu(){return{visibleWrites:pe.empty(),allWrites:[],lastWriteId:-1}}function tn(n,e,t,s){return bo(n.writeTree,n.treePath,e,t,s)}function bs(n,e){return _u(n.writeTree,n.treePath,e)}function Vi(n,e,t,s){return pu(n.writeTree,n.treePath,e,t,s)}function nn(n,e){return gu(n.writeTree,Z(n.treePath,e))}function Cu(n,e,t,s,i,r){return yu(n.writeTree,n.treePath,e,t,s,i,r)}function Ts(n,e,t){return mu(n.writeTree,n.treePath,e,t)}function To(n,e){return So(Z(n.treePath,e),n.writeTree)}function So(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,St(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Tt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,rt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,St(s,e.snapshotNode,i.oldSnap));else throw at("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const No=new Eu;class Ss{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new We(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ts(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ue(this.viewCache_),r=Cu(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n){return{filter:n}}function bu(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Tu(n,e,t,s,i){const r=new wu;let o,a;if(t.type===_e.OVERWRITE){const c=t;c.source.fromUser?o=Zn(n,e,c.path,c.snap,s,i,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=sn(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===_e.MERGE){const c=t;c.source.fromUser?o=Nu(n,e,c.path,c.children,s,i,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=es(n,e,c.path,c.children,s,i,a,r))}else if(t.type===_e.ACK_USER_WRITE){const c=t;c.revert?o=ku(n,e,c.path,s,i,r):o=Ru(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===_e.LISTEN_COMPLETE)o=Au(n,e,t.path,s,r);else throw at("Unknown operation type: "+t.type);const l=r.getChanges();return Su(e,o,l),{viewCache:o,changes:l}}function Su(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Qn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(yo(Qn(e)))}}function Ro(n,e,t,s,i,r){const o=e.eventCache;if(nn(s,t)!=null)return e;{let a,l;if(F(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ue(e),u=c instanceof S?c:S.EMPTY_NODE,h=bs(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=tn(s,Ue(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=L(t);if(c===".priority"){p(ke(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Vi(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=z(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Vi(s,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ts(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return yt(e,a,o.isFullyInitialized()||F(t),n.filter.filtersNodes())}}function sn(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(F(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=L(t);if(!l.isCompleteForPath(t)&&ke(t)>1)return e;const _=z(t),m=l.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,_,No,null)}const h=wo(e,c,l.isFullyInitialized()||F(t),u.filtersNodes()),d=new Ss(i,h,r);return Ro(n,h,t,i,d,a)}function Zn(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ss(i,e,r);if(F(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=yt(e,c,!0,n.filter.filtersNodes());else{const h=L(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=yt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=z(t),f=a.getNode().getImmediateChild(h);let _;if(F(d))_=s;else{const v=u.getCompleteChild(h);v!=null?lo(d)===".priority"&&v.getChild(ho(d)).isEmpty()?_=v:_=v.updateChild(d,s):_=S.EMPTY_NODE}if(f.equals(_))l=e;else{const v=n.filter.updateChild(a.getNode(),h,_,d,u,o);l=yt(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ji(n,e){return n.eventCache.isCompleteForChild(e)}function Nu(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Z(t,l);ji(e,L(u))&&(a=Zn(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Z(t,l);ji(e,L(u))||(a=Zn(n,a,u,c,i,r,o))}),a}function qi(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function es(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;F(t)?c=s:c=new K(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),_=qi(n,f,d);l=sn(n,l,new q(h),_,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const _=e.serverCache.getNode().getImmediateChild(h),v=qi(n,_,d);l=sn(n,l,new q(h),v,i,r,o,a)}}),l}function Ru(n,e,t,s,i,r,o){if(nn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(F(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return sn(n,e,t,l.getNode().getChild(t),i,r,a,o);if(F(t)){let c=new K(null);return l.getNode().forEachChild(tt,(u,h)=>{c=c.set(new q(u),h)}),es(n,e,t,c,i,r,a,o)}else return e}else{let c=new K(null);return s.foreach((u,h)=>{const d=Z(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),es(n,e,t,c,i,r,a,o)}}function Au(n,e,t,s,i){const r=e.serverCache,o=wo(e,r.getNode(),r.isFullyInitialized()||F(t),r.isFiltered());return Ro(n,o,t,s,No,i)}function ku(n,e,t,s,i,r){let o;if(nn(s,t)!=null)return e;{const a=new Ss(s,e,i),l=e.eventCache.getNode();let c;if(F(t)||L(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=tn(s,Ue(e));else{const h=e.serverCache.getNode();p(h instanceof S,"serverChildren would be complete if leaf node"),u=bs(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=L(t);let h=Ts(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,z(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,S.EMPTY_NODE,z(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=tn(s,Ue(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||nn(s,H())!=null,yt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new vs(s.getIndex()),r=Qh(s);this.processor_=Iu(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(S.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(S.EMPTY_NODE,a.getNode(),null),u=new We(l,o.isFullyInitialized(),i.filtersNodes()),h=new We(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=mn(h,u),this.eventGenerator_=new su(this.query_)}get query(){return this.query_}}function Pu(n){return n.viewCache_.serverCache.getNode()}function Mu(n,e){const t=Ue(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!F(e)&&!t.getImmediateChild(L(e)).isEmpty())?t.getChild(e):null}function Gi(n){return n.eventRegistrations_.length===0}function xu(n,e){n.eventRegistrations_.push(e)}function zi(n,e,t){const s=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Ki(n,e,t,s){e.type===_e.MERGE&&e.source.queryId!==null&&(p(Ue(n.viewCache_),"We should always have a full cache before handling merges"),p(Qn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Tu(n.processor_,i,e,t,s);return bu(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ao(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Ou(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Q,(r,o)=>{s.push(rt(r,o))}),t.isFullyInitialized()&&s.push(yo(t.getNode())),Ao(n,s,t.getNode(),e)}function Ao(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return iu(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn;class Lu{constructor(){this.views=new Map}}function Fu(n){p(!rn,"__referenceConstructor has already been defined"),rn=n}function Bu(){return p(rn,"Reference.ts has not been loaded"),rn}function $u(n){return n.views.size===0}function Ns(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return p(r!=null,"SyncTree gave us an op for an invalid query."),Ki(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ki(o,e,t,s));return r}}function Wu(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=tn(t,i?s:null),l=!1;a?l=!0:s instanceof S?(a=bs(t,s),l=!1):(a=S.EMPTY_NODE,l=!1);const c=mn(new We(a,l,!1),new We(s,i,!1));return new Du(e,c)}return o}function Uu(n,e,t,s,i,r){const o=Wu(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),xu(o,t),Ou(o,t)}function Hu(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=De(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(zi(c,t,s)),Gi(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(zi(l,t,s)),Gi(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!De(n)&&r.push(new(Bu())(e._repo,e._path)),{removed:r,events:o}}function ko(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function nt(n,e){let t=null;for(const s of n.views.values())t=t||Mu(s,e);return t}function Do(n,e){if(e._queryParams.loadsAllData())return gn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Po(n,e){return Do(n,e)!=null}function De(n){return gn(n)!=null}function gn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on;function Vu(n){p(!on,"__referenceConstructor has already been defined"),on=n}function ju(){return p(on,"Reference.ts has not been loaded"),on}let qu=1;class Yi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=vu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gu(n,e,t,s,i){return lu(n.pendingWriteTree_,e,t,s,i),i?Lt(n,new $e(Co(),e,t)):[]}function Qe(n,e,t=!1){const s=cu(n.pendingWriteTree_,e);if(hu(n.pendingWriteTree_,e)){let r=new K(null);return s.snap!=null?r=r.set(H(),!0):le(s.children,o=>{r=r.set(new q(o),!0)}),Lt(n,new en(s.path,r,t))}else return[]}function yn(n,e,t){return Lt(n,new $e(ws(),e,t))}function zu(n,e,t){const s=K.fromObject(t);return Lt(n,new At(ws(),e,s))}function Ku(n,e){return Lt(n,new Rt(ws(),e))}function Yu(n,e,t){const s=Rs(n,t);if(s){const i=As(s),r=i.path,o=i.queryId,a=re(r,e),l=new Rt(Es(o),a);return ks(n,r,l)}else return[]}function ts(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Po(o,e))){const l=Hu(o,e,t,s);$u(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>De(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Ju(d);for(let _=0;_<f.length;++_){const v=f[_],m=v.query,b=Lo(n,v);n.listenProvider_.startListening(Ct(m),an(n,m),b.hashFn,b.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Ct(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(vn(d));n.listenProvider_.stopListening(Ct(d),f)}))}Zu(n,c)}return a}function Qu(n,e,t,s){const i=Rs(n,s);if(i!=null){const r=As(i),o=r.path,a=r.queryId,l=re(o,e),c=new $e(Es(a),l,t);return ks(n,o,c)}else return[]}function Xu(n,e,t,s){const i=Rs(n,s);if(i){const r=As(i),o=r.path,a=r.queryId,l=re(o,e),c=K.fromObject(t),u=new At(Es(a),l,c);return ks(n,o,u)}else return[]}function Qi(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const _=re(d,i);r=r||nt(f,_),o=o||De(f)});let a=n.syncPointTree_.get(i);a?(o=o||De(a),r=r||nt(a,H())):(a=new Lu,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=S.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,_)=>{const v=nt(_,H());v&&(r=r.updateImmediateChild(f,v))}));const c=Po(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=vn(e);p(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=ed();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=Is(n.pendingWriteTree_,i);let h=Uu(a,e,t,u,r,l);if(!c&&!o&&!s){const d=Do(a,e);h=h.concat(td(n,e,d))}return h}function Mo(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=re(o,e),c=nt(a,l);if(c)return c});return bo(i,e,r,t,!0)}function Lt(n,e){return xo(e,n.syncPointTree_,null,Is(n.pendingWriteTree_,H()))}function xo(n,e,t,s){if(F(n.path))return Oo(n,e,t,s);{const i=e.get(H());t==null&&i!=null&&(t=nt(i,H()));let r=[];const o=L(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=To(s,o);r=r.concat(xo(a,l,c,u))}return i&&(r=r.concat(Ns(i,n,s,t))),r}}function Oo(n,e,t,s){const i=e.get(H());t==null&&i!=null&&(t=nt(i,H()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=To(s,o),u=n.operationForChild(o);u&&(r=r.concat(Oo(u,a,l,c)))}),i&&(r=r.concat(Ns(i,n,s,t))),r}function Lo(n,e){const t=e.query,s=an(n,t);return{hashFn:()=>(Pu(e)||S.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Yu(n,t._path,s):Ku(n,t._path);{const r=Yc(i,t);return ts(n,t,null,r)}}}}function an(n,e){const t=vn(e);return n.queryToTagMap.get(t)}function vn(n){return n._path.toString()+"$"+n._queryIdentifier}function Rs(n,e){return n.tagToQueryMap.get(e)}function As(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new q(n.substr(0,e))}}function ks(n,e,t){const s=n.syncPointTree_.get(e);p(s,"Missing sync point for query tag that we're tracking");const i=Is(n.pendingWriteTree_,e);return Ns(s,t,i,null)}function Ju(n){return n.fold((e,t,s)=>{if(t&&De(t))return[gn(t)];{let i=[];return t&&(i=ko(t)),le(s,(r,o)=>{i=i.concat(o)}),i}})}function Ct(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ju())(n._repo,n._path):n}function Zu(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=vn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function ed(){return qu++}function td(n,e,t){const s=e._path,i=an(n,e),r=Lo(n,t),o=n.listenProvider_.startListening(Ct(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)p(!De(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!F(c)&&u&&De(u))return[gn(u).query];{let d=[];return u&&(d=d.concat(ko(u).map(f=>f.query))),le(h,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Ct(u),an(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ds(t)}node(){return this.node_}}class Ps{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Z(this.path_,e);return new Ps(this.syncTree_,t)}node(){return Mo(this.syncTree_,this.path_)}}const nd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Xi=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return sd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return id(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},sd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},id=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&p(!1,"Unexpected increment value: "+s);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},rd=function(n,e,t,s){return Ms(e,new Ps(t,n),s)},od=function(n,e,t){return Ms(n,new Ds(e),t)};function Ms(n,e,t){const s=n.getPriority().val(),i=Xi(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Xi(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ee(a,ie(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ee(i))),o.forEachChild(Q,(a,l)=>{const c=Ms(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Os(n,e){let t=e instanceof q?e:new q(e),s=n,i=L(t);for(;i!==null;){const r=st(s.node.children,i)||{children:{},childCount:0};s=new xs(i,s,r),t=z(t),i=L(t)}return s}function ht(n){return n.node.value}function Fo(n,e){n.node.value=e,ns(n)}function Bo(n){return n.node.childCount>0}function ad(n){return ht(n)===void 0&&!Bo(n)}function Cn(n,e){le(n.node.children,(t,s)=>{e(new xs(t,n,s))})}function $o(n,e,t,s){t&&!s&&e(n),Cn(n,i=>{$o(i,e,!0,s)}),t&&s&&e(n)}function ld(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ft(n){return new q(n.parent===null?n.name:Ft(n.parent)+"/"+n.name)}function ns(n){n.parent!==null&&cd(n.parent,n.name,n)}function cd(n,e,t){const s=ad(t),i=we(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ns(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ns(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=/[\[\].#$\/\u0000-\u001F\u007F]/,ud=/[\[\].#$\u0000-\u001F\u007F]/,Mn=10*1024*1024,Wo=function(n){return typeof n=="string"&&n.length!==0&&!hd.test(n)},Uo=function(n){return typeof n=="string"&&n.length!==0&&!ud.test(n)},dd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Uo(n)},Ho=function(n,e,t){const s=t instanceof q?new Rh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Me(s));if(typeof e=="function")throw new Error(n+"contains a function "+Me(s)+" with contents = "+e.toString());if(Ur(e))throw new Error(n+"contains "+e.toString()+" "+Me(s));if(typeof e=="string"&&e.length>Mn/3&&_n(e)>Mn)throw new Error(n+"contains a string greater than "+Mn+" utf8 bytes "+Me(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(le(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Wo(o)))throw new Error(n+" contains an invalid key ("+o+") "+Me(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ah(s,o),Ho(n,a,s),kh(s)}),i&&r)throw new Error(n+' contains ".value" child '+Me(s)+" in addition to actual children.")}},Vo=function(n,e,t,s){if(!(s&&t===void 0)&&!Uo(t))throw new Error(kr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vo(n,e,t,s)},_d=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!dd(t))throw new Error(kr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jo(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ms(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function qo(n,e,t){jo(n,t),Go(n,s=>ms(s,e))}function Ge(n,e,t){jo(n,t),Go(n,s=>fe(s,e)||fe(e,s))}function Go(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(md(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function md(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Le&&se("event: "+t.toString()),xt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="repo_interrupt",yd=25;class vd{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zt(),this.transactionQueueTree_=new xs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Cd(n,e,t){if(n.stats_=_s(n.repoInfo_),n.forceRestClient_||Zc())n.server_=new Jt(n.repoInfo_,(s,i,r,o)=>{Ji(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Zi(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ne(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ye(n.repoInfo_,e,(s,i,r,o)=>{Ji(n,s,i,r,o)},s=>{Zi(n,s)},s=>{Ed(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=ih(n.repoInfo_,()=>new nu(n.stats_,n.server_)),n.infoData_=new Xh,n.infoSyncTree_=new Yi({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=yn(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ls(n,"connected",!1),n.serverSyncTree_=new Yi({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ge(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function wd(n){const t=n.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function zo(n){return nd({timestamp:wd(n)})}function Ji(n,e,t,s,i){n.dataUpdateCount++;const r=new q(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=Gt(t,c=>ie(c));o=Xu(n.serverSyncTree_,r,l,i)}else{const l=ie(t);o=Qu(n.serverSyncTree_,r,l,i)}else if(s){const l=Gt(t,c=>ie(c));o=zu(n.serverSyncTree_,r,l)}else{const l=ie(t);o=yn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Bs(n,r)),Ge(n.eventQueue_,a,o)}function Zi(n,e){Ls(n,"connected",e),e===!1&&bd(n)}function Ed(n,e){le(e,(t,s)=>{Ls(n,t,s)})}function Ls(n,e,t){const s=new q("/.info/"+e),i=ie(t);n.infoData_.updateSnapshot(s,i);const r=yn(n.infoSyncTree_,s,i);Ge(n.eventQueue_,s,r)}function Id(n){return n.nextWriteId_++}function bd(n){Ko(n,"onDisconnectEvents");const e=zo(n),t=Zt();Yn(n.onDisconnect_,H(),(i,r)=>{const o=rd(i,r,n.serverSyncTree_,e);vo(t,i,o)});let s=[];Yn(t,H(),(i,r)=>{s=s.concat(yn(n.serverSyncTree_,i,r));const o=Ad(n,i);Bs(n,o)}),n.onDisconnect_=Zt(),Ge(n.eventQueue_,H(),s)}function Td(n,e,t){let s;L(e._path)===".info"?s=Qi(n.infoSyncTree_,e,t):s=Qi(n.serverSyncTree_,e,t),qo(n.eventQueue_,e._path,s)}function er(n,e,t){let s;L(e._path)===".info"?s=ts(n.infoSyncTree_,e,t):s=ts(n.serverSyncTree_,e,t),qo(n.eventQueue_,e._path,s)}function Sd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(gd)}function Ko(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),se(t,...e)}function Yo(n,e,t){return Mo(n.serverSyncTree_,e,t)||S.EMPTY_NODE}function Fs(n,e=n.transactionQueueTree_){if(e||wn(n,e),ht(e)){const t=Xo(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Nd(n,Ft(e),t)}else Bo(e)&&Cn(e,t=>{Fs(n,t)})}function Nd(n,e,t){const s=t.map(c=>c.currentWriteId),i=Yo(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=re(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Ko(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Qe(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();wn(n,Os(n.transactionQueueTree_,e)),Fs(n,n.transactionQueueTree_),Ge(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)xt(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ce("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Bs(n,e)}},o)}function Bs(n,e){const t=Qo(n,e),s=Ft(t),i=Xo(n,t);return Rd(n,i,s),s}function Rd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=re(t,l.path);let u=!1,h;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Qe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=yd)u=!0,h="maxretry",i=i.concat(Qe(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Yo(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Ho("transaction failed: Data returned ",f,l.path);let _=ie(f);typeof f=="object"&&f!=null&&we(f,".priority")||(_=_.updatePriority(d.getPriority()));const m=l.currentWriteId,b=zo(n),B=od(_,d,b);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=B,l.currentWriteId=Id(n),o.splice(o.indexOf(m),1),i=i.concat(Gu(n.serverSyncTree_,l.path,B,l.currentWriteId,l.applyLocally)),i=i.concat(Qe(n.serverSyncTree_,m,!0))}else u=!0,h="nodata",i=i.concat(Qe(n.serverSyncTree_,l.currentWriteId,!0))}Ge(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}wn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)xt(s[a]);Fs(n,n.transactionQueueTree_)}function Qo(n,e){let t,s=n.transactionQueueTree_;for(t=L(e);t!==null&&ht(s)===void 0;)s=Os(s,t),e=z(e),t=L(e);return s}function Xo(n,e){const t=[];return Jo(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Jo(n,e,t){const s=ht(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Cn(e,i=>{Jo(n,i,t)})}function wn(n,e){const t=ht(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Fo(e,t.length>0?t:void 0)}Cn(e,s=>{wn(n,s)})}function Ad(n,e){const t=Ft(Qo(n,e)),s=Os(n.transactionQueueTree_,e);return ld(s,i=>{xn(n,i)}),xn(n,s),$o(s,i=>{xn(n,i)}),t}function xn(n,e){const t=ht(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Qe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fo(e,void 0):t.length=r+1,Ge(n.eventQueue_,Ft(e),i);for(let o=0;o<s.length;o++)xt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Dd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const tr=function(n,e){const t=Pd(n),s=t.namespace;t.domain==="firebase.com"&&Ce(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ce("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||jc();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Zr(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new q(t.pathString)}},Pd=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=kd(n.substring(u,h)));const d=Dd(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ne(this.snapshot.exportVal())}}class ea{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class $s{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return F(this._path)?null:lo(this._path)}get ref(){return new Ee(this._repo,this._path)}get _queryIdentifier(){const e=Bi(this._queryParams),t=ds(e);return t==="{}"?"default":t}get _queryObject(){return Bi(this._queryParams)}isEqual(e){if(e=lt(e),!(e instanceof $s))return!1;const t=this._repo===e._repo,s=ms(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Nh(this._path)}}class Ee extends $s{constructor(e,t){super(e,t,new Cs,!1)}get parent(){const e=ho(this._path);return e===null?null:new Ee(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class kt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new q(e),s=ln(this.ref,e);return new kt(this._node.getChild(t),s,Q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new kt(i,ln(this.ref,s),Q)))}hasChild(e){const t=new q(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xd(n,e){return n=lt(n),n._checkNotDeleted("ref"),e!==void 0?ln(n._root,e):n._root}function ln(n,e){return n=lt(n),L(n._path)===null?fd("child","path",e,!1):Vo("child","path",e,!1),new Ee(n._repo,Z(n._path,e))}class Ws{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Zo("value",this,new kt(e.snapshotNode,new Ee(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ea(this,e,t):null}matches(e){return e instanceof Ws?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Us{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ea(this,e,t):null}createEvent(e,t){p(e.childName!=null,"Child events should have a childName.");const s=ln(new Ee(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Zo(e.type,this,new kt(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Us?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Od(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(u,h)=>{er(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Md(t,r||void 0),a=e==="value"?new Ws(o):new Us(e,o);return Td(n._repo,n,a),()=>er(n._repo,n,a)}function Ld(n,e,t,s){return Od(n,"value",e,t,s)}Fu(Ee);Vu(Ee);/**
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
 */const Fd="FIREBASE_DATABASE_EMULATOR_HOST",ss={};let Bd=!1;function $d(n,e,t,s){n.repoInfo_=new Zr(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Wd(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Ce("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),se("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=tr(r,i),a=o.repoInfo,l,c;typeof process<"u"&&Ci&&(c=Ci[Fd]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=tr(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new et(et.OWNER):new th(n.name,n.options,e);_d("Invalid Firebase Database URL",o),F(o.path)||Ce("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Hd(a,n,u,new eh(n.name,t));return new Vd(h,n)}function Ud(n,e){const t=ss[e];(!t||t[n.key]!==n)&&Ce(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Sd(n),delete t[n.key]}function Hd(n,e,t,s){let i=ss[e.name];i||(i={},ss[e.name]=i);let r=i[n.toURLString()];return r&&Ce("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vd(n,Bd,t,s),i[n.toURLString()]=r,r}class Vd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Cd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ee(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ud(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ce("Cannot call "+e+" on a deleted database.")}}function jd(n=Or(),e){const t=Dt(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=dl("database");s&&qd(t,...s)}return t}function qd(n,e,t,s={}){n=lt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ce("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ce('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new et(et.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:fl(s.mockUserToken,n.app.options.projectId);r=new et(o)}$d(i,e,t,r)}/**
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
 */function Gd(n){$c(Tc),Ae(new ve("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Wd(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),me(wi,Ei,n),me(wi,Ei,"esm2017")}ye.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ye.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Gd();async function zd(n){const e=jd(),t=xd(e,n);return new Promise((s,i)=>{Ld(t,r=>{const o=r.val()||[];s(o)},r=>{i(r)})})}const ta="@firebase/installations",Hs="0.6.5";/**
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
 */const na=1e4,sa=`w:${Hs}`,ia="FIS_v2",Kd="https://firebaseinstallations.googleapis.com/v1",Yd=60*60*1e3,Qd="installations",Xd="Installations";/**
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
 */const Jd={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},He=new fn(Qd,Xd,Jd);function ra(n){return n instanceof je&&n.code.includes("request-failed")}/**
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
 */function oa({projectId:n}){return`${Kd}/projects/${n}/installations`}function aa(n){return{token:n.token,requestStatus:2,expiresIn:ef(n.expiresIn),creationTime:Date.now()}}async function la(n,e){const s=(await e.json()).error;return He.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ca({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Zd(n,{refreshToken:e}){const t=ca(n);return t.append("Authorization",tf(e)),t}async function ha(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ef(n){return Number(n.replace("s","000"))}function tf(n){return`${ia} ${n}`}/**
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
 */async function nf({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=oa(n),i=ca(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:t,authVersion:ia,appId:n.appId,sdkVersion:sa},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ha(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:aa(c.authToken)}}else throw await la("Create Installation",l)}/**
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
 */function ua(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function sf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const rf=/^[cdef][\w-]{21}$/,is="";function of(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=af(n);return rf.test(t)?t:is}catch{return is}}function af(n){return sf(n).substr(0,22)}/**
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
 */function En(n){return`${n.appName}!${n.appId}`}/**
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
 */const da=new Map;function fa(n,e){const t=En(n);_a(t,e),lf(t,e)}function _a(n,e){const t=da.get(n);if(t)for(const s of t)s(e)}function lf(n,e){const t=cf();t&&t.postMessage({key:n,fid:e}),hf()}let Oe=null;function cf(){return!Oe&&"BroadcastChannel"in self&&(Oe=new BroadcastChannel("[Firebase] FID Change"),Oe.onmessage=n=>{_a(n.data.key,n.data.fid)}),Oe}function hf(){da.size===0&&Oe&&(Oe.close(),Oe=null)}/**
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
 */const uf="firebase-installations-database",df=1,Ve="firebase-installations-store";let On=null;function Vs(){return On||(On=Mr(uf,df,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ve)}}})),On}async function cn(n,e){const t=En(n),i=(await Vs()).transaction(Ve,"readwrite"),r=i.objectStore(Ve),o=await r.get(t);return await r.put(e,t),await i.done,(!o||o.fid!==e.fid)&&fa(n,e.fid),e}async function pa(n){const e=En(n),s=(await Vs()).transaction(Ve,"readwrite");await s.objectStore(Ve).delete(e),await s.done}async function In(n,e){const t=En(n),i=(await Vs()).transaction(Ve,"readwrite"),r=i.objectStore(Ve),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&fa(n,a.fid),a}/**
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
 */async function js(n){let e;const t=await In(n.appConfig,s=>{const i=ff(s),r=_f(n,i);return e=r.registrationPromise,r.installationEntry});return t.fid===is?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ff(n){const e=n||{fid:of(),registrationStatus:0};return ma(e)}function _f(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(He.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=pf(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mf(n)}:{installationEntry:e}}async function pf(n,e){try{const t=await nf(n,e);return cn(n.appConfig,t)}catch(t){throw ra(t)&&t.customData.serverCode===409?await pa(n.appConfig):await cn(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function mf(n){let e=await nr(n.appConfig);for(;e.registrationStatus===1;)await ua(100),e=await nr(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await js(n);return s||t}return e}function nr(n){return In(n,e=>{if(!e)throw He.create("installation-not-found");return ma(e)})}function ma(n){return gf(n)?{fid:n.fid,registrationStatus:0}:n}function gf(n){return n.registrationStatus===1&&n.registrationTime+na<Date.now()}/**
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
 */async function yf({appConfig:n,heartbeatServiceProvider:e},t){const s=vf(n,t),i=Zd(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:sa,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ha(()=>fetch(s,a));if(l.ok){const c=await l.json();return aa(c)}else throw await la("Generate Auth Token",l)}function vf(n,{fid:e}){return`${oa(n)}/${e}/authTokens:generate`}/**
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
 */async function qs(n,e=!1){let t;const s=await In(n.appConfig,r=>{if(!ga(r))throw He.create("not-registered");const o=r.authToken;if(!e&&Ef(o))return r;if(o.requestStatus===1)return t=Cf(n,e),r;{if(!navigator.onLine)throw He.create("app-offline");const a=bf(r);return t=wf(n,a),a}});return t?await t:s.authToken}async function Cf(n,e){let t=await sr(n.appConfig);for(;t.authToken.requestStatus===1;)await ua(100),t=await sr(n.appConfig);const s=t.authToken;return s.requestStatus===0?qs(n,e):s}function sr(n){return In(n,e=>{if(!ga(e))throw He.create("not-registered");const t=e.authToken;return Tf(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wf(n,e){try{const t=await yf(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await cn(n.appConfig,s),t}catch(t){if(ra(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await pa(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await cn(n.appConfig,s)}throw t}}function ga(n){return n!==void 0&&n.registrationStatus===2}function Ef(n){return n.requestStatus===2&&!If(n)}function If(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Yd}function bf(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Tf(n){return n.requestStatus===1&&n.requestTime+na<Date.now()}/**
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
 */async function Sf(n){const e=n,{installationEntry:t,registrationPromise:s}=await js(e);return s?s.catch(console.error):qs(e).catch(console.error),t.fid}/**
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
 */async function Nf(n,e=!1){const t=n;return await Rf(t),(await qs(t,e)).token}async function Rf(n){const{registrationPromise:e}=await js(n);e&&await e}/**
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
 */function Af(n){if(!n||!n.options)throw Ln("App Configuration");if(!n.name)throw Ln("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ln(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ln(n){return He.create("missing-app-config-values",{valueName:n})}/**
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
 */const ya="installations",kf="installations-internal",Df=n=>{const e=n.getProvider("app").getImmediate(),t=Af(e),s=Dt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Pf=n=>{const e=n.getProvider("app").getImmediate(),t=Dt(e,ya).getImmediate();return{getId:()=>Sf(t),getToken:i=>Nf(t,i)}};function Mf(){Ae(new ve(ya,Df,"PUBLIC")),Ae(new ve(kf,Pf,"PRIVATE"))}Mf();me(ta,Hs);me(ta,Hs,"esm2017");/**
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
 */const hn="analytics",xf="firebase_id",Of="origin",Lf=60*1e3,Ff="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gs="https://www.googletagmanager.com/gtag/js";/**
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
 */const ae=new hs("@firebase/analytics");/**
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
 */const Bf={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},he=new fn("analytics","Analytics",Bf);/**
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
 */function $f(n){if(!n.startsWith(Gs)){const e=he.create("invalid-gtag-resource",{gtagURL:n});return ae.warn(e.message),""}return n}function va(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Wf(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Uf(n,e){const t=Wf("firebase-js-sdk-policy",{createScriptURL:$f}),s=document.createElement("script"),i=`${Gs}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Hf(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Vf(n,e,t,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await va(t)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){ae.error(a)}n("config",i,r)}async function jf(n,e,t,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await va(t);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",s,i||{})}catch(r){ae.error(r)}}function qf(n,e,t,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await jf(n,e,t,a,l)}else if(r==="config"){const[a,l]=o;await Vf(n,e,t,s,a,l)}else if(r==="consent"){const[a]=o;n("consent","update",a)}else if(r==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){ae.error(a)}}return i}function Gf(n,e,t,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=qf(r,n,e,t),{gtagCore:r,wrappedGtag:window[i]}}function zf(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Gs)&&t.src.includes(n))return t;return null}/**
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
 */const Kf=30,Yf=1e3;class Qf{constructor(e={},t=Yf){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ca=new Qf;function Xf(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Jf(n){var e;const{appId:t,apiKey:s}=n,i={method:"GET",headers:Xf(s)},r=Ff.replace("{app-id}",t),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw he.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Zf(n,e=Ca,t){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw he.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw he.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new n_;return setTimeout(async()=>{a.abort()},t!==void 0?t:Lf),wa({appId:s,apiKey:i,measurementId:r},o,a,e)}async function wa(n,{throttleEndTimeMillis:e,backoffCount:t},s,i=Ca){var r;const{appId:o,measurementId:a}=n;try{await e_(s,e)}catch(l){if(a)return ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Jf(n);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!t_(c)){if(i.deleteThrottleMetadata(o),a)return ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?di(t,i.intervalMillis,Kf):di(t,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return i.setThrottleMetadata(o,h),ae.debug(`Calling attemptFetch again in ${u} millis`),wa(n,h,s,i)}}function e_(n,e){return new Promise((t,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(r),s(he.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function t_(n){if(!(n instanceof je)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class n_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function s_(n,e,t,s,i){if(i&&i.global){n("event",t,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});n("event",t,o)}}/**
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
 */async function i_(){if(Nr())try{await Rr()}catch(n){return ae.warn(he.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return ae.warn(he.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function r_(n,e,t,s,i,r,o){var a;const l=Zf(n);l.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&ae.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>ae.error(f)),e.push(l);const c=i_().then(f=>{if(f)return s.getId()}),[u,h]=await Promise.all([l,c]);zf(r)||Uf(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Of]="firebase",d.update=!0,h!=null&&(d[xf]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class o_{constructor(e){this.app=e}_delete(){return delete wt[this.app.options.appId],Promise.resolve()}}let wt={},ir=[];const rr={};let Fn="dataLayer",a_="gtag",or,Ea,ar=!1;function l_(){const n=[];if(pl()&&n.push("This is a browser extension environment."),gl()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),t=he.create("invalid-analytics-context",{errorInfo:e});ae.warn(t.message)}}function c_(n,e,t){l_();const s=n.options.appId;if(!s)throw he.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw he.create("no-api-key");if(wt[s]!=null)throw he.create("already-exists",{id:s});if(!ar){Hf(Fn);const{wrappedGtag:r,gtagCore:o}=Gf(wt,ir,rr,Fn,a_);Ea=r,or=o,ar=!0}return wt[s]=r_(n,ir,rr,e,or,Fn,t),new o_(n)}function h_(n=Or()){n=lt(n);const e=Dt(n,hn);return e.isInitialized()?e.getImmediate():u_(n)}function u_(n,e={}){const t=Dt(n,hn);if(t.isInitialized()){const i=t.getImmediate();if(zt(e,t.getOptions()))return i;throw he.create("already-initialized")}return t.initialize({options:e})}function d_(n,e,t,s){n=lt(n),s_(Ea,wt[n.app.options.appId],e,t,s).catch(i=>ae.error(i))}const lr="@firebase/analytics",cr="0.10.1";function f_(){Ae(new ve(hn,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return c_(s,i,t)},"PUBLIC")),Ae(new ve("analytics-internal",n,"PRIVATE")),me(lr,cr),me(lr,cr,"esm2017");function n(e){try{const t=e.getProvider(hn).getImmediate();return{logEvent:(s,i,r)=>d_(t,s,i,r)}}catch(t){throw he.create("interop-component-reg-failed",{reason:t})}}}f_();function hr(n,e,t){const s=n.slice();return s[22]=e[t],s[24]=t,s}function ur(n,e,t){const s=n.slice();return s[22]=e[t],s[24]=t,s}function __(n){let e,t="Loading Game...";return{c(){e=k("p"),e.textContent=t},l(s){e=D(s,"P",{"data-svelte-h":!0}),X(e)!=="svelte-kk77ic"&&(e.textContent=t)},m(s,i){P(s,e,i)},p:Ie,d(s){s&&C(e)}}}function p_(n){let e,t,s,i=[],r=new Map,o,a,l='<i class="fa-solid fa-eraser"></i>',c,u,h='<i class="fa-solid fa-shuffle"></i>',d,f,_='<i class="fa-solid fa-delete-left"></i>',v,m,b="Enter",B,A,y=Ke(n[3]),E=[];for(let I=0;I<y.length;I+=1)E[I]=dr(ur(n,y,I));let x=Ke(n[4]);const N=I=>I[24];for(let I=0;I<x.length;I+=1){let g=hr(n,x,I),w=N(g);r.set(w,i[I]=fr(w,g))}return{c(){e=k("div");for(let I=0;I<E.length;I+=1)E[I].c();t=W(),s=k("div");for(let I=0;I<i.length;I+=1)i[I].c();o=W(),a=k("div"),a.innerHTML=l,c=W(),u=k("div"),u.innerHTML=h,d=W(),f=k("div"),f.innerHTML=_,v=W(),m=k("div"),m.textContent=b,this.h()},l(I){e=D(I,"DIV",{class:!0});var g=J(e);for(let V=0;V<E.length;V+=1)E[V].l(g);g.forEach(C),t=U(I),s=D(I,"DIV",{class:!0});var w=J(s);for(let V=0;V<i.length;V+=1)i[V].l(w);o=U(w),a=D(w,"DIV",{class:!0,"data-svelte-h":!0}),X(a)!=="svelte-qtb4kv"&&(a.innerHTML=l),c=U(w),u=D(w,"DIV",{class:!0,"data-svelte-h":!0}),X(u)!=="svelte-krp8l1"&&(u.innerHTML=h),d=U(w),f=D(w,"DIV",{class:!0,"data-svelte-h":!0}),X(f)!=="svelte-1jsmx3m"&&(f.innerHTML=_),v=U(w),m=D(w,"DIV",{class:!0,"data-svelte-h":!0}),X(m)!=="svelte-1qinv54"&&(m.textContent=b),w.forEach(C),this.h()},h(){$(e,"class","circle-container svelte-f9yiej"),$(a,"class","key svelte-f9yiej"),$(u,"class","key svelte-f9yiej"),$(f,"class","key svelte-f9yiej"),$(m,"class","key enter-key svelte-f9yiej"),$(s,"class","keyboard svelte-f9yiej")},m(I,g){P(I,e,g);for(let w=0;w<E.length;w+=1)E[w]&&E[w].m(e,null);P(I,t,g),P(I,s,g);for(let w=0;w<i.length;w+=1)i[w]&&i[w].m(s,null);M(s,o),M(s,a),M(s,c),M(s,u),M(s,d),M(s,f),M(s,v),M(s,m),B||(A=[ue(a,"click",n[11]),ue(u,"click",n[12]),ue(f,"click",n[13]),ue(m,"click",n[10])],B=!0)},p(I,g){if(g&136){y=Ke(I[3]);let w;for(w=0;w<y.length;w+=1){const V=ur(I,y,w);E[w]?E[w].p(V,g):(E[w]=dr(V),E[w].c(),E[w].m(e,null))}for(;w<E.length;w+=1)E[w].d(1);E.length=y.length}g&592&&(x=Ke(I[4]),i=mr(i,g,N,1,I,x,r,s,Va,fr,o,hr))},d(I){I&&(C(e),C(t),C(s)),Ba(E,I);for(let g=0;g<i.length;g+=1)i[g].d();B=!1,un(A)}}}function dr(n){let e,t=(n[22]==""?"":n[22])+"",s,i,r;return{c(){e=k("div"),s=Xe(t),i=W(),this.h()},l(o){e=D(o,"DIV",{class:!0,style:!0});var a=J(e);s=Je(a,t),i=U(a),a.forEach(C),this.h()},h(){$(e,"class","circle svelte-f9yiej"),$(e,"style",r=`
						left: calc(40% + ${Math.cos(n[24]/n[3].length*2*Math.PI-Math.PI/2)*100}px);
						top: calc(37% + ${Math.sin(n[24]/n[3].length*2*Math.PI-Math.PI/2)*100}px);
				`),mt(e,"filled",n[22]!=""),mt(e,"shared",n[7].includes(n[24]))},m(o,a){P(o,e,a),M(e,s),M(e,i)},p(o,a){a&8&&t!==(t=(o[22]==""?"":o[22])+"")&&dn(s,t),a&8&&r!==(r=`
						left: calc(40% + ${Math.cos(o[24]/o[3].length*2*Math.PI-Math.PI/2)*100}px);
						top: calc(37% + ${Math.sin(o[24]/o[3].length*2*Math.PI-Math.PI/2)*100}px);
				`)&&$(e,"style",r),a&8&&mt(e,"filled",o[22]!="")},d(o){o&&C(e)}}}function fr(n,e){let t,s=e[22]+"",i,r,o,a;function l(){return e[17](e[22],e[24])}return{key:n,first:null,c(){t=k("div"),i=Xe(s),r=W(),this.h()},l(c){t=D(c,"DIV",{class:!0});var u=J(t);i=Je(u,s),r=U(u),u.forEach(C),this.h()},h(){$(t,"class","key svelte-f9yiej"),mt(t,"disabled",e[6](e[24])),this.first=t},m(c,u){P(c,t,u),M(t,i),M(t,r),o||(a=ue(t,"click",l),o=!0)},p(c,u){e=c,u&16&&s!==(s=e[22]+"")&&dn(i,s),u&80&&mt(t,"disabled",e[6](e[24]))},d(c){c&&C(t),o=!1,a()}}}function m_(n){let e,t,s,i,r,o,a="Fantastic Job!",l,c,u,h,d,f,_,v="Share",m,b,B,A;return{c(){e=k("h3"),t=Xe("You Solved the circle in "),s=Xe(n[5]),i=Xe(" attempts"),r=W(),o=k("p"),o.textContent=a,l=W(),c=k("br"),u=W(),h=k("div"),d=k("div"),f=W(),_=k("button"),_.textContent=v,m=W(),b=k("div"),this.h()},l(y){e=D(y,"H3",{});var E=J(e);t=Je(E,"You Solved the circle in "),s=Je(E,n[5]),i=Je(E," attempts"),E.forEach(C),r=U(y),o=D(y,"P",{"data-svelte-h":!0}),X(o)!=="svelte-17sl737"&&(o.textContent=a),l=U(y),c=D(y,"BR",{}),u=U(y),h=D(y,"DIV",{class:!0});var x=J(h);d=D(x,"DIV",{class:!0}),J(d).forEach(C),f=U(x),_=D(x,"BUTTON",{class:!0,"data-svelte-h":!0}),X(_)!=="svelte-1urjot1"&&(_.textContent=v),m=U(x),b=D(x,"DIV",{class:!0}),J(b).forEach(C),x.forEach(C),this.h()},h(){$(d,"class","spacer svelte-f9yiej"),$(_,"class","share-button svelte-f9yiej"),$(b,"class","spacer svelte-f9yiej"),$(h,"class","flex-container svelte-f9yiej")},m(y,E){P(y,e,E),M(e,t),M(e,s),M(e,i),P(y,r,E),P(y,o,E),P(y,l,E),P(y,c,E),P(y,u,E),P(y,h,E),M(h,d),M(h,f),M(h,_),M(h,m),M(h,b),B||(A=ue(_,"click",n[14]),B=!0)},p(y,E){E&32&&dn(s,y[5])},d(y){y&&(C(e),C(r),C(o),C(l),C(c),C(u),C(h)),B=!1,A()}}}function g_(n){let e,t=`<b>Congratulations!</b> <br/>
		Share your results with your friends.`;return{c(){e=k("div"),e.innerHTML=t,this.h()},l(s){e=D(s,"DIV",{slot:!0,"data-svelte-h":!0}),X(e)!=="svelte-f7olr4"&&(e.innerHTML=t),this.h()},h(){$(e,"slot","header")},m(s,i){P(s,e,i)},p:Ie,d(s){s&&C(e)}}}function y_(n){let e,t="Find the 8-letter circle word",s,i,r="<li>There are 2 words to find.</li> <li>Letters may only be used once and have to be in the letter bank.</li> <li>The red circles are shared letters between the two words.</li>",o,a,l="Example",c,u,h="If we had these letters:",d,f,_,v,m,b=`We could spell the words 
			<b><span style="color: red;">M</span>USI<span style="color: red;">C</span></b> 
			and 
			<b><span style="color: red;">C</span>HAR<span style="color: red;">M</span> </b>.`,B,A,y='Notice how these words share an <b><span style="color: red;">M</span></b> and a <b><span style="color: red;">C</span></b>.',E,x,N="One correct solution:",I,g,w,V,T,j="Remember there can be more than one solution.";return{c(){e=k("h3"),e.textContent=t,s=W(),i=k("ul"),i.innerHTML=r,o=W(),a=k("h3"),a.textContent=l,c=W(),u=k("p"),u.textContent=h,d=W(),f=k("img"),v=W(),m=k("p"),m.innerHTML=b,B=W(),A=k("p"),A.innerHTML=y,E=W(),x=k("p"),x.textContent=N,I=W(),g=k("img"),V=W(),T=k("p"),T.textContent=j,this.h()},l(R){e=D(R,"H3",{"data-svelte-h":!0}),X(e)!=="svelte-1j8js8f"&&(e.textContent=t),s=U(R),i=D(R,"UL",{class:!0,"data-svelte-h":!0}),X(i)!=="svelte-wtdfry"&&(i.innerHTML=r),o=U(R),a=D(R,"H3",{"data-svelte-h":!0}),X(a)!=="svelte-qg4234"&&(a.textContent=l),c=U(R),u=D(R,"P",{"data-svelte-h":!0}),X(u)!=="svelte-eqhtsw"&&(u.textContent=h),d=U(R),f=D(R,"IMG",{src:!0,alt:!0,style:!0}),v=U(R),m=D(R,"P",{"data-svelte-h":!0}),X(m)!=="svelte-14urd7p"&&(m.innerHTML=b),B=U(R),A=D(R,"P",{"data-svelte-h":!0}),X(A)!=="svelte-1xer9do"&&(A.innerHTML=y),E=U(R),x=D(R,"P",{"data-svelte-h":!0}),X(x)!=="svelte-1tryhud"&&(x.textContent=N),I=U(R),g=D(R,"IMG",{src:!0,alt:!0,style:!0}),V=U(R),T=D(R,"P",{"data-svelte-h":!0}),X(T)!=="svelte-1imbt6f"&&(T.textContent=j),this.h()},h(){$(i,"class","definition-list"),ei(f.src,_=nl)||$(f,"src",_),$(f,"alt","Welcome"),pt(f,"width","350px"),pt(f,"height","auto"),ei(g.src,w=tl)||$(g,"src",w),$(g,"alt","Welcome"),pt(g,"width","150px"),pt(g,"height","auto")},m(R,Y){P(R,e,Y),P(R,s,Y),P(R,i,Y),P(R,o,Y),P(R,a,Y),P(R,c,Y),P(R,u,Y),P(R,d,Y),P(R,f,Y),P(R,v,Y),P(R,m,Y),P(R,B,Y),P(R,A,Y),P(R,E,Y),P(R,x,Y),P(R,I,Y),P(R,g,Y),P(R,V,Y),P(R,T,Y)},p:Ie,d(R){R&&(C(e),C(s),C(i),C(o),C(a),C(c),C(u),C(d),C(f),C(v),C(m),C(B),C(A),C(E),C(x),C(I),C(g),C(V),C(T))}}}function v_(n){let e,t="<b>How To Play</b>";return{c(){e=k("h2"),e.innerHTML=t,this.h()},l(s){e=D(s,"H2",{slot:!0,"data-svelte-h":!0}),X(e)!=="svelte-cc40s5"&&(e.innerHTML=t),this.h()},h(){$(e,"slot","header")},m(s,i){P(s,e,i)},p:Ie,d(s){s&&C(e)}}}function C_(n){let e,t,s='<h1 class="title svelte-f9yiej">LetterLoop</h1> <small>(public beta)</small>',i,r,o,a,l='<i class="fa-regular fa-circle-question"></i> <p class="how-to-play svelte-f9yiej">How to play</p>',c,u,h,d,f,_,v,m,b,B,A,y;u=new yr({});function E(T,j){return T[2].length>0?p_:__}let x=E(n),N=x(n);function I(T){n[18](T)}let g={$$slots:{header:[g_],default:[m_]},$$scope:{ctx:n}};n[0]!==void 0&&(g.showModal=n[0]),f=new li({props:g}),Bn.push(()=>ni(f,"showModal",I));function w(T){n[19](T)}let V={$$slots:{header:[v_],default:[y_]},$$scope:{ctx:n}};return n[1]!==void 0&&(V.showModal=n[1]),m=new li({props:V}),Bn.push(()=>ni(m,"showModal",w)),{c(){e=k("main"),t=k("div"),t.innerHTML=s,i=W(),r=k("div"),o=W(),a=k("div"),a.innerHTML=l,c=W(),Wt(u.$$.fragment),h=W(),N.c(),d=W(),Wt(f.$$.fragment),v=W(),Wt(m.$$.fragment),this.h()},l(T){e=D(T,"MAIN",{class:!0});var j=J(e);t=D(j,"DIV",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-zlx3yy"&&(t.innerHTML=s),i=U(j),r=D(j,"DIV",{class:!0}),J(r).forEach(C),o=U(j),a=D(j,"DIV",{class:!0,"data-svelte-h":!0}),X(a)!=="svelte-w4pbae"&&(a.innerHTML=l),c=U(j),Ut(u.$$.fragment,j),h=U(j),N.l(j),j.forEach(C),d=U(T),Ut(f.$$.fragment,T),v=U(T),Ut(m.$$.fragment,T),this.h()},h(){$(t,"class","flex-container svelte-f9yiej"),$(r,"class","divider svelte-f9yiej"),$(a,"class","help-container svelte-f9yiej"),$(e,"class","svelte-f9yiej")},m(T,j){P(T,e,j),M(e,t),M(e,i),M(e,r),M(e,o),M(e,a),M(e,c),Ht(u,e,null),M(e,h),N.m(e,null),P(T,d,j),Ht(f,T,j),P(T,v,j),Ht(m,T,j),B=!0,A||(y=[ue(window,"keydown",Fa(n[8])),ue(a,"click",n[16])],A=!0)},p(T,[j]){x===(x=E(T))&&N?N.p(T,j):(N.d(1),N=x(T),N&&(N.c(),N.m(e,null)));const R={};j&67108896&&(R.$$scope={dirty:j,ctx:T}),!_&&j&1&&(_=!0,R.showModal=T[0],Zs(()=>_=!1)),f.$set(R);const Y={};j&67108864&&(Y.$$scope={dirty:j,ctx:T}),!b&&j&2&&(b=!0,Y.showModal=T[1],Zs(()=>b=!1)),m.$set(Y)},i(T){B||(be(u.$$.fragment,T),be(f.$$.fragment,T),be(m.$$.fragment,T),B=!0)},o(T){Te(u.$$.fragment,T),Te(f.$$.fragment,T),Te(m.$$.fragment,T),B=!1},d(T){T&&(C(e),C(d),C(v)),Vt(u),N.d(),Vt(f,T),Vt(m,T),A=!1,un(y)}}}function _r(n){return n.split("").sort(()=>Math.random()-.5).join("")}function w_(n,e,t){let s,i=!1,r=!1,o=[];o=o.map(g=>g.toLowerCase());let a,l=Array(8).fill(""),c=[],u,h=0,d=[0,4],f=1;Ra(async()=>{h_(Bc);const g=new Date,w={year:"numeric",month:"2-digit",day:"2-digit"},V=g.toLocaleDateString("en-US",w).replace(/\//g,"-");console.log("solutions/"+V);try{const T=await zd("solutions/"+V),j=Object.values(T);t(2,o=j),a=o[0],t(4,u=_r(a)),console.log("solutions:",o)}catch(T){console.error("Error fetching data from Firebase:",T)}});function _(g){const w=g.key.toLowerCase(),V=u.indexOf(w);g.keyCode===13?m():g.keyCode===8?A():V!==-1&&!s(V)&&v(w,V)}function v(g,w){h<l.length&&!s(w)&&(t(3,l[h]=g,l),h+=1,t(15,c=[...c,w]))}function m(){const g=l.join("");o.includes(g)?t(0,i=!0):(jt.default("Incorrect",1e3),t(5,f+=1))}function b(){t(3,l=Array(8).fill("")),h=0,t(15,c=[])}function B(){t(4,u=_r(a)),b()}function A(){h>0&&(t(3,l[h-1]="",l),h-=1,t(15,c=c.slice(0,-1)))}function y(){let g="";for(let V=0;V<f;V++)g+="🔴";let w="Completed the LetterLoop in "+f+` attempts 
`+g;navigator.clipboard.writeText(w).then(()=>{console.log("Text successfully copied to clipboard:",w),jt.default("Copied Text!",1e3)}).catch(V=>{console.error("Error copying text to clipboard:",V),jt.default("Error",1e3)})}const E=()=>t(1,r=!0),x=(g,w)=>v(g,w);function N(g){i=g,t(0,i)}function I(g){r=g,t(1,r)}return n.$$.update=()=>{n.$$.dirty&32768&&t(6,s=g=>c.includes(g))},[i,r,o,l,u,f,s,d,_,v,m,b,B,A,y,c,E,x,N,I]}class S_ extends os{constructor(e){super(),as(this,e,w_,C_,rs,{})}}export{S_ as component,T_ as universal};
