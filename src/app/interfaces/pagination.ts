import Apartment from "./apartment"

export default interface PaginationResult {
    apartmentsOnCurrentPage: Apartment[]
    currentPage: number
    setPage: (pageNumber: number) => void
    maxPages: number
  }