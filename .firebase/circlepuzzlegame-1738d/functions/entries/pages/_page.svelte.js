import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../chunks/ssr.js";
import { T as Toast, M as Modal, H as Help, S as Stats, s as shirt_ad, a as shirt_ad_mobile } from "../../chunks/Stats.js";
const logo_src = "/_app/immutable/assets/logo.LqNMeCRN.png";
const css$1 = {
  code: '.page.svelte-okkovb{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;width:100vw;background-color:#DDC1C1;padding-top:8%}.content.svelte-okkovb{text-align:center;padding:20px;color:#D8CFD2\n  }.logo.svelte-okkovb{width:65px;height:65px}.menu-header.svelte-okkovb{font-size:32px;margin:3px;color:black;font-weight:800;font-family:"Playfair Display", serif}.menu-sub-header.svelte-okkovb{font-size:20px;margin:3px;color:black;margin-bottom:10px;padding-left:15px;padding-right:15px}.menu-small-text.svelte-okkovb{font-size:12px;margin:3px;color:black}.menu-date.svelte-okkovb{font-size:15px;color:black;font-weight:800;margin-top:15px;margin-bottom:0}.menu-number.svelte-okkovb{font-size:15px;margin:0px;color:black;margin-bottom:5px}.menu-btn.svelte-okkovb{padding:10px 20px;font-size:16px;background-color:#000000;border-radius:50px;color:#fff;border:none;cursor:pointer;width:150px;height:50px;margin-bottom:10px}.no-fill.svelte-okkovb{background-color:transparent !important;color:#000 !important;border:1px solid #000}.terms.svelte-okkovb{color:black;text-decoration:underline;font-size:12px}.shirt-ad.svelte-okkovb{display:none;margin:0 auto;padding-top:1rem}@media(min-width: 500px){.shirt-ad.large-screen.svelte-okkovb{display:block;max-width:550px;width:90%\n    }}@media(max-width: 500px){.shirt-ad.mobile-screen.svelte-okkovb{display:block;width:90%}}.version-tag.svelte-okkovb{font-size:9px;color:black}.banner-ad.svelte-okkovb{margin:0 auto;margin-bottom:15px;margin-top:4px;position:fixed;top:0;left:50%;transform:translateX(-50%)}',
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
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="page svelte-okkovb"> <div class="content svelte-okkovb"> <div id="theletterloop-com_300x600" class="banner-ad svelte-okkovb" data-svelte-h="svelte-1jo9uuc"><script type="text/javascript">aiptag.cmd.display.push(function() { aipDisplayTag.display('XXXXX_placement'); });<\/script></div> ${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} <img class="logo svelte-okkovb"${add_attribute("src", logo_src, 0)} alt="Our Little Loop Logo"> <p class="menu-header svelte-okkovb" data-svelte-h="svelte-1ha1u">LetterLoop</p> <p class="menu-sub-header svelte-okkovb" data-svelte-h="svelte-j0rk1k">Two 5-letter words, two shared letters, one loop</p> <div><button class="menu-btn svelte-okkovb" data-svelte-h="svelte-1h0esab">Play</button></div> <div><button class="menu-btn no-fill svelte-okkovb" data-svelte-h="svelte-lan869">How to play</button></div> <div><button class="menu-btn no-fill svelte-okkovb" data-svelte-h="svelte-xlabo4">Share</button></div> <p class="menu-date svelte-okkovb">${escape(today)}</p> <p class="menu-number svelte-okkovb">Loop #${escape(puzzleNumber)}</p> <i class="menu-small-text svelte-okkovb" data-svelte-h="svelte-1ec062z">For those who love morning games</i> <div data-svelte-h="svelte-1gramgw"><a href="https://ko-fi.com/letterloop" target="_blank"><img class="shirt-ad large-screen svelte-okkovb"${add_attribute("src", shirt_ad, 0)} alt="LetterLoop Merch"></a> <a href="https://ko-fi.com/letterloop" target="_blank"><img class="shirt-ad mobile-screen svelte-okkovb"${add_attribute("src", shirt_ad_mobile, 0)} alt="LetterLoop Merch"></a></div> <div style="padding-top:15px;" data-svelte-h="svelte-176d9pg"><a class="terms svelte-okkovb" href="/Privacy-Policy">Privacy Policy</a> <br> <a class="terms svelte-okkovb" href="/Terms">Terms and Conditions</a></div> <p class="version-tag svelte-okkovb" data-svelte-h="svelte-sjkofb">version 1.8</p></div> <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js" data-svelte-h="svelte-1lg2fl8"><\/script> <script data-svelte-h="svelte-18fr931">kofiWidgetOverlay.draw('letterloop', {
				'type': 'floating-chat',
				'floating-chat.donateButton.text': 'Support me',
				'floating-chat.donateButton.background-color': '#00b9fe',
				'floating-chat.donateButton.text-color': '#fff'
			});<\/script></div> ${validate_component(Modal, "Modal").$$render(
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
const css = {
  code: "main.svelte-1qv1ozp{background-color:#DDC1C1!important}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-1qv1ozp">${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
