<script lang="ts">
	import { onMount } from 'svelte';

	import Stats from '$lib/components/Stats.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import PromotionLink from '$lib/components/PromotionLink.svelte';
	import Modal from '$lib/components/Modal.svelte';

	import { notifications } from '$lib/utils/notifications';
	import { formatDuration } from '$lib/utils/time';
	import { calculateEmoji } from '$lib/utils/emojiStreak';
	import { avatarSrc } from '$lib/images/avatars';
	import {
		today as loadDailyBoard,
		allTime as loadAllTimeBoard
	} from '$lib/services/leaderboardService';
	import { profileStore, profileLoading } from '$lib/stores/profileStore';
	import { Event, track } from '$lib/services/analytics';

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

	$: profile = $profileStore;
	$: loadingProfile = $profileLoading;
	$: streakEmoji = profile ? calculateEmoji(profile.streak) : '';
	$: displayTime = formatDuration(result.elapsedSeconds);

	/**
	 * The day's verdict: icon, accent colour and one-line slogan. Replaces the
	 * old illustrated banner, which sat awkwardly above the card stack.
	 */
	$: outcome = returning
		? {
				icon: 'fa-solid fa-mug-hot',
				color: '#7F81A8',
				text: 'Welcome back looper!'
			}
		: result.gaveUp
			? {
					icon: 'fa-regular fa-face-sad-tear',
					color: '#DF5468',
					text: 'Oh no, you gave up. Try again tomorrow!'
				}
			: result.globalStats.isUnderAverage
				? {
						icon: 'fa-solid fa-bolt',
						color: '#E09029',
						text: "Congratulations speedster \u2014 you're under today's average!"
					}
				: {
						icon: 'fa-solid fa-hourglass-half',
						color: '#9A9A9A',
						text: "Not your fastest \u2014 you're over today's average."
					};
	/** Player has a time but sits below the top list, so needs the "..." section. */
	$: outsideTop = !!leaderboard?.you && leaderboard.you.rank > leaderboard.top.length;

	onMount(async () => {
		loadAd();

		// Two independent boards -- fetched together, and one failing must not
		// blank the other.
		const [daily, allTimeResult] = await Promise.allSettled([
			loadDailyBoard(),
			loadAllTimeBoard(10)
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
	});

	function loadAd() {
		window.aiptag?.cmd.display.push(() => {
			window.aipDisplayTag?.display('theletterloop-com_300x50');
		});
	}

	async function share() {
		track(Event.ShareClicked, { gaveUp: result.gaveUp, ranked: !!leaderboard?.you });

		const rank = leaderboard?.you ? ` (#${leaderboard.you.rank} today)` : '';
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
			notifications.default('Error', 1000);
		}
	}

	function dictionaryUrl(word: string) {
		return `https://www.merriam-webster.com/dictionary/${word}`;
	}
</script>

<main>
	<div class="centered-container">
		<Toast />

		<div id="theletterloop-com_300x50">
			<!-- JS Ad Injection -->
		</div>

		<div class="gameover-container">
			<!-- 1. Solved in -->
			<div class="panel">
				<div class="panel-body">
					<p class="outcome" style="--accent: {outcome.color}">
						<i class={outcome.icon} aria-hidden="true"></i>
						<span>{outcome.text}</span>
					</p>

					<div class="panel-section">
						<p class="small-header">Solved in</p>
						{#if result.gaveUp}
							<h1 class="time-text gave-up">Gave up</h1>
						{:else}
							<h1 class="time-text">{displayTime}</h1>
						{/if}
					</div>

					<div class="panel-section">
						<span class="small-header">Global Stats</span>
						<Stats globalStats={result.globalStats} />
					</div>

					<div class="panel-section">
						<span class="small-header">Today's Solution</span>
						<p>
							<a href={dictionaryUrl(result.solution.primary)} target="_blank" rel="noreferrer">
								{result.solution.primary}
							</a>
							+
							<a href={dictionaryUrl(result.solution.secondary)} target="_blank" rel="noreferrer">
								{result.solution.secondary}
							</a>
						</p>
					</div>

					<button class="share-button" on:click={share}>SHARE YOUR TIME</button>
				</div>
			</div>

			<!-- 2. Today's fastest times, with the player's own placing -->
			<div class="panel">
				<div class="panel-body">
					<div class="card-head">
						<div>
							<p class="small-header">
								Today's Leaderboard
								<span class="badge-new">New</span>
							</p>
							<p class="card-note">Top 10 fastest times</p>
						</div>

						<button
							class="card-help"
							on:click={() => (showLeaderboardHelp = true)}
							aria-label="How the leaderboard works"
						>
							<i class="fa-regular fa-circle-question" aria-hidden="true"></i>
						</button>
					</div>

					{#if leaderboardError}
						<p class="muted">{leaderboardError}</p>
					{:else if !leaderboard}
						<p class="muted">Loading today's times...</p>
					{:else}
						{#if leaderboard.you}
							<p class="rank-line">
								<span class="rank-number">#{leaderboard.you.rank}</span>
								<span class="rank-of">of {leaderboard.total} today</span>
							</p>
						{/if}

						{#if leaderboard.top.length > 0}
							<ul class="board">
								{#each leaderboard.top as entry (entry.uid)}
									<li class="board-row" class:is-you={entry.uid === leaderboard.you?.uid}>
										<img class="board-avatar" src={avatarSrc(entry.avatar)} alt="" />
										<span class="board-name">
											{entry.name}{entry.uid === leaderboard.you?.uid ? ' (you)' : ''}
										</span>
										<span class="board-meta">
											<span class="board-rank">#{entry.rank}</span>
											<span class="board-time">{formatDuration(entry.elapsedSeconds)}</span>
										</span>
									</li>
								{/each}

								<!-- Outside the top 10: break, then the rows either side of you.
								     Ranked 11th needs no break -- the row above is the last one shown. -->
								{#if outsideTop && leaderboard.you}
									{#if leaderboard.you.rank > leaderboard.top.length + 1}
										<li class="board-gap" aria-hidden="true">&hellip;</li>
									{/if}

									{#if leaderboard.above && leaderboard.above.rank > leaderboard.top.length}
										<li class="board-row">
											<img class="board-avatar" src={avatarSrc(leaderboard.above.avatar)} alt="" />
											<span class="board-name">{leaderboard.above.name}</span>
											<span class="board-meta">
												<span class="board-rank">#{leaderboard.above.rank}</span>
												<span class="board-time"
													>{formatDuration(leaderboard.above.elapsedSeconds)}</span
												>
											</span>
										</li>
									{/if}

									<li class="board-row is-you">
										<span class="board-rank">{leaderboard.you.rank}</span>
										<span class="board-name">{leaderboard.you.name} (you)</span>
										<span class="board-meta">
											<span class="board-rank">#{leaderboard.you.rank}</span>
											<span class="board-time"
												>{formatDuration(leaderboard.you.elapsedSeconds)}</span
											>
										</span>
									</li>

									{#if leaderboard.below}
										<li class="board-row">
											<img class="board-avatar" src={avatarSrc(leaderboard.below.avatar)} alt="" />
											<span class="board-name">{leaderboard.below.name}</span>
											<span class="board-meta">
												<span class="board-rank">#{leaderboard.below.rank}</span>
												<span class="board-time"
													>{formatDuration(leaderboard.below.elapsedSeconds)}</span
												>
											</span>
										</li>
									{/if}
								{/if}
							</ul>
						{:else}
							<p class="muted">No one has finished today yet. Be the first!</p>
						{/if}

						{#if leaderboard.reason === 'not-signed-in'}
							<div class="signin-cta">
								<p class="signin-cta-text">Login to get your time on the leaderboard!</p>
								<p class="signin-cta-sub">
									It's free, and it saves your streak, average time and daily rank.
								</p>
								<a class="signin-cta-button" href="/auth">Login or Create account</a>
							</div>
						{:else if !leaderboard.you && result.gaveUp}
							<p class="muted signin-prompt">Finish a loop to get on today's leaderboard.</p>
						{/if}
					{/if}

					{#if profile || loadingProfile}
						<div class="your-stats">
							{#if loadingProfile}
								<span class="muted">Loading your stats...</span>
							{:else if profile}
								<div>
									<p class="small-header">Current Streak</p>
									<p class="stats-text">{streakEmoji} {profile.streak}</p>
								</div>
								<div>
									<p class="small-header">Historical Average</p>
									<p class="stats-text">{formatDuration(profile.averageTime)}</p>
								</div>
							{/if}
						</div>
					{/if}
				</div>
			</div>

			<!-- 3. Donation -->
			<PromotionLink />

			<!-- 4. Most games played, all time -->
			<div class="panel">
				<div class="panel-body">
					<p class="small-header">Top 10 Loopers</p>
					<p class="card-note">Most games played, all time</p>

					{#if allTimeError}
						<p class="muted">{allTimeError}</p>
					{:else if allTime && allTime.top.length > 0}
						<ul class="board">
							{#each allTime.top as entry (entry.uid)}
								<li
									class="board-row"
									class:is-you={entry.gamesPlayed === allTime.yourGamesPlayed &&
										entry.rank === allTime.yourRank}
								>
									<img class="board-avatar" src={avatarSrc(entry.avatar)} alt="" />
									<span class="board-name">{entry.name}</span>
									<span class="board-meta">
										<span class="board-rank">#{entry.rank}</span>
										<span class="board-time">{entry.gamesPlayed} games</span>
									</span>
								</li>
							{/each}
						</ul>

						{#if allTime.yourRank && allTime.yourRank > allTime.top.length}
							<p class="card-note your-standing">
								You're <b>#{allTime.yourRank}</b> with {allTime.yourGamesPlayed} games played.
							</p>
						{/if}
					{:else if allTime}
						<p class="muted">No loopers yet.</p>
					{:else}
						<p class="muted">Loading...</p>
					{/if}
				</div>
			</div>

			<div class="block-spacer-100"></div>
		</div>
	</div>
</main>

<Modal
	bind:showModal={showLeaderboardHelp}
	modalType="leaderboard-help"
	title="How the leaderboard works"
	subtitle="Everyone is timed the same way."
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

<style>
	main {
		background-color: #ffe9e9 !important;
		width: 100%;
		height: min-content;
	}

	.gameover-container {
		max-width: 400px;
		width: 85%;
	}

	.panel-section {
		margin-bottom: 1rem;
	}

	.panel-section p {
		margin: 5px 0 0 0;
	}

	.outcome {
		display: flex;
		align-items: center;
		gap: 9px;
		margin: 0 0 1.1rem 0;
		padding-bottom: 0.9rem;
		border-bottom: 1px solid #eee;
		font-size: 14px;
		font-weight: 600;
		line-height: 1.3;
		color: #333;
	}

	.outcome i {
		color: var(--accent);
		font-size: 17px;
		flex-shrink: 0;
	}

	.time-text {
		font-size: 40px;
		font-weight: 700;
		margin: 4px 0 0 0;
		text-align: left;
	}

	.time-text.gave-up {
		font-size: 26px;
		color: #df5468;
	}

	.stats-text {
		font-size: 25px;
		font-weight: 700;
		margin: 4px 0 0 0;
		text-align: left;
	}

	.share-button {
		background-image: -webkit-linear-gradient(top, #ff4f87, #fc2f4f);
		background-image: linear-gradient(to bottom, #ff4f87, #fc2f4f);
		color: white;
		border-radius: 20px;
		width: 100%;
		height: 70px;
		border: none;
		text-transform: uppercase;
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 1px;
		cursor: pointer;
	}

	.rank-line {
		display: flex;
		align-items: baseline;
		gap: 8px;
		margin: 6px 0 0 0;
	}

	.rank-number {
		font-size: 40px;
		font-weight: 700;
		line-height: 1;
	}

	.rank-of {
		font-size: 13px;
		color: #888;
	}

	.board {
		list-style: none;
		margin: 1rem 0 0 0;
		padding: 0;
	}

	.board-row {
		display: grid;
		grid-template-columns: 28px 1fr auto;
		align-items: center;
		gap: 10px;
		padding: 7px 0;
		border-top: 1px solid #eee;
	}

	.board-avatar {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		object-fit: cover;
		display: block;
	}

	.board-meta {
		display: flex;
		align-items: baseline;
		gap: 8px;
	}

	.board-rank {
		font-size: 12px;
		color: #aaa;
		font-variant-numeric: tabular-nums;
	}

	.board-name {
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.board-time {
		font-variant-numeric: tabular-nums;
		font-size: 14px;
		color: #444;
	}

	.board-row.is-you {
		background-color: #fff3f5;
		border-radius: 8px;
		margin: 0 -8px;
		padding-left: 8px;
		padding-right: 8px;
	}

	.board-row.is-you .board-name,
	.board-row.is-you .board-time {
		font-weight: 700;
		color: #fc2f4f;
	}

	.your-stats {
		display: flex;
		gap: 20px;
		margin-top: 1.25rem;
		padding-top: 1rem;
		border-top: 1px solid #eee;
	}

	.muted {
		color: #777;
		font-size: 14px;
		margin: 8px 0 0 0;
	}

	.signin-prompt {
		margin-top: 12px;
	}

	/* Signed-out players see the board but have no row on it, so the ask needs
	   to be a real call to action rather than a footnote. Sits directly on the
	   card -- a panel inside a panel reads as a separate, unrelated thing. */
	.signin-cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 6px;
		margin-top: 1.5rem;
	}

	.signin-cta-text {
		margin: 0;
		font-size: 17px;
		font-weight: 600;
		line-height: 1.3;
		color: #222;
	}

	.signin-cta-sub {
		margin: 0 0 6px 0;
		font-size: 13px;
		line-height: 1.45;
		color: #888;
	}

	.signin-cta-button {
		display: block;
		width: 100%;
		padding: 13px 16px;
		border-radius: 20px;
		background-image: linear-gradient(to bottom, #ff4f87, #fc2f4f);
		color: white;
		text-decoration: none;
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	.signin-cta-button:hover {
		text-decoration: none;
		opacity: 0.92;
	}

	.board-gap {
		text-align: center;
		color: #bbb;
		letter-spacing: 2px;
		padding: 4px 0;
		border-top: 1px solid #eee;
	}

	.card-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 12px;
	}

	.badge-new {
		display: inline-block;
		margin-left: 6px;
		padding: 2px 7px;
		border-radius: 999px;
		background-color: #2f6fed;
		color: white;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		vertical-align: middle;
	}

	.card-help {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		color: #b0b0b0;
		font-size: 17px;
		line-height: 1;
		flex-shrink: 0;
	}

	.card-help:hover {
		color: #666;
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

	.card-note {
		font-size: 12px;
		color: #888;
		margin: 4px 0 0 0;
	}

	.your-standing {
		margin-top: 12px;
		padding-top: 10px;
		border-top: 1px solid #eee;
		font-size: 13px;
		color: #555;
	}
</style>
