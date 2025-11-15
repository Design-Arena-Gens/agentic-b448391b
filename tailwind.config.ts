import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-calsans)", "Inter", "sans-serif"]
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at center, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.06) 40%, transparent 70%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(104,116,255,0.2), rgba(70,217,217,0.2))"
      },
      boxShadow: {
        glow: "0 0 60px 20px rgba(104,116,255,0.25)",
        card: "0 30px 60px -20px rgba(14, 30, 37, 0.35)"
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        "float-slow": "float-slow 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite"
      },
      colors: {
        brand: {
          50: "#F5F8FF",
          100: "#E6ECFF",
          200: "#C4D3FF",
          300: "#A2BAFF",
          400: "#7FA1FF",
          500: "#5D88FF",
          600: "#3B6FFF",
          700: "#2457EA",
          800: "#1A40B3",
          900: "#102A7C"
        }
      }
    }
  },
  plugins: []
};

export default config;
