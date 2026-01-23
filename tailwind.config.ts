/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            light: '#28a351',
            DEFAULT: '#1a7a3a',
            dark: '#125629',
          },
          maroon: {
            light: '#d63e3e',
            DEFAULT: '#b02121',
            dark: '#8a1a1a',
          },
          gold: {
            light: '#f9e44f',
            DEFAULT: '#f1c40f',
            dark: '#c09c0c',
          }
        }
      }
    },
  },
  plugins: [],
}
