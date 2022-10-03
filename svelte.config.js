import preprocess from 'svelte-preprocess';
import ipfsAdapter from 'sveltejs-adapter-ipfs';
import netlifyAdapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: process.env.BUILD_STATIC ? ipfsAdapter({ fallback: 'index.html' }) : netlifyAdapter()
	}
};

export default config;