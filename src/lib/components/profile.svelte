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
    <p>Hello {profile.name}</p>

    {#if profile.admin}
      <a href="admin/dashboard">Go to Loop Protal</a>
    {/if}
    <p>Email: {profile.email}</p>

    Stats
    <p>Average Time: {profile.averageTime}</p>
    <p>Streak: {profile.streak}</p>
    <p>Total Loops Completed: {profile.gamesPlayed}</p>
  {:else}
    <p> Error loading profile </p>
  {/if}
</div>
