import React from 'react'
import { useAppContext } from '../context'

interface FilterProps {
  label: string
  options: number[]
}

const Filter: React.FC<FilterProps> = ({ label, options }) => {
  const { selectedMaxPrice, setSelectedMaxPrice } = useAppContext()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const maxPrice = Number.parseInt(event.target.value)
    setSelectedMaxPrice(maxPrice)
  }

  return (
    <div className="flex flex-col items-start md:items-center text-sm lg:text-base capitalize">
      <label className="font-medium mb-1 text-gray-900 ">
        Max
        {' '}
        {label}
      </label>
      <select className="px-3 py-2 border rounded-md" onChange={handleChange}>
        {!selectedMaxPrice && (<option value="">{}</option>)}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
            €
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
