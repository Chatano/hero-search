import { FC } from 'react'
import './styles.css'
import Image from 'next/image'
import { Hero } from '@/models/Hero'
import Link from 'next/link'
import { FavButton } from '@/components/fav-button'
import moment from 'moment'

interface Props {
  hero: Hero
  index?: number
  imageURL: string | null
}

export const HeroCard: FC<Props> = ({ hero, imageURL = null, index = 0 }) => {
  return (
    <div className="hero-card" style={{ animationDelay: `${index * 0.06}s` }}>
      {imageURL && (
        <div className="hero-card__thumbnail-wrapper">
          <Image
            src={imageURL}
            alt={`${hero?.name} thumbnail`}
            width={300}
            height={240}
            className="hero-card__thumbnail"
          />

          <FavButton
            hero={hero}
            onlyIcon
            className="hero-card__fav-button"
            aria-label={`Favorite hero ${hero.name}`}
          />
        </div>
      )}
      <div className="hero-card__info">
        <span className="hero-card__info__modified">
          Modified at <b>{moment(hero.modified).format('MMM, YYYY')}</b>
        </span>
        <h2 className="hero-card__info__name">{hero?.name}</h2>
      </div>

      <div className="hero-card__actions">
        <Link href={`/hero/${hero.id}`} className="button hero-card__view-more">
          View more
        </Link>
      </div>
    </div>
  )
}
