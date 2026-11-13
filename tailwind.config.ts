import type { Config } from "tailwindcss";

// Brand colours sampled from the logo.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { light: "#1f4c86", DEFAULT: "#0b2d5c", dark: "#061c3b" },
        saffron: { light: "#ffe3c4", DEFAULT: "#f57c00", dark: "#c45f00" },
        leaf: { light: "#e3f1d6", DEFAULT: "#3c9302", dark: "#2c6d02" },
        ink: { DEFAULT: "#1c2433", soft: "#3b4558", muted: "#5f6b7d" },
        cream: { DEFAULT: "#fbfaf6", deep: "#f2efe6" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "74rem" },
    },
  },
  plugins: [],
};

export default config;
