import './styles.css'
import Image from 'next/image'
import Link from 'next/link'
import { HomeSearchBar } from './_components/search-bar'

export default function HomePage() {
  return (
    <main className="home__wrapper">
      <div className="home__content">
        <h1 className="home__title">Hero Search</h1>
        <p className="home__description mb-4 lg:mb-8">
          Find all the information you want to know about the characters in the
          Marvel Universe!
        </p>

        <HomeSearchBar />

        <p className="home__view-all-heroes">
          Do you want to see all the characters?{' '}
          <Link href="/heroes" className="home__view-all-heroes__link">
            Click here
          </Link>
        </p>
      </div>

      <Image
        src="/images/lego-spider-man.svg"
        alt="Lego spider man"
        width={700}
        height={700}
        className="home__image"
      />
    </main>
  )
}
