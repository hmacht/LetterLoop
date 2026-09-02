<script lang="ts">
	import { goto } from '$app/navigation';
	import logo_src from '$lib/images/logo.png';
	import { emailHasAccount, loginWithEmail, signUpWithEmail } from '$lib/services/authService';

	/**
	 * One form for both signing in and signing up.
	 *
	 * We ask for the email first, then ask the server whether an account exists,
	 * and only then show the fields that actually apply. The player never has to
	 * decide up front which of two pages they belong on.
	 */
	type Step = 'email' | 'login' | 'register';

	let step: Step = 'email';
	let email = '';
	let password = '';
	let name = '';
	let errorMessage = '';
	let loading = false;

	$: heading =
		step === 'email'
			? 'Login or Create account'
			: step === 'login'
				? 'Welcome back'
				: 'Create your account';
	$: actionLabel = step === 'email' ? 'Continue' : step === 'login' ? 'Login' : 'Create account';
	$: canSubmit =
		!loading &&
		(step === 'email'
			? isPlausibleEmail(email)
			: step === 'login'
				? password.length > 0
				: name.trim().length > 0 && password.length > 0);

	function isPlausibleEmail(value: string): boolean {
		return /^\S+@\S+\.\S+$/.test(value.trim());
	}

	async function handleSubmit() {
		if (!canSubmit) return;

		loading = true;
		errorMessage = '';

		try {
			if (step === 'email') {
				step = (await emailHasAccount(email)) ? 'login' : 'register';
			} else if (step === 'login') {
				await loginWithEmail(email.trim(), password);
				await goto('/');
			} else {
				await signUpWithEmail(name, email.trim(), password);
				await goto('/');
			}
		} catch (error) {
			errorMessage = error instanceof Error ? error.message : String(error);
		} finally {
			loading = false;
		}
	}

	function changeEmail() {
		step = 'email';
		password = '';
		name = '';
		errorMessage = '';
	}
</script>

<svelte:head>
	<title>Login or Create account · LetterLoop</title>
</svelte:head>

<div class="auth-page">
	<img class="mx-auto mb-6 mt-5 h-12 w-12 object-contain" src={logo_src} alt="LetterLoop logo" />

	<p class="auth-header">{heading}</p>

	<form class="auth-form" on:submit|preventDefault={handleSubmit}>
		{#if step === 'email'}
			<!-- svelte-ignore a11y-autofocus -->
			<input
				class="input-field"
				type="email"
				autocomplete="email"
				autofocus
				bind:value={email}
				placeholder="Email"
			/>
		{:else}
			<button type="button" class="entered-email" on:click={changeEmail}>
				{email}
				<span class="change">Change</span>
			</button>

			{#if step === 'register'}
				<!-- svelte-ignore a11y-autofocus -->
				<input
					class="input-field"
					type="text"
					autocomplete="name"
					autofocus
					bind:value={name}
					placeholder="Name"
				/>
			{/if}

			<!-- svelte-ignore a11y-autofocus -->
			<input
				class="input-field"
				type="password"
				autocomplete={step === 'login' ? 'current-password' : 'new-password'}
				autofocus={step === 'login'}
				bind:value={password}
				placeholder="Password"
			/>
		{/if}

		<button class="btn" type="submit" disabled={!canSubmit}>
			{loading ? 'Loading...' : actionLabel}
		</button>
	</form>

	{#if errorMessage}
		<div class="error">{errorMessage}</div>
	{/if}

	{#if step === 'login'}
		<p class="small-text"><a href="/auth/passwordReset"><u>Forgot password?</u></a></p>
	{/if}

	<p class="leaderboard-cta">
		<i class="fa-solid fa-trophy" aria-hidden="true"></i>
		<span>Login to get your time on the leaderboard!</span>
	</p>

	<p class="legal">
		By continuing, you agree to the
		<a href="/terms">Terms of Service</a> and
		<a href="/privacy-policy">Privacy Policy</a>.
	</p>
</div>

<style>
	.auth-page {
		width: 100%;
		flex: 1 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		padding-bottom: 2rem;
	}

	.auth-header {
		font-size: 28px;
		margin: 3px 0 1.5rem 0;
		color: black;
		font-weight: 500;
		font-family: 'Playfair Display', serif;
		text-align: center;
		padding: 0 1rem;
	}

	.auth-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
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

	.entered-email {
		width: 70%;
		max-width: 300px;
		padding: 12px 15px;
		margin-bottom: 10px;
		border-radius: 8px;
		border: 1px solid #eee;
		background-color: #fafafa;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		font-size: 14px;
		color: #555;
		text-align: left;
	}

	.entered-email .change {
		color: #fc2f4f;
		text-decoration: underline;
		font-size: 13px;
		flex-shrink: 0;
		margin-left: 10px;
	}

	.btn {
		width: 78%;
		max-width: 300px;
		padding: 15px;
		background-image: -webkit-linear-gradient(top, #ff4f87, #fc2f4f);
		background-image: linear-gradient(to bottom, #ff4f87, #fc2f4f);
		color: white;
		border: none;
		border-radius: 25px;
		cursor: pointer;
		margin-top: 5px;
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: default;
	}

	.error {
		color: red;
		margin-top: 12px;
		max-width: 300px;
		text-align: center;
		padding: 0 1rem;
	}

	.small-text {
		font-size: 14px;
		margin-top: 12px;
		text-align: center;
		padding: 0 1.5rem;
	}

	.leaderboard-cta {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: 8px;
		margin: 20px 0 0 0;
		padding: 0 1.5rem;
		font-size: 14px;
		color: #333;
		text-align: center;
	}

	.leaderboard-cta i {
		/* Goldenrod rather than a lighter gold -- pale golds wash out badly
		   against the white card. */
		color: #d9a520;
		font-size: 14px;
	}

	.legal {
		margin: 28px 0 0 0;
		padding: 0 1.5rem;
		max-width: 340px;
		font-size: 12px;
		line-height: 1.5;
		color: #666;
		text-align: center;
	}

	.legal a {
		color: black;
		text-decoration: underline;
	}
</style>
