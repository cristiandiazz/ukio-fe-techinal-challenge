import React from 'react'
import CityFilter from '@/components/CityFilter'
import InputFilter from '@/components/InputFilter'

const Filters: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 place-items-start md:place-items-center items-center">
      <InputFilter label="name" />
      <CityFilter label="City" options={['madrid', 'barcelona', 'lisbon']} />
    </div>
  )
}

export default Filters
