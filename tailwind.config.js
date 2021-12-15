module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#F8F8FB",
        background2: "#FFFF",
        background3: "#3C3C3C",
        background4: "#000",
      },
    },
    fontFamily: {
      "Proxima Nova": "Proxima Nova",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
