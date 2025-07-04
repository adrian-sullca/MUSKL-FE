import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "510px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        "primary-color": {
          "50": "#f1f5f9",
          "100": "#e2e8f0",
          "200": "#cbd5e1",
          "300": "#94a3b8",
          "400": "#64748b",
          "500": "#475569",
          "600": "#334155",
          "700": "#1e293b",
          "800": "#0f172a",
          "900": "#0e1524",
          "950": "#0a0f1c",
          DEFAULT: "#0f172a",
        },
        "secondary-color": {
          "50": "#f1f3f6",
          "100": "#e1e5ec",
          "200": "#c3cad9",
          "300": "#a3adc5",
          "400": "#8491b2",
          "500": "#677599",
          "600": "#4d5a77",
          "700": "#36425a",
          "800": "#182234",
          "900": "#121a2a",
          "950": "#0b0f18",
          DEFAULT: "#182234",
        },
        "tertiary-color": {
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e",
          "950": "#082f49",
          DEFAULT: "#38bdf8",
          foreground: "#0f172a",
        },
        "quaternary-color": {
          "50": "#f9f9f9",
          "100": "#f2f2f2",
          "200": "#e5e5e5",
          "300": "#cccccc",
          "400": "#858585",
          "500": "#6e6e6e",
          "600": "#5a5a5a",
          "700": "#484848",
          "800": "#2f2f2f",
          "900": "#1a1a1a",
          "950": "#0a0a0a",
          DEFAULT: "#858585",
        },
        primaryColor: "#0f172a",
        secondaryColor: "#182234",
        tertiaryColor: "#25ace8",
        borderSecondaryColor: "#253144",
        textPrimaryColor: "#cbd5e1",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
