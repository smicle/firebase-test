module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
  rules: {
    semi: ['warn', 'never'],
    'block-spacing': ['warn', 'never'],
    quotes: ['warn', 'single'],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-console': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
