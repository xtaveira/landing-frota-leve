import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#FFC314]  py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <img src="path-to-your-mobile-image.png" alt="Mobile Preview" className="w-40" />
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold">Transforme o controle de frotas com tecnologia.</h2>
          <p>
            Diga adeus às planilhas manuais e papéis. Com nosso software, tenha total controle
            de veículos, motoristas e viagens em uma plataforma intuitiva e eficiente.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
