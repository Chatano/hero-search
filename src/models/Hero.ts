interface Subcontent<T> {
  available: number
  returned: number
  collectionURI: string
  items: T
}

export interface Hero {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: {
    path: string
    extension: string
  }
  resourceURI: string

  comics: Subcontent<unknown>
  stories: Subcontent<unknown>
  events: Subcontent<unknown>
  series: Subcontent<unknown>

  urls?: Array<{ type: string; url: string }>
}
