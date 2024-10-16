import React from 'react';

const InfoSection = () => {
  const items = [
    {
      title: 'Planilhas e papéis causando confusão?',
      description:
        'A Frota leve centraliza todas as informações, evitando retrabalhos e perda de dados.',
    },
    {
      title: 'Dados espalhados por diferentes documentos?',
      description:
        'Nosso sistema sincroniza e organiza todas as informações sobre veículos, motoristas e manutenções em um só lugar.',
    },
    {
      title: 'Sem tempo para gerir a frota de forma eficiente?',
      description:
        'A automação inteligente da frota leve reduz o tempo gasto com a gestão, permitindo que sua equipe foque no que realmente importa.',
    },
  ];

  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
