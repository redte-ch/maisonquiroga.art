import type { PostalAddress as _PostalAddress } from 'schema-dts'

export type {
  ArtGallery,
  City,
  Collection,
  Country,
  GeoCoordinates,
  ImageObject,
  Occupation,
  Organization,
  Person,
  ProfilePage,
  VisualArtwork,
  WebSite
} from 'schema-dts'

export type PostalAddress = Omit<_PostalAddress, 'url'> & {
  url: string
}

export type OpenGraph = {
  image: string
  url: string
  type: 'website'
  title: string
  description: string
}

export type Twitter = {
  image: string
  card: 'summary'
  site: string
  title: string
  description: string
}

export type Bing = {
  placename: string
  region: string
  position: string
}
