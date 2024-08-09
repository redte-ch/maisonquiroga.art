import { roberto, valparaiso } from '@/config'

const { givenName, familyName, hasOccupation } = roberto
const [fatherName, motherName] = familyName.split(' ')
const { name: occupation } = hasOccupation
const [firstFragment, secondFragment] = occupation.split(' ')

interface HeaderTitleItem {
  '*': string
  sm: string
  md: string
  lg: string
}

export interface HeaderTitleProps {
  h1: HeaderTitleItem
  h2: HeaderTitleItem
}

const toInitials = (strings: Readonly<string[]>) => {
  return strings.map((str) => str.charAt(0).toUpperCase()).join('')
}

const toTitleCase = (str: Readonly<string>) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const headerTitle: HeaderTitleProps = {
  h1: {
    '*': toInitials([givenName, fatherName, motherName]),
    sm: givenName,
    md: fatherName,
    lg: motherName
  },
  h2: {
    '*': toTitleCase(secondFragment),
    sm: toTitleCase(firstFragment),
    md: valparaiso.name,
    lg: valparaiso.containedInPlace.name
  }
}
