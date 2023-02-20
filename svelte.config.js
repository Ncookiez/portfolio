import ipfsAdapter from 'sveltejs-adapter-ipfs';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: process.env.BUILD_STATIC ? ipfsAdapter({ fallback: 'index.html', removeBuiltInServiceWorkerRegistration: true, injectPagesInServiceWorker: true }) : netlifyAdapter()
	}
};

export default config;