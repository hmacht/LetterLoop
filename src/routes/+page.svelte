<script>
	import Modal from './Modal.svelte';
	import ex_solution from '$lib/images/ex-solution.png';
	import ex_letter_box from '$lib/images/ex-letter-box.png';
	import { notifications } from "./notifications.js";
	import Toast from './Toast.svelte';
	import { onMount } from 'svelte';
	import { firebaseApp } from './firebaseConfig';
	import { fetchFirebaseData } from './firebaseFetchData.js';
	import { getAnalytics } from "firebase/analytics";

	let showCompleteModal = false;
  let showHelpModal = false;
	let solutions = [];
	solutions = solutions.map(solution => solution.toLowerCase());
  let letterBank;
	let selectedLetters = Array(8).fill("");
	// @ts-ignore
	let disabledKeys = [];
  let scrambledLettersBank;
	let currentIndex = 0
	let sharedLetterIndexes = [0, 4]
	let showModal = false;
	let attempts = 1;

  onMount(async () => {
		const analytics = getAnalytics(firebaseApp);
		const currentDatetime = new Date();
		// Format the date as a string in "MM-DD-YYYY" format
		const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
		const formattedDate = currentDatetime.toLocaleDateString('en-US', options).replace(/\//g, '-');
		console.log('solutions/' + formattedDate)

    try {
      const dataFromFirebase = await fetchFirebaseData('solutions/' + formattedDate);
			const parsedData = Object.values(dataFromFirebase);
      solutions = parsedData
			letterBank = solutions[0]
			scrambledLettersBank = scrambleLettersBank(letterBank)

			console.log('solutions:', solutions);
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
    }
  });
	


	// @ts-ignore
	function handleKeyPress(event) {
    const keyPressed = event.key.toLowerCase();
    const index = scrambledLettersBank.indexOf(keyPressed);

		if (event.keyCode === 13) {
			checkSolution()
		} else if (event.keyCode === 8) {
			deleteLetter()
		} else if (index !== -1 && !isDisabled(index)) {
      letterSelected(keyPressed, index);
    }
		
  }

  // @ts-ignore
  function scrambleLettersBank(letterBank) {
    const scrambledArray = letterBank.split('').sort(() => Math.random() - 0.5);
    return scrambledArray.join('');
  }

	// @ts-ignore
	function letterSelected(letter, index) {		
		 if (
      currentIndex < selectedLetters.length &&
      !isDisabled(index)
    ) {
      selectedLetters[currentIndex] = letter;
      currentIndex += 1;
			// @ts-ignore
      disabledKeys = [...disabledKeys, index];
    }
  }

	function checkSolution() {
		const selectedWord = selectedLetters.join('');
		if (solutions.includes(selectedWord)) {
			showCompleteModal = true
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

		// Build Emoji
		let emojiString = "";
    for (let i = 0; i < attempts; i++) {
      emojiString += "🔴";
    }

		let textToCopy = "Completed the LetterLoop in " + attempts + " attempts \n" + emojiString
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

	// @ts-ignore
	$: isDisabled = (index) => disabledKeys.includes(index);
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
		margin-top: 20px;;
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
    grid-template-columns: repeat(4, 50px);
    grid-gap: 20px;
		margin-top: 40px;
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
		margin: 10px;
		font-family: "Playfair Display", serif;
		font-optical-sizing: auto;
		font-weight: 500;
		font-style: normal;
		color: black;
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

	.flex-container {
    display: flex;
    align-items: center;
  }
  .spacer {
    flex-grow: 1;
  }
</style>

<main>
	<div class="flex-container">
		<h1 class="title">LetterLoop</h1>
		<small>(public beta)</small>
	</div>
	<div class="divider"></div>
	<div class="help-container" on:click={() => showHelpModal = true}>
    <i class="fa-regular fa-circle-question"></i>
    <p class="how-to-play">How to play</p>
	</div>

	<Toast />

	{#if solutions.length > 0}
		<div class="circle-container">
			{#each selectedLetters as letter, index}
				<div
					class="circle"
					class:filled={letter != ""}
					class:shared={sharedLetterIndexes.includes(index)}
					style={`
						left: calc(40% + ${Math.cos(((index / selectedLetters.length) * 2 * Math.PI) - (Math.PI / 2)) * 100}px);
						top: calc(37% + ${Math.sin(((index / selectedLetters.length) * 2 * Math.PI) - (Math.PI / 2)) * 100}px);
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

<Modal bind:showModal={showCompleteModal}>
	<div slot="header">
		<b>Congratulations!</b>
		<br>
		Share your results with your friends.
	</div>
	<h3>You Solved the circle in {attempts} attempts</h3>
	<p>Fantastic Job!</p>
	<br>
	
	<div class="flex-container">
		<div class="spacer"></div>
		<button class="share-button" on:click={share}>Share</button>
		<div class="spacer"></div>
	</div>
</Modal>

<Modal bind:showModal={showHelpModal}>
	<h2 slot="header">
    <b>How To Play</b>
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
