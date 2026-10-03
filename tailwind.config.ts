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
        brand: {
          green: "#1ecd56", // Direct extraction from logo
          leaf: "#16a34a",
          forest: "#0f381e",
          deep: "#082111",
          emerald: "#059669",
          mint: "#ecfdf5"
        },
        saffron: {
          50: "#fffbeb",
          100: "#fef3c7",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        nature: {
          paper: "#fcfbf7", // Default Light organic linen neutral
          surface: "#ffffff",
          muted: "#f4f3ed",
          border: "#e5e3d8",
          darkBg: "#061209",
          darkCard: "#0b1f11",
          darkBorder: "rgba(30, 205, 86, 0.2)"
        }
      },
      fontFamily: {
        display: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -10px rgba(15, 56, 30, 0.08)",
        elevated: "0 20px 40px -15px rgba(15, 56, 30, 0.12)",
        glow: "0 0 25px rgba(30, 205, 86, 0.35)",
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        }
      }
    },
  },
  plugins: [],
};
export default config;
