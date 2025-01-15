import './styles.css'
import { Filters } from '@/models/Filters'
import { Pagination } from '@/models/Pagination'
import { AppError } from '@/models/errors/AppError'
import { fetchAllHeroes } from '@/services/heroes'
import { HeroesPaginationBar } from '../pagination-bar'
import { HeroCard } from '../card'
import { parseImageUrl } from '@/utils/api/parse-image-url'
import { Issue } from '@/components/issue'

export const HeroesList = async ({ filters }: { filters?: Filters }) => {
  const data = await fetchAllHeroes({
    page: filters?.page,
    pageSize: filters?.pageSize,
    search: filters?.search,
    orderBy: filters?.orderBy,
  })

  const isError = data instanceof AppError
  const isEmpty = !isError && data?.results?.length === 0

  if (isError || isEmpty) {
    return (
      <Issue
        title={isError ? 'Error' : 'No results found'}
        description={
          isError ? data.message : 'Please, change your filters and try again'
        }
      />
    )
  }

  return (
    <>
      <HeroesPaginationBar pagination={Pagination.mapFromApiResponse(data)} />

      <div className="heroes__results">
        {data?.results?.map((hero, index) => (
          <HeroCard
            key={hero.id}
            hero={hero}
            imageURL={parseImageUrl(hero.thumbnail)}
            index={index}
          />
        ))}
      </div>
    </>
  )
}
