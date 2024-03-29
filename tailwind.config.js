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
        milky: "#FEFAE7",
        orge: "#F17305",
        grey: "#DADADA",
        bordercolor: "#4E4E4E99",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        bebas: ["BebasNeue", "cursive"],
      },
    },
  },
  plugins: [],
};
