import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3436',    // Dark Charcoal
        secondary: '#DFE6E9',  // Light Gray
        accent: '#0984E3',     // Ocean Blue
        background: '#FFFFFF', // Pure White
        text: '#2D3436',      // Dark Charcoal
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config 