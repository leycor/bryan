module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      81: '22rem',
      96: '24rem',
    },
    fontSize:{
      'xs': '.75rem',
      'sm': '.875rem',
      'smt': '.950rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    fontFamily: {
      'open': ['Open Sans'],
      'neucha': ['Neucha'],
    },


    extend: {
      margin: {
        '-Nmedium': '-100%',
      },

      gridTemplateColumns: {
        'dashboard': '19rem, 1fr',
      },
      
    },


  },
  variants: {
    extend: {},
  },
  plugins: [],
}
