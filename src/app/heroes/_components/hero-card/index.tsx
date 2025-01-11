import { FC, useMemo } from 'react'
import './styles.css'
import Image from 'next/image'
import { Hero } from '@/models/Hero'
import Link from 'next/link'

interface Props {
  hero: Hero
}

export const HeroCard: FC<Props> = ({ hero }) => {
  const imageURL = useMemo(() => {
    const path = hero?.thumbnail?.path
    const extension = hero?.thumbnail?.extension

    return path && extension ? `${path}.${extension}` : null
  }, [hero])

  return (
    <div className="hero-card__wrapper">
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
        <p className="hero-card__info__bio">{hero?.description}</p>
      </div>

      <Link href={`/hero/${hero.id}`} className="button min-h-8 text-sm">
        View more
      </Link>
    </div>
  )
}
