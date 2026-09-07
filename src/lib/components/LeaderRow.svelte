<script lang="ts">
	import { avatarSrc } from '$lib/images/avatars';

	export let rank: number;
	export let name: string;
	export let avatar: number;
	/** Formatted time, or a games-played count. */
	export let value: string;
	export let isYou = false;

	/** Podium places get a star medal; everyone else a plain number. */
	$: medal = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';

	/* Point lists are shared by all three medals -- only the palette and the
	   outer shape change between them. */
	const SCALLOP =
		'16.00,0.80 19.26,3.83 23.60,2.84 24.91,7.09 29.16,8.40 28.17,12.74 31.20,16.00 28.17,19.26 29.16,23.60 24.91,24.91 23.60,29.16 19.26,28.17 16.00,31.20 12.74,28.17 8.40,29.16 7.09,24.91 2.84,23.60 3.83,19.26 0.80,16.00 3.83,12.74 2.84,8.40 7.09,7.09 8.40,2.84 12.74,3.83';
	const STAR =
		'16.00,9.20 17.73,13.61 22.47,13.90 18.81,16.91 20.00,21.50 16.00,18.95 12.00,21.50 13.19,16.91 9.53,13.90 14.27,13.61';
</script>

<li class="row" class:is-you={isYou}>
	{#if medal}
		<svg class="medal {medal}" viewBox="0 0 32 32" role="img">
			<title>{rank === 1 ? '1st' : rank === 2 ? '2nd' : '3rd'} place</title>
			{#if medal === 'gold'}
				<polygon class="body" points={SCALLOP} />
			{:else}
				<circle class="body" cx="16" cy="16" r="15.2" />
			{/if}
			{#if medal === 'bronze'}
				<circle class="ring" cx="16" cy="16" r="13.4" />
			{/if}
			<circle class="face" cx="16" cy="16" r="11.6" />
			<polygon class="star" points={STAR} />
		</svg>
	{:else}
		<span class="rank">{rank}</span>
	{/if}
	<img class="avatar" src={avatarSrc(avatar)} alt="" />
	<span class="name">{name}{isYou ? ' (you)' : ''}</span>
	<span class="value">{value}</span>
</li>

<style>
	.row {
		display: grid;
		grid-template-columns: 26px 28px 1fr auto;
		align-items: center;
		gap: 10px;
		padding: 8px 0;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
	}

	.rank {
		font-size: 12px;
		color: #b09a9d;
		font-variant-numeric: tabular-nums;
		text-align: center;
	}

	/*
	  The three podium badges are one design in three finishes: an outer body, a
	  darker inner face and a star. Only gold gets the scalloped edge, so first
	  place still reads as first at a glance when the row is skimmed.
	*/
	.medal {
		width: 26px;
		height: 26px;
		display: block;
	}

	.medal .star {
		fill: #fffdf4;
	}

	.medal.gold .body {
		fill: #f0c33f;
	}

	.medal.gold .face {
		fill: #d9a51e;
	}

	.medal.silver .body {
		fill: #dfe3e7;
	}

	.medal.silver .face {
		fill: #8e959d;
	}

	.medal.bronze .body {
		fill: #9c7420;
	}

	/* A thin gold band between the bronze body and its face, so third place has
	   some warmth against the pink instead of reading as flat brown. */
	.medal.bronze .ring {
		fill: #e3bb4b;
	}

	.medal.bronze .face {
		fill: #7d5a13;
	}

	.avatar {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		object-fit: cover;
		display: block;
	}

	.name {
		font-weight: 500;
		color: black;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.value {
		font-size: 14px;
		color: #444;
		font-variant-numeric: tabular-nums;
	}

	.row.is-you .name,
	.row.is-you .value {
		font-weight: 700;
		color: #fc2f4f;
	}
</style>
