import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import metadata from 'astro-meta-tags'
import insights from 'astro-page-insight'
import purgecss from 'astro-purgecss'
import assetMinifier from '@playform/compress'
import imageCompressor from 'astro-better-image-service'
import assetCompressor from 'astro-compressor'
import { FontaineTransform } from 'fontaine'

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
  site: 'https://maisonquiroga.art',
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: ['Helvetica'],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url)
      })
    ]
  }
})
