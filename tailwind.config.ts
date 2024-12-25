import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./src/**/*.vue'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        gray: '#292d32',
        purple: '#702bfe',
        red: '#e81a0c',
        green: '#039c55',
        blue: '#2c81fb',
      },
    },

    fontSize: {
      sm: ['0.7857rem', '100%'],
      base: ['1rem', '100%'],
      lg: ['1.143rem', '100%'],
      xl: ['1.286rem', '100%'],
      '2xl': ['1.429rem', '100%'],
      '3xl': ['1.714rem', '100%'],
      '4xl': ['2rem', '100%'],
      '5xl': ['2.286rem', '100%'],
    },
  },
}
