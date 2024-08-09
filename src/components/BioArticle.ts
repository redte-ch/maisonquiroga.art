import { roberto } from '@/config'

const { givenName, familyName } = roberto

export interface BioArticleProps {
  title: string
  text: string
}

export const bioArticle: BioArticleProps = {
  title: `Biographie de ${givenName} ${familyName}`,
  text: roberto.description
}
