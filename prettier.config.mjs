/** @type {import('prettier').Config} */
import sortedImports from './src/config/imports-order.mjs'

/** @type {import('prettier').Config} */
export default {
  // StandardJS
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
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
  // Sorted imports
  ...sortedImports
}
