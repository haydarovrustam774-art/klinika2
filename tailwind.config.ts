import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const hsl = (v: string) => `hsl(var(--${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1rem', md: '2rem' }, screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        background: hsl('background'),
        foreground: hsl('foreground'),
        surface: hsl('surface'),
        border: hsl('border'),
        input: hsl('border'),
        ring: hsl('ring'),
        muted: { DEFAULT: hsl('muted'), foreground: hsl('muted-foreground') },
        primary: { DEFAULT: hsl('primary'), foreground: hsl('primary-foreground') },
        secondary: { DEFAULT: hsl('secondary'), foreground: hsl('secondary-foreground') },
        accent: { DEFAULT: hsl('accent'), foreground: hsl('accent-foreground') },
        destructive: { DEFAULT: hsl('destructive'), foreground: hsl('destructive-foreground') },
        card: { DEFAULT: hsl('card'), foreground: hsl('foreground') },
        // Faqat bezak uchun (matn/tugma uchun emas): kontrast AA dan past
        brand: { from: hsl('brand-from'), to: hsl('brand-to') },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'var(--font-body)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '20px',
        xl: '28px',
        md: '14px',
        sm: '10px',
      },
      boxShadow: {
        soft: '0 20px 60px -20px hsl(var(--brand-from) / 0.25), 0 8px 24px -12px hsl(222 47% 11% / 0.12)',
        glow: 'var(--glow)',
      },
      transitionTimingFunction: { brand: 'cubic-bezier(.22,1,.36,1)' },
      transitionDuration: { fast: '200ms', base: '400ms', slow: '800ms' },
    },
  },
  plugins: [animate],
};

export default config;
