/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        FSgreen:"#005C26"
      },
      fontFamily: {
        'tenor': ["'Tenor Sans', sans-serif"],
        'bmRegular': ["bmRegular", "sans-serif"],
        'bmBold': ["bmBold", "sans-serif"]
      },
      backgroundImage:{
        'osaka1': "url('Images/osaka1.jpeg')",
        'kyoto1': "url('Images/kyoto2.png')"

      }
    },
  },
  plugins: [],
}

