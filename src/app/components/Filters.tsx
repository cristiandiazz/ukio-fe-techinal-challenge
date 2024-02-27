import React from 'react'
import CityFilter from '@/components/CityFilter'
import DateFilter from '@/components/DateFilter'
import MaxPriceFilter from '@/components/MaxPriceFilter'
import InputFilter from '@/components/InputFilter'
import { CityEnum } from '../interfaces/apartment';

const Filters: React.FC = () => {

  const cityOptions = Object.values(CityEnum);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 place-items-start md:place-items-center items-center">
      <InputFilter label="name" />
      <CityFilter label="City" options={cityOptions} />
      <DateFilter label="week" />
      <DateFilter label="month" />
      <MaxPriceFilter label="price" options={[1000, 2000, 3000, 4000]} />
    </div>
  )
}

export default Filters
