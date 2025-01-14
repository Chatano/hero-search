import { AppError } from '@/models/errors/AppError'

export const handleFetchError = (error: unknown): AppError => {
  return new AppError(
    error instanceof Response ? error?.status : 500,
    error instanceof Response ? error.statusText : 'Internal Server Error',
    error instanceof Error ? error.message : 'An unexpected error occurred',
  )
}
