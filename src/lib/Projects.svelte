<script lang="ts">

	// Imports:
	import { config } from '$lib/config';
	import Project from '$lib/Project.svelte';

</script>

<!-- #################################################################################################### -->

<!-- TODO - projects can fade in as user scrolls -->
<section id="projectList">
	<h3>Project Highlights</h3>
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

	h3 {
		margin-bottom: -1em;
	}

	@media screen and (max-height: 980px) {
		#projectList {
			margin-top: 4.5em;
		}
	}

	@media screen and (max-width: 530px) {
		#projectList {
			margin-top: 3em;
		}
	}
	
</style>