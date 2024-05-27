/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        archivo : ["archivo"],
        archivosemibold : ["archivo-semibold"],
        archivothin : ["archivo-thin"],
        archivosemibolditalic : ["archivo-semibold-italic"],
        archivolight : ["archivo-light"],
        redditsanslight : ["redditsans-light"],
        redditsanssemibold : ["redditsans-semibold"],
        redditsansitalic : ["redditsans-italic"],
        redditsanssemibolditalic : ["redditsans-semibold-italic"],
        redditsansbold : ["redditsans-bold"],
        redditsans : ["redditsans-regular"]
      },
    },
  },
  plugins: [],
};
