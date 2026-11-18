/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0D0E12',
          surface: '#14161E',
          card: '#181B26',
          border: '#242838',
          hover: '#2D3245',
        },
        crimson: {
          DEFAULT: '#B81D13',
          dark: '#8B120B',
          bright: '#E22519',
          glow: 'rgba(184, 29, 19, 0.35)',
        },
        cobalt: {
          DEFAULT: '#0F4C81',
          dark: '#0A3256',
          bright: '#1B6CB5',
          glow: 'rgba(15, 76, 129, 0.35)',
        },
        stone: {
          DEFAULT: '#F4F2EC',
          surface: '#ECE9E0',
          card: '#E3DFD4',
          border: '#D4CFC2',
          muted: '#8A8578',
        },
        carbon: {
          DEFAULT: '#111215',
          muted: '#4A4D58',
          light: '#525664',
        },
        telemetry: {
          amber: '#F59E0B',
          emerald: '#10B981',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
      },
      transitionTimingFunction: {
        'curtain': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring-smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
