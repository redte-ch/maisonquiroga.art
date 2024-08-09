import type { Readable } from 'svelte/store'
import type { GeoCoordinates } from '~/schemas'

import { get, readable } from 'svelte/store'

import { chili } from '~/stores/CountryStore'
import { adresseMaisonQuiroga } from '~/stores/PostalAddressStore'

const { name, url } = get(adresseMaisonQuiroga)

export const geoMaisonQuiroga: Readable<GeoCoordinates> = readable({
  '@context': 'https://schema.org',
  '@type': 'GeoCoordinates',
  name,
  address: get(adresseMaisonQuiroga),
  addressCountry: get(chili),
  latitude: -33.04351,
  longitude: -71.62888,
  url
})
