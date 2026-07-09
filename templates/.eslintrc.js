module.exports = {
  root: true,
  env: { node: true, browser: true, es2022: true },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  rules: {},
};
