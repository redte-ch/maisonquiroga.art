import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import metadata from 'astro-meta-tags'
import insights from 'astro-page-insight'
import sitemap from '@astrojs/sitemap'
import purgecss from 'astro-purgecss'
import assetMinifier from '@playform/compress'
import imageCompressor from 'astro-better-image-service'
import assetCompressor from 'astro-compressor'
import { FontaineTransform } from 'fontaine'

import type { AstroIntegration } from 'astro'

export const i18n = {
  defaultLocale: 'fr',
  locales: { fr: 'fr-FR' }
}

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'public',
    inlineStylesheets: 'always'
  },
  compressHTML: true,
  integrations: [
    tailwind(),
    svelte(),
    metadata(),
    insights(),
    sitemap({
      i18n,
      lastmod: new Date()
    }),
    purgecss(),
    assetMinifier({ Image: false, SVG: false }),
    imageCompressor() as AstroIntegration,
    assetCompressor()
  ],
  site: 'https://maisonquiroga.art',
  vite: {
    logLevel: 'error',
    optimizeDeps: {
      exclude: ['@playform/compress', 'fsevents', 'lightningcss', 'vitefu']
    },
    plugins: [
      FontaineTransform.vite({
        fallbacks: ['Helvetica'],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url)
      })
    ]
  }
})
