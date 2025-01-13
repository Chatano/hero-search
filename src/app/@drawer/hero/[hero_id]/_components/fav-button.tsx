'use client'

import {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
} from '@/services/favorites'
import clsx from 'clsx'
import { StarIcon } from 'lucide-react'
import { FC, useState } from 'react'

interface Props {
  id: number
  name: string
}

export const FavButton: FC<Props> = ({ id, name }) => {
  const [isFavorite, setIsFavorite] = useState(
    getFavorites().some((fav) => fav.id === id),
  )

  const handleClick = () => {
    if (isFavorite) {
      removeFromFavorites(id)
      setIsFavorite(false)
      return
    }

    addToFavorites(id, name)
    setIsFavorite(true)
  }

  return (
    <button
      className={clsx('button hero__fav-button', isFavorite && 'secondary')}
      onClick={handleClick}
    >
      <StarIcon size={18} />
      {isFavorite ? 'Unfavorite' : 'Favorite'} Hero
    </button>
  )
}
