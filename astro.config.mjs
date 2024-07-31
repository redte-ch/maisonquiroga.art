import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import betterImage from 'astro-better-image-service'
import compress from '@playform/compress'

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: 'https://maisonquiroga.art',
  compressHTML: true,
  integrations: [
    tailwind(),
    betterImage(),
    compress({ Image: false, SVG: false })
  ]
})
