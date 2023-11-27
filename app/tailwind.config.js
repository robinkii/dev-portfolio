import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        myLightTheme: {
          primary: '#ad00ff',
          secondary: '#0028ff',
          accent: '#76b100',
          neutral: '#252a3f',
          'base-100': '#fcfcfc',
          info: '#00b1ff',
          success: '#1fa43e',
          warning: '#b38200',
          error: '#ff6095',
        },

        myDarkTheme: {
          primary: '#ad00ff',
          secondary: '#0028ff',
          accent: '#76b100',
          neutral: '#fcfcfc',
          'base-100': '#252a3f',
          info: '#00b1ff',
          success: '#1fa43e',
          warning: '#b38200',
          error: '#ff6095',
        },
      },
    ],
  },
};
