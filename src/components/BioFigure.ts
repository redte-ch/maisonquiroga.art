import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '#/tailwind.config'
import { roberto } from '@/config'
import robertoImage from '@images/roberto.jpg'

const {
  givenName,
  familyName,
  image: [{ caption }]
} = roberto
// @ts-ignore - we don't understand the linter error
const { theme } = resolveConfig(tailwindConfig)
const { screens } = theme
const widths = [320, 256, 160, 128]

export interface BioFigureProps {
  image: {
    src: ImageMetadata
    alt: string
    width: number
    height: number
    sizes: string
    widths: number[]
  }
  caption: string
}

export const bioFigure: BioFigureProps = {
  image: {
    src: robertoImage as ImageMetadata,
    alt: `${givenName} ${familyName}`,
    width: widths[0],
    height: widths[0],
    sizes: `
      ${widths[0]}px,
      (min-width: ${screens.sm}) ${widths[1]}px,
      (min-width: ${screens.md}) ${widths[2]}px,
      (min-width: ${screens.lg}) ${widths[3]}px
    `,
    widths
  },
  caption: `${caption} en 2024 à Valparaíso`
}
