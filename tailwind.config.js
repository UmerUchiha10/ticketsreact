/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#22B3C1',
        'gray': '#8F8F8F',
        'lightgray':'#EDEDED',
        'darkgray':'#D9D9D9',
        'neworange':'#FF4D00', // Define the 'blue' color here
      },
      fontFamily: {
        'metal-mania': ['Metal Mania', 'system-ui'],
        'lex':['Lexend', 'sans-serif'],
        'mako':['Mako', 'sans-serif'] // Example font stack for sans-serif
        
      },
    },
  },
  plugins: [],
}
