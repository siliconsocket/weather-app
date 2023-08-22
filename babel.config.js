module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {},
  },
  plugins: [
    ['optional-require'],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          _atoms: './src/components/atoms/',
          _molecules: './src/components/molecules/',
          _organisms: './src/components/organisms/',
          _templates: './src/components/templates/',
          _views: './src/components/views/',
          _icons: './src/resources/icons/',
          _fonts: './src/resources/fonts/',
          _images: './src/resources/images/',
          _utils: './src/utils/',
          _navigators: './src/navigators/',
          _hooks: './src/hooks/',
        },
      },
    ],
  ],
};
