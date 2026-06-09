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
        warm:      "#4A4A4A",
      },
      fontFamily: {
        script: ["'Cormorant Garamond'", "serif"],
        serif:  ["'Playfair Display'", "serif"],
        sans:   ["'Lato'", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.8s ease forwards",
        "fade-in":    "fadeIn 1.2s ease forwards",
        "float":      "float 8s ease-in-out infinite",
        "petal-fall": "petalFall 10s ease-in infinite",
        "bloom":      "bloom 1.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":      { transform: "translateY(-14px) rotate(3deg)" },
        },
        petalFall: {
          "0%":   { transform: "translateY(-20px) rotate(0deg)", opacity: 0.8 },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: 0 },
        },
        bloom: {
          "0%":   { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};