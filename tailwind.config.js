module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'se': '375px',
      '12pro': '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        deeporange: '#FD6D03',
        teamfont: '#dddd'
      },
      letterSpacing: {
        onepx: '1px',
      },
      padding: {
        '8px': '8px',
      }
    },
    fontFamily: {
      sans: ['Architects Daughter'],
      XtreemFatDemo: ['Xtreem Fat Demo'],
      MulishRegular: ['Mulish Regular'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
