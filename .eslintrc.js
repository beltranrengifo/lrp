module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],

  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
  },

  // add your custom rules here

  rules: {},
}
