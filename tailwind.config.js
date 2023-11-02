/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        dark: {
          element: 'hsl(209, 23%, 22%)', // Dark Mode Elements
          background: 'hsl(207, 26%, 17%)', // Dark Mode Background
          text: 'hsl(200, 15%, 8%)', // Dark Mode Text
          input: 'hsl(0, 0%, 52%)' // Dark Mode Input
        },
        light: {
          background: 'hsl(0, 0%, 98%)', // Light Mode Background
          text: 'hsl(0, 0%, 0%)', // Light Mode Text
          input: 'hsl(0, 0%, 52%)' // Light Mode Input
        },
        white: 'hsl(0, 0%, 100%)' // Shared color (for text and light mode elements)
      }
    }
  },
  plugins: []
}
