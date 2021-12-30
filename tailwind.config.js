module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'plus-2xl': { max: '1535px' },
        'plus-xl': { max: '1279px' },
        'plus-lg': { max: '1023px' },
        'plus-md': { max: '767px' },
        'plus-sm': { max: '520px' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
