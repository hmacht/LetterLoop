

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Terms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Bx5sReQZ.js","_app/immutable/chunks/scheduler.DnBvKLbz.js","_app/immutable/chunks/index.BsAK5xDz.js"];
export const stylesheets = [];
export const fonts = [];
