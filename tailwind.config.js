/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "{html,js}", './index.html', './about.html'
  ], 
  theme: {



    screens: {
      
      'xs': '320px',
      'sm': '425px',
      'md': '768px',
      'lg': '991px',
      'xl': '1200px',
      'xxl': '1400px',
    },


    extend: {

      colors: {
        //Primary colors
        blue: "#020553",
        main_dark: "#0B0140",
        main_light: "#F5F3FD",

      },

    },
  },
  plugins: [],
}
