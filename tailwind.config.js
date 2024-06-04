/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#95AD63",
        secondary: "#f5f5f5",
        tertiary: "#CFEC94",
        "black-100": "#353E26",
        "black-200": "#090325",
        "white-100": "#f5f5f5",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bakery/main4.jpeg')",
      },
    },
  },
  plugins: [],
};