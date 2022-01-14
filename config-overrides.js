const path = require("path");

module.exports = {
  paths: function (paths, env) {
    paths.appIndexJs = path.resolve(__dirname, "src/views/index.js");
    paths.appSrc = path.resolve(__dirname, "src/views");
    return paths;
  }
};
