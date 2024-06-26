import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  purge: {
    options: {
      safelist: ["prose", "prose-sm", "m-auto", /^rise-up$/],
    }
  },
  plugins: [require("@tailwindcss/typography")],
};