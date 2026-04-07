import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5A2B",
        background: "#000000",
        surface: "#0a0a0a",
        "on-surface": "#ffffff",
        "on-surface-variant": "#CCCCCC",
        "neutral-900": "#1a1a1a",
        "neutral-950": "#0d0d0d",
      },
      fontFamily: {
        serif: ["Prata", "serif"],
        sans: ["Eirene Sans", "sans-serif"],
        technical: ["Outfit", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0rem",
        lg: "0rem",
        xl: "0rem",
        full: "9999px",
      },
      letterSpacing: {
        "technical": "0.3em",
        "technical-wide": "0.4em",
        "technical-wider": "0.5em",
      },
    },
  },
  plugins: [],
};

export default config;
