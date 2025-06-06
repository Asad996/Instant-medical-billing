import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import bgimg from '../assets/img/8de1f6a4-d72a-4828-91e4-62a71d506312.jpg';

const contactInfo = [
  {
    icon: <FaPhoneAlt className="text-3xl text-green-600 mb-3" />,
    title: 'Call Us',
    description: 'Reach us by phone for immediate support or inquiries.',
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-green-600 mb-3" />,
    title: 'Our Location',
    description: 'Visit our office at your convenience during business hours.',
  },
  {
    icon: <FaEnvelope className="text-3xl text-green-600 mb-3" />,
    title: 'Email Us',
    description: 'Send us your questions and we’ll get back to you promptly.',
  },
];

const Contactusbanner = () => {
  return (
    <div className= "relative w-full h-[400px] bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `url(${bgimg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Banner Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We're here to help. Reach out to us anytime and we'll happily answer your questions.
        </p>
      </div>

      {/* Info Boxes using .map() */}
      <div className="absolute left-0 right-0 -bottom-24 flex justify-between px-4 md:px-20 z-20 flex-wrap gap-4">
        {contactInfo.map((item, index) => (
          <div key={index} className="bg-white text-gray-800 w-full sm:w-[30%] p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contactusbanner;
