<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    // This route was dissabled
    // preventing 404 for users who are used to or saved this URL
    window.location.href = '/';
  });
</script>

<main>
</main>