<script>
  import logo_src from '$lib/images/logo.png';
  import shirt_ad from '$lib/images/shirt-ad.png';
  import shirt_ad_mobile from '$lib/images/shirt-ad-mobile.png';
  import Modal from './shared/Modal.svelte';
  import Help from './shared/Help.svelte';
  import Stats from './shared/Stats.svelte';
  import { notifications } from "./notifications.js";
  import Toast from './shared/Toast.svelte';

  let showHelpModal = false;
  let showStatsModal = false;
  let today = new Date().toLocaleDateString();
  let puzzleNumber = calculatePuzzleNumber()
  
  function calculatePuzzleNumber() {
    const today = new Date();
    const targetDate = new Date('2024-02-10'); // First Day of LetterLoop
    const differenceInMs = today - targetDate;

    return Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  }

  function startButtonClick() {
    window.location.href = "/gameboard";
  }

  const share = async () => {
      let shareText = "New morning game! theletterloop.com"
      
      if (navigator.share) {
        try {
          await navigator.share({
            title: "",
            text: shareText,
            url: window.location.href
          });
        } catch (error) {
          notifications.default('Error', 1000)
        }
      } else {
        try {
          await navigator.clipboard.writeText(shareText);
          notifications.default('Copied Link!', 1000)
        } catch (error) {
          notifications.default('Error', 1000)
        }
      }
    };
</script>

<style>
  /* Add your styling here */
  .page {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100vw;
    background-color: #DDC1C1;
    padding-top: 8%;
  }

  .content {
    text-align: center;
    padding: 20px;
    color: #D8CFD2
  }

  .logo {
    width: 65px;
    height: 65px;
  }

  .menu-header {
    font-size: 32px;
    margin: 3px;
    color: black;
    font-weight: 800;
    font-family: "Playfair Display", serif;
  }

  .menu-sub-header {
    font-size: 20px;
    margin: 3px;
    color: black;
    margin-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .menu-small-text {
    font-size: 12px;
    margin: 3px;
    color: black;
  }

  .menu-date {
    font-size: 15px;
    color: black;
    font-weight: 800;
    margin-top: 15px;
    margin-bottom:0;
  }

  .menu-number {
    font-size: 15px;
    margin: 0px;
    color: black;
    margin-bottom:5px;
  }

  .menu-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #000000;
    border-radius: 50px;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 150px;
    height: 50px;
    margin-bottom: 10px;
  }

  .no-fill {
    background-color: transparent !important;
    color: #000 !important;
    border: 1px solid #000;
  }

  .spacer {
    flex-grow: 1;
  }

  .terms {
    color: black;
    text-decoration: underline;
    font-size: 12px;
  }

  .shirt-ad {
    display: none; 
    margin: 0 auto;
    padding-top: 1rem;
  }

  @media (min-width: 500px) {
    .shirt-ad.large-screen {
      display: block; /* Show the logo for large screens */
      max-width: 550px;
      width: 90%
    }
  }

  @media (max-width: 500px) {
    .shirt-ad.mobile-screen {
      display: block; /* Show the logo for mobile screens */
      width: 90%;
    }
  }

  .version-tag {
    font-size: 9px;
    color: black;
  }

  .banner-ad {
    margin: 0 auto;
    margin-bottom: 15px;
    margin-top: 4px;
    position: fixed;
    top: 0; 
    left: 50%;
    transform: translateX(-50%);
  }

</style>

<div class="page">
  <!-- Main Page Content -->
  <div class="content">
    
    <!-- Ad-->
    <div id='theletterloop-com_300x600' class="banner-ad">
      <script type='text/javascript'>
        aiptag.cmd.display.push(function() { aipDisplayTag.display('XXXXX_placement'); });
      </script>
    </div>

    <Toast />

    <img class="logo" src={logo_src} alt="Our Little Loop Logo" />

    <p class="menu-header">LetterLoop</p>
    <p class="menu-sub-header">Two 5-letter words, two shared letters, one loop</p>
  
    <div><button class="menu-btn" on:click={startButtonClick}>Play</button></div>
    <div><button class="menu-btn no-fill" on:click={() => showHelpModal = true}>How to play</button></div>
    <div><button class="menu-btn no-fill" on:click={share}>Share</button></div>
  
    <p class="menu-date">{today}</p>
    <p class="menu-number">Loop #{puzzleNumber}</p>
    <i class="menu-small-text">For those who love morning games</i>

    <div>
      <a href="https://ko-fi.com/letterloop" target="_blank"><img class="shirt-ad large-screen" src={shirt_ad} alt="LetterLoop Merch" /></a>
      <a href="https://ko-fi.com/letterloop" target="_blank"><img class="shirt-ad mobile-screen" src={shirt_ad_mobile} alt="LetterLoop Merch" /></a>
    </div>

    <div style="padding-top:15px;">
      <a class="terms" href="/Privacy-Policy">Privacy Policy</a>
      <br>
      <a class="terms" href="/Terms">Terms and Conditions</a>
    </div>

    <p class="version-tag">version 1.8</p>
  </div>

  <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
		<script>
			kofiWidgetOverlay.draw('letterloop', {
				'type': 'floating-chat',
				'floating-chat.donateButton.text': 'Support me',
				'floating-chat.donateButton.background-color': '#00b9fe',
				'floating-chat.donateButton.text-color': '#fff'
			});
		</script>
</div>

<Modal bind:showModal={showHelpModal} modalType={"help"}>
  <h2 slot="header">
    <span class="styled-header">How To Play</span>
  </h2>
  <hr>
  <Help />
</Modal>

<Modal bind:showModal={showStatsModal} modalType={"stats"}>
  <h2 slot="header">
    <span class="styled-header">Today's Stats</span>
  </h2>
  <hr>
  <Stats />
</Modal>