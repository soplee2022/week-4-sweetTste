/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#3F5D45',
        secondary: '#FFE180',
        light_primary: '#8DA291',
        light_plus_primary: '#EAF0ED',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '30px',
        md: '42px',
      }
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
}
