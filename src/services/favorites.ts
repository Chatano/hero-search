'use client'
import { Favorite } from '@/models/Favorite'

const STORAGE_KEY = '@Hero-Search'

export const getFavorites = () => {
  const favsString = localStorage.getItem(`${STORAGE_KEY}-favs`)
  const favoritesData = JSON.parse(favsString || '{}')
  const result = favoritesData?.favorites || []

  return result as Favorite[]
}

const handleUpdate = (favorites: Favorite[]) => {
  localStorage.setItem(`${STORAGE_KEY}-favs`, JSON.stringify({ favorites }))
}

export const addToFavorites = (id: number, name: string) => {
  const prevData = getFavorites()
  handleUpdate([...prevData, { id, name }])
}

export const removeFromFavorites = (id: number) => {
  const prevData = getFavorites()
  handleUpdate(prevData.filter((fav) => fav.id !== id))
}
