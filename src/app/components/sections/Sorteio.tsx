import React from 'react'

const Sorteio = () => {

  const randNumber = Math.floor(Math.random() * 10);
  const ganhouBombom = randNumber === 9

  return (
    <div className='py-12 w-full items-center justify-center text-center'>
      <div className={`${ganhouBombom ? 'bg-green-400 ' : 'bg-red-300 '} text-black text-4xl py-12`}>
        SORTEIO: 
        <p>
          {ganhouBombom ? 'GANHOU O SORTEIO!!!!' : 'NÃO GANHOU :( RECARREGUE A PÁGINA'}
          </p>
      </div>
    </div>
  )
}

export default Sorteio