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
          2: "#101828",
        },
        green: {
          1: "#01C087",
        },
        black: {
          1: "#333333",
          2: "#696969",
          3: "#000000",
        },
        grey: {
          1: "#FFF6F9",
          2: "#EAEAEA",
          3: "#4D4D4D",
          4: "#DBDBDB",
          5: "#5D7183",
          6: "#344054",
          7: "#F2F4F7",
          8: "#475467",
          9: "#434343",
        },
        yellow: {
          1: "#FFD954",
          2: "#EA8B1B",
          3: "#FDD992",
        },
      },
      boxShadow: {
        default: "0px 64px 64px -48px rgba(15, 15, 15, 0.1)",
        1: "0px 12px 30px 0px #0000001A",
        2: "0px 2.4065446853637695px 25.870359420776367px 1.2032723426818848px #0000000D",
      },
    },
  },
  plugins: [],
};
export default config;
