'use client'
import { SearchIcon } from '@/assets/icons'
import { Dropdown } from '@/components/dropdown'
import { Input } from '@/components/input'
import { Filters } from '@/models/Filters'
import { FC, FormEvent, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { generateSearchParams } from '@/utils/url/generate-seach-params'

interface Props {
  initialFilters?: Filters
}

export const HeroesFilters: FC<Props> = ({ initialFilters }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [searchText, setSearchText] = useState(initialFilters?.search || '')
  const [pageSize, setPageSize] = useState(10)
  const [orderBy, setOrderBy] = useState('name')

  const handleApplyFilters = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const updatedSearchParams = generateSearchParams(searchParams, {
      search: searchText.trim(),
      page: 1,
      pageSize,
      orderBy,
    })

    router.push(`/heroes?${updatedSearchParams.toString()}`)
  }

  return (
    <form
      onSubmit={handleApplyFilters}
      className="heroes__filters"
      id="filters-form"
    >
      <Input
        id="search-input"
        wrapperClassName="flex-1"
        leftContent={<SearchIcon size={16} />}
        placeholder="Search the name here"
        defaultValue={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="heroes__filters__dropdowns-row">
        <Dropdown
          id="order-dropdown"
          title="Order"
          minWidth="160px"
          onChange={(id) => setOrderBy(id)}
          options={[
            { id: 'name', label: 'A-Z' },
            { id: '-name', label: 'Z-A' },
            { id: 'modified', label: 'Modified (ASC)' },
            { id: '-modified', label: 'Modified (DESC)' },
          ]}
        />

        <Dropdown
          id="page-size-dropdown"
          title="Page size"
          defaultOptionID={searchParams.get('pageSize') || '10'}
          minWidth="120px"
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

      <button type="submit" className="button">
        Search
      </button>
    </form>
  )
}
