import { getImage } from 'astro:assets'
import config, { i18n } from '#/astro.config'
import type {
  ImageObject,
  Country,
  City,
  PostalAddress,
  GeoCoordinates,
  Organization,
  Occupation,
  Person,
  ArtGallery,
  VisualArtwork,
  WebSite,
  ProfilePage
} from '@/schemas'

const { site } = config as { site: string }

const redtechImage = await getImage({
  src: import('@images/redtech.jpg'),
  format: 'webp'
})

const maisonQuirogaImage = await getImage({
  src: import('@images/logo.jpg'),
  format: 'webp'
})

const robertoImage = await getImage({
  src: import('@images/roberto.jpg'),
  format: 'webp'
})

const redtechImageObject: ImageObject = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  caption: 'Logo de redtech',
  contentUrl: new URL(redtechImage.src, site)
}

const maisonQuirogaImageObject: ImageObject = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  caption: 'Peinture de Roberto Quiroga Valdovinos',
  contentUrl: new URL(maisonQuirogaImage.src, site)
}

const robertoImageObject: ImageObject = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  caption: 'Portrait de Roberto Quiroga Valdovinos',
  contentUrl: new URL(robertoImage.src, site)
}

export const france: Country = {
  '@context': 'https://schema.org',
  '@type': 'Country',
  name: 'France',
  identifier: 'FR'
}

export const chili: Country = {
  '@context': 'https://schema.org',
  '@type': 'Country',
  name: 'Chili',
  identifier: 'CL'
}

export const paris: City = {
  '@context': 'https://schema.org',
  '@type': 'City',
  containedInPlace: france,
  name: 'Paris'
}

export const valparaiso: City = {
  '@context': 'https://schema.org',
  '@type': 'City',
  containedInPlace: chili,
  name: 'Valparaíso'
}

export const adresseRedtech: PostalAddress = {
  '@context': 'https://schema.org',
  '@type': 'PostalAddress',
  addressCountry: france,
  addressLocality: '18e arrondissement',
  addressRegion: 'Paris',
  postalCode: '75018',
  streetAddress: '70 rue Duhesme'
}

export const adresseMaisonQuiroga: PostalAddress = {
  '@context': 'https://schema.org',
  '@type': 'PostalAddress',
  addressCountry: chili,
  addressLocality: 'Cerro Alegre',
  addressRegion: 'Valparaíso',
  streetAddress: 'Lautaro Rosas 558',
  name: 'Galería Lugar Inamible',
  url: new URL('https://www.openstreetmap.org/way/1304668361')
}

export const geoMaisonQuiroga: GeoCoordinates = {
  '@context': 'https://schema.org',
  '@type': 'GeoCoordinates',
  address: adresseMaisonQuiroga,
  addressCountry: chili,
  latitude: -33.04351,
  longitude: -71.62888,
  name: adresseMaisonQuiroga.name,
  url: adresseMaisonQuiroga.url
}

export const redtech: Organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  address: adresseRedtech,
  email: 'appolline@redte.ch',
  location: paris,
  legalName: 'SASU Red Innovation',
  logo: redtechImageObject,
  name: 'redtech',
  slogan: 'Public tech for a better future',
  vatID: 'FR04814057527',
  url: new URL('https://redte.ch')
}

export const maisonQuiroga: Organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  address: adresseMaisonQuiroga,
  email: 'roberto@maisonquiroga.art',
  location: valparaiso,
  legalName: 'EIRL Roberto Gerardo Quiroga Valdovinos',
  logo: { ...maisonQuirogaImageObject },
  name: 'Maison Quiroga',
  telephone: '+56930067505',
  url: new URL(site)
}

export const peintre: Occupation = {
  '@context': 'https://schema.org',
  '@type': 'Occupation',
  name: 'Artiste peintre'
}

export const roberto: Person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  additionalName: 'Gerardo',
  description: `
    Né en 1953 à Viña del Mar, Chili, Roberto Quiroga Valdovinos a reçu
    sa formation d'art à l'Escuela de Bellas Artes de Viña del Mar en
    1970 et à l'Université de Concepción en 1973. Il a étudié sous la
    direction de Teresa Vidal, Ismael Pinto, Julio Escamez, Tole
    Peralta, Albino Echeverría, et Maisner Ordoñez. À la suite du
    sanglant coup d'État de 1973, il s'est vu contraint de quitter le
    pays pour emprunter le chemin de l'exil, ce qui a imprimé une
    marque décisive sur son œuvre. Aujourd'hui, il dirige la Galerie
    Lugar Inamible et expose ses travaux au Café Zeit.
  `,
  email: maisonQuiroga.email,
  familyName: 'Quiroga Valdovinos',
  givenName: 'Roberto',
  hasOccupation: peintre,
  image: [robertoImageObject],
  memberOf: maisonQuiroga,
  sameAs: [new URL('https://www.instagram.com/maisonquiroga/')],
  telephone: maisonQuiroga.telephone,
  url: maisonQuiroga.url
}

export const lugarInamible: ArtGallery = {
  '@context': 'https://schema.org',
  '@type': 'ArtGallery',
  address: adresseMaisonQuiroga,
  email: maisonQuiroga.email,
  founder: roberto,
  geo: geoMaisonQuiroga,
  name: 'Galería Lugar Inamible',
  telephone: maisonQuiroga.telephone,
  url: maisonQuiroga.url
}

export const painting: VisualArtwork = {
  '@context': 'https://schema.org',
  '@type': 'VisualArtwork',
  artMedium: 'Acrylique sur toile',
  artform: 'Peinture',
  artist: roberto,
  contentLocation: lugarInamible,
  copyrightHolder: roberto,
  copyrightNotice: `© 2023 ${roberto.givenName} ${roberto.familyName}`,
  copyrightYear: 2023,
  countryOfOrigin: chili,
  image: [maisonQuirogaImageObject],
  locationCreated: valparaiso,
  url: new URL('https://www.instagram.com/p/C1FAexFLpDT/')
}

export const website: WebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  about: roberto,
  abstract: `
      Artiste peintre. Œuvres et contact : @maisonquiroga (Instagram).
      Exposition : ${adresseMaisonQuiroga.streetAddress},
      ${adresseMaisonQuiroga.addressLocality},
      ${adresseMaisonQuiroga.addressRegion},
      ${adresseMaisonQuiroga.addressCountry.name}.
  `,
  author: redtech,
  copyrightHolder: redtech,
  copyrightNotice: `© 2024 ${redtech.name}`,
  copyrightYear: 2024,
  countryOfOrigin: france,
  dateCreated: new Date('2024-07-29'),
  dateModified: new Date(),
  inLanguage: i18n.locales.fr,
  keywords: ['Artiste', 'Peintre', 'Valparaíso', 'Chili'],
  license: 'https://www.gnu.org/licenses/agpl-3.0.fr.html/',
  mainEntity: roberto,
  maintainer: redtech,
  name: `${roberto.givenName} ${roberto.familyName}`,
  url: maisonQuiroga.url
}

export const profilePage: ProfilePage = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  about: roberto,
  abstract: website.abstract,
  author: website.author,
  dateCreated: website.dateCreated,
  dateModified: website.dateModified,
  image: [
    { ...robertoImageObject, about: roberto },
    { ...maisonQuirogaImageObject, about: painting }
  ],
  inLanguage: website.inLanguage,
  isPartOf: website,
  mainEntity: roberto,
  name: website.name,
  url: website.url
}
