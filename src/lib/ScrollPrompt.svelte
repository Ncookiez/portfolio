<script lang="ts">

	// Imports:
	import { blur } from 'svelte/transition';

	// Initializations:
	export let scrollY: number;

</script>

<!-- #################################################################################################### -->

{#if scrollY < 50}
	<div id="scrollPrompt" transition:blur={{ duration: 150 }}>
		<span>Scroll down to see some of my projects</span>
		<i class="icofont-rounded-down" />
	</div>
{/if}

<!-- #################################################################################################### -->

<style>

	#scrollPrompt {
		position: fixed;
		inset: auto 0 5em 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		margin: 0 auto;
		color: var(--mutedFontColor);
	}

	i {
		animation: bounce .8s linear infinite;
	}

	@keyframes bounce {
		0%, 100% {
			margin: 0;
		}
		50% {
			margin: .5em 0 -.5em;
		}
	}
	
</style>