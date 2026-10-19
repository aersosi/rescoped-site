const { colors } = require('./node_modules/@aersosi/shared/doku_libs/configs/tailwind.colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './news/**/*.{md,mdx}', './docs/**/*.{md,mdx}'],
  theme: {
    fontSize: {
      xs: 'clamp(0.75rem, calc(0.71rem + 0.10vw), 0.88rem)',
      sm: 'clamp(0.88rem, calc(0.83rem + 0.10vw), 1.00rem)',
      base: 'clamp(1.00rem, calc(0.96rem + 0.10vw), 1.13rem)',
      md: 'clamp(1.13rem, calc(1.04rem + 0.21vw), 1.38rem)',
      lg: 'clamp(1.38rem, calc(1.29rem + 0.21vw), 1.63rem)',
      xl: 'clamp(1.63rem, calc(1.50rem + 0.31vw), 2.00rem)',
      '2xl': 'clamp(2.00rem, calc(1.88rem + 0.31vw), 2.38rem)',
      '3xl': 'clamp(2.38rem, calc(2.25rem + 0.31vw), 2.75rem)',
      '4xl': 'clamp(2.75rem, calc(2.58rem + 0.42vw), 3.25rem)',
      '5xl': 'clamp(3.25rem, calc(3.04rem + 0.52vw), 3.88rem)',
      '6xl': 'clamp(3.88rem, calc(3.67rem + 0.52vw), 4.50rem)',
      '7xl': 'clamp(4.50rem, calc(4.25rem + 0.63vw), 5.25rem)',
    },
    screens: {
      sm: '600px',
      md: '996px',
      mdlg: '1280px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      colors,
      flexGrow: {
        2: 2,
      },
    },
  },
  plugins: [],
};
