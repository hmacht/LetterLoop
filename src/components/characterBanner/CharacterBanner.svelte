<script>
  export let backgroundColor = "#ffffff";
  export let borderColor = "#000000";
  export let characterName = "";
  export let characterSize = "";
  export let headerText = "Header Text";
  export let subtitle = "Subtitle Text";

  let characterImagePath = `src/lib/images/character-${characterName}.png`
  const imageStyle = `width: ${characterSize}px`

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
  }
</style>

<div
  class="banner"
  style="--background-color: {backgroundColor}; --border-color: {borderColor};"
>
  {#if characterImagePath}
    <img 
      class="characterImg" 
      style="{imageStyle}" 
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