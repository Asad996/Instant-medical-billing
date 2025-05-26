import React from 'react';
import imgicd from "../../public/img/ICD-10 Coding_ What You Need to Know for Efficient Medical Billing _ Zupyak.jpeg";

const Banner3 = () => {
  return (
    <>
      <section
        className="w-full h-auto bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imgicd})`,
        }}
      >
        <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Latest Shirts
            </h2>

            <p className="hidden max-w-xl text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
              doloribus iure architecto quae voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-none"
              >
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner3;
