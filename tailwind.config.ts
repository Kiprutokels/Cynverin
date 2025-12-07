import type { Config } from "tailwindcss";

export default {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",  // 16px
        sm: "2rem",       // 32px
        lg: "4rem",       // 64px
        xl: "6rem",       // 96px
      },
    },
  },
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
} satisfies Config;
