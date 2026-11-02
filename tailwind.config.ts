import type { Config } from 'tailwindcss'

// Colors use RGB channel variables so opacity modifiers (e.g. bg-stroke/50, text-text/80) work.
const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: withAlpha('--bg-rgb'),
        surface: withAlpha('--surface-rgb'),
        text: withAlpha('--text-rgb'),
        muted: withAlpha('--muted-rgb'),
        accent: withAlpha('--accent-rgb'),
        stroke: withAlpha('--stroke-rgb'),
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-dot': {
          '0%': { top: '0%', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out both',
        'scroll-dot': 'scroll-dot 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
