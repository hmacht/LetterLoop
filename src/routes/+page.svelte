<script>
// @ts-nocheck

	import Modal from './Modal.svelte';
	import ex_solution from '$lib/images/ex-solution.png';
	import ex_letter_box from '$lib/images/ex-letter-box.png';
	import { notifications } from "./notifications.js";
	import Toast from './Toast.svelte';
	import { onMount } from 'svelte';
	import { firebaseApp, signIn } from './firebaseConfig';
	import { fetchFirebaseData } from './firebaseFetchData.js';
	import { logTime } from './logCompletionTime.js';
	import { getAnalytics, logEvent } from "firebase/analytics";
	import Timer from './Timer.svelte';
	import { Confetti } from 'svelte-confetti'

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
	let showModal = false;
	let attempts = 1;
	let game_timer;
	let elapsedSeconds = 0;
	let puzzle_author = "---";


  onMount(async () => {
		const analytics = getAnalytics(firebaseApp);
		logEvent(analytics, 'screen_view', {
			firebase_screen: "game_board_view",
			firebase_screen_class: "game_board_controller"
		});
		const currentDatetime = new Date();
		// Format the date as a string in "MM-DD-YYYY" format
		const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
		const formattedDate = currentDatetime.toLocaleDateString('en-US', options).replace(/\//g, '-');

    try {
			await signIn()
      const dataFromFirebase = await fetchFirebaseData('solutions/' + formattedDate);
			const parsedData = Object.values(dataFromFirebase);
			puzzle_author = parsedData[0]
      solutions = parsedData[1]
			letterBank = solutions[0]
			scrambledLettersBank = scrambleLettersBank(letterBank)
			game_timer.start();
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
		if (solutions.includes(selectedWord)) {
			showCompleteModal = true
			game_timer.stop();
			logTime(elapsedSeconds)
		} else {
			notifications.default('Incorrect', 1000)
			attempts += 1
		}
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

	function share() {
		let textToCopy = "I completed the LetterLoop in: \n" + "🔴" + elapsedSeconds + "🔴"
		navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text successfully copied to clipboard:', textToCopy);
				notifications.default('Copied Text!', 1000)
      })
      .catch((err) => {
        console.error('Error copying text to clipboard:', err);
				notifications.default('Error', 1000)
      });
	}
	
	function pause_game() {
		game_timer.stop();
		showPauseModal = true;
	}

	function resume_game() {
		game_timer.start();
		showPauseModal = false;
	}

	function format_solution(solution) {
		const firstPart = solution.substring(0, 5);
    const lastPart = solution.substring(4, 8) + firstPart[0];

    return `${firstPart} + ${lastPart}`;
	}

	$: isDisabled = (index) => disabledKeys.includes(index);
	$: todays_date = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
</script>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }

  .circle-container {
		position: relative;
		width: 200px;
		height: 200px;
		padding: 40px;
	}

	.circle {
		position: absolute;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: transparent;
		border: 2px solid #EBEBEB;
		display: flex;
		align-items: center;
		justify-content: center;
		text-transform: uppercase;
		font-size: 25px;
		font-weight: 600;
	}

  .filled {
    background-color: #F0EBEB;
    color: rgb(0, 0, 0);
		border: none;
  }

	.shared {
		background-color: #ec2525;
    color: white;
		border: none;
	}

  .keyboard {
    display: grid;
    grid-template-columns: repeat(4, 60px);
    grid-gap: 12px;
		margin-top: 35px;
  }

  .key {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #F0EBEB;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
		text-transform: uppercase;
		font-size: 25px;
		font-weight: 600;
  }

	.enter-key {
		font-size: 12px;
		background-color: transparent !important;
		border: 2px solid #EBEBEB;
	}

  .disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

	.help-container {
    display: flex;
    align-items: center;
    color: #333; /* Dark gray background color */
    padding: 10px; /* Adjust padding as needed */
	}

	.how-to-play {
		color: #333;
		padding: 5px;
	}

	.how-to-play:hover {
		text-decoration: underline;
		cursor: pointer;
	}

	.divider {
		height: 1.5px;
		width: 100vw;
		background-color: #333;
		opacity: 0.1;
	}

	.title {
		margin: 0;
		font-family: "Playfair Display", serif;
		font-optical-sizing: auto;
		font-size: 28px;;
		font-weight: 700;
		font-style: normal;
		color: black;
	}

	.date {
		margin: 0;
		font-optical-sizing: auto;
		font-size: 12px;;
		font-weight: 100;
		font-style: normal;
		color: rgb(46, 46, 46);
		padding: 15px;
	}

	.share-button {
		background-color: #ec2525;
		color: white;
		border-radius: 25px;
		width: 150px;
		height: 50px;
		border: none;
		margin: 10px;
	}

	.nav-flex-container {
    display: flex;
    align-items: center;
		justify-content: space-between;
		width: 100vw;
		height: 80px;
  }
	.flex-container {
    display: flex;
    align-items: center;
  }
  .spacer {
    flex-grow: 1;
  }
	.timer-container {
		padding: 10px;;
	}
	.title-container{
		margin: 10px;
		margin-left: 20px;
		margin-top: 0;
	}
	.styled-header {
		font-family: "Playfair Display", serif;
		font-optical-sizing: auto;
		font-size: 20px;;
		font-weight: 700;
	}
	.sub-header {
		font-optical-sizing: auto;
		font-size: 15px;;
		font-weight: 700;
	}
	
</style>

<main>
	<div class="nav-flex-container">
		<div class="title-container ">
			<p class="title">LetterLoop</p>	
			<small style="color: rgb(46, 46, 46);">(public beta) · Edited by {puzzle_author}</small>
		</div>
		<div class="spacer"></div>
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

		<p class="date">Puzzle for {todays_date}</p>
  {:else}
    <p>Loading Game...</p>
  {/if}

  
</main>

<svelte:window on:keydown|preventDefault={handleKeyPress} />

<Modal bind:showModal={showCompleteModal}>
	<div slot="header">
		<span class="styled-header">Congratulations!</span>
		<br>
		Share your results with your friends.
	</div>
	<span class="sub-header">Solved in {elapsedSeconds}</span>
	<hr>
	<span class="sub-header">Other Possible Solutions</span>
	{#each solutions as solution}
		<div class="solution">
			{format_solution(solution)}
		</div>
	{/each}
	<br>
	
	<div class="flex-container">
		<div class="spacer"></div>
		<button class="share-button" on:click={share}>Share</button>
		<div class="spacer"></div>
	</div>
</Modal>

<Modal bind:showModal={showHelpModal}>
	<h2 slot="header">
		<span class="styled-header">How To Play</span>
	</h2>
	<h3>Find the 8-letter circle word</h3>
	<ul class="definition-list">
			<li>There are 2 words to find.</li>
			<li>Letters may only be used once and have to be in the letter bank.</li>
			<li>The red circles are shared letters between the two words.</li>
	</ul>
	<h3>Example</h3>
	<p>If we had these letters:</p>
	<img src={ex_letter_box} alt="Welcome" style="width: 350px; height: auto;" />
	<p>
			We could spell the words 
			<b>
					<span style="color: red;">M</span>USI<span style="color: red;">C</span>
			</b> 
			and 
			<b>
					<span style="color: red;">C</span>HAR<span style="color: red;">M</span>
			</b>. 
	</p>
	<p>Notice how these words share an <b><span style="color: red;">M</span></b> and a <b><span style="color: red;">C</span></b>.</p>
	<p>One correct solution:</p>
	<img src={ex_solution} alt="Welcome" style="width: 150px; height: auto;" />
	<p>Remember there can be more than one solution.</p>
</Modal>


<Modal bind:showModal={showPauseModal} hide_close={true}>
	<h2 slot="header">
		<span class="styled-header">Paused</span>
	</h2>
	
	<div class="flex-container">
		<div class="spacer"></div>
		<button class="share-button" on:click={resume_game}>Resume</button>
		<div class="spacer"></div>
	</div>
</Modal>
