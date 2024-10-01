import Image from "next/image";

export default function Home() {

  const randNumber = Math.floor(Math.random() * 31);
  const ganhouBombom = randNumber === 15

  return (
    <div className="grid text-white grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-5xl font-bold">FROTA LEVE</div>
      <div className="flex flex-col gap-12">
        <Image  alt="imagem"  src="/1.png" width={240} height={500} />
        <Image  alt="imagem"  src="/2.png" width={240} height={500} />
        <Image  alt="imagem"  src="/3.png" width={240} height={500} />
        <Image  alt="imagem"  src="/4.png" width={240} height={500} />
        <Image  alt="imagem"  src="/5.png" width={240} height={500} />
        <Image  alt="imagem"  src="/6.png" width={240} height={500} />
        <Image  alt="imagem"  src="/7.png" width={240} height={500} />
        <Image  alt="imagem"  src="/8.png" width={240} height={500} />
        <Image  alt="imagem"  src="/9.png" width={240} height={500} />
        <Image  alt="imagem"  src="/10.png" width={240} height={500} />
      </div>
      <div className="flex text-center text-2xl mt-24 flex-col gap-12">
        <div>
          <p>SEU NÚMERO FOI: {randNumber}</p>
          <p>número 15 ganha CHICLETE :D</p>
        </div>
       {ganhouBombom && (
        <div className="bg-red-500 p-15 text-black font-bold mb-24">
          <p>PARABÉNS VOCÊ GANHOU UM CHICLETE</p>
        </div>
       )}
      </div>
    </div>
  );
}
