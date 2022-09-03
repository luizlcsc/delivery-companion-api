module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      { tabWidth: 2, singleQuote: true, trailingComma: 'es5' },
    ],
  },
  plugins: ['prettier', 'jsdoc'],
  extends: [
    'standard-with-typescript',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
  ],
};
