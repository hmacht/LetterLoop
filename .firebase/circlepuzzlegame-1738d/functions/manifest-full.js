export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BY0pFxSv.js","app":"_app/immutable/entry/app.BnrTLxiE.js","imports":["_app/immutable/entry/start.BY0pFxSv.js","_app/immutable/chunks/entry.NbVzk_7W.js","_app/immutable/chunks/scheduler.DnBvKLbz.js","_app/immutable/chunks/index.BowKdKRL.js","_app/immutable/entry/app.BnrTLxiE.js","_app/immutable/chunks/scheduler.DnBvKLbz.js","_app/immutable/chunks/index.C7zLSUab.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Privacy-Policy",
				pattern: /^\/Privacy-Policy\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Terms",
				pattern: /^\/Terms\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
