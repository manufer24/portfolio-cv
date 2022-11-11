/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#0F1112",
          800: "#151718",
          700: "#181A1E",
          400: "#55565C",
        },
        white: {
          100: "#fff",
          200: "#e6e6e6",
          300: "#b9b8b8",
          400: "#929191",
        },
        black: {
          200: "#111",
        },
      },
    },
  },
  plugins: [],
};
