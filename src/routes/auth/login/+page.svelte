<script lang="ts">
  import logo_src from '$lib/images/logo.png';
  import { loginWithMail } from '$lib/repos/authRepo';

  let email: string = '';
  let password: string = '';
  let errorMessage;

  async function login() {
    try {
      await loginWithMail(email, password);
    } catch(e) {
      errorMessage = e;
    }
  }
</script>

<style>
  /* Form container on the right */
  .login-form {
    width: 100vw;
    height: 100vh;
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

  .logo {
    width: 50px;
    height: 50px;
    padding-bottom: 15%;
    margin-top: 2rem;
  }
</style>

<main>
  <div class="login-form">
    <img class="w-12 h-12 mx-auto object-contain mb-[5%] mt-5" src={logo_src} alt="Our Little Loop Logo" />

    <p class="menu-header">Welcome Back</p>

    <br><br>

    <input class="input-field" type="text" bind:value={email} placeholder="Email" />
    <input class="input-field" type="password" bind:value={password} placeholder="password" />
    <button class="btn" on:click={login}>Log In</button>

    {#if errorMessage}
      <div class="error">{errorMessage}</div>
    {/if}
    
    <p class="small-text mt-3">Don't have an account? <a href="/auth/signup"><u>Sign Up</u></a></p>
    <p class="small-text mt-3"><a href="/auth/passwordReset"><u>Forgot password?</u></a></p>
</main>
