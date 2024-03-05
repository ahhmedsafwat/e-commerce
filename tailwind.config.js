/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitedark: "#F0F0F0",
        primary: "#FFFFFF",
        secondory: "#000000",
      },
      fontFamily: {
        satoshiBold: ["Satoshi-Bold", "sans-serif"],
        satoshi500: ["Satoshi-Medium", "sans-serif"],
        satoshireguler: ["Satoshi-Regular", "sans-serif"],
        secondary: ["intergralcf-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
