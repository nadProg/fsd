module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'feature-sliced-design',
    'unused-imports',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', 'tsx'] },
    ],
    'no-underscore-dangle': ['error', { allow: ['__IS_DEV__'] }],
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        onlyAttribute: [''],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'feature-sliced-design/relative-path-within-slice': [
      'error',
      { alias: '@' },
    ],
    'feature-sliced-design/public-api-slice-import': [
      'error',
      {
        alias: '@',
        ignoreLayers: ['shared', 'app'],
        testFiles: [
          '**/*.test.{ts,tsx}',
          '**/*.stories.tsx',
          '**/storybook/**/*[decorator].{ts,tsx}',
        ],
      },
    ],
    'feature-sliced-design/layers-hierarchy': [
      'error',
      {
        alias: '@',
        ignoredImports: ['**/app/providers/StoreProvider'],
        ignoredFiles: ['**/storybook/**/*[decorator].{ts,tsx}'],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API_URL: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
