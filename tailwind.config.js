/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(247, 223, 30)', // Amarillo principal
        secondary: 'rgb(240, 190, 37)', // Hover / acentos
        tertiary: 'rgb(228, 161, 38)', // Detalles
        'primary-invert': '#0820e1',
        bg: '#f9f9f9',
        ink: '#202020',
        'ink-light': '#4b4b4b',
      },
      fontFamily: {
        sans: ['Ubuntu', 'Segoe UI', 'sans-serif'],
        mono: ['LiberationMono', 'Ubuntu', 'sans-serif'],
        'mono-bold': ['LiberationMonoBold', 'Ubuntu', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        card: '0 8px 20px rgba(0, 0, 0, 0.08)',
        glow: '0 0 0 3px rgba(247, 223, 30, 0.25)',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.8' },
          '50%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-110vh) scale(0.8)', opacity: '0' },
        },
        spin: {
          '0%': { transform: 'rotate(-90deg) scale(0.5)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        spinIn: 'spin 1.5s ease-out forwards',
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
