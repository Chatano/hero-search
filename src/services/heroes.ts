import { ApiResponse } from '@/models/Api/ApiResponse'
import { Filters } from '@/models/Filters'
import { Hero } from '@/models/Hero'
import { getApiURL } from '@/utils/api/get-api-url'

const PAGE_SIZE = 20

export const fetchAllHeroes = async (filters: Filters = {}) => {
  'use server'

  const { page = 1, search } = filters
  const offset = (Math.max(1, page) - 1) * PAGE_SIZE

  const queryParams: Array<[string, string]> = [
    ['limit', PAGE_SIZE.toString()],
    ['offset', offset.toString()],
  ]

  if (search && search.trim().length > 0) {
    queryParams.push(['nameStartsWith', search])
  }

  const url = getApiURL('/characters', queryParams)

  const response = await fetch(url.toString(), {
    next: {
      revalidate: 60 * 60 /* 1h */,
    },
  })

  const data = (await response.json()) as ApiResponse<Hero[]>

  return data?.data
}
