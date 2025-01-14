import { ApiResponse } from '@/models/Api/ApiResponse'
import { Filters } from '@/models/Filters'
import { Hero } from '@/models/Hero'
import { getApiURL } from '@/utils/api/get-api-url'
import { handleFetchError } from '@/utils/errors/handle-api-error'
import { generateErrorMessage } from '@/utils/errors/generate-error-message'

export const fetchAllHeroes = async (filters: Filters = {}) => {
  'use server'

  const { page = 1, search, pageSize = 10, orderBy = 'name' } = filters
  const offset = (Math.max(1, page) - 1) * pageSize

  const queryParams: Array<[string, string]> = [
    ['limit', pageSize.toString()],
    ['offset', offset.toString()],
    ['orderBy', orderBy || 'name'],
  ]

  if (search && search.trim().length > 0) {
    queryParams.push(['nameStartsWith', search])
  }

  const cacheTag = `heroes-${queryParams.map(([, value]) => value).join('-')}`

  const url = getApiURL('/characters', queryParams)

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 3600, // 1 hour
        tags: [cacheTag],
      },
      cache: 'force-cache',
    })

    if (!response.ok) {
      throw new Error(
        generateErrorMessage(response.status, response.statusText),
      )
    }

    const data = await response.json()

    return data?.data as ApiResponse<Hero[]>['data']
  } catch (error) {
    return handleFetchError(error)
  }
}

export const fetchHeroByID = async (id: string | number) => {
  const url = getApiURL(`/characters/${id}aa`)

  try {
    const response = await fetch(url.toString(), {
      next: {
        revalidate: 60 * 60 /* 1h */,
        tags: [`hero-${id}`],
      },
      cache: 'force-cache',
    })

    if (!response.ok) {
      throw new Error(
        generateErrorMessage(response.status, response.statusText),
      )
    }

    const data = (await response.json()) as ApiResponse<Hero[]>

    return data?.data
  } catch (error) {
    return handleFetchError(error)
  }
}
