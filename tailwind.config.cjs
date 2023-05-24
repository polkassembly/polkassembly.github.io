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
      colors: {
        'pa-pink':'#E80B81',
        'pa-pink-light':'#FFC9E5',
        'pa-purple': '#F9D2FF',
        'pa-purple-light': '#F1EBFF'
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}