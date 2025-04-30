/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7ac8fc',
          400: '#36aef8',
          500: '#0c93e9',
          600: '#0076c6',
          700: '#005fa1',
          800: '#065186',
          900: '#0b446f',
          950: '#072b49',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#dbd0ff',
          300: '#c3acff',
          400: '#a47eff',
          500: '#8c4fff',
          600: '#7c2cf9',
          700: '#6b1ee6',
          800: '#581abd',
          900: '#481a9a',
          950: '#2c0e68',
        },
        dark: "#121212",
        light: "#fafafa",
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
      },
    },
  },
  plugins: [],
}