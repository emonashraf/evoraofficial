// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1400px",
    extend: {
      colors: {
        primary: "#F6CBB7",
        secendory: "#F8C1A8",
      },

      animation: {
        scaleAnimation: "move 3s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        md: "30px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
