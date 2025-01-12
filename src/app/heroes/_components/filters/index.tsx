'use client'
import { SearchIcon } from '@/assets/icons'
import { Dropdown } from '@/components/dropdown'
import { Input } from '@/components/input'
import { Filters } from '@/models/Filters'
import { FC, FormEvent, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { updateUrlParams } from '@/utils/filters/update-url-params'

interface Props {
  initialFilters?: Filters
}

export const HeroesFilters: FC<Props> = ({ initialFilters }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [searchText, setSearchText] = useState(initialFilters?.search || '')

  const handleApplyFilters = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const updatedSearchParams = updateUrlParams(searchParams, {
      search: searchText,
      page: 1
    })

    router.push(`/heroes?${updatedSearchParams.toString()}`)
  }

  return (
    <form onSubmit={handleApplyFilters} className="heroes__filters">
      <Input
        id="search-text"
        wrapperClassName="flex-1"
        leftContent={<SearchIcon size={16} />}
        placeholder="Search the name here"
        defaultValue={searchText}
        onChange={(e) => setSearchText(e.target.value.trim())}
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

      <button type="submit" className="button">
        Search
      </button>
    </form>
  )
}
