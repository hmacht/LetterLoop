import { c as create_ssr_component, a as subscribe, d as each, e as escape, n as null_to_empty, b as add_attribute, v as validate_component } from "./ssr.js";
import { d as derived, w as writable } from "./index.js";
import "firebase/database";
const shirt_ad = "/_app/immutable/assets/shirt-ad.CrdbWLEl.png";
function createNotificationStore(timeout) {
  const _notifications = writable([]);
  function send(message, type = "default", timeout2) {
    _notifications.update((state) => {
      return [...state, { id: id(), type, message, timeout: timeout2 }];
    });
  }
  const notifications2 = derived(_notifications, ($_notifications, set) => {
    set($_notifications);
    if ($_notifications.length > 0) {
      const timer = setTimeout(() => {
        _notifications.update((state) => {
          state.shift();
          return state;
        });
      }, $_notifications[0].timeout);
      return () => {
        clearTimeout(timer);
      };
    }
  });
  const { subscribe: subscribe2 } = notifications2;
  return {
    subscribe: subscribe2,
    send,
    default: (msg, timeout2) => send(msg, "default", timeout2),
    danger: (msg, timeout2) => send(msg, "danger", timeout2),
    warning: (msg, timeout2) => send(msg, "warning", timeout2),
    info: (msg, timeout2) => send(msg, "info", timeout2),
    success: (msg, timeout2) => send(msg, "success", timeout2)
  };
}
function id() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
const notifications = createNotificationStore();
const css$1 = {
  code: ".notifications.svelte-3xaubh{position:fixed;top:13\n      0px;left:0;right:0;margin:0 auto;padding:0;z-index:9999;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;pointer-events:none}.toast.svelte-3xaubh{flex:0 0 auto;margin-bottom:10px;border-radius:10px;;}.content.svelte-3xaubh{padding:10px;display:block;color:rgb(17, 17, 17);font-weight:500}",
  map: null
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notifications, $$unsubscribe_notifications;
  $$unsubscribe_notifications = subscribe(notifications, (value) => $notifications = value);
  $$result.css.add(css$1);
  $$unsubscribe_notifications();
  return `<div class="notifications svelte-3xaubh">${each($notifications, (notification) => {
    return `<div class="toast svelte-3xaubh" style="background: #EBEBEB;"><div class="content svelte-3xaubh">${escape(notification.message)}</div> ${notification.icon ? `<i class="${escape(null_to_empty(notification.icon), true) + " svelte-3xaubh"}"></i>` : ``} </div>`;
  })} </div>`;
});
const css = {
  code: "dialog.svelte-1cg8oiu.svelte-1cg8oiu{max-width:32em;border-radius:0.2em;border:none;padding:0;background-color:rgb(241, 237, 237)}dialog.svelte-1cg8oiu.svelte-1cg8oiu::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-1cg8oiu>div.svelte-1cg8oiu{padding:1em}dialog[open].svelte-1cg8oiu.svelte-1cg8oiu{animation:svelte-1cg8oiu-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-1cg8oiu-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-1cg8oiu.svelte-1cg8oiu::backdrop{animation:svelte-1cg8oiu-fade 0.2s ease-out}@keyframes svelte-1cg8oiu-fade{from{opacity:0}to{opacity:1}}.flex-container.svelte-1cg8oiu.svelte-1cg8oiu{display:flex;align-items:center}.spacer.svelte-1cg8oiu.svelte-1cg8oiu{flex-grow:1}.fa-xmark.svelte-1cg8oiu.svelte-1cg8oiu{cursor:pointer;font-size:22px;;;padding-left:15px}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let { hide_close = false } = $$props;
  let { modalType } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.hide_close === void 0 && $$bindings.hide_close && hide_close !== void 0)
    $$bindings.hide_close(hide_close);
  if ($$props.modalType === void 0 && $$bindings.modalType && modalType !== void 0)
    $$bindings.modalType(modalType);
  $$result.css.add(css);
  return ` <dialog class="svelte-1cg8oiu"${add_attribute("this", dialog, 0)}> <div class="svelte-1cg8oiu">${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} <div class="flex-container svelte-1cg8oiu"><div class="spacer svelte-1cg8oiu"></div> ${!hide_close ? `<i class="fa-solid fa-xmark svelte-1cg8oiu"></i>` : ``}</div> ${slots.header ? slots.header({}) : ``} ${slots.default ? slots.default({}) : ``}</div> </dialog>`;
});
const ex_solution = "/_app/immutable/assets/ex-solution.Cz2E2Fv4.png";
const ex_letter_box = "/_app/immutable/assets/ex-letter-box.CI-HL_Lb.png";
const Help = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3 data-svelte-h="svelte-1j8js8f">Find the 8-letter circle word</h3> <ul class="definition-list" data-svelte-h="svelte-1eowta5"><li>There are 2 words to find.</li> <li>Letters may only be used once and have to be in the letter bank.</li> <li>The red circles are shared letters between the two words.</li> <li>You must fill in every word before submitting.</li></ul> <h3 data-svelte-h="svelte-qg4234">Example</h3> <p data-svelte-h="svelte-eqhtsw">If we had these letters:</p> <img${add_attribute("src", ex_letter_box, 0)} alt="Welcome" style="width: 350px; height: auto;"> <p data-svelte-h="svelte-9c7ajy">We could spell the words 
    <b><span style="color: red;">M</span>USI<span style="color: red;">C</span></b> 
    and 
    <b><span style="color: red;">C</span>HAR<span style="color: red;">M</span> </b>.</p> <p data-svelte-h="svelte-1xer9do">Notice how these words share an <b><span style="color: red;">M</span></b> and a <b><span style="color: red;">C</span></b>.</p> <p data-svelte-h="svelte-1tryhud">One correct solution:</p> <img${add_attribute("src", ex_solution, 0)} alt="Welcome" style="width: 150px; height: auto;"> <p data-svelte-h="svelte-1imbt6f">Remember there can be more than one solution.</p>`;
});
const Stats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { globalStats } = $$props;
  if ($$props.globalStats === void 0 && $$bindings.globalStats && globalStats !== void 0)
    $$bindings.globalStats(globalStats);
  return `${globalStats == "NOREF" ? `<p data-svelte-h="svelte-3f4ohi">Stats not availible yet today</p>` : `${globalStats ? `<p class="large-modal-text" style="padding-top:10px;"><b>${escape(globalStats.count)}</b> people have looped today.</p> <p class="large-modal-text" style="padding-top:10px;">Average Time: 🔴 ${escape(globalStats.averageTime)} 🔴</p> <p class="large-modal-text">High Score: 🔴 ${escape(globalStats.minTime)} 🔴</p>` : `<p data-svelte-h="svelte-lb7i7x">Loading Stats...</p>`}`}`;
});
export {
  Help as H,
  Modal as M,
  Stats as S,
  Toast as T,
  shirt_ad as s
};
