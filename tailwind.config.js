/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1F44",
          dark: "#051024",
          light: "#132F5C",
        },
        darkBg: "#111111",
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#AA8C2C",
          light: "#F3E5AB",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
