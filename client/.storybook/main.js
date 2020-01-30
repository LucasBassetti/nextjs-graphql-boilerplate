module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/preset-typescript'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.tsx$/,
      loader: ['babel-loader', 'awesome-typescript-loader']
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
};
