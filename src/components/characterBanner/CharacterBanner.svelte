<script>
  export let backgroundColor = "#ffffff";
  export let borderColor = "#000000";
  export let characterName = "";
  export let headerText = "Header Text";
  export let subtitle = "Subtitle Text";

  let characterImagePath = `src/lib/images/character-${characterName}.png`
</script>

<style>
  .banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    border: 1px solid var(--border-color);
    background-color: var(--background-color);
    border-radius: 10px;
  }
  .banner {
    max-height: 100px;
    max-width: 350px;
    border-radius: 30px;
    margin-right: 1em;
    margin: 1.5rem auto 0 auto;
  }
  .text-container {
    text-align: left;
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
    width: 80px;
  }
</style>

<div
  class="banner"
  style="--background-color: {backgroundColor}; --border-color: {borderColor};"
>
  {#if characterImagePath}
    <img class="characterImg" src={characterImagePath} alt="img" />
  {/if}
  <div style="flex: 1;"></div>
  <div class="text-container">
    <p class="header">{headerText}</p>
    <p class="subtitle">{subtitle}</p>
  </div>
  <div style="flex: 1;"></div>
</div>