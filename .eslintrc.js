const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  root: true,
  extends: [
    'plugin:jest/recommended',
    '@react-native-community',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['jest', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': [RULES.WARN, {allow: ['warn', 'error', 'info']}],
    'react-hooks/exhaustive-deps': RULES.OFF,
    curly: RULES.OFF,
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_.*?$',
      },
    ],
  },
};
