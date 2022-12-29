/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grill1': "url('/img/grill1.jpg')",
        'grill2': "url('/img/grill2.jpg')",
        'grill3': "url('/img/grill3.jpg')",
        'grill4': "url('/img/grill4.jpg')",
        'grill5': "url('/img/grill5.jpg')",
        'grill6': "url('/img/grill6.jpg')",
        'wood': "url('/img/wood.jpg')",
        'logo': "url('/img/logo.png')",
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
