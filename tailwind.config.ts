import type { Config } from 'tailwindcss'

const defaultFonts = ['Helvetica', 'Arial', 'sans-serif']

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Changa', 'Fredoka', ...defaultFonts],
      body: ['Fredoka', ...defaultFonts],
    },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-dark': 'var(--primary-dark-color)',
        accent: 'var(--accent-color)',
        'text-base': 'var(--text-base-color)',
        'text-light': 'var(--text-light-color)',
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.3s ease-in-out',
        'slide-in-right': 'slideInRight 0.2s ease-in-out',
        'fade-in': 'fadeIn 0.1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-80px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },

        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
