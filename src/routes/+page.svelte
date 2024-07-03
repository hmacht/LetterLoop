<script>
	import Menu from '../components/menu/Menu.svelte';
	import GameBoard from "../components/gameboard/GameBoard.svelte";
	import GameOver from "../components/gameover/GameOver.svelte";
	import PromoBanner from "../components/promoBanner/PromoBanner.svelte";

	import { gameData } from '../js/gameStore.js';
	import { onMount } from "svelte";

	let showGameBoard = false;
	let gameOver = false;
	let completedTodaysLoop = false;

	onMount(() => {
		getSavedGameTime()
	});

	function getSavedGameTime() {
		const savedData = JSON.parse(localStorage.getItem('gameTimeV2'));
		if (savedData) {
				const today = new Date().toISOString().split('T')[0];
				if (savedData.date === today) {
					gameData.update(data => ({
						...data,
						elapsedSeconds: savedData.elapsedSeconds,
						solutions: savedData.solutions,
						gaveUp: savedData.gaveUp,
					}));

					completedTodaysLoop = true
				}
		}
	}

</script>


<main>
	<PromoBanner />
	{#if completedTodaysLoop}
		<GameOver {completedTodaysLoop}/>
	{:else}
		{#if showGameBoard}
			{#if gameOver}
				<GameOver />
			{:else}
				<GameBoard bind:gameOver={gameOver}/>
			{/if}
		{:else}
			<Menu bind:showGameBoard={showGameBoard} />
		{/if}
	{/if}
</main>
