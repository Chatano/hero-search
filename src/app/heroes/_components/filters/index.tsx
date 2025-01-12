'use client'
import './styles.css'
import { SearchIcon } from "@/assets/icons"
import { Dropdown } from "@/components/dropdown"
import { Input } from "@/components/input"
import { Filters } from "@/models/Filters"
import { FC, FormEvent, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { updateUrlParams } from '@/utils/update-url-params'

interface Props {
  initialFilters?: Filters
}

export const HeroesFilters: FC<Props> = ({ initialFilters }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const [searchText, setSearchText] = useState(initialFilters?.search || '')

  const onSubmitFilters = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const updatedSearchParams = updateUrlParams(searchParams, {
      search: searchText
    })

    router.push(`${pathName}?${updatedSearchParams.toString()}`)
  }

  return (
    <form onSubmit={onSubmitFilters} className="heroes__filters">
      <Input
        id="search-text"
        wrapperClassName="flex-1"
        leftContent={<SearchIcon size={16} />}
        placeholder="Pesquise o nome aqui"
        defaultValue={searchText}
        onChange={e => setSearchText(e.target.value.trim())}
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
      <button type='submit' className="button">Buscar</button>
    </form>
  )
}