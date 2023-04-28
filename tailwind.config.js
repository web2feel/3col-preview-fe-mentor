/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
      },
      fontFamily:{
        "big-shoulders": ["Big Shoulders Display", "cursive"],
        "lexend-decca": ["Lexend Deca", "sans-serif"]
      }

    },
  },
  plugins: [],
};
