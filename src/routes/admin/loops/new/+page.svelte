<script lang="ts">
  import { onMount } from 'svelte';
  import { getPrimaryOptions, getSecondaryOptions, validLoop, formatLoop } from '$lib/utils/loop'
  import { addSolution } from '$lib/repos/solutionRepo'
  import { profileStore } from '$lib/stores/profileStore';

  let selectedPrimary: string | null = null;
  let selectedSecondary: string | null = null;
  let primaryWords: string[] = []
  let secondaryWords: string[] = []

  onMount(async () => {
    primaryWords = await getPrimaryOptions();
  });

  async function handleSubmit() {
    if (selectedPrimary && selectedSecondary) {
      console.log('Submitted:', { selectedPrimary, selectedSecondary });
      let valid = await validLoop(selectedPrimary, selectedSecondary);
      console.log(valid);
      if (valid) {
        const solution = formatLoop(selectedPrimary, selectedSecondary);
        console.log(solution);
        addSolution(solution, $profileStore?.name ?? 'mystery');
      }
      selectedPrimary = null;
      selectedSecondary = null;
    }
  }

  async function primarySelected(word: string) {
    selectedPrimary = word;
    selectedSecondary = null;
    secondaryWords = await getSecondaryOptions(word);
  }

  async function shufflePrimaryWords() {
    primaryWords = await getPrimaryOptions();
  }
</script>

<div class="container">  
  <div class="card">
    <p class="text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">The Loop Generator</p>
    
    <!-- Primary Word Selection -->
    <div class="selection-group">
      <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Select first word:</p>
      <div class="primary-container">
        <div class="button-group">
          {#each primaryWords as word}
            <button
              class="selection-button {selectedPrimary === word ? 'selected' : ''}"
              on:click={() => primarySelected(word)}
            >
              {word}
            </button>
          {/each}
        </div>

        <p class="shuffle" on:click={() => shufflePrimaryWords()}>
          <u>Shuffle</u>
        </p>
      </div>
    </div>

    <!-- Secondary Word Selection -->
    {#if selectedPrimary}
      <div class="selection-group">
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Select second word:</p>
        <div class="button-group">
          {#if secondaryWords.length > 0}
            {#each secondaryWords as word}
              <button
                class="selection-button {selectedSecondary === word ? 'selected' : ''}"
                on:click={() => selectedSecondary = word}
              >
                {word}
              </button>
            {/each}
          {:else}
            <p>There are no available second words for <b>{selectedPrimary}</b> :(</p>
          {/if}
        </div>
      </div>
    {/if}

    <!-- Current Selection Preview -->
    <div class="preview">
      Current selection: 
      {#if selectedPrimary && selectedSecondary}
        <strong>{selectedPrimary} - {selectedSecondary}</strong>
      {:else if selectedPrimary}
        <strong>{selectedPrimary}</strong> (please select second word)
      {:else}
        Please make your selections
      {/if}
    </div>

    <!-- Submit Button -->
    <button
      class="submit-button"
      disabled={!selectedPrimary || !selectedSecondary}
      on:click={handleSubmit}
    >
      Submit
    </button>
  </div>
</div>


<style>
  .container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .card {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    border: 1px solid #cfcfcf;
  }

  .card h2 {
    margin-top: 0;
    color: #333;
    font-size: 1.5rem;
  }

  .selection-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
    font-weight: 500;
  }

  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .selection-button {
    padding: 0.5rem 1rem;
    border: 1px solid #646464;
    border-radius: 4px;
    background: white;
    color: #414141;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .selection-button:hover {
    background: #ffefef;
  }

  .selection-button.selected {
    background: #474747;
    border-color: #3a3a3a;
    color: white;
  }

  .preview {
    margin: 1rem 0;
    padding: 1rem;
    background: #fff0f0;
    border-radius: 4px;
    border: 1px solid #fdbaba;
    color: #6e0c0c;
  }

  .preview strong {
    color: #a10303;
  }

  .submit-button {
    width: 100%;
    padding: 0.75rem;
    background: #F43653;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .submit-button:hover {
    background: #751725;
  }
 
  .submit-button:disabled {
    background: #b89494;
    cursor: not-allowed;
  }

  .logo {
    width: 30px;
    height: 30px;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }

  .permissions-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .permissions-container i {
    color: green;
  }

  .permissions-container p {
    margin: 0;
  }

  .header-card h2 {
    margin-bottom: 0.5rem;
  }

  .primary-container {
    display: flex;
    align-items: center;
    gap: 20px;
  }

</style>
