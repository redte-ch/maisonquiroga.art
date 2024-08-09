import { maisonQuiroga } from '@/config'
import logoImage from '@images/logo.jpg'

export interface LogoProps {
  src: ImageMetadata
  alt: string
  width: number
  height: number
}

export const logo: LogoProps = {
  src: logoImage,
  alt: maisonQuiroga.logo.caption,
  width: 80,
  height: 80
}
