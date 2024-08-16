import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import assetMinifier from '@playform/compress'
import imageCompressor from 'astro-better-image-service'
import assetCompressor from 'astro-compressor'
import metadata from 'astro-meta-tags'
import insights from 'astro-page-insight'
import purgecss from 'astro-purgecss'
import { defineConfig } from 'astro/config'
import { FontaineTransform } from 'fontaine'

/** @type {boolean} */
const isProd = process.env.NODE_ENV === 'production'

/** @type {string} */
const site = isProd
  ? 'https://maisonquiroga.art'
  : `http://localhost:${process.env.PORT || 4321}`

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
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR' }
      },
      lastmod: new Date()
    }),
    tailwind(),
    metadata(),
    insights(),
    purgecss(),
    assetMinifier({ Image: false, SVG: false }),
    imageCompressor(),
    assetCompressor()
  ],
  site,
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: ['Helvetica'],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url)
      })
    ]
  }
})
