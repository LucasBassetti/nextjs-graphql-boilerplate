const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@themes'] = path.join(__dirname, 'themes');

    return config;
  }
};
