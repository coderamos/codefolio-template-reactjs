module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'react-hooks',
    'prettier',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-raw-text': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    camelcase: 'off',
    'react/button-has-type': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^redux/'],
          '/styled-components/',
          'module',
          '/prop-types/',
          '/^~/pages/',
          '/^~/components/', 
          ['parent', 'sibling', 'index'],
          '/routes/', 
          '/^~/', 
          '/styles/', 
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
      node: {
        paths: ['src'],
      },
    },
  },
};
