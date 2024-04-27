

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Terms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.m4oRg-FV.js","_app/immutable/chunks/scheduler.Dj2J5mG2.js","_app/immutable/chunks/index.BbVivFmB.js"];
export const stylesheets = [];
export const fonts = [];
