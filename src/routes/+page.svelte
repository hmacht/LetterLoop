<script>
	import Menu from '../components/menu/Menu.svelte';
	import GameBoard from "../components/gameboard/GameBoard.svelte";
	import GameOver from "../components/gameover/GameOver.svelte";
	import PromoBanner from "../components/promoBanner/PromoBanner.svelte";
	import FullPageAd from "../components/FullPageAd.svelte";
	import { today } from "../js/timeFormatter"

	import { gameData } from '../js/gameStore.js';
	import { onMount } from "svelte";

	let showGameBoard = false;
	let gameOver = false;
	let completedTodaysLoop = false;
	let showAd = false;

	onMount(() => {
		getSavedGameTime()
	});

	function getSavedGameTime() {
		const savedData = JSON.parse(localStorage.getItem('gameTimeV2'));
		if (savedData) {
			if (savedData.date === today()) {
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
	{#if showAd}
		<FullPageAd bind:showAd={showAd} />
	{:else}
		{#if completedTodaysLoop}
			<GameOver {completedTodaysLoop}/>
		{:else}
			{#if showGameBoard}
				{#if gameOver}
					<GameOver />
				{:else}
					<GameBoard bind:gameOver={gameOver} bind:showAd={showAd}/>
				{/if}
			{:else}
				<Menu bind:showGameBoard={showGameBoard} />
			{/if}
		{/if}
	{/if}
</main>
