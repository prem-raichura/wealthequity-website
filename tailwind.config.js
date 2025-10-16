/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#007802', // Your specified green color
        'dark-bg': '#0B0B0F',    // A deep, dark background
        'light-gray': '#F0F0F0', // For primary text
        'secondary-gray': '#a0a0a0', // For subtitles and less important text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // A clean, modern font
      },
      animation: {
        'marquee-fast': 'marquee-fast 7s linear infinite',
      },
      keyframes: {
        'marquee-fast': {
          '0%': { transform: 'translateX(0)' },
          // This ensures a seamless loop with 4 duplicates
          '100%': { transform: 'translateX(-25%)' }, 
        }
      }
    },
  },
  plugins: [],
}