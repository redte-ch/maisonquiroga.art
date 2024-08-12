import type { PostalAddress, WithContext } from 'schema-dts'
import type { Readable } from 'svelte/store'

import { readable } from 'svelte/store'

export const adresseRedtech: Readable<WithContext<PostalAddress>> = readable({
  '@context': 'https://schema.org',
  '@type': 'PostalAddress',
  streetAddress: '70 rue Duhesme',
  postalCode: '75018',
  addressLocality: 'Paris',
  addressRegion: 'Île-de-France',
  addressCountry: 'FR',
  name: 'redtech',
  url: 'https://www.openstreetmap.org/way/41506054'
})

export const adresseMaisonQuiroga: Readable<WithContext<PostalAddress>> =
  readable({
    '@context': 'https://schema.org',
    '@type': 'PostalAddress',
    name: 'Galería Lugar Inamible',
    streetAddress: 'Lautaro Rosas 558, Cerro Alegre',
    postalCode: '2340000',
    addressLocality: 'Valparaíso',
    addressRegion: 'Valparaíso',
    addressCountry: 'CL',
    url: 'https://www.openstreetmap.org/way/1304668361'
  })
