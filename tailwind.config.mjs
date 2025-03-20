/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Jost', 'sans-serif'],
        secondary: ['Monomakh', 'sans-serif'],
      },
      colors: {
        primary: "#ff3d71",
        secondary: "",
        light: "#fff",
        dark: "#1a1a1a",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          // sm: "640px",
          // md: "768px",
          // lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
