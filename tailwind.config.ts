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
        // Industrial premium palette
        carbon: {
          DEFAULT: "#0A0A0B",
          50: "#1A1A1D",
          100: "#141417",
          200: "#0F0F12",
          300: "#0A0A0B",
          400: "#080809",
          500: "#050506",
        },
        electric: {
          DEFAULT: "#0066FF",
          50: "#E6F0FF",
          100: "#B3D1FF",
          200: "#80B3FF",
          300: "#4D94FF",
          400: "#1A75FF",
          500: "#0066FF",
          600: "#0052CC",
          700: "#003D99",
          800: "#002966",
          900: "#001433",
          glow: "#00A6FF",
        },
        steel: {
          DEFAULT: "#8A93A6",
          50: "#F5F6F8",
          100: "#E8EAEF",
          200: "#D1D5DD",
          300: "#A8AEBC",
          400: "#8A93A6",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        platinum: {
          DEFAULT: "#F5F7FA",
          50: "#FFFFFF",
          100: "#F8FAFC",
          200: "#F5F7FA",
          300: "#E2E8F0",
        },
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        accent: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "industrial-gradient":
          "linear-gradient(135deg, #0A0A0B 0%, #141417 50%, #0F0F12 100%)",
        "electric-gradient":
          "linear-gradient(135deg, #0066FF 0%, #00A6FF 100%)",
        "carbon-radial":
          "radial-gradient(circle at 50% 50%, #1A1A1D 0%, #0A0A0B 100%)",
        "mesh-grid":
          "linear-gradient(rgba(0,102,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.05) 1px, transparent 1px)",
        "glow-electric":
          "radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(0, 102, 255, 0.25)",
        glow: "0 0 40px rgba(0, 102, 255, 0.35)",
        "glow-lg": "0 0 80px rgba(0, 102, 255, 0.45)",
        cinematic:
          "0 25px 80px -20px rgba(0,0,0,0.8), 0 0 60px -15px rgba(0,102,255,0.15)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.05)",
        industrial:
          "0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.4",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "scroll-x": "scroll-x 40s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "scan-line": "scan-line 8s linear infinite",
      },
      letterSpacing: {
        tightest: "-0.06em",
        "extra-wide": "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
