import { fetchHeroByID } from '@/services/heroes'
import './styles.css'
import { notFound } from 'next/navigation'
import { parseImageUrl } from '@/utils/api/parse-image-url'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

interface Props {
  params: Promise<{ hero_id: string }>
}

export default async function HeroDetailsPage({ params }: Props) {
  const { hero_id } = await params

  const response = await fetchHeroByID(hero_id)
  const hero = response?.results?.[0]
  const imageURL = parseImageUrl(hero?.thumbnail)

  if (!hero) {
    notFound();
  }
  

  return (
    <div className="hero__wrapper">
      <Link href="/heroes" className='hero__go-back'>
        <ChevronLeft size={14} className='inline' />
        Go back
      </Link>
      <div className="hero__content">
        <aside className="hero__grid-item hero__info">
          {imageURL && (
            <Image 
              src={imageURL}
              alt={`${hero.name} thumbnail`}
              width={256}
              height={256}
              className='hero__info__thumbnail'
            />
          )}
          <h1 className='hero__info__name'>{hero.name}</h1>
          <p className='hero__info__bio'>{hero.description}</p>
        </aside>

        <div className="hero__grid-item hero__details">
          <span>details</span>
        </div>
      </div>
    </div>
  )
}