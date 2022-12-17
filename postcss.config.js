const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
    tailwindcss,
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/**/*.js", "./public/index.html"],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};
