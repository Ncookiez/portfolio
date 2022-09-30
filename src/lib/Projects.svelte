<script lang="ts">

	// Imports:
	import { config } from '$lib/config';
	import Project from '$lib/Project.svelte';

</script>

<!-- #################################################################################################### -->

<section id="projectList">
	{#each config.projects as project}
		<Project {project} />
	{/each}
</section>

<!-- #################################################################################################### -->

<style>

	#projectList {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3em;
		margin-top: 18em;
	}
	
</style>