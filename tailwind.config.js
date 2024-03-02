/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteText: "#fefcf7;",
        specialGreen: "#0E8784;",
      },
      fontFamily: {
        "body-font1": ["Fraunces", "serif"],
        "body-font2": ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
