/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grape:"rgba(114,35,204)",
      },
      screens:{
        xs:'500px'
      }
    },
  },
  plugins: [],
}