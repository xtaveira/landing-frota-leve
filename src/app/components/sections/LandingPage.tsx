import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">FROTA LEVE</h1>
        <Image 
          src="/logo.png" 
          alt="Frota Leve Logo" 
          width={50} 
          height={50}
          className="w-auto h-8"
        />
      </header>
      
      <main className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sua frota no controle certo
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Automatize o gerenciamento de frotas da sua empresa ou órgão público com a frota leve a solução completa que você precisa para substituir o controle no papel.
          </p>
          <Link href="#" className="inline-block bg-white text-yellow-500 font-semibold py-2 px-6 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-300">
            Saiba mais
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/office-supplies.jpg" 
            alt="Office supplies" 
            width={500} 
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  )
}