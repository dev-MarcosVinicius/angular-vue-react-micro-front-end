const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "single-spa-microfrontend-angular-vue-react",
    projectName: "react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {});
};