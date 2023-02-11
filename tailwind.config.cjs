/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': 'Roboto, sans-serif',
    },
    extend: {
      backgroundImage: {
        'dark-square': "url('./assets/repeated-square-dark-pattern.webp')",
      }
    },
  },
  plugins: [],
}