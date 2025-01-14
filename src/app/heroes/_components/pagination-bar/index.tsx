'use client'
import './styles.css'
import { Pagination } from '@/models/Pagination'
import { FC } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { updateUrlParams } from '@/utils/filters/update-url-params'

interface Props {
  pagination: Pagination
}

export const HeroesPaginationBar: FC<Props> = ({ pagination }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChangePage = (value: number) => {
    if (value < 1) return

    const updatedPage = Math.min(value, pagination.totalPages)

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
        id="go-to-prev-page"
        onClick={handleGoBack}
        disabled={!pagination.hasPrevPage}
        className="heroes__pagination__arrow"
        aria-label="Previous page button"
      >
        <ChevronLeft size={20} />
      </button>

      <span className="heroes__pagination__current-page" id="current-page">
        {pagination.page} of {pagination.totalPages}
      </span>

      <button
        id="go-to-next-page"
        onClick={handleGoNext}
        disabled={!pagination.hasNextPage}
        className="heroes__pagination__arrow"
        aria-label="Next page button"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
