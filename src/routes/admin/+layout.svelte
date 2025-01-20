<script lang="ts">
  import { onMount } from 'svelte';
  import { getCurrentUserProfile } from '$lib/repos/profileRepo'
  import type { Profile } from '$lib/models/profile';
  import { profileStore } from '$lib/stores/profileStore';
  import logo_src from '$lib/images/logo.png';

  let profile: Profile | null = null;
  let loadingUser: boolean = true;

  onMount(async () => {
    profile = await getCurrentUserProfile();
    loadingUser = false;
    profileStore.set(profile);
  });

</script>

{#if loadingUser}
  <div class="flex items-center justify-center h-screen">
    <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">Loading...</p>
  </div>
{:else if profile && profile.admin}
  <div class="flex h-screen w-screen">
    <!-- Sidebar -->
    <nav class="w-64 bg-gray-900 text-white flex flex-col">
      <!-- Logo Section -->
      <div class="flex items-center gap-3 p-4">
        <img src={logo_src} alt="Our Little Loop Logo" class="w-8 h-8" />
        <span class="text-xl font-bold">Admin Looper</span>
      </div>

      <!-- Menu Sections -->
      <div class="flex-grow px-4">
        <!-- Generate Loop Section -->
        <div class="mb-6">
          <a href="/admin/loops/new" class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white no-underline">
            <i class="fas fa-plus-circle"></i>
            <span>New Loop</span>
          </a>
          <a href="/admin/loops" class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white">
            <i class="fas fa-calendar-alt"></i>
            <span>Upcoming Loops</span>
          </a>
        </div>
      </div>

      <!-- Home Section -->
      <div class="mt-auto border-t border-gray-700 px-4 pt-4 mb-3">
        <a href="/" class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </a>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="flex-grow bg-gray-100 dark:bg-gray-800 p-6">
      <slot />
    </main>
  </div>
{:else}
  <div class="flex items-center justify-center h-screen">
    <p class="text-lg font-semibold text-red-600 dark:text-red-400">401 Permission Denied</p>
  </div>
{/if}