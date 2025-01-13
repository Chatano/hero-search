import { Drawer } from '@/components/drawer'
import { fetchHeroByID } from '@/services/heroes'
import { parseImageUrl } from '@/utils/api/parse-image-url'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import './styles.css'
import { ExternalLinkIcon } from 'lucide-react'
import { FavButton } from './_components/fav-button'

interface Props {
  params: Promise<{ hero_id: string }>
}

export default async function HeroDetailsDrawer({ params }: Props) {
  const { hero_id } = await params

  const response = await fetchHeroByID(hero_id)
  const hero = response?.results?.[0]
  const imageURL = parseImageUrl(hero?.thumbnail)

  if (!hero) {
    notFound()
  }

  return (
    <Drawer className="hero__wrapper">
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
      <p className="hero__bio">
        {hero.description || 'Hero description is empty'}
      </p>

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

      <FavButton id={hero.id} name={hero.name} />
    </Drawer>
  )
}
