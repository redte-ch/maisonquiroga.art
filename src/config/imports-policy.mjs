/** Type {import('eslint').Linter.Config} */
export default [
  {
    files: ['src/core/domain/**/*'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '^(?!(schema-dts|\\$\\/|\\^\\/)).*$'
            }
          ]
        }
      ]
    }
  },
  {
    files: ['src/core/app/**/*'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [{ regex: '^(?!(schema-dts|\\$\\/|@\\/|\\^\\/)).*$' }]
        }
      ]
    }
  },
  {
    files: ['src/adapters/infrastructure/**/*'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '^(?!(lowdb|\\$/utils|\\$/types|&/)).*$'
            }
          ]
        }
      ]
    }
  },
  {
    files: ['src/adapters/ui/**/*'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '^(?!(astro|svelte|tailwind|\\$/types|=/|\\+/|;/)).*$'
            }
          ]
        }
      ]
    }
  },
  {
    files: ['src/adapters/stores/**/*'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '^(?!(schema-dts|svelte|\\^/|\\+/)).*$'
            }
          ]
        }
      ]
    }
  }
]

// @todo Finish this. Forbid outward dependencies.
// @todo extract schema-dts from stores.
// @todo extract svelte/store, use nano-stores.
// @todo extract entities from stores.
// @todo extract svelte/store from ui.
// @todo extract tailwind config from ui.
