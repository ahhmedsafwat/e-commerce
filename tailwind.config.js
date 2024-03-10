/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { min: "1280px" },
        // => @media (min-width: 1535px) { ... }

        "xl": { max: "1279px" , min: "1071px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1070px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "840px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "651px" },
        // => @media (max-width: 639px) { ... }
      },
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
