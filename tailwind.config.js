/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#001736',
        'brand-gray-dark': '#4a494a',
        'brand-gray-medium': '#a6aeb9',
        'brand-gray-light': '#ECECEF',
        'brand-gray-lighter': '#F5F5F5',
        'brand-accent': '#b9aa73',
        'brand-accent-light': '#e1dac3',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        display: ['var(--font-oswald)'],
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
}