import React from 'react';
import { motion } from 'framer-motion';

const InfoBoxes = ({ data }) => {
  return (
    <div className="w-full px-4 pb-12 pt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-wrap -mx-2">
          {data.map((box, index) => (
            <motion.div
              key={box.id}
              className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex items-center justify-center bg-white shadow-lg shadow-[#5a5a5a] rounded-lg p-4 h-full">
                <img
                  src={box.logo}
                  alt={box.title}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-black font-semibold text-lg text-center ml-4">
                  {box.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
