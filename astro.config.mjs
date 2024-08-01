import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import metadata from 'astro-meta-tags'
import insights from 'astro-page-insight'
import betterImage from 'astro-better-image-service'
import compress from '@playform/compress'

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: 'https://maisonquiroga.art',
  compressHTML: true,
  integrations: [
    tailwind(),
    metadata(),
    insights(),
    betterImage(),
    compress({ Image: false, SVG: false })
  ]
})
