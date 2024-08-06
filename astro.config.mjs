import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import metadata from 'astro-meta-tags'
import insights from 'astro-page-insight'
import betterImage from 'astro-better-image-service'
import compress from '@playform/compress'
import { FontaineTransform } from 'fontaine'

/** @type {import('astro').AstroUserConfig} */
// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always'
  },
  compressHTML: true,
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
