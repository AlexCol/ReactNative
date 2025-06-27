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
      },
      width: {
        "90%": "90%",
      },
      fontSize: {
        "17px": "17px",
        "20px": "20px",
      }
    },
  },
  plugins: [],
}