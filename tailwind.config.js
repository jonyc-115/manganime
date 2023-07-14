/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024",
      xl: "1280px",
    },
  },
  plugins: [],
};
