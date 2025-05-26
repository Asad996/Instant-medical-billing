import React from 'react';

const features = [
    "OB GYN",
    "Dental Billing",
    "Chiropractic Billing",
    "Hematology Billing",
    "Orthopedic Billing",
    "Mental Health",
    "Rehab Billing",
    "Pathology Billing",
    "General Surgery",
    "Pulmonology Billing"
];

const Specialeties = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-[#7BAB0A] mb-4">
                        Our Specialties
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        From patient registration and insurance eligibility verification to charge capture and claim submission, we ensure precision and proficiency in every step of the revenue cycle. Our Expansive nature of Revenue Cycle Management (RCM) services caters to a broad spectrum of medical specialties
                    </p>
                </div>

                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {features.map((feature, index) => (
                        <div key={index} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    className="text-[#7BAB0A] w-6 h-6 flex-shrink-0 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                    <path d="M22 4L12 14.01l-3-3" />
                                </svg>
                                <span className="title-font font-medium">{feature}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="flex mx-auto mt-16 text-white bg-[#7BAB0A] border-0 py-2 px-8 focus:outline-none hover:bg-[#536b19] rounded text-lg">
                    Contact US
                </button>
            </div>
        </section>
    );
};

export default Specialeties;
