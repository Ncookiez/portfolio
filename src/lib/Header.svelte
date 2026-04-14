<script lang="ts">

	// Imports:
	import { config } from '$lib/config';

	// Initializations:
	const tooltips = {
		typescript: `TypeScript is JavaScript's annoying cousin that is very picky with variable types. It screams at me if I make a mistake instead of watching me debug for hours.`,
		node: `Node.js is an open-source, cross-platform JavaScript runtime environment that can be used to build pretty much anything.`,
		sveltekit: `SvelteKit is a web framework built on top of Svelte, facilitating web developement while being lighter, faster and more dev-friendly than React. Fight me.`,
		ethers: `Ethers.js is a JavaScript library for interacting with the Ethereum blockchain and other EVM-compatible chains.`,
		viem: `Viem is a newer library similar to Ethers.js, from the folks at Wagmi, used to interact with EVM chains.`,
		blockchain: `A blockchain is a chain... of blocks. The cool part is that these blocks are validated by thousands of people all of the world.`,
		decentralization: `Decentralization is the means through which we can excise scammy middlemen, greedy megacorporations and protect each other's privacy.`,
		web3: `Web3 is the next-gen internet; a decentralized web of apps that power anything from social media to a financial system without banks.`,
		openSource: `Open-source is how I roll. Transparent code is good code, and if it can help someone else do something cool, then even better.`
	}

</script>

<!-- #################################################################################################### -->

<header>

	<!-- Welcome Banner -->
	<div id="banner">
		<img src="https://ncookie.ca/icon.png" alt="Ncookie's Avatar">
		<div class="text">
			<h2>Welcome to</h2>
			<h1>Ncookie's</h1>
			<h2>Portfolio App</h2>
		</div>
	</div>

	<!-- General Info -->
	<div id="info">
		<h3>About Me</h3>
		<p>I'm a software engineer, full-stack developer - whatever floats your boat.</p>
		<p>My best web apps are local-first and privacy-preserving, built with <span class="highlight">TypeScript<span class="tooltip">{tooltips.typescript}</span></span>, <span class="highlight">Node.js<span class="tooltip">{tooltips.node}</span></span> and <span class="highlight">SvelteKit<span class="tooltip">{tooltips.sveltekit}</span></span>.</p>
		<p>Find me at your local hackathon building some <span class="highlight">open-source<span class="tooltip">{tooltips.openSource}</span></span> project, or at a ski hill somewhere out there.</p>
	</div>

	<!-- Social Media -->
	<div id="socials">
		<h3>My Socials</h3>
		<span>
			<a href="https://twitter.com/{config.twitter}" target="__blank"><svg viewBox="0 0 248 204" xmlns="http://www.w3.org/2000/svg"><path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04 C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66 c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64 c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76 c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26 c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"/></svg></a>
			<a href="https://github.com/{config.github}" target="__blank"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
			<a href="https://discord.com/users/{config.discord}" target="__blank"><svg viewBox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"></path></svg></a>
		</span>
	</div>

</header>

<!-- #################################################################################################### -->

<style>

	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4.5em;
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

	#info {
		display: flex;
		flex-direction: column;
		gap: 1em;	
		width: min(50em, 100%);
	}

	#info > h3 {
		display: flex;
		margin-right: auto;
		padding-bottom: .2em;
		border-bottom: 4px solid var(--accentColor);
	}

	#info > p {
		font-size: .9em;
	}

	#socials {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: .8em;
	}

	#socials > h3 {
		white-space: nowrap;
	}

	#socials > span {
		display: flex;
		gap: 1em;
	}

	#socials a {
		display: flex;
		align-items: center;
		height: 2em;
		width: 2em;
	}

	#socials a svg > path {
		fill: var(--mutedFontColor);
	}

	#socials a:hover svg > path {
		fill: var(--fontColor);
	}

	.highlight {
		position: relative;
		color: var(--accentColor);
		isolation: isolate;
	}

	.highlight > span.tooltip {
		visibility: hidden;
		position: absolute;
		inset: auto auto calc(100% + .8em) 50%;
		width: 25em;
		margin-left: -12.5em;
		padding: .5em;
		text-align: center;
		color: var(--fontColor);
		font-size: .8em;
		background: var(--accentColor);
		border-radius: .5em;
		box-shadow: 0 0 1em .5em var(--backgroundColor);
		z-index: 1;
	}

	.highlight:hover span.tooltip {
		visibility: visible;
	}

	.highlight span.tooltip::after {
		content: '';
		position: absolute;
		inset: 100% auto auto 50%;
		margin-left: -.8em;
		border: .8em solid transparent;
		border-top-color: var(--accentColor);
	}
	
	@media screen and (max-width: 930px) {
		#banner > img {
			height: 15em;
			width: 15em;
		}
		h1 {
			font-size: 4em;
		}
		h2 {
			font-size: 2em;
		}
	}

	@media screen and (max-width: 730px) {
		#banner > img {
			height: 10em;
			width: 10em;
		}
		h1 {
			font-size: 3em;
		}
		h2 {
			font-size: 1.5em;
		}
	}

	@media screen and (max-width: 530px) {
		header {
			gap: 3em;
		}
		#banner {
			flex-direction: column;
		}
		#banner > div.text {
			align-items: center;
		}
	}

	@media screen and (max-height: 800px) {
		header {
			gap: 3em;
			margin-top: -2em;
		}
		#info {
			margin-bottom: 1.5em;
		}
	}
	
</style>