/** @type {import("prettier").Config} */
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
    'prettier-plugin-astro',
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
