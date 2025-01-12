import { ApiResponse } from '@/models/Api/ApiResponse'
import { Hero } from '@/models/Hero'
import { getApiURL } from '@/utils/get-api-url'

type Filters = {
  page?: number
  pageSize?: number
  searchText?: string
}

export const fetchAllHeroes = async (filters: Filters = {}) => {
  'use server'
  const { page = 1, pageSize = 20, searchText } = filters;
  const offset = (Math.max(1, page) - 1) * pageSize;

  const queryParams: Array<[string,string]> = [
    ['limit', pageSize.toString()],
    ['offset', offset.toString()]
  ];

  if (searchText && searchText.trim().length > 0) {
    queryParams.push(['nameStartsWith', searchText])
  }

  const url = getApiURL('/characters', queryParams)

  const response = await fetch(url.toString(), {
    next: { 
      revalidate: 60 * 60 /* 1h */
    },
  })

  const data = (await response.json()) as ApiResponse<Hero[]>

  return data?.data
}
