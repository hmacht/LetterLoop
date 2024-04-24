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
  $$result.css.add(css$2);
  return ` <dialog class="svelte-1cg8oiu"${add_attribute("this", dialog, 0)}> <div class="svelte-1cg8oiu">${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} <div class="flex-container svelte-1cg8oiu"><div class="spacer svelte-1cg8oiu"></div> ${!hide_close ? `<i class="fa-solid fa-xmark svelte-1cg8oiu"></i>` : ``}</div> ${slots.header ? slots.header({}) : ``} ${slots.default ? slots.default({}) : ``}</div> </dialog>`;
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
function format_solution(solution) {
  if (!solution) {
    return "Loading Solutions...";
  }
  const firstPart = solution.substring(0, 5);
  const lastPart = solution.substring(4, 8) + firstPart[0];
  const htmlString = `
        <div>
          <a href="https://www.merriam-webster.com/dictionary/${firstPart}" target="blank">${firstPart}</a> 
          + 
          <a href="https://www.merriam-webster.com/dictionary/${lastPart}" target="blank">${lastPart}</a>
        </div>
      `;
  return htmlString;
}
const GameBoard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDisabled;
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
  let globalStats;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isDisabled = (index) => disabledKeys.includes(index);
    (/* @__PURE__ */ new Date()).toLocaleDateString(void 0, {
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
    })}  <div class="key" data-svelte-h="svelte-pcdrzy"><i class="fa-solid fa-eraser"></i></div> <div class="key" data-svelte-h="svelte-1nazuqy"><i class="fa-solid fa-shuffle"></i></div> <div class="key" data-svelte-h="svelte-1lzlrm1"><i class="fa-solid fa-delete-left"></i></div> <div class="key enter-key" data-svelte-h="svelte-10umx21">Enter</div></div>` : `<p data-svelte-h="svelte-kk77ic">Loading Game...</p>`}</main>  ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        modalType: "end",
        showModal: showCompleteModal
      },
      {
        showModal: ($$value) => {
          showCompleteModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<p class="small-header" data-svelte-h="svelte-1do05u2">Solved in</p> <p class="large-header">${escape(elapsedSeconds)}</p> <hr> <span class="small-header" data-svelte-h="svelte-eapto">Global Stats</span> <br> ${validate_component(Stats, "Stats").$$render($$result, { globalStats }, {}, {})} <hr> <span class="small-header" data-svelte-h="svelte-j8w724">Solutions</span> <p style="height:6px;margin:0;padding;0px;"></p> ${solutions && solutions.length > 2 ? `${each(solutions, (solution) => {
            return `<!-- HTML_TAG_START -->${format_solution(solution)}<!-- HTML_TAG_END -->`;
          })}` : `${solutions && solutions.length > 0 ? `<!-- HTML_TAG_START -->${format_solution(solutions[0])}<!-- HTML_TAG_END -->` : `Loading Solutions...`}`} <hr> ${`${`<div class="flex-container" data-svelte-h="svelte-1dnxwdz"><span style="font-size:30px;padding-right:5px;">🥉</span> <div><p class="small-modal-text">Oooof.</p> <p class="small-modal-text">You&#39;re over today&#39;s average - try for gold tomorrow</p></div></div>`}`} <hr> <div class="flex-container"><div class="spacer"></div> <button class="share-button" data-svelte-h="svelte-1urjot1">Share</button> <div class="spacer"></div></div>`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        modalType: "help",
        showModal: showHelpModal
      },
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
          return `<hr> ${validate_component(Help, "Help").$$render($$result, {}, {}, {})}`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        hide_close: true,
        modalType: "pause",
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
          return `<hr> <div class="flex-container"><div class="spacer"></div> <button class="share-button" data-svelte-h="svelte-o41kx2">Resume</button> <div class="spacer"></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const logo_src = "/_app/immutable/assets/logo.LqNMeCRN.png";
const css = {
  code: '.page.svelte-165dwsd{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh !important;margin:0;width:100vw;background-color:#DDC1C1}.content.svelte-165dwsd{text-align:center;padding:20px;color:#D8CFD2\n  }.logo.svelte-165dwsd{width:65px;height:65px}.menu-header.svelte-165dwsd{font-size:32px;margin:3px;color:black;font-weight:800;font-family:"Playfair Display", serif}.menu-sub-header.svelte-165dwsd{font-size:20px;margin:3px;color:black;margin-bottom:10px;padding-left:15px;padding-right:15px}.menu-small-text.svelte-165dwsd{font-size:12px;margin:3px;color:black}.menu-date.svelte-165dwsd{font-size:15px;color:black;font-weight:800;margin-top:15px;margin-bottom:0}.menu-number.svelte-165dwsd{font-size:15px;margin:0px;color:black;margin-bottom:5px}.menu-btn.svelte-165dwsd{padding:10px 20px;font-size:16px;background-color:#000000;border-radius:50px;color:#fff;border:none;cursor:pointer;width:150px;height:50px;margin-bottom:10px}.no-fill.svelte-165dwsd{background-color:transparent !important;color:#000 !important;border:1px solid #000}.terms.svelte-165dwsd{color:black;text-decoration:underline;font-size:12px}',
  map: null
};
function calculatePuzzleNumber() {
  const today = /* @__PURE__ */ new Date();
  const targetDate = /* @__PURE__ */ new Date("2024-02-10");
  const differenceInMs = today - targetDate;
  return Math.floor(differenceInMs / (1e3 * 60 * 60 * 24));
}
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { gameHasStarted } = $$props;
  let showHelpModal = false;
  let showStatsModal = false;
  let today = (/* @__PURE__ */ new Date()).toLocaleDateString();
  let puzzleNumber = calculatePuzzleNumber();
  if ($$props.gameHasStarted === void 0 && $$bindings.gameHasStarted && gameHasStarted !== void 0)
    $$bindings.gameHasStarted(gameHasStarted);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="page svelte-165dwsd"> <div class="content svelte-165dwsd"><img class="logo svelte-165dwsd"${add_attribute("src", logo_src, 0)} alt="Our Little Loop Logo"> <p class="menu-header svelte-165dwsd" data-svelte-h="svelte-1ha1u">LetterLoop</p> <p class="menu-sub-header svelte-165dwsd" data-svelte-h="svelte-j0rk1k">Two 5-letter words, two shared letters, one loop</p> <div><button class="menu-btn svelte-165dwsd" data-svelte-h="svelte-1h0esab">Play</button></div> <div><button class="menu-btn no-fill svelte-165dwsd" data-svelte-h="svelte-lan869">How to play</button></div> <div><button class="menu-btn no-fill svelte-165dwsd" data-svelte-h="svelte-136ie3n">Stats</button></div> <p class="menu-date svelte-165dwsd">${escape(today)}</p> <p class="menu-number svelte-165dwsd">Loop #${escape(puzzleNumber)}</p> <i class="menu-small-text svelte-165dwsd" data-svelte-h="svelte-1ec062z">For those who love morning games</i> <div style="padding-top:10px;" data-svelte-h="svelte-5k5zif"><a class="terms svelte-165dwsd" href="/Privacy-Policy">Privacy Policy</a> <br> <a class="terms svelte-165dwsd" href="/Terms">Terms and Conditions</a></div></div></div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        modalType: "help",
        showModal: showHelpModal
      },
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
          return `<hr> ${validate_component(Help, "Help").$$render($$result, {}, {}, {})}`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        modalType: "stats",
        showModal: showStatsModal
      },
      {
        showModal: ($$value) => {
          showStatsModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 slot="header" data-svelte-h="svelte-1gfnj8z"><span class="styled-header">Today&#39;s Stats</span></h2>`;
        },
        default: () => {
          return `<hr> ${validate_component(Stats, "Stats").$$render($$result, {}, {}, {})}`;
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
