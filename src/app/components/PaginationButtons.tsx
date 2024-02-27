import React from 'react'

interface PaginationButtonsProps {
  currentPage: number
  maxPages: number
  setPage: (pageNumber: number) => void
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({ currentPage, maxPages, setPage }) => {

  const pageNumbers = Array.from({ length: maxPages }, (_, index) => index + 1);

  return (
    <>
      {pageNumbers.map(pageNumber => (
        <button
          key={`page${pageNumber}`}
          className={`bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 mx-2 rounded ${currentPage === pageNumber ? 'bg-black' : ''}`}
          onClick={() => setPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </>
  )
}

export default PaginationButtons
