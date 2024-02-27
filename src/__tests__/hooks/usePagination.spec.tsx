import { renderHook, act } from '@testing-library/react'
import type Apartment from '../../app/interfaces/apartment'
import { CityEnum } from '../../app/interfaces/apartment'
import usePagination  from '../../app/hooks/usePagination'

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

const paginationProps = {
  pageSize: 6,
}

describe('usePagination', () => {
  it('should initialize currentPage to 1', () => {
    const { result } = renderHook(() => usePagination(fakeApartments, paginationProps))
    expect(result.current.currentPage).toBe(1)
  })

  it('should set currentPage to 1 when apartments change', () => {
    const { result, rerender } = renderHook(({ apartments }) => usePagination(apartments, paginationProps), {
      initialProps: { apartments: fakeApartments },
    })
    
    const newFakeApartments: Apartment[] = [...fakeApartments]
    rerender({ apartments: newFakeApartments })
    
    expect(result.current.currentPage).toBe(1)
  })

  it('should set currentPage to the specified page number', () => {
    const { result } = renderHook(() => usePagination(fakeApartments, paginationProps))
    
    act(() => {
      result.current.setPage(2)
    })

    expect(result.current.currentPage).toBe(2)
  })

})
