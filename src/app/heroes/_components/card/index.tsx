'use client'
import { FC, useMemo } from 'react'
import './styles.css'
import Image from 'next/image'
import { Hero } from '@/models/Hero'
import Link from 'next/link'
import { parseImageUrl } from '@/utils/api/parse-image-url'
import { FavButton } from '@/components/fav-button'

interface Props {
  hero: Hero
  index?: number
}

export const HeroCard: FC<Props> = ({ hero, index = 0 }) => {
  const imageURL = useMemo(
    () => parseImageUrl(hero.thumbnail),
    [hero.thumbnail],
  )

  return (
    <div className="hero-card" style={{ animationDelay: `${index * 0.06}s` }}>
      {imageURL && (
        <Image
          src={imageURL}
          alt={`${hero?.name} thumbnail`}
          width={300}
          height={240}
          className="hero-card__thumbnail"
        />
      )}
      <div className="hero-card__info">
        <h2 className="hero-card__info__name">{hero?.name}</h2>
      </div>

      <div className="hero-card__actions">
        <FavButton
          hero={hero}
          hideText
          className="min-h-8 w-8 min-w-8 rounded-full px-2"
        />
        <Link
          href={`/hero/${hero.id}`}
          className="button min-h-8 flex-1 text-sm"
        >
          View more
        </Link>
      </div>
    </div>
  )
}
