import { renderHook } from '@testing-library/react'
import type Apartment from '../../app/interfaces/apartment'
import { CityEnum } from '../../app/interfaces/apartment'
import { useApartmentFilter } from '../../app/hooks/useApartmentFilter'
import { filterApartmentsForNextMonth, filterApartmentsForNextWeek, filterByCity, filterByMaxPrice, filterByName } from '../../app/context/filterApartments'

jest.mock('../../app/context/filterApartments', () => ({
  filterByCity: jest.fn(),
  filterByMaxPrice: jest.fn(),
  filterByName: jest.fn(),
  filterApartmentsForNextWeek: jest.fn(),
  filterApartmentsForNextMonth: jest.fn(),
}))

const fakeApartments: Apartment[] = [
  {
    name: 'Rua dos Douradores',
    city: CityEnum.lisbon,
    bedrooms: 2,
    bathrooms: 1,
    price: 1400,
    availability: '2024-04-03',
    imageUrl: '/image7.webp',
  },
  {
    name: 'Rua de Santa Justa',
    city: CityEnum.madrid,
    bedrooms: 3,
    bathrooms: 2,
    price: 3700,
    availability: '2024-04-01',
    imageUrl: '/image8.webp',
  },
]

describe('useApartmentFilter', () => {

  it('should filter apartments by city', () => {
    const filterOptionsCity = {
      selectedCity: CityEnum.lisbon,
    }
    renderHook(() => useApartmentFilter(fakeApartments, filterOptionsCity))
    expect(filterByCity).toHaveBeenCalledWith(fakeApartments, CityEnum.lisbon)
  })

  it('should filter apartments by maximum price', () => {
    const filterOptionsPrice = {
      selectedMaxPrice: 4000,
    }

    renderHook(() => useApartmentFilter(fakeApartments, filterOptionsPrice))
    expect(filterByMaxPrice).toHaveBeenCalledWith(fakeApartments, filterOptionsPrice.selectedMaxPrice)
  })

  it('should filter apartments by name', () => {
    const filterOptionsName = {
      nameFilter: 'Rua dos Douradores',
    }

    renderHook(() => useApartmentFilter(fakeApartments, filterOptionsName))
    expect(filterByName).toHaveBeenCalledWith(fakeApartments, 'Rua dos Douradores')
  })

  it('should not filter apartments for next week', () => {
    const filterOptionsWeek = {
      selectedNextWeek: false,
    }

    renderHook(() => useApartmentFilter(fakeApartments, filterOptionsWeek))
    expect(filterApartmentsForNextWeek).not.toHaveBeenCalled()
  })

  it('should filter apartments for next month', () => {
    const filterOptionsMonth = {
      selectedNextMonth: true,
    }

    renderHook(() => useApartmentFilter(fakeApartments, filterOptionsMonth))
    expect(filterApartmentsForNextMonth).toHaveBeenCalledWith(fakeApartments)
  })
})
