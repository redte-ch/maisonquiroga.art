/** @type {import('tailwindcss').ThemeConfig} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors: {
        white: '#e2e7e9',
        neutral: '#dee3e5',
        primary: '#000000',
        secondary: '#e52043'
      },
      fontFamily: {
        sans: ['AkzidenzGrotesk', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
