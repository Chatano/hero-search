'use client'
import { Drawer } from '@/components/drawer'
import './styles.css'
import { useEffect, useState } from 'react'
import { getFavorites } from '@/services/favorites'
import Link from 'next/link'
import { Favorite } from '@/models/Favorite'
import { ChevronRightIcon, StarIcon } from 'lucide-react'

export default function FavoritesDrawer() {
  const [favorites, setFavorites] = useState<Favorite[]>([])

  useEffect(() => {
    const storagedFavorites = getFavorites()
    setFavorites(storagedFavorites)
  }, [])

  return (
    <Drawer className="favs__wrapper">
      <h1 className="favs__title">My Favorites</h1>

      <ul className="favs__list">
        {favorites.map((fav) => (
          <li key={fav.id}>
            <Link href={`/hero/${fav.id}`} className="favs__list__item">
              <StarIcon size={16} />
              <p className="flex-1">{fav.name}</p>
              <ChevronRightIcon size={20} />
            </Link>
          </li>
        ))}
      </ul>
    </Drawer>
  )
}
