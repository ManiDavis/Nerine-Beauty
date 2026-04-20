import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#080F22",
          900: "#0B1730",
          800: "#0F1E42",
          700: "#142456",
          600: "#1A2E6B",
        },
        gold: {
          300: "#EAD4A0",
          400: "#D4B87C",
          500: "#C4A05A",
          600: "#A88040",
          700: "#8A6430",
        },
        cream: {
          100: "#FDF7EC",
          200: "#F8F0DC",
          300: "#F0E2C0",
          400: "#E8D4A8",
          500: "#DCBF88",
        },
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
