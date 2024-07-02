<script>
  // @ts-nocheck
  
  import logo_src from '$lib/images/logo.png';
  import Modal from '../modal/Modal.svelte';
  import Help from '../help/Help.svelte';
  import Stats from '../stats/Stats.svelte';
  import { notifications } from "../../js/notifications.js";
  import Toast from '../toast/Toast.svelte';
  import CharacterBanner from '../characterBanner/CharacterBanner.svelte';

  export let showGameBoard;

  let showHelpModal = false;
  let today = new Date().toLocaleDateString();
  let puzzleNumber = calculatePuzzleNumber()
  
  function calculatePuzzleNumber() {
    const today = new Date();
    const targetDate = new Date('2024-02-10'); // First Day of LetterLoop
    const differenceInMs = today - targetDate;

    return Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  }

  function startButtonClick() {
    // window.location.href = "/gameboard";
    showGameBoard = true;
    hideKofiButton();
  }

  function hideKofiButton() {
    const kofiWidgets = document.querySelectorAll('[id^="kofi-widget-overlay-"]'); // select elements with ID starting with "kofi-widget-overlay-"
    kofiWidgets.forEach(widget => {
      widget.style.display = 'none';
    });
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
  main {
    background-color: #FFE9E9!important;
  }
  
  .page {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100vw;
    background-color: #FFE9E9;
    padding-top: 2rem;
  }

  .content {
    text-align: center;
    padding: 20px;
    color: #D8CFD2
  }

  .logo {
    width: 50px;
    height: 50px;
    padding-bottom: 1rem;
  }

  .menu-header {
    font-size: 28px;
    margin: 3px;
    color: black;
    font-weight: 500;
    font-family: "Playfair Display", serif;
  }

  .menu-sub-header {
    font-size: 18px;
    margin: 3px;
    color: black;
    margin-bottom: 2rem;
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
    margin-bottom:0;
  }

  .menu-number {
    font-size: 15px;
    margin: 0px;
    color: black;
    margin-bottom:5px;
  }

  .details-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .menu-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-image: -webkit-linear-gradient(top, #FF4F87, #FC2F4F);
    background-image: linear-gradient(to bottom, #FF4F87, #FC2F4F);
    border-radius: 50px;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 150px;
    height: 50px;
    margin: 0 auto 10px auto;
  }

  .no-fill {
    background-image: none !important;
    background-color: transparent;
    color: #FC2F4F !important;
    border: 1px solid #FC2F4F;
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
</style>

<main>
  <div class="page">
    <div class="content">
      
      <Toast />
  
      <img class="logo" src={logo_src} alt="Our Little Loop Logo" />
  
      <p class="menu-header">LetterLoop</p>
      <p class="menu-sub-header">Two 5-letter words, two shared letters, one loop</p>
    
      <div><button class="menu-btn" on:click={startButtonClick}>Play</button></div>
      <div><button class="menu-btn no-fill" on:click={() => showHelpModal = true}>How to play</button></div>
      <div><button class="menu-btn no-fill" on:click={share}>Share</button></div>
      
      <div class="details-container">
        <p class="menu-date">{today}</p>
        <p class="menu-number">Loop #{puzzleNumber}</p>
        <i class="menu-small-text">For those who love morning games</i>
      </div>
  
      <a href="https://ko-fi.com/letterloop" target="_blank">
        <CharacterBanner
          backgroundColor="#FFE1E5"
          borderColor="#FF4B62"
          characterName="flower"
          characterSize="90px"
          headerText="Support the Loop."
          subtitle="Click here to donate."
        />
      </a>
  
      <div style="padding-top:15px;">
        <a class="terms" href="/privacy-policy">Privacy Policy</a>
        <br>
        <a class="terms" href="/terms">Terms and Conditions</a>
      </div>
  
      <p class="version-tag">version 1.8</p>

      <!-- Ad-->
      <div id='theletterloop-com_300x600' class="banner-ad">
        <script type='text/javascript'>
          aiptag.cmd.display.push(function() { aipDisplayTag.display('theletterloop-com_300x600'); });
        </script>
      </div>
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
</main>


<Modal bind:showModal={showHelpModal} modalType={"help"}>
  <h2 slot="header">
    <span class="styled-header">How To Play</span>
  </h2>
  <hr>
  <Help />
</Modal>