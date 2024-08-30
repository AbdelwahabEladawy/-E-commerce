/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'background-primary': '#006165',
        'background-secondary': '#DDD4B5',
        'main-theme': '#2fadff',
        'secondary-theme': '#006165'
      }
    },
  },
  plugins: [],
}
