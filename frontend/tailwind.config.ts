import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0B',
        text: '#FFFFFF',
        gold: '#C9A75D',
        goldLight: '#D4AF37',
        dark: '#3B2F2F',
        grayMuted: '#3A3A3A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    }
  }
  plugins: [],
}
export default config
