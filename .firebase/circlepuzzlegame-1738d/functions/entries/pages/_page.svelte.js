import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { M as Modal, H as Help, S as Stats } from "../../chunks/Stats.js";
const logo_src = "/_app/immutable/assets/logo.LqNMeCRN.png";
const css = {
  code: '.page.svelte-5rqwfx{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh !important;margin:0;width:100vw;background-color:#DDC1C1}.content.svelte-5rqwfx{text-align:center;padding:20px;color:#D8CFD2\n  }.logo.svelte-5rqwfx{width:65px;height:65px}.menu-header.svelte-5rqwfx{font-size:32px;margin:3px;color:black;font-weight:800;font-family:"Playfair Display", serif}.menu-sub-header.svelte-5rqwfx{font-size:20px;margin:3px;color:black;margin-bottom:10px;padding-left:15px;padding-right:15px}.menu-small-text.svelte-5rqwfx{font-size:12px;margin:3px;color:black}.menu-date.svelte-5rqwfx{font-size:15px;color:black;font-weight:800;margin-top:15px;margin-bottom:0}.menu-number.svelte-5rqwfx{font-size:15px;margin:0px;color:black;margin-bottom:5px}.menu-btn.svelte-5rqwfx{padding:10px 20px;font-size:16px;background-color:#000000;border-radius:50px;color:#fff;border:none;cursor:pointer;width:150px;height:50px;margin-bottom:10px}.no-fill.svelte-5rqwfx{background-color:transparent !important;color:#000 !important;border:1px solid #000}.terms.svelte-5rqwfx{color:black;text-decoration:underline;font-size:12px}',
  map: null
};
function calculatePuzzleNumber() {
  const today = /* @__PURE__ */ new Date();
  const targetDate = /* @__PURE__ */ new Date("2024-02-10");
  const differenceInMs = today - targetDate;
  return Math.floor(differenceInMs / (1e3 * 60 * 60 * 24));
}
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showHelpModal = false;
  let showStatsModal = false;
  let today = (/* @__PURE__ */ new Date()).toLocaleDateString();
  let puzzleNumber = calculatePuzzleNumber();
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="page svelte-5rqwfx"> <div class="content svelte-5rqwfx"><img class="logo svelte-5rqwfx"${add_attribute("src", logo_src, 0)} alt="Our Little Loop Logo"> <p class="menu-header svelte-5rqwfx" data-svelte-h="svelte-1ha1u">LetterLoop</p> <p class="menu-sub-header svelte-5rqwfx" data-svelte-h="svelte-j0rk1k">Two 5-letter words, two shared letters, one loop</p> <div><button class="menu-btn svelte-5rqwfx" data-svelte-h="svelte-1h0esab">Play</button></div> <div><button class="menu-btn no-fill svelte-5rqwfx" data-svelte-h="svelte-lan869">How to play</button></div> <div><button class="menu-btn no-fill svelte-5rqwfx" data-svelte-h="svelte-136ie3n">Stats</button></div> <p class="menu-date svelte-5rqwfx">${escape(today)}</p> <p class="menu-number svelte-5rqwfx">Loop #${escape(puzzleNumber)}</p> <i class="menu-small-text svelte-5rqwfx" data-svelte-h="svelte-1ec062z">For those who love morning games</i> <div style="padding-top:10px;" data-svelte-h="svelte-5k5zif"><a class="terms svelte-5rqwfx" href="/Privacy-Policy">Privacy Policy</a> <br> <a class="terms svelte-5rqwfx" href="/Terms">Terms and Conditions</a></div></div></div> ${validate_component(Modal, "Modal").$$render(
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
  return `<main>${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
