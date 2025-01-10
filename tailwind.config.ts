import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Changa', 'Fredoka', 'Helvetica', 'Arial', 'sans-serif'],
      'body': ['Fredoka', 'Helvetica', 'Arial', 'sans-serif']
    },
  },
  plugins: [],
} satisfies Config;
