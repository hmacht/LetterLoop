<script>
  import logo_src from '$lib/images/logo.png';
  import Modal from './Modal.svelte';
  import Help from './Help.svelte';
  import Stats from './Stats.svelte';

  export let gameHasStarted;

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
    gameHasStarted = true
  }

</script>

<style>
  /* Add your styling here */
  .page {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    justify-content: center;
    align-items: center;
    height: 100vh !important;
    margin: 0;
    width: 100vw;
    background-color: #DDC1C1;
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

</style>

<div class="page">
  <!-- Main Page Content -->
  <div class="content">
    <img class="logo" src={logo_src} alt="Our Little Loop Logo" />

      <p class="menu-header">LetterLoop</p>
      <p class="menu-sub-header">Two 5-letter words, two shared letters, one loop</p>
    
      <div><button class="menu-btn" on:click={startButtonClick}>Play</button></div>
      <div><button class="menu-btn no-fill" on:click={() => showHelpModal = true}>How to play</button></div>
      <div><button class="menu-btn no-fill" on:click={() => showStatsModal = true}>Stats</button></div>
    
      <p class="menu-date">{today}</p>
      <p class="menu-number">Loop #{puzzleNumber}</p>
      <i class="menu-small-text">For those who love morning games</i>

      <div style="padding-top:10px;">
        <a class="terms" href="/Privacy-Policy">Privacy Policy</a>
        <br>
        <a class="terms" href="/Terms">Terms and Conditions</a>
      </div>

  </div>
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