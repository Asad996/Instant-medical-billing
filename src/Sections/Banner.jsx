import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/img/background1.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 pt-10 sm:px-6 md:pt-12 md:pb-24 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text Content with slide-in animation */}
        <motion.div
          className="text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Powering Your Practice with Seamless{' '}
            <strong className="text-[#7BAB0A]">Billing</strong> Solutions
          </h1>

          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            InstantBillings delivers personalized, accurate, and efficient medical billing services—designed to fit your practice’s unique requirements.
          </p>

          <div className="mt-6">
        <Link to="/contact">  <a
              className="inline-block rounded bg-[#7BAB0A] px-6 py-3 text-white font-medium shadow hover:bg-[#5f7c1a] transition"
              href="#"
            >
              Consult Schedule
            </a> </Link>
            
          </div>
        </motion.div>

        {/* Right Image with slide-in animation */}
        <motion.div
          className="w-full hidden md:block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={backgroundImage}
            alt="Banner"
            className="rounded-t-full border-[#7BAB0A] border-t-8 border-b-8 w-full object-cover max-h-[450px] md:max-h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
