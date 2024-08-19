import type { Readable } from 'svelte/store'

import type { WithContext } from 'schema-dts'

import type { City } from '^/entities'

import { get, readable } from 'svelte/store'

import { chili, france } from '+/CountryStore'

export const paris: Readable<WithContext<City>> = readable({
  '@context': 'https://schema.org',
  '@type': 'City',
  name: 'Paris',
  containedInPlace: get(france)
})

export const valparaiso: Readable<WithContext<City>> = readable({
  '@context': 'https://schema.org',
  '@type': 'City',
  name: 'Valparaíso',
  containedInPlace: get(chili)
})
