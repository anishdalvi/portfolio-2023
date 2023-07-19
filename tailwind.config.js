/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "light-bg": "#EBE6E4",
        "dark-bg2": "#242424",
        "dark-bg": "#302D2D",
        "medium-dark": "#2A2E30",
        "medium-dark2": "#353132",
        "medium-light": "#D9D9D9",
        linkedin: "#0085FF",
        github: "#17202A",
        email: "#D44638",
        instagram: "#c13584",
      },
      colors: {
        "light-signature": "#0085FF",
        "dark-signature": "#168FFF",
        light: "#BDBDBD",
        dark: "#000000",
        "dark-sign": "#8B7221",
        "light-sign": "#DABB54",
        "dark-bg-color": "#242424",
        "light-bg-color": "#EBE6E4",
      },
      screens: {
        d0: {
          min: "640px",
          max: "704px",
        },
        d1: {
          min: "705px",
          max: "870px",
        },
        d2: {
          min: "870px",
          max: "950px",
        },
      },
    },
  },
  plugins: [],
};
