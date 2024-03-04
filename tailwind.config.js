/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteText: "#fefcf7;",
        specialGreen: "#0E8784",
        "text-gradient":
          "linear-gradient(180deg,rgba(254,252,247,.0001) 0%,#FEFCF7 100%)",
        darkBlue: "#333D4B",
        lightBrown: "#FDD6BA",
      },
      fontFamily: {
        "body-font1": ["Fraunces", "serif"],
        "body-font2": ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
