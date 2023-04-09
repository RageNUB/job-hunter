/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9873FF",

          "secondary": "#757575",

          "accent": "#F4F4F4",

          "neutral": "#1A1919",

          "base-100": "#ffffff",

          "info": "#6CC8EA",

          "success": "#3CD382",

          "warning": "#F9A215",

          "error": "#F4254B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

