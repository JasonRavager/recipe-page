/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        nutmeg: "hsl(14, 45%, 36%)",
        darkraspberry: "hsl(332, 51%, 32%)",
        rosewhite: "hsl(330, 100%, 98%)",
        eggshell: "hsl(30, 54%, 90%)",
        lightgrey: "hsl(30, 18%, 87%)",
        wengebrown: "hsl(30, 10%, 34%)",
        darkcharcoal: "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        youngserif: ["'Young Serif'", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
