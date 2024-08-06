import tailwindcss from 'eslint-plugin-tailwindcss'
import functional from 'eslint-plugin-functional'
import prettier from 'eslint-config-prettier'
import neostandard from 'neostandard'

const standard = neostandard({
  ignores: [
    ...neostandard.resolveIgnoresFromGitignore(),
    '**/should-be-ignored/**'
  ],
  ts: true
})

export default [
  ...tailwindcss.configs['flat/recommended'],
  functional.configs.recommended,
  functional.configs.stylistic,
  prettier,
  ...standard,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: await import('astro-eslint-parser'),
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
      parser: await import('svelte-eslint-parser'),
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
      '@stylistic/jsx-indent': 'off',
      'functional/no-let': 'off',
      'react/jsx-key': 'off',
      'tailwindcss/no-custom-classname': 'off'
    }
  }
]
