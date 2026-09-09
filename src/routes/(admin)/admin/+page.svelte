<script lang="ts">
	/**
	 * The whole admin portal, on one page.
	 *
	 * Scheduling a loop and seeing the queue are the same job -- you pick words
	 * *because* the queue is running out -- so they read as one column rather than
	 * two pages behind a sidebar.
	 */
	import { onDestroy, onMount, tick } from 'svelte';
	import { Heart, Hourglass, Puzzle, Shuffle, Users, type Icon } from 'lucide-svelte';

	import DictionaryLink from '$lib/components/DictionaryLink.svelte';
	import {
		primaryOptions,
		secondaryOptions,
		scheduleLoop,
		wordUsage,
		upcomingLoops,
		type ScheduledLoop
	} from '$lib/services/adminService';
	import { getTodaysStats } from '$lib/services/statsService';
	import { formatDayKey, todayKey } from '$lib/utils/gameDate';
	import type { GlobalStats } from '$lib/models/globalStats';

	import { profileStore } from '$lib/stores/profileStore';

	import hartBunny from '$lib/images/hart_bunny.png';

	// ---- the generator ----
	let selectedPrimary: string | null = null;
	let selectedSecondary: string | null = null;
	let primaryWords: string[] = [];
	let secondaryWords: string[] = [];

	let showSWords = false;
	let submitting = false;
	let errorMessage = '';
	let scheduled: ScheduledLoop | null = null;

	let primaryUsage: number | null = null;
	let secondaryUsage: number | null = null;
	let loadingUsage = false;

	// ---- the queue ----
	let loops: ScheduledLoop[] = [];
	let loopsError = '';
	let loadingLoops = true;

	// ---- the status strip ----
	let stats: GlobalStats | null = null;

	/**
	 * The strip types itself out once the day's numbers have landed.
	 *
	 * It is built as segments rather than a string because the values sit in
	 * pills and the labels are separated by icons -- `revealed` then hands back
	 * however much of that has been "typed" so far, cutting the segment the
	 * caret is currently inside.
	 */
	type Segment = {
		kind: 'icon' | 'text' | 'pill' | 'ghost' | 'burst' | 'underline';
		/** Empty for icons, which carry `icon` instead and count as one character. */
		value: string;
		icon?: typeof Icon;
	};

	const TYPE_MS = 16;
	const TYPE_LEAD_IN_MS = 150;

	let typed = 0;
	let typing = false;
	let timer: ReturnType<typeof setTimeout> | undefined;

	const today = todayKey();

	$: profile = $profileStore;
	$: selectionComplete = !!selectedPrimary && !!selectedSecondary;
	$: runsOut = loops.length > 0 ? formatDayKey(loops[loops.length - 1].dayKey) : '';
	/* `upcoming()` starts from yesterday, so today's puzzle is already in the
	   queue we fetched -- no second call to read out the answer. */
	$: todaysLoop = loops.find((loop) => loop.dayKey === today) ?? null;
	$: todayParts = dateParts(today);

	$: segments = buildStatus(todayParts, todaysLoop, stats, loops);
	$: totalChars = segments.reduce((count, segment) => count + length(segment), 0);
	$: shown = revealed(segments, typed);
	// Scheduling a loop rewrites the line after it has already been typed; it
	// should just be there, not stutter through a second performance.
	$: if (!typing && typed > 0) typed = totalChars;

	onMount(async () => {
		shufflePrimaryWords();
		await Promise.allSettled([loadQueue(), loadStats()]);
		await tick();
		startTyping();
	});

	onDestroy(() => clearTimeout(timer));

	function length(segment: Segment): number {
		return segment.kind === 'icon' ? 1 : segment.value.length;
	}

	function buildStatus(
		date: ReturnType<typeof dateParts>,
		loop: ScheduledLoop | null,
		today: GlobalStats | null,
		queue: ScheduledLoop[]
	): Segment[] {
		const solution: Segment[] = loop
			? [
					{ kind: 'pill', value: loop.primary },
					{ kind: 'text', value: ' + ' },
					{ kind: 'pill', value: loop.secondary }
				]
			: [{ kind: 'ghost', value: 'no loop set' }];

		const runsOutOn: Segment[] =
			queue.length > 0
				? [{ kind: 'underline', value: shortDay(queue[queue.length - 1].dayKey) }]
				: [{ kind: 'ghost', value: 'nothing queued' }];

		return [
			{ kind: 'text', value: `${date.weekday} ` },
			{ kind: 'ghost', value: date.day },
			{ kind: 'text', value: ` ${date.month} ` },
			{ kind: 'ghost', value: date.year },
			{ kind: 'icon', value: '', icon: Puzzle },
			{ kind: 'text', value: ' Today ' },
			...solution,
			{ kind: 'icon', value: '', icon: Users },
			{ kind: 'text', value: ' ' },
			{ kind: 'burst', value: today ? today.count.toLocaleString() : '--' },
			{ kind: 'text', value: ' looped today ' },
			{ kind: 'icon', value: '', icon: Hourglass },
			{ kind: 'text', value: ' Loops run out ' },
			...runsOutOn
		];
	}

	/** The first `count` characters of the line, mid-segment cuts included. */
	function revealed(all: Segment[], count: number): Segment[] {
		const out: Segment[] = [];
		let left = count;

		for (const segment of all) {
			if (left <= 0) break;

			const size = length(segment);
			if (size <= left) {
				out.push(segment);
				left -= size;
			} else {
				out.push({ ...segment, value: segment.value.slice(0, left) });
				left = 0;
			}
		}

		return out;
	}

	function startTyping() {
		// Someone who has asked for less motion gets the finished line.
		if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
			typed = totalChars;
			return;
		}

		typing = true;
		typed = 0;

		const step = () => {
			typed += 1;
			if (typed >= totalChars) {
				typing = false;
				return;
			}
			timer = setTimeout(step, TYPE_MS);
		};

		timer = setTimeout(step, TYPE_LEAD_IN_MS);
	}

	async function loadStats() {
		try {
			stats = await getTodaysStats();
		} catch {
			// The strip simply shows a dash. Nothing here is worth an alert.
		}
	}

	/** "MON 08 SEP" -- split so the day number can sit in its own pill. */
	function dateParts(dayKey: string) {
		const [month, day, year] = dayKey.split('-').map(Number);
		const date = new Date(Date.UTC(year, month - 1, day));
		const label = (option: Intl.DateTimeFormatOptions) =>
			date.toLocaleDateString('en-US', { timeZone: 'UTC', ...option });

		return {
			weekday: label({ weekday: 'short' }).toUpperCase(),
			day: String(day).padStart(2, '0'),
			month: label({ month: 'short' }).toUpperCase(),
			year: String(year)
		};
	}

	/** "SEP 30" -- the queue's last day, short enough for a pill. */
	function shortDay(dayKey: string) {
		const { month, day } = dateParts(dayKey);
		return `${month} ${day}`;
	}

	async function loadQueue() {
		loadingLoops = true;
		try {
			loops = await upcomingLoops();
			loopsError = '';
		} catch (error) {
			loopsError = error instanceof Error ? error.message : 'Could not load loops.';
		} finally {
			loadingLoops = false;
		}
	}

	async function handleSubmit() {
		if (!selectedPrimary || !selectedSecondary) return;

		submitting = true;
		errorMessage = '';

		try {
			// The server re-validates the loop and picks the date, so two editors
			// submitting at once cannot both claim the same slot.
			scheduled = await scheduleLoop(selectedPrimary, selectedSecondary);

			selectedPrimary = null;
			selectedSecondary = null;
			secondaryWords = [];
			primaryUsage = null;
			secondaryUsage = null;

			// The queue just changed, and it is the next thing on the page.
			await loadQueue();
		} catch (error) {
			errorMessage = error instanceof Error ? error.message : 'Could not schedule the loop.';
		} finally {
			submitting = false;
		}
	}

	async function primarySelected(word: string) {
		selectedPrimary = word;
		selectedSecondary = null;
		primaryUsage = null;
		secondaryUsage = null;
		secondaryWords = await secondaryOptions(word);
	}

	async function secondarySelected(word: string) {
		selectedSecondary = word;

		loadingUsage = true;
		[primaryUsage, secondaryUsage] = await Promise.all([
			wordUsage(selectedPrimary ?? ''),
			wordUsage(word)
		]);
		loadingUsage = false;
	}

	async function shufflePrimaryWords() {
		primaryWords = await primaryOptions(5, showSWords);
	}
</script>

<svelte:head>
	<title>Admin Looper · LetterLoop</title>
</svelte:head>

<h1>Hello {profile?.name ?? 'Looper'}</h1>

<p class="intro">
	Loops are scheduled in order, one per day. Once you submit, it lands on the first free day at the
	end of the queue below.
</p>

<!--
	The day at a glance, in the shape of a watch face: one mono sentence with the
	numbers that matter set in pills, typed out on arrival so the whole state of
	the game reads in one pass before any of the controls below it.
-->
<p class="status" class:typing aria-live="polite">
	{#each shown as segment, index (index)}
		{#if segment.kind === 'icon'}
			<svelte:component this={segment.icon} class="line-icon" size={15} aria-hidden="true" />
		{:else if segment.kind === 'text'}{segment.value}{:else if segment.kind === 'underline'}<span
				class="underline">{segment.value}</span
			>{:else if segment.kind === 'burst'}<span class="burst">{segment.value}</span>{:else}<span
				class="pill"
				class:ghost={segment.kind === 'ghost'}>{segment.value}</span
			>{/if}
	{/each}
</p>

<!-- ---- new loop ---- -->
<section class="card">
	<h2>New Loop</h2>
	<p class="card-sub">Pick a first word, then a word that closes the loop.</p>

	{#if scheduled}
		<p class="flash good">
			Scheduled <b>{scheduled.primary}</b> + <b>{scheduled.secondary}</b> for
			<b>{formatDayKey(scheduled.dayKey)}</b>
		</p>
	{/if}

	{#if errorMessage}
		<p class="flash bad">{errorMessage}</p>
	{/if}

	<label class="toggle">
		<input type="checkbox" bind:checked={showSWords} on:change={shufflePrimaryWords} />
		<span>Show S words (Henry <i>hates</i> S words)</span>
	</label>

	<p class="step">First word</p>
	<div class="chips">
		{#each primaryWords as word (word)}
			<button
				class="chip"
				class:picked={selectedPrimary === word}
				on:click={() => primarySelected(word)}
			>
				{word}
			</button>
		{/each}

		<button class="chip shuffle" on:click={shufflePrimaryWords}>
			<Shuffle size={14} aria-hidden="true" />
			Shuffle
		</button>
	</div>

	{#if selectedPrimary}
		<p class="step">Second word</p>
		{#if secondaryWords.length > 0}
			<div class="chips">
				{#each secondaryWords as word (word)}
					<button
						class="chip"
						class:picked={selectedSecondary === word}
						on:click={() => secondarySelected(word)}
					>
						{word}
					</button>
				{/each}
			</div>
		{:else}
			<p class="empty">Nothing closes the loop with <b>{selectedPrimary}</b>. Try another word.</p>
		{/if}
	{/if}

	<div class="selection">
		<p class="selection-label">Current selection</p>
		{#if selectedPrimary && selectedSecondary}
			<p class="selection-words">
				<DictionaryLink word={selectedPrimary} /> + <DictionaryLink word={selectedSecondary} />
			</p>
			<p class="usage">
				{#if loadingUsage}
					Counting past appearances...
				{:else}
					Used before: <b>{primaryUsage}</b>
					&times; {selectedPrimary} &middot; <b>{secondaryUsage}</b>
					&times; {selectedSecondary}
				{/if}
			</p>
		{:else if selectedPrimary}
			<p class="selection-words"><DictionaryLink word={selectedPrimary} /> + ?</p>
			<p class="usage">Pick a second word to see how often these have run.</p>
		{:else}
			<p class="selection-words muted">Nothing picked yet</p>
		{/if}
	</div>

	<button class="lift" disabled={!selectionComplete || submitting} on:click={handleSubmit}>
		{submitting ? 'Scheduling...' : 'Schedule this loop'}
	</button>
</section>

<!-- ---- the queue ---- -->
<section class="card">
	<h2>Upcoming Loops</h2>

	{#if loopsError}
		<p class="flash bad">{loopsError}</p>
	{:else if loadingLoops}
		<p class="card-sub">Loading the queue...</p>
	{:else if loops.length > 0}
		<p class="card-sub">
			{loops.length} scheduled &middot; loops run out on <b>{runsOut}</b>
		</p>

		<ul class="queue">
			{#each loops as loop (loop.dayKey)}
				<li>
					<span class="when">
						{formatDayKey(loop.dayKey)}
						{#if loop.dayKey === today}
							<span class="today">Today</span>
						{/if}
					</span>
					<span class="words">{loop.primary} + {loop.secondary}</span>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="card-sub">Nothing is scheduled. Hart is not going to be happy.</p>
	{/if}
</section>

<!-- ---- the boss ---- -->
<footer class="tribute">
	<img class="bunny" src={hartBunny} alt="Hartley Zook" />
	<i class="powered">Powered by Hartley Zook</i>
	<p class="thanks">
		<Heart size={13} class="heart" aria-hidden="true" />
		Thank you for everything you do
	</p>
</footer>

<style>
	h1 {
		font-size: 30px;
		font-weight: 800;
		letter-spacing: -0.5px;
		line-height: 1.1;
		color: black;
		margin: 0;
		text-align: left;
	}

	.intro {
		font-size: 15px;
		line-height: 1.55;
		color: #4a3a3c;
		margin: 0.7rem 0 1.5rem 0;
	}

	/* One running sentence rather than a table of rows: it wraps like prose, with
	   the icons acting as punctuation between the four facts and the values that
	   change set in pills. `line-height` carries the pills' extra height. */
	.status {
		font-family: var(--font-mono);
		font-size: 15px;
		font-weight: 500;
		line-height: 2;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		color: #3a2c2e;
		margin: 0 0 1.6rem 0;
		/* The spacing between facts lives in the typed text itself now. */
		white-space: pre-wrap;
		/* Holds the block's height while it is still filling up, so the cards
		   below do not shuffle down line by line. */
		min-height: 4.5rem;
	}

	.status.typing::after {
		content: '';
		display: inline-block;
		width: 8px;
		height: 15px;
		margin-left: 2px;
		background-color: #fc365a;
		vertical-align: -2px;
		animation: blink 0.9s steps(1, end) infinite;
	}

	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		50.01%,
		100% {
			opacity: 0;
		}
	}

	/* Component-rendered, so the class lands outside this file's scope. Inline
	   so it sits in the run of text rather than breaking the line. */
	.status :global(.line-icon) {
		display: inline;
		vertical-align: -3px;
		color: #d1848f;
		margin: 0 2px 0 8px;
	}

	/* The first icon opens the sentence, so it needs no air in front of it. */
	.status :global(.line-icon:first-child) {
		margin-left: 0;
	}

	.pill {
		display: inline-block;
		padding: 2px 11px;
		border-radius: 999px;
		background-color: white;
		color: #2b2022;
		font-weight: 700;
		white-space: nowrap;
	}

	/* For the values that are absent or still arriving -- present, but not
	   claiming to be news. */
	.pill.ghost {
		background-color: rgba(255, 255, 255, 0.6);
		color: #9a8386;
		font-weight: 600;
	}

	/* The day's headline number, so it gets the comic-book treatment: a spiked
	   burst clipped out of a solid block. The polygon is in percentages, so it
	   stretches with however many digits the count runs to. */
	.burst {
		display: inline-block;
		padding: 12px 24px;
		background-color: white;
		color: #2b2022;
		font-weight: 700;
		white-space: nowrap;
		/* Thirteen long points -- enough to read as a burst, few enough that each
		   spike is its own shape. */
		clip-path: polygon(
			50% 0%,
			58.1% 17%,
			73.2% 5.7%,
			72.5% 24.6%,
			91.1% 21.6%,
			81.8% 37.9%,
			99.6% 44%,
			83.8% 54.1%,
			96.8% 67.7%,
			78% 69.3%,
			83.2% 87.4%,
			65.8% 80.1%,
			62% 98.5%,
			50% 84%,
			38% 98.5%,
			34.2% 80.1%,
			16.8% 87.4%,
			22% 69.3%,
			3.2% 67.7%,
			16.2% 54.1%,
			0.4% 44%,
			18.2% 37.9%,
			8.9% 21.6%,
			27.5% 24.6%,
			26.8% 5.7%,
			41.9% 17%
		);
	}

	/* Underlined rather than pilled: it is a deadline, not a stat. */
	.underline {
		font-weight: 700;
		color: #2b2022;
		text-decoration: underline;
		text-underline-offset: 3px;
		white-space: nowrap;
	}

	/* The page signs off with the boss: portrait centred, then the credit. */
	.tribute {
		margin-top: 3rem;
		text-align: center;
	}

	.bunny {
		width: 60px;
		height: 60px;
		object-fit: contain;
		margin: 0 auto 0.6rem auto;
		display: block;
	}

	/* Same treatment as the game's own sign-off: italic 12px tagline over a
	   14px line with an icon beside it. */
	.powered {
		font-size: 12px;
		color: black;
	}

	.thanks {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		margin: 5px 0 0 0;
		font-size: 12px;
		color: black;
	}

	.thanks :global(.heart) {
		color: #fc365a;
	}

	/* Cards sit up off the pink rather than sitting in it -- the whole portal is
	   two stacked panels, so they carry the playfulness. */
	.card {
		background-color: white;
		border: 2px solid #f4d9dd;
		border-radius: 26px;
		padding: 24px 22px;
		margin-bottom: 1.75rem;
		box-shadow: 0 10px 0 -4px #ffd7de;
	}

	h2 {
		font-size: 18px;
		font-weight: 800;
		letter-spacing: -0.2px;
		color: black;
		margin: 0;
	}

	.card-sub {
		font-size: 14px;
		color: #8a7477;
		margin: 6px 0 0 0;
	}

	.step {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: #b0868c;
		margin: 1.5rem 0 0.6rem 0;
	}

	.toggle {
		display: flex;
		align-items: center;
		gap: 9px;
		margin-top: 1.1rem;
		font-size: 14px;
		color: #4a3a3c;
		cursor: pointer;
	}

	.toggle input {
		width: 17px;
		height: 17px;
		accent-color: #fc365a;
		cursor: pointer;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 9px;
	}

	/* Every button on the page is lifted: a hard shadow underneath that the
	   button presses down into when it is clicked. */
	.chip {
		border: 2px solid #f0d3d7;
		border-radius: 999px;
		background-color: white;
		padding: 9px 16px;
		font: inherit;
		font-size: 15px;
		font-weight: 600;
		color: #3a2c2e;
		text-transform: lowercase;
		cursor: pointer;
		box-shadow: 0 3px 0 #f4d9dd;
		transition:
			transform 0.08s ease,
			box-shadow 0.08s ease;
	}

	.chip:active {
		transform: translateY(3px);
		box-shadow: 0 0 0 #f4d9dd;
	}

	.chip.picked {
		background-image: linear-gradient(to bottom, #ff5793, #fc2f4f);
		border-color: #fc2f4f;
		color: white;
		box-shadow: 0 3px 0 #c9203c;
	}

	.chip.shuffle {
		border-style: dashed;
		color: #b0868c;
		box-shadow: none;
	}

	.empty {
		font-size: 14px;
		color: #8a7477;
		margin: 0;
	}

	.selection {
		margin-top: 1.6rem;
		padding: 14px 16px;
		border-radius: 18px;
		background-color: #fff3f5;
	}

	.selection-label {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: #b0868c;
		margin: 0;
	}

	.selection-words {
		font-size: 20px;
		font-weight: 700;
		color: black;
		margin: 4px 0 0 0;
	}

	.selection-words.muted {
		color: #b0868c;
		font-weight: 500;
	}

	.selection-words :global(a) {
		color: black;
		text-decoration: underline;
	}

	.usage {
		font-size: 13px;
		color: #8a7477;
		margin: 6px 0 0 0;
	}

	.usage b {
		color: #fc365a;
	}

	.lift {
		display: block;
		width: 100%;
		margin-top: 1.6rem;
		padding: 15px 16px;
		border: none;
		border-radius: 999px;
		background-image: linear-gradient(to bottom, #ff4f87, #fc2f4f);
		color: white;
		font: inherit;
		font-size: 16px;
		font-weight: 700;
		cursor: pointer;
		box-shadow: 0 5px 0 #c9203c;
		transition:
			transform 0.08s ease,
			box-shadow 0.08s ease;
	}

	.lift:active:not(:disabled) {
		transform: translateY(5px);
		box-shadow: 0 0 0 #c9203c;
	}

	.lift:disabled {
		background-image: none;
		background-color: #e8d5d8;
		color: #a9979a;
		box-shadow: 0 5px 0 #dcc4c8;
		cursor: default;
	}

	.flash {
		margin: 1.1rem 0 0 0;
		padding: 12px 14px;
		border-radius: 16px;
		font-size: 14px;
		line-height: 1.4;
	}

	.flash.good {
		background-color: #e7f7ee;
		color: #1c6b41;
	}

	.flash.bad {
		background-color: #ffe4e8;
		color: #b3213b;
	}

	.queue {
		list-style: none;
		margin: 1.1rem 0 0 0;
		padding: 0;
	}

	.queue li {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 14px;
		padding: 11px 0;
		border-top: 2px dotted #f4d9dd;
	}

	.when {
		font-size: 14px;
		color: #8a7477;
	}

	/* Marks the row that is live right now, so the queue has an obvious "you are
	   here" between yesterday's row and the rest. */
	.today {
		display: inline-block;
		margin-left: 7px;
		padding: 2px 8px;
		border-radius: 6px;
		background-color: #fc365a;
		color: white;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		vertical-align: 1px;
	}

	.words {
		font-size: 16px;
		font-weight: 700;
		color: black;
		text-transform: lowercase;
	}
</style>
