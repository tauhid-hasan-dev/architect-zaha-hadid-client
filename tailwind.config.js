/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-color': '#2D333B',
        'header-color': '#172031',
        'text-color': '#FFE0B3',

      },
    },
  },
  plugins: [require("daisyui")],
}
