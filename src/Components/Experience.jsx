import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { value: 12, label: 'Stats' },
    { value: 10, label: 'Years With You' },
    { value: 15, label: 'Practices' },
    { value: 12, label: 'Providers' },
    { value: 30, label: 'Employees' },
  ];

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="text-gray-600 body-font" ref={ref}>
      <div className="container px-5 py-24 mx-auto">
        
        {/* Heading with animation */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="sm:text-[50px] text-4xl font-bold title-font text-[#7BAB0A] mb-4">
            OUR EXPERIENCE IN NUMBERS
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
          </div>
        </motion.div>

        {/* Cards with animation */}
        <div className="flex flex-wrap -m-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-4 md:w-1/5 sm:w-1/2 w-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="border-[1px] border-[#7BAB0A] px-4 py-6 rounded-lg shadow hover:shadow-md transition duration-300">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {inView ? <CountUp start={0} end={stat.value} duration={2} /> : 0}
                </h2>
                <p className="leading-relaxed">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
