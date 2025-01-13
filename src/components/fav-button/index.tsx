'use client'
import './styles.css'
import { Hero } from '@/models/Hero'
import {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
} from '@/services/favorites'
import clsx from 'clsx'
import { StarIcon } from 'lucide-react'
import { FC, useState } from 'react'

interface Props {
  hero: Hero
  hideText?: boolean
  className?: string
}

export const FavButton: FC<Props> = ({ hero, className, hideText = false }) => {
  const [isFavorite, setIsFavorite] = useState(
    getFavorites().some((fav) => fav.id === hero.id),
  )

  const handleClick = () => {
    if (isFavorite) {
      removeFromFavorites(hero.id)
      setIsFavorite(false)
      return
    }

    addToFavorites(hero.id, hero.name)
    setIsFavorite(true)
  }

  return (
    <button
      className={clsx(
        'button fav-button',
        !isFavorite && 'secondary',
        className,
      )}
      onClick={handleClick}
    >
      <StarIcon size={18} />

      {!hideText && `${isFavorite ? 'Unfavorite' : 'Favorite'} Hero`}
    </button>
  )
}
