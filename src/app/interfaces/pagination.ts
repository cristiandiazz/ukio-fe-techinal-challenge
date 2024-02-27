import Apartment from "./apartment"

export interface PaginationResult {
    apartmentsOnCurrentPage: Apartment[]
    currentPage: number
    setPage: (pageNumber: number) => void
    maxPages: number
  }