import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.COjCoJwB.js","_app/immutable/chunks/scheduler.CMvsSfs7.js","_app/immutable/chunks/index.DDDBvH_P.js","_app/immutable/chunks/index.DBtNhGCQ.js"];
export const stylesheets = ["_app/immutable/assets/2.BBvVciKb.css"];
export const fonts = [];
