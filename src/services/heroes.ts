import { ApiResponse } from '@/models/Api/ApiResponse'
import { Filters } from '@/models/Filters'
import { Hero } from '@/models/Hero'
import { getApiURL } from '@/utils/api/get-api-url'

export const fetchAllHeroes = async (filters: Filters = {}) => {
  'use server'

  const { page = 1, search, pageSize = 10, orderBy } = filters
  const offset = (Math.max(1, page) - 1) * pageSize

  const queryParams: Array<[string, string]> = [
    ['limit', pageSize.toString()],
    ['offset', offset.toString()],
    ['orderBy', orderBy || 'name'],
  ]

  if (search && search.trim().length > 0) {
    queryParams.push(['nameStartsWith', search])
  }

  const url = getApiURL('/characters', queryParams)

  const cacheTag = `heroes-${Array.from(url.searchParams.entries()).join('-')}`

  const response = await fetch(url.toString(), {
    next: {
      revalidate: 60 * 60 /* 1h */,
      tags: [cacheTag]
    },
    cache: 'force-cache',
  })

  const data = (await response.json()) as ApiResponse<Hero[]>

  return data?.data
}

export const fetchHeroByID = async (id: string | number) => {
  const url = getApiURL(`/characters/${id}`)

  const response = await fetch(url.toString(), {
    next: {
      revalidate: 60 * 60 /* 1h */,
      tags: [`hero-${id}`],
    },
  })

  const data = (await response.json()) as ApiResponse<Hero[]>

  return data?.data
}
