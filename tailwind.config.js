/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor:{
        'light-bg': "#EBE6E4",
        'dark-bg2': "#242424",
        'dark-bg': "#302D2D",
        'medium-dark' :"#2A2E30",
        'medium-dark2': "#353132",
        'medium-light': "#D9D9D9"
      }
    },
  },
  plugins: [],
}

