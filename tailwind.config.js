const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        ...colors.blue,
        500: '#3B3B4F',
        800: '#0A0A23'
      },
      gray: {
        ...colors.gray,
        500: '#EEEEF0'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
