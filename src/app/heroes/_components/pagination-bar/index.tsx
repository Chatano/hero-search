'use client'
import './styles.css'
import { Pagination } from '@/models/Pagination'
import { FC } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { updateUrlParams } from '@/utils/filters/update-url-params'
import { Filters } from '@/models/Filters'

interface Props {
  pagination: Pagination
  searchParams?: Filters
}

export const HeroesPaginationBar: FC<Props> = ({ pagination }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChangePage = (value: number) => {
    if (value < 1) return

    const updatedPage = Math.min(value, pagination.totalPages) // to prevent to fetch a unexist page

    const updatedSearchParams = updateUrlParams(searchParams, {
      page: updatedPage,
    })
    router.push(`/heroes?${updatedSearchParams.toString()}`)
  }

  const handleGoBack = () => handleChangePage(pagination.page - 1)
  const handleGoNext = () => handleChangePage(pagination.page + 1)

  return (
    <div className="heroes__pagination__wrapper">
      <button
        onClick={handleGoBack}
        disabled={!pagination.hasPrevPage}
        className="heroes__pagination__arrow"
      >
        <ChevronLeft size={20} />
      </button>

      <span className="heroes__pagination__current-page">
        {pagination.page} of {pagination.totalPages}
      </span>

      <button
        onClick={handleGoNext}
        disabled={!pagination.hasNextPage}
        className="heroes__pagination__arrow"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
