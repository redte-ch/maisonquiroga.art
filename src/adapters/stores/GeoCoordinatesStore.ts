import type { Readable } from 'svelte/store'

import type { WithContext } from 'schema-dts'

import type { GeoCoordinates } from '^/entities'

import { get, readable } from 'svelte/store'

import { adresseMaisonQuiroga } from '+/PostalAddressStore'

const { name, url } = get(adresseMaisonQuiroga)

export const geoMaisonQuiroga: Readable<WithContext<GeoCoordinates>> = readable(
  {
    '@context': 'https://schema.org',
    '@type': 'GeoCoordinates',
    name,
    address: get(adresseMaisonQuiroga),
    addressCountry: 'CL',
    latitude: -33.04351,
    longitude: -71.62888,
    url
  }
)
