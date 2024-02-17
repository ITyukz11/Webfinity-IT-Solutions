import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "highlight":"#3c81f1",
        "dark":"#0E0D0D",
        "alternative-white":"#F3F2F2",
        "sidebar-light":"#BFDBFE",
        "sidebar-dark":"#1F1F1F",      
      },
    },
  },
  plugins: [],
};
export default config;
