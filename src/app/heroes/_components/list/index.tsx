import { Filters } from '@/models/Filters'
import { Pagination } from '@/models/Pagination'
import { fetchAllHeroes } from '@/services/heroes'
import { HeroesPaginationBar } from '../pagination-bar'
import { HeroCard } from '../card'

export const HeroesList = async ({ filters }: { filters?: Filters }) => {
  const heroesData = await fetchAllHeroes({
    page: filters?.page,
    pageSize: filters?.pageSize,
    search: filters?.search,
    orderBy: filters?.orderBy,
  })

  const heroesPagination = Pagination.mapFromApiResponse(heroesData)

  return (
    <>
      <HeroesPaginationBar pagination={heroesPagination} />

      <div className="heroes__results">
        {heroesData?.results?.map((hero, index) => (
          <HeroCard key={hero.id} hero={hero} index={index} />
        ))}
      </div>
    </>
  )
}
