/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ["**/*.twig", "*.theme", "inc/**/*.inc"],
  content: require("fast-glob").sync(["**/*.twig"]),
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
