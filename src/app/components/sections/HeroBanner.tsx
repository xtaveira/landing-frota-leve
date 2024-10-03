import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center">
        <div className="w-full mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            Sua frota no controle certo
          </h2>
          <p className="text-lg  mb-6">
            Automatize o gerenciamento de frotas da sua empresa ou órgão público com a frota leve a solução completa que você precisa para substituir o controle no papel.
          </p>
          <Link href="#" className="inline-block hover:bg-primary hover:text-background bg-background text-primary border-primary font-thin py-2 px-6 rounded-full border-2  transition duration-300">
            Saiba mais
          </Link>
        </div>
        <div className="md:w-1/2 w-full p-2 bg-white rounded-lg">
          <Image 
            src="/full-logo.jpeg" 
            alt="full logo" 
            width={500} 
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
  )
}

export default HeroBanner