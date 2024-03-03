<script>
	// @ts-nocheck
	import GameBoard from "./GameBoard.svelte";
	import Menu from "./Menu.svelte";

	let gameHasStarted = false

</script>


<main>
	{#if gameHasStarted}
		<GameBoard/>
	{:else}
		<Menu bind:gameHasStarted={gameHasStarted}/>
	{/if}
</main>