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

                <div className="relative text-center mb-20">
                    {/* Decorative Background Blob */}
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                        <div className="w-[600px] h-[200px] bg-[#7bab0a] opacity-40 rounded-full blur-3xl"></div>
                    </div>

                    {/* Content Layer (on top of the background) */}
                    <div className="relative z-10">
                        <h1 className="sm:text-[50px] text-4XL font-bold title-font text-[#7BAB0A] mb-4">
                            Our Specialties
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                            From patient registration and insurance eligibility verification to charge capture and claim submission, we ensure precision and proficiency in every step of the revenue cycle. Our Expansive nature of Revenue Cycle Management (RCM) services caters to a broad spectrum of medical specialties
                        </p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
                        </div>
                    </div>
                </div>



                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {features.map((feature, index) => (
                        <div key={index} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transition duration-300 ease-in-out shadow-md transform hover:-translate-y-2 hover:shadow-xl hover:border-[#7BAB0A] ">
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
