/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "25%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        slideUp: "slideUp 4s ease-in infinite",
      },
    },
  },
  plugins: [],
};
