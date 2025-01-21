<script>
	import { onMount } from "svelte";

	import Menu from '$lib/components/Menu.svelte';
	import GameBoard from "$lib/components/GameBoard.svelte";
	import GameOver from "$lib/components/GameOver.svelte";
	import PromoBanner from "$lib/components/PromoBanner.svelte";
	import FullPageAd from "$lib/components/FullPageAd.svelte";

	import { today } from "$lib/utils/timeFormatter"
	import { gameData } from '$lib/stores/gameStore.js';

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
