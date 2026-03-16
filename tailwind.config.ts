import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ------------------------------------------------------------------ */
      /*  Brand palette — warm travel / vacation feel                        */
      /* ------------------------------------------------------------------ */
      colors: {
        brand: {
          /** Sky-blue primary — clear skies, water */
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        accent: {
          /** Amber / golden-hour accent */
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        surface: {
          /** Neutral card/surface backgrounds */
          DEFAULT: "#ffffff",
          subtle: "#f8fafc",
          muted: "#f1f5f9",
          border: "#e2e8f0",
        },
      },

      /* ------------------------------------------------------------------ */
      /*  Typography                                                         */
      /* ------------------------------------------------------------------ */
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },

      /* ------------------------------------------------------------------ */
      /*  Border radius                                                      */
      /* ------------------------------------------------------------------ */
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      /* ------------------------------------------------------------------ */
      /*  Animations — used by FaceScanner ring pulse and upload states      */
      /* ------------------------------------------------------------------ */
      keyframes: {
        "face-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(14,165,233,0.5)" },
          "50%": { boxShadow: "0 0 0 14px rgba(14,165,233,0)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "face-pulse": "face-pulse 2s ease-in-out infinite",
        "fade-in": "fade-in 0.25s ease-out both",
        shimmer: "shimmer 1.6s linear infinite",
      },

      /* ------------------------------------------------------------------ */
      /*  Box shadows                                                        */
      /* ------------------------------------------------------------------ */
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)",
        "card-hover":
          "0 4px 12px 0 rgb(0 0 0 / 0.10), 0 2px 6px -2px rgb(0 0 0 / 0.08)",
        photo:
          "0 2px 8px 0 rgb(0 0 0 / 0.15), 0 1px 3px -1px rgb(0 0 0 / 0.1)",
      },

      /* ------------------------------------------------------------------ */
      /*  Spacing extras                                                     */
      /* ------------------------------------------------------------------ */
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },

      /* ------------------------------------------------------------------ */
      /*  Aspect ratios                                                      */
      /* ------------------------------------------------------------------ */
      aspectRatio: {
        photo: "4 / 3",
        portrait: "3 / 4",
      },
    },
  },
  plugins: [],
};

export default config;
