/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      margin: {
        gutterbig: "4vw",
        gutter: "5vw",
      },
      backgroundColor: {
        main: "#111111",
        invert: "white",
      },
      colors: {
        main: "white",
        invert: "#111111",
        ted: "red"
      },
    },
  },
  plugins: [require("preline/plugin")],
};
