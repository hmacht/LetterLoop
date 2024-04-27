import{s as Gt,n as me,d as Ft,f as nt,j as gt,r as Kn,o as os}from"../chunks/scheduler.Dj2J5mG2.js";import{S as Kt,i as Jt,e as w,j as ne,c as y,a as H,k as ie,d as h,p as E,b as I,f as _,m as $e,z as mt,s as C,v as Se,h as G,l as O,w as ke,q as cs,x as Ee,A as ae,B as ls,t as Ae,g as Pe,y as Re,C as Jn,D as it,H as Yn,n as Ke,E as Xn}from"../chunks/index.BbVivFmB.js";import{r as Ve,L as Qn,g as Zn,i as us,a as ds,_ as Je,C as Ye,b as Qe,c as hs,d as ei,e as ti,f as ct,h as De,E as lt,j as fs,k as ni,l as ii,m as X,F as ut,n as ps,q as dt,o as gs,p as ms,s as _s,t as vs,u as Is,v as fn,w as si,x as ws,y as pn,z as ys,A as Ts,B as bs,T as Ss,M as $t,D as tt,G as ze,I as ks,S as Es,H as As,J as Ps}from"../chunks/Stats.CnwxiNpH.js";import{r as Rs,w as gn}from"../chunks/index.DHaQdJMq.js";const Cs=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var Os="firebase",Ns="10.8.0";/**
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
 */Ve(Os,Ns,"app");function Yt(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function ri(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ms=ri,ai=new lt("auth","Firebase",ri());/**
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
 */const Tt=new Qn("@firebase/auth");function Ls(n,...e){Tt.logLevel<=ii.WARN&&Tt.warn(`Auth (${ct}): ${n}`,...e)}function vt(n,...e){Tt.logLevel<=ii.ERROR&&Tt.error(`Auth (${ct}): ${n}`,...e)}/**
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
 */function _e(n,...e){throw Xt(n,...e)}function oe(n,...e){return Xt(n,...e)}function Ds(n,e,t){const i=Object.assign(Object.assign({},Ms()),{[e]:t});return new lt("auth","Firebase",i).create(e,{appName:n.name})}function Xt(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ai.create(n,...e)}function S(n,e,...t){if(!n)throw Xt(e,...t)}function pe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vt(e),new Error(e)}function ve(n,e){n||pe(e)}/**
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
 */function zt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Us(){return mn()==="http:"||mn()==="https:"}function mn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Fs(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Us()||ti()||"connection"in navigator)?navigator.onLine:!0}function $s(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ht{constructor(e,t){this.shortDelay=e,this.longDelay=t,ve(t>e,"Short delay should be less than long delay!"),this.isMobile=us()||ds()}get(){return Fs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qt(n,e){ve(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class oi{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Vs=new ht(3e4,6e4);function Ct(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ze(n,e,t,i,s={}){return ci(n,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const o=dt(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),oi.fetch()(ui(n,n.config.apiHost,t,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function ci(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},xs),e);try{const s=new Hs(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw _t(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _t(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw _t(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw _t(n,"user-disabled",a);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ds(n,u,l);_e(n,u)}}catch(s){if(s instanceof ut)throw s;_e(n,"network-request-failed",{message:String(s)})}}async function li(n,e,t,i,s={}){const r=await Ze(n,e,t,i,s);return"mfaPendingCredential"in r&&_e(n,"multi-factor-auth-required",{_serverResponse:r}),r}function ui(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Qt(n.config,s):`${n.config.apiScheme}://${s}`}class Hs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(oe(this.auth,"network-request-failed")),Vs.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _t(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=oe(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function js(n,e){return Ze(n,"POST","/v1/accounts:delete",e)}async function qs(n,e){return Ze(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function st(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zs(n,e=!1){const t=De(n),i=await t.getIdToken(e),s=Zt(i);S(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:st(xt(s.auth_time)),issuedAtTime:st(xt(s.iat)),expirationTime:st(xt(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xt(n){return Number(n)*1e3}function Zt(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return vt("JWT malformed, contained fewer than 3 sections"),null;try{const s=gs(t);return s?JSON.parse(s):(vt("Failed to decode base64 JWT payload"),null)}catch(s){return vt("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ws(n){const e=Zt(n);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function at(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ut&&Bs(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Bs({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Gs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class di{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=st(this.lastLoginAt),this.creationTime=st(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(n){var e;const t=n.auth,i=await n.getIdToken(),s=await at(n,qs(t,{idToken:i}));S(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ys(r.providerUserInfo):[],o=Js(n.providerData,a),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new di(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,p)}async function Ks(n){const e=De(n);await bt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Js(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ys(n){return n.map(e=>{var{providerId:t}=e,i=Yt(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Xs(n,e){const t=await ci(n,{},async()=>{const i=dt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,a=ui(n,s,"/v1/token",`key=${r}`),o=await n._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",oi.fetch()(a,{method:"POST",headers:o,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Qs(n,e){return Ze(n,"POST","/v2/accounts:revokeToken",Ct(n,e))}/**
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
 */class ot{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ws(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Xs(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,a=new ot;return i&&(S(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(S(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(S(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ot,this.toJSON())}_performRefresh(){return pe("not implemented")}}/**
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
 */function be(n,e){S(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xe{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Yt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new di(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await at(this,this.stsTokenManager.getToken(this.auth,e));return S(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zs(this,e)}reload(){return Ks(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await bt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await at(this,js(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,a,o,c,l,u;const p=(i=t.displayName)!==null&&i!==void 0?i:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,U=(o=t.tenantId)!==null&&o!==void 0?o:void 0,M=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,L=(l=t.createdAt)!==null&&l!==void 0?l:void 0,F=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:D,isAnonymous:P,providerData:$,stsTokenManager:B}=t;S(K&&B,e,"internal-error");const T=ot.fromJSON(this.name,B);S(typeof K=="string",e,"internal-error"),be(p,e.name),be(g,e.name),S(typeof D=="boolean",e,"internal-error"),S(typeof P=="boolean",e,"internal-error"),be(f,e.name),be(k,e.name),be(U,e.name),be(M,e.name),be(L,e.name),be(F,e.name);const R=new xe({uid:K,auth:e,email:g,emailVerified:D,displayName:p,isAnonymous:P,photoURL:k,phoneNumber:f,tenantId:U,stsTokenManager:T,createdAt:L,lastLoginAt:F});return $&&Array.isArray($)&&(R.providerData=$.map(v=>Object.assign({},v))),M&&(R._redirectEventId=M),R}static async _fromIdTokenResponse(e,t,i=!1){const s=new ot;s.updateFromServerResponse(t);const r=new xe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await bt(r),r}}/**
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
 */const _n=new Map;function ge(n){ve(n instanceof Function,"Expected a class definition");let e=_n.get(n);return e?(ve(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_n.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hi.type="NONE";const vn=hi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n,e,t){return`firebase:${n}:${e}:${t}`}class Be{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=It(this.userKey,s.apiKey,r),this.fullPersistenceKey=It("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Be(ge(vn),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||ge(vn);const a=It(i,e.config.apiKey,e.name);let o=null;for(const l of t)try{const u=await l._get(a);if(u){const p=xe._fromJSON(e,u);l!==r&&(o=p),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Be(r,e,i):(r=c[0],o&&await r._set(a,o.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(a)}catch{}})),new Be(r,e,i))}}/**
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
 */function In(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_i(e))return"Blackberry";if(vi(e))return"Webos";if(en(e))return"Safari";if((e.includes("chrome/")||pi(e))&&!e.includes("edge/"))return"Chrome";if(mi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function fi(n=X()){return/firefox\//i.test(n)}function en(n=X()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pi(n=X()){return/crios\//i.test(n)}function gi(n=X()){return/iemobile/i.test(n)}function mi(n=X()){return/android/i.test(n)}function _i(n=X()){return/blackberry/i.test(n)}function vi(n=X()){return/webos/i.test(n)}function Ot(n=X()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Zs(n=X()){var e;return Ot(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function er(){return ps()&&document.documentMode===10}function Ii(n=X()){return Ot(n)||mi(n)||vi(n)||_i(n)||/windows phone/i.test(n)||gi(n)}function tr(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wi(n,e=[]){let t;switch(n){case"Browser":t=In(X());break;case"Worker":t=`${In(X())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ct}/${i}`}/**
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
 */class nr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((a,o)=>{try{const c=e(r);a(c)}catch(c){o(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function ir(n,e={}){return Ze(n,"GET","/v2/passwordPolicy",Ct(n,e))}/**
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
 */const sr=6;class rr{constructor(e){var t,i,s,r;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:sr,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class ar{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wn(this),this.idTokenSubscription=new wn(this),this.beforeStateQueue=new nr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ai,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ge(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Be.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$s()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?De(e):null;return t&&S(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ir(this),t=new rr(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Qs(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ge(e)||this._popupRedirectResolver;S(t,this,"argument-error"),this.redirectPersistenceManager=await Be.create(this,[ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(o,this,"internal-error"),o.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ls(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Nt(n){return De(n)}class wn{constructor(e){this.auth=e,this.observer=null,this.addObserver=fs(t=>this.observer=t)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function or(n){tn=n}function cr(n){return tn.loadJS(n)}function lr(){return tn.gapiScript}function ur(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function dr(n,e){const t=Qe(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ni(r,e??{}))return s;_e(s,"already-initialized")}return t.initialize({options:e})}function hr(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function fr(n,e,t){const i=Nt(n);S(i._canInitEmulator,i,"emulator-config-failed"),S(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=yi(e),{host:a,port:o}=pr(e),c=o===null?"":`:${o}`;i.config.emulator={url:`${r}//${a}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||gr()}function yi(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pr(n){const e=yi(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:yn(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:yn(a)}}}function yn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gr(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ti{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pe("not implemented")}_getIdTokenResponse(e){return pe("not implemented")}_linkToIdToken(e,t){return pe("not implemented")}_getReauthenticationResolver(e){return pe("not implemented")}}/**
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
 */async function Ge(n,e){return li(n,"POST","/v1/accounts:signInWithIdp",Ct(n,e))}/**
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
 */const mr="http://localhost";class He extends Ti{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new He(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_e("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Yt(t,["providerId","signInMethod"]);if(!i||!s)return null;const a=new He(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ge(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ge(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ge(e,t)}buildRequest(){const e={requestUri:mr,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dt(t)}return e}}/**
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
 */class bi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends bi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ce extends ft{constructor(){super("facebook.com")}static credential(e){return He._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ce.PROVIDER_ID="facebook.com";/**
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
 */class Oe extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return He._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Oe.credential(t,i)}catch{return null}}}Oe.GOOGLE_SIGN_IN_METHOD="google.com";Oe.PROVIDER_ID="google.com";/**
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
 */class Ne extends ft{constructor(){super("github.com")}static credential(e){return He._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.GITHUB_SIGN_IN_METHOD="github.com";Ne.PROVIDER_ID="github.com";/**
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
 */class Me extends ft{constructor(){super("twitter.com")}static credential(e,t){return He._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Me.credential(t,i)}catch{return null}}}Me.TWITTER_SIGN_IN_METHOD="twitter.com";Me.PROVIDER_ID="twitter.com";/**
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
 */async function _r(n,e){return li(n,"POST","/v1/accounts:signUp",Ct(n,e))}/**
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
 */class Le{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await xe._fromIdTokenResponse(e,i,s),a=Tn(i);return new Le({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Tn(i);return new Le({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Tn(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function vr(n){var e;const t=Nt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Le({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await _r(t,{returnSecureToken:!0}),s=await Le._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class St extends ut{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,St.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new St(e,t,i,s)}}function Si(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?St._fromErrorAndOperation(n,r,e,i):r})}async function Ir(n,e,t=!1){const i=await at(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Le._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await at(n,Si(i,s,e,n),t);S(r.idToken,i,"internal-error");const a=Zt(r.idToken);S(a,i,"internal-error");const{sub:o}=a;return S(n.uid===o,i,"user-mismatch"),Le._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_e(i,"user-mismatch"),r}}/**
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
 */async function yr(n,e,t=!1){const i="signIn",s=await Si(n,i,e),r=await Le._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function Tr(n,e,t,i){return De(n).onIdTokenChanged(e,t,i)}function br(n,e,t){return De(n).beforeAuthStateChanged(e,t)}const kt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kt,"1"),this.storage.removeItem(kt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Sr(){const n=X();return en(n)||Ot(n)}const kr=1e3,Er=10;class Ei extends ki{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sr()&&tr(),this.fallbackToPolling=Ii(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);er()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Er):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},kr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ei.type="LOCAL";const Ar=Ei;/**
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
 */class Ai extends ki{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ai.type="SESSION";const Pi=Ai;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Mt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const o=Array.from(a).map(async l=>l(t.origin,r)),c=await Pr(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mt.receivers=[];/**
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
 */class Rr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((o,c)=>{const l=nn("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(g.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ce(){return window}function Cr(n){ce().location.href=n}/**
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
 */function Ri(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function Or(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nr(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Mr(){return Ri()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="firebaseLocalStorageDb",Lr=1,Et="firebaseLocalStorage",Oi="fbase_key";class pt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lt(n,e){return n.transaction([Et],e?"readwrite":"readonly").objectStore(Et)}function Dr(){const n=indexedDB.deleteDatabase(Ci);return new pt(n).toPromise()}function Wt(){const n=indexedDB.open(Ci,Lr);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Et,{keyPath:Oi})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Et)?e(i):(i.close(),await Dr(),e(await Wt()))})})}async function bn(n,e,t){const i=Lt(n,!0).put({[Oi]:e,value:t});return new pt(i).toPromise()}async function Ur(n,e){const t=Lt(n,!1).get(e),i=await new pt(t).toPromise();return i===void 0?null:i.value}function Sn(n,e){const t=Lt(n,!0).delete(e);return new pt(t).toPromise()}const Fr=800,$r=3;class Ni{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>$r)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ri()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mt._getInstance(Mr()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Or(),!this.activeServiceWorker)return;this.sender=new Rr(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nr()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wt();return await bn(e,kt,"1"),await Sn(e,kt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>bn(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Ur(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Lt(s,!1).getAll();return new pt(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ni.type="LOCAL";const xr=Ni;new ht(3e4,6e4);/**
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
 */function Vr(n,e){return e?ge(e):(S(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Ti{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ge(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ge(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hr(n){return yr(n.auth,new sn(n),n.bypassAuthState)}function jr(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),wr(t,new sn(n),n.bypassAuthState)}async function qr(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),Ir(t,new sn(n),n.bypassAuthState)}/**
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
 */class Mi{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hr;case"linkViaPopup":case"linkViaRedirect":return qr;case"reauthViaPopup":case"reauthViaRedirect":return jr;default:_e(this.auth,"internal-error")}}resolve(e){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zr=new ht(2e3,1e4);class We extends Mi{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,We.currentPopupAction&&We.currentPopupAction.cancel(),We.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){ve(this.filter.length===1,"Popup operations only handle one event");const e=nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,We.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zr.get())};e()}}We.currentPopupAction=null;/**
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
 */const Wr="pendingRedirect",wt=new Map;class Br extends Mi{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=wt.get(this.auth._key());if(!e){try{const i=await Gr(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}wt.set(this.auth._key(),e)}return this.bypassAuthState||wt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gr(n,e){const t=Yr(e),i=Jr(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Kr(n,e){wt.set(n._key(),e)}function Jr(n){return ge(n._redirectPersistence)}function Yr(n){return It(Wr,n.config.apiKey,n.name)}async function Xr(n,e,t=!1){const i=Nt(n),s=Vr(i,e),a=await new Br(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
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
 */const Qr=10*60*1e3;class Zr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ea(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Li(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(oe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qr&&this.cachedEventUids.clear(),this.cachedEventUids.has(kn(e))}saveEventToCache(e){this.cachedEventUids.add(kn(e)),this.lastProcessedEventTime=Date.now()}}function kn(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Li({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ea(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Li(n);default:return!1}}/**
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
 */async function ta(n,e={}){return Ze(n,"GET","/v1/projects",e)}/**
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
 */const na=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ia=/^https?/;async function sa(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ta(n);for(const t of e)try{if(ra(t))return}catch{}_e(n,"unauthorized-domain")}function ra(n){const e=zt(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!ia.test(t))return!1;if(na.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const aa=new ht(3e4,6e4);function En(){const n=ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function oa(n){return new Promise((e,t)=>{var i,s,r;function a(){En(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{En(),t(oe(n,"network-request-failed"))},timeout:aa.get()})}if(!((s=(i=ce().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ce().gapi)===null||r===void 0)&&r.load)a();else{const o=ur("iframefcb");return ce()[o]=()=>{gapi.load?a():t(oe(n,"network-request-failed"))},cr(`${lr()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw yt=null,e})}let yt=null;function ca(n){return yt=yt||oa(n),yt}/**
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
 */const la=new ht(5e3,15e3),ua="__/auth/iframe",da="emulator/auth/iframe",ha={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pa(n){const e=n.config;S(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qt(e,da):`https://${n.config.authDomain}/${ua}`,i={apiKey:e.apiKey,appName:n.name,v:ct},s=fa.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${dt(i).slice(1)}`}async function ga(n){const e=await ca(n),t=ce().gapi;return S(t,n,"internal-error"),e.open({where:document.body,url:pa(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ha,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=oe(n,"network-request-failed"),o=ce().setTimeout(()=>{r(a)},la.get());function c(){ce().clearTimeout(o),s(i)}i.ping(c).then(c,()=>{r(a)})}))}/**
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
 */const ma={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_a=500,va=600,Ia="_blank",wa="http://localhost";class An{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ya(n,e,t,i=_a,s=va){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const c=Object.assign(Object.assign({},ma),{width:i.toString(),height:s.toString(),top:r,left:a}),l=X().toLowerCase();t&&(o=pi(l)?Ia:t),fi(l)&&(e=e||wa,c.scrollbars="yes");const u=Object.entries(c).reduce((g,[f,k])=>`${g}${f}=${k},`,"");if(Zs(l)&&o!=="_self")return Ta(e||"",o),new An(null);const p=window.open(e||"",o,u);S(p,n,"popup-blocked");try{p.focus()}catch{}return new An(p)}function Ta(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const ba="__/auth/handler",Sa="emulator/auth/handler",ka=encodeURIComponent("fac");async function Pn(n,e,t,i,s,r){S(n.config.authDomain,n,"auth-domain-config-required"),S(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ct,eventId:s};if(e instanceof bi){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ms(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries(r||{}))a[u]=p}if(e instanceof ft){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(a.scopes=u.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await n._getAppCheckToken(),l=c?`#${ka}=${encodeURIComponent(c)}`:"";return`${Ea(n)}?${dt(o).slice(1)}${l}`}function Ea({config:n}){return n.emulator?Qt(n,Sa):`https://${n.authDomain}/${ba}`}/**
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
 */const Vt="webStorageSupport";class Aa{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pi,this._completeRedirectFn=Xr,this._overrideRedirectResult=Kr}async _openPopup(e,t,i,s){var r;ve((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await Pn(e,t,i,zt(),s);return ya(e,a,nn())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Pn(e,t,i,zt(),s);return Cr(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(ve(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await ga(e),i=new Zr(e);return t.register("authEvent",s=>(S(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vt,{type:Vt},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Vt];a!==void 0&&t(!!a),_e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sa(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ii()||en()||Ot()}}const Pa=Aa;var Rn="@firebase/auth",Cn="1.6.0";/**
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
 */class Ra{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ca(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Oa(n){Je(new Ye("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=i.options;S(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wi(n)},l=new ar(i,s,r,c);return hr(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Je(new Ye("auth-internal",e=>{const t=Nt(e.getProvider("auth").getImmediate());return(i=>new Ra(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(Rn,Cn,Ca(n)),Ve(Rn,Cn,"esm2017")}/**
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
 */const Na=5*60,Ma=Zn("authIdTokenMaxAge")||Na;let On=null;const La=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Ma)return;const s=t==null?void 0:t.token;On!==s&&(On=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Da(n=ei()){const e=Qe(n,"auth");if(e.isInitialized())return e.getImmediate();const t=dr(n,{popupRedirectResolver:Pa,persistence:[xr,Ar,Pi]}),i=Zn("authTokenSyncURL");if(i){const r=La(i);br(t,r,()=>r(t.currentUser)),Tr(t,a=>r(a))}const s=hs("auth");return s&&fr(t,`http://${s}`),t}function Ua(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}or({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=oe("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Ua().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Oa("Browser");const Fa={apiKey:"AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",authDomain:"circlepuzzlegame-1738d.firebaseapp.com",projectId:"circlepuzzlegame-1738d",storageBucket:"circlepuzzlegame-1738d.appspot.com",messagingSenderId:"62490740969",appId:"1:62490740969:web:719c6ea78f8148089f4878",measurementId:"G-EEEKPPSEN9"},Di=_s(Fa),$a=Da(Di);async function xa(){return new Promise((n,e)=>{vr($a).then(()=>{n(!0)}).catch(t=>{t.code;var i=t.message;console.error("Failed to sign in anonymously:",i),n(!1)})})}async function Va(n){const e=vs(),t=Is(e,"Stats/"+Ui()),i=await Ha();if(i==="NOREF")return fn(t,{averageTime:n,minTime:n,count:1}),{averageTime:n,minTime:n,count:1,isUnderAverage:!0,isHighScore:!0};{const s=i.averageTime,r=i.minTime,a=i.count,o=qa(s,a,n),c=za(n,r),l=a+1;return fn(t,{averageTime:o,minTime:c,count:l}),{averageTime:s,minTime:c,count:l,isUnderAverage:Nn(n,s),isHighScore:Nn(n,r)}}}function Ui(){const n=new Date,e={year:"numeric",month:"2-digit",day:"2-digit"};return n.toLocaleDateString("en-US",e).replace(/\//g,"-")}async function Ha(){try{return await si("Stats/"+Ui())}catch{return null}}function Xe(n){const[e,t,i]=n.split(":").map(Number);return e*3600+t*60+i}function ja(n){const e=Math.floor(n/3600),t=Math.floor(n%3600/60),i=Math.round(n%60);return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}function qa(n,e,t){const i=Xe(n),s=Xe(t),r=(i*e+s)/(e+1);return ja(r)}function za(n,e){const t=Xe(n),i=Xe(e);return t<i?n:e}function Nn(n,e){const t=Xe(n),i=Xe(e);return t<i}const Fi="@firebase/installations",rn="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=1e4,xi=`w:${rn}`,Vi="FIS_v2",Wa="https://firebaseinstallations.googleapis.com/v1",Ba=60*60*1e3,Ga="installations",Ka="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},je=new lt(Ga,Ka,Ja);function Hi(n){return n instanceof ut&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji({projectId:n}){return`${Wa}/projects/${n}/installations`}function qi(n){return{token:n.token,requestStatus:2,expiresIn:Xa(n.expiresIn),creationTime:Date.now()}}async function zi(n,e){const i=(await e.json()).error;return je.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Wi({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Ya(n,{refreshToken:e}){const t=Wi(n);return t.append("Authorization",Qa(e)),t}async function Bi(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Xa(n){return Number(n.replace("s","000"))}function Qa(n){return`${Vi} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=ji(n),s=Wi(n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={fid:t,authVersion:Vi,appId:n.appId,sdkVersion:xi},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await Bi(()=>fetch(i,o));if(c.ok){const l=await c.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:qi(l.authToken)}}else throw await zi("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=/^[cdef][\w-]{21}$/,Bt="";function no(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=io(n);return to.test(t)?t:Bt}catch{return Bt}}function io(n){return eo(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ki=new Map;function Ji(n,e){const t=Dt(n);Yi(t,e),so(t,e)}function Yi(n,e){const t=Ki.get(n);if(t)for(const i of t)i(e)}function so(n,e){const t=ro();t&&t.postMessage({key:n,fid:e}),ao()}let Fe=null;function ro(){return!Fe&&"BroadcastChannel"in self&&(Fe=new BroadcastChannel("[Firebase] FID Change"),Fe.onmessage=n=>{Yi(n.data.key,n.data.fid)}),Fe}function ao(){Ki.size===0&&Fe&&(Fe.close(),Fe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="firebase-installations-database",co=1,qe="firebase-installations-store";let Ht=null;function an(){return Ht||(Ht=ws(oo,co,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(qe)}}})),Ht}async function At(n,e){const t=Dt(n),s=(await an()).transaction(qe,"readwrite"),r=s.objectStore(qe),a=await r.get(t);return await r.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Ji(n,e.fid),e}async function Xi(n){const e=Dt(n),i=(await an()).transaction(qe,"readwrite");await i.objectStore(qe).delete(e),await i.done}async function Ut(n,e){const t=Dt(n),s=(await an()).transaction(qe,"readwrite"),r=s.objectStore(qe),a=await r.get(t),o=e(a);return o===void 0?await r.delete(t):await r.put(o,t),await s.done,o&&(!a||a.fid!==o.fid)&&Ji(n,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(n){let e;const t=await Ut(n.appConfig,i=>{const s=lo(i),r=uo(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===Bt?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function lo(n){const e=n||{fid:no(),registrationStatus:0};return Qi(e)}function uo(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(je.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=ho(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fo(n)}:{installationEntry:e}}async function ho(n,e){try{const t=await Za(n,e);return At(n.appConfig,t)}catch(t){throw Hi(t)&&t.customData.serverCode===409?await Xi(n.appConfig):await At(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function fo(n){let e=await Mn(n.appConfig);for(;e.registrationStatus===1;)await Gi(100),e=await Mn(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await on(n);return i||t}return e}function Mn(n){return Ut(n,e=>{if(!e)throw je.create("installation-not-found");return Qi(e)})}function Qi(n){return po(n)?{fid:n.fid,registrationStatus:0}:n}function po(n){return n.registrationStatus===1&&n.registrationTime+$i<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go({appConfig:n,heartbeatServiceProvider:e},t){const i=mo(n,t),s=Ya(n,t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={installation:{sdkVersion:xi,appId:n.appId}},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await Bi(()=>fetch(i,o));if(c.ok){const l=await c.json();return qi(l)}else throw await zi("Generate Auth Token",c)}function mo(n,{fid:e}){return`${ji(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(n,e=!1){let t;const i=await Ut(n.appConfig,r=>{if(!Zi(r))throw je.create("not-registered");const a=r.authToken;if(!e&&Io(a))return r;if(a.requestStatus===1)return t=_o(n,e),r;{if(!navigator.onLine)throw je.create("app-offline");const o=yo(r);return t=vo(n,o),o}});return t?await t:i.authToken}async function _o(n,e){let t=await Ln(n.appConfig);for(;t.authToken.requestStatus===1;)await Gi(100),t=await Ln(n.appConfig);const i=t.authToken;return i.requestStatus===0?cn(n,e):i}function Ln(n){return Ut(n,e=>{if(!Zi(e))throw je.create("not-registered");const t=e.authToken;return To(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function vo(n,e){try{const t=await go(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await At(n.appConfig,i),t}catch(t){if(Hi(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Xi(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await At(n.appConfig,i)}throw t}}function Zi(n){return n!==void 0&&n.registrationStatus===2}function Io(n){return n.requestStatus===2&&!wo(n)}function wo(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Ba}function yo(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function To(n){return n.requestStatus===1&&n.requestTime+$i<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(n){const e=n,{installationEntry:t,registrationPromise:i}=await on(e);return i?i.catch(console.error):cn(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(n,e=!1){const t=n;return await ko(t),(await cn(t,e)).token}async function ko(n){const{registrationPromise:e}=await on(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n){if(!n||!n.options)throw jt("App Configuration");if(!n.name)throw jt("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw jt(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function jt(n){return je.create("missing-app-config-values",{valueName:n})}/**
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
 */const es="installations",Ao="installations-internal",Po=n=>{const e=n.getProvider("app").getImmediate(),t=Eo(e),i=Qe(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Ro=n=>{const e=n.getProvider("app").getImmediate(),t=Qe(e,es).getImmediate();return{getId:()=>bo(t),getToken:s=>So(t,s)}};function Co(){Je(new Ye(es,Po,"PUBLIC")),Je(new Ye(Ao,Ro,"PRIVATE"))}Co();Ve(Fi,rn);Ve(Fi,rn,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="analytics",Oo="firebase_id",No="origin",Mo=60*1e3,Lo="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ln="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=new Qn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Q=new lt("analytics","Analytics",Do);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(n){if(!n.startsWith(ln)){const e=Q.create("invalid-gtag-resource",{gtagURL:n});return Y.warn(e.message),""}return n}function ts(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Fo(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function $o(n,e){const t=Fo("firebase-js-sdk-policy",{createScriptURL:Uo}),i=document.createElement("script"),s=`${ln}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function xo(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Vo(n,e,t,i,s,r){const a=i[s];try{if(a)await e[a];else{const c=(await ts(t)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(o){Y.error(o)}n("config",s,r)}async function Ho(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const o=await ts(t);for(const c of a){const l=o.find(p=>p.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){Y.error(r)}}function jo(n,e,t,i){async function s(r,...a){try{if(r==="event"){const[o,c]=a;await Ho(n,e,t,o,c)}else if(r==="config"){const[o,c]=a;await Vo(n,e,t,i,o,c)}else if(r==="consent"){const[o]=a;n("consent","update",o)}else if(r==="get"){const[o,c,l]=a;n("get",o,c,l)}else if(r==="set"){const[o]=a;n("set",o)}else n(r,...a)}catch(o){Y.error(o)}}return s}function qo(n,e,t,i,s){let r=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=jo(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function zo(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ln)&&t.src.includes(n))return t;return null}/**
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
 */const Wo=30,Bo=1e3;class Go{constructor(e={},t=Bo){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ns=new Go;function Ko(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Jo(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:Ko(i)},r=Lo.replace("{app-id}",t),a=await fetch(r,s);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(o=c.error.message)}catch{}throw Q.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function Yo(n,e=ns,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw Q.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Q.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Zo;return setTimeout(async()=>{o.abort()},t!==void 0?t:Mo),is({appId:i,apiKey:s,measurementId:r},a,o,e)}async function is(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=ns){var r;const{appId:a,measurementId:o}=n;try{await Xo(i,e)}catch(c){if(o)return Y.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:o};throw c}try{const c=await Jo(n);return s.deleteThrottleMetadata(a),c}catch(c){const l=c;if(!Qo(l)){if(s.deleteThrottleMetadata(a),o)return Y.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:o};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?pn(t,s.intervalMillis,Wo):pn(t,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return s.setThrottleMetadata(a,p),Y.debug(`Calling attemptFetch again in ${u} millis`),is(n,p,i,s)}}function Xo(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(Q.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Qo(n){if(!(n instanceof ut)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Zo{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ec(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,a=Object.assign(Object.assign({},i),{send_to:r});n("event",t,a)}}/**
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
 */async function tc(){if(ys())try{await Ts()}catch(n){return Y.warn(Q.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Y.warn(Q.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nc(n,e,t,i,s,r,a){var o;const c=Yo(n);c.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&Y.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Y.error(f)),e.push(c);const l=tc().then(f=>{if(f)return i.getId()}),[u,p]=await Promise.all([c,l]);zo(r)||$o(r,u.measurementId),s("js",new Date);const g=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return g[No]="firebase",g.update=!0,p!=null&&(g[Oo]=p),s("config",u.measurementId,g),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.app=e}_delete(){return delete rt[this.app.options.appId],Promise.resolve()}}let rt={},Dn=[];const Un={};let qt="dataLayer",sc="gtag",Fn,ss,$n=!1;function rc(){const n=[];if(ti()&&n.push("This is a browser extension environment."),bs()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=Q.create("invalid-analytics-context",{errorInfo:e});Y.warn(t.message)}}function ac(n,e,t){rc();const i=n.options.appId;if(!i)throw Q.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Y.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Q.create("no-api-key");if(rt[i]!=null)throw Q.create("already-exists",{id:i});if(!$n){xo(qt);const{wrappedGtag:r,gtagCore:a}=qo(rt,Dn,Un,qt,sc);ss=r,Fn=a,$n=!0}return rt[i]=nc(n,Dn,Un,e,Fn,qt,t),new ic(n)}function oc(n=ei()){n=De(n);const e=Qe(n,Pt);return e.isInitialized()?e.getImmediate():cc(n)}function cc(n,e={}){const t=Qe(n,Pt);if(t.isInitialized()){const s=t.getImmediate();if(ni(e,t.getOptions()))return s;throw Q.create("already-initialized")}return t.initialize({options:e})}function rs(n,e,t,i){n=De(n),ec(ss,rt[n.app.options.appId],e,t,i).catch(s=>Y.error(s))}const xn="@firebase/analytics",Vn="0.10.1";function lc(){Je(new Ye(Pt,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ac(i,s,t)},"PUBLIC")),Je(new Ye("analytics-internal",n,"PRIVATE")),Ve(xn,Vn),Ve(xn,Vn,"esm2017");function n(e){try{const t=e.getProvider(Pt).getImmediate();return{logEvent:(i,s,r)=>rs(t,i,s,r)}}catch(t){throw Q.create("interop-component-reg-failed",{reason:t})}}}lc();function uc(n){let e,t,i=fe(n[2])+"",s,r,a,o=fe(n[1])+"",c,l,u,p=fe(n[0])+"",g;return{c(){e=w("span"),t=w("span"),s=ne(i),r=ne(":"),a=w("span"),c=ne(o),l=ne(":"),u=w("span"),g=ne(p),this.h()},l(f){e=y(f,"SPAN",{class:!0});var k=H(e);t=y(k,"SPAN",{class:!0});var U=H(t);s=ie(U,i),U.forEach(h),r=ie(k,":"),a=y(k,"SPAN",{class:!0});var M=H(a);c=ie(M,o),M.forEach(h),l=ie(k,":"),u=y(k,"SPAN",{class:!0});var L=H(u);g=ie(L,p),L.forEach(h),k.forEach(h),this.h()},h(){E(t,"class","value"),E(a,"class","value"),E(u,"class","value"),E(e,"class","timer svelte-1y1osaq")},m(f,k){I(f,e,k),_(e,t),_(t,s),_(e,r),_(e,a),_(a,c),_(e,l),_(e,u),_(u,g)},p(f,[k]){k&4&&i!==(i=fe(f[2])+"")&&$e(s,i),k&2&&o!==(o=fe(f[1])+"")&&$e(c,o),k&1&&p!==(p=fe(f[0])+"")&&$e(g,p)},i:me,o:me,d(f){f&&h(e)}}}function fe(n){return n<10?`0${n}`:n.toString()}function dc(n,e,t){let i,s,r,a,o,c,{elapsedSeconds:l}=e,u=Date.now(),p=gn(!1);Ft(n,p,L=>t(12,a=L));let g=gn(0);Ft(n,g,L=>t(13,o=L));const f=Rs(0,function(F){const D=setInterval(()=>{a&&(g.set(Math.round((Date.now()-u)/1e3)),F(o))},1e3);return function(){clearInterval(D)}});Ft(n,f,L=>t(10,c=L));function k(){a||(u=Date.now()-o*1e3,p.set(!0))}function U(){a&&p.set(!1)}function M(){U(),u=Date.now(),g.set(0)}return n.$$set=L=>{"elapsedSeconds"in L&&t(6,l=L.elapsedSeconds)},n.$$.update=()=>{n.$$.dirty&1024&&t(2,i=Math.floor(c/3600)),n.$$.dirty&1028&&t(1,s=Math.floor((c-i*3600)/60)),n.$$.dirty&1030&&t(0,r=c-i*3600-s*60),n.$$.dirty&7&&t(6,l=fe(i)+":"+fe(s)+":"+fe(r))},[r,s,i,p,g,f,l,k,U,M,c]}class hc extends Kt{constructor(e){super(),Jt(this,e,dc,uc,Gt,{elapsedSeconds:6,start:7,stop:8,reset:9})}get start(){return this.$$.ctx[7]}get stop(){return this.$$.ctx[8]}get reset(){return this.$$.ctx[9]}}const{window:fc}=Cs;function Hn(n,e,t){const i=n.slice();return i[33]=e[t],i}function jn(n,e,t){const i=n.slice();return i[36]=e[t],i[38]=t,i}function qn(n,e,t){const i=n.slice();return i[36]=e[t],i[38]=t,i}function pc(n){let e,t="Loading Game...";return{c(){e=w("p"),e.textContent=t},l(i){e=y(i,"P",{"data-svelte-h":!0}),G(e)!=="svelte-kk77ic"&&(e.textContent=t)},m(i,s){I(i,e,s)},p:me,d(i){i&&h(e)}}}function gc(n){let e,t,i,s=[],r=new Map,a,o,c='<i class="fa-solid fa-eraser"></i>',l,u,p='<i class="fa-solid fa-shuffle"></i>',g,f,k='<i class="fa-solid fa-delete-left"></i>',U,M,L="Enter",F,K,D=ze(n[4]),P=[];for(let T=0;T<D.length;T+=1)P[T]=zn(qn(n,D,T));let $=ze(n[5]);const B=T=>T[38];for(let T=0;T<$.length;T+=1){let R=jn(n,$,T),v=B(R);r.set(v,s[T]=Wn(v,R))}return{c(){e=w("div");for(let T=0;T<P.length;T+=1)P[T].c();t=C(),i=w("div");for(let T=0;T<s.length;T+=1)s[T].c();a=C(),o=w("div"),o.innerHTML=c,l=C(),u=w("div"),u.innerHTML=p,g=C(),f=w("div"),f.innerHTML=k,U=C(),M=w("div"),M.textContent=L,this.h()},l(T){e=y(T,"DIV",{class:!0});var R=H(e);for(let q=0;q<P.length;q+=1)P[q].l(R);R.forEach(h),t=O(T),i=y(T,"DIV",{class:!0});var v=H(i);for(let q=0;q<s.length;q+=1)s[q].l(v);a=O(v),o=y(v,"DIV",{class:!0,"data-svelte-h":!0}),G(o)!=="svelte-pcdrzy"&&(o.innerHTML=c),l=O(v),u=y(v,"DIV",{class:!0,"data-svelte-h":!0}),G(u)!=="svelte-1nazuqy"&&(u.innerHTML=p),g=O(v),f=y(v,"DIV",{class:!0,"data-svelte-h":!0}),G(f)!=="svelte-1lzlrm1"&&(f.innerHTML=k),U=O(v),M=y(v,"DIV",{class:!0,"data-svelte-h":!0}),G(M)!=="svelte-10umx21"&&(M.textContent=L),v.forEach(h),this.h()},h(){E(e,"class","circle-container"),E(o,"class","key"),E(u,"class","key"),E(f,"class","key"),E(M,"class","key enter-key"),E(i,"class","keyboard")},m(T,R){I(T,e,R);for(let v=0;v<P.length;v+=1)P[v]&&P[v].m(e,null);I(T,t,R),I(T,i,R);for(let v=0;v<s.length;v+=1)s[v]&&s[v].m(i,null);_(i,a),_(i,o),_(i,l),_(i,u),_(i,g),_(i,f),_(i,U),_(i,M),F||(K=[ae(o,"click",n[15]),ae(u,"click",n[16]),ae(f,"click",n[17]),ae(M,"click",n[14])],F=!0)},p(T,R){if(R[0]&2064){D=ze(T[4]);let v;for(v=0;v<D.length;v+=1){const q=qn(T,D,v);P[v]?P[v].p(q,R):(P[v]=zn(q),P[v].c(),P[v].m(e,null))}for(;v<P.length;v+=1)P[v].d(1);P.length=D.length}R[0]&9248&&($=ze(T[5]),s=ks(s,R,B,1,T,$,r,i,Ps,Wn,a,jn))},d(T){T&&(h(e),h(t),h(i)),Jn(P,T);for(let R=0;R<s.length;R+=1)s[R].d();F=!1,Kn(K)}}}function zn(n){let e,t=(n[36]==""?"":n[36])+"",i,s,r;return{c(){e=w("div"),i=ne(t),s=C(),this.h()},l(a){e=y(a,"DIV",{class:!0,style:!0});var o=H(e);i=ie(o,t),s=O(o),o.forEach(h),this.h()},h(){E(e,"class","circle"),E(e,"style",r=`
              left: calc(38% + ${Math.cos(n[38]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(n[38]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
          `),it(e,"filled",n[36]!=""),it(e,"shared",n[11].includes(n[38]))},m(a,o){I(a,e,o),_(e,i),_(e,s)},p(a,o){o[0]&16&&t!==(t=(a[36]==""?"":a[36])+"")&&$e(i,t),o[0]&16&&r!==(r=`
              left: calc(38% + ${Math.cos(a[38]/a[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(a[38]/a[4].length*2*Math.PI-Math.PI/2)*100}px);
          `)&&E(e,"style",r),o[0]&16&&it(e,"filled",a[36]!="")},d(a){a&&h(e)}}}function Wn(n,e){let t,i=e[36]+"",s,r,a,o;function c(){return e[25](e[36],e[38])}return{key:n,first:null,c(){t=w("div"),s=ne(i),r=C(),this.h()},l(l){t=y(l,"DIV",{class:!0});var u=H(t);s=ie(u,i),r=O(u),u.forEach(h),this.h()},h(){E(t,"class","key"),it(t,"disabled",e[10](e[38])),this.first=t},m(l,u){I(l,t,u),_(t,s),_(t,r),a||(o=ae(t,"click",c),a=!0)},p(l,u){e=l,u[0]&32&&i!==(i=e[36]+"")&&$e(s,i),u[0]&1056&&it(t,"disabled",e[10](e[38]))},d(l){l&&h(t),a=!1,o()}}}function mc(n){let e;return{c(){e=ne("Loading Solutions...")},l(t){e=ie(t,"Loading Solutions...")},m(t,i){I(t,e,i)},p:me,d(t){t&&h(e)}}}function _c(n){let e,t=Rt(n[3][0])+"",i;return{c(){e=new Yn(!1),i=Ke(),this.h()},l(s){e=Xn(s,!1),i=Ke(),this.h()},h(){e.a=i},m(s,r){e.m(t,s,r),I(s,i,r)},p(s,r){r[0]&8&&t!==(t=Rt(s[3][0])+"")&&e.p(t)},d(s){s&&(h(i),e.d())}}}function vc(n){let e,t=ze(n[3]),i=[];for(let s=0;s<t.length;s+=1)i[s]=Bn(Hn(n,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=Ke()},l(s){for(let r=0;r<i.length;r+=1)i[r].l(s);e=Ke()},m(s,r){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(s,r);I(s,e,r)},p(s,r){if(r[0]&8){t=ze(s[3]);let a;for(a=0;a<t.length;a+=1){const o=Hn(s,t,a);i[a]?i[a].p(o,r):(i[a]=Bn(o),i[a].c(),i[a].m(e.parentNode,e))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},d(s){s&&h(e),Jn(i,s)}}}function Bn(n){let e,t=Rt(n[33])+"",i;return{c(){e=new Yn(!1),i=Ke(),this.h()},l(s){e=Xn(s,!1),i=Ke(),this.h()},h(){e.a=i},m(s,r){e.m(t,s,r),I(s,i,r)},p(s,r){r[0]&8&&t!==(t=Rt(s[33])+"")&&e.p(t)},d(s){s&&(h(i),e.d())}}}function Ic(n){let e,t='<span style="font-size:30px;padding-right:5px;">🥉</span> <div><p class="small-modal-text">Oooof.</p> <p class="small-modal-text">You&#39;re over today&#39;s average - try for gold tomorrow</p></div>';return{c(){e=w("div"),e.innerHTML=t,this.h()},l(i){e=y(i,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1dnxwdz"&&(e.innerHTML=t),this.h()},h(){E(e,"class","flex-container")},m(i,s){I(i,e,s)},d(i){i&&h(e)}}}function wc(n){let e,t='<span style="font-size:30px;padding-right:5px;">🥇</span> <div><p class="small-modal-text">Congratulations speedster.</p> <p class="small-modal-text">You&#39;re under today&#39;s average - very clever.</p></div>';return{c(){e=w("div"),e.innerHTML=t,this.h()},l(i){e=y(i,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-s6v4wd"&&(e.innerHTML=t),this.h()},h(){E(e,"class","flex-container")},m(i,s){I(i,e,s)},d(i){i&&h(e)}}}function yc(n){let e,t='<span style="font-size:30px;padding-right:5px;">🙀</span> <div><p class="small-modal-text">New High Score!</p> <p class="small-modal-text">You&#39;re officialy the fastest looper today!</p></div>';return{c(){e=w("div"),e.innerHTML=t,this.h()},l(i){e=y(i,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1mo40wc"&&(e.innerHTML=t),this.h()},h(){E(e,"class","flex-container")},m(i,s){I(i,e,s)},d(i){i&&h(e)}}}function Tc(n){let e,t="Solved in",i,s,r,a,o,c,l,u="Global Stats",p,g,f,k,U,M,L,F,K="Solutions",D,P,$,B,T,R,v,q,Z,j,ee,se,W,Ie="Share",re,b,V,x,we;k=new Es({props:{globalStats:n[9]}});function le(d,A){return d[3]&&d[3].length>2?vc:d[3]&&d[3].length>0?_c:mc}let ue=le(n),J=ue(n);function et(d,A){return d[9]&&d[9].isHighScore?yc:d[9]&&d[9].isUnderAverage?wc:Ic}let de=et(n),z=de(n);return{c(){e=w("p"),e.textContent=t,i=C(),s=w("p"),r=ne(n[7]),a=C(),o=w("hr"),c=C(),l=w("span"),l.textContent=u,p=C(),g=w("br"),f=C(),Se(k.$$.fragment),U=C(),M=w("hr"),L=C(),F=w("span"),F.textContent=K,D=C(),P=w("p"),$=C(),J.c(),B=C(),T=w("hr"),R=C(),z.c(),v=C(),q=w("hr"),Z=C(),j=w("div"),ee=w("div"),se=C(),W=w("button"),W.textContent=Ie,re=C(),b=w("div"),this.h()},l(d){e=y(d,"P",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1do05u2"&&(e.textContent=t),i=O(d),s=y(d,"P",{class:!0});var A=H(s);r=ie(A,n[7]),A.forEach(h),a=O(d),o=y(d,"HR",{}),c=O(d),l=y(d,"SPAN",{class:!0,"data-svelte-h":!0}),G(l)!=="svelte-eapto"&&(l.textContent=u),p=O(d),g=y(d,"BR",{}),f=O(d),ke(k.$$.fragment,d),U=O(d),M=y(d,"HR",{}),L=O(d),F=y(d,"SPAN",{class:!0,"data-svelte-h":!0}),G(F)!=="svelte-j8w724"&&(F.textContent=K),D=O(d),P=y(d,"P",{style:!0}),H(P).forEach(h),$=O(d),J.l(d),B=O(d),T=y(d,"HR",{}),R=O(d),z.l(d),v=O(d),q=y(d,"HR",{}),Z=O(d),j=y(d,"DIV",{class:!0});var te=H(j);ee=y(te,"DIV",{class:!0}),H(ee).forEach(h),se=O(te),W=y(te,"BUTTON",{class:!0,"data-svelte-h":!0}),G(W)!=="svelte-1urjot1"&&(W.textContent=Ie),re=O(te),b=y(te,"DIV",{class:!0}),H(b).forEach(h),te.forEach(h),this.h()},h(){E(e,"class","small-header"),E(s,"class","large-header"),E(l,"class","small-header"),E(F,"class","small-header"),E(P,"style","height:6px;margin:0;padding;0px;"),E(ee,"class","spacer"),E(W,"class","share-button"),E(b,"class","spacer"),E(j,"class","flex-container")},m(d,A){I(d,e,A),I(d,i,A),I(d,s,A),_(s,r),I(d,a,A),I(d,o,A),I(d,c,A),I(d,l,A),I(d,p,A),I(d,g,A),I(d,f,A),Ee(k,d,A),I(d,U,A),I(d,M,A),I(d,L,A),I(d,F,A),I(d,D,A),I(d,P,A),I(d,$,A),J.m(d,A),I(d,B,A),I(d,T,A),I(d,R,A),z.m(d,A),I(d,v,A),I(d,q,A),I(d,Z,A),I(d,j,A),_(j,ee),_(j,se),_(j,W),_(j,re),_(j,b),V=!0,x||(we=ae(W,"click",n[18]),x=!0)},p(d,A){(!V||A[0]&128)&&$e(r,d[7]);const te={};A[0]&512&&(te.globalStats=d[9]),k.$set(te),ue===(ue=le(d))&&J?J.p(d,A):(J.d(1),J=ue(d),J&&(J.c(),J.m(B.parentNode,B))),de!==(de=et(d))&&(z.d(1),z=de(d),z&&(z.c(),z.m(v.parentNode,v)))},i(d){V||(Ae(k.$$.fragment,d),V=!0)},o(d){Pe(k.$$.fragment,d),V=!1},d(d){d&&(h(e),h(i),h(s),h(a),h(o),h(c),h(l),h(p),h(g),h(f),h(U),h(M),h(L),h(F),h(D),h(P),h($),h(B),h(T),h(R),h(v),h(q),h(Z),h(j)),Re(k,d),J.d(d),z.d(d),x=!1,we()}}}function bc(n){let e,t,i,s;return i=new As({}),{c(){e=w("hr"),t=C(),Se(i.$$.fragment)},l(r){e=y(r,"HR",{}),t=O(r),ke(i.$$.fragment,r)},m(r,a){I(r,e,a),I(r,t,a),Ee(i,r,a),s=!0},p:me,i(r){s||(Ae(i.$$.fragment,r),s=!0)},o(r){Pe(i.$$.fragment,r),s=!1},d(r){r&&(h(e),h(t)),Re(i,r)}}}function Sc(n){let e,t='<span class="styled-header">How To Play</span>';return{c(){e=w("h2"),e.innerHTML=t,this.h()},l(i){e=y(i,"H2",{slot:!0,"data-svelte-h":!0}),G(e)!=="svelte-1kct8zk"&&(e.innerHTML=t),this.h()},h(){E(e,"slot","header")},m(i,s){I(i,e,s)},p:me,d(i){i&&h(e)}}}function kc(n){let e,t,i,s,r,a,o="Resume",c,l,u,p;return{c(){e=w("hr"),t=C(),i=w("div"),s=w("div"),r=C(),a=w("button"),a.textContent=o,c=C(),l=w("div"),this.h()},l(g){e=y(g,"HR",{}),t=O(g),i=y(g,"DIV",{class:!0});var f=H(i);s=y(f,"DIV",{class:!0}),H(s).forEach(h),r=O(f),a=y(f,"BUTTON",{class:!0,"data-svelte-h":!0}),G(a)!=="svelte-o41kx2"&&(a.textContent=o),c=O(f),l=y(f,"DIV",{class:!0}),H(l).forEach(h),f.forEach(h),this.h()},h(){E(s,"class","spacer"),E(a,"class","share-button"),E(l,"class","spacer"),E(i,"class","flex-container")},m(g,f){I(g,e,f),I(g,t,f),I(g,i,f),_(i,s),_(i,r),_(i,a),_(i,c),_(i,l),u||(p=ae(a,"click",n[20]),u=!0)},p:me,d(g){g&&(h(e),h(t),h(i)),u=!1,p()}}}function Ec(n){let e,t='<span class="styled-header">Paused</span>';return{c(){e=w("h2"),e.innerHTML=t,this.h()},l(i){e=y(i,"H2",{slot:!0,"data-svelte-h":!0}),G(e)!=="svelte-1ught0z"&&(e.innerHTML=t),this.h()},h(){E(e,"slot","header")},m(i,s){I(i,e,s)},p:me,d(i){i&&h(e)}}}function Ac(n){let e,t,i,s,r="LetterLoop",a,o,c,l,u,p,g,f,k='<i class="fa-regular fa-circle-question"></i> <p class="how-to-play">How to play</p>',U,M,L,F,K,D,P,$,B,T,R,v='<i class="fa-solid fa-pause"></i>',q,Z,j,ee,se,W,Ie,re,b,V,x,we,le;F=new Ss({});function ue(m){n[24](m)}let J={};n[7]!==void 0&&(J.elapsedSeconds=n[7]),$=new hc({props:J}),n[23]($),nt.push(()=>mt($,"elapsedSeconds",ue));function et(m,N){return m[3].length>0?gc:pc}let de=et(n),z=de(n);function d(m){n[26](m)}let A={modalType:"end",$$slots:{default:[Tc]},$$scope:{ctx:n}};n[0]!==void 0&&(A.showModal=n[0]),j=new $t({props:A}),nt.push(()=>mt(j,"showModal",d));function te(m){n[27](m)}let un={modalType:"help",$$slots:{header:[Sc],default:[bc]},$$scope:{ctx:n}};n[1]!==void 0&&(un.showModal=n[1]),W=new $t({props:un}),nt.push(()=>mt(W,"showModal",te));function as(m){n[28](m)}let dn={hide_close:!0,modalType:"pause",$$slots:{header:[Ec],default:[kc]},$$scope:{ctx:n}};return n[2]!==void 0&&(dn.showModal=n[2]),b=new $t({props:dn}),nt.push(()=>mt(b,"showModal",as)),{c(){e=w("main"),t=w("div"),i=w("div"),s=w("p"),s.textContent=r,a=C(),o=w("small"),c=ne("(public beta) · Edited by "),l=ne(n[8]),u=C(),p=w("div"),g=C(),f=w("div"),f.innerHTML=k,U=C(),M=w("div"),L=C(),Se(F.$$.fragment),K=C(),D=w("div"),P=w("div"),Se($.$$.fragment),T=C(),R=w("div"),R.innerHTML=v,q=C(),z.c(),Z=C(),Se(j.$$.fragment),se=C(),Se(W.$$.fragment),re=C(),Se(b.$$.fragment),this.h()},l(m){e=y(m,"MAIN",{});var N=H(e);t=y(N,"DIV",{class:!0});var he=H(t);i=y(he,"DIV",{class:!0});var ye=H(i);s=y(ye,"P",{class:!0,"data-svelte-h":!0}),G(s)!=="svelte-1qmyjs9"&&(s.textContent=r),a=O(ye),o=y(ye,"SMALL",{style:!0});var Ue=H(o);c=ie(Ue,"(public beta) · Edited by "),l=ie(Ue,n[8]),Ue.forEach(h),ye.forEach(h),u=O(he),p=y(he,"DIV",{class:!0}),H(p).forEach(h),g=O(he),f=y(he,"DIV",{class:!0,"data-svelte-h":!0}),G(f)!=="svelte-1i75e1h"&&(f.innerHTML=k),he.forEach(h),U=O(N),M=y(N,"DIV",{class:!0}),H(M).forEach(h),L=O(N),ke(F.$$.fragment,N),K=O(N),D=y(N,"DIV",{class:!0});var Te=H(D);P=y(Te,"DIV",{class:!0});var hn=H(P);ke($.$$.fragment,hn),hn.forEach(h),T=O(Te),R=y(Te,"DIV",{"data-svelte-h":!0}),G(R)!=="svelte-1mqs5ls"&&(R.innerHTML=v),Te.forEach(h),q=O(N),z.l(N),N.forEach(h),Z=O(m),ke(j.$$.fragment,m),se=O(m),ke(W.$$.fragment,m),re=O(m),ke(b.$$.fragment,m),this.h()},h(){E(s,"class","title"),cs(o,"color","rgb(46, 46, 46)"),E(i,"class","title-container "),E(p,"class","spacer"),E(f,"class","help-container"),E(t,"class","nav-flex-container"),E(M,"class","divider"),E(P,"class","timer-container"),E(D,"class","flex-container")},m(m,N){I(m,e,N),_(e,t),_(t,i),_(i,s),_(i,a),_(i,o),_(o,c),_(o,l),_(t,u),_(t,p),_(t,g),_(t,f),_(e,U),_(e,M),_(e,L),Ee(F,e,null),_(e,K),_(e,D),_(D,P),Ee($,P,null),_(D,T),_(D,R),_(e,q),z.m(e,null),I(m,Z,N),Ee(j,m,N),I(m,se,N),Ee(W,m,N),I(m,re,N),Ee(b,m,N),x=!0,we||(le=[ae(fc,"keydown",ls(n[12])),ae(f,"click",n[22]),ae(R,"click",n[19])],we=!0)},p(m,N){(!x||N[0]&256)&&$e(l,m[8]);const he={};!B&&N[0]&128&&(B=!0,he.elapsedSeconds=m[7],gt(()=>B=!1)),$.$set(he),de===(de=et(m))&&z?z.p(m,N):(z.d(1),z=de(m),z&&(z.c(),z.m(e,null)));const ye={};N[0]&648|N[1]&512&&(ye.$$scope={dirty:N,ctx:m}),!ee&&N[0]&1&&(ee=!0,ye.showModal=m[0],gt(()=>ee=!1)),j.$set(ye);const Ue={};N[1]&512&&(Ue.$$scope={dirty:N,ctx:m}),!Ie&&N[0]&2&&(Ie=!0,Ue.showModal=m[1],gt(()=>Ie=!1)),W.$set(Ue);const Te={};N[1]&512&&(Te.$$scope={dirty:N,ctx:m}),!V&&N[0]&4&&(V=!0,Te.showModal=m[2],gt(()=>V=!1)),b.$set(Te)},i(m){x||(Ae(F.$$.fragment,m),Ae($.$$.fragment,m),Ae(j.$$.fragment,m),Ae(W.$$.fragment,m),Ae(b.$$.fragment,m),x=!0)},o(m){Pe(F.$$.fragment,m),Pe($.$$.fragment,m),Pe(j.$$.fragment,m),Pe(W.$$.fragment,m),Pe(b.$$.fragment,m),x=!1},d(m){m&&(h(e),h(Z),h(se),h(re)),Re(F),n[23](null),Re($),z.d(),Re(j,m),Re(W,m),Re(b,m),we=!1,Kn(le)}}}function Gn(n){return n.split("").sort(()=>Math.random()-.5).join("")}function Rt(n){if(!n)return"Loading Solutions...";const e=n.substring(0,5),t=n.substring(4,8)+e[0];return`
        <div>
          <a href="https://www.merriam-webster.com/dictionary/${e}" target="blank">${e}</a> 
          + 
          <a href="https://www.merriam-webster.com/dictionary/${t}" target="blank">${t}</a>
        </div>
      `}function Pc(n,e,t){let i,s=!1,r=!1,a=!1,o=[];o=o.map(b=>b.toLowerCase());let c,l=Array(8).fill(""),u=[],p,g=0,f=[0,4],k,U=0,M="---",L;os(async()=>{const b=oc(Di);rs(b,"screen_view",{firebase_screen:"game_board_view",firebase_screen_class:"game_board_controller"});const V=new Date,x={year:"numeric",month:"2-digit",day:"2-digit"},we=V.toLocaleDateString("en-US",x).replace(/\//g,"-");try{if(await xa()){const le=await si("solutions/"+we),ue=Object.values(le);t(8,M=ue[0]),t(3,o=ue[1]),c=o[0],t(5,p=Gn(c)),k.start()}}catch(le){console.error("Error fetching data from Firebase:",le)}});function F(b,V){for(let x=0;x<b.length;x++)if(b[x]==V&&!i(x))return x;return-1}function K(b){const V=b.key.toLowerCase(),x=F(p,V);b.keyCode===13?P():b.keyCode===8?T():x!==-1&&!i(x)&&D(V,x)}function D(b,V){g<l.length&&!i(V)&&(t(4,l[g]=b,l),g+=1,t(21,u=[...u,V]))}function P(){const b=l.join(""),V=l.filter(x=>x!=="").length;o.includes(b)?(t(0,s=!0),k.stop(),Va(U).then(x=>{t(9,L=x)}).catch(x=>{console.error("Error:",x)})):V!=8?tt.default("You Must fill in every letter",1e3):tt.default("Incorrect",1e3)}function $(){t(4,l=Array(8).fill("")),g=0,t(21,u=[])}function B(){t(5,p=Gn(c)),$()}function T(){g>0&&(t(4,l[g-1]="",l),g-=1,t(21,u=u.slice(0,-1)))}const R=async()=>{let b=`I completed the LetterLoop in: 
🔴`+U+"🔴";if(navigator.share)try{await navigator.share({title:"",text:b,url:window.location.href})}catch{tt.default("Error",1e3)}else try{await navigator.clipboard.writeText(b),tt.default("Copied Text!",1e3)}catch{tt.default("Error",1e3)}};function v(){k.stop(),t(2,a=!0)}function q(){k.start(),t(2,a=!1)}const Z=()=>t(1,r=!0);function j(b){nt[b?"unshift":"push"](()=>{k=b,t(6,k)})}function ee(b){U=b,t(7,U)}const se=(b,V)=>D(b,V);function W(b){s=b,t(0,s)}function Ie(b){r=b,t(1,r)}function re(b){a=b,t(2,a)}return n.$$.update=()=>{n.$$.dirty[0]&2097152&&t(10,i=b=>u.includes(b))},new Date().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}),[s,r,a,o,l,p,k,U,M,L,i,f,K,D,P,$,B,T,R,v,q,u,Z,j,ee,se,W,Ie,re]}class Rc extends Kt{constructor(e){super(),Jt(this,e,Pc,Ac,Gt,{},null,[-1,-1])}}function Cc(n){let e,t,i;return t=new Rc({}),{c(){e=w("main"),Se(t.$$.fragment)},l(s){e=y(s,"MAIN",{});var r=H(e);ke(t.$$.fragment,r),r.forEach(h)},m(s,r){I(s,e,r),Ee(t,e,null),i=!0},p:me,i(s){i||(Ae(t.$$.fragment,s),i=!0)},o(s){Pe(t.$$.fragment,s),i=!1},d(s){s&&h(e),Re(t)}}}class Dc extends Kt{constructor(e){super(),Jt(this,e,null,Cc,Gt,{})}}export{Dc as component};
