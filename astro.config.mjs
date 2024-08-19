import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import imageCompressor from 'astro-better-image-service'
import assetCompressor from 'astro-compressor'
import metadata from 'astro-meta-tags'
import insights from 'astro-page-insight'
import purgecss from 'astro-purgecss'

import assetMinifier from '@playform/compress'
import { FontaineTransform } from 'fontaine'

/** @type {boolean} */
const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {object}
 * @todo Move this to a config file.
 */
const sitemapConfig = {
  i18n: {
    defaultLocale: 'fr',
    locales: { fr: 'fr-FR' }
  },
  lastmod: new Date()
}

/** @type {object} */
const assetMinifierConfig = {
  Image: false,
  SVG: false
}

/** @type {number} */
const port = 4321

/**
 * @type {string}
 * @todo Move this to a config file (at least the production URL).
 */
const site = isProd ? 'https://maisonquiroga.art' : `http://localhost:${port}`

/**
 * @type {object}
 * @todo Move this to a config file.
 */
const vite = {
  plugins: [
    FontaineTransform.vite({
      fallbacks: ['Helvetica'],
      resolvePath: (id) => new URL(`./public${id}`, import.meta.url)
    })
  ]
}

/** @type {import('astro').AstroUserConfig} */
// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'public',
    inlineStylesheets: 'always'
  },
  compressHTML: true,
  integrations: [
    svelte(),
    sitemap(sitemapConfig),
    tailwind(),
    /* @ts-ignore */
    metadata(),
    insights(),
    purgecss(),
    assetMinifier(assetMinifierConfig),
    imageCompressor(),
    assetCompressor()
  ],
  output: 'static',
  server: {
    port
  },
  site,
  trailingSlash: 'always',
  vite
})
