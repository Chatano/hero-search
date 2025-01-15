import { fetchHeroByID } from '@/services/heroes'
import { parseImageUrl } from '@/utils/api/parse-image-url'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLinkIcon } from 'lucide-react'
import { FavButton } from '@/components/fav-button'
import { AppError } from '@/models/errors/AppError'
import moment from 'moment'

interface Props {
  params: Promise<{ hero_id: string }>
}

export default async function HeroDetailsDrawer({ params }: Props) {
  const { hero_id } = await params

  const response = await fetchHeroByID(hero_id)

  const isError = response instanceof AppError

  if (isError) {
    return (
      <div className="hero__issue">
        <h1 className="hero__issue__title">Error, hero not found</h1>
        <p className="hero__issue__desc">{response.message}</p>
      </div>
    )
  }

  const hero = response?.results?.[0]
  const imageURL = parseImageUrl(hero?.thumbnail)

  if (!hero) {
    notFound()
  }

  return (
    <>
      {imageURL && (
        <Image
          src={imageURL}
          alt={`${hero.name} thumbnail`}
          width={256}
          height={256}
          className="hero__thumbnail"
        />
      )}

      <h1 className="hero__name">{hero.name}</h1>

      <span className="hero__modified">
        Modified at <b>{moment(hero.modified).format('MMM, YYYY')}</b>
      </span>

      <p className="hero__bio">{hero.description}</p>

      <ul className="hero__metrics">
        <li>
          Total Comics: <b>{hero.comics.available}</b>
        </li>
        <li>
          Total Stories: <b>{hero.stories.available}</b>
        </li>
        <li>
          Total Events: <b>{hero.events.available}</b>
        </li>
        <li>
          Total Series: <b>{hero.series.available}</b>
        </li>
      </ul>

      <h2 className="hero__subtitle">Urls</h2>

      <div className="hero__urls">
        {hero?.urls?.map((url) => (
          <Link
            key={url.type}
            href={url.url}
            target="_blank"
            className="button hero__urls__link"
          >
            {url.type}
            <ExternalLinkIcon size={12} className="hero__urls__link-icon" />
          </Link>
        ))}
      </div>

      <FavButton hero={hero} className="w-full" />
    </>
  )
}
