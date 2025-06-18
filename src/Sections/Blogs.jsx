import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import sanityClient from '../Sanity/sanityClient';

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

const Blogs = ({ showAll = false }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(publishedAt desc){
        _id,
        title,
        slug,
        mainImage{ asset->{url} },
        body
      }`)
      .then((data) => {
        const limited = showAll ? data : data.slice(0, 3);
        setBlogs(limited);
      })
      .catch(console.error);
  }, [showAll]);

  const extractText = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) return '';
    const block = blocks.find(b => b._type === 'block' && b.children);
    return block?.children?.map(c => c.text).join(' ') || '';
  };

  return (
    <section className="px-4 py-16 mx-auto max-w-screen-xl">
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

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, i) => (
          <motion.article
            key={blog._id}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              alt={blog.title}
              src={blog.mainImage?.asset?.url}
              className="h-56 w-full object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                {extractText(blog.body).slice(0, 150) || 'No preview available...'}
              </p>
              <Link
                to={`/blog/${blog.slug.current}`}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#7BAB0A]"
              >
                Find out more
                <span className="block transition-all group-hover:ms-0.5">&rarr;</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {!showAll && (
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            to="/Blogpage"
            className="inline-block rounded bg-[#7BAB0A] px-6 py-2 text-white hover:bg-[#455a14] transition"
          >
            Show More
          </Link>
        </motion.div>
      )}
    </section>
  );
};

export default Blogs;
