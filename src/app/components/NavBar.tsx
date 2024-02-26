import React from 'react'
import Image from 'next/image'
import Filters from '@/components/Filters'

const NavBar: React.FC = () => {
  const reloadPage = () => {
    window.location.reload()
  }
  return (
    <nav className="p-4 flex flex-col md:flex-row items-center mt-4">
      <div className="w-full md:w-1/6 mb-4 md:mb-0 md:mr-4">
        <button onClick={reloadPage} className="cursor-pointer">
          <Image priority src="/logo.svg" alt="Ukio Logo" width={100} height={100} style={{ width: '100%', height: 'auto' }} />
        </button>
      </div>
      <div className="w-full md:w-5/6 flex flex-col md:flex-row items-center justify-center md:justify-end pl-6 md:pl-0">
        <Filters />
      </div>
    </nav>
  )
}

export default NavBar
