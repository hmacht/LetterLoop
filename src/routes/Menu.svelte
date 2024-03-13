<script>
  import logo_src from '$lib/images/logo.png';
  import Modal from './Modal.svelte';
  import Help from './Help.svelte';

  export let gameHasStarted;

  let showHelpModal = false;
  let today = new Date().toLocaleDateString();

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
    font-family: "Playfair Display", serif;
  }

  .menu-sub-header {
    font-size: 20px;
    margin: 3px;
    color: black;
    margin-bottom: 10px;
  }

  .menu-small-text {
    font-size: 12px;
    margin: 3px;
    color: black;
  }

  .menu-date {
    font-size: 15px;
    margin: 3px;
    color: black;
    font-weight: 800;
    margin-top: 15px;
  }

  .menu-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #000000;
    border-radius: 50px;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 130px;
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

</style>

<div class="page">
  <!-- Main Page Content -->
  <div class="content">
    <img class="logo" src={logo_src} alt="Our Little Loop Logo" />

      <p class="menu-header">The LetterLoop</p>
      <p class="menu-sub-header">Two 5-letter words, two shared letters, one loop</p>
    
      <div><button class="menu-btn" on:click={startButtonClick}>Play</button></div>
      <div><button class="menu-btn no-fill" on:click={() => showHelpModal = true}>How to play</button></div>
    
      <p class="menu-date">{today}</p>
      <i class="menu-small-text">For those who love morning games</i>

      <div style="padding-top:10px;">
        <a href="/Privacy-Policy">Privacy Policy</a>
        |
        <a href="/Terms">terms and conditions</a>
      </div>

  </div>
</div>


<Modal bind:showModal={showHelpModal} modalType={"help"}>
  <h2 slot="header">
    <span class="styled-header">How To Play</span>
  </h2>
  <Help />
</Modal>