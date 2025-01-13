import './styles.css'
import Image from 'next/image'
import Link from 'next/link'
import Form from 'next/form'
import { Input } from '@/components/input'
import { SearchIcon } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="home__wrapper">
      <div className="home__content">
        <h1 className="home__title">Hero Search</h1>
        <p className="home__description mb-4 lg:mb-8">
          Find all the information you want to know about the characters in the
          Marvel Universe!
        </p>

        <Form action="/heroes" className="home__search-container">
          <Input
            id="search-text"
            name="search"
            wrapperClassName="flex-1"
            leftContent={<SearchIcon size={16} />}
            placeholder="Search the name here"
          />
          <button type="submit" className="button">
            Search
          </button>
        </Form>

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
