import { useEffect, useState } from 'react'
import {filterByCity, filterByName } from '../context/filterApartments'
import type Apartment from '../interfaces/apartment'
import { CityEnum } from '../interfaces/apartment'
import type FilterOptions from '../interfaces/filters'

export function useApartmentFilter(initialApartments: Apartment[], filterOptions: FilterOptions) {
  const { selectedCity, nameFilter } = filterOptions
  const [filteredApartments, setFilteredApartments] = useState<Apartment[]>(initialApartments)

  useEffect(() => {
    let apartments = initialApartments

    if (selectedCity && selectedCity in CityEnum)
      apartments = filterByCity(apartments, selectedCity)

    if (nameFilter && nameFilter.trim() !== '')
      apartments = filterByName(apartments, nameFilter)

    setFilteredApartments(apartments)
  }, [initialApartments, selectedCity, nameFilter])

  return filteredApartments
}
