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
  const [pageSize, setPageSize] = useState(20)
  const [orderBy, setOrderBy] = useState('name')

  const handleApplyFilters = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const updatedSearchParams = updateUrlParams(searchParams, {
      search: searchText,
      page: 1,
      pageSize,
      orderBy
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

      <div className="heroes__filters__dropdowns-row">
        <Dropdown
          title='Select heroes order'
          minWidth='160px'
          onChange={(id) => setOrderBy(id)}
          options={[
            { id: 'name', label: 'A-Z' },
            { id: '-name', label: 'Z-A' },
            { id: 'modified', label: 'Modified (ASC)' },
            { id: '-modified', label: 'Modified (DESC)' },
          ]}
        />

        <Dropdown
          title='Page size'
          defaultOptionID='10'
          minWidth='120px'
          onChange={(id) => setPageSize(Number(id))}
          options={[
            { id: '10', label: '10' },
            { id: '20', label: '20' },
            { id: '30', label: '30' },
            { id: '40', label: '40' },
            { id: '50', label: '50' },
          ]}
        />
      </div>

      <Dropdown
        title='Filter by favorites'
        minWidth='152px'
        options={[
          { id: 'all', label: 'All' },
          { id: 'favs', label: 'Only Favorites' },
        ]}
      />

      <button type="submit" className="button">
        Search
      </button>
    </form>
  )
}
