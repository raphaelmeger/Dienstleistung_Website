import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0F172A',
          900: '#1E293B',
          800: '#243447',
          700: '#2D4060',
        },
        gold: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706',
          50: '#FFFBEB',
        },
        'site-bg': '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
