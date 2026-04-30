/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Halka palette — koyu zümrüt + parşömen + mürekkep
        ink: {
          50:  '#f7f5f0',
          100: '#ebe7dd',
          200: '#d6cfbb',
          300: '#b8ad8f',
          400: '#8f835f',
          500: '#6b6041',
          600: '#4f4731',
          700: '#3a3424',
          800: '#26211a',
          900: '#191510',
        },
        emerald: {
          DEFAULT: '#0e6b5e',
          light: '#1d8e7a',
          dark: '#063f37',
        },
        carmine: '#9c2a3b',
      },
      fontFamily: {
        serif: ['Crimson Pro', 'EB Garamond', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
