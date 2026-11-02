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
        brand: { red: '#fd2601', orange: '#f37e1c', glow: '#F4791B' },
      },
    },
  },
  plugins: [],
}
