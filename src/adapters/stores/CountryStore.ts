import type { Readable } from 'svelte/store'

import type { WithContext } from 'schema-dts'

import type { Country } from '^/entities'

import { readable } from 'svelte/store'

export const france: Readable<WithContext<Country>> = readable({
  '@context': 'https://schema.org',
  '@type': 'Country',
  name: 'France'
})

export const chili: Readable<WithContext<Country>> = readable({
  '@context': 'https://schema.org',
  '@type': 'Country',
  name: 'Chili'
})
