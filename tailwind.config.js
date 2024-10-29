// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',

  important: true,
  theme: {
    screens: {
      sm: '640px',

      md: '768px',

      lg: '960px',

      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#F6CBB7',
        primaryLight: '#F8C1A8',
      },

      animation: {
        scaleAnimation: 'move 3s linear infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        md: '30px',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
