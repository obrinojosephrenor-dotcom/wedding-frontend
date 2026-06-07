/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream:     "#eceee3",
        ivory:     "#f4f6ee",
        sage:      "#7d936c",
        dusty:     "#aab992",
        champagne: "#445c3f",
        parchment: "#ccd5b5",
        espresso:  "#2c3b28",
        light:     "#ccd5b5",
        mid:       "#aab992",
        deep:      "#445c3f",
        forest:    "#2d3d29",
      },
      fontFamily: {
        script: ["'Cormorant Garamond'", "serif"],
        serif:  ["'Playfair Display'", "serif"],
        sans:   ["'Lato'", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.8s ease forwards",
        "fade-in":    "fadeIn 1s ease forwards",
        "float":      "float 6s ease-in-out infinite",
        "petal-fall": "petalFall 8s ease-in infinite",
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
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        petalFall: {
          "0%":   { transform: "translateY(-20px) rotate(0deg)", opacity: 1 },
          "100%": { transform: "translateY(100vh) rotate(360deg)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};