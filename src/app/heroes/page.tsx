import './styles.css'
import { HeroCard } from './_components/hero-card'
import { fetchAllHeroes } from '@/services/heroes'
import { Filters } from '@/models/Filters'
import { HeroesFilters } from './_components/filters'

interface Props {
  searchParams?: Promise<Filters>
}

export default async function HeroesPage({ searchParams }: Props) {
  const filters = await searchParams

  const heroes = await fetchAllHeroes({
    page: filters?.page,
    search: filters?.search,
  })

  console.log({heroes})

  return (
    <main className="heroes__wrapper">
      <HeroesFilters initialFilters={filters} />

      <div className="heroes__results">
        {heroes?.results?.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
      </div>
    </main>
  )
}
