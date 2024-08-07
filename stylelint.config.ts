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
    'order/properties-alphabetical-order': null,
    'suitcss/custom-property-no-outside-root': true,
    'suitcss/root-no-standard-properties': true,
    'suitcss/selector-root-no-composition': true,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['AC', 'C-201D', 'D48-1D49', 'F-2030', 'A', 'B3', 'C', 'F']
      }
    ],
    'plugin/selector-bem-pattern': {
      preset: 'suit',
      implicitComponents: 'src/components/**/*.{astro,svelte}'
    }
  }
}
