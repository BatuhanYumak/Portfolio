/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        navy: '#0D1B2A',
        muted: '#6B7280',
        border: '#E5E7EB',
      },
    },
  },
  plugins: [],
}
