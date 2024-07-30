/** @type {import('tailwindcss').ThemeConfig} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#db0019'
      },
      fontFamily: {
        sans: ['AkzidenzGrotesk', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
