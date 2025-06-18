import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'HOLDEN CAULFIELD',
    title: 'Senior Product Designer',
    image: 'https://dummyimage.com/302x302',
    message:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk...",
  },
  {
    name: 'ALPER KAMU',
    title: 'UI Developer',
    image: 'https://dummyimage.com/300x300',
    message:
      "Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid...",
  },
  {
    name: 'HENRY LETHAM',
    title: 'CTO',
    image: 'https://dummyimage.com/305x305',
    message:
      "Helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Tote bag drinking vinegar cronut adaptogen...",
  },
  {
    name: 'SARA JAMES',
    title: 'Marketing Lead',
    image: 'https://dummyimage.com/306x306',
    message:
      "Adaptogen squid fanny pack vaporware DIY tote bag drinking vinegar ennui shaman taiyaki vape...",
  },
  {
    name: 'JACK DOE',
    title: 'Engineer',
    image: 'https://dummyimage.com/307x307',
    message:
      "Taiyaki taxidermy cloud bread echo park, helvetica stumptown 90's cronut +1 kinfolk. Single-origin coffee...",
  },
];

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const TestimonialCarousel = () => {
  return (
    <section className="text-gray-600 body-font w-full">
      <div className="px-4 py-16 w-full max-w-screen-xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="sm:text-[50px] text-4xl font-bold title-font text-[#7BAB0A] mb-4">
            Success Stories
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
            Why Instant Medical billing is The Best Medical Billing Company
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
          </div>
        </motion.div>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          arrows={false}
          showDots={false}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="w-full px-4"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center bg-white">
                <p className="leading-relaxed text-base text-gray-700 w-4/5 mb-6">
                  {item.message}
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                  />
                  <div className="text-left">
                    <h2 className="text-gray-900 font-semibold text-sm">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-sm">{item.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
