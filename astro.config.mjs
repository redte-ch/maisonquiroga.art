import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://maisonquiroga.art',
  compressHTML: true,
  integrations: [tailwind()]
})
