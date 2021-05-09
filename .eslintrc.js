const path = require('path')

module.exports = {
  ignorePatterns: ['.eslintrc.js', '.babelrc.js', 'webpack.config.js', 'public'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'commma-dangle': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: { config: path.join(__dirname, '/webpack.config.js') },
    },
  },
}
