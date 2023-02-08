/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,html,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        grey: '#f6f8fd',
        blue: {
          primary: '#1363DF',
          secondary: '#1554CC',
          tertiary: '#A4C3FF',
        },
        green: {
          ocean: '#48C5A1',
        },
      },
    },
  },
  plugins: [],
};
