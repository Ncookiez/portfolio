<script lang="ts">

	// Type Imports:
	import type { Project } from '$lib/types';

	// Initializations:
	export let project: Project;

</script>

<!-- #################################################################################################### -->

<div class="project">

	<!-- Project Info -->
	<div class="info">
		<h3>{project.title}</h3>
		<span class="subtitle">{project.subtitle}</span>
		<p>{project.description}</p>
	</div>

	<!-- Project Logo/Image -->
	<img src="{project.image}" alt="{project.title}">

	<!-- Project Links -->
	{#if project.link || project.repo}
		<div class="links">
			{#if project.link}
				<a href="{project.link}" target="__blank">Live Project</a>
			{/if}
			{#if project.repo}
				<a href="{project.repo}" target="__blank">Source Code</a>
			{/if}
		</div>
	{/if}

</div>

<!-- #################################################################################################### -->

<style>

	div.project {
		position: relative;
		display: flex;
		align-items: center;
		gap: 1em;
		width: min(55em, 100%);
		padding: 1em 2em;
		border: 3px solid var(--accentColor);
	}

	div.project:hover > div.links {
		visibility: visible;
	}

	div.info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: .5em;
	}

	div.info > p {
		color: var(--mutedFontColor);
		font-size: .8em;
	}

	img {
		height: 8em;
		width: 8em;
		/* filter: drop-shadow(0 0 .5em var(--accentColor)); */
		filter: drop-shadow(0 0 .5em var(--mutedFontColor));
	}

	div.links {
		visibility: hidden;
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2em;
		backdrop-filter: brightness(.8) blur(6px);
	}

	div.links > a {
		padding: .4em 1em .5em;
		color: var(--mutedFontColor);
		text-decoration: none;
		background: var(--backgroundColor);
		border: 3px solid transparent;
		border-top-color: var(--accentColor);
		border-bottom-color: var(--accentColor);
	}

	div.links > a:hover {
		color: var(--fontColor);
	}

	@media screen and (max-width: 530px) {
		div.project {
			flex-direction: column;
			padding: 1em 2em 2em;
			text-align: center;
		}
		div.info {
			order: 2;
		}
	}
	
</style>