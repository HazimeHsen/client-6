import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e30615",
        secondary: "#fcdedd",
        customColor1: "#ffffff",
        customColor2: "#f9c8cc",
      },
    },
  },
  plugins: [],
};
export default config;
