<script lang="ts">
  import { onMount } from 'svelte';
  import { getProfile } from '$lib/repos/profileRepo'
  import type { Profile } from '$lib/models/profile';

  export let userId: string;

  let profile: Profile | null

  onMount(() => {
    fetchProfile();
  });

  const fetchProfile = async () => {
    profile = await getProfile(userId);
  };
</script>

<div>
  {#if profile}
    <p class="text-xl font-semibold" style="font-family: 'Playfair Display', serif;">Hello {profile.name}</p>

    <a href="admin/dashboard" class="text-red-600 hover:underline">Sign out</a>
    {#if profile.admin}
      | <a href="admin/dashboard" class="text-red-600 hover:underline">Admin Portal</a>
    {/if}

    <hr class="my-5">

    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-gray-200 p-4 rounded-lg text-center">
        <p class="text-2xl font-bold">{profile.averageTime}</p>
        <p class="text-sm text-gray-600">Average Time</p>
      </div>
      <div class="bg-gray-200 p-4 rounded-lg text-center">
        <p class="text-2xl font-bold">{profile.streak}</p>
        <p class="text-sm text-gray-600">Streak</p>
      </div>
      <div class="bg-gray-200 p-4 rounded-lg text-center">
        <p class="text-2xl font-bold">{profile.gamesPlayed}</p>
        <p class="text-sm text-gray-600">Total Loops Completed</p>
      </div>
    </div>
  {:else}
    <p class="text-red-500">Error loading profile</p>
  {/if}
</div>
