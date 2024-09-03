/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './../index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#28282B',
        hover: '#56565d',
        accent: '#023020',
        white: '#ffffff'
      },
      fontFamily: {
        plusJakarta: ['Plus Jakarta Sans Regular'],
        plusJakartaLight: ['Plus Jakarta Sans Light'],
        plusJakartaMedium: ['Plus Jakarta Sans Medium'],
        plusJakartaSemiBold: ['Plus Jakarta Sans SemiBold'],
        plusJakartaBold: ['Plus Jakarta Sans Bold'],
      },
      spacing: {
        header: '65px',
        body: 'calc(100vh - 65px)'
      }
    },
  },
  plugins: [],
}

