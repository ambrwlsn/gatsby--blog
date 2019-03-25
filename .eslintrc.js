module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    strict: 0,
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

// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//     node: true,
//   },
//   plugins: ['react', 'prettier', 'react-hooks'],
//   globals: {
//     graphql: false,
//   },
//   parserOptions: {
//     sourceType: 'module',
//     ecmaFeatures: {
//       experimentalObjectRestSpread: true,
//       jsx: true,
//     },
//   },
// }
