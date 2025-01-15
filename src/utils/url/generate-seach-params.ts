import { Filters } from '@/models/Filters'

export const generateSearchParams = (
  currentSearchParams: URLSearchParams,
  filters: Filters,
) => {
  const updatedSearchParams = new URLSearchParams(currentSearchParams)

  const filterEntries = Object.entries(filters)

  filterEntries.forEach(([key, value]) => {
    if (!value || (typeof value === 'string' && value.trim().length < 1)) {
      updatedSearchParams.delete(key)
      return
    }

    updatedSearchParams.set(key, value.toString())
  })

  return updatedSearchParams.toString()
}
