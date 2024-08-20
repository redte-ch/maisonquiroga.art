import prettier from 'eslint-config-prettier'
import astro from 'eslint-plugin-astro'
import functional from 'eslint-plugin-functional'
import svelte from 'eslint-plugin-svelte'
import tailwind from 'eslint-plugin-tailwindcss'
import neostandard from 'neostandard'
import { parser } from 'typescript-eslint'

import restrictedImports from './src/config/imports-policy.mjs'

const standard = neostandard({
  ignores: neostandard.resolveIgnoresFromGitignore(),
  noStyle: true,
  ts: true
})

export default [
  ...tailwind.configs['flat/recommended'],
  ...standard,
  functional.configs.externalTypeScriptRecommended,
  functional.configs.recommended,
  functional.configs.stylistic,
  prettier,
  ...astro.configs.recommended,
  ...svelte.configs['flat/recommended'],
  ...svelte.configs['flat/prettier'],
  ...restrictedImports,
  {
    rules: {
      '@stylistic/comma-dangle': 'off',
      '@stylistic/jsx-indent': 'off',
      '@typescript-eslint/prefer-readonly': 'off',
      '@typescript-eslint/switch-exhaustiveness-check': 'off',
      'functional/no-expression-statements': 'off',
      'functional/no-return-void': 'off'
    }
  },
  {
    files: ['**/*.{js,cjs,mjs,ts}'],
    languageOptions: {
      parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    files: ['*.{js,cjs,mjs,ts}', 'src/**/*.{js,cjs,mjs,ts}'],
    rules: {
      'functional/no-expression-statements': 'error',
      'functional/no-return-void': 'error',
      'functional/no-throw-statements': [
        'error',
        { allowToRejectPromises: true }
      ]
    }
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@stylistic/indent': 'off'
    }
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: await import('astro-eslint-parser'),
      parserOptions: {
        parser,
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.astro']
      }
    },
    rules: {
      'prettier/prettier': 'off',
      'react/jsx-key': 'off'
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: await import('svelte-eslint-parser'),
      parserOptions: {
        parser,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.svelte']
      }
    },
    rules: {
      'functional/no-let': 'off'
    }
  },
  {
    files: ['**/*.{astro,svelte}'],
    rules: {
      'tailwindcss/no-custom-classname': 'off'
    }
  },
  {
    ignores: ['.astro/types.d.ts']
  }
]
