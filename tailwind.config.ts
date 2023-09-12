import type { Config } from 'tailwindcss'
import {undefined} from "zod";
import plugin from "@tailwindcss/forms";

const config: {
  plugins: (plugin | ((options?: Partial<{ strategy: "base" | "class" }>) => { handler: () => void }))[];
  theme: {
    extend: { backgroundImage: { "gradient-conic": string; "gradient-radial": string } };
    fontSize: { xl: string[]; sm: string[]; lg: string[]; base: string[] };
    colors: {
      red: { light: string; DEFAULT: string };
      green: { hover: string; light: string; DEFAULT: string };
      white: string;
      blue: { hover: string; light: string; DEFAULT: string };
      primary: { light: string; dark: string; DEFAULT: string };
      grey: { light: string; DEFAULT: string };
      button: { DEFAULT: string };
      buttonBackground: { DEFAULT: string };
    }
  };
  content: string[]
} = {
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
    fontSize: {
      sm: ['10px', '16px'],
      base: ['12px', '18px'],
      lg: ['14px', '20px'],
      xl: ['16px', '24px'],
    },
    colors: {
      white: '#FFF',
      primary: {
        light: '#FEEDCD',
        dark: '#4B3102',
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
      },
      button: {
        DEFAULT: '#B2C2C9'
      },
      buttonBackground: {
        DEFAULT: '#00344D'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
export default config
