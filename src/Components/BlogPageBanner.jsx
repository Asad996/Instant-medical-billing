import React from 'react';
import bgimg from '../assets/img/ICD-10 Coding_ What You Need to Know for Efficient Medical Billing _ Zupyak.jpeg';
import { motion } from 'framer-motion';

const BlogPageBanner = ({ heading }) => {
  return (
    <div
      className="w-full h-[400px] flex items-center justify-center bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>

      {/* Animated Heading */}
      <motion.h1
        className="text-white text-5xl sm:text-6xl font-bold relative z-10 text-center px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {heading}
      </motion.h1>
    </div>
  );
};

export default BlogPageBanner;
