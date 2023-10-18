/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lexend' : 'Lexend',
        'inter' : 'Inter',
        'dela' : 'Dela Gothic One',
        'dm-sans' : 'DM Sans',
        'monrope' : 'Manrope'
      }
    },
  },
  plugins: [],
};
