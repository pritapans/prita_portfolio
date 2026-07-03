/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#06070A',
          900: '#0A0D13',
          800: '#10141C',
          700: '#171C26',
          600: '#232935',
          500: '#3A4150',
        },
        paper: {
          50: '#F7F8FA',
          100: '#EDEFF3',
          200: '#DADFE6',
        },
        mint: {
          400: '#5EEAD4',
          500: '#2DD4BF',
          600: '#14B8A6',
        },
        violet: {
          400: '#B39DFF',
          500: '#8B7BFF',
          600: '#6C5CE7',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-light': 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
        'grid-dark': 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px,-30px)' },
          '100%': { transform: 'translate(0,0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
