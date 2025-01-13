'use client'

import { SearchIcon } from '@/assets/icons'
import { Input } from '@/components/input'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export const HomeSearchBar = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')

  const handleSearchByName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/heroes?search=${searchText.trim()}`)
  }

  return (
    <form onSubmit={handleSearchByName} className="home__search-container">
      <Input
        id="search-text"
        wrapperClassName="flex-1"
        leftContent={<SearchIcon size={16} />}
        placeholder="Search the name here"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  )
}
