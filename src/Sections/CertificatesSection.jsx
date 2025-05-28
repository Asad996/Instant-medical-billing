import React from 'react';
import logo1 from '../assets/img/BBBlogo.PNG';
import logo2 from '../assets/img/CMSlogo.PNG';
import logo3 from '../assets/img/HIPAAlogo.PNG';
import logo4 from '../assets/img/ISOlogo.PNG';

const certificateLogos = [
  { id: 1, src: logo1, alt: 'Certificate 1' },
  { id: 2, src: logo2, alt: 'Certificate 2' },
  { id: 3, src: logo3, alt: 'Certificate 3' },
  { id: 4, src: logo4, alt: 'Certificate 4' },
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
