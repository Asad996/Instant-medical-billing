import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const Qualities = ({ features }) => {
  return (
    <motion.div
      className="py-10 px-6 md:px-12 bg-white text-center pt-28"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#7BAB0A] mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Transforming Medical Billing Services for Small Practices with Instant Precision.
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Instant Medical Billing is the leading medical billing services company that delivers a reliable, swift, and reasonable pricing model to ensure that your practice gets the maximum reimbursement possible. We are a team of certified professional billers and coders covering every aspect of RCM billing services with utmost accuracy and efficiency.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#fdfcfc] p-6 rounded-xl shadow hover:shadow-lg transition text-center space-y-4"
            variants={cardVariants}
          >
            <div className="flex justify-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Qualities;
