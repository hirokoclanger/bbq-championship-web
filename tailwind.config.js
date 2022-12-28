/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grill1': "url('/img/grill1.jpg')",
        'grill2': "url('/img/grill2.jpg')",
        'grill3': "url('/img/grill3.jpg')",
        'logo': "url('/img/logo.png')",
      }

    },
  },
  plugins: [],
}
