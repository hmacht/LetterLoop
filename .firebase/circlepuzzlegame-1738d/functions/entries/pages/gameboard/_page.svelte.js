import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, d as each, b as add_attribute } from "../../../chunks/ssr.js";
import { T as Toast, M as Modal, S as Stats, H as Help, s as shirt_ad, a as shirt_ad_mobile } from "../../../chunks/Stats.js";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";
import "firebase/analytics";
import { r as readable, w as writable } from "../../../chunks/index.js";
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
const css = {
  code: ".shirt-ad.svelte-1k9wl3u{display:none;margin:0 auto;padding-top:1rem}@media(min-width: 500px){.shirt-ad.large-screen.svelte-1k9wl3u{display:block;max-width:550px;width:90%\n      }}@media(max-width: 500px){.shirt-ad.mobile-screen.svelte-1k9wl3u{display:block;width:90%}}",
  map: null
};
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
  $$result.css.add(css);
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
    $$rendered = `<main><div class="nav-flex-container"><div class="title-container "><p class="title" data-svelte-h="svelte-1nehi25"><a class="title-link" href="/">LetterLoop</a></p> <small style="color: rgb(46, 46, 46);">(public beta) · Edited by ${escape(puzzle_author)}</small></div> <div class="spacer"></div> <div class="help-container" data-svelte-h="svelte-1hqa4i8"><i class="fa-regular fa-face-sad-tear"></i> <p class="how-to-play">Give Up</p></div> <div class="help-container" data-svelte-h="svelte-1i75e1h"><i class="fa-regular fa-circle-question"></i> <p class="how-to-play">How to play</p></div></div> <div class="divider"></div> ${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} <div class="flex-container"><div class="timer-container">${validate_component(Timer, "Timer").$$render(
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
          return `${`<p class="small-header" data-svelte-h="svelte-1do05u2">Solved in</p> <p class="large-header">${escape(elapsedSeconds)}</p> <hr>`} <span class="small-header" data-svelte-h="svelte-eapto">Global Stats</span> <br> ${validate_component(Stats, "Stats").$$render($$result, { globalStats }, {}, {})} <hr> <span class="small-header" data-svelte-h="svelte-j8w724">Solutions</span> <p style="height:6px;margin:0;padding;0px;"></p> ${solutions && solutions.length > 2 ? `${each(solutions, (solution) => {
            return `<!-- HTML_TAG_START -->${format_solution(solution)}<!-- HTML_TAG_END -->`;
          })}` : `${solutions && solutions.length > 0 ? `<!-- HTML_TAG_START -->${format_solution(solutions[0])}<!-- HTML_TAG_END -->` : `Loading Solutions...`}`} <hr> ${`${`${`<div class="flex-container" data-svelte-h="svelte-1bsic53"><span style="font-size:30px;padding-right:5px;">🥉</span> <div><p class="small-modal-text">Oooof.</p> <p class="small-modal-text">You&#39;re over today&#39;s average - try for gold tomorrow</p></div></div>`}`} <hr>`} <div class="flex-container"><div class="spacer"></div> <button class="share-button" data-svelte-h="svelte-1urjot1">Share</button> <div class="spacer"></div></div> <hr> <div data-svelte-h="svelte-1gramgw"><a href="https://ko-fi.com/letterloop" target="_blank"><img class="shirt-ad large-screen svelte-1k9wl3u"${add_attribute("src", shirt_ad, 0)} alt="LetterLoop Merch"></a> <a href="https://ko-fi.com/letterloop" target="_blank"><img class="shirt-ad mobile-screen svelte-1k9wl3u"${add_attribute("src", shirt_ad_mobile, 0)} alt="LetterLoop Merch"></a></div>`;
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(GameBoard, "GameBoard").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
