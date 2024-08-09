interface Schema {
  '@context': 'https://schema.org'
  '@type': string
}

export interface ImageObject extends Schema {
  '@type': 'ImageObject'
  about?: Person | Organization | VisualArtwork
  caption: string
  contentUrl: URL
}

export interface Country extends Schema {
  '@type': 'Country'
  name: string
  identifier: string
}

export interface City extends Schema {
  '@type': 'City'
  containedInPlace: Country
  name: string
}

export interface PostalAddress extends Schema {
  '@type': 'PostalAddress'
  addressCountry: Country
  addressLocality: string
  addressRegion: string
  postalCode?: string
  streetAddress: string
  name?: string
  url?: URL
}

export interface GeoCoordinates extends Schema {
  '@type': 'GeoCoordinates'
  address: PostalAddress
  addressCountry: Country
  latitude: number
  longitude: number
  name?: string
  url?: URL
}

export interface Organization extends Schema {
  '@type': 'Organization'
  address: PostalAddress
  email: string
  location: City
  legalName: string
  logo: ImageObject
  name: string
  slogan?: string
  telephone?: string
  vatID?: string
  url: URL
}

export interface Occupation extends Schema {
  '@type': 'Occupation'
  name: string
}

export interface Person extends Schema {
  '@type': 'Person'
  additionalName: string
  description: string
  email: string
  familyName: string
  givenName: string
  hasOccupation: Occupation
  image: ImageObject[]
  memberOf: Organization
  sameAs: URL[]
  telephone?: string
  url: URL
}

export interface ArtGallery extends Schema {
  '@type': 'ArtGallery'
  address: PostalAddress
  email: string
  founder: Person
  geo: GeoCoordinates
  name: string
  telephone?: string
  url: URL
}

export interface Collection extends Schema {
  '@type': 'Collection'
}

export interface VisualArtwork extends Schema {
  '@type': 'VisualArtwork'
  abstract?: string
  artMedium: string
  artform: string
  artist: Person
  contentLocation: ArtGallery
  copyrightHolder: Person
  copyrightNotice: string
  copyrightYear: number
  countryOfOrigin: Country
  dateCreated?: Date
  image: ImageObject[]
  isPartOf?: Collection
  locationCreated: City
  name?: string
  url: URL
}

export interface WebSite extends Schema {
  '@type': 'WebSite'
  about: Person
  abstract: string
  author: Organization
  copyrightHolder: Organization
  copyrightNotice: string
  copyrightYear: number
  countryOfOrigin: Country
  dateCreated: Date
  dateModified: Date
  inLanguage: string
  keywords: string[]
  license: string
  mainEntity: Person
  maintainer: Organization
  name: string
  url: URL
}

export interface ProfilePage extends Schema {
  '@type': 'ProfilePage'
  about: Person
  abstract: string
  author: Organization
  dateCreated: Date
  dateModified: Date
  image: ImageObject[]
  inLanguage: string
  isPartOf: WebSite
  mainEntity: Person
  name: string
  url: URL
}

export interface OpenGraph {
  image: URL
  url: URL
  type: 'website'
  title: string
  description: string
}

export interface Twitter {
  image: URL
  card: 'summary'
  site: string
  title: string
  description: string
}

export interface Bing {
  placename: string
  region: string
  position: string
}
