import React from 'react';
import { motion } from 'framer-motion';

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const CertificatesSection = () => {
  return (
    <section className="px-5 text-center">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="sm:text-[50px] text-4xl font-bold title-font text-[#7BAB0A] mb-4">
          Certificates
        </h1>

        <div className="flex mt-6 justify-center">
          <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center max-w-4xl mx-auto">
        {certificateLogos.map((logo, index) => (
          <motion.div
            key={logo.id}
            className="flex justify-center items-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-36 h-36 object-contain transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
