// src/components/InfoBoxes.jsx

import React from 'react';

const InfoBoxes = ({ data }) => {
  return (
    <div className="w-full px-4 pb-12 pt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-wrap -mx-2">
          {data.map((box) => (
            <div key={box.id} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
              <div className="flex items-center justify-between bg-white shadow-lg shadow-[#5a5a5a] rounded-lg p-4 h-full">
                <img
                  src={box.logo}
                  alt={box.title}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-black font-semibold text-lg text-right ml-4">
                  {box.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
