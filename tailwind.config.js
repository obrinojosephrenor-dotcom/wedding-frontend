/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream:     "#FAF9F6",
        ivory:     "#FFFFFF",
        sage:      "#A8B89F",
        dusty:     "#F7D6E0",
        champagne: "#C9A96E",
        parchment: "#DDEAF7",
        espresso:  "#4A4A4A",
        blush:     "#F7D6E0",
        powder:    "#DDEAF7",
        rose:      "#F4B8CC",
        warm:      "#4A4A4A",
      },
      fontFamily: {
        script: ["'Cormorant Garamond'", "serif"],
        serif:  ["'Playfair Display'", "serif"],
        sans:   ["'Lato'", "sans-serif"],
        bodoni: ["'Bodoni Moda'", "serif"],
      },
    },
  },
  plugins: [],
};