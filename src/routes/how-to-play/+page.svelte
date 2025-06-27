<script lang="ts">
  import TextBlock from "$lib/components/TextBlock.svelte";
  import Help from "$lib/components/Help.svelte";

  import ex_solution from '$lib/images/ex-solution.png';
  import ex_letter_box from '$lib/images/ex-letter-box.png';
</script>

<style>
  .text-container {
    max-width: 800px;
    padding: 0 2rem 0 2rem;
    color: black;
  }
  </style>

<main>
  <div class="centered-container full-height-container">
    <div class="text-container">
      <br>
      <p class="title-lg">How to Play</p>
      <br>

      <p class="text-style">Find the 8-letter circle word. There are 2 words to find. Letters may only be used once and have to be in the letter bank. The red circles are shared letters between the two words. You must fill in every word before submitting.</p>
      <br>
      
      <p class="text-style">Example, if we had these letters:</p>
      <br>
      <img src={ex_letter_box} alt="Welcome" style="width: 350px; height: auto;" />
      <br>

      <p class="text-style">
          We could spell the words 
          <b>
              <span style="color: red;">M</span>USI<span style="color: red;">C</span>
          </b> 
          and 
          <b>
              <span style="color: red;">C</span>HAR<span style="color: red;">M</span>
          </b>. 
      </p>
      <p class="text-style">Notice how these words share an <b><span style="color: red;">M</span></b> and a <b><span style="color: red;">C</span></b>.</p>
      <br>

      <p class="text-style">One correct solution:</p>

      <br>
      <img src={ex_solution} alt="Welcome" style="width: 150px; height: auto;" />
      <br>

      <p class="text-style">Remember there can be more than one solution.</p>
    </div>
  </div>
</main>