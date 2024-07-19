module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ["nativewind/babel",'react-native-paper/babel', "@realm/babel-plugin", "react-native-reanimated/plugin", ["@babel/plugin-proposal-decorators", { legacy: true }]],
      },
    },
  };
};