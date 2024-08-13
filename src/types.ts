export declare interface MetaGeo {
  placename: string
  position: string
  region: Promise<string>
}

export declare interface NavItem {
  text: string
  href: string
}

export declare type Guard<T> = (value: unknown) => value is T

export declare type Validator<T> = (value: unknown) => Promise<T>
