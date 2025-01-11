import { Input } from '@/components/input'
import './styles.css'
import { SearchIcon } from '@/assets/icons'
import { Dropdown } from '@/components/dropdown'

type Filters = { search?: string }

interface Props {
  searchParams?: Promise<Filters>
}

export default async function HeroesPage({ searchParams }: Props) {
  const filters = await searchParams

  return (
    <main className="heroes__wrapper">
      <div className="heroes__filters">
        <Input
          id="search-text"
          wrapperClassName="flex-1"
          leftContent={<SearchIcon size={16} />}
          placeholder="Pesquise o nome aqui"
          defaultValue={filters?.search}
        />

        <div className="heroes__filters__dropdowns">
          <Dropdown
            category="comics"
            options={[
              { id: 'A', label: 'A' },
              { id: 'B', label: 'B' },
              { id: 'C', label: 'C' },
            ]}
          />

          <Dropdown
            category="series"
            options={[
              { id: 'D', label: 'D' },
              { id: 'E', label: 'E' },
              { id: 'F', label: 'F' },
            ]}
          />
        </div>
        <button className='button'>Buscar</button>
      </div>
    </main>
  )
}
