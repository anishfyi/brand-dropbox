import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dropbox-blue': '#0061FF',
        'dropbox-dark': '#1E1E1E',
        'dropbox-light': '#F5F5F5',
        'accent-tab': 'var(--accent--tab)',
      },
      fontFamily: {
        'noto-mono': ['Noto Sans Mono', 'monospace'],
        'sharp-grotesk': ['Dbsharpgroteskvariable Vf', 'sans-serif'],
      },
      animation: {
        'draw-in': 'drawIn 1.25s cubic-bezier(.4,0,.3,1) forwards 0.5s',
      },
      keyframes: {
        drawIn: {
          to: {
            strokeDashoffset: '0',
          },
        },
      },
      spacing: {
        'button-size': 'var(--button-size)',
        'nav-tile-gap': 'var(--nav-tile-gap)',
      },
      transitionTimingFunction: {
        'tile': 'cubic-bezier(.4,0,.2,1)',
      },
    },
  },
  plugins: [],
}

export default config 