/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          dark: '#4B45C6',
          light: '#9C96FF',
        },
        surface: '#0E1122',
        accent: '#5CE1E6',
      },
    },
  },
  plugins: [],
};
