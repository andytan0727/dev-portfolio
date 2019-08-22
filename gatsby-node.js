const path = require("path");

exports.onCreateWebpackConfig = function({ actions }) {
  // for ts paths resolution
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
      },
    },
  });
};
