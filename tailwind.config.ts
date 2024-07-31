import defaultTheme from 'tailwindcss/defaultTheme'

export default {
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
