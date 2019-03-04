module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  rules: {
    strict: 0,
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
}
