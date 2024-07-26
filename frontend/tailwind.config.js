/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'nav-l': 'rgba(255, 255, 255, 1)',
				'nav-d': 'rgba(0, 0, 0, 1)',
				cul: 'rgba(0, 0, 0, 1)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
};
