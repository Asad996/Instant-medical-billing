import React from 'react';
import treatment from '../../public/Favicon/configuration.png';
import Clinics from '../../public/Favicon/hospital.png';
import emergency from '../../public/Favicon/ambulance-lights.png';
import healthcare from '../../public/Favicon/notes.png';

const boxData = [
  {
    id: 1,
    title: 'Diagnostic & Treatment Center',
    logo: treatment,
  },
  {
    id: 2,
    title: 'Private Clinics & Group Practices',
    logo: Clinics,
  },
  {
    id: 3,
    title: 'Urgent Care & Emergency Rooms',
    logo: emergency,
  },
  {
    id: 4,
    title: 'Other Healthcare Specialties',
    logo: healthcare,
  },
];

const InfoBoxes = () => {
  return (
    <div className="w-full px-4 pb-12 pt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-wrap -mx-2">
          {boxData.map((box) => (
            <div
              key={box.id}
              className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4"
            >
              <div className="flex items-center justify-between bg-white  shadow-lg shadow-[#5a5a5a] rounded-lg p-4 h-full">
                {/* Logo Left */}
                <img
                  src={box.logo}
                  alt={box.title}
                  className="w-12 h-12 object-contain   "
                />
                {/* Title Right */}
                <h3 className="text-[#7BAB0A] font-semibold text-lg text-right ml-4">
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
