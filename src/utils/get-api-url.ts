import { getApiHash } from './get-api-hash'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

export const getApiURL = (
  endpoint: string,
  filters?: Array<[string, string]>,
) => {
  const { hash, publicApiKey, timeStamp } = getApiHash()

  const resolvedEndpoint = endpoint.slice(endpoint.startsWith('/') ? 1 : 0)

  const url = new URL(resolvedEndpoint, baseURL)

  url.searchParams.append('ts', timeStamp.toString())
  url.searchParams.append('apikey', publicApiKey)
  url.searchParams.append('hash', hash)

  filters?.forEach(([key, value]) => url.searchParams.append(key, value))

  return url
}
