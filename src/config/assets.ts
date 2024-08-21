/**
 * Assets configuration.
 *
 * @module assets
 */

type Compression = {
  Image: boolean
  HTML: boolean
  SVG: boolean
}

const compression: Compression = {
  Image: false,
  HTML: true,
  SVG: false
}

type Inline = 'always' | 'auto' | 'never'
const inline: Inline = 'always'

type Output = string
const output = 'public'

type Fonts = (url: string) => {
  fallbacks: string[]
  resolvePath: (id: string) => URL
}

const fonts: Fonts = (url) => {
  return {
    fallbacks: ['Helvetica'],
    resolvePath: (id) => new URL(`public/${id}`, url)
  }
}

type Config = {
  compression: Compression
  fonts: Fonts
  inline: Inline
  output: Output
}

const config: Config = {
  compression,
  fonts,
  inline,
  output
}

type Assets = {
  production: Config
  development: Config
}

const assets: Assets = {
  production: config,
  development: config
}

export default assets
