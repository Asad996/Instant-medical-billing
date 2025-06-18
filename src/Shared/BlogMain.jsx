import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../Sanity/sanityClient';
import { PortableText } from '@portabletext/react';
import ContactSection from '../Sections/ContactSection';
import Specialetie from '../Sections/Specialetie';
import Blogs from '../Sections/Blogs';

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
        <div className="lg:w-[70%] w-full">
          <img
            src={blog.mainImage?.asset?.url}
            alt={blog.title}
            className="w-full h-auto rounded-lg shadow-md mb-6"
          />
          <h1 className="text-3xl font-bold text-[#7BAB0A] mb-4">{blog.title}</h1>
          <div className="prose prose-green max-w-none">
            <PortableText value={blog.body} />
          </div>
        </div>

        <div className="lg:w-[30%] w-full flex flex-col gap-32">
          <Specialetie compact={true} />
        </div>
      </div>

      <Blogs showAll={false} />

      <div className="mt-20">
        <ContactSection />
      </div>
    </div>
  );
};

export default BlogMain;
