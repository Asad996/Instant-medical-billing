import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const stats = [
        { value: 48, label: 'Stats' },
        { value: 7, label: 'Years With You' },
        { value: 40, label: 'Practices' },
        { value: 46, label: 'Providers' },
        { value: 30, label: 'Employes' },
    ];

    return (
        <section className="text-gray-600 body-font" ref={ref}>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#7BAB0A]">
                        Our Experience in Numbers
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
                    </p>

                    <div className="flex mt-6 justify-center">
                        <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4 md:w-1/5 sm:w-1/2 w-full">
                            <div className="border-[1px] border-[#7BAB0A] px-4 py-6 rounded-lg">
                                <h2 className="title-font font-medium text-3xl text-gray-900">
                                    {inView ? <CountUp start={0} end={stat.value} duration={2} /> : 0}
                                </h2>
                                <p className="leading-relaxed">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
