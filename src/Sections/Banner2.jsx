import React from 'react'

const Banner2 = () => {
    return (
        <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
            {/* Text Content */}
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-[#7BAB0A] md:text-3xl">
                        Medical Billing and Coding Company
                    </h2>

                    <p className="mt-4 text-gray-500">
                        Being the best medical billing and coding company, HMS offers a suite of services to help practices stay compliant with all applicable regulations, including HIPAA, Affordable Care Act (ACA), and state-specific regulations. Our experts can help you develop effective policies and procedures to ensure compliance.
                    </p>

                    <p className="mt-4 text-gray-500">
                        We understand the challenges you face. With our advanced analytics skills, you will uncover meaningful insights to enhance your revenue. We have a proven track record of success in helping practices improve their revenue cycle management.
                    </p>

                    <p className="mt-4 text-gray-500">
                        HMS has a team of medical coding, billing, and practice management experts who can work with you to streamline your operations, reduce managerial burdens, and improve compliance. We have helped hundreds of medical practices and healthcare centers adapt to industry changes and become more profitable.
                    </p>

                    <div className="mt-6">
                        <a
                            href="#"
                            className="inline-block rounded-sm bg-[#7BAB0A] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#587418] focus:ring-3"
                        >
                           Contact US
                        </a>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="">
                <img
                    alt="Medical Billing Illustration"
                    src="../../public/img/assest-protection-png.webp"
                    className="w-full object-cover sm:h-[calc(100%_-_2rem)] sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
                />
            </div>
        </section>

    )
}

export default Banner2
