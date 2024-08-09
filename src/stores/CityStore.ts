import type { Readable } from 'svelte/store'
import type { City } from '~/schemas'

import { get, readable } from 'svelte/store'

import { chili, france } from '~/stores/CountryStore'

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
