'use client'
import React from 'react'
import type { NextPage } from 'next'
import { useAppContext } from './context'
import { useApartmentFilter } from './hooks/useApartmentFilter'
import { getTotalCityApartments } from './context/filterApartments'
import type FilterOptions from './interfaces/filters'
import type Apartment from './interfaces/apartment'
import NavBar from '@/components/NavBar'
import Card from '@/components/Card'

const Home: NextPage = () => {
  const {
    allApartments,
    selectedCity,
    nameFilter,
  } = useAppContext()

  const filterParams: FilterOptions = {
    selectedCity,
    nameFilter,
  }

  const apartments: Apartment[] = useApartmentFilter(allApartments, filterParams)


  return (
    <main className="container m-auto">
      <NavBar />
      <span>
        {selectedCity && `${apartments.length} of ${getTotalCityApartments(selectedCity, allApartments)} apartments in ${selectedCity}`}
      </span>
      <div className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-2 lg:grid-cols-3 lg:mt-4 place-items-center">
        {apartments.map(apartment => (
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
    </main>
  )
}

export default Home
