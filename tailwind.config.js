// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#007802', // A vibrant green inspired by your logo
        'dark-bg': '#0B0B0F',    // A deep, dark background
        'light-gray': '#F0F0F0', // For primary text
        'secondary-gray': '#a0a0a0', // For subtitles and less important text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // A clean, modern font
      },
    },
  },
  plugins: [],
}