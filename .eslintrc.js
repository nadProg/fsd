module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', 'tsx'] },
    ],
    'no-underscore-dangle': ['error', { allow: ['__IS_DEV__'] }],
    'react/jsx-props-no-spreading': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'i18next/no-literal-string': ['error', { markupOnly: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
};