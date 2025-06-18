import React from 'react';
import { motion } from 'framer-motion';
import protectionImage from '../assets/img/assest-protection-png.webp';

const paragraphAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

const Banner2 = () => {
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
      
      {/* Text Content */}
      <motion.div
        className="p-8 md:p-12 lg:px-16 lg:py-24"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <motion.h2
            className="text-2xl font-bold text-[#7BAB0A] md:text-3xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Medical Billing and Coding Company
          </motion.h2>

          {[
            "At InstantBillings, we specialize in comprehensive medical billing and coding solutions designed to keep your practice compliant, efficient, and profitable. Our team ensures full adherence to HIPAA, the Affordable Care Act (ACA), and state-specific regulations—giving you peace of mind in a complex regulatory landscape.",
            "With our advanced analytics and revenue cycle expertise, we uncover key insights that help boost your revenue and reduce denials. Our certified billing and coding professionals streamline operations, minimize administrative burdens, and improve claim accuracy.",
            "Trusted by healthcare providers across the U.S., InstantBillings has a proven track record of enhancing compliance and maximizing reimbursements for small to mid-sized practices."
          ].map((para, i) => (
            <motion.p
              key={i}
              className="mt-4 text-gray-500"
              custom={i}
              variants={paragraphAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="inline-block rounded-sm bg-[#7BAB0A] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#587418] focus:ring-3"
            >
              Contact US
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          alt="Medical Billing Illustration"
          src={protectionImage}
          className="w-full object-cover sm:h-[calc(100%_-_2rem)] sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
        />
      </motion.div>
    </section>
  );
};

export default Banner2;
