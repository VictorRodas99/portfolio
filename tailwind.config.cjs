const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      'light-purple': '#a960ee',
      'ruby': '#ff333d',
      'violet-blue': '#7770ff',

      primary: {
        50: '#fffdfdff',
        100: '#fefaf6',
        200: '#eaebed',
        300: 'bfedef',
        400: '#7770ff',
        500: '#544BFF',
        600: '#281DFF',
        700: '#3c3ce2ff'
      },
      secondary: {
        50: '#27272a',
        100: '#1d1e29ff',
        200: '#eaebedff',
        300: '#10101aff'
      }
    }
  },
  plugins: []
}
