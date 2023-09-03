import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      translate: {
        screen: "-100vh",
      },
      screens: {
        phone: "500px",
      },
      fontFamily: {
        airbnbcereal: ["AirbnbCereal", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        book: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        xtrabold: "800",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        danger: "#CD190C",
        pink: {
          1: "#FE6EA3",
          2: "#FFDBE8",
        },
        blue: {
          1: "#43A4F5",
        },
        green: {
          1: "#01C087",
        },
        black: {
          1: "#333333",
          2: "#696969",
        },
        grey: {
          1: "#FFF6F9",
          2: "#EAEAEA",
          3: "#4D4D4D",
          4: "#DBDBDB",
          5: "#5D7183",
        },
      },
      boxShadow: {
        default: "0px 64px 64px -48px rgba(15, 15, 15, 0.1)",
        1: "0px 12px 30px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
export default config;
