'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import type Apartment from '../interfaces/apartment'

interface ApartmentContextType {
  allApartments: Apartment[]
  selectedCity: string
  setSelectedCity: (city: string) => void
  nameFilter: string
  setNameFilter: (value: string) => void
  selectedMaxPrice: number
  setSelectedMaxPrice: (value: number) => void
  selectedNextWeek: boolean
  setSelectedNextWeek: (value: boolean) => void
  selectedNextMonth: boolean
  setSelectedNextMonth: (value: boolean) => void
}

const ApartmentContext = createContext<ApartmentContextType | undefined>(undefined)

export function useAppContext() {
  const context = useContext(ApartmentContext)
  if (!context)
    throw new Error('useAppContext must be used within an ApartmentProvider')

  return context
}

export function ApartmentProvider({ children }: {
  children: React.ReactNode
}) {
  const [allApartments, setAllApartments] = useState<Apartment[]>([])
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [nameFilter, setNameFilter] = useState<string>('')
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number>(0)
  const [selectedNextWeek, setSelectedNextWeek] = useState<boolean>(false)
  const [selectedNextMonth, setSelectedNextMonth] = useState<boolean>(false)

  useEffect(() => {
    fetch('/api/apartments')
      .then(response => response.json())
      .then((data): void => {
        setAllApartments(data.apartments)
      }).catch(error => console.error('Error fetching apartments:', error))
  }, [])

  return (
    <ApartmentContext.Provider value={{
      allApartments,
      selectedCity,
      setSelectedCity,
      nameFilter,
      setNameFilter,
      selectedMaxPrice,
      setSelectedMaxPrice,
      selectedNextWeek,
      setSelectedNextWeek,
      selectedNextMonth,
      setSelectedNextMonth,
    }}
    >
      {children}
    </ApartmentContext.Provider>
  )
}
