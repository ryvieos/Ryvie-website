/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ryvie-blue': '#00D4FF',
        'ryvie-dark': '#0F172A',
        'ryvie-gray': '#64748B',
        'ryvie-navy': '#050B1F',
        'ryvie-navy-2': '#071B3D',
        'ryvie-electric': '#1B6CFF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
