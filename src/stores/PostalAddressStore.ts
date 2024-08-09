import type { Readable } from 'svelte/store'
import type { PostalAddress } from '~/schemas'

import { get, readable } from 'svelte/store'

import { paris, valparaiso } from '~/stores/CityStore'
import { chili, france } from '~/stores/CountryStore'

export const adresseRedtech: Readable<PostalAddress> = readable({
  '@context': 'https://schema.org',
  '@type': 'PostalAddress',
  streetAddress: '70 rue Duhesme',
  postalCode: '75018',
  addressLocality: get(paris).name,
  addressRegion: 'Île-de-France',
  addressCountry: get(france),
  name: 'redtech',
  url: new URL('https://www.openstreetmap.org/way/41506054')
})

export const adresseMaisonQuiroga: Readable<PostalAddress> = readable({
  '@context': 'https://schema.org',
  '@type': 'PostalAddress',
  name: 'Galería Lugar Inamible',
  streetAddress: 'Lautaro Rosas 558, Cerro Alegre',
  postalCode: '2340000',
  addressLocality: get(valparaiso).name,
  addressRegion: get(valparaiso).name,
  addressCountry: get(chili),
  url: new URL('https://www.openstreetmap.org/way/1304668361')
})
