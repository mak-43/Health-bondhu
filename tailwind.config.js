/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2d89ff",

          "secondary": "#642dff",

          "accent": "#575757",

          "neutral": "#1e1e1e",

          "base-100": "#FFFFFF",

          "info": "#346347",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
