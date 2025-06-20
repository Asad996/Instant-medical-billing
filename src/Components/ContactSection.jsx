import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="text-gray-600 body-font relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{ duration: 0.5 }}
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

        <div className="flex flex-wrap md:flex-nowrap gap-10 justify-center items-center ">
          {/* Left Side - Paragraph */}
          <div className="md:w-1/2 w-full px-4 bg-[#dadada50] p-12 rounded-3xl ">
            <h2 className="text-2xl font-semibold text-[#374710] mb-4 text-left">Why Contact Us?</h2>
            <p className="text-gray-700 text-base leading-relaxed text-left">
              Whether you're a small clinic or a large healthcare facility, our expert medical billing services ensure that you get paid faster and more accurately.
              From insurance claim submissions to patient billing and denial management, we handle it all — so you can focus on what matters most: your patients.
              Reach out to us today and let’s talk about how we can simplify your revenue cycle, reduce billing errors, and increase profitability.
              Our team is ready to provide you with a free consultation and customized solutions that meet your specific needs.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 w-full">
            <div className="flex flex-col space-y-4">
              <div>
           
                <input
                  type="text"
                  id="name"
                  placeholder='Name'
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                />
              </div>
              <div>
              
                <input
                placeholder='Email'
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                />
              </div>
              <div>
        
                <textarea
                placeholder='Massege'
                  id="message"
                  name="message"
                  className="w-full h-32 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 resize-none transition duration-200"
                ></textarea>
              </div>
              <div>
                <button className="w-full text-white bg-[#7BAB0A] border-0 py-2 px-8 focus:outline-none hover:bg-[#374710] rounded text-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
