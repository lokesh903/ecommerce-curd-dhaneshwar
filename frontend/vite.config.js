import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{
				find: /^src(.+)/,
				replacement: path.join(process.cwd(), 'src/$1'),
			},
		],
	},

	build: {
		// ... other build options
		rollupOptions: {
			overlayWarnings: true,
			input: 'index.html',
			env: loadEnv('production', process.cwd()), // Load environment variables during build
		},
	},
	optimizeDeps: {
		include: ['@mui/material/Box'],
	},

	plugins: [
		react(),
		svgr({
			// svgr options: https://react-svgr.com/docs/options/
			svgrOptions: {
				exportType: 'default',
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: '**/*.svg',
		}),
	],
});
