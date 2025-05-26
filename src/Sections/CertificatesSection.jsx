import React from 'react';

const certificateLogos = [
  { id: 1, src: '../../public/img/BBBlogo.PNG', alt: 'Certificate 1' },
  { id: 2, src: '../../public/img/CMSlogo.PNG', alt: 'Certificate 2' },
  { id: 3, src: '../../public/img/HIPAAlogo.PNG', alt: 'Certificate 3' },
  { id: 4, src: '../../public/img/ISOlogo.PNG   ', alt: 'Certificate 4' },
];

const CertificatesSection = () => {
  return (
    <section className=" px-5 text-center ">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#7BAB0A]">Certificates</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center max-w-4xl mx-auto">
        {certificateLogos.map((logo) => (
          <div key={logo.id} className="flex justify-center items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-36 h-36 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
