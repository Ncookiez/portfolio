import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';
import netlifyAdapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: process.env.BUILD_STATIC ? staticAdapter({ fallback: 'index.html' }) : netlifyAdapter()
	}
};

export default config;