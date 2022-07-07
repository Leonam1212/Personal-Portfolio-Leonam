/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Raleway, sans-serif",
      },
      keyframes: {
        typing: {
          "0%": { width: 0 },
        },

        blink: {
          "50%": { borderColor: "transparent" },
        },
      },

      animation: {
        typing:
          "typing 4s steps(22) infinite alternate, blink .5s step-end infinite alternate",
      },

      colors: {
        green: {
          300: "#00B37E",
          500: "#00875F",
          700: "#015F43",
        },
        blue: {
          500: "#81D8F7",
        },
        orange: {
          500: "#FBA94C",
        },
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
