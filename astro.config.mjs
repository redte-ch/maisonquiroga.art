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

import app from './src/config/app.ts'
import assets from './src/config/assets.ts'

/** @type {'production' | 'development'} */
const mode = import.meta.env.PROD ? 'production' : 'development'

/** @type {import('astro').AstroUserConfig} */
// https://astro.build/config
export default defineConfig({
  build: {
    assets: assets[mode].output,
    inlineStylesheets: assets[mode].inline
  },
  compressHTML: assets[mode].compression.HTML,
  integrations: [
    svelte(),
    sitemap(app[mode].sitemap),
    tailwind(),
    /* @ts-ignore */
    metadata(),
    insights(),
    purgecss(),
    assetMinifier(assets[mode].compression),
    imageCompressor(),
    assetCompressor()
  ],
  output: 'static',
  site: app[mode].site,
  trailingSlash: 'always',
  vite: {
    plugins: [FontaineTransform.vite(assets[mode].fonts(import.meta.url))]
  }
})
