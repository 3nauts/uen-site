/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        uen: {
          green: '#009c3b',
          dark: '#006837',
          yellow: '#ffcc29',
          teal: '#0aa5a0',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(0,0,0,.12)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
