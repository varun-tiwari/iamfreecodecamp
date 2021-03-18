const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
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
      },
      linkedIn: {
        100: '#2867B2',
        200: '#1e518f'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
