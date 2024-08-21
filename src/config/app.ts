/**
 * Site configuration.
 *
 * @module app
 */

type Sitemap = {
  i18n: {
    defaultLocale: string
    locales: { [key: string]: string }
  }
  lastmod: Date
}

const sitemap: Sitemap = {
  i18n: {
    defaultLocale: 'fr',
    locales: { fr: 'fr-FR' }
  },
  lastmod: new Date()
}

type Config = {
  site: string
  sitemap: Sitemap
}

type App = {
  production: Config
  development: Config
}

const app: App = {
  production: {
    site: 'https://maisonquiroga.art',
    sitemap
  },
  development: {
    site: 'http://localhost:4321',
    sitemap
  }
}

export default app
