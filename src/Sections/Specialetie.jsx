import React from 'react';
import { motion } from 'framer-motion';

const features = [
  "OB GYN",
  "Dental Billing",
  "Chiropractic Billing",
  "Hematology Billing",
  "Orthopedic Billing",
  "Mental Health",
  "Rehab Billing",
  "Pathology Billing",
  "General Surgery",
  "Pulmonology Billing"
];

const Specialetie = ({ compact = false }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className={`container ${compact ? 'px-0 py-4' : 'px-5 py-24'} mx-auto`}>

        {/* Header Section */}
        {!compact && (
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="sm:text-[50px] text-4xl font-bold title-font text-[#7BAB0A] mb-4">
              Our Specialties
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
              From patient registration and insurance eligibility verification to charge capture and claim submission, we ensure precision and proficiency in every step of the revenue cycle. Our Expansive nature of Revenue Cycle Management (RCM) services caters to a broad spectrum of medical specialties
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
            </div>
          </motion.div>
        )}

        {/* Specialties Row (Horizontal Layout in Compact) */}
        <div
          className={`${
            compact
              ? 'flex flex-wrap gap-3 w-full'
              : 'flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'
          }`}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${compact ? 'flex-grow min-w-[140px] max-w-full' : 'p-2 sm:w-1/2 w-full'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 rounded flex items-center px-4 py-2 transition duration-300 ease-in-out shadow-md transform hover:-translate-y-2 hover:shadow-xl hover:border-[#7BAB0A]">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-[#7BAB0A] w-5 h-5 flex-shrink-0 mr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Button (hide in compact) */}
        {!compact && (
          <motion.button
            className="flex mx-auto mt-16 text-white bg-[#7BAB0A] border-0 py-2 px-8 focus:outline-none hover:bg-[#536b19] rounded text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
          >
            Contact US
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default Specialetie;
