import { get, readable } from 'svelte/store'
import { france, chili } from '@stores/CountryStore'

import type { Readable } from 'svelte/store'
import type { City } from '~/schemas'

export const paris: Readable<City> = readable({
  '@context': 'https://schema.org',
  '@type': 'City',
  name: 'Paris',
  containedInPlace: get(france)
})

export const valparaiso: Readable<City> = readable({
  '@context': 'https://schema.org',
  '@type': 'City',
  name: 'Valparaíso',
  containedInPlace: get(chili)
})
