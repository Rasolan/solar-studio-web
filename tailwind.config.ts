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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#2563eb',
        secondary: '#475569',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        unbounded: ['var(--font-unbounded)'],
      },
    },
  },
  plugins: [],
}

export default config;
