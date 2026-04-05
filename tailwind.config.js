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
          DEFAULT: '#974200',
          container: '#ff7a1c',
          dim: '#853900'
        },
        background: '#f8f6f6',
        surface: {
          DEFAULT: '#f8f6f6',
          container: '#e9e8e8',
          low: '#f2f0f0',
          highest: '#dddddc',
          lowest: '#ffffff',
          variant: '#dddddc'
        },
        secondary: {
          DEFAULT: '#8d4a00',
          container: '#ffc69b'
        },
        tertiary: {
          DEFAULT: '#785600',
          container: '#f0b119'
        },
        error: {
          DEFAULT: '#b02500',
          container: '#f95630'
        },
        outline: {
          DEFAULT: '#777777',
          variant: '#aeadad'
        },
        on: {
          background: '#2e2f2f',
          surface: '#2e2f2f',
          primary: '#fff0e9',
          secondary: '#fff0e7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'md': '0.75rem',
        'full': '9999px',
        'sm': '0.25rem'
      }
    },
  },
  plugins: [],
}
