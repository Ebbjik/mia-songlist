import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path'

export default defineConfig({
	plugins: [sveltekit()],

	server: {
		host: '0.0.0.0',
		port: 3003,
	},

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'style': path.resolve(__dirname, './src/style')
		}
	}

});
