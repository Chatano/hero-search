import { Hero } from '@/models/Hero'

export const parseImageUrl = (thumbnail?: Hero['thumbnail']) => {
  const path = thumbnail?.path
  const extension = thumbnail?.extension

  return path && extension ? `${path}.${extension}` : null
}
