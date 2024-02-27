'use client'
import React from 'react'
import type { NextPage } from 'next'
import { useAppContext } from './context'
import { useApartmentFilter } from './hooks/useApartmentFilter'
import type PaginationResult from './interfaces/pagination'
import usePagination from './hooks/usePagination'
import { getTotalCityApartments } from './context/filterApartments'
import type FilterOptions from './interfaces/filters'
import type Apartment from './interfaces/apartment'
import NavBar from '@/components/NavBar'
import PaginationButtons from '@/components/PaginationButtons'
import Card from '@/components/Card'

const PAGE_SIZE = 6

const Home: NextPage = () => {
  const {
    allApartments,
    selectedCity,
    selectedMaxPrice,
    nameFilter,
    selectedNextWeek,
    selectedNextMonth,
  } = useAppContext()

  const filterParams: FilterOptions = {
    selectedCity,
    selectedMaxPrice,
    nameFilter,
    selectedNextWeek,
    selectedNextMonth,
  }

  const apartments: Apartment[] = useApartmentFilter(allApartments, filterParams)

  const {
    apartmentsOnCurrentPage,
    currentPage,
    setPage,
    maxPages,
  }: PaginationResult = usePagination(apartments, { pageSize: PAGE_SIZE })

  return (
    <main className="container m-auto">
      <NavBar />
      <span>
        {selectedCity && `${apartments.length} of ${getTotalCityApartments(selectedCity, allApartments)} apartments in ${selectedCity}`}
      </span>
      <div className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-2 lg:grid-cols-3 lg:mt-4 place-items-center">
        {apartmentsOnCurrentPage.map(apartment => (
          <Card
            key={apartment.name}
            name={apartment.name}
            bedrooms={apartment.bedrooms}
            bathrooms={apartment.bathrooms}
            price={apartment.price}
            availability={apartment.availability}
            imageUrl={apartment.imageUrl}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4 mb-8">
        <PaginationButtons currentPage={currentPage} maxPages={maxPages} setPage={setPage} />
      </div>
    </main>
  )
}

export default Home
