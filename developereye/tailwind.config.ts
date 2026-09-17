import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3D5C',
          50: '#eef7fb',
          100: '#d9edf6',
          200: '#b3dbee',
          300: '#7fc2e2',
          400: '#3fa1cd',
          500: '#1c81ac',
          600: '#0f5f85',
          700: '#0B3D5C',
          800: '#082b41',
          900: '#051b29'
        },
        secondary: {
          DEFAULT: '#06B6D4',
          light: '#a5f3fc',
          dark: '#0e7490'
        },
        success: '#16a34a',
        warning: '#d97706',
        error: '#dc2626',
        info: '#06B6D4',
        dark: {
          DEFAULT: '#071624',
          light: '#0d2436'
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)'
      }
    }
  },
  plugins: []
}

export default config
