import React from 'react';

const Imgbanner = ({ data }) => {
  if (!data) return null;

  const { image, heading, paragraph1, paragraph2, paragraph3, buttonText } = data;

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-8 pt-6 pb-0 px-6 md:pt-12 md:pb-0 md:px-12 bg-white">
      
      {/* Left Side - Image (Hidden on small screens) */}
      <div className="w-full md:w-1/2 pt-0 md:pt-12 hidden md:block"> 
        <img
          src={image}
          alt="Banner"
          className="w-full h-96 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#7BAB0A]">
          {heading}
        </h2>
        <p className="text-gray-600">{paragraph1}</p>
        <p className="text-gray-600">{paragraph2}</p>
        <p className="text-gray-600">{paragraph3}</p>
        <button className="mt-4 px-6 py-3 bg-[#7BAB0A] text-white rounded-xl hover:bg-[#5f7c1b] transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Imgbanner;
