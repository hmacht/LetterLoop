<script lang="ts">
  import { onMount } from 'svelte';
  import { getPrimaryOptions, getSecondaryOptions, validLoop, formatLoop } from '$lib/utils/loop'
  import { addSolution } from '$lib/repos/solutionRepo'
  import { profileStore } from '$lib/stores/profileStore';
  import { Alert } from 'flowbite-svelte';
  import { Button } from 'flowbite-svelte';

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
  <div class="bg-white p-8 border border-slate-300 rounded-lg overflow-hidden">
    <p class="text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 mb-3">The Loop Generator</p>
    
    <!-- Primary Word Selection -->
    <div class="mb-2">
      <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Select first word:</p>
      <div class="flex flex-wrap gap-2">
        {#each primaryWords as word}
          <Button 
            outline 
            color="dark" 
            class="{selectedPrimary === word ? 'bg-slate-900 text-white' : 'bg-transparent'}" 
            on:click={() => primarySelected(word)}>
            {word}
          </Button>
        {/each}

        <div class="flex items-center gap-2 cursor-pointer" on:click={() => shufflePrimaryWords()}>
          <i class="fa-solid fa-shuffle"></i>
          <p><u>Shuffle</u></p>
        </div>
      </div>
    </div>

    <!-- Secondary Word Selection -->
    {#if selectedPrimary}
      <div class="mb-2">
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Select second word:</p>
        <div class="flex flex-wrap gap-2">
          {#if secondaryWords.length > 0}
            {#each secondaryWords as word}
              <Button 
                outline 
                color="dark" 
                class="{selectedSecondary === word ? 'bg-slate-900 text-white' : 'bg-transparent'}" 
                on:click={() => selectedSecondary = word}>
                {word}
              </Button>
            {/each}
          {:else}
            <p>There are no available second words for <b>{selectedPrimary}</b> :(</p>
          {/if}
        </div>
      </div>
    {/if}

    <Alert color="dark" class="mb-3 mt-5">
      <i class="fa-solid fa-puzzle-piece"></i>
      Current selection: 
      {#if selectedPrimary && selectedSecondary}
        <strong>{selectedPrimary} - {selectedSecondary}</strong>
      {:else if selectedPrimary}
        <strong>{selectedPrimary}</strong> (please select second word)
      {:else}
        Please make your selections
      {/if}
    </Alert>

    <!-- Submit Button -->
    <Button disabled={!selectedPrimary || !selectedSecondary} on:click={handleSubmit}>Submit</Button>
  </div>
</div>
