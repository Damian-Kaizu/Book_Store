/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D6E4E5",
        milky: "#F8EDE3",
        orge: "#F17305",
        bordercolor: "#4E4E4E99",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
