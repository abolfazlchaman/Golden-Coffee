/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-normalize")(),
    require("postcss-autoreset")(),
  ],
};

module.exports = config;
