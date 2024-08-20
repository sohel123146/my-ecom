/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#2C3E50',
        'navy-blue': '#0A4275',
        'charcoal': '#333333',
        'dark-gray': '#2C3E50'
      }
    },
  },
  plugins: [],
}