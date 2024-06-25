<script>
  import Toast from '../toast/Toast.svelte';
	import { onMount } from 'svelte';
	import './modal.css'; 

  export let showModal; // boolean
	export let hide_close = false;
	export let modalType;

  let dialog; // HTMLDialogElement

  $: if (dialog) {
    if (showModal) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }

  // Close the dialog when showModal changes while the dialog is open
  $: if (dialog && showModal === false && dialog.open) {
    dialog.close();
  }

	
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
	on:click|self={() => !hide_close && dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <Toast />
    <div class="flex-container">
      <div class="spacer"></div>
      {#if !hide_close}
				<i class="fa-solid fa-xmark" on:click={() => dialog.close()}></i>
      {/if}
    </div>
		<slot name="header" />
    <slot />
  </div>
</dialog>
