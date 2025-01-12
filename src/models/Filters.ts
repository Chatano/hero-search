export enum FILTER_KEYS {
  PAGE = 'page',
  SEARCH = 'search',
}

export interface Filters {
  search?: string
  page?: number
}