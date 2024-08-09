import { redtech } from '@/config'
const { name, url } = redtech

interface FooterItem {
  text: string
  href: string
}

export type FooterProps = FooterItem[]

export const footer: FooterProps = [
  {
    text: name,
    href: url.toString()
  }
]
