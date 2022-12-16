// webpack.mix.js
// npx mix
// npx mix watch
// npx mix --production

let mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix
  //.js("./src/js/main.js", "js")
  .sass("./src/scss/styles.scss", "css")
  .options({
    postCss: [tailwindcss("./tailwind.config.js")],
  });