/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#4B65E2",
        "primary-2": "#2A4BC4",
        "primary-3": "#61B8FF",
        "neutral-1": "#555555",
        "neutral-2": "#9DA0AA",
        "neutral-3": "#D0D3DD",
        "neutral-4": "#E8EBF6",
        "blue-light-1": "#D6ECFF",
        "blue-light-2": "#E2ECF4",
        "blue-light-3": "#E6F4FF",
        "blue-light-4": "#ECF4FA",
      },
      fontFamily: {
        gothic: "Gothic",
        manjari: "Manjari",
      },
    },
  },
  plugins: [],
}
