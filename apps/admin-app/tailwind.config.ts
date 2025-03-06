// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type { Config } from 'tailwindcss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{ts,tsx}', '../../libs/ui/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.5rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      colors: {
        primary: '#0097ff',
        secondary: '#eef5fb',
        accent: '#ff7849',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [typography], // Use the imported plugin
} satisfies Config;
