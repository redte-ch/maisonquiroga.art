import type { GeoCoordinates as TGeoCoordinates, WithContext } from 'schema-dts'
import type { Readable } from 'svelte/store'

import { get, readable } from 'svelte/store'

import { adresseMaisonQuiroga } from '~/stores/PostalAddressStore'

type GeoCoordinates = Omit<TGeoCoordinates, 'addressCountry'> & {
  addressCountry: string
}

const { name, url } = get(adresseMaisonQuiroga)

export type { GeoCoordinates }

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
