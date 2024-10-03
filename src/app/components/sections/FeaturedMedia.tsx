import Image from 'next/image'
import React from 'react'

const FeaturedMedia = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center">
        <div className="w-full flex flex-col gap-12 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            Protótipos
          </h2>
          
          <div className='items-center justify-center flex flex-col md:flex-row md:flex-wrap gap-12'>
            <Image alt='protótipo' src="/1.png" width={300} height={300} />
            <Image alt='protótipo' src="/2.png" width={300} height={300} />
            <Image alt='protótipo' src="/3.png" width={300} height={300} />
            <Image alt='protótipo' src="/4.png" width={300} height={300} />
            <Image alt='protótipo' src="/5.png" width={300} height={300} />
            <Image alt='protótipo' src="/6.png" width={300} height={300} />
            <Image alt='protótipo' src="/7.png" width={300} height={300} />
            <Image alt='protótipo' src="/8.png" width={300} height={300} />
            <Image alt='protótipo' src="/9.png" width={300} height={300} />
            <Image alt='protótipo' src="/10.png" width={300} height={300} />
          </div>
          
        </div>
        
      </div>
  )
}

export default FeaturedMedia