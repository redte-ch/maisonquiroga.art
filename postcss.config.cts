/* eslint-disable functional/no-expression-statements,functional/immutable-data */
module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')(),
    require('autoprefixer')(),
    require('cssnano')()
  ]
}
