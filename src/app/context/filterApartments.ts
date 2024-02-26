import type Apartment from '../interfaces/apartment'

export function filterByCity(apartments: Apartment[], city: string): Apartment[] {
  return apartments.filter(apartment => apartment.city === city)
}

export function filterByName(apartments: Apartment[], nameFilter: string): Apartment[] {
  const searchTerm = nameFilter.toLowerCase().trim()
  return apartments.filter(apartment => apartment.name.toLowerCase().includes(searchTerm))
}

export function getTotalCityApartments(city: string, allApartments: Apartment[]): number {
  return allApartments.filter(apartment => apartment.city === city).length
}
