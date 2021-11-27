const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './sections/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '200px': '200px',
        '300px': '300px',
        '400px': '400px',
        '500px': '500px'
      }
    },
    colors: {
      ...colors,
      blue: {
        ...colors.blue,
        400: '#1DA1F2',
        500: '#3B3B4F',
        800: '#0A0A23'
      },
      gray: {
        ...colors.gray,
        500: '#EEEEF0'
      },
      yellow: {
        ...colors.yellow
      },
      red: {
        ...colors.red
      },
      twitter: {
        100: '#1B95E0',
        200: '#0C7ABF'
      },
      linkedIn: {
        100: '#2867B2',
        200: '#1e518f'
      },
      discord: {
        100: '#6E85D2',
        200: '#374269'
      },
      reddit:{
        100:'#ffa500',
        200:'#ff8c00'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
