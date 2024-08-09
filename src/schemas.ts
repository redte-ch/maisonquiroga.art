interface Schema {
  '@context': 'https://schema.org'
  '@type': string
}

export interface Country extends Schema {
  '@type': 'Country'
  name: string
  identifier: string
}

export interface City extends Schema {
  '@type': 'City'
  name: string
  containedInPlace: Country
}

export interface PostalAddress extends Schema {
  '@type': 'PostalAddress'
  name: string
  streetAddress: string
  postalCode: string
  addressLocality: string
  addressRegion: string
  addressCountry: Country
  url: URL
}

export interface GeoCoordinates extends Schema {
  '@type': 'GeoCoordinates'
  name?: string
  address: PostalAddress
  addressCountry: Country
  latitude: number
  longitude: number
  url?: URL
}
