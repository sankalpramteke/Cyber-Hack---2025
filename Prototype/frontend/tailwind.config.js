/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#1a237e', // Dark blue
          light: '#534bae',
          dark: '#000051',
        },
        secondary: {
          main: '#00c853', // Cyber security green
          light: '#5efc82',
          dark: '#009624',
        },
      },
    },
  },
  plugins: [],
  important: true,
}
