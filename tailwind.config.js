/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: 'hsl(35, 77%, 62%)',
          red: 'hsl(5, 85%, 63%)',
        },
        secondary: {
          ofwhite: 'hsl(36, 100%, 99%)',
          grblue: 'hsl(233, 8%, 79%)',
          drblue: 'hsl(236, 13%, 42%)',
          vdrblue: 'hsl(240, 100%, 5%)'
        }
      },
      fontFamily: {
        inter: ['Inter', 'Sans-serif']
      },
      fontSize: {
        default: '15px'
      },
    },
    fontWeight: {
      normal: '400',
      bold: '700',
      extra: '800'
    }
  },
  plugins: [],
}

