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
        surface: {
          primary: "#0A0B0D",
          secondary: "#111214",
          elevated: "#16181C",
          border: "#1E2024",
          borderSubtle: "#1A1C20",
        },
        text: {
          primary: "#F2F2F2",
          secondary: "#B8BCC2",
          tertiary: "#6B7280",
          muted: "#4B5563",
        },
        orange: {
          base: "#C94E14",
          cta: "#F26522",
          glow: "#FF7A1A",
          peak: "#FFA33A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.8125rem", { lineHeight: "1.25rem" }],
        base: ["0.9375rem", { lineHeight: "1.5rem" }],
        lg: ["1.0625rem", { lineHeight: "1.625rem" }],
        xl: ["1.1875rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.375rem", { lineHeight: "2rem" }],
        "3xl": ["1.75rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem", { lineHeight: "4.25rem" }],
        "7xl": ["4.5rem", { lineHeight: "5rem" }],
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0em",
        wide: "0.02em",
        wider: "0.05em",
        widest: "0.1em",
        technical: "0.15em",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
        lg: "6px",
      },
      animation: {
        "flow-slow": "flowSlow 25s linear infinite",
        "flow-medium": "flowMedium 20s linear infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "dash-flow": "dashFlow 30s linear infinite",
      },
      keyframes: {
        flowSlow: {
          "0%": { strokeDashoffset: "2000" },
          "100%": { strokeDashoffset: "0" },
        },
        flowMedium: {
          "0%": { strokeDashoffset: "1600" },
          "100%": { strokeDashoffset: "0" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dashFlow: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
