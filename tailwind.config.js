/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero': 'url("/hero.png")'
      },
      colors: {
        'primary': '#062736',
        'secondary': '#1F6E91',
      }
    },
  },
  plugins: [tailwindScrollbar],
}