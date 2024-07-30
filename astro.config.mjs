import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: 'https://maisonquiroga.art',
  compressHTML: true,
  integrations: [tailwind()]
})
