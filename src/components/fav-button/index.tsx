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
import { FC, useEffect, useState } from 'react'

interface Props {
  hero: Hero
  onlyIcon?: boolean
  className?: string
}

export const FavButton: FC<Props> = ({ hero, className, onlyIcon = false }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => {
    if (isFavorite) {
      removeFromFavorites(hero.id)
      setIsFavorite(false)
      return
    }

    addToFavorites(hero.id, hero.name)
    setIsFavorite(true)
  }

  useEffect(() => {
    setIsFavorite(getFavorites().some((fav) => fav.id === hero.id))
  }, [hero.id])

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

      {!onlyIcon && `${isFavorite ? 'Unfavorite' : 'Favorite'} Hero`}
    </button>
  )
}
