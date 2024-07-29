import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://redte.ch',
  compressHTML: true,
  integrations: [tailwind()]
})
