module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      backgroundImage: theme => ({
        'tatry': "url('./img/Corageo-tatry.jpg')",
      })
    },
    fontFamily: {
      'display': ['Rubik']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-filters')],
}
