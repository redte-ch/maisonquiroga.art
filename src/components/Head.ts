import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '#/tailwind.config'
import { website } from '@/config'

// @ts-ignore - we don't understand the linter error
const { darkMode, theme } = resolveConfig(tailwindConfig)
const { colors } = theme
// @ts-ignore - secondary should be defined
const { secondary } = colors

export interface HeadProps {
  author?: string
  canonical: URL
  colorScheme: 'only light' | 'dark light'
  copyright: string
  description?: string
  keywords: string
  themeColor: string
  title?: string
}

export const head: HeadProps = {
  canonical: website.url,
  colorScheme: darkMode === 'false' ? 'only light' : 'dark light',
  copyright: `${website.copyrightYear}, ${website.author.name}`,
  keywords: website.keywords.join(', '),
  themeColor: secondary
}
