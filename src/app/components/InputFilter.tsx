import React from 'react'
import { useAppContext } from '../context'

interface InputFilterProps {
  label: string
}

const InputFilter: React.FC<InputFilterProps> = ({ label }) => {
  const { setNameFilter } = useAppContext()

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value)
  }

  return (
    <div className="flex flex-col">
      <label className="text-sm lg:text-base md:font-medium mb-1 text-gray-900 capitalize">{label}</label>
      <input 
        onChange={handleNameChange} 
        type="search" 
        id="default-search" 
        className="block w-2/3 p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
        placeholder="" 
      />
    </div>

  )
}

export default InputFilter
