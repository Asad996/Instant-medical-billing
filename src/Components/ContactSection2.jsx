
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection2 = () => {
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
                        <h2 className="text-2xl font-bold text-[#7BAB0A] mb-4">Free Medical Consulting Services</h2>
                        <p className="mb-4">
                            We help you generate revenue for your healthcare practice and reduce time and effort managing administrative tasks.
                            We'll collaborate with your team so that everyone is working towards the same goals, from medical billing and practice
                            management services to quality patient healthcare!
                        </p>
                        <p className="mb-4">
                            Our professional team works closely with your office staff to ensure that medical billing needs are met quickly and
                            efficiently. With our experience and knowledge, we provide quality medical practice billing service to clients and
                            help them achieve their goals.
                        </p>
                       
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="md:w-1/2 w-full">
                        <div className="flex flex-col space-y-8">
                            <div>

                                <input
                                    type="text"
                                    id="name"
                                    placeholder='Name'
                                    name="name"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#7BAB0A] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                                />
                            </div>
                            <div>

                                <input
                                    placeholder='Email'
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#7BAB0A] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                                />
                            </div>
                            <div>

                                <textarea
                                    placeholder='Massege'
                                    id="message"
                                    name="message"
                                    className="w-full h-32 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#7BAB0A] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 resize-none transition duration-200"
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

export default ContactSection2;
