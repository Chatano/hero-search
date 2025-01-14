import { Filters } from '@/models/Filters'
import { Pagination } from '@/models/Pagination'
import { AppError } from '@/models/errors/AppError'
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

  const isError = heroesData instanceof AppError

  if (isError) {
    return (
      <div className="heroes__issue">
        <h1 className="heroes__issue__title">Unexpected error</h1>
        <p className="heroes__issue__desc">{heroesData.message}</p>
      </div>
    )
  }

  if (heroesData?.results?.length === 0) {
    return (
      <div className="heroes__issue">
        <h1 className="heroes__issue__title">No results found</h1>
        <p className="heroes__issue__desc">
          Please, change your filters and try again
        </p>
      </div>
    )
  }

  return (
    <>
      <HeroesPaginationBar
        pagination={Pagination.mapFromApiResponse(heroesData)}
      />

      <div className="heroes__results">
        {heroesData?.results?.map((hero, index) => (
          <HeroCard key={hero.id} hero={hero} index={index} />
        ))}
      </div>
    </>
  )
}
