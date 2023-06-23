import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/movies-app/',
	plugins: [react()],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@app': '/src/app',
			'@pages': '/src/pages',
			'@widgets': '/src/widgets',
			'@features': '/src/features',
			'@entities': '/src/entities',
			'@shared': '/src/shared',
		},
	},
});
