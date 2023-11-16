/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      smallest: "1rem",
      smaller: "1.5rem",
      small: "2rem",
      big: "2.5rem",
      bigger: "3rem",
      biggest: "3.5rem",
      large: "4rem",
      larger: "4.5rem",
      largest: "5rem",
      "extra-large": "10rem",
    },
    fontWeight: {
      light: "400",
      bold: "900",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        smallest: "1rem",
        smaller: "1.5rem",
        small: "2rem",
        big: "2.5rem",
        bigger: "3rem",
        biggest: "3.5rem",
        large: "4rem",
        larger: "4.5rem",
        largest: "5rem",
        "extra-large": "10rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
