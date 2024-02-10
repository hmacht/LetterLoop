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
		client: {"start":"_app/immutable/entry/start.wQNdyiVq.js","app":"_app/immutable/entry/app.u5B_cgsR.js","imports":["_app/immutable/entry/start.wQNdyiVq.js","_app/immutable/chunks/entry.b_aPTzJ1.js","_app/immutable/chunks/scheduler.ytLyeAWR.js","_app/immutable/chunks/index.DWAEIEMy.js","_app/immutable/entry/app.u5B_cgsR.js","_app/immutable/chunks/scheduler.ytLyeAWR.js","_app/immutable/chunks/index.mVxE5jCM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
