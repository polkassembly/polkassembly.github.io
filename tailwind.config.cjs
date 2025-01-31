/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1800px',
        '5xl': '1950px',
        '6xl': '2200px'
      },
      colors: {
        'pa-pink': '#E6007A',
        'pa-pink-light': '#FFC9E5',
        'pa-bg-pink': '#FEE1F3',
        'pa-purple': '#F9D2FF',
        'pa-purple-light': '#F1EBFF',
        'pa-grey': '#6D6B6E',
        'pa-grey-light': '#A6A6A6',
        'pa-blue': '#0C5CFF',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}