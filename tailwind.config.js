/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design System Crasto.AI
        navy: '#031238',
        depth: '#021A4A',
        accent: '#2E6F9E',
        accent2: '#1B3A5C',
        ink: '#0B1B3A',
        muted: '#5A6781',
        line: '#E2E8F2',
        line2: '#D7DEEA',
        bg2: '#F3F6FB',
        good: '#1F7A57',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        crasto: 'cubic-bezier(.22,.61,.36,1)',
      },
      boxShadow: {
        glow: '0 30px 70px -34px rgba(11,27,58,.3)',
        'glow-accent': '0 14px 30px -8px rgba(46,111,158,.9)',
      },
      maxWidth: {
        wrap: '1100px',
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
}
