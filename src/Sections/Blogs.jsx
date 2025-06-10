import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/img/medically-unlikely-edits.jpg';
import img2 from '../assets/img/understanding-ncci-edits.jpg';
import img3 from '../assets/img/understanding-clia-waivers.jpg';

const blogData = [
  {
    id: 1,
    title: 'Blog Post One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi.',
    image: img1,
  },
  {
    id: 2,
    title: 'Blog Post Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia itaque minus soluta, voluptates.',
    image: img2,
  },
  {
    id: 3,
    title: 'Blog Post Three',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi.',
    image: img3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Blogs = () => {
  return (
    <section className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">

      {/* Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="sm:text-[50px] text-4xl font-bold title-font text-[#7BAB0A] mb-4">
          Our Latest Blogs
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
          Check out the latest news and articles
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
        </div>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog, i) => (
          <motion.article
            key={blog.id}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              alt={blog.title}
              src={blog.image}
              className="h-56 w-full object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-gray-500">{blog.description}</p>
              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#7BAB0A]"
              >
                Find out more
                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5">
                  &rarr;
                </span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Show More Button */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <button className="inline-block rounded bg-[#7BAB0A] px-6 py-2 text-white hover:bg-[#455a14] transition">
          Show More
        </button>
      </motion.div>
    </section>
  );
};

export default Blogs;
