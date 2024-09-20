<script>
    import Stats from '../stats/Stats.svelte';
    import { notifications } from "../../js/notifications.js";
    import CharacterBanner from '../characterBanner/CharacterBanner.svelte';
    import navImage from '$lib/images/logo-black.png';
    import Toast from '../toast/Toast.svelte';
    import OrbitsAd from '../OrbitsAd.svelte';
    import PromotionLink from '../PromotionLink.svelte';
    import { gameData } from '../../js/gameStore.js';
    import { onMount } from "svelte";
    import { getUserStats } from "../../js/manageUserStats"
    import { secondsFormatted } from "../../js/timeFormatter"

    var elapsedSeconds = "-----"
    var gaveUp = false
    var solutions = []
    var globalStats = "";
    var userStats;
    var streakEmoji = "";

    export let completedTodaysLoop = false;

    onMount(() => {
      loadAd();
      retrieveGameDate();
      setUserStatus();
      setStreakEmoji();
    });

    function loadAd() {
      window.aiptag.cmd.display.push(function() { window.aipDisplayTag.display('theletterloop-com_300x50'); });
    }

    function retrieveGameDate() {
      return gameData.subscribe(value => {
        elapsedSeconds = value.elapsedSeconds;
        solutions = value.solutions;
        gaveUp = value.gaveUp;
        globalStats = value.globalStats;
      });
    }

    function setUserStatus() {
      userStats = getUserStats();
    }

    function setStreakEmoji() {
      let streak = Number(userStats.streak);
      if (!streak) return;

      const conditions = [
        { threshold: 365, emoji: "🙀" },
        { threshold: 30, emoji: "🕺" },
        { threshold: 14, emoji: "❤️‍🔥" },
        { threshold: 7, emoji: "🔥" },
        { threshold: 3, emoji: "✨" }
      ];

      for (const condition of conditions) {
        if (streak >= condition.threshold) {
          streakEmoji = condition.emoji;
          break;
        }
      }
    }

    const share = async () => {
      let shareText = "I completed the LetterLoop in: \n" + "🔴" + elapsedSeconds + "🔴"
      if (gaveUp) {
        shareText = "I didnt complete the LetterLoop today, but I sure did try my best"
      }
      
      if (navigator.share) {
        try {
          await navigator.share({
            title: "",
            text: shareText,
            url: window.location.href
          });
        } catch (error) {
          notifications.default('Error', 1000)
        }
      } else {
        try {
          await navigator.clipboard.writeText(shareText);
          notifications.default('Copied Link!', 1000)
        } catch (error) {
          notifications.default('Error', 1000)
        }
      }
    };
  
    function format_solution(solution) {
      if (!solution) {
        return "Loading Solutions...";
      }
      
      const firstPart = solution.substring(0, 5);
      const lastPart = solution.substring(4, 8) + firstPart[0];
    
      const htmlString = `
        (<a href="https://www.merriam-webster.com/dictionary/${firstPart}" target="blank">${firstPart}</a> 
        + 
        <a href="https://www.merriam-webster.com/dictionary/${lastPart}" target="blank">${lastPart}</a>)
      `;
    
      return htmlString;
    }

    function refreshPage() {
      location.reload();
    }

  </script>
    
  <style>
    main {
      background-color: #FFE9E9!important;
      width: 100vw;
      height: min-content;
    }

    .gameover-container {
      max-width: 400px;
      width: 85%;
    }

    .panel-section {
      margin-bottom: 1rem;
    }

    .panel-section p {
      margin: 5px 0 0 0;
    }

    .time-text {
      font-size: 40px;
      font-weight: 700;
      margin: 4px 0 0 0;
      text-align: left;
    }

    .stats-text {
      font-size: 25px;
      font-weight: 700;
      margin: 4px 0 0 0;
      text-align: left;
    }

    .stats-conatiner {
      display: flex;
      gap: 20px;
    }

    .disclaimer {
      font-size: 10px;
      color: #bbbbbb;
      margin-bottom: 0;
    }

    .share-button {
      background-image: -webkit-linear-gradient(top, #FF4F87, #FC2F4F);
		  background-image: linear-gradient(to bottom, #FF4F87, #FC2F4F);
      color: white;
      border-radius: 20px;
      width: 100%;
      height: 70px;
      border: none;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
    }
  </style>
  
  <main>
    <div class="nav-flex-container-filled">
      <div class="title-container">
        <div class="logo-container">
          <p class="title">LetterLoop</p>
        </div>
      </div>
      <div class="spacer"></div>
      <a class="help-container" href="https://www.reddit.com/r/letterloop/" target="_blank">
        <i class="fa-brands fa-reddit"></i>
        <p class="how-to-play">Join The Converation</p>
      </a>
    </div>
    <div class="divider"></div>

    <Toast />

    <div id='theletterloop-com_300x50'>
      <!-- JS Ad Injection -->
    </div>

    <div class="gameover-container">
      {#if completedTodaysLoop}
        <CharacterBanner
          backgroundColor="#E4E5F2"
          borderColor="#888AAF"
          characterName="coffee"
          characterSize="68px"
          headerText="Welcome back looper!"
          subtitle="Dont forget to share your time."
        />
      {:else}
        {#if gaveUp == false}
          {#if globalStats && globalStats["isUnderAverage"]}
            <CharacterBanner
              backgroundColor="#FFF9E3"
              borderColor="#FFAE5D"
              characterName="star"
              characterSize="60px"
              headerText="Congratulations speedster."
              subtitle="You're under today's average!"
            />
          {:else}
            <CharacterBanner
              backgroundColor="#EEECEC"
              borderColor="#B4B4B4"
              characterName="hourglass"
              characterSize="60px"
              headerText="Not your fastest."
              subtitle="You're over today's average."
            />
          {/if}
        {:else}
          <CharacterBanner
            backgroundColor="#FFD8DD"
            borderColor="#DF5468"
            characterName="battery"
            characterSize="60px"
            headerText="Oh no, you gave up."
            subtitle="Try to get it tomorrow!"
          />
        {/if}
      {/if}

      <div class="panel">
        <div class="panel-body">

          <div class="panel-section">
            <p class="small-header">Solved in</p>
            <h1 class="time-text">{gaveUp ? "----" : elapsedSeconds}</h1>
          </div>

          <div class="panel-section">
            <span class="small-header">Global Stats</span>
            <Stats {globalStats}/>
          </div>

          <div class="panel-section">
            <span class="small-header mt-small" style="margin-top: 5rem;">Some Possible Solutions</span>
            <p>
              {#if solutions && solutions.length > 2}
                {#each solutions as solution}
                  {@html format_solution(solution)}
                {/each}
              {:else}
                {#if solutions && solutions.length > 0}
                  {@html format_solution(solutions[0])}
                {:else}
                  Loading Solutions...
                {/if}
              {/if}
            </p>
          </div>

          <button class="share-button" on:click={share}>SHARE YOUR TIME</button>
        </div>
      </div>

      <PromotionLink />

      <div class="panel">
        <div class="panel-body">
          <div class="stats-conatiner">
            {#if userStats}
              <div>
                <p class="small-header" >Current Streak</p>
                <p class="stats-text">
                  {streakEmoji}
                  {userStats.streak}
                </p>
              </div>

              <div>
                <p class="small-header">All Time Average</p>
                <p class="stats-text">{secondsFormatted(userStats.average_time)}</p>
              </div>
            {:else}
              Loading Your Stats...
            {/if}
          </div>

          <p class="disclaimer">*Stats are stored locally on your device and will be lost if you clear your cookies 🍪. Login for multi-device stats is coming soon! Thank you for your support and patience.</p>
        </div>
      </div>

      <!-- This will be turned back on after Kickstarter Ends -->
      <!-- <a href="https://ko-fi.com/letterloop" target="_blank">
        <div class="panel">
          <div class="panel-body">
            <p class="small-header center-text">❤️ Support the loop ❤️</p>
          </div>
        </div>
      </a> -->

      <div class="block-spacer-100"></div>
    <div>
  </main>

  