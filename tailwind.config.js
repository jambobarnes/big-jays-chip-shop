/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Quicksand', 'sans-serif'],
      'fredoka': ['Fredoka One', 'cursive']
    },
    extend: {
      colors: {
        "chip-red": "#d73202",
        "chip-darkred": "#891005",
        "chip-yellow":"#fcd146",
        "chip-grey": "#4c4c4c"
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
