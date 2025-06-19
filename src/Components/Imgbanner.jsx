import React from 'react';
import { motion } from 'framer-motion';

const Imgbanner = ({ data }) => {
  if (!data) return null;

  const { image, heading, paragraph1, paragraph2, paragraph3 } = data;

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-8 pt-6 pb-0 px-6 md:pt-12 md:pb-0 md:px-12 bg-white">
      
      {/* Left Side - Image (Hidden on small screens) */}
      <motion.div
        className="w-full md:w-1/2 hidden md:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={image}
          alt="Banner"
          className="w-full h-[26rem] object-cover rounded-xl shadow-md"
        />
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        className="w-full md:w-1/2 space-y-4 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-bold text-[#7BAB0A]">
          {heading}
        </h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {paragraph1}
        </motion.p>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {paragraph2}
        </motion.p>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {paragraph3}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Imgbanner;
