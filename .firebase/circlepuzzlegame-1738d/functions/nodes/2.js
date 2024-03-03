import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.hDjjexuu.js","_app/immutable/chunks/scheduler.CwIiqDyD.js","_app/immutable/chunks/index.CIKh10TN.js","_app/immutable/chunks/index.NVK073Jc.js"];
export const stylesheets = ["_app/immutable/assets/2.CeKGYFNJ.css"];
export const fonts = [];
