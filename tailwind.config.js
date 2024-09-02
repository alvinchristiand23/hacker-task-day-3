/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        'source-sans-3': ['Source Sans 3', 'sans-serif'],
      },
      colors: {
        'bg-color': 'rgb(var(--bg-color) / <alpha-value>)',
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'gradient-start': 'rgb(var(--gradient-start) / <alpha-value>)',
        'gradient-end': 'rgb(var(--gradient-end) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
