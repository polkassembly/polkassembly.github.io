/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ['Poppins', 'sans-serif']
			},
			colors: {
				'pa-pink': '#E80B81',
				'pa-pink-light': '#FEF6FB',
				'pa-purple': '#F9D2FF',
				'pa-purple-light': '#F1EBFF'
			},
			container: {
				center: true
			},
			backgroundImage: {
				'hero-bg': "url('../src/assets/images/bg-hero.svg')",
				'recognition-bg': "url('../src/assets/images/recognition-bg.svg')"
			},
			animation: {
				scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
			},
			keyframes: {
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))'
					}
				}
			}
		}
	},
	plugins: []
};