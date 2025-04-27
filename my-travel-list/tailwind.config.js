/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-orange": "#FF8303",
        "dark-orange": "#A35709",
        black: "#1B1A17",
        gray: "#242320",
        white: "#F0E3CA",
      },
      gridTemplateRows: {
        "custom-parent": "auto auto 1fr auto",
      },
      gridTemplateColumns: {
        "custom-packing-list": "repeat(auto-fit, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};
