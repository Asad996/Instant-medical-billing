import React from 'react';
import img4 from "../assets/img/Après l'augmentation de la franchise sur les….jpeg";

const Imgbanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-8 pt-6 pb-0 px-6 md:pt-12 md:pb-0 md:px-12 bg-white ">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 pt-0 md:pt-12"> 
        <img
          src={img4}
          alt="Sample"
          className="w-full h-96 object-cover   rounded-xl shadow-md"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#7BAB0A]">
          Affordable Medical Billing Services for Small Practices
        </h2>
        <p className="text-gray-600">
          We understand how essential it is to optimize your practice's revenue cycle management process. With our Cost- Effective Medical Billing Services for Small Practices, you can focus on patients' health as we take care of your administrative work.
        </p>
        <p className="text-gray-600">
          As a leading medical billing provider, we calculate every aspect to streamline and maximize your medical practice reimbursement. We guarantee a billing process where inconsistent codes aren't multiplying or claims getting piled up with multiple denials. We increase practices' revenue with correct claims submission while minimizing the denials.
        </p>
        <p className="text-gray-600">
          Being a cost-effective billing company, HMS has the expertise to perform institutional and professional billing services. With the Quality first approach, we have scored a 90% claim pass ratio that makes us the best choice for your medical billing services.
        </p>
        <button className="mt-4 px-6 py-3 bg-[#7BAB0A] text-white rounded-xl hover:bg-[#5f7c1b] transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Imgbanner;
