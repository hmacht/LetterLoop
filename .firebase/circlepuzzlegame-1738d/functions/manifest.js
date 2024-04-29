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
		client: {"start":"_app/immutable/entry/start.Bc9Q2PPq.js","app":"_app/immutable/entry/app.DvVd-S5d.js","imports":["_app/immutable/entry/start.Bc9Q2PPq.js","_app/immutable/chunks/entry.lwHW2PhG.js","_app/immutable/chunks/scheduler.Dj2J5mG2.js","_app/immutable/chunks/index.DHaQdJMq.js","_app/immutable/entry/app.DvVd-S5d.js","_app/immutable/chunks/scheduler.Dj2J5mG2.js","_app/immutable/chunks/index.BbVivFmB.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/Privacy-Policy",
				pattern: /^\/Privacy-Policy\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Terms",
				pattern: /^\/Terms\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/gameboard",
				pattern: /^\/gameboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
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
