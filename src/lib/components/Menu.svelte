<script lang="ts">
  import { onMount } from 'svelte';

  import Profile from '$lib/components/Profile.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import Help from '$lib/components/Help.svelte';
  import Toast from '$lib/components/Toast.svelte';
  import PromotionLink from '$lib/components/PromotionLink.svelte';

  import { notifications } from "$lib/utils/notifications";
  import { session, type User } from '$lib/session';

  import logo_src from '$lib/images/logo.png';

  export let showGameBoard;

  let showHelpModal = false;
  let showProfileModal = false;
  let today = new Date().toLocaleDateString();
  let puzzleNumber = calculatePuzzleNumber()
  let loggedIn: boolean = false;
  let loadingUser: boolean = true;
  let user: User;
 
	session.subscribe((cur: any) => {
    user = cur?.user;
		loggedIn = cur?.loggedIn;
    loadingUser = cur?.loading;
	});
  
  function calculatePuzzleNumber() {
    const today = new Date();
    const targetDate = new Date('2024-02-10'); // First Day of LetterLoop
    const differenceInMs = today - targetDate;

    return Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  }

  onMount(() => {
    loadAd();
  });

  function loadAd() {
    window.aiptag.cmd.display.push(function() { window.aipDisplayTag.display('theletterloop-com_300x50'); });
  }

  function startButtonClick() {
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
    height: min-content;
  }

  .content {
    text-align: center;
    padding: 20px;
    color: #D8CFD2
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

  .login-header {
    font-size: 15px;
    color: black;
    margin: 20px 0 5px 0;
  }
</style>

<main>
  <div class="page">
    <div class="content">
      
      <Toast />

      <div id='theletterloop-com_300x50'>
        <!-- JS Ad Injection -->
      </div>
  
      <img class="w-12 h-12 mx-auto my-5 object-contain" src={logo_src} alt="Our Little Loop Logo" />
  
      <p class="menu-header">LetterLoop</p>
      <p class="menu-sub-header">Two 5-letter words, two shared letters, one loop</p>
    
      <div><button class="menu-btn" on:click={startButtonClick}>Play</button></div>
      <div><button class="menu-btn no-fill" on:click={() => showHelpModal = true}>How to play</button></div>
      <div><button class="menu-btn no-fill" on:click={share}>Share</button></div>
      {#if loadingUser != undefined && !loadingUser}
        {#if loggedIn}
          <button 
            class="menu-btn no-fill" 
            on:click={() => showProfileModal = true}
          >
            Profile
          </button>
        {:else}
          <div>
            <p class="login-header">Want to save your stats?</p>
            <button 
              class="menu-btn no-fill" 
              on:click={() => window.location.href = '/auth/login'}
            >
              Log In
            </button>
          </div>
        {/if}
      {/if}
      
      
      <div class="details-container">
        <p class="menu-date">{today}</p>
        <p class="menu-number">Loop #{puzzleNumber}</p>
        <i class="menu-small-text">For those who love morning games</i>
      </div>
      
      <PromotionLink />
  
      <div style="padding-top:15px;">
        <a class="terms" href="/privacy-policy">Privacy Policy</a>
        <br>
        <a class="terms" href="/terms">Terms and Conditions</a>
      </div>
  
      <p class="version-tag">version 2.0</p>
    </div>
  </div>
</main>


<Modal bind:showModal={showHelpModal} modalType={"help"}>
  <h2 slot="header">
    <span class="styled-header">How To Play</span>
  </h2>
  <hr class="my-3 border-red-200">
  <Help />
</Modal>

<Modal bind:showModal={showProfileModal} modalType={"profile"}>
  {#if user && user.uid}
    <Profile bind:userId={user.uid} />
  {/if}
</Modal>