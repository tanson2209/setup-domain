/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: 'jit', // <-- add this line
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx}',
    // './src/packages/**/*.{js,ts,jsx,tsx}',
    // './src/views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
     
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FFCC21',
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00',

        },
        secondary: {
          DEFAULT: '#8FE9D0',
          300: '#8FE9D0',
        },
        dark: {
          400: '#777',
          500: '#414141',
          600: '#2E2E2E',
          
        },
        light: {
          50: '#FFFFFF',
          100: '#F2F2F7',
          200: '#E5E5EA',
          300: '#C7C7CC',
          400: '#AEAEB2',
        },
        info: '#026DD8',
        success: '#51CE48',
        warning: '#FC9700',
        danger: '#FF3064',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const screens = theme('screens', {});
      addComponents([
        {
          '.container': { width: '100%' },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            '.container': {
              'max-width': '540px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            '.container': {
              'max-width': '720px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            '.container': {
              'max-width': '960px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            '.container': {
              'max-width': '1140px',
            },
          },
        },
        {
          [`@media (min-width: ${screens['2xl']})`]: {
            '.container': {
              'max-width': '1200px',
            },
          },
        },
      ]);
    }),
    require('@tailwindcss/line-clamp'),
  ],
};
