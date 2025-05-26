/** @type {import('tailwindcss').Config} */
export default {
  darkMode : ["class"],
  safelist : ['dark'],
  prefix : "",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

