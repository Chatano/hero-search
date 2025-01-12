import './styles.css'
import { HeroCard } from './_components/hero-card'
import { fetchAllHeroes } from '@/services/heroes'
import { Filters } from '@/models/Filters'
import { HeroesFilters } from './_components/filters'
import { Pagination } from '@/models/Pagination'
import { HeroesPaginationBar } from './_components/pagination-bar'

interface Props {
  searchParams?: Promise<Filters>
}

export default async function HeroesPage({ searchParams }: Props) {
  const filters = await searchParams

  const heroesData = await fetchAllHeroes({
    page: filters?.page,
    search: filters?.search,
  })

  const heroesPagination = Pagination.mapFromApiResponse(heroesData)

  return (
    <main className="heroes__wrapper">
      <HeroesFilters initialFilters={filters} />

      <HeroesPaginationBar pagination={heroesPagination} />

      <div className="heroes__results">
        {heroesData?.results?.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </main>
  )
}
