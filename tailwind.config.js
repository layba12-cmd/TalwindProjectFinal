/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        laiba: "#6B705C",
        maryam: "#FFFFFF",
        secondary: "#F5F5F0",
        olivie: "#6B705C",
        cream: "#FFFFFF",
        charcoal: "#333333",
      },
      screens: {
        ssm: "30rem",
        laptop: "1024px",
        desktop: "1280px",
        wide: "1536px",
        xm: "112rem",
      },
    },
  },
  plugins: [],
};

