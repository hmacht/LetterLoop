<script>
	import Menu from '../components/menu/Menu.svelte';
	import GameBoard from "../components/gameboard/GameBoard.svelte";
	import GameOver from "../components/gameover/GameOver.svelte";

	let showGameBoard = false;
	let gameOver = false;

</script>

<style>
	
</style>

<main>
	{#if showGameBoard}
		{#if gameOver}
			<GameOver />
		{:else}
			<GameBoard bind:gameOver={gameOver}/>
		{/if}
  {:else}
		<Menu bind:showGameBoard={showGameBoard} />
  {/if}
</main>
