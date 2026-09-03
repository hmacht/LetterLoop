<script lang="ts">
	/**
	 * The social cluster, lifted out of the footer so it can sit on the menu.
	 *
	 * Icons are brand red here rather than the footer's white, because the menu
	 * background is pale pink -- white would be invisible on it.
	 */
	const LINKS = [
		{ href: 'https://www.threads.com/@henrymacht', label: 'Threads', icon: 'fa-brands fa-threads' },
		{
			href: 'https://www.instagram.com/theletterloop',
			label: 'Instagram',
			icon: 'fa-brands fa-instagram'
		},
		{ href: 'https://www.tiktok.com/@theletterloop', label: 'TikTok', icon: 'fa-brands fa-tiktok' },
		{ href: 'https://www.reddit.com/r/letterloop/', label: 'Reddit', icon: 'fa-brands fa-reddit' }
	];
</script>

<div class="socials">
	{#each LINKS as link (link.label)}
		<a
			class="social-icon"
			href={link.href}
			target="_blank"
			rel="noopener"
			aria-label={link.label}
			title={link.label}
		>
			<i class={link.icon} aria-hidden="true"></i>
		</a>
	{/each}
</div>

<style>
	.socials {
		display: flex;
		justify-content: center;
		gap: 22px;
		margin-top: 1rem;
	}

	.social-icon {
		color: #fc2f4f;
		font-size: 20px;
		line-height: 1;
		text-decoration: none;
		transition: opacity 0.15s ease;
	}

	@media (hover: hover) {
		.social-icon:hover {
			opacity: 0.7;
			text-decoration: none;
		}
	}
</style>
