import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: "#592FB4",
      darkPurple: "#230086",
      gold: "#FFB544",
      red: "#DD0F5E",
      white: "#F5F6FA",
      light: "#DFE4EA",
      pink: "#FBEAFF",
      grey: "#808080",
      darkGrey: "#4B4453",
      black: "#161C29",
      transparent: "transparent",
    },
    spacing: {
      0: "0",
      3: "0.3rem",
      4: "0.4rem",
      8: "0.8rem",
      12: "1.2rem",
      16: "1.6rem",
      20: "2rem",
      24: "2.4rem",
      32: "3.2rem",
      36: "3.6rem",
      40: "4rem",
      42: "4.2rem",
      53: "5.3rem",
      60: "6rem",
      80: "8rem",
      120: "12rem",
      150: "15rem",
      180: "18rem",
      202: "20.2rem",
      237: "23.7rem",
      250: "25rem",
      280: "28rem",
      320: "32rem",
      326: "32.6rem",
      400: "40rem",
      450: "45rem",
    },
    fontSize: {
      8: "0.8rem",
      12: "1.2rem",
      14: "1.4rem",
      16: "1.6rem",
      18: "1.8rem",
      24: "2.4rem",
      28: "2.8rem",
      32: "3.2rem",
      42: "4.2rem",
      60: "6rem",
      250: "25rem",
    },
    borderRadius: {
      4: "0.4rem",
      8: "0.8rem",
      circle: "50%",
    },
    extend: {
      translate: {
        "1/2": "-50%",
      },
      rotate: {
        65: "65deg",
        135: "135deg",
      },
      lineHeight: {
        200: "20rem",
      },
      scale: {
        60: '0.6'
      }
    },
    screens: {
      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "550px" },
      // => @media (max-width: 550px) { ... }

      xxs: { max: "360px" },
      // => @media (max-width: 300px) { ... }
    },
  },
  plugins: [],
};
export default config;
