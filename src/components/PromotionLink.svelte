<script lang="ts">
  import kickstarterLogo from '$lib/images/Ko-fi_HEART.gif';
</script>

<style>
  .kickstarter-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5em;
    border: 1px solid #034752;
    background-color: #09CE78;
    border-radius: 30px;
    margin: 1rem auto 0 auto;
    cursor: pointer;
  }

  .kickstarter-link {
    text-decoration: none;
    color: inherit;
  }

  .text-container {
    text-align: left;
    padding-left: 1.2rem;
  }
  .header {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    color: black;
  }
  .subtitle {
    font-size: 14px;
    color: #666;
    margin: 0;
    color: black;
    max-width: 200px;
  }
  .logo {
    padding-left: 0.6rem;
    width: 100px;
  }

  .fa-arrow-up-right-from-square {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 15px;
    padding: 15px 20px 0 0; 
    color: #ffffff
  }

  .kickstarter-logo {
    width: 70px;
  }
</style>

<a href="https://ko-fi.com/letterloop" target="_blank" class="kickstarter-link">
  <div class="kickstarter-container">
    <img src={kickstarterLogo} class="kickstarter-logo"alt="Kickstarter Logo" />

    <div class="text-container">
      <p class="header">Buy me a cup of coffee.</p>
      <p class="subtitle">Click here to donate on ko-fi! $1 helps to keep us looping!</p>
    </div>

    <div style="flex: 1;"></div>
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
  </div>
</a>
