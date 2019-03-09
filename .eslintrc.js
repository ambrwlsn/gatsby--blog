module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    strict: 0,
    'prettier/prettier': 'error',
    'react/prop-types': [1, { skipUndeclared: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
}
