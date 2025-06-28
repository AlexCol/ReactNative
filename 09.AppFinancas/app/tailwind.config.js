/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#F0F4FF",
        submitButton: "#3B3DBF",
        linkText: "#171717",
      },
      margin: {
        "logo": "25px",
        "30px": "30px",
        "15px": "15px",
      },
      width: {
        "90%": "90%",
      },
      maxHeight: {
        "15": "60px",
      },
      fontSize: {
        "17px": "17px",
        "22px": "22px",
      }
    },
  },
  plugins: [],
}