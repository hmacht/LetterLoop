<script>
  import { onMount } from 'svelte';
  import characterFlower from '$lib/images/character-flower.png';
  import characterBattery from '$lib/images/character-battery.png';
  import characterHourglass from '$lib/images/character-hourglass.png';
  import characterStar from '$lib/images/character-star.png';
  import characterCoffee from '$lib/images/character-coffee.png';


  export let backgroundColor = "#ffffff";
  export let borderColor = "#000000";
  export let characterName = "";
  export let characterSize = "";
  export let headerText = "Header Text";
  export let subtitle = "Subtitle Text";

  let characterImagePath;

  onMount(() => {
    setImage() 
  });


  function setImage() {
    switch (characterName) {
    case 'flower':
      characterImagePath = characterFlower;
      break;
    case 'battery':
      characterImagePath = characterBattery;
      break;
    case 'hourglass':
      characterImagePath = characterHourglass;
      break;
    case 'star':
      characterImagePath = characterStar;
      break;
    case 'coffee':
      characterImagePath = characterCoffee;
      break;
    default:
      characterImagePath = characterStar;
  }
  }

</script>

<style>
  .banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    border: 1px solid var(--border-color);
    background-color: var(--background-color);
    max-height: 100px;
    max-width: 350px;
    border-radius: 30px;
    margin: 1.5rem auto 0 auto;
  }
  .text-container {
    text-align: left;
    padding-left: 2rem;
  }
  .header {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    color: black;
  }
  .subtitle {
    font-size: 13px;
    color: #666;
    margin: 0;
    color: black;
  }
  .characterImg {
    padding-left: 1rem;
    width: var(--character-size);
  }
</style>

<div
  class="banner"
  style="--background-color: {backgroundColor}; --border-color: {borderColor};"
>
  {#if characterImagePath}
    <img 
      class="characterImg"
      style="--character-size: {characterSize};" 
      src={characterImagePath} 
      alt="img" 
    />
  {/if}

  <div class="text-container">
    <p class="header">{headerText}</p>
    <p class="subtitle">{subtitle}</p>
  </div>

  <div style="flex: 1;"></div>
</div>