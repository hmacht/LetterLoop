<script>
  import { marked } from 'marked';

  export let title = "";
  export let content = "";
</script>

<style>
  .text-container {
    max-width: 800px;
    padding: 0 2rem 0 2rem;
    color: black;
  }

  .text-container .header {
    margin: 0;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-size: 30px !important;
    font-weight: 500;
    font-style: normal;
    color: black;
  }

  :global(.text-container p) {
    font-size: 20px;
  }

  :global(.text-container h1) {
    font-size: 30px;
  }

  :global(.text-container h2) {
    font-size: 23px;
  }
</style>

<div class="centered-container full-height-container">
  <div class="text-container">
    <br><br>
    <p class="header">{title}</p>
    <br>

    <div>{@html marked(content)}</div>
    <br><br>
  </div>
</div>