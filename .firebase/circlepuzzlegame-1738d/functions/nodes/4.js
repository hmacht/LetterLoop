import * as universal from '../entries/pages/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/4.CfhFveeP.js","_app/immutable/chunks/scheduler.Dj2J5mG2.js","_app/immutable/chunks/index.BbVivFmB.js","_app/immutable/chunks/Stats.DiE72djA.js","_app/immutable/chunks/index.DHaQdJMq.js"];
export const stylesheets = ["_app/immutable/assets/4.OpFzpO4A.css","_app/immutable/assets/Stats.Bsj0LaHY.css"];
export const fonts = [];
