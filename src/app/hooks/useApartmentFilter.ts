import { useEffect, useState } from 'react'
import { filterApartmentsForNextMonth, filterApartmentsForNextWeek, filterByCity, filterByMaxPrice, filterByName } from '../context/filterApartments'
import type Apartment from '../interfaces/apartment'
import { CityEnum } from '../interfaces/apartment'
import type FilterOptions from '../interfaces/filters'

export function useApartmentFilter(initialApartments: Apartment[], filterOptions: FilterOptions) {
  const { selectedCity, selectedMaxPrice, nameFilter, selectedNextWeek, selectedNextMonth } = filterOptions
  const [filteredApartments, setFilteredApartments] = useState<Apartment[]>(initialApartments)

  useEffect(() => {
    let apartments = initialApartments

    if (selectedCity && selectedCity in CityEnum)
      apartments = filterByCity(apartments, selectedCity)

    if (nameFilter && nameFilter.trim() !== '')
      apartments = filterByName(apartments, nameFilter)

    if (selectedMaxPrice && selectedMaxPrice > 0)
      apartments = filterByMaxPrice(apartments, selectedMaxPrice)

    if (selectedNextWeek)
      apartments = filterApartmentsForNextWeek(apartments)

    if (selectedNextMonth)
      apartments = filterApartmentsForNextMonth(apartments)

    setFilteredApartments(apartments)
  }, [initialApartments, selectedCity, nameFilter, selectedMaxPrice, selectedNextMonth, selectedNextWeek])

  return filteredApartments
}
