import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold ">FROTA LEVE</h1>
        <Image 
          src="/logo-small.png" 
          alt="Frota Leve Logo" 
          width={180} 
          height={180}
          className="w-auto h-8"
        />
      </header>
  )
}

export default Header

