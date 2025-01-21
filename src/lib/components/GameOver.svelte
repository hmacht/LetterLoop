<script lang="ts">
    import { onMount } from "svelte";

    import Stats from '$lib/components/Stats.svelte';
    import CharacterBanner from '$lib/components/CharacterBanner.svelte';
    import Toast from '$lib/components/Toast.svelte';
    import OrbitsAd from '$lib/components/OrbitsAd.svelte';
    import PromotionLink from '$lib/components/PromotionLink.svelte';
    import Modal from '$lib/components/Modal.svelte';
    import Profile from '$lib/components/Profile.svelte';

    import { notifications } from "$lib/utils/notifications.js";
    import { gameData } from '$lib/stores/gameStore.js';
    import { secondsFormatted } from "$lib/utils/timeFormatter"
    import { getCurrentUserProfile } from "$lib/repos/profileRepo"

    import type { Profile } from "$lib/models/profile"
    
    import navImage from '$lib/images/logo-black.png';
    
    var elapsedSeconds = "-----"
    var gaveUp = false
    var solutions = []
    var globalStats = "";
    var streakEmoji = "";
    var loadingProfile: boolean = true;
    var showProfileModal: boolean = false;

    let profile: Profile;

    export let completedTodaysLoop = false;

    onMount(async () => {
      loadAd();
      retrieveGameDate();
      profile = await getCurrentUserProfile();
      loadingProfile = false;
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

    function setStreakEmoji() {
      if (!profile) return;

      let streak = Number(profile.streak);
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
      {#if profile}
        <button 
          class="menu-btn no-fill" 
          on:click={() => showProfileModal = true}
        >
          <div class="flex gap-1 items-center">
            <i class="fa-regular fa-user mb-0.5"></i>
            <p class="how-to-play">Profile</p>
          </div>
        </button>
      {/if}
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
            {#if loadingProfile}
              Loading your stats...
            {:else}
              {#if profile}
                <div>
                  <p class="small-header" >Current Streak</p>
                  <p class="stats-text">
                    {streakEmoji}
                    {profile.streak}
                  </p>
                </div>

                <div>
                  <p class="small-header">All Time Average</p>
                  <p class="stats-text">{secondsFormatted(profile.averageTime)}</p>
                </div>
              {:else}
                <span>Sign up for an account to see your stats! <a href="/auth/signup">Sign up</a></span>
              {/if}
            {/if}
          </div>

          <p class="disclaimer">*Hey, stats not what they should be? Report the issue on Redit and we will fix right away! Thanks for playing.</p>
        </div>
      </div>

      <div class="block-spacer-100"></div>
    <div>
  </main>

  <Modal bind:showModal={showProfileModal} modalType={"profile"}>
    {#if profile && profile.id}
      <Profile bind:userId={profile.id} />
    {/if}
  </Modal>

  