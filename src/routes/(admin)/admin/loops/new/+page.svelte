<script lang="ts">
  import { onMount } from 'svelte';
  import { getPrimaryOptions, getSecondaryOptions, validLoop } from '$lib/utils/loop'
  import { addSolution, getSolutionUsage } from '$lib/repos/solutionRepo'
  import { profileStore } from '$lib/stores/profileStore';
  import { Alert } from 'flowbite-svelte';
  import { Button } from 'flowbite-svelte';

  import DictionaryLink from '$lib/components/DictionaryLink.svelte'

  let selectedPrimary: string | null = null;
  let selectedSecondary: string | null = null;
  let primaryWords: string[] = [];
  let secondaryWords: string[] = [];

  let showAlert = false;
  let showSWords = false;
  let submittedWords = { primary: '', secondary: '' };
  
  var primaryUsage: number | null = 0
  var secondaryUsage: number | null = 0;
  var loadingUsage: boolean = true;

  $: profile = $profileStore;
  $: selectionComplete = selectedPrimary && selectedSecondary;

  onMount(async () => {
    primaryWords = await getPrimaryOptions(5, showSWords);
  });

  async function handleSubmit() {
    if (selectedPrimary && selectedSecondary) {
      let valid = await validLoop(selectedPrimary, selectedSecondary);

      if (valid) {
        await addSolution(selectedPrimary, selectedSecondary, profile?.name ?? 'mystery');

        submittedWords = {
          primary: selectedPrimary,
          secondary: selectedSecondary
        };

        showAlert = true;
        setTimeout(() => {
          showAlert = false;
        }, 3000);
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

  async function secondarySelected(word: string) {
    selectedSecondary = word;

    loadingUsage = true;
    primaryUsage = await getSolutionUsage(selectedPrimary);
    secondaryUsage = await getSolutionUsage(selectedSecondary);
    loadingUsage = false;
  }

  async function shufflePrimaryWords() {
    primaryWords = await getPrimaryOptions(5, showSWords);
  }
</script>

<div class="container">
  {#if showAlert}
    <Alert color="green" class="mb-5">
      <i class="fa-solid fa-circle-check"></i>
      Added: <b>{submittedWords.primary}</b> + <b>{submittedWords.secondary}</b>
    </Alert>
  {/if}

  <div class="bg-white p-8 border border-slate-300 rounded-lg overflow-hidden">
    <p class="text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 mb-3">The Loop Generator</p>

    <label class="flex items-center space-x-2 mb-2 text-sm text-gray-700 dark:text-gray-300">
      <input type="checkbox" bind:checked={showSWords} class="form-checkbox h-4 w-4 text-blue-600" />
      <span>Show S words (Henry <i>hates</i> S words)</span>
    </label>
    
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
                on:click={() => secondarySelected(word)}>
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
        <strong><DictionaryLink word={selectedPrimary} /> - <DictionaryLink word={selectedSecondary} /></strong>
      {:else if selectedPrimary}
        <strong><DictionaryLink word={selectedPrimary} /></strong> (please select second word)
      {:else}
        Please make your selections
      {/if}
    </Alert>
    
    {#if selectionComplete}
      <Alert color="dark" class="mb-5 mt-2">
        <i class="fa-solid fa-chart-simple"></i>
        Selection Usage:
        {#if loadingUsage}
          Loading...
        {:else if selectedPrimary && selectedSecondary}
          <b class="primary-highlight">{primaryUsage}</b> ({selectedPrimary}) - <b class="primary-highlight">{secondaryUsage}</b> ({selectedSecondary})
        {:else}
          --- - ---
        {/if}
      </Alert>
    {/if}

    <!-- Submit Button -->
    <Button disabled={!selectionComplete} on:click={handleSubmit}>Submit</Button>
  </div>
</div>
