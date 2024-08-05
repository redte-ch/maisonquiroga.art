const tailwindcss = require('eslint-plugin-tailwindcss')
const functional = require('eslint-plugin-functional/flat')
const prettier = require('eslint-config-prettier')
const standard = require('neostandard')({
  ignores: [
    ...require('neostandard').resolveIgnoresFromGitignore(),
    '**/should-be-ignored/**'
  ],
  ts: true
})

// eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
module.exports = [
  ...tailwindcss.configs['flat/recommended'],
  functional.configs.recommended,
  functional.configs.stylistic,
  prettier,
  ...standard,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: require('astro-eslint-parser'),
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['.astro']
      }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: require('svelte-eslint-parser'),
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['.svelte']
      }
    }
  },
  {
    rules: {
      '@stylistic/comma-dangle': 'off',
      'functional/no-let': 'off',
      'tailwindcss/no-custom-classname': 'off'
    }
  }
]
