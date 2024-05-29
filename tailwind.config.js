/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Reddit: ['Reddit-mono', 'sans-serif']
      },
      container: {
        center: true,
        padding: '50px',
        screens: {
          '2xl': '1320px',
          'xl': '1140px',
          'lg': '960px',
          'md': '720px',
        }
      },

    },
  },
  plugins: [],
}

