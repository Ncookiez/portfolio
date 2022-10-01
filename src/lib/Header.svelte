<script lang="ts">

	// Imports:
	import { config } from '$lib/config';

	// Initializations:
	const tooltips = {
		typescript: `TypeScript is JavaScript's annoying cousin that is very picky with variable types. It screams at me if I make a mistake instead of watching me debug for hours.`,
		node: `Node.js is an open-source, cross-platform JavaScript runtime environment that can be used to build pretty much anything.`,
		sveltekit: `SvelteKit is a web framework built on top of Svelte, facilitating web developement while being lighter, faster and more dev-friendly than React. Fight me.`,
		ethers: `Ethers.js is a JavaScript library for interacting with the Ethereum blockchain and other EVM-compatible chains.`,
		weaverfi: `The WeaverFi SDK is my own library for querying anything from DeFi. It also powers the WeaverFi portfolio tracker!`,
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
		<img src="/icon.png" alt="Ncookie's Avatar">
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
		<p>My best web apps are built with <span class="highlight">TypeScript<span class="tooltip">{tooltips.typescript}</span></span>, <span class="highlight">Node.js<span class="tooltip">{tooltips.node}</span></span> and <span class="highlight">SvelteKit<span class="tooltip">{tooltips.sveltekit}</span></span>, making the most out of Web3 libraries like <span class="highlight">Ethers.js<span class="tooltip">{tooltips.ethers}</span></span> and <span class="highlight">WeaverFi<span class="tooltip">{tooltips.weaverfi}</span></span> (my own SDK).</p>
		<p>I've fallen in love with <span class="highlight">blockchain<span class="tooltip">{tooltips.blockchain}</span></span> technology, <span class="highlight">decentralization<span class="tooltip">{tooltips.decentralization}</span></span>, the <span class="highlight">Web3<span class="tooltip">{tooltips.web3}</span></span> community and there is definitely no going back.</p>
		<p>Find me at your local hackathon building some <span class="highlight">open-source<span class="tooltip">{tooltips.openSource}</span></span> project, or at a ski hill somewhere out there.</p>
	</div>

	<!-- Social Media -->
	<div id="socials">
		<h3>My Socials</h3>
		<span>
			<a href="https://twitter.com/{config.twitter}" target="__blank"><svg viewBox="0 0 248 204" xmlns="http://www.w3.org/2000/svg"><path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04 C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66 c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64 c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76 c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26 c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"/></svg></a>
			<a href="https://github.com/{config.github}" target="__blank"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
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
		fill: var(--mutedFontColor);
	}

	#socials a:hover {
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