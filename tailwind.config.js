/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'Impact', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: { navy: '#0b1f3a', slate: '#1f3b5c', glow: '#3d5a80' },
      },
    },
  },
  plugins: [],
}
