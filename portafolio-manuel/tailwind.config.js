/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2B6CB0',
          dark: '#63B3ED',
        },
        background: {
          light: '#F5F7FA',
          dark: '#1A202C',
        },
        text: {
          light: '#1A202C',
          dark: '#F7FAFC',
        },
        card: {
          light: '#FFFFFF',
          dark: '#2D3748',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

