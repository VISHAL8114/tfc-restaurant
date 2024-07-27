/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mediumGreen: 'rgb(0, 128, 0)', // Define your custom color
  shimmer: '#efefef',

      },animation: {
        shimmer: 'shimmer 3s infinite',
      },keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      }
    },
  },
  plugins: [],
}


