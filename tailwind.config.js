/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        theater: {
          primary: '#1a1a1a',
          secondary: '#f5f5f5',
          accent: '#d4af37',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      gap: {
        '16': '4rem',
        '20': '5rem', 
        '24': '6rem',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
