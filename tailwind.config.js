module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f1b4c",
        sky: "#2f6bff",
        amber: "#ffb547",
        paper: "#f3f6fb",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        lift: "0 24px 60px -20px rgba(15, 27, 76, 0.35)",
      },
    },
  },
  plugins: [],
};
