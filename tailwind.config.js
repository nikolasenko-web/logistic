/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    container: {
      center: true,
      screens: {
        'xl': '1120px',
        '2xl': '1300px',
        '3xl': '1440px',
      },
    },
    extend: {
      screens: {
        'xl': '1200px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '1920px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: '#4F75FF',

      },
    },
  },
  plugins: [],
}