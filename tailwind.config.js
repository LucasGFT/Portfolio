/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#050E26',
        'custom-blue-hover': 'rgba(148,163,184,0.1)',
      },
      colors: {
        'hover-text': '#5eead4'
      },
      fontFamily: {
        'inter': 'Inter'
      }
    },
  },
  plugins: [],
}

