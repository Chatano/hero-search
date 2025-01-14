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
        <h1 className="home__title" id="title">
          Hero Search
        </h1>
        <h2 className="home__description" id="description">
          Find all the information you want to know about the heroes in the
          Marvel Universe!
        </h2>

        <Form
          action="/heroes"
          id="search-form"
          className="home__search-container"
        >
          <Input
            id="search-input"
            name="search"
            wrapperClassName="flex-1"
            leftContent={<SearchIcon size={16} />}
            placeholder="Search the name here"
          />
          <button id="search-button" type="submit" className="button">
            Search
          </button>
        </Form>

        <p className="home__view-all-heroes" id="all-heroes">
          Do you want to see all the heroes?{' '}
          <Link
            href="/heroes"
            id="all-heroes-link"
            className="home__view-all-heroes__link"
          >
            Click here to view all heroes
          </Link>
        </p>
      </div>

      <Image
        id="spider-man-image"
        src="/images/lego-spider-man.png"
        alt="Lego spider man"
        width={700}
        height={700}
        className="home__image"
      />
    </main>
  )
}
