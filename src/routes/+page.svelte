<script lang="ts">

	// Imports:
	import Header from '$lib/Header.svelte';
	import Projects from '$lib/Projects.svelte';
	import ScrollPrompt from '$lib/ScrollPrompt.svelte';

	// Initializations:
	let scrollY: number = 0;
	
</script>

<!-- #################################################################################################### -->

<!-- SvelteKit Dynamic Header -->
<svelte:head>
	<title>Ncookie's Portfolio</title>
	<meta name="description" content="Where cookies and software development meet." />
</svelte:head>

<!-- Window Bindings -->
<svelte:window bind:scrollY />

<!-- Portfolio Header -->
<Header />

<!-- Scroll Prompt -->
<ScrollPrompt bind:scrollY />

<!-- Portfolio Projects -->
<Projects />

<!-- #################################################################################################### -->

<style>

	/* CSS Goes Here */
	
</style>