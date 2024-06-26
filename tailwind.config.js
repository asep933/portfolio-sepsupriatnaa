/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        "pp-gua": "url('../public/pp_gua.png')",
      },
      screens: {
        "2xl": "1230px",
      },
      colors: {
        primary: "#EEF7FF",
        secondary: "#CDE8E5",
        third: "#7AB2B2",
        fourth: "#4D869C",
      },
    },
  },
  plugins: [],
};
