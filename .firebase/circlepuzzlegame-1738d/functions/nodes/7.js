

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gameboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.BeMkha2g.js","_app/immutable/chunks/scheduler.Dj2J5mG2.js","_app/immutable/chunks/index.BbVivFmB.js","_app/immutable/chunks/Stats.9q4SY6Jd.js","_app/immutable/chunks/index.DHaQdJMq.js"];
export const stylesheets = ["_app/immutable/assets/7.DAaRcdKi.css","_app/immutable/assets/Stats.Bsj0LaHY.css"];
export const fonts = [];
