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
  <p> Loading... </p>
{:else if profile && profile.admin}    
  <div class="dashboard-layout">
    <nav class="sidebar">
      <div class="logo-section">
        <img class="logo" src={logo_src} alt="Our Little Loop Logo" />
        <b>Admin Looper</b>
      </div>
      
      
      <div class="menu-sections">
        <!-- Generate Loop Section -->
        <div class="menu-section">
          <a href="/admin/loops/new" class="menu-item">
            <i class="fas fa-plus-circle"></i>
            <span>New Loop</span>
          </a>
          <a href="/admin/loops" class="menu-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Upcoming Loops</span>
          </a>
        </div>
      </div>

      <!-- Home Section at Bottom -->
      <div class="home-section">
        <a href="/" class="menu-item">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </a>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main>
      <slot />
    </main>
  </div>
{:else}
  <p> 401 Permission Denied </p>
{/if}

<style>
  .dashboard-layout {
    display: flex;
    max-height: 100vh;
    width: 100vw;
  }

  .sidebar {
    width: 250px;
    background-color: #1a1a1a;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 1rem;
    text-align: left;
  }

  .logo {
    width: 30px;
    height: 30px;
  }

  .menu-sections {
    flex-grow: 1;
  }

  .menu-section {
    margin-bottom: 2rem;
  }

  .menu-section h3 {
    font-size: 0.875rem;
    text-transform: uppercase;
    color: #666;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }

  .menu-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    color: #ffffff;
    text-decoration: none;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    transition: background-color 0.2s;
  }

  .menu-item:hover {
    background-color: #333;
  }

  .menu-item i {
    margin-right: 0.75rem;
    width: 1.25rem;
    text-align: center;
  }

  .home-section {
    padding-top: 1rem;
    border-top: 1px solid #333;
  }

  main {
    flex-grow: 1;
    padding: 2rem;
    background-color: #f5f5f5;
  }
</style>