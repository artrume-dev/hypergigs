/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'apple-gray': {
          50: '#fafafa',
          100: '#f5f5f7',
          200: '#e5e5e7',
          300: '#d2d2d7',
          400: '#a1a1a6',
          500: '#86868b',
          600: '#6e6e73',
          700: '#515154',
          800: '#424245',
          900: '#1d1d1f'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}