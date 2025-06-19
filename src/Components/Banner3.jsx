import React from 'react';
import { motion } from 'framer-motion';

const Banner3 = ({ data }) => {
  if (!data) return null;

  const { image, title, description } = data;

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="bg-black/60 w-full h-full px-4 py-16 sm:px-6 md:px-12 lg:px-24 lg:py-24 flex items-center">
        <motion.div
          className="w-full max-w-4xl mx-auto text-left sm:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#7BAB0A]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <a
              href="#"
              className="inline-block bg-[#7BAB0A] px-8 py-3 text-sm sm:text-base font-medium text-white transition hover:bg-[#617e1e] focus:ring-3 focus:ring-yellow-400 focus:outline-none"
            >
              Talk To An Expert Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner3;
