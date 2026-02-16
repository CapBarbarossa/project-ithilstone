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
        "glass-10": "rgba(255, 255, 255, 0.1)",
        "glass-20": "rgba(255, 255, 255, 0.2)",
        "glass-30": "rgba(255, 255, 255, 0.3)",
      },
      animation: {
        "breathe-slow": "breathe 10s infinite ease-in-out alternate",
        "breathe-medium": "breathe 7s infinite ease-in-out alternate-reverse",
        "breathe-fast": "breathe 5s infinite ease-in-out alternate",
      },
      keyframes: {
        breathe: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

