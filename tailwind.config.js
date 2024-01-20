/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '2px 1px 1px #fff, 3px 1px 0 1px rgb(146, 219, 127)',
        hover: '3px 2px #84C318',
        search: '6px 6px 1px #fff, 8px 8px 1px 1px #84c318'
      },
    },
  },
  plugins: [],
}

