import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,svelte}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#db0019'
      },
      fontFamily: {
        sans: [
          'AkzidenzGrotesk',
          'AkzidenzGrotesk override',
          ...defaultTheme.fontFamily.sans
        ]
      },
      keyframes: {
        fade: {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        'fade-up': {
          from: {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        fade: 'fade 0.4s ease-out',
        'fade-up-in': 'fade-up 0.4s ease-in',
        'fade-up-out': 'fade-up 0.4s ease-out'
      }
    }
  }
}
