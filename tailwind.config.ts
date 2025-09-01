import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit:["Outfit","sans-serif"]
      },
      colors: {
        primary:"#004056",
        borders:"#E9EAEA",
        link:"#109CF1",
        "ctx-dark":"#F2952F",
        shadowDark:"#0C1A20",
        "ctx-green":"#007369",
        dark: {
          bg: "#030304",
          text: "#FFFFFF",
          primary: "#3265F5",
          secondary: "#151515",
          tertiary: "#009499",
        },
        button:{
          dark:"#004056"
        },

        light: {
          bg: "#FBFBFB",
          text: "#24282E",
          primary: "#3A8A8C",
          "primary-red": "#B8001F",
          secondary: "#727A90",
          main: "#004056",
        },
        gray: {
          light:"#F5F5F5"
        }
      },
    },
  },
  plugins: [],
  darkMode: "class",
  important:true
};
export default config;
