/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0a0f1f',
        'neon-purple': '#6a5acd',
        'brand-white': '#ffffff',
        'slate-blue': '#1e293b',
        'light-slate': '#94a3b8'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      animation: {
        'aurora': 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
    },
  },
  plugins: [],
}
