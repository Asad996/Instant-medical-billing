import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  // Define the animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="text-gray-600 body-font relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }} // Set to true if you want the animation to happen only once
      variants={variants}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
    >
      <div className="container px-5 pt-2 pb-20 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-[50px] text-4xl font-bold title-font text-[#7BAB0A] mb-4">
            Contact Us
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
            Schedule Your Free Consultation Today.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-[#7BAB0A] border-0 py-2 px-8 focus:outline-none hover:bg-[#374710] rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
