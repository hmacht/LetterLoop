<script lang="ts">
  import Modal from '$lib/components/Modal.svelte';
  import ProfileComponent from '$lib/components/Profile.svelte';

  import { profileStore } from "$lib/stores/profileStore";

  var showProfileModal: boolean = false;
  $: profile = $profileStore
</script>

<main>
  <div class="nav-flex-container-filled">
    <div class="title-container">
      <div>
        <a href="/" class="title nav-logo">LetterLoop</a>
      </div>
    </div>
    <div class="spacer"></div>
    <a class="help-container" href="https://www.reddit.com/r/letterloop/" target="_blank">
      <i class="fa-brands fa-reddit"></i>
      <p class="how-to-play">Comments</p>
    </a>

    {#if profile}
      <button 
        class="menu-btn no-fill" 
        on:click={() => showProfileModal = true}
      >
        <p class="how-to-play">Profile</p>
      </button>
    {:else}
      <a class="help-container" href="/auth/signup">
        <p class="how-to-play">Sign Up</p>
      </a>
    {/if}
  </div>
  <div class="divider"></div>
</main>

<Modal bind:showModal={showProfileModal} modalType={"profile"}>
  {#if profile && profile.id}
    <ProfileComponent bind:userId={profile.id} />
  {/if}
</Modal>
