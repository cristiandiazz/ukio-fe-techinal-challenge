import { useEffect, useState } from 'react'
import type Apartment from '../interfaces/apartment'
import { getCurrentPageItems, getTotalPages } from '../utils/pagination'
import { PaginationResult } from '../interfaces/pagination'

interface PaginationProps {
  pageSize: number
}

const DEFAULT_PAGE = 1


export default function usePagination(apartments: Apartment[], { pageSize }: PaginationProps): PaginationResult {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE)

  useEffect(() => {
    setCurrentPage(DEFAULT_PAGE)
  }, [apartments])

  const totalPages = getTotalPages(pageSize, apartments.length)

  const setPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const apartmentsOnCurrentPage = getCurrentPageItems(currentPage, pageSize, apartments)

  return { apartmentsOnCurrentPage, currentPage, setPage, maxPages: totalPages }
}
