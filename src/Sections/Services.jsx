import React from 'react'
import { Link } from 'react-router-dom'

const features = [
    {
        title: "Medical Billing",
        description: "Get a 99% claims success ratio with HMS complete RCM services to streamline healthcare billing.",
        slug: "medical-billing"
    },
    {
        title: "Medical Coding",
        description: "Our medical coding services ensure that accurate CPT and ICD 10 coding are performed according to AMA.",
        slug: "medical-coding"
    },
    {
        title: "Credentialing",
        description: "With medical credentialing services, you can rest assured that your enrollment is performed accurately.",
        slug: "credentialing"
    },
    {
        title: "Patient Payments",
        description: "Minimize your practices administrative costs and collect patient payments more efficiently with our solutions.",
        slug: "patient-payments"
    },
    {
        title: "Virtual Front Desk",
        description: "Manage your front office tasks, from scheduling appointments to getting patient feedback.",
        slug: "virtual-front-desk"
    },
    {
        title: "Provider QPP",
        description: "Comply with quality payment program metrics by implementing CMS/NCQA guidelines related to MIPS and PCMH.",
        slug: "provider-qpp"
    },
]



const Services = () => {



    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-[#7BAB0A] mb-4">
                        Our Services
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                        We offer comprehensive solutions to help you grow and manage your business efficiently.
                    </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
                    </div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 md:w-1/2 lg:w-1/3 w-full">
                            <div className="h-full bg-white rounded-lg p-6 border border-gray-200 flex flex-col justify-between transition duration-300 ease-in-out shadow-md transform hover:-translate-y-2 hover:shadow-xl hover:border-[#7BAB0A]">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2 text-left">
                                    {feature.title}
                                </h2>
                                <p className="text-base text-gray-700 mb-4 text-left">
                                    {feature.description}
                                </p>
                                <Link
                                    to={`/servicespage/${feature.slug}`}
                                    className="mt-auto text-[#7BAB0A] hover:text-white hover:bg-[#7BAB0A] border border-[#7BAB0A] px-4 py-2 rounded transition duration-300 ease-in-out text-center"
                                >
                                    Read More
                                </Link>



                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
