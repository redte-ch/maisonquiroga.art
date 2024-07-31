/** @type {import('tailwindcss').ThemeConfig} */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
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
