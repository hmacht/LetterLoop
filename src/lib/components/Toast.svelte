<script>
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import { notifications } from "$lib/utils/notifications";
</script>

<div class="notifications">
  {#each $notifications as notification (notification.id)}
      <div
          animate:flip
          class="toast"
          style="background: #EBEBEB;"
          transition:fly={{ y: 30 }}
      >
          <div class="content">{notification.message}</div>
          {#if notification.icon}<i class={notification.icon} />{/if}
      </div>
  {/each}
</div>

<style>
  .notifications {
      position: fixed;
      top: 13
      0px;
      left: 0;
      right: 0;
      margin: 0 auto;
      padding: 0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      pointer-events: none;
  }

  .toast {
      flex: 0 0 auto;
      margin-bottom: 10px;
      border-radius: 10px;;
  }

  .content {
      padding: 10px;
      display: block;
      color: rgb(17, 17, 17);
      font-weight: 500;
  }
</style>
