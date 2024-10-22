import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center gap-2">

        <Image 
          src="/para-amarelo.png" 
          alt="Frota Leve Logo" 
          width={180} 
          height={180}
          className="w-auto h-16"
        />
      </header>
  )
}

export default Header
