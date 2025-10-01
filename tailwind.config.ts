import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: 'var(--brand-gold)',
          black: 'var(--brand-black)',
        },
      },
      boxShadow: {
        header: '0 6px 24px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
}
export default config
