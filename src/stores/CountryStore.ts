import type { Readable } from 'svelte/store'
import type { Country } from '~/schemas'

import { readable } from 'svelte/store'

export const france: Readable<Country> = readable({
  '@context': 'https://schema.org',
  '@type': 'Country',
  name: 'France',
  identifier: 'FR'
})

export const chili: Readable<Country> = readable({
  '@context': 'https://schema.org',
  '@type': 'Country',
  name: 'Chili',
  identifier: 'CL'
})
