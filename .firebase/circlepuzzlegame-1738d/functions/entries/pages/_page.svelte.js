import { c as create_ssr_component, a as subscribe, b as each, e as escape, n as null_to_empty, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { d as derived, w as writable, r as readable } from "../../chunks/index.js";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
const css$3 = {
  code: ".notifications.svelte-3xaubh{position:fixed;top:13\n      0px;left:0;right:0;margin:0 auto;padding:0;z-index:9999;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;pointer-events:none}.toast.svelte-3xaubh{flex:0 0 auto;margin-bottom:10px;border-radius:10px;;}.content.svelte-3xaubh{padding:10px;display:block;color:rgb(17, 17, 17);font-weight:500}",
  map: null
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notifications, $$unsubscribe_notifications;
  $$unsubscribe_notifications = subscribe(notifications, (value) => $notifications = value);
  $$result.css.add(css$3);
  $$unsubscribe_notifications();
  return `<div class="notifications svelte-3xaubh">${each($notifications, (notification) => {
    return `<div class="toast svelte-3xaubh" style="background: #EBEBEB;"><div class="content svelte-3xaubh">${escape(notification.message)}</div> ${notification.icon ? `<i class="${escape(null_to_empty(notification.icon), true) + " svelte-3xaubh"}"></i>` : ``} </div>`;
  })} </div>`;
});
const css$2 = {
  code: "dialog.svelte-kvu5ns.svelte-kvu5ns{max-width:32em;border-radius:0.2em;border:none;padding:0}dialog.svelte-kvu5ns.svelte-kvu5ns::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-kvu5ns>div.svelte-kvu5ns{padding:1em}dialog[open].svelte-kvu5ns.svelte-kvu5ns{animation:svelte-kvu5ns-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-kvu5ns-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-kvu5ns.svelte-kvu5ns::backdrop{animation:svelte-kvu5ns-fade 0.2s ease-out}@keyframes svelte-kvu5ns-fade{from{opacity:0}to{opacity:1}}.flex-container.svelte-kvu5ns.svelte-kvu5ns{display:flex;align-items:center}.spacer.svelte-kvu5ns.svelte-kvu5ns{flex-grow:1}.fa-xmark.svelte-kvu5ns.svelte-kvu5ns{cursor:pointer;font-size:22px;;;padding-left:15px}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let { hide_close = false } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.hide_close === void 0 && $$bindings.hide_close && hide_close !== void 0)
    $$bindings.hide_close(hide_close);
  $$result.css.add(css$2);
  return ` <dialog class="svelte-kvu5ns"${add_attribute("this", dialog, 0)}> <div class="svelte-kvu5ns">${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} <div class="flex-container svelte-kvu5ns">${slots.header ? slots.header({}) : ``} <div class="spacer svelte-kvu5ns"></div> ${!hide_close ? `<i class="fa-solid fa-xmark svelte-kvu5ns"></i>` : ``}</div> <hr> ${slots.default ? slots.default({}) : ``}</div> </dialog>`;
});
const firebaseConfig = {
  apiKey: "AIzaSyD4qZNCNnlVihIZbdgtBB82R48AIC0bqG4",
  authDomain: "circlepuzzlegame-1738d.firebaseapp.com",
  projectId: "circlepuzzlegame-1738d",
  storageBucket: "circlepuzzlegame-1738d.appspot.com",
  messagingSenderId: "62490740969",
  appId: "1:62490740969:web:719c6ea78f8148089f4878",
  measurementId: "G-EEEKPPSEN9"
};
const firebaseApp = initializeApp(firebaseConfig);
getAuth(firebaseApp);
const css$1 = {
  code: "span.timer.svelte-1y1osaq{padding:0 0.2em}",
  map: null
};
function f(value) {
  if (value < 10) {
    return `0${value}`;
  }
  return value.toString();
}
const Timer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hh;
  let mm;
  let ss;
  let $isRunning, $$unsubscribe_isRunning;
  let $elapsedSecondsStore, $$unsubscribe_elapsedSecondsStore;
  let $elapsedTime, $$unsubscribe_elapsedTime;
  let { elapsedSeconds } = $$props;
  let startDate = Date.now();
  let isRunning = writable(false);
  $$unsubscribe_isRunning = subscribe(isRunning, (value) => $isRunning = value);
  let elapsedSecondsStore = writable(0);
  $$unsubscribe_elapsedSecondsStore = subscribe(elapsedSecondsStore, (value) => $elapsedSecondsStore = value);
  const elapsedTime = readable(0, function start2(set) {
    const updateElapsedTime = () => {
      if ($isRunning) {
        elapsedSecondsStore.set(Math.round((Date.now() - startDate) / 1e3));
        set($elapsedSecondsStore);
      }
    };
    const interval = setInterval(updateElapsedTime, 1e3);
    return function stop2() {
      clearInterval(interval);
    };
  });
  $$unsubscribe_elapsedTime = subscribe(elapsedTime, (value) => $elapsedTime = value);
  function start() {
    if (!$isRunning) {
      startDate = Date.now() - $elapsedSecondsStore * 1e3;
      isRunning.set(true);
    }
  }
  function stop() {
    if ($isRunning) {
      isRunning.set(false);
    }
  }
  function reset() {
    stop();
    startDate = Date.now();
    elapsedSecondsStore.set(0);
  }
  if ($$props.elapsedSeconds === void 0 && $$bindings.elapsedSeconds && elapsedSeconds !== void 0)
    $$bindings.elapsedSeconds(elapsedSeconds);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.stop === void 0 && $$bindings.stop && stop !== void 0)
    $$bindings.stop(stop);
  if ($$props.reset === void 0 && $$bindings.reset && reset !== void 0)
    $$bindings.reset(reset);
  $$result.css.add(css$1);
  hh = Math.floor($elapsedTime / 3600);
  mm = Math.floor(($elapsedTime - hh * 3600) / 60);
  ss = $elapsedTime - hh * 3600 - mm * 60;
  elapsedSeconds = f(hh) + ":" + f(mm) + ":" + f(ss);
  $$unsubscribe_isRunning();
  $$unsubscribe_elapsedSecondsStore();
  $$unsubscribe_elapsedTime();
  return `  <span class="timer svelte-1y1osaq"><span class="value">${escape(f(hh))}</span>:<span class="value">${escape(f(mm))}</span>:<span class="value">${escape(f(ss))}</span> </span>`;
});
const ex_solution = "/_app/immutable/assets/ex-solution.DMtatkDj.png";
const ex_letter_box = "/_app/immutable/assets/ex-letter-box.mgBNjwYG.png";
const Help = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3 data-svelte-h="svelte-1j8js8f">Find the 8-letter circle word</h3> <ul class="definition-list" data-svelte-h="svelte-1eowta5"><li>There are 2 words to find.</li> <li>Letters may only be used once and have to be in the letter bank.</li> <li>The red circles are shared letters between the two words.</li> <li>You must fill in every word before submitting.</li></ul> <h3 data-svelte-h="svelte-qg4234">Example</h3> <p data-svelte-h="svelte-eqhtsw">If we had these letters:</p> <img${add_attribute("src", ex_letter_box, 0)} alt="Welcome" style="width: 350px; height: auto;"> <p data-svelte-h="svelte-9c7ajy">We could spell the words 
    <b><span style="color: red;">M</span>USI<span style="color: red;">C</span></b> 
    and 
    <b><span style="color: red;">C</span>HAR<span style="color: red;">M</span> </b>.</p> <p data-svelte-h="svelte-1xer9do">Notice how these words share an <b><span style="color: red;">M</span></b> and a <b><span style="color: red;">C</span></b>.</p> <p data-svelte-h="svelte-1tryhud">One correct solution:</p> <img${add_attribute("src", ex_solution, 0)} alt="Welcome" style="width: 150px; height: auto;"> <p data-svelte-h="svelte-1imbt6f">Remember there can be more than one solution.</p>`;
});
function format_solution(solution) {
  const firstPart = solution.substring(0, 5);
  const lastPart = solution.substring(4, 8) + firstPart[0];
  return `${firstPart} + ${lastPart}`;
}
const GameBoard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDisabled;
  let todays_date;
  let showCompleteModal = false;
  let showHelpModal = false;
  let showPauseModal = false;
  let solutions = [];
  solutions = solutions.map((solution) => solution.toLowerCase());
  let selectedLetters = Array(8).fill("");
  let disabledKeys = [];
  let scrambledLettersBank;
  let sharedLetterIndexes = [0, 4];
  let game_timer;
  let elapsedSeconds = 0;
  let puzzle_author = "---";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isDisabled = (index) => disabledKeys.includes(index);
    todays_date = (/* @__PURE__ */ new Date()).toLocaleDateString(void 0, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    $$rendered = `<main><div class="nav-flex-container"><div class="title-container "><p class="title" data-svelte-h="svelte-1qmyjs9">LetterLoop</p> <small style="color: rgb(46, 46, 46);">(public beta) · Edited by ${escape(puzzle_author)}</small></div> <div class="spacer"></div> <div class="help-container" data-svelte-h="svelte-1i75e1h"><i class="fa-regular fa-circle-question"></i> <p class="how-to-play">How to play</p></div></div> <div class="divider"></div> ${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} <div class="flex-container"><div class="timer-container">${validate_component(Timer, "Timer").$$render(
      $$result,
      { this: game_timer, elapsedSeconds },
      {
        this: ($$value) => {
          game_timer = $$value;
          $$settled = false;
        },
        elapsedSeconds: ($$value) => {
          elapsedSeconds = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div data-svelte-h="svelte-1mqs5ls"><i class="fa-solid fa-pause"></i></div></div> ${solutions.length > 0 ? `<div class="circle-container">${each(selectedLetters, (letter, index) => {
      return `<div class="${[
        "circle",
        (letter != "" ? "filled" : "") + " " + (sharedLetterIndexes.includes(index) ? "shared" : "")
      ].join(" ").trim()}"${add_attribute(
        "style",
        `
              left: calc(38% + ${Math.cos(index / selectedLetters.length * 2 * Math.PI - Math.PI / 2) * 100}px);
              top: calc(38% + ${Math.sin(index / selectedLetters.length * 2 * Math.PI - Math.PI / 2) * 100}px);
          `,
        0
      )}>${escape(letter == "" ? "" : letter)} </div>`;
    })}</div> <div class="keyboard">${each(scrambledLettersBank, (letter, index) => {
      return `<div class="${["key", isDisabled(index) ? "disabled" : ""].join(" ").trim()}">${escape(letter)} </div>`;
    })}  <div class="key" data-svelte-h="svelte-pcdrzy"><i class="fa-solid fa-eraser"></i></div> <div class="key" data-svelte-h="svelte-1nazuqy"><i class="fa-solid fa-shuffle"></i></div> <div class="key" data-svelte-h="svelte-1lzlrm1"><i class="fa-solid fa-delete-left"></i></div> <div class="key enter-key" data-svelte-h="svelte-10umx21">Enter</div></div> <p class="date">Puzzle for ${escape(todays_date)}</p>` : `<p data-svelte-h="svelte-kk77ic">Loading Game...</p>`}</main>  ${validate_component(Modal, "Modal").$$render(
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
          return `<div slot="header" data-svelte-h="svelte-wca559"><span class="styled-header">Congratulations!</span> <br>
      Share your results with your friends.</div>`;
        },
        default: () => {
          return `<span class="sub-header">Solved in ${escape(elapsedSeconds)}</span> <hr> <span class="sub-header" data-svelte-h="svelte-zm2m22">Other Possible Solutions</span> ${each(solutions, (solution) => {
            return `<div class="solution">${escape(format_solution(solution))} </div>`;
          })} <br> <div class="flex-container"><div class="spacer"></div> <button class="share-button" data-svelte-h="svelte-1urjot1">Share</button> <div class="spacer"></div></div>`;
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
          return `<h2 slot="header" data-svelte-h="svelte-1kct8zk"><span class="styled-header">How To Play</span></h2>`;
        },
        default: () => {
          return `${validate_component(Help, "Help").$$render($$result, {}, {}, {})}`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        hide_close: true,
        showModal: showPauseModal
      },
      {
        showModal: ($$value) => {
          showPauseModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 slot="header" data-svelte-h="svelte-1ught0z"><span class="styled-header">Paused</span></h2>`;
        },
        default: () => {
          return `<div class="flex-container"><div class="spacer"></div> <button class="share-button" data-svelte-h="svelte-o41kx2">Resume</button> <div class="spacer"></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const logo_src = "/_app/immutable/assets/logo.R4y_qj9s.png";
const css = {
  code: '.page.svelte-179v2fh{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh !important;margin:0;width:100vw}.content.svelte-179v2fh{text-align:center;padding:20px;color:#D8CFD2\n  }.logo.svelte-179v2fh{width:65px;height:65px}.menu-header.svelte-179v2fh{font-size:32px;margin:3px;color:black;font-family:"Playfair Display", serif}.menu-sub-header.svelte-179v2fh{font-size:20px;margin:3px;color:black;margin-bottom:10px}.menu-small-text.svelte-179v2fh{font-size:12px;margin:3px;color:black}.menu-date.svelte-179v2fh{font-size:15px;margin:3px;color:black;font-weight:800;margin-top:15px}.menu-btn.svelte-179v2fh{padding:10px 20px;font-size:16px;background-color:#000000;border-radius:50px;color:#fff;border:none;cursor:pointer;width:130px;height:50px;margin-bottom:10px}.no-fill.svelte-179v2fh{background-color:transparent !important;color:#000 !important;border:1px solid #000}.adparent.svelte-179v2fh{align-items:center;min-width:320px;margin-bottom:15px;background-color:rgb(241, 239, 239);width:100vw}',
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { gameHasStarted } = $$props;
  let showHelpModal = false;
  let today = (/* @__PURE__ */ new Date()).toLocaleDateString();
  if ($$props.gameHasStarted === void 0 && $$bindings.gameHasStarted && gameHasStarted !== void 0)
    $$bindings.gameHasStarted(gameHasStarted);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="page svelte-179v2fh"> <div class="content svelte-179v2fh"><img class="logo svelte-179v2fh"${add_attribute("src", logo_src, 0)} alt="Our Little Loop Logo"> <p class="menu-header svelte-179v2fh" data-svelte-h="svelte-1k2sjsl">The LetterLoop</p> <p class="menu-sub-header svelte-179v2fh" data-svelte-h="svelte-j0rk1k">Two 5-letter words, two shared letters, one loop</p> <div><button class="menu-btn svelte-179v2fh" data-svelte-h="svelte-1h0esab">Play</button></div> <div><button class="menu-btn no-fill svelte-179v2fh" data-svelte-h="svelte-lan869">How to play</button></div> <p class="menu-date svelte-179v2fh">${escape(today)}</p> <i class="menu-small-text svelte-179v2fh" data-svelte-h="svelte-1ec062z">For those who love morning games</i></div>  <div class="adparent svelte-179v2fh" data-svelte-h="svelte-u5tbbf"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8474194726617008" data-ad-slot="5686489609" data-ad-format="auto" data-full-width-responsive="true"></ins></div> <i style="font-size:12px;" data-svelte-h="svelte-z3pww">*advertisement</i></div> ${validate_component(Modal, "Modal").$$render(
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
          return `<h2 slot="header" data-svelte-h="svelte-r01ry8"><span class="styled-header">How To Play</span></h2>`;
        },
        default: () => {
          return `${validate_component(Help, "Help").$$render($$result, {}, {}, {})}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gameHasStarted = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main>${gameHasStarted ? `${validate_component(GameBoard, "GameBoard").$$render($$result, {}, {}, {})}` : `${validate_component(Menu, "Menu").$$render(
      $$result,
      { gameHasStarted },
      {
        gameHasStarted: ($$value) => {
          gameHasStarted = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
