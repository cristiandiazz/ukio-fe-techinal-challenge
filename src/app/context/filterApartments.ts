import type Apartment from '../interfaces/apartment'
import { isDateInNextMonth, isDateInNextWeek } from '../utils/date'

export function filterByCity(apartments: Apartment[], city: string): Apartment[] {
  return apartments.filter(apartment => apartment.city === city)
}

export function filterByName(apartments: Apartment[], nameFilter: string): Apartment[] {
  const searchTerm = nameFilter.toLowerCase().trim()
  return apartments.filter(apartment => apartment.name.toLowerCase().includes(searchTerm))
}

export function filterByMaxPrice(apartments: Apartment[], maxPrice: number): Apartment[] {
  return apartments.filter(apartment => apartment.price <= maxPrice)
}


export function filterApartmentsForNextWeek(apartments: Apartment[]): Apartment[] {
  return apartments.filter((apartment) => {
    return isDateInNextWeek(apartment.availability)
  })
}

export function filterApartmentsForNextMonth(apartments: Apartment[]): Apartment[] {
  return apartments.filter((apartment) => {
    return isDateInNextMonth(apartment.availability)
  })
}

export function getTotalCityApartments(city: string, allApartments: Apartment[]): number {
  return allApartments.filter(apartment => apartment.city === city).length
}
