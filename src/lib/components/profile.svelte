<script lang="ts">
  import { onMount } from 'svelte';

  import { getProfile } from '$lib/repos/profileRepo'
  import type { Profile } from '$lib/models/profile';
  import { signOutUser } from '$lib/repos/authRepo';
  
  import { secondsFormatted } from '$lib/utils/timeFormatter';
  import { calculateEmoji } from "$lib/utils/emojiStreak";

  export let userId: string;

  let profile: Profile | null
  var streakEmoji: string = ""

  onMount(async () => {
    await setProfile();
    setStreakEmoji();
  });

  async function setProfile() {
    profile = await getProfile(userId);
  };

  function setStreakEmoji() {
    if (!profile) return;
    let streak = profile.streak
    streakEmoji = calculateEmoji(streak)
  }

  async function handleSignOut() {
    try {
      await signOutUser();
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  }
</script>

<div>
  {#if profile}
    <p class="text-xl font-semibold" style="font-family: 'Playfair Display', serif;">Hello {profile.name}</p>
    
    <div class="flex">
      <button 
        class="text-red-600 hover:underline" 
        on:click={handleSignOut}>
        Sign Out
      </button>
      {#if profile.admin}
        <span class="ml-1">| <a href="admin/loops" class="text-red-600 hover:underline">Admin Portal</a></span>
      {/if}
    </div>
    

    <hr class="my-3 border-red-200">

    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-[#FEFAFA] p-4 rounded-2xl text-center border border-gray-300">
        <p class="text-2xl font-bold">{secondsFormatted(profile.averageTime)}</p>
        <p class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Average Time</p>
      </div>
      <div class="bg-[#FEFAFA] p-4 rounded-2xl text-center border border-gray-300">
        <p class="text-2xl font-bold">{streakEmoji} {profile.streak}</p>
        <p class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Streak</p>
      </div>
      <div class="bg-[#FEFAFA] p-4 rounded-2xl text-center border border-gray-300">
        <p class="text-2xl font-bold">{profile.gamesPlayed}</p>
        <p class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Played</p>
      </div>
    </div>
  {:else}
    <p class="text-red-500">Error loading profile</p>
  {/if}
</div>
