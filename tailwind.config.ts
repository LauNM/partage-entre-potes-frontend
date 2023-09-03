import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      white: '#FFF',
      primary: {
        light: '#FEEDCD',
        DEFAULT: '#F9AD1F'
      },
      red: {
        light: '#F9D2D3',
        DEFAULT: '#A4161A'
      },
      green: {
        light: '#D7F4F5',
        DEFAULT: '#2A9D8F',
        hover: '#5fc7ba'
      },
      blue: {
        light: '#D2DADE',
        DEFAULT: '#00344D',
        hover: '#014b73'
      },
      grey: {
        light: '#ECECEC',
        DEFAULT: '#D8D8D8'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
export default config
