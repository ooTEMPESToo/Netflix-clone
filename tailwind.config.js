/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  plugins: [
    require("tailwind-scrollbar-hide"),
    "@emotion/babel-plugin",
    "babel-plugin-twin",
  ],
};
