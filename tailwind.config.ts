import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Changa', 'Fredoka', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['Fredoka', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        "primary": "var(--primary-color)",
        "accent": "var(--accent-color)",
        "text-base": "var(--text-base-color)",
        "text-light": "var(--text-light-color)"
      },
    }
  },
  plugins: [],
} satisfies Config