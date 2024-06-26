/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        aboutCofee:
          "url('/src/assets/images/about/mobile/image-hero-whitecup.jpg')",
        aboutCup: "url('/src/assets/images/about/mobile/image-quality.jpg')",
        aboutHero:
          "url('/src/assets/images/about/mobile/image-commitment.jpg')",
        imageHeroBlackcup:
          "url('src/assets/images/plan/mobile/image-hero-blackcup.jpg')",
      },
      colors: {
        hoverDark: "#333D4B",
        hoverCream: "#FDD6BA",
        hovertBlue: "#66D2CF",
        whiteText: "#fefcf7;",
        specialGreen: "#0E8784",
        modalGradient:
          "linear-gradient(180deg, rgba(254, 252, 247, 0.50) 0%, #FEFCF7 55.94%)",
        "text-gradient":
          "linear-gradient(180deg,rgba(254,252,247,.0001) 0%,#FEFCF7 100%)",
        darkBlue: "#333D4B",
        lightBlue: "#2C343E",
        light: "#FEFCF7",
        hulk: "#0E8784",
        gray: "#83888F",
        cream: "#FDD6BA",
        footerBg: "#2C343E",
        gray2: "#F4F1EB",
      },
      fontFamily: {
        "body-font1": ["Fraunces", "serif"],
        "body-font2": ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
