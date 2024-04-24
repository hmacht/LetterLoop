import * as universal from '../entries/pages/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/4.DlOkx0DV.js","_app/immutable/chunks/scheduler.DnBvKLbz.js","_app/immutable/chunks/index.BsAK5xDz.js","_app/immutable/chunks/index.BowKdKRL.js"];
export const stylesheets = ["_app/immutable/assets/4.DJq-y6mA.css"];
export const fonts = [];
