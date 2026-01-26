module.exports = {
  overrides: [
    {
      exclude: /\/node_modules\//,
      presets: [],
    },
    {
      include: /\/node_modules\//,
      presets: ['module:@react-native/babel-preset'],
    },
  ],
};
