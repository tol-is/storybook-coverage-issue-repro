/** @type {import("eslint").Linter.Config} */

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'unicorn',
    'simple-import-sort',
    'unused-imports',
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
  ],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions'],
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': 'allow-with-description',
        'ts-check': true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
