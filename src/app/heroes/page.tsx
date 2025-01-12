import './styles.css'
import { Filters } from '@/models/Filters'
import { HeroesFilters } from './_components/filters'
import { HeroesList } from './_components/heroes-list'
import { Suspense } from 'react'
import { HeroesListSkeleton } from './_components/heroes-list/skeleton'

interface Props {
  searchParams?: Promise<Filters>
}

export default async function HeroesPage({ searchParams }: Props) {
  const filters = await searchParams

  return (
    <main className="heroes__wrapper">
      <HeroesFilters initialFilters={filters} />

      <Suspense
        fallback={<HeroesListSkeleton />}
        key={JSON.stringify({ filters })}
      >
        <HeroesList filters={filters} />
      </Suspense>
    </main>
  )
}
