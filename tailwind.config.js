/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mediumGreen: 'rgb(0, 128, 0)', // Define your custom color
      },
    },
  },
  plugins: [],
}

