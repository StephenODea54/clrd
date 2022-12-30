/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'freight-sans-bold': ['FreightSansBold', 'sans-serif'],
        'proxima-nova-bold': ['ProximaNovaBold', 'sans-serif'],
        'proxima-nova-regular': ['ProximaNovaRegular', 'sans-serif'],
      },
      backgroundImage: {
        'stadium': "url('../public/images/stadium.webp')",
      },
    },
  },
  plugins: [],
}
