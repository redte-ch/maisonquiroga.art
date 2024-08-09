/** @type {import('prettier').Config} */
export default {
  // StandardJS
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  importOrder: [
    '<TYPES>',
    '<TYPES>^(#)',
    '<TYPES>^(~)',
    '<TYPES>^[.]',
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^[#/](.*)$',
    '',
    '^[~/](.*)$',
    '',
    '^[!/](.*)$',
    '',
    '^[./]'
  ],
  insertPragma: false,
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  // Astro
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-astro',
    'prettier-plugin-jsdoc',
    'prettier-plugin-pkg',
    'prettier-plugin-sh',
    'prettier-plugin-svelte',
    'prettier-plugin-tailwindcss'
  ],
  overrides: [
    {
      files: '**/*.astro',
      options: {
        parser: 'astro'
      }
    },
    {
      files: '**/*.svelte',
      options: {
        parser: 'svelte'
      }
    }
  ]
}
