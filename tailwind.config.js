/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",

        "source-sans": ['"Source Sans Pro"', "sans-serif"],
      },
      boxShadow: {
        "custom-inset": "inset 0 0 0.25em 0 rgba(0, 0, 0, 0.125)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "footer-texture": "url('/portfolio/overlay.png')",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover", "focus"],
    },
  },
  plugins: [],
};
