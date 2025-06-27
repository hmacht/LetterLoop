<script lang="ts">
	import { onMount, onDestroy } from "svelte";

	import Menu from '$lib/components/Menu.svelte';
	import GameBoard from "$lib/components/GameBoard.svelte";
	import GameOver from "$lib/components/GameOver.svelte";
	import PromoBanner from "$lib/components/PromoBanner.svelte";
	import FullPageAd from "$lib/components/FullPageAd.svelte";
	import NavBar from "$lib/components/NavBar.svelte";
	import Footer from "$lib/components/Footer.svelte";

	import { today } from "$lib/utils/timeFormatter"
	import { gameData } from '$lib/stores/gameStore.js';
	import { getTodaysGameData } from "$lib/repos/profileRepo";
	import type { GameData } from "$lib/models/gameData";
	import { session } from "$lib/session.js";
	import { get } from "svelte/store";
	import { hideNav } from '$lib/stores/layoutUIStore';

	let showGameBoard = false;
	let gameOver = false;
	let completedTodaysLoop = false;
	let showAd = false;
	let s = get(session)
	let userId = s.user?.uid ?? null

	$: hideNav.set((showGameBoard && !gameOver) || showAd);

	onMount(async () => {
		await getSavedGameDate()
	});

	onDestroy(() => {
		hideNav.set(false);
	})

	async function getSavedGameDate() {
    const userSavedData = await getTodaysGameData(userId);
    const sessionSavedData = JSON.parse(localStorage.getItem('gameTimeV2'));

    const updateData = userSavedData || (sessionSavedData?.date === today() ? sessionSavedData : null);

    if (updateData) {
        gameData.update(data => ({
            ...data,
            elapsedSeconds: updateData.elapsedSeconds,
            solutions: updateData.solutions,
            gaveUp: updateData.gaveUp,
        }));

        completedTodaysLoop = true;
    }
	}
</script>


<main>
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
				<main class="flex-grow">
					<Menu bind:showGameBoard={showGameBoard} />
				</main>
			{/if}
		{/if}
	{/if}
</main>
