<script lang="ts">
	/**
	 * The one pressable thing in the app.
	 *
	 * Every variant is "lifted": a solid shadow under the control that it presses
	 * down into when used, travelling exactly the shadow's own height so it looks
	 * like it bottoms out. The distances and colours come from the tokens in
	 * `styles.css` -- see the style guide block there.
	 *
	 * Renders an `<a>` when given an `href`, so a link that looks like a button
	 * still behaves like a link.
	 */

	/**
	 * `solid` -- the page's main action, brand gradient.
	 * `ghost` -- the same weight as solid but unfilled, for a menu of equals.
	 * `outline` -- a choice among several, white until picked.
	 * `quiet` -- text with a press, for anything secondary.
	 */
	export let variant: 'solid' | 'ghost' | 'outline' | 'quiet' = 'solid';
	export let size: 'md' | 'sm' = 'md';
	/** Fills its container, for the bottom-of-a-card actions. */
	export let block = false;
	/** `outline` only: the picked one. */
	export let selected = false;
	export let disabled = false;
	export let type: 'button' | 'submit' = 'button';
	export let href: string | null = null;
	export let ariaLabel: string | null = null;

	/* Layout is the caller's business, so their class rides along with ours.

	   Every class is prefixed: `outline`, `block` and friends are also Tailwind
	   utility names, and its preflight would otherwise paint an outline ring on
	   a variant that only meant "not filled in". */
	$: classes = [
		'btn',
		`btn-${variant}`,
		`btn-${size}`,
		block ? 'btn-block' : '',
		selected ? 'is-selected' : ''
	]
		.filter(Boolean)
		.join(' ');
</script>

{#if href}
	<a class="{classes} {$$props.class ?? ''}" {href} aria-label={ariaLabel} on:click>
		<slot />
	</a>
{:else}
	<button class="{classes} {$$props.class ?? ''}" {type} {disabled} aria-label={ariaLabel} on:click>
		<slot />
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 9px;
		border: none;
		border-radius: var(--radius-pill);
		font: inherit;
		font-weight: 700;
		line-height: 1.2;
		text-align: center;
		text-decoration: none;
		cursor: pointer;
		transition:
			transform var(--lift-ease),
			box-shadow var(--lift-ease);
	}

	.btn:hover {
		text-decoration: none;
	}

	.btn-md {
		padding: 15px 22px;
		font-size: 16px;
	}

	.btn-sm {
		padding: 9px 16px;
		font-size: 15px;
	}

	.btn-block {
		display: flex;
		width: 100%;
	}

	/* ---- solid ---- */

	/* The border is the lift colour, so the shadow reads as the side of the
	   button rather than something sitting behind it. */
	.btn-solid {
		background-image: var(--brand-gradient);
		border: 2px solid var(--brand-deep);
		color: var(--surface);
		box-shadow: 0 var(--press) 0 var(--brand-deep);
	}

	.btn-solid:active:not(:disabled) {
		transform: translateY(var(--press));
		box-shadow: 0 0 0 var(--brand-deep);
	}

	/* ---- ghost ---- */

	/* The outline and its lift are one soft tint; the label is the page's ink, so
	   it stays readable against the pale background. */
	.btn-ghost {
		background-color: transparent;
		border: 2px solid var(--brand-tint);
		color: var(--ink);
		box-shadow: 0 var(--press) 0 var(--brand-tint);
	}

	.btn-ghost:active:not(:disabled) {
		transform: translateY(var(--press));
		box-shadow: 0 0 0 var(--brand-tint);
	}

	/* ---- outline ---- */

	.btn-outline {
		background-color: var(--surface);
		color: var(--ink);
		border: 2px solid var(--edge);
		box-shadow: 0 var(--press-small) 0 var(--edge-soft);
	}

	.btn-outline:active:not(:disabled) {
		transform: translateY(var(--press-small));
		box-shadow: 0 0 0 var(--edge-soft);
	}

	.btn-outline.is-selected {
		background-image: var(--brand-gradient);
		background-color: transparent;
		border-color: var(--brand);
		color: var(--surface);
		box-shadow: 0 var(--press-small) 0 var(--brand-deep);
	}

	.btn-outline.is-selected:active:not(:disabled) {
		box-shadow: 0 0 0 var(--brand-deep);
	}

	/* ---- quiet ---- */

	.btn-quiet {
		background: none;
		color: var(--ink-faint);
		box-shadow: none;
		text-decoration: underline;
	}

	.btn-quiet:active:not(:disabled) {
		transform: translateY(1px);
	}

	/* ---- off ---- */

	.btn:disabled {
		background-image: none;
		background-color: #e8d5d8;
		border-color: #e8d5d8;
		color: #a9979a;
		box-shadow: 0 var(--press) 0 #dcc4c8;
		cursor: default;
	}

	.btn-sm:disabled {
		box-shadow: 0 var(--press-small) 0 #dcc4c8;
	}

	@media (prefers-reduced-motion: reduce) {
		.btn {
			transition: none;
		}
	}
</style>
