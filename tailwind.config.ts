// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/!**!/!*.{js,ts,jsx,tsx,mdx}',
    './src/components/!**!/!*.{js,ts,jsx,tsx,mdx}',
    './src/app/!**!/!*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        sm: ['10px', '16px'],
        base: ['12px', '18px'],
        lg: ['14px', '20px'],
        xl: ['16px', '24px'],
        '2xl': ['24px', '32px'],
      },
      colors: {
        white: '#FFF',
        primary: {
          light: '#FEEDCD',
          dark: '#4B3102',
          DEFAULT: '#F9AD1F',
        },
        red: {
          light: '#F9D2D3',
          DEFAULT: '#A4161A',
        },
        green: {
          light: '#D7F4F5',
          DEFAULT: '#2A9D8F',
          hover: '#5fc7ba',
        },
        blue: {
          light: '#D2DADE',
          DEFAULT: '#00344D',
          hover: '#014b73',
        },
        grey: {
          light: '#ECECEC',
          DEFAULT: '#D8D8D8',
        },
        button: {
          light: '#B2C2C9',
          DEFAULT: '#00344D',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    nextui(),
  ],
};

export default config;
