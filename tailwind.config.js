/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060D1F',
          900: '#0B1630',
          800: '#111E3A',
          700: '#1A2B50',
        },
        indigo: {
          400: '#818CF8',
          500: '#6366F1',
        },
        danger: '#EF4444',
        warn: '#F59E0B',
        success: '#10B981',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
