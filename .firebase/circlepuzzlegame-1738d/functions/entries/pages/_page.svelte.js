import { c as create_ssr_component, a as subscribe, b as each, e as escape, n as null_to_empty, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { d as derived, w as writable } from "../../chunks/index.js";
import { initializeApp } from "firebase/app";
import "firebase/database";
import "firebase/analytics";
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
const css$2 = {
  code: ".notifications.svelte-15ecllt{position:fixed;top:130px;left:0;right:0;margin:0 auto;padding:0;z-index:9999;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;pointer-events:none}.toast.svelte-15ecllt{flex:0 0 auto;margin-bottom:10px;border-radius:10px;;}.content.svelte-15ecllt{padding:10px;display:block;color:rgb(17, 17, 17);font-weight:500}",
  map: null
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notifications, $$unsubscribe_notifications;
  $$unsubscribe_notifications = subscribe(notifications, (value) => $notifications = value);
  $$result.css.add(css$2);
  $$unsubscribe_notifications();
  return `<div class="notifications svelte-15ecllt">${each($notifications, (notification) => {
    return `<div class="toast svelte-15ecllt" style="background: #EBEBEB;"><div class="content svelte-15ecllt">${escape(notification.message)}</div> ${notification.icon ? `<i class="${escape(null_to_empty(notification.icon), true) + " svelte-15ecllt"}"></i>` : ``} </div>`;
  })} </div>`;
});
const css$1 = {
  code: "dialog.svelte-54d7ti.svelte-54d7ti{max-width:32em;border-radius:0.2em;border:none;padding:0}dialog.svelte-54d7ti.svelte-54d7ti::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-54d7ti>div.svelte-54d7ti{padding:1em}dialog[open].svelte-54d7ti.svelte-54d7ti{animation:svelte-54d7ti-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-54d7ti-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-54d7ti.svelte-54d7ti::backdrop{animation:svelte-54d7ti-fade 0.2s ease-out}@keyframes svelte-54d7ti-fade{from{opacity:0}to{opacity:1}}.flex-container.svelte-54d7ti.svelte-54d7ti{display:flex;align-items:center}.spacer.svelte-54d7ti.svelte-54d7ti{flex-grow:1}.fa-xmark.svelte-54d7ti.svelte-54d7ti{cursor:pointer;font-size:22px;;}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$result.css.add(css$1);
  return ` <dialog class="svelte-54d7ti"${add_attribute("this", dialog, 0)}> <div class="svelte-54d7ti">${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} <div class="flex-container svelte-54d7ti">${slots.header ? slots.header({}) : ``} <div class="spacer svelte-54d7ti"></div> <i class="fa-solid fa-xmark svelte-54d7ti"></i></div> <hr> ${slots.default ? slots.default({}) : ``}</div> </dialog>`;
});
const ex_solution = "/_app/immutable/assets/ex-solution.DMtatkDj.png";
const ex_letter_box = "/_app/immutable/assets/ex-letter-box.mgBNjwYG.png";
const firebaseConfig = {
  apiKey: "AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",
  authDomain: "circlepuzzlegame-1738d.firebaseapp.com",
  projectId: "circlepuzzlegame-1738d",
  storageBucket: "circlepuzzlegame-1738d.appspot.com",
  messagingSenderId: "62490740969",
  appId: "1:62490740969:web:719c6ea78f8148089f4878",
  measurementId: "G-EEEKPPSEN9"
};
initializeApp(firebaseConfig);
const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');main.svelte-f9yiej{display:flex;flex-direction:column;align-items:center;height:100vh}.circle-container.svelte-f9yiej{position:relative;width:200px;height:200px;padding:40px;margin-top:20px;;}.circle.svelte-f9yiej{position:absolute;width:60px;height:60px;border-radius:50%;background-color:transparent;border:2px solid #EBEBEB;display:flex;align-items:center;justify-content:center;text-transform:uppercase;font-size:25px;font-weight:600}.filled.svelte-f9yiej{background-color:#F0EBEB;color:rgb(0, 0, 0);border:none}.shared.svelte-f9yiej{background-color:#ec2525;color:white;border:none}.keyboard.svelte-f9yiej{display:grid;grid-template-columns:repeat(4, 50px);grid-gap:20px;margin-top:40px}.key.svelte-f9yiej{width:60px;height:60px;border-radius:50%;background-color:#F0EBEB;display:flex;justify-content:center;align-items:center;cursor:pointer;text-transform:uppercase;font-size:25px;font-weight:600}.enter-key.svelte-f9yiej{font-size:12px;background-color:transparent !important;border:2px solid #EBEBEB}.disabled.svelte-f9yiej{opacity:0.25;cursor:not-allowed}.help-container.svelte-f9yiej{display:flex;align-items:center;color:#333;padding:10px}.how-to-play.svelte-f9yiej{color:#333;padding:5px}.how-to-play.svelte-f9yiej:hover{text-decoration:underline;cursor:pointer}.divider.svelte-f9yiej{height:1.5px;width:100vw;background-color:#333;opacity:0.1}.title.svelte-f9yiej{margin:10px;font-family:"Playfair Display", serif;font-optical-sizing:auto;font-weight:500;font-style:normal;color:black}.share-button.svelte-f9yiej{background-color:#ec2525;color:white;border-radius:25px;width:150px;height:50px;border:none;margin:10px}.flex-container.svelte-f9yiej{display:flex;align-items:center}.spacer.svelte-f9yiej{flex-grow:1}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDisabled;
  let showCompleteModal = false;
  let showHelpModal = false;
  let solutions = [];
  solutions = solutions.map((solution) => solution.toLowerCase());
  let selectedLetters = Array(8).fill("");
  let disabledKeys = [];
  let scrambledLettersBank;
  let sharedLetterIndexes = [0, 4];
  let attempts = 1;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isDisabled = (index) => disabledKeys.includes(index);
    $$rendered = `<main class="svelte-f9yiej"><div class="flex-container svelte-f9yiej" data-svelte-h="svelte-zlx3yy"><h1 class="title svelte-f9yiej">LetterLoop</h1> <small>(public beta)</small></div> <div class="divider svelte-f9yiej"></div> <div class="help-container svelte-f9yiej" data-svelte-h="svelte-w4pbae"><i class="fa-regular fa-circle-question"></i> <p class="how-to-play svelte-f9yiej">How to play</p></div> ${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} ${solutions.length > 0 ? `<div class="circle-container svelte-f9yiej">${each(selectedLetters, (letter, index) => {
      return `<div class="${[
        "circle svelte-f9yiej",
        (letter != "" ? "filled" : "") + " " + (sharedLetterIndexes.includes(index) ? "shared" : "")
      ].join(" ").trim()}"${add_attribute(
        "style",
        `
						left: calc(40% + ${Math.cos(index / selectedLetters.length * 2 * Math.PI - Math.PI / 2) * 100}px);
						top: calc(37% + ${Math.sin(index / selectedLetters.length * 2 * Math.PI - Math.PI / 2) * 100}px);
				`,
        0
      )}>${escape(letter == "" ? "" : letter)} </div>`;
    })}</div> <div class="keyboard svelte-f9yiej">${each(scrambledLettersBank, (letter, index) => {
      return `<div class="${["key svelte-f9yiej", isDisabled(index) ? "disabled" : ""].join(" ").trim()}">${escape(letter)} </div>`;
    })}  <div class="key svelte-f9yiej" data-svelte-h="svelte-qtb4kv"><i class="fa-solid fa-eraser"></i></div> <div class="key svelte-f9yiej" data-svelte-h="svelte-krp8l1"><i class="fa-solid fa-shuffle"></i></div> <div class="key svelte-f9yiej" data-svelte-h="svelte-1jsmx3m"><i class="fa-solid fa-delete-left"></i></div> <div class="key enter-key svelte-f9yiej" data-svelte-h="svelte-1qinv54">Enter</div></div>` : `<p data-svelte-h="svelte-kk77ic">Loading Game...</p>`}</main>  ${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal: showCompleteModal },
      {
        showModal: ($$value) => {
          showCompleteModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<div slot="header" data-svelte-h="svelte-f7olr4"><b>Congratulations!</b> <br>
		Share your results with your friends.</div>`;
        },
        default: () => {
          return `<h3>You Solved the circle in ${escape(attempts)} attempts</h3> <p data-svelte-h="svelte-17sl737">Fantastic Job!</p> <br> <div class="flex-container svelte-f9yiej"><div class="spacer svelte-f9yiej"></div> <button class="share-button svelte-f9yiej" data-svelte-h="svelte-1urjot1">Share</button> <div class="spacer svelte-f9yiej"></div></div>`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal: showHelpModal },
      {
        showModal: ($$value) => {
          showHelpModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 slot="header" data-svelte-h="svelte-cc40s5"><b>How To Play</b></h2>`;
        },
        default: () => {
          return `<h3 data-svelte-h="svelte-1j8js8f">Find the 8-letter circle word</h3> <ul class="definition-list" data-svelte-h="svelte-wtdfry"><li>There are 2 words to find.</li> <li>Letters may only be used once and have to be in the letter bank.</li> <li>The red circles are shared letters between the two words.</li></ul> <h3 data-svelte-h="svelte-qg4234">Example</h3> <p data-svelte-h="svelte-eqhtsw">If we had these letters:</p> <img${add_attribute("src", ex_letter_box, 0)} alt="Welcome" style="width: 350px; height: auto;"> <p data-svelte-h="svelte-14urd7p">We could spell the words 
			<b><span style="color: red;">M</span>USI<span style="color: red;">C</span></b> 
			and 
			<b><span style="color: red;">C</span>HAR<span style="color: red;">M</span> </b>.</p> <p data-svelte-h="svelte-1xer9do">Notice how these words share an <b><span style="color: red;">M</span></b> and a <b><span style="color: red;">C</span></b>.</p> <p data-svelte-h="svelte-1tryhud">One correct solution:</p> <img${add_attribute("src", ex_solution, 0)} alt="Welcome" style="width: 150px; height: auto;"> <p data-svelte-h="svelte-1imbt6f">Remember there can be more than one solution.</p>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
