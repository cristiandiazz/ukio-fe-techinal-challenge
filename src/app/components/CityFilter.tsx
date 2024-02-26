import React from 'react'
import { useAppContext } from '../context'

interface FilterProps {
  label: string
  options: string[]
}

const CityFilter: React.FC<FilterProps> = ({ label, options }) => {
  const { selectedCity, setSelectedCity } = useAppContext()

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }

  return (
    <div className="flex flex-col items-start md:items-center text-sm lg:text-base">
      <label className="font-medium mb-1 text-gray-900">{label}</label>
      <select
        className="px-3 py-2 border rounded-md capitalize"
        onChange={handleCityChange}
        value={selectedCity}
      >
        {!selectedCity && (<option value="">{}</option>)}
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default CityFilter
