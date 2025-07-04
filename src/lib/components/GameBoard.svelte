<script lang="ts">
  import { onMount } from 'svelte';

  import Modal from '$lib/components/Modal.svelte';
  import Toast from '$lib/components/Toast.svelte';
  import Timer from '$lib/components/Timer.svelte';
  import Help from '$lib/components/Help.svelte';

  import { updateProfileStats, createTodaysGameData } from "$lib/repos/profileRepo"
  import { logTime } from '$lib/repos/globalStatsRepo';
  import { getTodaysSolution } from "$lib/repos/solutionRepo"
  
  import { notifications } from "$lib/utils/notifications";
  import { today } from "$lib/utils/timeFormatter"
  import { gameData } from '$lib/stores/gameStore';

  import type { GameData } from '$lib/models/gameData';

  import Typo from 'typo-js';
  import Device from 'svelte-device-info'

  export let gameOver;
  export let showAd;

  let showHelpModal = false;
  let showPauseModal = false;
  let solutions: string[] = [];
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
  let gaveUp = false;
  let loadStatus = "Loading Game..."
  let dictionary;

  onMount(async () => {
    loadDictionary()
    await fireUpGameBoard();
  });

  async function fireUpGameBoard() {
    try {
      await loadPuzzle() 
      game_timer.start();
    } catch (error) {
      loadStatus = "Error Loading Game :("
      console.error('Error fetching data from Firebase:', error);
    }
  }

  function loadDictionary() {
    dictionary = new Typo("en_US", false, false, { dictionaryPath: "/dictionaries" });
  }

  async function loadPuzzle() {
    // Fetch Solutions
    const data = await getTodaysSolution();

    // Set Solutions
    if (data && data.solutions && data.solutions.length > 0) {
      puzzle_author = data.author;
      solutions = data.solutions;
    } else {
      throw new Error("Invalid data");
    }

    // Create letter bank
    letterBank = solutions[0]
    scrambledLettersBank = scrambleLettersBank(letterBank)
  }
  
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
    const solution = selectedLetters.join('');

    if (isCorrectSolution(solution)) {
      gaveUp = false
      endGame()
    } else {
      notifications.default('Incorrect', 1000)
    }
  }

  function isCorrectSolution(solution) {
    if (solution.length != 8) {
      notifications.default('You Must fill in every letter', 1000);
      return false;
    }

    console.log("Checking")

    if (solutions.includes(solution)) {
      return true;
    } else {
      // Spell Check Words
      const word1 = solution.slice(0, 5);
      const word2 = solution.slice(-4) + solution.slice(0, 1);

      return dictionary.check(word1) && dictionary.check(word2);
    }
  }

  function giveUp() {
    gaveUp = true
    endGame()
  }

  function endGame() {
    game_timer.stop();
    logTime(elapsedSeconds)
      .then((globalStats) => {
        gameData.update(data => ({
          ...data,
          elapsedSeconds,
          solutions,
          gaveUp,
          globalStats
        }));

        saveGameTime()
        updateProfileStats(elapsedSeconds, gaveUp);

        showAd = true;
        gameOver = true;
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }

  function saveGameTime() {
    const gameData: GameData = {
      elapsedSeconds: elapsedSeconds,
      gaveUp: gaveUp,
      completed: true,
      completedAt: new Date(),
      solutions: solutions
    }

    // Save in database
    createTodaysGameData(gameData);

    // Save in local cookie
    localStorage.setItem('gameTimeV2', JSON.stringify({ 
      elapsedSeconds: elapsedSeconds, 
      date: today(),
      gaveUp: gaveUp,
      solutions: solutions
    }));
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
  
  function pause_game() {
    game_timer.stop();
    showPauseModal = true;
  }

  function resume_game() {
    game_timer.start();
    showPauseModal = false;
  }

  function refreshPage() {
    location.reload();
  }

  $: isDisabled = (index) => disabledKeys.includes(index);
  $: todays_date = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
</script>
  
<main>
  <div class="nav-flex-container">
    <div class="title-container">
      <div class="logo-container" on:click={refreshPage}>
        <p class="title">LetterLoop</p>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="help-container" on:click={giveUp}>
      <i class="fa-regular fa-face-sad-tear"></i>
      {#if !Device.isMobile}
        <p class="how-to-play">Give Up</p>
      {/if}
    </div>
    <div class="help-container" on:click={() => showHelpModal = true}>
      {#if !Device.isMobile}
        <i class="fa-regular fa-circle-question"></i>
        <p class="how-to-play">How to play</p>
      {:else}
        <i class="fa-regular fa-circle-question" style="padding-right: 1rem;"></i>
      {/if}
    </div>
  </div>
  <div class="divider"></div>
  
  <Toast />

  <div class="centered-container full-height-container">
    <div class="flex-container">
      <div class="timer-container">
        <Timer bind:this={game_timer} bind:elapsedSeconds />
      </div>
    
      <div on:click={pause_game} >
        <i class="fa-solid fa-pause"></i>
      </div>
    </div>

    {#if solutions.length > 0}
      <div class="circle-container mb-5 mt-5">
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
      <p>{loadStatus}</p>
    {/if}

    <br>
    <small style="color: rgb(46, 46, 46);">Edited by {puzzle_author}</small>
    <small style="color: rgb(46, 46, 46);">{todays_date}</small>
  </div>
</main>

<svelte:window on:keydown|preventDefault={handleKeyPress} />

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
  
