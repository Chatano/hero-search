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
}
