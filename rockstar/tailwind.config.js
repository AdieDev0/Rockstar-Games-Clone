/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Platinum: '#e8e8e8',
      },
      fontFamily: {
        Moderustic: ["Moderustic"],
      }
    },
  },
  plugins: [],
}