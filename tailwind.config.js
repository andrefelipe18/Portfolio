/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue',
    './src/*.vue',
    './src/App.vue'
  ],
  theme: {
    extend: {

    },
    fontFamily: {      
      'sans': ['Arial', 'sans-serif']
    }
  },
  plugins: [
    require("daisyui"), 
  ],
  daisyui: {}
}

