import React from 'react';
import { motion } from 'framer-motion';

const ContactSection2 = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 pt-2 pb-20 mx-auto">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h1 className="sm:text-[50px] text-4xl font-bold title-font text-[#7BAB0A] mb-4">
                        Contact Us
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
                        Schedule Your Free Consultation Today.
                    </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
                    </div>
                </motion.div>

                {/* Flex Container */}
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Contact Form */}
                    <motion.div
                        className="md:w-1/2 w-full"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-wrap -m-2">
                            {/* Name */}
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
                            {/* Email */}
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
                            {/* Message */}
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
                            {/* Button */}
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-[#7BAB0A] border-0 py-2 px-8 focus:outline-none hover:bg-[#374710] rounded text-lg">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side Content */}
                    <motion.div
                        className="md:w-1/2 w-full text-gray-700"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
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
                        <p className="mb-6">
                            Take advantage of HMS free consultation services to experience how we can help your practice run more efficiently to
                            increase revenue. We offer various medical practice management services to help manage administrative tasks for better
                            patient healthcare. Let us become an extension of your practice success.
                        </p>
                        <button className="text-white bg-[#7BAB0A] border-0 py-2 px-8 focus:outline-none hover:bg-[#374710] rounded text-lg">
                            Get Free Consultation
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection2;
