<script lang="ts">

	// Imports:
	import '../app.css';
	
</script>

<!-- #################################################################################################### -->

<!-- App Content -->
<main><slot /></main>

<!-- #################################################################################################### -->

<style>

	main {
		padding: 5em 1em;
		overflow-x: hidden;
		user-select: none;
	}

	@media screen and (min-height: 1100px) {
		main {
			font-size: 1.2em;
		}
	}

</style>