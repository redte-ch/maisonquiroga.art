/** Type {import('eslint').Linter.Config} */
export default [
  {
    files: ['src/core/domain/**/*'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: ['^(?!.*(schema-dts|\\$\\/|\\^\\/)).*$']
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
          patterns: ['^(?!.*(schema-dts|\\$\\/|\\@\\/|\\^\\/)).*$']
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
          patterns: ['^(?!.*(lowdb|\\$\\/utils|\\^\\/ports)).*$']
        }
      ]
    }
  }
]

// @todo Finish this. Forbid outward dependencies.
