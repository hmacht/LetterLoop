<script lang="ts">
	import { onMount } from 'svelte';

	import Stats from '$lib/components/Stats.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import PromotionLink from '$lib/components/PromotionLink.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import LeaderRow from '$lib/components/LeaderRow.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import { avatarSrc } from '$lib/images/avatars';

	import { notifications } from '$lib/utils/notifications';
	import { formatDuration } from '$lib/utils/time';
	import {
		today as loadDailyBoard,
		allTime as loadAllTimeBoard
	} from '$lib/services/leaderboardService';
	import { profileStore } from '$lib/stores/profileStore';
	import { session } from '$lib/session';
	import { Event, track } from '$lib/services/analytics';

	import loopCheck from '$lib/images/loop_icons/loop_check.png';
	import loopX from '$lib/images/loop_icons/loop_x.png';
	import loopPodeum from '$lib/images/loop_icons/loop_podeum.png';

	import type { GameResult } from '$lib/services/gameService';
	import type { AllTimeBoard, DailyLeaderboard } from '$lib/models/leaderboard';

	export let result: GameResult;
	/** True when the player finished earlier and has come back to the page. */
	export let returning = false;

	let leaderboard: DailyLeaderboard | null = null;
	let allTime: AllTimeBoard | null = null;
	let leaderboardError = '';
	let allTimeError = '';
	let showLeaderboardHelp = false;
	let showAllTime = false;
	let showProfile = false;
	let loading = true;

	/* Read from the session rather than the leaderboard payload: the prompt
	   should be there from first paint, not once the boards have loaded. */
	$: loggedIn = $session?.loggedIn ?? false;
	$: profile = $profileStore;
	$: displayTime = formatDuration(result.elapsedSeconds);
	$: beatAverage = !result.gaveUp && result.globalStats.isUnderAverage;

	/**
	 * The headline is a greeting plus an outcome, so the four states read as
	 * variations of one sentence rather than four unrelated messages.
	 */
	$: greeting = returning
		? 'Welcome back!'
		: result.gaveUp
			? 'Better luck tomorrow!'
			: beatAverage
				? 'Well done!'
				: 'Nice Work!';
	$: outcomeLine = result.gaveUp
		? 'You tried your best!'
		: beatAverage
			? "You are above today's average."
			: 'Thanks for playing.';

	/** Player has a time but sits below the top list, so needs the "..." section. */
	$: outsideTop = !!leaderboard?.you && leaderboard.you.rank > leaderboard.top.length;

	onMount(async () => {
		loadAd();

		// Two independent boards -- fetched together, and one failing must not
		// blank the other.
		const [daily, allTimeResult] = await Promise.allSettled([
			loadDailyBoard(),
			loadAllTimeBoard(30)
		]);

		if (daily.status === 'fulfilled') {
			leaderboard = daily.value;
		} else {
			leaderboardError = 'Could not load the leaderboard.';
			console.error('Could not load the daily leaderboard:', daily.reason);
		}

		if (allTimeResult.status === 'fulfilled') {
			allTime = allTimeResult.value;
		} else {
			allTimeError = 'Could not load top loopers.';
			console.error('Could not load the all-time leaderboard:', allTimeResult.reason);
		}

		loading = false;
	});

	function loadAd() {
		window.aiptag?.cmd.display.push(() => {
			window.aipDisplayTag?.display('theletterloop-com_300x50');
		});
	}

	async function share() {
		track(Event.ShareClicked, { gaveUp: result.gaveUp, ranked: !!leaderboard?.you });

		const rank = leaderboard?.you
			? `\nRanked #${leaderboard.you.rank} out of ${leaderboard.total.toLocaleString()} players today`
			: '';
		const shareText = result.gaveUp
			? "I didn't complete the LetterLoop today, but I sure did try my best"
			: `I completed the LetterLoop in: \n🔴${displayTime}🔴${rank}`;

		if (navigator.share) {
			try {
				await navigator.share({ title: '', text: shareText, url: window.location.href });
			} catch {
				// Dismissing the share sheet is not an error worth reporting.
			}
			return;
		}

		try {
			await navigator.clipboard.writeText(shareText);
			notifications.default('Copied Link!', 1000);
		} catch {
			notifications.danger('Error', 1000);
		}
	}

	function dictionaryUrl(word: string) {
		return `https://www.merriam-webster.com/dictionary/${word}`;
	}
</script>

{#if loading}
	<Loading />
{:else}
	<main>
		<Toast />

		<div class="results">
			<div id="theletterloop-com_300x50"><!-- JS Ad Injection --></div>

			<img class="outcome-icon" src={result.gaveUp ? loopX : loopCheck} alt="" />

			<h1 class="headline">{greeting} {outcomeLine}</h1>

			{#if !loggedIn}
				<div class="signup-cta">
					<p class="signup-sub">
						Track your streak, your average time and get your name on the leaderboard.
					</p>
					<a class="signup-button" href="/auth">Create a free account</a>
					<a class="signup-login" href="/auth">Already registered? Log in</a>
				</div>
			{/if}

			<section class="block">
				<p class="label">Solved in</p>
				{#if result.gaveUp}
					<p class="time gave-up">Gave up</p>
				{:else}
					<p class="time">{displayTime}</p>
				{/if}
			</section>

			<section class="block">
				<p class="label">Todays Stats</p>
				<div class="body-text">
					<Stats globalStats={result.globalStats} />
				</div>
			</section>

			<section class="block">
				<p class="label">Today's Solution</p>
				<p class="body-text solution">
					<a href={dictionaryUrl(result.solution.primary)} target="_blank" rel="noreferrer">
						{result.solution.primary}
					</a>
					+
					<a href={dictionaryUrl(result.solution.secondary)} target="_blank" rel="noreferrer">
						{result.solution.secondary}
					</a>
				</p>
			</section>

			<button class="share-button" on:click={share}>
				<i class="fa-solid fa-share-nodes" aria-hidden="true"></i>
				Share
			</button>

			{#if profile}
				<button class="profile-trigger" on:click={() => (showProfile = true)}>
					<img class="trigger-icon" src={avatarSrc(profile.avatar)} alt="" />
					<span>
						Check your streak, times and games played.
						<span class="trigger-link">View profile</span>
					</span>
				</button>
			{/if}

			<!-- Today's fastest times -->
			<section class="board-block board-block-lead">
				<div class="board-title">
					<div class="board-heading">
						<span class="badge-new">New</span>
						<h2 class="board-name">Leaderboard</h2>

						{#if leaderboard?.you}
							<p class="board-blurb">
								Awesome work today! You ranked
								<b>#{leaderboard.you.rank}</b>
								out of <b>{leaderboard.total.toLocaleString()}</b> players!
							</p>
						{:else}
							<p class="board-blurb">
								Todays top players ranked by times.{loggedIn
									? ''
									: ' Sign in to get your name on the leaderboard!'}
							</p>
						{/if}
					</div>

					<button
						class="board-help"
						on:click={() => (showLeaderboardHelp = true)}
						aria-label="How the leaderboard works"
					>
						<i class="fa-regular fa-circle-question" aria-hidden="true"></i>
					</button>
				</div>

				{#if leaderboardError}
					<p class="muted">{leaderboardError}</p>
				{:else if leaderboard}
					{#if leaderboard.top.length > 0}
						<ul class="board">
							{#each leaderboard.top as entry (entry.uid)}
								<LeaderRow
									rank={entry.rank}
									name={entry.name}
									avatar={entry.avatar}
									value={formatDuration(entry.elapsedSeconds)}
									isYou={entry.uid === leaderboard.you?.uid}
								/>
							{/each}

							{#if outsideTop && leaderboard.you}
								{#if leaderboard.you.rank > leaderboard.top.length + 1}
									<li class="gap" aria-hidden="true">&hellip;</li>
								{/if}

								{#if leaderboard.above && leaderboard.above.rank > leaderboard.top.length}
									<LeaderRow
										rank={leaderboard.above.rank}
										name={leaderboard.above.name}
										avatar={leaderboard.above.avatar}
										value={formatDuration(leaderboard.above.elapsedSeconds)}
										isYou={false}
									/>
								{/if}

								<LeaderRow
									rank={leaderboard.you.rank}
									name={leaderboard.you.name}
									avatar={leaderboard.you.avatar}
									value={formatDuration(leaderboard.you.elapsedSeconds)}
									isYou={true}
								/>

								{#if leaderboard.below}
									<LeaderRow
										rank={leaderboard.below.rank}
										name={leaderboard.below.name}
										avatar={leaderboard.below.avatar}
										value={formatDuration(leaderboard.below.elapsedSeconds)}
										isYou={false}
									/>
								{/if}
							{/if}
						</ul>
					{:else}
						<p class="muted">No one has finished today yet. Be the first!</p>
					{/if}
				{/if}

				<button class="all-time-trigger" on:click={() => (showAllTime = true)}>
					<img class="trigger-icon" src={loopPodeum} alt="" />
					<span>
						Want to see the best players of all time?
						<span class="trigger-link">View leaders</span>
					</span>
				</button>
			</section>

			<PromotionLink />

			<!-- Signs the page off the same way the menu signs itself off. -->
			<div class="sign-off">
				<i class="tagline">For the love of morning games</i>
				<p class="thanks">
					<i class="fa-regular fa-face-smile" aria-hidden="true"></i>
					Thanks for playing
				</p>
			</div>

			<div class="block-spacer-100"></div>
		</div>
	</main>
{/if}

<Modal
	bind:showModal={showAllTime}
	modalType="all-time"
	title="Top Loopers"
	subtitle="Most games played, all time."
>
	{#if allTimeError}
		<p class="muted">{allTimeError}</p>
	{:else if allTime && allTime.top.length > 0}
		<ul class="board">
			{#each allTime.top as entry (entry.uid)}
				<LeaderRow
					rank={entry.rank}
					name={entry.name}
					avatar={entry.avatar}
					value={entry.gamesPlayed.toLocaleString()}
					isYou={entry.gamesPlayed === allTime.yourGamesPlayed && entry.rank === allTime.yourRank}
				/>
			{/each}
		</ul>

		{#if allTime.yourRank && allTime.yourRank > allTime.top.length}
			<p class="muted standing">
				You're <b>#{allTime.yourRank}</b> with {allTime.yourGamesPlayed} games played.
			</p>
		{/if}
	{:else if allTime}
		<p class="muted">No loopers yet.</p>
	{:else}
		<p class="muted">Loading...</p>
	{/if}
</Modal>

<Modal
	bind:showModal={showLeaderboardHelp}
	modalType="leaderboard-help"
	title="How the leaderboard works"
	subtitle="Sign in to take your place on the board."
>
	<ul class="help-list">
		<li>
			<b>Pausing is free.</b> Pausing stops the clock and hides the board. Time spent paused is not counted
			against you.
		</li>
		<li>
			<b>Signed-in players only.</b> You need an account to appear here. Guests still get their time
			&mdash; it just isn't ranked.
		</li>
		<li>
			<b>Completed loops only.</b> Giving up doesn't place you on the board, and times that aren't humanly
			possible are left off.
		</li>
	</ul>
</Modal>

<Modal
	bind:showModal={showProfile}
	modalType="profile"
	title="Your Profile"
	subtitle="Your streak, average time and games played."
>
	<Profile />
</Modal>

<style>
	/*
	  Everything sits directly on the pink. The results used to be a stack of
	  white cards; the leaderboards now share the same flat treatment so they
	  read as part of one page rather than panels bolted underneath. The donate
	  card keeps its own colour deliberately -- it is the one thing here asking
	  to be clicked.
	*/
	main {
		background-color: #ffe9e9;
		width: 100%;
		flex: 1 0 auto;
		display: flex;
		justify-content: center;
	}

	.results {
		width: 86%;
		max-width: 360px;
		padding-top: 1.5rem;
		text-align: center;
	}

	.outcome-icon {
		width: 44px;
		height: 44px;
		object-fit: contain;
		margin: 2.25rem auto 0.75rem auto;
		display: block;
	}

	.headline {
		font-family: 'Playfair Display', serif;
		font-size: 27px;
		font-weight: 700;
		line-height: 1.2;
		color: black;
		margin: 0 0 1.75rem 0;
	}

	.block {
		margin-bottom: 2rem;
	}

	.label {
		text-transform: uppercase;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 1px;
		color: black;
		margin: 0;
	}

	.time {
		font-size: 46px;
		font-weight: 800;
		letter-spacing: -1px;
		margin: 6px 0 0 0;
		color: black;
		font-variant-numeric: tabular-nums;
	}

	.time.gave-up {
		font-size: 30px;
		color: #df5468;
	}

	.body-text {
		font-size: 18px;
		line-height: 1.45;
		color: black;
		margin-top: 6px;
	}

	.solution a {
		color: black;
		text-decoration: underline;
		text-transform: capitalize;
	}

	.share-button {
		background-image: linear-gradient(to bottom, #ff4f87, #fc2f4f);
		color: white;
		border: none;
		border-radius: 999px;
		width: 60%;
		max-width: 240px;
		height: 54px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		margin: 0.5rem auto 1.75rem auto;
	}

	.share-button i {
		font-size: 15px;
	}

	/* ---- leaderboards, blended into the page ---- */

	.board-block {
		margin-bottom: 2.75rem;
		text-align: left;
	}

	/* The leaderboard follows the share button, so it needs room to read as a new
	   part of the page rather than a continuation of the results. */
	.board-block-lead {
		padding-top: 1.75rem;
	}

	.badge-new {
		padding: 3px 9px;
		border-radius: 6px;
		background-color: #fc365a;
		color: white;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.5px;
		text-transform: uppercase;
	}

	/* Badge, title and a line of copy stacked as one centred block, with the help
	   button held out at the top right. Equal `1fr` side columns keep the block
	   centred in the section whatever width the button takes. */
	.board-title {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		column-gap: 12px;
		margin-bottom: 1.1rem;
	}

	.board-heading {
		grid-column: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 7px;
		text-align: center;
	}

	.board-name {
		font-size: 30px;
		font-weight: 800;
		line-height: 1.1;
		letter-spacing: -0.5px;
		color: black;
		margin: 0;
	}

	.board-blurb {
		font-size: 17px;
		line-height: 1.3;
		color: black;
		margin: 0;
	}

	/* The two numbers are the whole point of the sentence. */
	.board-blurb b {
		color: #fc365a;
	}

	.board-help {
		grid-column: 3;
		align-self: start;
		justify-self: end;
		display: block;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		color: #b09a9d;
		font-size: 19px;
		line-height: 1;
	}

	.board {
		list-style: none;
		margin: 0.9rem 0 0 0;
		padding: 0;
	}

	.gap {
		text-align: center;
		color: #c4aeb1;
		letter-spacing: 2px;
		padding: 4px 0;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
	}

	.muted {
		color: #8a7477;
		font-size: 14px;
		margin: 10px 0 0 0;
	}

	.standing {
		padding-top: 10px;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
	}

	/* Serif subtitle and a full-width pill, sitting straight under the headline
	   so the ask lands before the player scrolls into the results. */
	.signup-cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
		margin: 0 0 2.5rem 0;
	}

	.signup-sub {
		font-family: 'Playfair Display', serif;
		font-size: 17px;
		line-height: 1.35;
		color: black;
		margin: 0;
	}

	.signup-button {
		display: block;
		width: 100%;
		padding: 15px 16px;
		border-radius: 999px;
		background-image: linear-gradient(to bottom, #ff4f87, #fc2f4f);
		color: white;
		text-decoration: none;
		font-size: 16px;
		font-weight: 600;
	}

	.signup-button:hover {
		text-decoration: none;
	}

	.signup-login {
		font-size: 14px;
		color: black;
		text-decoration: underline;
	}

	/* Sits under the board's sign-in line, so it picks up the same size and
	   colour as that copy -- icon left, text to its right. */
	.all-time-trigger {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 12px;
		width: 100%;
		margin: 1.1rem 0 0 0;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
		font-size: 14px;
		line-height: 1.45;
		color: black;
		text-align: left;
	}

	.all-time-trigger span {
		min-width: 0;
	}

	.trigger-icon {
		width: 32px;
		height: 32px;
		object-fit: contain;
		flex-shrink: 0;
		display: block;
	}

	.trigger-link {
		text-decoration: underline;
		font-weight: 600;
		white-space: nowrap;
	}

	/* Matches `.all-time-trigger`, with the player's own face as the icon. */
	.profile-trigger {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 12px;
		width: 100%;
		/* No bottom margin: the leaderboard's own top padding is the gap below the
		   rule, and it matches the share button's margin above it. */
		margin: 0;
		padding: 0.95rem 0;
		border: none;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
		border-bottom: 1px solid rgba(0, 0, 0, 0.08);
		background: none;
		cursor: pointer;
		font-size: 14px;
		line-height: 1.45;
		color: black;
		text-align: left;
	}

	.profile-trigger span {
		min-width: 0;
	}

	.profile-trigger .trigger-icon {
		border-radius: 50%;
	}

	.sign-off {
		margin-top: 2rem;
		text-align: center;
	}

	.tagline {
		font-size: 12px;
		color: black;
	}

	.thanks {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 7px;
		margin: 8px 0 0 0;
		font-size: 14px;
		color: black;
	}

	.help-list {
		margin: 0;
		padding-left: 1.1rem;
		font-size: 14px;
		line-height: 1.5;
		color: #444;
	}

	.help-list li + li {
		margin-top: 0.8rem;
	}
</style>
