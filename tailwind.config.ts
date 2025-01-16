import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#181414",
        secondary: "#D9D9D9",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "admin-primary": "#00CA7A",
        "admin-accent": "#6FD3AB"
      },
    },
  },
  plugins: [],
} satisfies Config;
