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
      keyframes: {
        fade: {
          "0%, 100%": { opacity: "0" },
          "33%": { opacity: "1" },
        },
      },
      animation: {
        "fade-image-1": "fade 6s infinite 0s",
        "fade-image-2": "fade 6s infinite 2s",
        "fade-image-3": "fade 6s infinite 4s",
      },
    },
  },
  plugins: [],
};
export default config;
