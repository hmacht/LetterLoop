<script>
	let solutions = ["musichar", "charmusi"];
  let letterBank = solutions[0];
	let selectedLetters = Array(8).fill("");
	let disabledKeys = [];
  let scrambledLettersBank = scrambleLettersBank(letterBank);
	let currentIndex = 0
	let sharedLetterIndexes = [0, 4]

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
			checkSolution()
    }
  }

	function checkSolution() {
		if (currentIndex == selectedLetters.length) {
			const selectedWord = selectedLetters.join('');
			if (solutions.includes(selectedWord)) {
				alert("Congratulations! You've solved the puzzle!");
				// Add any other actions or logic you want for a correct solution
			} else {
				alert("Incorrect solution. Try again!");
				// Add any other actions or logic you want for an incorrect solution
			}
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
      disabledKeys = disabledKeys.slice(0, -1);
    }
	}

	$: isDisabled = (index) => disabledKeys.includes(index);
</script>


<style>
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
		margin-top: 5%;
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

  .disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
</style>

<main>
	<a class="how-to-play" href="/circlepuzzle/how-to-play">How to play</a>

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
  </div>
</main>
