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
          1: "#C4C4C4",
        },
      },
      boxShadow: {
        default: "0px 64px 64px -48px rgba(15, 15, 15, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
