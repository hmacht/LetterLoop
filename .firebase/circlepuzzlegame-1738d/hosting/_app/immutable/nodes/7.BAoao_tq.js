import{s as Gt,n as he,d as Ft,f as nt,j as mt,r as Yn,o as ds}from"../chunks/scheduler.Dj2J5mG2.js";import{S as Kt,i as Jt,e as _,j as re,c as v,a as $,k as ae,d as h,p as S,b as m,f as T,m as xe,z as gt,s as P,v as Se,h as z,l as R,w as Ee,q as hs,x as Ae,A as oe,B as fs,t as Pe,g as Re,y as Ce,C as Xn,D as it,H as Qn,n as Je,E as Zn}from"../chunks/index.BbVivFmB.js";import{r as He,L as ei,g as ti,i as ps,b as ms,_ as Ye,C as Xe,c as Ze,d as gs,e as ni,f as ii,h as ct,j as Ue,E as lt,k as _s,l as si,m as ri,o as Q,F as ut,p as vs,q as dt,t as Is,u as ws,v as ys,w as Ts,x as bs,y as pn,z as ai,A as ks,B as mn,D as Ss,G as Es,I as As,T as Ps,M as $t,n as tt,J as We,K as Rs,S as Cs,H as Os,N as Ns,s as Ls,a as Ms}from"../chunks/Stats.CtENlZ8q.js";import{r as Ds,w as gn}from"../chunks/index.DHaQdJMq.js";const Us=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var Fs="firebase",$s="10.8.0";/**
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
 */He(Fs,$s,"app");function Yt(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function oi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xs=oi,ci=new lt("auth","Firebase",oi());/**
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
 */const Tt=new ei("@firebase/auth");function Vs(n,...e){Tt.logLevel<=ri.WARN&&Tt.warn(`Auth (${ct}): ${n}`,...e)}function vt(n,...e){Tt.logLevel<=ri.ERROR&&Tt.error(`Auth (${ct}): ${n}`,...e)}/**
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
 */function Ie(n,...e){throw Xt(n,...e)}function ue(n,...e){return Xt(n,...e)}function Hs(n,e,t){const i=Object.assign(Object.assign({},xs()),{[e]:t});return new lt("auth","Firebase",i).create(e,{appName:n.name})}function Xt(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ci.create(n,...e)}function E(n,e,...t){if(!n)throw Xt(e,...t)}function _e(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vt(e),new Error(e)}function we(n,e){n||_e(e)}/**
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
 */function zt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function js(){return _n()==="http:"||_n()==="https:"}function _n(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function qs(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(js()||ii()||"connection"in navigator)?navigator.onLine:!0}function zs(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ht{constructor(e,t){this.shortDelay=e,this.longDelay=t,we(t>e,"Short delay should be less than long delay!"),this.isMobile=ps()||ms()}get(){return qs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qt(n,e){we(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class li{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ws={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bs=new ht(3e4,6e4);function Ct(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function et(n,e,t,i,s={}){return ui(n,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const o=dt(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),li.fetch()(hi(n,n.config.apiHost,t,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function ui(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ws),e);try{const s=new Gs(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw _t(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _t(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw _t(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw _t(n,"user-disabled",a);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Hs(n,u,l);Ie(n,u)}}catch(s){if(s instanceof ut)throw s;Ie(n,"network-request-failed",{message:String(s)})}}async function di(n,e,t,i,s={}){const r=await et(n,e,t,i,s);return"mfaPendingCredential"in r&&Ie(n,"multi-factor-auth-required",{_serverResponse:r}),r}function hi(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Qt(n.config,s):`${n.config.apiScheme}://${s}`}class Gs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ue(this.auth,"network-request-failed")),Bs.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _t(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ue(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function Ks(n,e){return et(n,"POST","/v1/accounts:delete",e)}async function Js(n,e){return et(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function st(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ys(n,e=!1){const t=Ue(n),i=await t.getIdToken(e),s=Zt(i);E(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:st(xt(s.auth_time)),issuedAtTime:st(xt(s.iat)),expirationTime:st(xt(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xt(n){return Number(n)*1e3}function Zt(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return vt("JWT malformed, contained fewer than 3 sections"),null;try{const s=Is(t);return s?JSON.parse(s):(vt("Failed to decode base64 JWT payload"),null)}catch(s){return vt("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xs(n){const e=Zt(n);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function at(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ut&&Qs(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Qs({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Zs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=st(this.lastLoginAt),this.creationTime=st(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bt(n){var e;const t=n.auth,i=await n.getIdToken(),s=await at(n,Js(t,{idToken:i}));E(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?nr(r.providerUserInfo):[],o=tr(n.providerData,a),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new fi(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,p)}async function er(n){const e=Ue(n);await bt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tr(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function nr(n){return n.map(e=>{var{providerId:t}=e,i=Yt(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function ir(n,e){const t=await ui(n,{},async()=>{const i=dt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,a=hi(n,s,"/v1/token",`key=${r}`),o=await n._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",li.fetch()(a,{method:"POST",headers:o,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function sr(n,e){return et(n,"POST","/v2/accounts:revokeToken",Ct(n,e))}/**
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
 */class ot{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await ir(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,a=new ot;return i&&(E(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(E(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(E(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ot,this.toJSON())}_performRefresh(){return _e("not implemented")}}/**
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
 */function ke(n,e){E(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ve{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Yt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await at(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ys(this,e)}reload(){return er(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ve(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await bt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await at(this,Ks(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,a,o,c,l,u;const p=(i=t.displayName)!==null&&i!==void 0?i:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,A=(a=t.photoURL)!==null&&a!==void 0?a:void 0,F=(o=t.tenantId)!==null&&o!==void 0?o:void 0,N=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,M=(l=t.createdAt)!==null&&l!==void 0?l:void 0,V=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:j,isAnonymous:O,providerData:q,stsTokenManager:U}=t;E(H&&U,e,"internal-error");const w=ot.fromJSON(this.name,U);E(typeof H=="string",e,"internal-error"),ke(p,e.name),ke(g,e.name),E(typeof j=="boolean",e,"internal-error"),E(typeof O=="boolean",e,"internal-error"),ke(f,e.name),ke(A,e.name),ke(F,e.name),ke(N,e.name),ke(M,e.name),ke(V,e.name);const C=new Ve({uid:H,auth:e,email:g,emailVerified:j,displayName:p,isAnonymous:O,photoURL:A,phoneNumber:f,tenantId:F,stsTokenManager:w,createdAt:M,lastLoginAt:V});return q&&Array.isArray(q)&&(C.providerData=q.map(y=>Object.assign({},y))),N&&(C._redirectEventId=N),C}static async _fromIdTokenResponse(e,t,i=!1){const s=new ot;s.updateFromServerResponse(t);const r=new Ve({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await bt(r),r}}/**
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
 */const vn=new Map;function ve(n){we(n instanceof Function,"Expected a class definition");let e=vn.get(n);return e?(we(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vn.set(n,e),e)}/**
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
 */class pi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pi.type="NONE";const In=pi;/**
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
 */function It(n,e,t){return`firebase:${n}:${e}:${t}`}class Ge{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=It(this.userKey,s.apiKey,r),this.fullPersistenceKey=It("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ve._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ge(ve(In),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||ve(In);const a=It(i,e.config.apiKey,e.name);let o=null;for(const l of t)try{const u=await l._get(a);if(u){const p=Ve._fromJSON(e,u);l!==r&&(o=p),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ge(r,e,i):(r=c[0],o&&await r._set(a,o.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(a)}catch{}})),new Ge(r,e,i))}}/**
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
 */function wn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_i(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ii(e))return"Blackberry";if(wi(e))return"Webos";if(en(e))return"Safari";if((e.includes("chrome/")||gi(e))&&!e.includes("edge/"))return"Chrome";if(vi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function mi(n=Q()){return/firefox\//i.test(n)}function en(n=Q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gi(n=Q()){return/crios\//i.test(n)}function _i(n=Q()){return/iemobile/i.test(n)}function vi(n=Q()){return/android/i.test(n)}function Ii(n=Q()){return/blackberry/i.test(n)}function wi(n=Q()){return/webos/i.test(n)}function Ot(n=Q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rr(n=Q()){var e;return Ot(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ar(){return vs()&&document.documentMode===10}function yi(n=Q()){return Ot(n)||vi(n)||wi(n)||Ii(n)||/windows phone/i.test(n)||_i(n)}function or(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ti(n,e=[]){let t;switch(n){case"Browser":t=wn(Q());break;case"Worker":t=`${wn(Q())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ct}/${i}`}/**
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
 */class cr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((a,o)=>{try{const c=e(r);a(c)}catch(c){o(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function lr(n,e={}){return et(n,"GET","/v2/passwordPolicy",Ct(n,e))}/**
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
 */const ur=6;class dr{constructor(e){var t,i,s,r;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ur,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class hr{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yn(this),this.idTokenSubscription=new yn(this),this.beforeStateQueue=new cr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ci,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ve(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ge.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zs()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ue(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ve(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lr(this),t=new dr(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await sr(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ve(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await Ge.create(this,[ve(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(o,this,"internal-error"),o.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ti(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Vs(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Nt(n){return Ue(n)}class yn{constructor(e){this.auth=e,this.observer=null,this.addObserver=_s(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fr(n){tn=n}function pr(n){return tn.loadJS(n)}function mr(){return tn.gapiScript}function gr(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function _r(n,e){const t=Ze(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(si(r,e??{}))return s;Ie(s,"already-initialized")}return t.initialize({options:e})}function vr(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ve);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ir(n,e,t){const i=Nt(n);E(i._canInitEmulator,i,"emulator-config-failed"),E(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=bi(e),{host:a,port:o}=wr(e),c=o===null?"":`:${o}`;i.config.emulator={url:`${r}//${a}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||yr()}function bi(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function wr(n){const e=bi(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Tn(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:Tn(a)}}}function Tn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function yr(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ki{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _e("not implemented")}_getIdTokenResponse(e){return _e("not implemented")}_linkToIdToken(e,t){return _e("not implemented")}_getReauthenticationResolver(e){return _e("not implemented")}}/**
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
 */async function Ke(n,e){return di(n,"POST","/v1/accounts:signInWithIdp",Ct(n,e))}/**
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
 */const Tr="http://localhost";class je extends ki{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ie("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Yt(t,["providerId","signInMethod"]);if(!i||!s)return null;const a=new je(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ke(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ke(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ke(e,t)}buildRequest(){const e={requestUri:Tr,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dt(t)}return e}}/**
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
 */class Si{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ft extends Si{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Oe extends ft{constructor(){super("facebook.com")}static credential(e){return je._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Oe.PROVIDER_ID="facebook.com";/**
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
 */class Ne extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return je._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ne.credential(t,i)}catch{return null}}}Ne.GOOGLE_SIGN_IN_METHOD="google.com";Ne.PROVIDER_ID="google.com";/**
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
 */class Le extends ft{constructor(){super("github.com")}static credential(e){return je._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch{return null}}}Le.GITHUB_SIGN_IN_METHOD="github.com";Le.PROVIDER_ID="github.com";/**
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
 */class Me extends ft{constructor(){super("twitter.com")}static credential(e,t){return je._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Me.credential(t,i)}catch{return null}}}Me.TWITTER_SIGN_IN_METHOD="twitter.com";Me.PROVIDER_ID="twitter.com";/**
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
 */async function br(n,e){return di(n,"POST","/v1/accounts:signUp",Ct(n,e))}/**
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
 */class De{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Ve._fromIdTokenResponse(e,i,s),a=bn(i);return new De({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=bn(i);return new De({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function bn(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function kr(n){var e;const t=Nt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new De({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await br(t,{returnSecureToken:!0}),s=await De._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class kt extends ut{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,kt.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new kt(e,t,i,s)}}function Ei(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?kt._fromErrorAndOperation(n,r,e,i):r})}async function Sr(n,e,t=!1){const i=await at(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return De._forOperation(n,"link",i)}/**
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
 */async function Er(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await at(n,Ei(i,s,e,n),t);E(r.idToken,i,"internal-error");const a=Zt(r.idToken);E(a,i,"internal-error");const{sub:o}=a;return E(n.uid===o,i,"user-mismatch"),De._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ie(i,"user-mismatch"),r}}/**
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
 */async function Ar(n,e,t=!1){const i="signIn",s=await Ei(n,i,e),r=await De._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function Pr(n,e,t,i){return Ue(n).onIdTokenChanged(e,t,i)}function Rr(n,e,t){return Ue(n).beforeAuthStateChanged(e,t)}const St="__sak";/**
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
 */class Ai{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(St,"1"),this.storage.removeItem(St),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Cr(){const n=Q();return en(n)||Ot(n)}const Or=1e3,Nr=10;class Pi extends Ai{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cr()&&or(),this.fallbackToPolling=yi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);ar()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Nr):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Or)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pi.type="LOCAL";const Lr=Pi;/**
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
 */class Ri extends Ai{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ri.type="SESSION";const Ci=Ri;/**
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
 */function Mr(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Lt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Lt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const o=Array.from(a).map(async l=>l(t.origin,r)),c=await Mr(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lt.receivers=[];/**
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
 */function nn(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Dr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((o,c)=>{const l=nn("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(g.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function de(){return window}function Ur(n){de().location.href=n}/**
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
 */function Oi(){return typeof de().WorkerGlobalScope<"u"&&typeof de().importScripts=="function"}async function Fr(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $r(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function xr(){return Oi()?self:null}/**
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
 */const Ni="firebaseLocalStorageDb",Vr=1,Et="firebaseLocalStorage",Li="fbase_key";class pt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mt(n,e){return n.transaction([Et],e?"readwrite":"readonly").objectStore(Et)}function Hr(){const n=indexedDB.deleteDatabase(Ni);return new pt(n).toPromise()}function Wt(){const n=indexedDB.open(Ni,Vr);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Et,{keyPath:Li})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Et)?e(i):(i.close(),await Hr(),e(await Wt()))})})}async function kn(n,e,t){const i=Mt(n,!0).put({[Li]:e,value:t});return new pt(i).toPromise()}async function jr(n,e){const t=Mt(n,!1).get(e),i=await new pt(t).toPromise();return i===void 0?null:i.value}function Sn(n,e){const t=Mt(n,!0).delete(e);return new pt(t).toPromise()}const qr=800,zr=3;class Mi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>zr)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lt._getInstance(xr()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Fr(),!this.activeServiceWorker)return;this.sender=new Dr(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$r()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wt();return await kn(e,St,"1"),await Sn(e,St),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>kn(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>jr(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Mt(s,!1).getAll();return new pt(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mi.type="LOCAL";const Wr=Mi;new ht(3e4,6e4);/**
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
 */function Br(n,e){return e?ve(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class sn extends ki{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ke(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ke(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ke(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Gr(n){return Ar(n.auth,new sn(n),n.bypassAuthState)}function Kr(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Er(t,new sn(n),n.bypassAuthState)}async function Jr(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Sr(t,new sn(n),n.bypassAuthState)}/**
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
 */class Di{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gr;case"linkViaPopup":case"linkViaRedirect":return Jr;case"reauthViaPopup":case"reauthViaRedirect":return Kr;default:Ie(this.auth,"internal-error")}}resolve(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yr=new ht(2e3,1e4);class Be extends Di{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Be.currentPopupAction&&Be.currentPopupAction.cancel(),Be.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){we(this.filter.length===1,"Popup operations only handle one event");const e=nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Be.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yr.get())};e()}}Be.currentPopupAction=null;/**
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
 */const Xr="pendingRedirect",wt=new Map;class Qr extends Di{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=wt.get(this.auth._key());if(!e){try{const i=await Zr(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}wt.set(this.auth._key(),e)}return this.bypassAuthState||wt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zr(n,e){const t=na(e),i=ta(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function ea(n,e){wt.set(n._key(),e)}function ta(n){return ve(n._redirectPersistence)}function na(n){return It(Xr,n.config.apiKey,n.name)}async function ia(n,e,t=!1){const i=Nt(n),s=Br(i,e),a=await new Qr(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
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
 */const sa=10*60*1e3;class ra{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aa(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ui(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ue(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sa&&this.cachedEventUids.clear(),this.cachedEventUids.has(En(e))}saveEventToCache(e){this.cachedEventUids.add(En(e)),this.lastProcessedEventTime=Date.now()}}function En(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ui({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aa(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ui(n);default:return!1}}/**
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
 */async function oa(n,e={}){return et(n,"GET","/v1/projects",e)}/**
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
 */const ca=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,la=/^https?/;async function ua(n){if(n.config.emulator)return;const{authorizedDomains:e}=await oa(n);for(const t of e)try{if(da(t))return}catch{}Ie(n,"unauthorized-domain")}function da(n){const e=zt(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!la.test(t))return!1;if(ca.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const ha=new ht(3e4,6e4);function An(){const n=de().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function fa(n){return new Promise((e,t)=>{var i,s,r;function a(){An(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{An(),t(ue(n,"network-request-failed"))},timeout:ha.get()})}if(!((s=(i=de().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=de().gapi)===null||r===void 0)&&r.load)a();else{const o=gr("iframefcb");return de()[o]=()=>{gapi.load?a():t(ue(n,"network-request-failed"))},pr(`${mr()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw yt=null,e})}let yt=null;function pa(n){return yt=yt||fa(n),yt}/**
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
 */const ma=new ht(5e3,15e3),ga="__/auth/iframe",_a="emulator/auth/iframe",va={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ia=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wa(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qt(e,_a):`https://${n.config.authDomain}/${ga}`,i={apiKey:e.apiKey,appName:n.name,v:ct},s=Ia.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${dt(i).slice(1)}`}async function ya(n){const e=await pa(n),t=de().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:wa(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:va,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=ue(n,"network-request-failed"),o=de().setTimeout(()=>{r(a)},ma.get());function c(){de().clearTimeout(o),s(i)}i.ping(c).then(c,()=>{r(a)})}))}/**
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
 */const Ta={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ba=500,ka=600,Sa="_blank",Ea="http://localhost";class Pn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Aa(n,e,t,i=ba,s=ka){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const c=Object.assign(Object.assign({},Ta),{width:i.toString(),height:s.toString(),top:r,left:a}),l=Q().toLowerCase();t&&(o=gi(l)?Sa:t),mi(l)&&(e=e||Ea,c.scrollbars="yes");const u=Object.entries(c).reduce((g,[f,A])=>`${g}${f}=${A},`,"");if(rr(l)&&o!=="_self")return Pa(e||"",o),new Pn(null);const p=window.open(e||"",o,u);E(p,n,"popup-blocked");try{p.focus()}catch{}return new Pn(p)}function Pa(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Ra="__/auth/handler",Ca="emulator/auth/handler",Oa=encodeURIComponent("fac");async function Rn(n,e,t,i,s,r){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ct,eventId:s};if(e instanceof Si){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ws(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries(r||{}))a[u]=p}if(e instanceof ft){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(a.scopes=u.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await n._getAppCheckToken(),l=c?`#${Oa}=${encodeURIComponent(c)}`:"";return`${Na(n)}?${dt(o).slice(1)}${l}`}function Na({config:n}){return n.emulator?Qt(n,Ca):`https://${n.authDomain}/${Ra}`}/**
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
 */const Vt="webStorageSupport";class La{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ci,this._completeRedirectFn=ia,this._overrideRedirectResult=ea}async _openPopup(e,t,i,s){var r;we((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await Rn(e,t,i,zt(),s);return Aa(e,a,nn())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Rn(e,t,i,zt(),s);return Ur(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(we(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await ya(e),i=new ra(e);return t.register("authEvent",s=>(E(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vt,{type:Vt},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Vt];a!==void 0&&t(!!a),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ua(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yi()||en()||Ot()}}const Ma=La;var Cn="@firebase/auth",On="1.6.0";/**
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
 */class Da{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ua(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fa(n){Ye(new Xe("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=i.options;E(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ti(n)},l=new hr(i,s,r,c);return vr(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ye(new Xe("auth-internal",e=>{const t=Nt(e.getProvider("auth").getImmediate());return(i=>new Da(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Cn,On,Ua(n)),He(Cn,On,"esm2017")}/**
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
 */const $a=5*60,xa=ti("authIdTokenMaxAge")||$a;let Nn=null;const Va=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>xa)return;const s=t==null?void 0:t.token;Nn!==s&&(Nn=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ha(n=ni()){const e=Ze(n,"auth");if(e.isInitialized())return e.getImmediate();const t=_r(n,{popupRedirectResolver:Ma,persistence:[Wr,Lr,Ci]}),i=ti("authTokenSyncURL");if(i){const r=Va(i);Rr(t,r,()=>r(t.currentUser)),Pr(t,a=>r(a))}const s=gs("auth");return s&&Ir(t,`http://${s}`),t}function ja(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}fr({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ue("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",ja().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fa("Browser");const qa={apiKey:"AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",authDomain:"circlepuzzlegame-1738d.firebaseapp.com",projectId:"circlepuzzlegame-1738d",storageBucket:"circlepuzzlegame-1738d.appspot.com",messagingSenderId:"62490740969",appId:"1:62490740969:web:719c6ea78f8148089f4878",measurementId:"G-EEEKPPSEN9"},Fi=ys(qa),za=Ha(Fi);async function Wa(){return new Promise((n,e)=>{kr(za).then(()=>{n(!0)}).catch(t=>{t.code;var i=t.message;console.error("Failed to sign in anonymously:",i),n(!1)})})}async function Ba(n){const e=Ts(),t=bs(e,"Stats/"+$i()),i=await Ga();if(i==="NOREF")return pn(t,{averageTime:n,minTime:n,count:1}),{averageTime:n,minTime:n,count:1,isUnderAverage:!0,isHighScore:!0};{const s=i.averageTime,r=i.minTime,a=i.count,o=Ja(s,a,n),c=Ya(n,r),l=a+1;return pn(t,{averageTime:o,minTime:c,count:l}),{averageTime:s,minTime:c,count:l,isUnderAverage:Ln(n,s),isHighScore:Ln(n,r)}}}function $i(){const n=new Date,e={year:"numeric",month:"2-digit",day:"2-digit"};return n.toLocaleDateString("en-US",e).replace(/\//g,"-")}async function Ga(){try{return await ai("Stats/"+$i())}catch{return null}}function Qe(n){const[e,t,i]=n.split(":").map(Number);return e*3600+t*60+i}function Ka(n){const e=Math.floor(n/3600),t=Math.floor(n%3600/60),i=Math.round(n%60);return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}function Ja(n,e,t){const i=Qe(n),s=Qe(t),r=(i*e+s)/(e+1);return Ka(r)}function Ya(n,e){const t=Qe(n),i=Qe(e);return t<i?n:e}function Ln(n,e){const t=Qe(n),i=Qe(e);return t<i}const xi="@firebase/installations",rn="0.6.5";/**
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
 */const Vi=1e4,Hi=`w:${rn}`,ji="FIS_v2",Xa="https://firebaseinstallations.googleapis.com/v1",Qa=60*60*1e3,Za="installations",eo="Installations";/**
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
 */const to={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qe=new lt(Za,eo,to);function qi(n){return n instanceof ut&&n.code.includes("request-failed")}/**
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
 */function zi({projectId:n}){return`${Xa}/projects/${n}/installations`}function Wi(n){return{token:n.token,requestStatus:2,expiresIn:io(n.expiresIn),creationTime:Date.now()}}async function Bi(n,e){const i=(await e.json()).error;return qe.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Gi({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function no(n,{refreshToken:e}){const t=Gi(n);return t.append("Authorization",so(e)),t}async function Ki(n){const e=await n();return e.status>=500&&e.status<600?n():e}function io(n){return Number(n.replace("s","000"))}function so(n){return`${ji} ${n}`}/**
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
 */async function ro({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=zi(n),s=Gi(n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={fid:t,authVersion:ji,appId:n.appId,sdkVersion:Hi},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await Ki(()=>fetch(i,o));if(c.ok){const l=await c.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:Wi(l.authToken)}}else throw await Bi("Create Installation",c)}/**
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
 */function Ji(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function ao(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oo=/^[cdef][\w-]{21}$/,Bt="";function co(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=lo(n);return oo.test(t)?t:Bt}catch{return Bt}}function lo(n){return ao(n).substr(0,22)}/**
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
 */function Dt(n){return`${n.appName}!${n.appId}`}/**
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
 */const Yi=new Map;function Xi(n,e){const t=Dt(n);Qi(t,e),uo(t,e)}function Qi(n,e){const t=Yi.get(n);if(t)for(const i of t)i(e)}function uo(n,e){const t=ho();t&&t.postMessage({key:n,fid:e}),fo()}let $e=null;function ho(){return!$e&&"BroadcastChannel"in self&&($e=new BroadcastChannel("[Firebase] FID Change"),$e.onmessage=n=>{Qi(n.data.key,n.data.fid)}),$e}function fo(){Yi.size===0&&$e&&($e.close(),$e=null)}/**
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
 */const po="firebase-installations-database",mo=1,ze="firebase-installations-store";let Ht=null;function an(){return Ht||(Ht=ks(po,mo,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ze)}}})),Ht}async function At(n,e){const t=Dt(n),s=(await an()).transaction(ze,"readwrite"),r=s.objectStore(ze),a=await r.get(t);return await r.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Xi(n,e.fid),e}async function Zi(n){const e=Dt(n),i=(await an()).transaction(ze,"readwrite");await i.objectStore(ze).delete(e),await i.done}async function Ut(n,e){const t=Dt(n),s=(await an()).transaction(ze,"readwrite"),r=s.objectStore(ze),a=await r.get(t),o=e(a);return o===void 0?await r.delete(t):await r.put(o,t),await s.done,o&&(!a||a.fid!==o.fid)&&Xi(n,o.fid),o}/**
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
 */async function on(n){let e;const t=await Ut(n.appConfig,i=>{const s=go(i),r=_o(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===Bt?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function go(n){const e=n||{fid:co(),registrationStatus:0};return es(e)}function _o(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(qe.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=vo(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Io(n)}:{installationEntry:e}}async function vo(n,e){try{const t=await ro(n,e);return At(n.appConfig,t)}catch(t){throw qi(t)&&t.customData.serverCode===409?await Zi(n.appConfig):await At(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Io(n){let e=await Mn(n.appConfig);for(;e.registrationStatus===1;)await Ji(100),e=await Mn(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await on(n);return i||t}return e}function Mn(n){return Ut(n,e=>{if(!e)throw qe.create("installation-not-found");return es(e)})}function es(n){return wo(n)?{fid:n.fid,registrationStatus:0}:n}function wo(n){return n.registrationStatus===1&&n.registrationTime+Vi<Date.now()}/**
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
 */async function yo({appConfig:n,heartbeatServiceProvider:e},t){const i=To(n,t),s=no(n,t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={installation:{sdkVersion:Hi,appId:n.appId}},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await Ki(()=>fetch(i,o));if(c.ok){const l=await c.json();return Wi(l)}else throw await Bi("Generate Auth Token",c)}function To(n,{fid:e}){return`${zi(n)}/${e}/authTokens:generate`}/**
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
 */async function cn(n,e=!1){let t;const i=await Ut(n.appConfig,r=>{if(!ts(r))throw qe.create("not-registered");const a=r.authToken;if(!e&&So(a))return r;if(a.requestStatus===1)return t=bo(n,e),r;{if(!navigator.onLine)throw qe.create("app-offline");const o=Ao(r);return t=ko(n,o),o}});return t?await t:i.authToken}async function bo(n,e){let t=await Dn(n.appConfig);for(;t.authToken.requestStatus===1;)await Ji(100),t=await Dn(n.appConfig);const i=t.authToken;return i.requestStatus===0?cn(n,e):i}function Dn(n){return Ut(n,e=>{if(!ts(e))throw qe.create("not-registered");const t=e.authToken;return Po(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ko(n,e){try{const t=await yo(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await At(n.appConfig,i),t}catch(t){if(qi(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Zi(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await At(n.appConfig,i)}throw t}}function ts(n){return n!==void 0&&n.registrationStatus===2}function So(n){return n.requestStatus===2&&!Eo(n)}function Eo(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Qa}function Ao(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Po(n){return n.requestStatus===1&&n.requestTime+Vi<Date.now()}/**
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
 */async function Ro(n){const e=n,{installationEntry:t,registrationPromise:i}=await on(e);return i?i.catch(console.error):cn(e).catch(console.error),t.fid}/**
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
 */async function Co(n,e=!1){const t=n;return await Oo(t),(await cn(t,e)).token}async function Oo(n){const{registrationPromise:e}=await on(n);e&&await e}/**
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
 */function No(n){if(!n||!n.options)throw jt("App Configuration");if(!n.name)throw jt("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw jt(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function jt(n){return qe.create("missing-app-config-values",{valueName:n})}/**
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
 */const ns="installations",Lo="installations-internal",Mo=n=>{const e=n.getProvider("app").getImmediate(),t=No(e),i=Ze(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Do=n=>{const e=n.getProvider("app").getImmediate(),t=Ze(e,ns).getImmediate();return{getId:()=>Ro(t),getToken:s=>Co(t,s)}};function Uo(){Ye(new Xe(ns,Mo,"PUBLIC")),Ye(new Xe(Lo,Do,"PRIVATE"))}Uo();He(xi,rn);He(xi,rn,"esm2017");/**
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
 */const Pt="analytics",Fo="firebase_id",$o="origin",xo=60*1e3,Vo="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ln="https://www.googletagmanager.com/gtag/js";/**
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
 */const X=new ei("@firebase/analytics");/**
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
 */const Ho={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},te=new lt("analytics","Analytics",Ho);/**
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
 */function jo(n){if(!n.startsWith(ln)){const e=te.create("invalid-gtag-resource",{gtagURL:n});return X.warn(e.message),""}return n}function is(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function qo(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function zo(n,e){const t=qo("firebase-js-sdk-policy",{createScriptURL:jo}),i=document.createElement("script"),s=`${ln}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Wo(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Bo(n,e,t,i,s,r){const a=i[s];try{if(a)await e[a];else{const c=(await is(t)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(o){X.error(o)}n("config",s,r)}async function Go(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const o=await is(t);for(const c of a){const l=o.find(p=>p.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){X.error(r)}}function Ko(n,e,t,i){async function s(r,...a){try{if(r==="event"){const[o,c]=a;await Go(n,e,t,o,c)}else if(r==="config"){const[o,c]=a;await Bo(n,e,t,i,o,c)}else if(r==="consent"){const[o]=a;n("consent","update",o)}else if(r==="get"){const[o,c,l]=a;n("get",o,c,l)}else if(r==="set"){const[o]=a;n("set",o)}else n(r,...a)}catch(o){X.error(o)}}return s}function Jo(n,e,t,i,s){let r=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Ko(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function Yo(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ln)&&t.src.includes(n))return t;return null}/**
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
 */const Xo=30,Qo=1e3;class Zo{constructor(e={},t=Qo){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ss=new Zo;function ec(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function tc(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:ec(i)},r=Vo.replace("{app-id}",t),a=await fetch(r,s);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(o=c.error.message)}catch{}throw te.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function nc(n,e=ss,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw te.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw te.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new rc;return setTimeout(async()=>{o.abort()},t!==void 0?t:xo),rs({appId:i,apiKey:s,measurementId:r},a,o,e)}async function rs(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=ss){var r;const{appId:a,measurementId:o}=n;try{await ic(i,e)}catch(c){if(o)return X.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:o};throw c}try{const c=await tc(n);return s.deleteThrottleMetadata(a),c}catch(c){const l=c;if(!sc(l)){if(s.deleteThrottleMetadata(a),o)return X.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:o};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?mn(t,s.intervalMillis,Xo):mn(t,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return s.setThrottleMetadata(a,p),X.debug(`Calling attemptFetch again in ${u} millis`),rs(n,p,i,s)}}function ic(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(te.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sc(n){if(!(n instanceof ut)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class rc{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ac(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,a=Object.assign(Object.assign({},i),{send_to:r});n("event",t,a)}}/**
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
 */async function oc(){if(Ss())try{await Es()}catch(n){return X.warn(te.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return X.warn(te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cc(n,e,t,i,s,r,a){var o;const c=nc(n);c.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&X.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>X.error(f)),e.push(c);const l=oc().then(f=>{if(f)return i.getId()}),[u,p]=await Promise.all([c,l]);Yo(r)||zo(r,u.measurementId),s("js",new Date);const g=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return g[$o]="firebase",g.update=!0,p!=null&&(g[Fo]=p),s("config",u.measurementId,g),u.measurementId}/**
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
 */class lc{constructor(e){this.app=e}_delete(){return delete rt[this.app.options.appId],Promise.resolve()}}let rt={},Un=[];const Fn={};let qt="dataLayer",uc="gtag",$n,as,xn=!1;function dc(){const n=[];if(ii()&&n.push("This is a browser extension environment."),As()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=te.create("invalid-analytics-context",{errorInfo:e});X.warn(t.message)}}function hc(n,e,t){dc();const i=n.options.appId;if(!i)throw te.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)X.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw te.create("no-api-key");if(rt[i]!=null)throw te.create("already-exists",{id:i});if(!xn){Wo(qt);const{wrappedGtag:r,gtagCore:a}=Jo(rt,Un,Fn,qt,uc);as=r,$n=a,xn=!0}return rt[i]=cc(n,Un,Fn,e,$n,qt,t),new lc(n)}function fc(n=ni()){n=Ue(n);const e=Ze(n,Pt);return e.isInitialized()?e.getImmediate():pc(n)}function pc(n,e={}){const t=Ze(n,Pt);if(t.isInitialized()){const s=t.getImmediate();if(si(e,t.getOptions()))return s;throw te.create("already-initialized")}return t.initialize({options:e})}function os(n,e,t,i){n=Ue(n),ac(as,rt[n.app.options.appId],e,t,i).catch(s=>X.error(s))}const Vn="@firebase/analytics",Hn="0.10.1";function mc(){Ye(new Xe(Pt,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return hc(i,s,t)},"PUBLIC")),Ye(new Xe("analytics-internal",n,"PRIVATE")),He(Vn,Hn),He(Vn,Hn,"esm2017");function n(e){try{const t=e.getProvider(Pt).getImmediate();return{logEvent:(i,s,r)=>os(t,i,s,r)}}catch(t){throw te.create("interop-component-reg-failed",{reason:t})}}}mc();function gc(n){let e,t,i=ge(n[2])+"",s,r,a,o=ge(n[1])+"",c,l,u,p=ge(n[0])+"",g;return{c(){e=_("span"),t=_("span"),s=re(i),r=re(":"),a=_("span"),c=re(o),l=re(":"),u=_("span"),g=re(p),this.h()},l(f){e=v(f,"SPAN",{class:!0});var A=$(e);t=v(A,"SPAN",{class:!0});var F=$(t);s=ae(F,i),F.forEach(h),r=ae(A,":"),a=v(A,"SPAN",{class:!0});var N=$(a);c=ae(N,o),N.forEach(h),l=ae(A,":"),u=v(A,"SPAN",{class:!0});var M=$(u);g=ae(M,p),M.forEach(h),A.forEach(h),this.h()},h(){S(t,"class","value"),S(a,"class","value"),S(u,"class","value"),S(e,"class","timer svelte-1y1osaq")},m(f,A){m(f,e,A),T(e,t),T(t,s),T(e,r),T(e,a),T(a,c),T(e,l),T(e,u),T(u,g)},p(f,[A]){A&4&&i!==(i=ge(f[2])+"")&&xe(s,i),A&2&&o!==(o=ge(f[1])+"")&&xe(c,o),A&1&&p!==(p=ge(f[0])+"")&&xe(g,p)},i:he,o:he,d(f){f&&h(e)}}}function ge(n){return n<10?`0${n}`:n.toString()}function _c(n,e,t){let i,s,r,a,o,c,{elapsedSeconds:l}=e,u=Date.now(),p=gn(!1);Ft(n,p,M=>t(12,a=M));let g=gn(0);Ft(n,g,M=>t(13,o=M));const f=Ds(0,function(V){const j=setInterval(()=>{a&&(g.set(Math.round((Date.now()-u)/1e3)),V(o))},1e3);return function(){clearInterval(j)}});Ft(n,f,M=>t(10,c=M));function A(){a||(u=Date.now()-o*1e3,p.set(!0))}function F(){a&&p.set(!1)}function N(){F(),u=Date.now(),g.set(0)}return n.$$set=M=>{"elapsedSeconds"in M&&t(6,l=M.elapsedSeconds)},n.$$.update=()=>{n.$$.dirty&1024&&t(2,i=Math.floor(c/3600)),n.$$.dirty&1028&&t(1,s=Math.floor((c-i*3600)/60)),n.$$.dirty&1030&&t(0,r=c-i*3600-s*60),n.$$.dirty&7&&t(6,l=ge(i)+":"+ge(s)+":"+ge(r))},[r,s,i,p,g,f,l,A,F,N,c]}class vc extends Kt{constructor(e){super(),Jt(this,e,_c,gc,Gt,{elapsedSeconds:6,start:7,stop:8,reset:9})}get start(){return this.$$.ctx[7]}get stop(){return this.$$.ctx[8]}get reset(){return this.$$.ctx[9]}}const{window:Ic}=Us;function jn(n,e,t){const i=n.slice();return i[36]=e[t],i}function qn(n,e,t){const i=n.slice();return i[39]=e[t],i[41]=t,i}function zn(n,e,t){const i=n.slice();return i[39]=e[t],i[41]=t,i}function wc(n){let e,t="Loading Game...";return{c(){e=_("p"),e.textContent=t},l(i){e=v(i,"P",{"data-svelte-h":!0}),z(e)!=="svelte-kk77ic"&&(e.textContent=t)},m(i,s){m(i,e,s)},p:he,d(i){i&&h(e)}}}function yc(n){let e,t,i,s=[],r=new Map,a,o,c='<i class="fa-solid fa-eraser"></i>',l,u,p='<i class="fa-solid fa-shuffle"></i>',g,f,A='<i class="fa-solid fa-delete-left"></i>',F,N,M="Enter",V,H,j=We(n[4]),O=[];for(let w=0;w<j.length;w+=1)O[w]=Wn(zn(n,j,w));let q=We(n[5]);const U=w=>w[41];for(let w=0;w<q.length;w+=1){let C=qn(n,q,w),y=U(C);r.set(y,s[w]=Bn(y,C))}return{c(){e=_("div");for(let w=0;w<O.length;w+=1)O[w].c();t=P(),i=_("div");for(let w=0;w<s.length;w+=1)s[w].c();a=P(),o=_("div"),o.innerHTML=c,l=P(),u=_("div"),u.innerHTML=p,g=P(),f=_("div"),f.innerHTML=A,F=P(),N=_("div"),N.textContent=M,this.h()},l(w){e=v(w,"DIV",{class:!0});var C=$(e);for(let W=0;W<O.length;W+=1)O[W].l(C);C.forEach(h),t=R(w),i=v(w,"DIV",{class:!0});var y=$(i);for(let W=0;W<s.length;W+=1)s[W].l(y);a=R(y),o=v(y,"DIV",{class:!0,"data-svelte-h":!0}),z(o)!=="svelte-pcdrzy"&&(o.innerHTML=c),l=R(y),u=v(y,"DIV",{class:!0,"data-svelte-h":!0}),z(u)!=="svelte-1nazuqy"&&(u.innerHTML=p),g=R(y),f=v(y,"DIV",{class:!0,"data-svelte-h":!0}),z(f)!=="svelte-1lzlrm1"&&(f.innerHTML=A),F=R(y),N=v(y,"DIV",{class:!0,"data-svelte-h":!0}),z(N)!=="svelte-10umx21"&&(N.textContent=M),y.forEach(h),this.h()},h(){S(e,"class","circle-container"),S(o,"class","key"),S(u,"class","key"),S(f,"class","key"),S(N,"class","key enter-key"),S(i,"class","keyboard")},m(w,C){m(w,e,C);for(let y=0;y<O.length;y+=1)O[y]&&O[y].m(e,null);m(w,t,C),m(w,i,C);for(let y=0;y<s.length;y+=1)s[y]&&s[y].m(i,null);T(i,a),T(i,o),T(i,l),T(i,u),T(i,g),T(i,f),T(i,F),T(i,N),V||(H=[oe(o,"click",n[17]),oe(u,"click",n[18]),oe(f,"click",n[19]),oe(N,"click",n[15])],V=!0)},p(w,C){if(C[0]&4112){j=We(w[4]);let y;for(y=0;y<j.length;y+=1){const W=zn(w,j,y);O[y]?O[y].p(W,C):(O[y]=Wn(W),O[y].c(),O[y].m(e,null))}for(;y<O.length;y+=1)O[y].d(1);O.length=j.length}C[0]&18464&&(q=We(w[5]),s=Rs(s,C,U,1,w,q,r,i,Ns,Bn,a,qn))},d(w){w&&(h(e),h(t),h(i)),Xn(O,w);for(let C=0;C<s.length;C+=1)s[C].d();V=!1,Yn(H)}}}function Wn(n){let e,t=(n[39]==""?"":n[39])+"",i,s,r;return{c(){e=_("div"),i=re(t),s=P(),this.h()},l(a){e=v(a,"DIV",{class:!0,style:!0});var o=$(e);i=ae(o,t),s=R(o),o.forEach(h),this.h()},h(){S(e,"class","circle"),S(e,"style",r=`
              left: calc(38% + ${Math.cos(n[41]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(n[41]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
          `),it(e,"filled",n[39]!=""),it(e,"shared",n[12].includes(n[41]))},m(a,o){m(a,e,o),T(e,i),T(e,s)},p(a,o){o[0]&16&&t!==(t=(a[39]==""?"":a[39])+"")&&xe(i,t),o[0]&16&&r!==(r=`
              left: calc(38% + ${Math.cos(a[41]/a[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(a[41]/a[4].length*2*Math.PI-Math.PI/2)*100}px);
          `)&&S(e,"style",r),o[0]&16&&it(e,"filled",a[39]!="")},d(a){a&&h(e)}}}function Bn(n,e){let t,i=e[39]+"",s,r,a,o;function c(){return e[27](e[39],e[41])}return{key:n,first:null,c(){t=_("div"),s=re(i),r=P(),this.h()},l(l){t=v(l,"DIV",{class:!0});var u=$(t);s=ae(u,i),r=R(u),u.forEach(h),this.h()},h(){S(t,"class","key"),it(t,"disabled",e[11](e[41])),this.first=t},m(l,u){m(l,t,u),T(t,s),T(t,r),a||(o=oe(t,"click",c),a=!0)},p(l,u){e=l,u[0]&32&&i!==(i=e[39]+"")&&xe(s,i),u[0]&2080&&it(t,"disabled",e[11](e[41]))},d(l){l&&h(t),a=!1,o()}}}function Tc(n){let e,t="Solved in",i,s,r,a,o;return{c(){e=_("p"),e.textContent=t,i=P(),s=_("p"),r=re(n[7]),a=P(),o=_("hr"),this.h()},l(c){e=v(c,"P",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1do05u2"&&(e.textContent=t),i=R(c),s=v(c,"P",{class:!0});var l=$(s);r=ae(l,n[7]),l.forEach(h),a=R(c),o=v(c,"HR",{}),this.h()},h(){S(e,"class","small-header"),S(s,"class","large-header")},m(c,l){m(c,e,l),m(c,i,l),m(c,s,l),T(s,r),m(c,a,l),m(c,o,l)},p(c,l){l[0]&128&&xe(r,c[7])},d(c){c&&(h(e),h(i),h(s),h(a),h(o))}}}function bc(n){let e,t="🥺 Gave Up 🥺";return{c(){e=_("p"),e.textContent=t,this.h()},l(i){e=v(i,"P",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-ky6e98"&&(e.textContent=t),this.h()},h(){S(e,"class","large-header")},m(i,s){m(i,e,s)},p:he,d(i){i&&h(e)}}}function kc(n){let e;return{c(){e=re("Loading Solutions...")},l(t){e=ae(t,"Loading Solutions...")},m(t,i){m(t,e,i)},p:he,d(t){t&&h(e)}}}function Sc(n){let e,t=Rt(n[3][0])+"",i;return{c(){e=new Qn(!1),i=Je(),this.h()},l(s){e=Zn(s,!1),i=Je(),this.h()},h(){e.a=i},m(s,r){e.m(t,s,r),m(s,i,r)},p(s,r){r[0]&8&&t!==(t=Rt(s[3][0])+"")&&e.p(t)},d(s){s&&(h(i),e.d())}}}function Ec(n){let e,t=We(n[3]),i=[];for(let s=0;s<t.length;s+=1)i[s]=Gn(jn(n,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=Je()},l(s){for(let r=0;r<i.length;r+=1)i[r].l(s);e=Je()},m(s,r){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(s,r);m(s,e,r)},p(s,r){if(r[0]&8){t=We(s[3]);let a;for(a=0;a<t.length;a+=1){const o=jn(s,t,a);i[a]?i[a].p(o,r):(i[a]=Gn(o),i[a].c(),i[a].m(e.parentNode,e))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},d(s){s&&h(e),Xn(i,s)}}}function Gn(n){let e,t=Rt(n[36])+"",i;return{c(){e=new Qn(!1),i=Je(),this.h()},l(s){e=Zn(s,!1),i=Je(),this.h()},h(){e.a=i},m(s,r){e.m(t,s,r),m(s,i,r)},p(s,r){r[0]&8&&t!==(t=Rt(s[36])+"")&&e.p(t)},d(s){s&&(h(i),e.d())}}}function Kn(n){let e,t;function i(a,o){return a[9]&&a[9].isHighScore?Rc:a[9]&&a[9].isUnderAverage?Pc:Ac}let s=i(n),r=s(n);return{c(){r.c(),e=P(),t=_("hr")},l(a){r.l(a),e=R(a),t=v(a,"HR",{})},m(a,o){r.m(a,o),m(a,e,o),m(a,t,o)},p(a,o){s!==(s=i(a))&&(r.d(1),r=s(a),r&&(r.c(),r.m(e.parentNode,e)))},d(a){a&&(h(e),h(t)),r.d(a)}}}function Ac(n){let e,t='<span style="font-size:30px;padding-right:5px;">🥉</span> <div><p class="small-modal-text">Oooof.</p> <p class="small-modal-text">You&#39;re over today&#39;s average - try for gold tomorrow</p></div>';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=v(i,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1bsic53"&&(e.innerHTML=t),this.h()},h(){S(e,"class","flex-container")},m(i,s){m(i,e,s)},d(i){i&&h(e)}}}function Pc(n){let e,t='<span style="font-size:30px;padding-right:5px;">🥇</span> <div><p class="small-modal-text">Congratulations speedster.</p> <p class="small-modal-text">You&#39;re under today&#39;s average - very clever.</p></div>';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=v(i,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-u6zpu5"&&(e.innerHTML=t),this.h()},h(){S(e,"class","flex-container")},m(i,s){m(i,e,s)},d(i){i&&h(e)}}}function Rc(n){let e,t='<span style="font-size:30px;padding-right:5px;">🙀</span> <div><p class="small-modal-text">New High Score!</p> <p class="small-modal-text">You&#39;re officialy the fastest looper today!</p></div>';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=v(i,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-17gyjv0"&&(e.innerHTML=t),this.h()},h(){S(e,"class","flex-container")},m(i,s){m(i,e,s)},d(i){i&&h(e)}}}function Cc(n){let e,t=`<script type="text/javascript">aiptag.cmd.display.push(function() { aipDisplayTag.display('XXXXX_placement'); });<\/script>`,i,s,r,a="Global Stats",o,c,l,u,p,g,f,A,F="Solutions",N,M,V,H,j,O,q,U,w,C,y,W="Share",Z,ce,le,ne,G,ee,fe=`<a href="https://ko-fi.com/letterloop" target="_blank"><img class="shirt-ad large-screen svelte-1tu46dl" src="${Ls}" alt="LetterLoop Merch"/></a> <a href="https://ko-fi.com/letterloop" target="_blank"><img class="shirt-ad mobile-screen svelte-1tu46dl" src="${Ms}" alt="LetterLoop Merch"/></a>`,K,pe,me;function b(d,k){return d[10]?bc:Tc}let x=b(n),D=x(n);u=new Cs({props:{globalStats:n[9]}});function ye(d,k){return d[3]&&d[3].length>2?Ec:d[3]&&d[3].length>0?Sc:kc}let ie=ye(n),J=ie(n),B=n[10]==!1&&Kn(n);return{c(){e=_("div"),e.innerHTML=t,i=P(),D.c(),s=P(),r=_("span"),r.textContent=a,o=P(),c=_("br"),l=P(),Se(u.$$.fragment),p=P(),g=_("hr"),f=P(),A=_("span"),A.textContent=F,N=P(),M=_("p"),V=P(),J.c(),H=P(),j=_("hr"),O=P(),B&&B.c(),q=P(),U=_("div"),w=_("div"),C=P(),y=_("button"),y.textContent=W,Z=P(),ce=_("div"),le=P(),ne=_("hr"),G=P(),ee=_("div"),ee.innerHTML=fe,this.h()},l(d){e=v(d,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1jo9uuc"&&(e.innerHTML=t),i=R(d),D.l(d),s=R(d),r=v(d,"SPAN",{class:!0,"data-svelte-h":!0}),z(r)!=="svelte-eapto"&&(r.textContent=a),o=R(d),c=v(d,"BR",{}),l=R(d),Ee(u.$$.fragment,d),p=R(d),g=v(d,"HR",{}),f=R(d),A=v(d,"SPAN",{class:!0,"data-svelte-h":!0}),z(A)!=="svelte-j8w724"&&(A.textContent=F),N=R(d),M=v(d,"P",{style:!0}),$(M).forEach(h),V=R(d),J.l(d),H=R(d),j=v(d,"HR",{}),O=R(d),B&&B.l(d),q=R(d),U=v(d,"DIV",{class:!0});var k=$(U);w=v(k,"DIV",{class:!0}),$(w).forEach(h),C=R(k),y=v(k,"BUTTON",{class:!0,"data-svelte-h":!0}),z(y)!=="svelte-1urjot1"&&(y.textContent=W),Z=R(k),ce=v(k,"DIV",{class:!0}),$(ce).forEach(h),k.forEach(h),le=R(d),ne=v(d,"HR",{}),G=R(d),ee=v(d,"DIV",{"data-svelte-h":!0}),z(ee)!=="svelte-1gramgw"&&(ee.innerHTML=fe),this.h()},h(){S(e,"id","theletterloop-com_300x600"),S(e,"class","banner-ad svelte-1tu46dl"),S(r,"class","small-header"),S(A,"class","small-header"),S(M,"style","height:6px;margin:0;padding;0px;"),S(w,"class","spacer"),S(y,"class","share-button"),S(ce,"class","spacer"),S(U,"class","flex-container")},m(d,k){m(d,e,k),m(d,i,k),D.m(d,k),m(d,s,k),m(d,r,k),m(d,o,k),m(d,c,k),m(d,l,k),Ae(u,d,k),m(d,p,k),m(d,g,k),m(d,f,k),m(d,A,k),m(d,N,k),m(d,M,k),m(d,V,k),J.m(d,k),m(d,H,k),m(d,j,k),m(d,O,k),B&&B.m(d,k),m(d,q,k),m(d,U,k),T(U,w),T(U,C),T(U,y),T(U,Z),T(U,ce),m(d,le,k),m(d,ne,k),m(d,G,k),m(d,ee,k),K=!0,pe||(me=oe(y,"click",n[20]),pe=!0)},p(d,k){x===(x=b(d))&&D?D.p(d,k):(D.d(1),D=x(d),D&&(D.c(),D.m(s.parentNode,s)));const Y={};k[0]&512&&(Y.globalStats=d[9]),u.$set(Y),ie===(ie=ye(d))&&J?J.p(d,k):(J.d(1),J=ie(d),J&&(J.c(),J.m(H.parentNode,H))),d[10]==!1?B?B.p(d,k):(B=Kn(d),B.c(),B.m(q.parentNode,q)):B&&(B.d(1),B=null)},i(d){K||(Pe(u.$$.fragment,d),K=!0)},o(d){Re(u.$$.fragment,d),K=!1},d(d){d&&(h(e),h(i),h(s),h(r),h(o),h(c),h(l),h(p),h(g),h(f),h(A),h(N),h(M),h(V),h(H),h(j),h(O),h(q),h(U),h(le),h(ne),h(G),h(ee)),D.d(d),Ce(u,d),J.d(d),B&&B.d(d),pe=!1,me()}}}function Oc(n){let e,t,i,s;return i=new Os({}),{c(){e=_("hr"),t=P(),Se(i.$$.fragment)},l(r){e=v(r,"HR",{}),t=R(r),Ee(i.$$.fragment,r)},m(r,a){m(r,e,a),m(r,t,a),Ae(i,r,a),s=!0},p:he,i(r){s||(Pe(i.$$.fragment,r),s=!0)},o(r){Re(i.$$.fragment,r),s=!1},d(r){r&&(h(e),h(t)),Ce(i,r)}}}function Nc(n){let e,t='<span class="styled-header">How To Play</span>';return{c(){e=_("h2"),e.innerHTML=t,this.h()},l(i){e=v(i,"H2",{slot:!0,"data-svelte-h":!0}),z(e)!=="svelte-1kct8zk"&&(e.innerHTML=t),this.h()},h(){S(e,"slot","header")},m(i,s){m(i,e,s)},p:he,d(i){i&&h(e)}}}function Lc(n){let e,t,i,s,r,a,o="Resume",c,l,u,p;return{c(){e=_("hr"),t=P(),i=_("div"),s=_("div"),r=P(),a=_("button"),a.textContent=o,c=P(),l=_("div"),this.h()},l(g){e=v(g,"HR",{}),t=R(g),i=v(g,"DIV",{class:!0});var f=$(i);s=v(f,"DIV",{class:!0}),$(s).forEach(h),r=R(f),a=v(f,"BUTTON",{class:!0,"data-svelte-h":!0}),z(a)!=="svelte-o41kx2"&&(a.textContent=o),c=R(f),l=v(f,"DIV",{class:!0}),$(l).forEach(h),f.forEach(h),this.h()},h(){S(s,"class","spacer"),S(a,"class","share-button"),S(l,"class","spacer"),S(i,"class","flex-container")},m(g,f){m(g,e,f),m(g,t,f),m(g,i,f),T(i,s),T(i,r),T(i,a),T(i,c),T(i,l),u||(p=oe(a,"click",n[22]),u=!0)},p:he,d(g){g&&(h(e),h(t),h(i)),u=!1,p()}}}function Mc(n){let e,t='<span class="styled-header">Paused</span>';return{c(){e=_("h2"),e.innerHTML=t,this.h()},l(i){e=v(i,"H2",{slot:!0,"data-svelte-h":!0}),z(e)!=="svelte-1ught0z"&&(e.innerHTML=t),this.h()},h(){S(e,"slot","header")},m(i,s){m(i,e,s)},p:he,d(i){i&&h(e)}}}function Dc(n){let e,t,i,s,r='<a class="title-link" href="/">LetterLoop</a>',a,o,c,l,u,p,g,f,A='<i class="fa-regular fa-face-sad-tear"></i> <p class="how-to-play">Give Up</p>',F,N,M='<i class="fa-regular fa-circle-question"></i> <p class="how-to-play">How to play</p>',V,H,j,O,q,U,w,C,y,W,Z,ce='<i class="fa-solid fa-pause"></i>',le,ne,G,ee,fe,K,pe,me,b,x,D,ye,ie;O=new Ps({});function J(I){n[26](I)}let B={};n[7]!==void 0&&(B.elapsedSeconds=n[7]),C=new vc({props:B}),n[25](C),nt.push(()=>gt(C,"elapsedSeconds",J));function d(I,L){return I[3].length>0?yc:wc}let k=d(n),Y=k(n);function cs(I){n[28](I)}let un={modalType:"end",$$slots:{default:[Cc]},$$scope:{ctx:n}};n[0]!==void 0&&(un.showModal=n[0]),G=new $t({props:un}),nt.push(()=>gt(G,"showModal",cs));function ls(I){n[29](I)}let dn={modalType:"help",$$slots:{header:[Nc],default:[Oc]},$$scope:{ctx:n}};n[1]!==void 0&&(dn.showModal=n[1]),K=new $t({props:dn}),nt.push(()=>gt(K,"showModal",ls));function us(I){n[30](I)}let hn={hide_close:!0,modalType:"pause",$$slots:{header:[Mc],default:[Lc]},$$scope:{ctx:n}};return n[2]!==void 0&&(hn.showModal=n[2]),b=new $t({props:hn}),nt.push(()=>gt(b,"showModal",us)),{c(){e=_("main"),t=_("div"),i=_("div"),s=_("p"),s.innerHTML=r,a=P(),o=_("small"),c=re("(public beta) · Edited by "),l=re(n[8]),u=P(),p=_("div"),g=P(),f=_("div"),f.innerHTML=A,F=P(),N=_("div"),N.innerHTML=M,V=P(),H=_("div"),j=P(),Se(O.$$.fragment),q=P(),U=_("div"),w=_("div"),Se(C.$$.fragment),W=P(),Z=_("div"),Z.innerHTML=ce,le=P(),Y.c(),ne=P(),Se(G.$$.fragment),fe=P(),Se(K.$$.fragment),me=P(),Se(b.$$.fragment),this.h()},l(I){e=v(I,"MAIN",{});var L=$(e);t=v(L,"DIV",{class:!0});var se=$(t);i=v(se,"DIV",{class:!0});var Te=$(i);s=v(Te,"P",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-1nehi25"&&(s.innerHTML=r),a=R(Te),o=v(Te,"SMALL",{style:!0});var Fe=$(o);c=ae(Fe,"(public beta) · Edited by "),l=ae(Fe,n[8]),Fe.forEach(h),Te.forEach(h),u=R(se),p=v(se,"DIV",{class:!0}),$(p).forEach(h),g=R(se),f=v(se,"DIV",{class:!0,"data-svelte-h":!0}),z(f)!=="svelte-1hqa4i8"&&(f.innerHTML=A),F=R(se),N=v(se,"DIV",{class:!0,"data-svelte-h":!0}),z(N)!=="svelte-1i75e1h"&&(N.innerHTML=M),se.forEach(h),V=R(L),H=v(L,"DIV",{class:!0}),$(H).forEach(h),j=R(L),Ee(O.$$.fragment,L),q=R(L),U=v(L,"DIV",{class:!0});var be=$(U);w=v(be,"DIV",{class:!0});var fn=$(w);Ee(C.$$.fragment,fn),fn.forEach(h),W=R(be),Z=v(be,"DIV",{"data-svelte-h":!0}),z(Z)!=="svelte-1mqs5ls"&&(Z.innerHTML=ce),be.forEach(h),le=R(L),Y.l(L),L.forEach(h),ne=R(I),Ee(G.$$.fragment,I),fe=R(I),Ee(K.$$.fragment,I),me=R(I),Ee(b.$$.fragment,I),this.h()},h(){S(s,"class","title"),hs(o,"color","rgb(46, 46, 46)"),S(i,"class","title-container "),S(p,"class","spacer"),S(f,"class","help-container"),S(N,"class","help-container"),S(t,"class","nav-flex-container"),S(H,"class","divider"),S(w,"class","timer-container"),S(U,"class","flex-container")},m(I,L){m(I,e,L),T(e,t),T(t,i),T(i,s),T(i,a),T(i,o),T(o,c),T(o,l),T(t,u),T(t,p),T(t,g),T(t,f),T(t,F),T(t,N),T(e,V),T(e,H),T(e,j),Ae(O,e,null),T(e,q),T(e,U),T(U,w),Ae(C,w,null),T(U,W),T(U,Z),T(e,le),Y.m(e,null),m(I,ne,L),Ae(G,I,L),m(I,fe,L),Ae(K,I,L),m(I,me,L),Ae(b,I,L),D=!0,ye||(ie=[oe(Ic,"keydown",fs(n[13])),oe(f,"click",n[16]),oe(N,"click",n[24]),oe(Z,"click",n[21])],ye=!0)},p(I,L){(!D||L[0]&256)&&xe(l,I[8]);const se={};!y&&L[0]&128&&(y=!0,se.elapsedSeconds=I[7],mt(()=>y=!1)),C.$set(se),k===(k=d(I))&&Y?Y.p(I,L):(Y.d(1),Y=k(I),Y&&(Y.c(),Y.m(e,null)));const Te={};L[0]&1672|L[1]&4096&&(Te.$$scope={dirty:L,ctx:I}),!ee&&L[0]&1&&(ee=!0,Te.showModal=I[0],mt(()=>ee=!1)),G.$set(Te);const Fe={};L[1]&4096&&(Fe.$$scope={dirty:L,ctx:I}),!pe&&L[0]&2&&(pe=!0,Fe.showModal=I[1],mt(()=>pe=!1)),K.$set(Fe);const be={};L[1]&4096&&(be.$$scope={dirty:L,ctx:I}),!x&&L[0]&4&&(x=!0,be.showModal=I[2],mt(()=>x=!1)),b.$set(be)},i(I){D||(Pe(O.$$.fragment,I),Pe(C.$$.fragment,I),Pe(G.$$.fragment,I),Pe(K.$$.fragment,I),Pe(b.$$.fragment,I),D=!0)},o(I){Re(O.$$.fragment,I),Re(C.$$.fragment,I),Re(G.$$.fragment,I),Re(K.$$.fragment,I),Re(b.$$.fragment,I),D=!1},d(I){I&&(h(e),h(ne),h(fe),h(me)),Ce(O),n[25](null),Ce(C),Y.d(),Ce(G,I),Ce(K,I),Ce(b,I),ye=!1,Yn(ie)}}}function Jn(n){return n.split("").sort(()=>Math.random()-.5).join("")}function Rt(n){if(!n)return"Loading Solutions...";const e=n.substring(0,5),t=n.substring(4,8)+e[0];return`
        <div>
          <a href="https://www.merriam-webster.com/dictionary/${e}" target="blank">${e}</a> 
          + 
          <a href="https://www.merriam-webster.com/dictionary/${t}" target="blank">${t}</a>
        </div>
      `}function Uc(n,e,t){let i,s=!1,r=!1,a=!1,o=[];o=o.map(b=>b.toLowerCase());let c,l=Array(8).fill(""),u=[],p,g=0,f=[0,4],A,F=0,N="---",M,V=!1;ds(async()=>{const b=fc(Fi);os(b,"screen_view",{firebase_screen:"game_board_view",firebase_screen_class:"game_board_controller"});const x=new Date,D={year:"numeric",month:"2-digit",day:"2-digit"},ye=x.toLocaleDateString("en-US",D).replace(/\//g,"-");try{if(await Wa()){const ie=await ai("solutions/"+ye),J=Object.values(ie);t(8,N=J[0]),t(3,o=J[1]),c=o[0],t(5,p=Jn(c)),A.start()}}catch(ie){console.error("Error fetching data from Firebase:",ie)}});function H(b,x){for(let D=0;D<b.length;D++)if(b[D]==x&&!i(D))return D;return-1}function j(b){const x=b.key.toLowerCase(),D=H(p,x);b.keyCode===13?q():b.keyCode===8?W():D!==-1&&!i(D)&&O(x,D)}function O(b,x){g<l.length&&!i(x)&&(t(4,l[g]=b,l),g+=1,t(23,u=[...u,x]))}function q(){const b=l.join(""),x=l.filter(D=>D!=="").length;o.includes(b)?(t(10,V=!1),w()):x!=8?tt.default("You Must fill in every letter",1e3):tt.default("Incorrect",1e3)}function U(){t(10,V=!0),w()}function w(){t(0,s=!0),A.stop(),Ba(F).then(b=>{t(9,M=b)}).catch(b=>{console.error("Error:",b)})}function C(){t(4,l=Array(8).fill("")),g=0,t(23,u=[])}function y(){t(5,p=Jn(c)),C()}function W(){g>0&&(t(4,l[g-1]="",l),g-=1,t(23,u=u.slice(0,-1)))}const Z=async()=>{let b=`I completed the LetterLoop in: 
🔴`+F+"🔴";if(V&&(b="I didnt complete the LetterLoop today, but I sure did try my best"),navigator.share)try{await navigator.share({title:"",text:b,url:window.location.href})}catch{tt.default("Error",1e3)}else try{await navigator.clipboard.writeText(b),tt.default("Copied Text!",1e3)}catch{tt.default("Error",1e3)}};function ce(){A.stop(),t(2,a=!0)}function le(){A.start(),t(2,a=!1)}const ne=()=>t(1,r=!0);function G(b){nt[b?"unshift":"push"](()=>{A=b,t(6,A)})}function ee(b){F=b,t(7,F)}const fe=(b,x)=>O(b,x);function K(b){s=b,t(0,s)}function pe(b){r=b,t(1,r)}function me(b){a=b,t(2,a)}return n.$$.update=()=>{n.$$.dirty[0]&8388608&&t(11,i=b=>u.includes(b))},new Date().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}),[s,r,a,o,l,p,A,F,N,M,V,i,f,j,O,q,U,C,y,W,Z,ce,le,u,ne,G,ee,fe,K,pe,me]}class Fc extends Kt{constructor(e){super(),Jt(this,e,Uc,Dc,Gt,{},null,[-1,-1])}}function $c(n){let e,t,i;return t=new Fc({}),{c(){e=_("main"),Se(t.$$.fragment)},l(s){e=v(s,"MAIN",{});var r=$(e);Ee(t.$$.fragment,r),r.forEach(h)},m(s,r){m(s,e,r),Ae(t,e,null),i=!0},p:he,i(s){i||(Pe(t.$$.fragment,s),i=!0)},o(s){Re(t.$$.fragment,s),i=!1},d(s){s&&h(e),Ce(t)}}}class qc extends Kt{constructor(e){super(),Jt(this,e,null,$c,Gt,{})}}export{qc as component};
