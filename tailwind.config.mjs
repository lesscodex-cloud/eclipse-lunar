/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-soft': 'var(--color-surface-soft)',
        border: 'var(--color-border)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-strong)',
          light: 'var(--color-primary-soft)',
        },
        accent: 'var(--color-accent)',
      },
      borderRadius: {
        xl: 'var(--radius-lg)',
        lg: 'var(--radius-md)',
        md: 'var(--radius-sm)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        glow: 'var(--shadow-glow)',
      },
      backgroundImage: {
        'page-glow': 'var(--gradient-page)',
        spotlight: 'var(--gradient-spotlight)',
      },
    },
  },
  plugins: [],
};
