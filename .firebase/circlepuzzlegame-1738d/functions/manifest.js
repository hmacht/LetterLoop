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
		client: {"start":"_app/immutable/entry/start.MY4794z1.js","app":"_app/immutable/entry/app.C-1X2Mku.js","imports":["_app/immutable/entry/start.MY4794z1.js","_app/immutable/chunks/entry.BQGGR2iU.js","_app/immutable/chunks/scheduler.CwIiqDyD.js","_app/immutable/chunks/index.NVK073Jc.js","_app/immutable/entry/app.C-1X2Mku.js","_app/immutable/chunks/scheduler.CwIiqDyD.js","_app/immutable/chunks/index.CIKh10TN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
