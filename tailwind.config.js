const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
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
      red: {
        ...colors.red
      },
      purple: {
        ...colors.purple
      },
      white: {
        ...colors.white
      },
      twitter: {
        100: '#1B95E0',
        200: '#0C7ABF'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
