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
		client: {"start":"_app/immutable/entry/start.BPaRdfGz.js","app":"_app/immutable/entry/app.DIoxtV22.js","imports":["_app/immutable/entry/start.BPaRdfGz.js","_app/immutable/chunks/entry.sHL6cCoo.js","_app/immutable/chunks/scheduler.CMvsSfs7.js","_app/immutable/chunks/index.DBtNhGCQ.js","_app/immutable/entry/app.DIoxtV22.js","_app/immutable/chunks/scheduler.CMvsSfs7.js","_app/immutable/chunks/index.DDDBvH_P.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
