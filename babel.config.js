module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@Screens': './src/screens',
            '@Assets': './src/assets',
            '@Components': './src/components',
            '@Contenxt': './src/contenxt',
            '@Hooks': './src/hooks',
            '@Routes': './src/routes',
            '@Services': './src/services',
            '@Styles': './src/styles',
            '@Constants': './src/constants',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
