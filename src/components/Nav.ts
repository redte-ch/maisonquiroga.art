import { roberto } from '@/config'
const {
  email,
  sameAs: [instagram],
  memberOf: maisonQuiroga
} = roberto
const { address } = maisonQuiroga
const { url } = address as { url: URL }

interface NavItem {
  text: string
  href: string
}

export type NavProps = NavItem[]

export const nav: NavProps = [
  {
    text: 'Œuvres choisies',
    href: instagram.toString()
  },
  {
    text: 'Contact',
    href: `mailto:${email}`
  },
  {
    text: 'Adresse',
    href: url.toString()
  }
]
