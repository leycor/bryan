module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'open': ['Open Sans'],
      'neucha': ['Neucha'],
    },
    extend: {
      margin: {
        '-Nmedium': '-100%',
      },

      gridTemplateColumns: {
        'dashboard': '18rem 1fr',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
