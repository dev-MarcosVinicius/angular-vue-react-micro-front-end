const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  let removeDup = {};
  singleSpaWebpackConfig.entry.main = singleSpaWebpackConfig.entry.main.filter((item) => {
    if(!removeDup[item]) {
      removeDup[item] = true;
      return true;
    }
    return false;
  });
  return singleSpaWebpackConfig;
};
