import { Filters } from '@/models/Filters'

export const updateUrlParams = (
  searchParams: URLSearchParams,
  filters: Filters,
) => {
  const updatedSearchParams = new URLSearchParams(searchParams)

  const filterEntries = Object.entries(filters) // transform filters from obj in an array

  filterEntries.forEach(([key, value]) => {
    if (!value || (typeof value === 'string' && value.trim().length < 1)) {
      // if null or be empty string
      updatedSearchParams.delete(key)
      return
    }

    updatedSearchParams.set(key, value.toString()) // if exists, add to url
  })

  return updatedSearchParams.toString()
}
