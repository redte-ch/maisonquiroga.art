export default {
  extends: [
    '@archoleat/stylelint-config-extended-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-config-cloudfour-suit',
    'stylelint-config-tailwindcss/scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-astro'
  ],
  plugins: ['stylelint-suitcss', 'stylelint-selector-bem-pattern'],
  rules: {
    'at-rule-disallowed-list': ['extend'],
    'suitcss/custom-property-no-outside-root': true,
    'suitcss/root-no-standard-properties': true,
    'suitcss/selector-root-no-composition': true,
    'plugin/selector-bem-pattern': {
      preset: 'suit',
      implicitComponents: 'src/components/**/*.{astro,svelte}'
    }
  }
}
