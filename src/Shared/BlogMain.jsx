import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import blogData from '../Helpers/blogData';

import ContactSection from '../Sections/ContactSection';
import Specialetie from '../Sections/Specialetie';
import Blogs from '../Sections/Blogs';

const BlogMain = () => {
  const { id } = useParams();
  const blog = blogData.find(item => item.id.toString() === id);

  if (!blog) {
    return <div className="text-center text-xl py-20">Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-5 py-10">
      {/* Main Blog Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side - Blog Content */}
        <div className="lg:w-[70%] w-full">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto rounded-lg shadow-md mb-6"
          />
          <h1 className="text-3xl font-bold text-[#7BAB0A] mb-4">{blog.title}</h1>
          {blog.paragraphs.map((para, index) => (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Right Side - Accordion + Specialties */}
        <div className="lg:w-[30%] w-full flex flex-col gap-32">
          {/* Accordion Section */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <details className="group border-b">
              <summary className="bg-gray-100 px-4 py-3 cursor-pointer font-medium text-[#7BAB0A] group-open:bg-[#eef5e2]">
                What is Revenue Cycle Management?
              </summary>
              <div className="p-4 text-gray-600">
                Revenue Cycle Management (RCM) is the financial process used by healthcare facilities to track patient care episodes from registration to final payment.
              </div>
            </details>
            <details className="group border-b">
              <summary className="bg-gray-100 px-4 py-3 cursor-pointer font-medium text-[#7BAB0A] group-open:bg-[#eef5e2]">
                Why is Medical Billing important?
              </summary>
              <div className="p-4 text-gray-600">
                Medical billing is essential for accurate claim processing, reimbursement, and revenue generation in healthcare organizations.
              </div>
            </details>
            <details className="group">
              <summary className="bg-gray-100 px-4 py-3 cursor-pointer font-medium text-[#7BAB0A] group-open:bg-[#eef5e2]">
                How can we help your practice?
              </summary>
              <div className="p-4 text-gray-600">
                Our experts handle your complete billing cycle with accuracy and compliance to help you focus on patient care.
              </div>
            </details>
          </div>

          {/* Specialties Component */}
         
      <Specialetie compact={true} />
        </div>
      </div>
  {/* Extra Blogs  */}
                
               <Blogs  showAll={false} />
      {/* Contact Section */}
      <div className="mt-20">
        <ContactSection/>
      </div>
    </div>
  );
};

export default BlogMain;
