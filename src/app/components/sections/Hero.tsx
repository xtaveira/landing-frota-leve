import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#FFC314] flex p-10 items-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold">Sua frota no controle certo</h1>
        <p className="text-lg">
          Automatize o gerenciamento de frotas da sua empresa ou órgão público com a frota leve,
          a solução completa que você precisa para substituir o controle no papel.
        </p>
        <Link href="#" className="inline-block hover:bg-primary hover:text-background bg-background 
        text-primary border-primary font-thin py-2 px-6 rounded-full border-2  transition duration-300
        	scroll-behavior: smooth;">
            Saiba mais
        </Link>
      </div>
      <div className="flex-1">
        {/* <img src="path-to-your-laptop-image.jpg" alt="Laptop" className="w-full" /> */}
      </div>
    </section>
  );
};

export default Hero;
