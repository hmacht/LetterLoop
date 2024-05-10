<script>
  // @ts-nocheck
  
    import Modal from '../shared/Modal.svelte';
    import { notifications } from "../notifications.js";
    import Toast from '../shared/Toast.svelte';
    import { onMount } from 'svelte';
    import { firebaseApp, signIn } from '../firebaseConfig';
    import { fetchFirebaseData } from '../firebaseFetchData.js';
    import { logTime } from '../logCompletionTime.js';
    import { getAnalytics, logEvent } from "firebase/analytics";
    import Timer from './Timer.svelte';
    import Help from '../shared/Help.svelte';
    import Stats from '../shared/Stats.svelte';
    import shirt_ad from '$lib/images/shirt-ad.png';
    import shirt_ad_mobile from '$lib/images/shirt-ad-mobile.png';
  
    let showCompleteModal = false;
    let showHelpModal = false;
    let showPauseModal = false;
    let solutions = [];
    solutions = solutions.map(solution => solution.toLowerCase());
    let letterBank;
    let selectedLetters = Array(8).fill("");
    let disabledKeys = [];
    let scrambledLettersBank;
    let currentIndex = 0
    let sharedLetterIndexes = [0, 4]
    let game_timer;
    let elapsedSeconds = 0;
    let puzzle_author = "---";
    let globalStats;
    let gaveUp = false;
  
    onMount(async () => {
      
      const analytics = getAnalytics(firebaseApp);
      logEvent(analytics, 'screen_view', {
        firebase_screen: "game_board_view",
        firebase_screen_class: "game_board_controller"
      });
  
      // Format the date as a string in "MM-DD-YYYY" format
      const currentDatetime = new Date();
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const formattedDate = currentDatetime.toLocaleDateString('en-US', options).replace(/\//g, '-');
  
      try {
        if (await signIn()) {
          const dataFromFirebase = await fetchFirebaseData('solutions/' + formattedDate);
          const parsedData = Object.values(dataFromFirebase);
          puzzle_author = parsedData[0]
          solutions = parsedData[1]
          letterBank = solutions[0]
          scrambledLettersBank = scrambleLettersBank(letterBank)
          game_timer.start();
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    });
    
    function findPressedKeyIndex(bank, letter) {
      for (let i = 0; i < bank.length; i++) {
        if (bank[i] == letter && !isDisabled(i)) {
          return i;
        }
      }
      return -1;
    }
  
    function handleKeyPress(event) {
      const keyPressed = event.key.toLowerCase();
      const index = findPressedKeyIndex(scrambledLettersBank, keyPressed)
  
      if (event.keyCode === 13) {
        checkSolution()
      } else if (event.keyCode === 8) {
        deleteLetter()
      } else if (index !== -1 && !isDisabled(index)) {
        letterSelected(keyPressed, index);
      }
    }
  
    function scrambleLettersBank(letterBank) {
      const scrambledArray = letterBank.split('').sort(() => Math.random() - 0.5);
      return scrambledArray.join('');
    }
  
    function letterSelected(letter, index) {		
       if (
        currentIndex < selectedLetters.length &&
        !isDisabled(index)
      ) {
        selectedLetters[currentIndex] = letter;
        currentIndex += 1;
        disabledKeys = [...disabledKeys, index];
      }
    }
  
    function checkSolution() {
      const selectedWord = selectedLetters.join('');
      const numSelected = selectedLetters.filter(letter => letter !== "").length;

      if (solutions.includes(selectedWord)) {
        gaveUp = false
        endGame()
      } else if (numSelected != 8) {
        notifications.default('You Must fill in every letter', 1000)
      } else {
        notifications.default('Incorrect', 1000)
      }
    }

    function giveUp() {
      gaveUp = true
      endGame()
    }

    function endGame() {
      showCompleteModal = true
      game_timer.stop();
      logTime(elapsedSeconds)
        .then((result) => {
            globalStats = result;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

  
    function resetBoard() {
      selectedLetters = Array(8).fill("");
      currentIndex = 0
      disabledKeys = []
    }
  
    function shuffleLetters() {
      scrambledLettersBank = scrambleLettersBank(letterBank);
      resetBoard();
    }
  
    function deleteLetter() {
      if (currentIndex > 0) {
        selectedLetters[currentIndex - 1] = "";
        currentIndex -= 1;
        // @ts-ignore
        disabledKeys = disabledKeys.slice(0, -1);
      }
    }

    const share = async () => {
      let shareText = "I completed the LetterLoop in: \n" + "🔴" + elapsedSeconds + "🔴"
      if (gaveUp) {
        shareText = "I didnt complete the LetterLoop today, but I sure did try my best"
      }

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
          notifications.default('Copied Text!', 1000)
        } catch (error) {
          notifications.default('Error', 1000)
        }
      }
    };
    
    function pause_game() {
      game_timer.stop();
      showPauseModal = true;
    }
  
    function resume_game() {
      game_timer.start();
      showPauseModal = false;
    }
  
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
  
    $: isDisabled = (index) => disabledKeys.includes(index);
    $: todays_date = new Date().toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  </script>

  <style>
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
  </style>
  
  <main>
    <div class="nav-flex-container">
      <div class="title-container ">
        <p class="title"><a class="title-link" href="/">LetterLoop</a></p>
        <small style="color: rgb(46, 46, 46);">(public beta) · Edited by {puzzle_author}</small>
      </div>
      <div class="spacer"></div>
      <div class="help-container" on:click={giveUp}>
        <i class="fa-regular fa-face-sad-tear"></i>
        <p class="how-to-play">Give Up</p>
      </div>
      <div class="help-container" on:click={() => showHelpModal = true}>
        <i class="fa-regular fa-circle-question"></i>
        <p class="how-to-play">How to play</p>
      </div>
    </div>
    <div class="divider"></div>
    
  
    <Toast />
  
    <div class="flex-container">
      <div class="timer-container">
        <Timer bind:this={game_timer} bind:elapsedSeconds />
      </div>
    
      <div on:click={pause_game} >
        <i class="fa-solid fa-pause"></i>
      </div>
    </div>
  
    {#if solutions.length > 0}
      <div class="circle-container">
        {#each selectedLetters as letter, index}
          <div
            class="circle"
            class:filled={letter != ""}
            class:shared={sharedLetterIndexes.includes(index)}
            style={`
              left: calc(38% + ${Math.cos(((index / selectedLetters.length) * 2 * Math.PI) - (Math.PI / 2)) * 100}px);
              top: calc(38% + ${Math.sin(((index / selectedLetters.length) * 2 * Math.PI) - (Math.PI / 2)) * 100}px);
          `}
          >
            {letter == "" ? "" : letter}
          </div>
        {/each}
      </div>
  
      <div class="keyboard">
        {#each scrambledLettersBank as letter, index (index)}
          <div
            class="key"
            on:click={() => letterSelected(letter, index)}
            class:disabled={isDisabled(index)}
          >
            {letter}
          </div>
        {/each}
  
        <!-- Function Keys -->
        <div 
          class="key"
          on:click={resetBoard}>
          <i class="fa-solid fa-eraser"></i>
        </div>
        <div 
          class="key"
          on:click={shuffleLetters}>
          <i class="fa-solid fa-shuffle"></i>
        </div>
        <div 
          class="key"
          on:click={deleteLetter}>
          <i class="fa-solid fa-delete-left"></i>
        </div>
  
        <div 
          class="key enter-key"
          on:click={checkSolution}>
          Enter
        </div>
      </div>
    {:else}
      <p>Loading Game...</p>
    {/if}
  
    
  </main>
  
  <svelte:window on:keydown|preventDefault={handleKeyPress} />
  
  <Modal bind:showModal={showCompleteModal} modalType={"end"}>
    {#if gaveUp}
      <p class="large-header">🥺 Gave Up 🥺</p>
    {:else}
      <p class="small-header">Solved in</p>
      <p class="large-header">{elapsedSeconds}</p>
    <hr>
    {/if}
    <span class="small-header">Global Stats</span>
    <br>

    <Stats {globalStats}/>

    <hr>

    <span class="small-header">Solutions</span>
    <p style="height:6px;margin:0;padding;0px;"></p>
    {#if solutions && solutions.length > 2}
      {#each solutions as solution}
        {@html format_solution(solution)}
      {/each}
    {:else}
      {#if solutions && solutions.length > 0}
        {@html format_solution(solutions[0])}
      {:else}
        Loading Solutions...
      {/if}
    {/if}
    <hr>
    {#if gaveUp == false}
      {#if globalStats && globalStats["isHighScore"]}
        <div class="flex-container">
          <span style="font-size:30px;padding-right:5px;">🙀</span>
          <div>
            <p class="small-modal-text">New High Score!</p>
            <p class="small-modal-text">You're officialy the fastest looper today!</p>
          </div>
        </div>
      {:else}
        {#if globalStats && globalStats["isUnderAverage"]}
          <div class="flex-container">
            <span style="font-size:30px;padding-right:5px;">🥇</span>
            <div>
              <p class="small-modal-text">Congratulations speedster.</p>
              <p class="small-modal-text">You're under today's average - very clever.</p>
            </div>
          </div>
        {:else}
          <div class="flex-container">
            <span style="font-size:30px;padding-right:5px;">🥉</span>
            <div>
              <p class="small-modal-text">Oooof.</p>
              <p class="small-modal-text">You're over today's average - try for gold tomorrow</p>
            </div>
          </div>
        {/if}
      {/if}
      <hr>
    {/if}
    
    <div class="flex-container">
      <div class="spacer"></div>
      <button class="share-button" on:click={share}>Share</button>
      <div class="spacer"></div>
    </div>
    <hr>

    <div>
      <a href="https://ko-fi.com/letterloop" target="_blank"><img class="shirt-ad large-screen" src={shirt_ad} alt="LetterLoop Merch" /></a>
      <a href="https://ko-fi.com/letterloop" target="_blank"><img class="shirt-ad mobile-screen" src={shirt_ad_mobile} alt="LetterLoop Merch" /></a>
    </div>
  </Modal>
  
  <Modal bind:showModal={showHelpModal} modalType={"help"}>
    <h2 slot="header">
      <span class="styled-header">How To Play</span>
    </h2>
    <hr />
    <Help />
  </Modal>
  
  
  <Modal bind:showModal={showPauseModal} hide_close={true} modalType={"pause"}>
    <h2 slot="header">
      <span class="styled-header">Paused</span>
    </h2>
    <hr />
    
    <div class="flex-container">
      <div class="spacer"></div>
      <button class="share-button" on:click={resume_game}>Resume</button>
      <div class="spacer"></div>
    </div>
  </Modal>
  