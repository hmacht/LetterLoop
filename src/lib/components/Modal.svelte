<script lang="ts">
  import Toast from '$lib/components/Toast.svelte';

  export let showModal: boolean;
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

<style>
  dialog {
    max-width: 32em;
    border-radius: 0.2em;
    border: none;
    padding: 0;
    background-color: #FFE9E9;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog > div {
    padding: 1em;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    display: block;
  }
  .flex-container {
    display: flex;
    align-items: center;
  }
  .spacer {
    flex-grow: 1;
  }
  .fa-xmark {
    cursor: pointer;
    font-size: 22px;;
    padding-left: 15px;
  }
</style>
