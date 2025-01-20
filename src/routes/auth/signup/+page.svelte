<script lang="ts">
  import logo_src from '$lib/images/logo.png';
  import { signUpWithMail } from '$lib/repos/authRepo';
  
  let name: string = '';
  let email: string = '';
  let password: string = '';
  let errorMessage;

  var signUpLoading: boolean = false;
 
  async function signUp() {
    try {
      signUpLoading = true;
      await signUpWithMail(name, email, password)
    } catch(e) {
      signUpLoading = false;
      errorMessage = e;
    }
  };
</script>
 
<style>

  /* Form container on the right */
  .login-form {
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  }

  .input-field {
    width: 70%;
    max-width: 300px;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    background-color: transparent;
  }

  .btn {
    width: 78%;
    max-width: 300px;
    padding: 15px;
    background-image: -webkit-linear-gradient(top, #FF4F87, #FC2F4F);
    background-image: linear-gradient(to bottom, #FF4F87, #FC2F4F);
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }

  .error {
    color: red;
    margin-top: 10px;
  }

  .menu-header {
    font-size: 30px;
    margin: 3px;
    color: black;
    font-weight: 500;
    font-family: "Playfair Display", serif;
  }

  .small-text {
    font-size: 14px;
  }
</style>

<main>
  <div class="login-form">
    <img class="w-12 h-12 mx-auto object-contain mb-[15%] mt-5" src={logo_src} alt="Our Little Loop Logo" />

    <p class="menu-header">Lets Get Started</p>

    <br><br>

    <input class="input-field" type="text" bind:value={name} placeholder="Name" />
    <input class="input-field" type="text" bind:value={email} placeholder="Email" />
    <input class="input-field" type="password" bind:value={password} placeholder="password" />
    <button class="btn" on:click={signUp}>{signUpLoading ? "Loading..." : "Sign Up"}</button>

    {#if errorMessage}
      <div class="error">{errorMessage}</div>
    {/if}
    
    <p class="small-text mt-3">Already have an account? <a href="/auth/login"><u>Log In</u></a></p>
  </div>
</main>
