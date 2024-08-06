import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import metadata from 'astro-meta-tags'
import insights from 'astro-page-insight'
import betterImage from 'astro-better-image-service'
import compress from '@playform/compress'

/** @type {import('astro').AstroUserConfig} */
// https://astro.build/config
export default defineConfig({
  site: 'https://maisonquiroga.art',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always'
  },
  integrations: [
    svelte(),
    tailwind(),
    metadata(),
    insights(),
    betterImage(),
    compress({
      Image: false,
      SVG: false
    })
  ]
})
