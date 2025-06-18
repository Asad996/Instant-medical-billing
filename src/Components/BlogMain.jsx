import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../Sanity/sanityClient';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';

import ContactSection from '../Components/ContactSection';
import Specialetie from '../Components/Specialetie';
import Blogs from '../Components/Blogs';

const BlogMain = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
            title,
            mainImage{ asset->{url} },
            body
          }`,
        { slug: id }
      )
      .then(setBlog)
      .catch(console.error);
  }, [id]);

  if (!blog) {
    return <div className="text-center text-xl py-20">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Blog Content */}
        <motion.div
          className="lg:w-[70%] w-full"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={blog.mainImage?.asset?.url}
            alt={blog.title}
            className="w-full h-auto rounded-lg shadow-md mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          <motion.h1
            className="text-3xl font-bold text-[#7BAB0A] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {blog.title}
          </motion.h1>

          <motion.div
            className="prose prose-green max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <PortableText value={blog.body} />
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          className="lg:w-[30%] w-full flex flex-col gap-32"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Specialetie compact={true} />
        </motion.div>
      </div>

      {/* Blog Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Blogs showAll={false} />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default BlogMain;
