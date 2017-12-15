module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  extends: "eslint:recommended",
  env: {
    es6: true,
    browser: true
  },
  rules: {
    /* using two spaces for indentation */
    "indent": ["error", 2]
  }
};
