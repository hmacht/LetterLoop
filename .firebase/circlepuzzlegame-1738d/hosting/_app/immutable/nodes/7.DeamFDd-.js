import{s as Yt,n as pe,d as Vt,f as st,j as vt,r as Jn,o as os}from"../chunks/scheduler.Dj2J5mG2.js";import{S as Xt,i as Qt,e as v,j as ne,c as I,a as x,k as ie,d as f,p as A,b as _,f as w,m as xe,z as It,s as R,v as Te,h as z,l as P,w as be,q as cs,x as Se,A as oe,B as ls,t as ke,g as Ee,y as Ae,C as Yn,D as rt,H as Xn,n as Xe,E as Qn}from"../chunks/index.BbVivFmB.js";import{r as He,L as Zn,g as ei,i as us,a as ds,_ as Qe,C as Ze,b as tt,c as hs,d as ti,e as ni,f as ut,h as Me,E as dt,j as fs,k as ii,l as si,m as X,F as ht,n as ps,q as ft,o as ms,p as gs,t as _s,u as vs,v as Is,w as pn,x as ri,y as ws,z as mn,A as ys,B as Ts,D as bs,T as Ss,M as Ht,G as it,I as Ge,J as ks,S as Es,H as As,K as Rs,s as Ps}from"../chunks/Stats.DiE72djA.js";import{r as Cs,w as gn}from"../chunks/index.DHaQdJMq.js";const Os=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var Ns="firebase",Ms="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(Ns,Ms,"app");function Zt(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function ai(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ls=ai,oi=new dt("auth","Firebase",ai());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Zn("@firebase/auth");function Ds(n,...e){kt.logLevel<=si.WARN&&kt.warn(`Auth (${ut}): ${n}`,...e)}function yt(n,...e){kt.logLevel<=si.ERROR&&kt.error(`Auth (${ut}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,...e){throw en(n,...e)}function ce(n,...e){return en(n,...e)}function Us(n,e,t){const i=Object.assign(Object.assign({},Ls()),{[e]:t});return new dt("auth","Firebase",i).create(e,{appName:n.name})}function en(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return oi.create(n,...e)}function S(n,e,...t){if(!n)throw en(e,...t)}function he(n){const e="INTERNAL ASSERTION FAILED: "+n;throw yt(e),new Error(e)}function ge(n,e){n||he(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Fs(){return _n()==="http:"||_n()==="https:"}function _n(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fs()||ni()||"connection"in navigator)?navigator.onLine:!0}function xs(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ge(t>e,"Short delay should be less than long delay!"),this.isMobile=us()||ds()}get(){return $s()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n,e){ge(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new pt(3e4,6e4);function Mt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function nt(n,e,t,i,s={}){return li(n,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const o=ft(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),ci.fetch()(di(n,n.config.apiHost,t,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function li(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Vs),e);try{const s=new js(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw wt(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wt(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw wt(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw wt(n,"user-disabled",a);const h=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Us(n,h,l);me(n,h)}}catch(s){if(s instanceof ht)throw s;me(n,"network-request-failed",{message:String(s)})}}async function ui(n,e,t,i,s={}){const r=await nt(n,e,t,i,s);return"mfaPendingCredential"in r&&me(n,"multi-factor-auth-required",{_serverResponse:r}),r}function di(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?tn(n.config,s):`${n.config.apiScheme}://${s}`}class js{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ce(this.auth,"network-request-failed")),Hs.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wt(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ce(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(n,e){return nt(n,"POST","/v1/accounts:delete",e)}async function zs(n,e){return nt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ws(n,e=!1){const t=Me(n),i=await t.getIdToken(e),s=nn(i);S(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:at(jt(s.auth_time)),issuedAtTime:at(jt(s.iat)),expirationTime:at(jt(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function jt(n){return Number(n)*1e3}function nn(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return yt("JWT malformed, contained fewer than 3 sections"),null;try{const s=ms(t);return s?JSON.parse(s):(yt("Failed to decode base64 JWT payload"),null)}catch(s){return yt("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bs(n){const e=nn(n);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ht&&Gs(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Gs({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=at(this.lastLoginAt),this.creationTime=at(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(n){var e;const t=n.auth,i=await n.getIdToken(),s=await ct(n,zs(t,{idToken:i}));S(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Xs(r.providerUserInfo):[],o=Ys(n.providerData,a),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new hi(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,m)}async function Js(n){const e=Me(n);await Et(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ys(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Xs(n){return n.map(e=>{var{providerId:t}=e,i=Zt(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(n,e){const t=await li(n,{},async()=>{const i=ft({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,a=di(n,s,"/v1/token",`key=${r}`),o=await n._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ci.fetch()(a,{method:"POST",headers:o,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Zs(n,e){return nt(n,"POST","/v2/accounts:revokeToken",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Qs(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,a=new lt;return i&&(S(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(S(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(S(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lt,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,e){S(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ve{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Zt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ks(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new hi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ct(this,this.stsTokenManager.getToken(this.auth,e));return S(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ws(this,e)}reload(){return Js(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ve(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Et(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ct(this,qs(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,a,o,c,l,h;const m=(i=t.displayName)!==null&&i!==void 0?i:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,E=(a=t.photoURL)!==null&&a!==void 0?a:void 0,U=(o=t.tenantId)!==null&&o!==void 0?o:void 0,N=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,M=(l=t.createdAt)!==null&&l!==void 0?l:void 0,F=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:B,emailVerified:L,isAnonymous:C,providerData:$,stsTokenManager:W}=t;S(B&&W,e,"internal-error");const T=lt.fromJSON(this.name,W);S(typeof B=="string",e,"internal-error"),ye(m,e.name),ye(g,e.name),S(typeof L=="boolean",e,"internal-error"),S(typeof C=="boolean",e,"internal-error"),ye(p,e.name),ye(E,e.name),ye(U,e.name),ye(N,e.name),ye(M,e.name),ye(F,e.name);const O=new Ve({uid:B,auth:e,email:g,emailVerified:L,displayName:m,isAnonymous:C,photoURL:E,phoneNumber:p,tenantId:U,stsTokenManager:T,createdAt:M,lastLoginAt:F});return $&&Array.isArray($)&&(O.providerData=$.map(y=>Object.assign({},y))),N&&(O._redirectEventId=N),O}static async _fromIdTokenResponse(e,t,i=!1){const s=new lt;s.updateFromServerResponse(t);const r=new Ve({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Et(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Map;function fe(n){ge(n instanceof Function,"Expected a class definition");let e=vn.get(n);return e?(ge(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vn.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fi.type="NONE";const In=fi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n,e,t){return`firebase:${n}:${e}:${t}`}class Je{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Tt(this.userKey,s.apiKey,r),this.fullPersistenceKey=Tt("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ve._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Je(fe(In),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||fe(In);const a=Tt(i,e.config.apiKey,e.name);let o=null;for(const l of t)try{const h=await l._get(a);if(h){const m=Ve._fromJSON(e,h);l!==r&&(o=m),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Je(r,e,i):(r=c[0],o&&await r._set(a,o.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(a)}catch{}})),new Je(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vi(e))return"Blackberry";if(Ii(e))return"Webos";if(sn(e))return"Safari";if((e.includes("chrome/")||mi(e))&&!e.includes("edge/"))return"Chrome";if(_i(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function pi(n=X()){return/firefox\//i.test(n)}function sn(n=X()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mi(n=X()){return/crios\//i.test(n)}function gi(n=X()){return/iemobile/i.test(n)}function _i(n=X()){return/android/i.test(n)}function vi(n=X()){return/blackberry/i.test(n)}function Ii(n=X()){return/webos/i.test(n)}function Lt(n=X()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function er(n=X()){var e;return Lt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tr(){return ps()&&document.documentMode===10}function wi(n=X()){return Lt(n)||_i(n)||Ii(n)||vi(n)||/windows phone/i.test(n)||gi(n)}function nr(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n,e=[]){let t;switch(n){case"Browser":t=wn(X());break;case"Worker":t=`${wn(X())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ut}/${i}`}/**
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
 */class ir{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((a,o)=>{try{const c=e(r);a(c)}catch(c){o(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function sr(n,e={}){return nt(n,"GET","/v2/passwordPolicy",Mt(n,e))}/**
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
 */const rr=6;class ar{constructor(e){var t,i,s,r;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:rr,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yn(this),this.idTokenSubscription=new yn(this),this.beforeStateQueue=new ir(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fe(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Je.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Et(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xs()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Me(e):null;return t&&S(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sr(this),t=new ar(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Zs(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fe(e)||this._popupRedirectResolver;S(t,this,"argument-error"),this.redirectPersistenceManager=await Je.create(this,[fe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(o,this,"internal-error"),o.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ds(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Dt(n){return Me(n)}class yn{constructor(e){this.auth=e,this.observer=null,this.addObserver=fs(t=>this.observer=t)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cr(n){rn=n}function lr(n){return rn.loadJS(n)}function ur(){return rn.gapiScript}function dr(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n,e){const t=tt(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ii(r,e??{}))return s;me(s,"already-initialized")}return t.initialize({options:e})}function fr(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(fe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function pr(n,e,t){const i=Dt(n);S(i._canInitEmulator,i,"emulator-config-failed"),S(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Ti(e),{host:a,port:o}=mr(e),c=o===null?"":`:${o}`;i.config.emulator={url:`${r}//${a}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||gr()}function Ti(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mr(n){const e=Ti(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Tn(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:Tn(a)}}}function Tn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gr(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,t){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(n,e){return ui(n,"POST","/v1/accounts:signInWithIdp",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="http://localhost";class je extends bi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Zt(t,["providerId","signInMethod"]);if(!i||!s)return null;const a=new je(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ye(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ye(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}buildRequest(){const e={requestUri:_r,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ft(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mt extends Si{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends mt{constructor(){super("facebook.com")}static credential(e){return je._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com";Re.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends mt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return je._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Pe.credential(t,i)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends mt{constructor(){super("github.com")}static credential(e){return je._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.GITHUB_SIGN_IN_METHOD="github.com";Ce.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends mt{constructor(){super("twitter.com")}static credential(e,t){return je._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Oe.credential(t,i)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n,e){return ui(n,"POST","/v1/accounts:signUp",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Ve._fromIdTokenResponse(e,i,s),a=bn(i);return new Ne({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=bn(i);return new Ne({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function bn(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(n){var e;const t=Dt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ne({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await vr(t,{returnSecureToken:!0}),s=await Ne._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends ht{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,At.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new At(e,t,i,s)}}function ki(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?At._fromErrorAndOperation(n,r,e,i):r})}async function wr(n,e,t=!1){const i=await ct(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ne._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await ct(n,ki(i,s,e,n),t);S(r.idToken,i,"internal-error");const a=nn(r.idToken);S(a,i,"internal-error");const{sub:o}=a;return S(n.uid===o,i,"user-mismatch"),Ne._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&me(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(n,e,t=!1){const i="signIn",s=await ki(n,i,e),r=await Ne._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function br(n,e,t,i){return Me(n).onIdTokenChanged(e,t,i)}function Sr(n,e,t){return Me(n).beforeAuthStateChanged(e,t)}const Rt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Rt,"1"),this.storage.removeItem(Rt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){const n=X();return sn(n)||Lt(n)}const Er=1e3,Ar=10;class Ai extends Ei{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kr()&&nr(),this.fallbackToPolling=wi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);tr()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ar):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Er)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ai.type="LOCAL";const Rr=Ai;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Ei{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ri.type="SESSION";const Pi=Ri;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ut{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Ut(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const o=Array.from(a).map(async l=>l(t.origin,r)),c=await Pr(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ut.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((o,c)=>{const l=an("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(g.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return window}function Or(n){le().location.href=n}/**
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
 */function Ci(){return typeof le().WorkerGlobalScope<"u"&&typeof le().importScripts=="function"}async function Nr(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mr(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Lr(){return Ci()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="firebaseLocalStorageDb",Dr=1,Pt="firebaseLocalStorage",Ni="fbase_key";class gt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ft(n,e){return n.transaction([Pt],e?"readwrite":"readonly").objectStore(Pt)}function Ur(){const n=indexedDB.deleteDatabase(Oi);return new gt(n).toPromise()}function Kt(){const n=indexedDB.open(Oi,Dr);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Pt,{keyPath:Ni})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Pt)?e(i):(i.close(),await Ur(),e(await Kt()))})})}async function Sn(n,e,t){const i=Ft(n,!0).put({[Ni]:e,value:t});return new gt(i).toPromise()}async function Fr(n,e){const t=Ft(n,!1).get(e),i=await new gt(t).toPromise();return i===void 0?null:i.value}function kn(n,e){const t=Ft(n,!0).delete(e);return new gt(t).toPromise()}const $r=800,xr=3;class Mi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>xr)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ci()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ut._getInstance(Lr()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Nr(),!this.activeServiceWorker)return;this.sender=new Cr(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mr()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kt();return await Sn(e,Rt,"1"),await kn(e,Rt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Sn(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Fr(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ft(s,!1).getAll();return new gt(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$r)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mi.type="LOCAL";const Vr=Mi;new pt(3e4,6e4);/**
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
 */function Hr(n,e){return e?fe(e):(S(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends bi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ye(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ye(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jr(n){return Tr(n.auth,new on(n),n.bypassAuthState)}function qr(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),yr(t,new on(n),n.bypassAuthState)}async function zr(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),wr(t,new on(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jr;case"linkViaPopup":case"linkViaRedirect":return zr;case"reauthViaPopup":case"reauthViaRedirect":return qr;default:me(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new pt(2e3,1e4);class Ke extends Li{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ke.currentPopupAction&&Ke.currentPopupAction.cancel(),Ke.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=an();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ke.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wr.get())};e()}}Ke.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="pendingRedirect",bt=new Map;class Gr extends Li{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=bt.get(this.auth._key());if(!e){try{const i=await Kr(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}bt.set(this.auth._key(),e)}return this.bypassAuthState||bt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kr(n,e){const t=Xr(e),i=Yr(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Jr(n,e){bt.set(n._key(),e)}function Yr(n){return fe(n._redirectPersistence)}function Xr(n){return Tt(Br,n.config.apiKey,n.name)}async function Qr(n,e,t=!1){const i=Dt(n),s=Hr(i,e),a=await new Gr(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=10*60*1e3;class ea{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ta(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Di(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ce(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zr&&this.cachedEventUids.clear(),this.cachedEventUids.has(En(e))}saveEventToCache(e){this.cachedEventUids.add(En(e)),this.lastProcessedEventTime=Date.now()}}function En(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Di({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ta(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Di(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(n,e={}){return nt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sa=/^https?/;async function ra(n){if(n.config.emulator)return;const{authorizedDomains:e}=await na(n);for(const t of e)try{if(aa(t))return}catch{}me(n,"unauthorized-domain")}function aa(n){const e=Gt(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!sa.test(t))return!1;if(ia.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const oa=new pt(3e4,6e4);function An(){const n=le().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ca(n){return new Promise((e,t)=>{var i,s,r;function a(){An(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{An(),t(ce(n,"network-request-failed"))},timeout:oa.get()})}if(!((s=(i=le().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=le().gapi)===null||r===void 0)&&r.load)a();else{const o=dr("iframefcb");return le()[o]=()=>{gapi.load?a():t(ce(n,"network-request-failed"))},lr(`${ur()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw St=null,e})}let St=null;function la(n){return St=St||ca(n),St}/**
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
 */const ua=new pt(5e3,15e3),da="__/auth/iframe",ha="emulator/auth/iframe",fa={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ma(n){const e=n.config;S(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?tn(e,ha):`https://${n.config.authDomain}/${da}`,i={apiKey:e.apiKey,appName:n.name,v:ut},s=pa.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${ft(i).slice(1)}`}async function ga(n){const e=await la(n),t=le().gapi;return S(t,n,"internal-error"),e.open({where:document.body,url:ma(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fa,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=ce(n,"network-request-failed"),o=le().setTimeout(()=>{r(a)},ua.get());function c(){le().clearTimeout(o),s(i)}i.ping(c).then(c,()=>{r(a)})}))}/**
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
 */const _a={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},va=500,Ia=600,wa="_blank",ya="http://localhost";class Rn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ta(n,e,t,i=va,s=Ia){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const c=Object.assign(Object.assign({},_a),{width:i.toString(),height:s.toString(),top:r,left:a}),l=X().toLowerCase();t&&(o=mi(l)?wa:t),pi(l)&&(e=e||ya,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[p,E])=>`${g}${p}=${E},`,"");if(er(l)&&o!=="_self")return ba(e||"",o),new Rn(null);const m=window.open(e||"",o,h);S(m,n,"popup-blocked");try{m.focus()}catch{}return new Rn(m)}function ba(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Sa="__/auth/handler",ka="emulator/auth/handler",Ea=encodeURIComponent("fac");async function Pn(n,e,t,i,s,r){S(n.config.authDomain,n,"auth-domain-config-required"),S(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ut,eventId:s};if(e instanceof Si){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",gs(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries(r||{}))a[h]=m}if(e instanceof mt){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(a.scopes=h.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const h of Object.keys(o))o[h]===void 0&&delete o[h];const c=await n._getAppCheckToken(),l=c?`#${Ea}=${encodeURIComponent(c)}`:"";return`${Aa(n)}?${ft(o).slice(1)}${l}`}function Aa({config:n}){return n.emulator?tn(n,ka):`https://${n.authDomain}/${Sa}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="webStorageSupport";class Ra{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pi,this._completeRedirectFn=Qr,this._overrideRedirectResult=Jr}async _openPopup(e,t,i,s){var r;ge((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await Pn(e,t,i,Gt(),s);return Ta(e,a,an())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Pn(e,t,i,Gt(),s);return Or(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(ge(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await ga(e),i=new ea(e);return t.register("authEvent",s=>(S(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qt,{type:qt},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[qt];a!==void 0&&t(!!a),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ra(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wi()||sn()||Lt()}}const Pa=Ra;var Cn="@firebase/auth",On="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Na(n){Qe(new Ze("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=i.options;S(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yi(n)},l=new or(i,s,r,c);return fr(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Qe(new Ze("auth-internal",e=>{const t=Dt(e.getProvider("auth").getImmediate());return(i=>new Ca(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Cn,On,Oa(n)),He(Cn,On,"esm2017")}/**
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
 */const Ma=5*60,La=ei("authIdTokenMaxAge")||Ma;let Nn=null;const Da=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>La)return;const s=t==null?void 0:t.token;Nn!==s&&(Nn=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ua(n=ti()){const e=tt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hr(n,{popupRedirectResolver:Pa,persistence:[Vr,Rr,Pi]}),i=ei("authTokenSyncURL");if(i){const r=Da(i);Sr(t,r,()=>r(t.currentUser)),br(t,a=>r(a))}const s=hs("auth");return s&&pr(t,`http://${s}`),t}function Fa(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}cr({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ce("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Fa().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Na("Browser");const $a={apiKey:"AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",authDomain:"circlepuzzlegame-1738d.firebaseapp.com",projectId:"circlepuzzlegame-1738d",storageBucket:"circlepuzzlegame-1738d.appspot.com",messagingSenderId:"62490740969",appId:"1:62490740969:web:719c6ea78f8148089f4878",measurementId:"G-EEEKPPSEN9"},Ui=_s($a),xa=Ua(Ui);async function Va(){return new Promise((n,e)=>{Ir(xa).then(()=>{n(!0)}).catch(t=>{t.code;var i=t.message;console.error("Failed to sign in anonymously:",i),n(!1)})})}async function Ha(n){const e=vs(),t=Is(e,"Stats/"+Fi()),i=await ja();if(i==="NOREF")return pn(t,{averageTime:n,minTime:n,count:1}),{averageTime:n,minTime:n,count:1,isUnderAverage:!0,isHighScore:!0};{const s=i.averageTime,r=i.minTime,a=i.count,o=za(s,a,n),c=Wa(n,r),l=a+1;return pn(t,{averageTime:o,minTime:c,count:l}),{averageTime:s,minTime:c,count:l,isUnderAverage:Mn(n,s),isHighScore:Mn(n,r)}}}function Fi(){const n=new Date,e={year:"numeric",month:"2-digit",day:"2-digit"};return n.toLocaleDateString("en-US",e).replace(/\//g,"-")}async function ja(){try{return await ri("Stats/"+Fi())}catch{return null}}function et(n){const[e,t,i]=n.split(":").map(Number);return e*3600+t*60+i}function qa(n){const e=Math.floor(n/3600),t=Math.floor(n%3600/60),i=Math.round(n%60);return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}function za(n,e,t){const i=et(n),s=et(t),r=(i*e+s)/(e+1);return qa(r)}function Wa(n,e){const t=et(n),i=et(e);return t<i?n:e}function Mn(n,e){const t=et(n),i=et(e);return t<i}const $i="@firebase/installations",cn="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=1e4,Vi=`w:${cn}`,Hi="FIS_v2",Ba="https://firebaseinstallations.googleapis.com/v1",Ga=60*60*1e3,Ka="installations",Ja="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qe=new dt(Ka,Ja,Ya);function ji(n){return n instanceof ht&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi({projectId:n}){return`${Ba}/projects/${n}/installations`}function zi(n){return{token:n.token,requestStatus:2,expiresIn:Qa(n.expiresIn),creationTime:Date.now()}}async function Wi(n,e){const i=(await e.json()).error;return qe.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Bi({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Xa(n,{refreshToken:e}){const t=Bi(n);return t.append("Authorization",Za(e)),t}async function Gi(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Qa(n){return Number(n.replace("s","000"))}function Za(n){return`${Hi} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=qi(n),s=Bi(n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={fid:t,authVersion:Hi,appId:n.appId,sdkVersion:Vi},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await Gi(()=>fetch(i,o));if(c.ok){const l=await c.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:zi(l.authToken)}}else throw await Wi("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=/^[cdef][\w-]{21}$/,Jt="";function io(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=so(n);return no.test(t)?t:Jt}catch{return Jt}}function so(n){return to(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Map;function Yi(n,e){const t=$t(n);Xi(t,e),ro(t,e)}function Xi(n,e){const t=Ji.get(n);if(t)for(const i of t)i(e)}function ro(n,e){const t=ao();t&&t.postMessage({key:n,fid:e}),oo()}let $e=null;function ao(){return!$e&&"BroadcastChannel"in self&&($e=new BroadcastChannel("[Firebase] FID Change"),$e.onmessage=n=>{Xi(n.data.key,n.data.fid)}),$e}function oo(){Ji.size===0&&$e&&($e.close(),$e=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="firebase-installations-database",lo=1,ze="firebase-installations-store";let zt=null;function ln(){return zt||(zt=ws(co,lo,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ze)}}})),zt}async function Ct(n,e){const t=$t(n),s=(await ln()).transaction(ze,"readwrite"),r=s.objectStore(ze),a=await r.get(t);return await r.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Yi(n,e.fid),e}async function Qi(n){const e=$t(n),i=(await ln()).transaction(ze,"readwrite");await i.objectStore(ze).delete(e),await i.done}async function xt(n,e){const t=$t(n),s=(await ln()).transaction(ze,"readwrite"),r=s.objectStore(ze),a=await r.get(t),o=e(a);return o===void 0?await r.delete(t):await r.put(o,t),await s.done,o&&(!a||a.fid!==o.fid)&&Yi(n,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(n){let e;const t=await xt(n.appConfig,i=>{const s=uo(i),r=ho(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===Jt?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function uo(n){const e=n||{fid:io(),registrationStatus:0};return Zi(e)}function ho(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(qe.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=fo(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:po(n)}:{installationEntry:e}}async function fo(n,e){try{const t=await eo(n,e);return Ct(n.appConfig,t)}catch(t){throw ji(t)&&t.customData.serverCode===409?await Qi(n.appConfig):await Ct(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function po(n){let e=await Ln(n.appConfig);for(;e.registrationStatus===1;)await Ki(100),e=await Ln(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await un(n);return i||t}return e}function Ln(n){return xt(n,e=>{if(!e)throw qe.create("installation-not-found");return Zi(e)})}function Zi(n){return mo(n)?{fid:n.fid,registrationStatus:0}:n}function mo(n){return n.registrationStatus===1&&n.registrationTime+xi<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go({appConfig:n,heartbeatServiceProvider:e},t){const i=_o(n,t),s=Xa(n,t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={installation:{sdkVersion:Vi,appId:n.appId}},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await Gi(()=>fetch(i,o));if(c.ok){const l=await c.json();return zi(l)}else throw await Wi("Generate Auth Token",c)}function _o(n,{fid:e}){return`${qi(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(n,e=!1){let t;const i=await xt(n.appConfig,r=>{if(!es(r))throw qe.create("not-registered");const a=r.authToken;if(!e&&wo(a))return r;if(a.requestStatus===1)return t=vo(n,e),r;{if(!navigator.onLine)throw qe.create("app-offline");const o=To(r);return t=Io(n,o),o}});return t?await t:i.authToken}async function vo(n,e){let t=await Dn(n.appConfig);for(;t.authToken.requestStatus===1;)await Ki(100),t=await Dn(n.appConfig);const i=t.authToken;return i.requestStatus===0?dn(n,e):i}function Dn(n){return xt(n,e=>{if(!es(e))throw qe.create("not-registered");const t=e.authToken;return bo(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Io(n,e){try{const t=await go(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Ct(n.appConfig,i),t}catch(t){if(ji(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Qi(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ct(n.appConfig,i)}throw t}}function es(n){return n!==void 0&&n.registrationStatus===2}function wo(n){return n.requestStatus===2&&!yo(n)}function yo(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Ga}function To(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function bo(n){return n.requestStatus===1&&n.requestTime+xi<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(n){const e=n,{installationEntry:t,registrationPromise:i}=await un(e);return i?i.catch(console.error):dn(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n,e=!1){const t=n;return await Eo(t),(await dn(t,e)).token}async function Eo(n){const{registrationPromise:e}=await un(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n){if(!n||!n.options)throw Wt("App Configuration");if(!n.name)throw Wt("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Wt(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Wt(n){return qe.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="installations",Ro="installations-internal",Po=n=>{const e=n.getProvider("app").getImmediate(),t=Ao(e),i=tt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Co=n=>{const e=n.getProvider("app").getImmediate(),t=tt(e,ts).getImmediate();return{getId:()=>So(t),getToken:s=>ko(t,s)}};function Oo(){Qe(new Ze(ts,Po,"PUBLIC")),Qe(new Ze(Ro,Co,"PRIVATE"))}Oo();He($i,cn);He($i,cn,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="analytics",No="firebase_id",Mo="origin",Lo=60*1e3,Do="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hn="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=new Zn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Q=new dt("analytics","Analytics",Uo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(n){if(!n.startsWith(hn)){const e=Q.create("invalid-gtag-resource",{gtagURL:n});return Y.warn(e.message),""}return n}function ns(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function $o(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function xo(n,e){const t=$o("firebase-js-sdk-policy",{createScriptURL:Fo}),i=document.createElement("script"),s=`${hn}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Vo(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Ho(n,e,t,i,s,r){const a=i[s];try{if(a)await e[a];else{const c=(await ns(t)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(o){Y.error(o)}n("config",s,r)}async function jo(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const o=await ns(t);for(const c of a){const l=o.find(m=>m.measurementId===c),h=l&&e[l.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){Y.error(r)}}function qo(n,e,t,i){async function s(r,...a){try{if(r==="event"){const[o,c]=a;await jo(n,e,t,o,c)}else if(r==="config"){const[o,c]=a;await Ho(n,e,t,i,o,c)}else if(r==="consent"){const[o]=a;n("consent","update",o)}else if(r==="get"){const[o,c,l]=a;n("get",o,c,l)}else if(r==="set"){const[o]=a;n("set",o)}else n(r,...a)}catch(o){Y.error(o)}}return s}function zo(n,e,t,i,s){let r=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=qo(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function Wo(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(hn)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=30,Go=1e3;class Ko{constructor(e={},t=Go){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const is=new Ko;function Jo(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Yo(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:Jo(i)},r=Do.replace("{app-id}",t),a=await fetch(r,s);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(o=c.error.message)}catch{}throw Q.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function Xo(n,e=is,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw Q.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Q.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new ec;return setTimeout(async()=>{o.abort()},t!==void 0?t:Lo),ss({appId:i,apiKey:s,measurementId:r},a,o,e)}async function ss(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=is){var r;const{appId:a,measurementId:o}=n;try{await Qo(i,e)}catch(c){if(o)return Y.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:o};throw c}try{const c=await Yo(n);return s.deleteThrottleMetadata(a),c}catch(c){const l=c;if(!Zo(l)){if(s.deleteThrottleMetadata(a),o)return Y.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:o};throw c}const h=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?mn(t,s.intervalMillis,Bo):mn(t,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:t+1};return s.setThrottleMetadata(a,m),Y.debug(`Calling attemptFetch again in ${h} millis`),ss(n,m,i,s)}}function Qo(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(Q.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Zo(n){if(!(n instanceof ht)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ec{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tc(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,a=Object.assign(Object.assign({},i),{send_to:r});n("event",t,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(){if(ys())try{await Ts()}catch(n){return Y.warn(Q.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Y.warn(Q.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ic(n,e,t,i,s,r,a){var o;const c=Xo(n);c.then(p=>{t[p.measurementId]=p.appId,n.options.measurementId&&p.measurementId!==n.options.measurementId&&Y.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Y.error(p)),e.push(c);const l=nc().then(p=>{if(p)return i.getId()}),[h,m]=await Promise.all([c,l]);Wo(r)||xo(r,h.measurementId),s("js",new Date);const g=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return g[Mo]="firebase",g.update=!0,m!=null&&(g[No]=m),s("config",h.measurementId,g),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.app=e}_delete(){return delete ot[this.app.options.appId],Promise.resolve()}}let ot={},Un=[];const Fn={};let Bt="dataLayer",rc="gtag",$n,rs,xn=!1;function ac(){const n=[];if(ni()&&n.push("This is a browser extension environment."),bs()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=Q.create("invalid-analytics-context",{errorInfo:e});Y.warn(t.message)}}function oc(n,e,t){ac();const i=n.options.appId;if(!i)throw Q.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Y.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Q.create("no-api-key");if(ot[i]!=null)throw Q.create("already-exists",{id:i});if(!xn){Vo(Bt);const{wrappedGtag:r,gtagCore:a}=zo(ot,Un,Fn,Bt,rc);rs=r,$n=a,xn=!0}return ot[i]=ic(n,Un,Fn,e,$n,Bt,t),new sc(n)}function cc(n=ti()){n=Me(n);const e=tt(n,Ot);return e.isInitialized()?e.getImmediate():lc(n)}function lc(n,e={}){const t=tt(n,Ot);if(t.isInitialized()){const s=t.getImmediate();if(ii(e,t.getOptions()))return s;throw Q.create("already-initialized")}return t.initialize({options:e})}function as(n,e,t,i){n=Me(n),tc(rs,ot[n.app.options.appId],e,t,i).catch(s=>Y.error(s))}const Vn="@firebase/analytics",Hn="0.10.1";function uc(){Qe(new Ze(Ot,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return oc(i,s,t)},"PUBLIC")),Qe(new Ze("analytics-internal",n,"PRIVATE")),He(Vn,Hn),He(Vn,Hn,"esm2017");function n(e){try{const t=e.getProvider(Ot).getImmediate();return{logEvent:(i,s,r)=>as(t,i,s,r)}}catch(t){throw Q.create("interop-component-reg-failed",{reason:t})}}}uc();function dc(n){let e,t,i=de(n[2])+"",s,r,a,o=de(n[1])+"",c,l,h,m=de(n[0])+"",g;return{c(){e=v("span"),t=v("span"),s=ne(i),r=ne(":"),a=v("span"),c=ne(o),l=ne(":"),h=v("span"),g=ne(m),this.h()},l(p){e=I(p,"SPAN",{class:!0});var E=x(e);t=I(E,"SPAN",{class:!0});var U=x(t);s=ie(U,i),U.forEach(f),r=ie(E,":"),a=I(E,"SPAN",{class:!0});var N=x(a);c=ie(N,o),N.forEach(f),l=ie(E,":"),h=I(E,"SPAN",{class:!0});var M=x(h);g=ie(M,m),M.forEach(f),E.forEach(f),this.h()},h(){A(t,"class","value"),A(a,"class","value"),A(h,"class","value"),A(e,"class","timer svelte-1y1osaq")},m(p,E){_(p,e,E),w(e,t),w(t,s),w(e,r),w(e,a),w(a,c),w(e,l),w(e,h),w(h,g)},p(p,[E]){E&4&&i!==(i=de(p[2])+"")&&xe(s,i),E&2&&o!==(o=de(p[1])+"")&&xe(c,o),E&1&&m!==(m=de(p[0])+"")&&xe(g,m)},i:pe,o:pe,d(p){p&&f(e)}}}function de(n){return n<10?`0${n}`:n.toString()}function hc(n,e,t){let i,s,r,a,o,c,{elapsedSeconds:l}=e,h=Date.now(),m=gn(!1);Vt(n,m,M=>t(12,a=M));let g=gn(0);Vt(n,g,M=>t(13,o=M));const p=Cs(0,function(F){const L=setInterval(()=>{a&&(g.set(Math.round((Date.now()-h)/1e3)),F(o))},1e3);return function(){clearInterval(L)}});Vt(n,p,M=>t(10,c=M));function E(){a||(h=Date.now()-o*1e3,m.set(!0))}function U(){a&&m.set(!1)}function N(){U(),h=Date.now(),g.set(0)}return n.$$set=M=>{"elapsedSeconds"in M&&t(6,l=M.elapsedSeconds)},n.$$.update=()=>{n.$$.dirty&1024&&t(2,i=Math.floor(c/3600)),n.$$.dirty&1028&&t(1,s=Math.floor((c-i*3600)/60)),n.$$.dirty&1030&&t(0,r=c-i*3600-s*60),n.$$.dirty&7&&t(6,l=de(i)+":"+de(s)+":"+de(r))},[r,s,i,m,g,p,l,E,U,N,c]}class fc extends Xt{constructor(e){super(),Qt(this,e,hc,dc,Yt,{elapsedSeconds:6,start:7,stop:8,reset:9})}get start(){return this.$$.ctx[7]}get stop(){return this.$$.ctx[8]}get reset(){return this.$$.ctx[9]}}const{window:pc}=Os;function jn(n,e,t){const i=n.slice();return i[33]=e[t],i}function qn(n,e,t){const i=n.slice();return i[36]=e[t],i[38]=t,i}function zn(n,e,t){const i=n.slice();return i[36]=e[t],i[38]=t,i}function mc(n){let e,t="Loading Game...";return{c(){e=v("p"),e.textContent=t},l(i){e=I(i,"P",{"data-svelte-h":!0}),z(e)!=="svelte-kk77ic"&&(e.textContent=t)},m(i,s){_(i,e,s)},p:pe,d(i){i&&f(e)}}}function gc(n){let e,t,i,s=[],r=new Map,a,o,c='<i class="fa-solid fa-eraser"></i>',l,h,m='<i class="fa-solid fa-shuffle"></i>',g,p,E='<i class="fa-solid fa-delete-left"></i>',U,N,M="Enter",F,B,L=Ge(n[4]),C=[];for(let T=0;T<L.length;T+=1)C[T]=Wn(zn(n,L,T));let $=Ge(n[5]);const W=T=>T[38];for(let T=0;T<$.length;T+=1){let O=qn(n,$,T),y=W(O);r.set(y,s[T]=Bn(y,O))}return{c(){e=v("div");for(let T=0;T<C.length;T+=1)C[T].c();t=R(),i=v("div");for(let T=0;T<s.length;T+=1)s[T].c();a=R(),o=v("div"),o.innerHTML=c,l=R(),h=v("div"),h.innerHTML=m,g=R(),p=v("div"),p.innerHTML=E,U=R(),N=v("div"),N.textContent=M,this.h()},l(T){e=I(T,"DIV",{class:!0});var O=x(e);for(let j=0;j<C.length;j+=1)C[j].l(O);O.forEach(f),t=P(T),i=I(T,"DIV",{class:!0});var y=x(i);for(let j=0;j<s.length;j+=1)s[j].l(y);a=P(y),o=I(y,"DIV",{class:!0,"data-svelte-h":!0}),z(o)!=="svelte-pcdrzy"&&(o.innerHTML=c),l=P(y),h=I(y,"DIV",{class:!0,"data-svelte-h":!0}),z(h)!=="svelte-1nazuqy"&&(h.innerHTML=m),g=P(y),p=I(y,"DIV",{class:!0,"data-svelte-h":!0}),z(p)!=="svelte-1lzlrm1"&&(p.innerHTML=E),U=P(y),N=I(y,"DIV",{class:!0,"data-svelte-h":!0}),z(N)!=="svelte-10umx21"&&(N.textContent=M),y.forEach(f),this.h()},h(){A(e,"class","circle-container"),A(o,"class","key"),A(h,"class","key"),A(p,"class","key"),A(N,"class","key enter-key"),A(i,"class","keyboard")},m(T,O){_(T,e,O);for(let y=0;y<C.length;y+=1)C[y]&&C[y].m(e,null);_(T,t,O),_(T,i,O);for(let y=0;y<s.length;y+=1)s[y]&&s[y].m(i,null);w(i,a),w(i,o),w(i,l),w(i,h),w(i,g),w(i,p),w(i,U),w(i,N),F||(B=[oe(o,"click",n[15]),oe(h,"click",n[16]),oe(p,"click",n[17]),oe(N,"click",n[14])],F=!0)},p(T,O){if(O[0]&2064){L=Ge(T[4]);let y;for(y=0;y<L.length;y+=1){const j=zn(T,L,y);C[y]?C[y].p(j,O):(C[y]=Wn(j),C[y].c(),C[y].m(e,null))}for(;y<C.length;y+=1)C[y].d(1);C.length=L.length}O[0]&9248&&($=Ge(T[5]),s=ks(s,O,W,1,T,$,r,i,Rs,Bn,a,qn))},d(T){T&&(f(e),f(t),f(i)),Yn(C,T);for(let O=0;O<s.length;O+=1)s[O].d();F=!1,Jn(B)}}}function Wn(n){let e,t=(n[36]==""?"":n[36])+"",i,s,r;return{c(){e=v("div"),i=ne(t),s=R(),this.h()},l(a){e=I(a,"DIV",{class:!0,style:!0});var o=x(e);i=ie(o,t),s=P(o),o.forEach(f),this.h()},h(){A(e,"class","circle"),A(e,"style",r=`
              left: calc(38% + ${Math.cos(n[38]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(n[38]/n[4].length*2*Math.PI-Math.PI/2)*100}px);
          `),rt(e,"filled",n[36]!=""),rt(e,"shared",n[11].includes(n[38]))},m(a,o){_(a,e,o),w(e,i),w(e,s)},p(a,o){o[0]&16&&t!==(t=(a[36]==""?"":a[36])+"")&&xe(i,t),o[0]&16&&r!==(r=`
              left: calc(38% + ${Math.cos(a[38]/a[4].length*2*Math.PI-Math.PI/2)*100}px);
              top: calc(38% + ${Math.sin(a[38]/a[4].length*2*Math.PI-Math.PI/2)*100}px);
          `)&&A(e,"style",r),o[0]&16&&rt(e,"filled",a[36]!="")},d(a){a&&f(e)}}}function Bn(n,e){let t,i=e[36]+"",s,r,a,o;function c(){return e[25](e[36],e[38])}return{key:n,first:null,c(){t=v("div"),s=ne(i),r=R(),this.h()},l(l){t=I(l,"DIV",{class:!0});var h=x(t);s=ie(h,i),r=P(h),h.forEach(f),this.h()},h(){A(t,"class","key"),rt(t,"disabled",e[10](e[38])),this.first=t},m(l,h){_(l,t,h),w(t,s),w(t,r),a||(o=oe(t,"click",c),a=!0)},p(l,h){e=l,h[0]&32&&i!==(i=e[36]+"")&&xe(s,i),h[0]&1056&&rt(t,"disabled",e[10](e[38]))},d(l){l&&f(t),a=!1,o()}}}function _c(n){let e;return{c(){e=ne("Loading Solutions...")},l(t){e=ie(t,"Loading Solutions...")},m(t,i){_(t,e,i)},p:pe,d(t){t&&f(e)}}}function vc(n){let e,t=Nt(n[3][0])+"",i;return{c(){e=new Xn(!1),i=Xe(),this.h()},l(s){e=Qn(s,!1),i=Xe(),this.h()},h(){e.a=i},m(s,r){e.m(t,s,r),_(s,i,r)},p(s,r){r[0]&8&&t!==(t=Nt(s[3][0])+"")&&e.p(t)},d(s){s&&(f(i),e.d())}}}function Ic(n){let e,t=Ge(n[3]),i=[];for(let s=0;s<t.length;s+=1)i[s]=Gn(jn(n,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=Xe()},l(s){for(let r=0;r<i.length;r+=1)i[r].l(s);e=Xe()},m(s,r){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(s,r);_(s,e,r)},p(s,r){if(r[0]&8){t=Ge(s[3]);let a;for(a=0;a<t.length;a+=1){const o=jn(s,t,a);i[a]?i[a].p(o,r):(i[a]=Gn(o),i[a].c(),i[a].m(e.parentNode,e))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},d(s){s&&f(e),Yn(i,s)}}}function Gn(n){let e,t=Nt(n[33])+"",i;return{c(){e=new Xn(!1),i=Xe(),this.h()},l(s){e=Qn(s,!1),i=Xe(),this.h()},h(){e.a=i},m(s,r){e.m(t,s,r),_(s,i,r)},p(s,r){r[0]&8&&t!==(t=Nt(s[33])+"")&&e.p(t)},d(s){s&&(f(i),e.d())}}}function wc(n){let e,t='<span style="font-size:30px;padding-right:5px;">🥉</span> <div><p class="small-modal-text">Oooof.</p> <p class="small-modal-text">You&#39;re over today&#39;s average - try for gold tomorrow</p></div>';return{c(){e=v("div"),e.innerHTML=t,this.h()},l(i){e=I(i,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1dnxwdz"&&(e.innerHTML=t),this.h()},h(){A(e,"class","flex-container")},m(i,s){_(i,e,s)},d(i){i&&f(e)}}}function yc(n){let e,t='<span style="font-size:30px;padding-right:5px;">🥇</span> <div><p class="small-modal-text">Congratulations speedster.</p> <p class="small-modal-text">You&#39;re under today&#39;s average - very clever.</p></div>';return{c(){e=v("div"),e.innerHTML=t,this.h()},l(i){e=I(i,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-s6v4wd"&&(e.innerHTML=t),this.h()},h(){A(e,"class","flex-container")},m(i,s){_(i,e,s)},d(i){i&&f(e)}}}function Tc(n){let e,t='<span style="font-size:30px;padding-right:5px;">🙀</span> <div><p class="small-modal-text">New High Score!</p> <p class="small-modal-text">You&#39;re officialy the fastest looper today!</p></div>';return{c(){e=v("div"),e.innerHTML=t,this.h()},l(i){e=I(i,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1mo40wc"&&(e.innerHTML=t),this.h()},h(){A(e,"class","flex-container")},m(i,s){_(i,e,s)},d(i){i&&f(e)}}}function bc(n){let e,t="Solved in",i,s,r,a,o,c,l,h="Global Stats",m,g,p,E,U,N,M,F,B="Solutions",L,C,$,W,T,O,y,j,Z,H,ee,se,q,_e="Share",re,b,V,D,ae,G,Le=`<img style="width:100%;" src="${Ps}" alt="LetterLoop Merch"/>`,ve,We,De;E=new Es({props:{globalStats:n[9]}});function K(d,u){return d[3]&&d[3].length>2?Ic:d[3]&&d[3].length>0?vc:_c}let Be=K(n),J=Be(n);function _t(d,u){return d[9]&&d[9].isHighScore?Tc:d[9]&&d[9].isUnderAverage?yc:wc}let Ue=_t(n),te=Ue(n);return{c(){e=v("p"),e.textContent=t,i=R(),s=v("p"),r=ne(n[7]),a=R(),o=v("hr"),c=R(),l=v("span"),l.textContent=h,m=R(),g=v("br"),p=R(),Te(E.$$.fragment),U=R(),N=v("hr"),M=R(),F=v("span"),F.textContent=B,L=R(),C=v("p"),$=R(),J.c(),W=R(),T=v("hr"),O=R(),te.c(),y=R(),j=v("hr"),Z=R(),H=v("div"),ee=v("div"),se=R(),q=v("button"),q.textContent=_e,re=R(),b=v("div"),V=R(),D=v("hr"),ae=R(),G=v("a"),G.innerHTML=Le,this.h()},l(d){e=I(d,"P",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1do05u2"&&(e.textContent=t),i=P(d),s=I(d,"P",{class:!0});var u=x(s);r=ie(u,n[7]),u.forEach(f),a=P(d),o=I(d,"HR",{}),c=P(d),l=I(d,"SPAN",{class:!0,"data-svelte-h":!0}),z(l)!=="svelte-eapto"&&(l.textContent=h),m=P(d),g=I(d,"BR",{}),p=P(d),be(E.$$.fragment,d),U=P(d),N=I(d,"HR",{}),M=P(d),F=I(d,"SPAN",{class:!0,"data-svelte-h":!0}),z(F)!=="svelte-j8w724"&&(F.textContent=B),L=P(d),C=I(d,"P",{style:!0}),x(C).forEach(f),$=P(d),J.l(d),W=P(d),T=I(d,"HR",{}),O=P(d),te.l(d),y=P(d),j=I(d,"HR",{}),Z=P(d),H=I(d,"DIV",{class:!0});var k=x(H);ee=I(k,"DIV",{class:!0}),x(ee).forEach(f),se=P(k),q=I(k,"BUTTON",{class:!0,"data-svelte-h":!0}),z(q)!=="svelte-1urjot1"&&(q.textContent=_e),re=P(k),b=I(k,"DIV",{class:!0}),x(b).forEach(f),k.forEach(f),V=P(d),D=I(d,"HR",{}),ae=P(d),G=I(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),z(G)!=="svelte-1ehreu5"&&(G.innerHTML=Le),this.h()},h(){A(e,"class","small-header"),A(s,"class","large-header"),A(l,"class","small-header"),A(F,"class","small-header"),A(C,"style","height:6px;margin:0;padding;0px;"),A(ee,"class","spacer"),A(q,"class","share-button"),A(b,"class","spacer"),A(H,"class","flex-container"),A(G,"href","https://www.bonfire.com/store/letterloop-shop/"),A(G,"target","_blank")},m(d,u){_(d,e,u),_(d,i,u),_(d,s,u),w(s,r),_(d,a,u),_(d,o,u),_(d,c,u),_(d,l,u),_(d,m,u),_(d,g,u),_(d,p,u),Se(E,d,u),_(d,U,u),_(d,N,u),_(d,M,u),_(d,F,u),_(d,L,u),_(d,C,u),_(d,$,u),J.m(d,u),_(d,W,u),_(d,T,u),_(d,O,u),te.m(d,u),_(d,y,u),_(d,j,u),_(d,Z,u),_(d,H,u),w(H,ee),w(H,se),w(H,q),w(H,re),w(H,b),_(d,V,u),_(d,D,u),_(d,ae,u),_(d,G,u),ve=!0,We||(De=oe(q,"click",n[18]),We=!0)},p(d,u){(!ve||u[0]&128)&&xe(r,d[7]);const k={};u[0]&512&&(k.globalStats=d[9]),E.$set(k),Be===(Be=K(d))&&J?J.p(d,u):(J.d(1),J=Be(d),J&&(J.c(),J.m(W.parentNode,W))),Ue!==(Ue=_t(d))&&(te.d(1),te=Ue(d),te&&(te.c(),te.m(y.parentNode,y)))},i(d){ve||(ke(E.$$.fragment,d),ve=!0)},o(d){Ee(E.$$.fragment,d),ve=!1},d(d){d&&(f(e),f(i),f(s),f(a),f(o),f(c),f(l),f(m),f(g),f(p),f(U),f(N),f(M),f(F),f(L),f(C),f($),f(W),f(T),f(O),f(y),f(j),f(Z),f(H),f(V),f(D),f(ae),f(G)),Ae(E,d),J.d(d),te.d(d),We=!1,De()}}}function Sc(n){let e,t,i,s;return i=new As({}),{c(){e=v("hr"),t=R(),Te(i.$$.fragment)},l(r){e=I(r,"HR",{}),t=P(r),be(i.$$.fragment,r)},m(r,a){_(r,e,a),_(r,t,a),Se(i,r,a),s=!0},p:pe,i(r){s||(ke(i.$$.fragment,r),s=!0)},o(r){Ee(i.$$.fragment,r),s=!1},d(r){r&&(f(e),f(t)),Ae(i,r)}}}function kc(n){let e,t='<span class="styled-header">How To Play</span>';return{c(){e=v("h2"),e.innerHTML=t,this.h()},l(i){e=I(i,"H2",{slot:!0,"data-svelte-h":!0}),z(e)!=="svelte-1kct8zk"&&(e.innerHTML=t),this.h()},h(){A(e,"slot","header")},m(i,s){_(i,e,s)},p:pe,d(i){i&&f(e)}}}function Ec(n){let e,t,i,s,r,a,o="Resume",c,l,h,m;return{c(){e=v("hr"),t=R(),i=v("div"),s=v("div"),r=R(),a=v("button"),a.textContent=o,c=R(),l=v("div"),this.h()},l(g){e=I(g,"HR",{}),t=P(g),i=I(g,"DIV",{class:!0});var p=x(i);s=I(p,"DIV",{class:!0}),x(s).forEach(f),r=P(p),a=I(p,"BUTTON",{class:!0,"data-svelte-h":!0}),z(a)!=="svelte-o41kx2"&&(a.textContent=o),c=P(p),l=I(p,"DIV",{class:!0}),x(l).forEach(f),p.forEach(f),this.h()},h(){A(s,"class","spacer"),A(a,"class","share-button"),A(l,"class","spacer"),A(i,"class","flex-container")},m(g,p){_(g,e,p),_(g,t,p),_(g,i,p),w(i,s),w(i,r),w(i,a),w(i,c),w(i,l),h||(m=oe(a,"click",n[20]),h=!0)},p:pe,d(g){g&&(f(e),f(t),f(i)),h=!1,m()}}}function Ac(n){let e,t='<span class="styled-header">Paused</span>';return{c(){e=v("h2"),e.innerHTML=t,this.h()},l(i){e=I(i,"H2",{slot:!0,"data-svelte-h":!0}),z(e)!=="svelte-1ught0z"&&(e.innerHTML=t),this.h()},h(){A(e,"slot","header")},m(i,s){_(i,e,s)},p:pe,d(i){i&&f(e)}}}function Rc(n){let e,t,i,s,r="LetterLoop",a,o,c,l,h,m,g,p,E='<i class="fa-regular fa-circle-question"></i> <p class="how-to-play">How to play</p>',U,N,M,F,B,L,C,$,W,T,O,y='<i class="fa-solid fa-pause"></i>',j,Z,H,ee,se,q,_e,re,b,V,D,ae,G;F=new Ss({});function Le(u){n[24](u)}let ve={};n[7]!==void 0&&(ve.elapsedSeconds=n[7]),$=new fc({props:ve}),n[23]($),st.push(()=>It($,"elapsedSeconds",Le));function We(u,k){return u[3].length>0?gc:mc}let De=We(n),K=De(n);function Be(u){n[26](u)}let J={modalType:"end",$$slots:{default:[bc]},$$scope:{ctx:n}};n[0]!==void 0&&(J.showModal=n[0]),H=new Ht({props:J}),st.push(()=>It(H,"showModal",Be));function _t(u){n[27](u)}let Ue={modalType:"help",$$slots:{header:[kc],default:[Sc]},$$scope:{ctx:n}};n[1]!==void 0&&(Ue.showModal=n[1]),q=new Ht({props:Ue}),st.push(()=>It(q,"showModal",_t));function te(u){n[28](u)}let d={hide_close:!0,modalType:"pause",$$slots:{header:[Ac],default:[Ec]},$$scope:{ctx:n}};return n[2]!==void 0&&(d.showModal=n[2]),b=new Ht({props:d}),st.push(()=>It(b,"showModal",te)),{c(){e=v("main"),t=v("div"),i=v("div"),s=v("p"),s.textContent=r,a=R(),o=v("small"),c=ne("(public beta) · Edited by "),l=ne(n[8]),h=R(),m=v("div"),g=R(),p=v("div"),p.innerHTML=E,U=R(),N=v("div"),M=R(),Te(F.$$.fragment),B=R(),L=v("div"),C=v("div"),Te($.$$.fragment),T=R(),O=v("div"),O.innerHTML=y,j=R(),K.c(),Z=R(),Te(H.$$.fragment),se=R(),Te(q.$$.fragment),re=R(),Te(b.$$.fragment),this.h()},l(u){e=I(u,"MAIN",{});var k=x(e);t=I(k,"DIV",{class:!0});var ue=x(t);i=I(ue,"DIV",{class:!0});var Ie=x(i);s=I(Ie,"P",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-1qmyjs9"&&(s.textContent=r),a=P(Ie),o=I(Ie,"SMALL",{style:!0});var Fe=x(o);c=ie(Fe,"(public beta) · Edited by "),l=ie(Fe,n[8]),Fe.forEach(f),Ie.forEach(f),h=P(ue),m=I(ue,"DIV",{class:!0}),x(m).forEach(f),g=P(ue),p=I(ue,"DIV",{class:!0,"data-svelte-h":!0}),z(p)!=="svelte-1i75e1h"&&(p.innerHTML=E),ue.forEach(f),U=P(k),N=I(k,"DIV",{class:!0}),x(N).forEach(f),M=P(k),be(F.$$.fragment,k),B=P(k),L=I(k,"DIV",{class:!0});var we=x(L);C=I(we,"DIV",{class:!0});var fn=x(C);be($.$$.fragment,fn),fn.forEach(f),T=P(we),O=I(we,"DIV",{"data-svelte-h":!0}),z(O)!=="svelte-1mqs5ls"&&(O.innerHTML=y),we.forEach(f),j=P(k),K.l(k),k.forEach(f),Z=P(u),be(H.$$.fragment,u),se=P(u),be(q.$$.fragment,u),re=P(u),be(b.$$.fragment,u),this.h()},h(){A(s,"class","title"),cs(o,"color","rgb(46, 46, 46)"),A(i,"class","title-container "),A(m,"class","spacer"),A(p,"class","help-container"),A(t,"class","nav-flex-container"),A(N,"class","divider"),A(C,"class","timer-container"),A(L,"class","flex-container")},m(u,k){_(u,e,k),w(e,t),w(t,i),w(i,s),w(i,a),w(i,o),w(o,c),w(o,l),w(t,h),w(t,m),w(t,g),w(t,p),w(e,U),w(e,N),w(e,M),Se(F,e,null),w(e,B),w(e,L),w(L,C),Se($,C,null),w(L,T),w(L,O),w(e,j),K.m(e,null),_(u,Z,k),Se(H,u,k),_(u,se,k),Se(q,u,k),_(u,re,k),Se(b,u,k),D=!0,ae||(G=[oe(pc,"keydown",ls(n[12])),oe(p,"click",n[22]),oe(O,"click",n[19])],ae=!0)},p(u,k){(!D||k[0]&256)&&xe(l,u[8]);const ue={};!W&&k[0]&128&&(W=!0,ue.elapsedSeconds=u[7],vt(()=>W=!1)),$.$set(ue),De===(De=We(u))&&K?K.p(u,k):(K.d(1),K=De(u),K&&(K.c(),K.m(e,null)));const Ie={};k[0]&648|k[1]&512&&(Ie.$$scope={dirty:k,ctx:u}),!ee&&k[0]&1&&(ee=!0,Ie.showModal=u[0],vt(()=>ee=!1)),H.$set(Ie);const Fe={};k[1]&512&&(Fe.$$scope={dirty:k,ctx:u}),!_e&&k[0]&2&&(_e=!0,Fe.showModal=u[1],vt(()=>_e=!1)),q.$set(Fe);const we={};k[1]&512&&(we.$$scope={dirty:k,ctx:u}),!V&&k[0]&4&&(V=!0,we.showModal=u[2],vt(()=>V=!1)),b.$set(we)},i(u){D||(ke(F.$$.fragment,u),ke($.$$.fragment,u),ke(H.$$.fragment,u),ke(q.$$.fragment,u),ke(b.$$.fragment,u),D=!0)},o(u){Ee(F.$$.fragment,u),Ee($.$$.fragment,u),Ee(H.$$.fragment,u),Ee(q.$$.fragment,u),Ee(b.$$.fragment,u),D=!1},d(u){u&&(f(e),f(Z),f(se),f(re)),Ae(F),n[23](null),Ae($),K.d(),Ae(H,u),Ae(q,u),Ae(b,u),ae=!1,Jn(G)}}}function Kn(n){return n.split("").sort(()=>Math.random()-.5).join("")}function Nt(n){if(!n)return"Loading Solutions...";const e=n.substring(0,5),t=n.substring(4,8)+e[0];return`
        <div>
          <a href="https://www.merriam-webster.com/dictionary/${e}" target="blank">${e}</a> 
          + 
          <a href="https://www.merriam-webster.com/dictionary/${t}" target="blank">${t}</a>
        </div>
      `}function Pc(n,e,t){let i,s=!1,r=!1,a=!1,o=[];o=o.map(b=>b.toLowerCase());let c,l=Array(8).fill(""),h=[],m,g=0,p=[0,4],E,U=0,N="---",M;os(async()=>{const b=cc(Ui);as(b,"screen_view",{firebase_screen:"game_board_view",firebase_screen_class:"game_board_controller"});const V=new Date,D={year:"numeric",month:"2-digit",day:"2-digit"},ae=V.toLocaleDateString("en-US",D).replace(/\//g,"-");try{if(await Va()){const G=await ri("solutions/"+ae),Le=Object.values(G);t(8,N=Le[0]),t(3,o=Le[1]),c=o[0],t(5,m=Kn(c)),E.start()}}catch(G){console.error("Error fetching data from Firebase:",G)}});function F(b,V){for(let D=0;D<b.length;D++)if(b[D]==V&&!i(D))return D;return-1}function B(b){const V=b.key.toLowerCase(),D=F(m,V);b.keyCode===13?C():b.keyCode===8?T():D!==-1&&!i(D)&&L(V,D)}function L(b,V){g<l.length&&!i(V)&&(t(4,l[g]=b,l),g+=1,t(21,h=[...h,V]))}function C(){const b=l.join(""),V=l.filter(D=>D!=="").length;o.includes(b)?(t(0,s=!0),E.stop(),Ha(U).then(D=>{t(9,M=D)}).catch(D=>{console.error("Error:",D)})):V!=8?it.default("You Must fill in every letter",1e3):it.default("Incorrect",1e3)}function $(){t(4,l=Array(8).fill("")),g=0,t(21,h=[])}function W(){t(5,m=Kn(c)),$()}function T(){g>0&&(t(4,l[g-1]="",l),g-=1,t(21,h=h.slice(0,-1)))}const O=async()=>{let b=`I completed the LetterLoop in: 
🔴`+U+"🔴";if(navigator.share)try{await navigator.share({title:"",text:b,url:window.location.href})}catch{it.default("Error",1e3)}else try{await navigator.clipboard.writeText(b),it.default("Copied Text!",1e3)}catch{it.default("Error",1e3)}};function y(){E.stop(),t(2,a=!0)}function j(){E.start(),t(2,a=!1)}const Z=()=>t(1,r=!0);function H(b){st[b?"unshift":"push"](()=>{E=b,t(6,E)})}function ee(b){U=b,t(7,U)}const se=(b,V)=>L(b,V);function q(b){s=b,t(0,s)}function _e(b){r=b,t(1,r)}function re(b){a=b,t(2,a)}return n.$$.update=()=>{n.$$.dirty[0]&2097152&&t(10,i=b=>h.includes(b))},new Date().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}),[s,r,a,o,l,m,E,U,N,M,i,p,B,L,C,$,W,T,O,y,j,h,Z,H,ee,se,q,_e,re]}class Cc extends Xt{constructor(e){super(),Qt(this,e,Pc,Rc,Yt,{},null,[-1,-1])}}function Oc(n){let e,t,i;return t=new Cc({}),{c(){e=v("main"),Te(t.$$.fragment)},l(s){e=I(s,"MAIN",{});var r=x(e);be(t.$$.fragment,r),r.forEach(f)},m(s,r){_(s,e,r),Se(t,e,null),i=!0},p:pe,i(s){i||(ke(t.$$.fragment,s),i=!0)},o(s){Ee(t.$$.fragment,s),i=!1},d(s){s&&f(e),Ae(t)}}}class Uc extends Xt{constructor(e){super(),Qt(this,e,null,Oc,Yt,{})}}export{Uc as component};
