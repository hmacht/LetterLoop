<script lang="ts">
  import { onMount } from 'svelte';
  import { getProfile } from '$lib/repos/profileRepo'
  import type { Profile } from '$lib/models/profile';
  import { session, type User } from '$lib/session';
  import logo_src from '$lib/images/logo.png';

  // Secondary words based on primary selection
  const secondaryWordMap = {
    Apple: ['Red', 'Green', 'Sweet', 'Tart'],
    Banana: ['Yellow', 'Ripe', 'Fresh', 'Peeled'],
    Cherry: ['Dark', 'Bright', 'Juicy', 'Pitted'],
    Date: ['Brown', 'Dried', 'Fresh', 'Sweet'],
    Elderberry: ['Purple', 'Wild', 'Cooked', 'Raw']
  };

  let selectedPrimary: string | null = null;
  let selectedSecondary: string | null = null;
  let profile: Profile | null = null;
  let loadingUser: boolean = true;
  let cachedWords: string[] = [];
  let primaryWords: string[] = []

  onMount(async () => {
    profile = await fetchProfile();
    primaryWords = await getRandomWords(5);
  });

  const fetchProfile = async () => {
    return new Promise<Profile | null>((resolve) => { 
      const unsubscribe = session.subscribe(async (cur: any) => {
        const user = cur?.user;
        loadingUser = true;
        if (user && user.uid) {
          console.log(user.uid);
          const fetchedProfile = await getProfile(user.uid);
          loadingUser = false;
          unsubscribe();
          resolve(fetchedProfile);
        }
      });
    });
  };

  function handleSubmit() {
    if (selectedPrimary && selectedSecondary) {
      // Handle form submission here
      console.log('Submitted:', { selectedPrimary, selectedSecondary });
      selectedPrimary = null;
      selectedSecondary = null;
    }
  }

  // Function to fetch and cache words
  export async function fetchWordList(): Promise<string[]> {
    try {
      if (cachedWords.length === 0) {
        const response = await fetch('/wordlists/prime.txt');
        const text = await response.text();
        cachedWords = text.split('\n').filter(word => word.trim() !== '');
      }
      return cachedWords;
    } catch (error) {
      console.error('Error fetching words:', error);
      return [];
    }
  }

  // Get random words from the list
  export async function getRandomWords(count: number = 5): Promise<string[]> {
    const words = await fetchWordList();
    const randomWords: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      randomWords.push(words[randomIndex].trim());
    }
    
    return randomWords;
  }
</script>

<div>
  {#if loadingUser}
    <p> Loading... </p>
  {:else if profile && profile.admin}    
    <div class="container">
      <div class="logo-container">
        <img class="logo" src={logo_src} alt="Our Little Loop Logo" />
        <b>Admin Looper</b>
      </div>
      
      <br><br>

      <div class="card header-card">
        <h2>Welcome {profile.name}</h2>
        <div class="permissions-container">
          <i class="fa-regular fa-circle-check"></i>
          <p>You have been authorized to edit and create puzzles</p>
        </div>
        
      </div>

      <br>
      
      <div class="card">
        <h2>The Loop Generator</h2>
        
        <!-- Primary Word Selection -->
        <div class="selection-group">
          <label>Select first word:</label>
          <div class="button-group">
            {#each primaryWords as word}
              <button
                class="selection-button {selectedPrimary === word ? 'selected' : ''}"
                on:click={() => {
                  selectedPrimary = word;
                  selectedSecondary = null;
                }}
              >
                {word}
              </button>
            {/each}
          </div>
        </div>
    
        <!-- Secondary Word Selection -->
        {#if selectedPrimary}
          <div class="selection-group">
            <label>Select second word:</label>
            <div class="button-group">
              {#each secondaryWordMap[selectedPrimary] as word}
                <button
                  class="selection-button {selectedSecondary === word ? 'selected' : ''}"
                  on:click={() => selectedSecondary = word}
                >
                  {word}
                </button>
              {/each}
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

  {:else}
    <p> 401 Permission Denied </p>
  {/if}
</div>


<style>
  .container {
    max-width: 800px;
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

</style>
