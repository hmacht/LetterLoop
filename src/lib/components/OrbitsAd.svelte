<style>
  .orbits-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    border: 1px solid #D7D7D7;
    background-color: white;
    border-radius: 30px;
    margin: 1rem auto 0 auto;
    cursor: pointer;
  }

  .orbits-link {
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
    color: #6791D9
  }
</style>

<a href="https://www.playorbits.com" target="_blank" class="orbits-link">
  <div class="orbits-container">
    <img 
      class="logo"
      src="https://www.playorbits.com/banner.svg"
      alt="orbits_logo" 
    />

    <div class="text-container">
      <p class="header">Check out Orbits!</p>
      <p class="subtitle">A daily, circular word game.</p>
    </div>

    <div style="flex: 1;"></div>
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
  </div>
</a>
