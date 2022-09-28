<script lang="ts">

	// Imports:
	import { config } from '$lib/config';

</script>

<!-- #################################################################################################### -->

<header>

	<div id="banner">
		<img src="/icon.png" alt="Ncookie's Avatar">
		<div class="text">
			<h2>Welcome to</h2>
			<h1>Ncookie's</h1>
			<h2>Portfolio App</h2>
		</div>
	</div>

	<div id="info">

	</div>

</header>

<!-- #################################################################################################### -->

<style>

	header {
		display: flex;
		justify-content: center;
		user-select: none;
	}

	#banner {
		display: flex;
		align-items: center;
		gap: 1em;
	}

	#banner > img {
		height: 20em;
		width: 20em;
	}

	#banner > div.text {
		display: flex;
		flex-direction: column;
	}

	h1 {
		margin: .05em 0 0 -.05em;
		padding-bottom: .15em;
		font-size: 5em;
		line-height: 1em;
		border-top: 4px solid var(--accentColor);
		border-bottom: 4px solid var(--accentColor);
	}

	h2 {
		font-size: 3em;
		font-weight: normal;
	}
	
</style>