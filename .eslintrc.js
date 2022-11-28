module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:nuxt/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['cypress', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
  },
}
