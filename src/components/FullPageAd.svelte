<script>
  export let showAd;

  function skipAd() {
    showAd = false;
  }
</script>

<style>
  .main-container {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .ad-container {
    text-align: center;
    margin-top: 1rem;
  }

  .skip-btn {
    padding: 10px 15px 10px 15px;
    background-color: lightgray;
    border: 1.5px solid gray;
    border-radius: 10px;
    width: 300px;
    margin-top: 2rem;
  }

  .skip-btn:hover {
    cursor: pointer;
  }
</style>

<div class="main-container">
  <div class="ad-container">
    <div id='theletterloop-com_300x600'>
      <script type='text/javascript'>
        aiptag.cmd.display.push(function() { aipDisplayTag.display('theletterloop-com_300x600'); });
      </script>
    </div>
    
    <button class="skip-btn" on:click={skipAd}>Skip & View Stats</button>
  </div>
</div>