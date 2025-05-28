import React from 'react'
import imgicd from "../assets/img/ICD-10 Coding_ What You Need to Know for Efficient Medical Billing _ Zupyak.jpeg";

const Banner3 = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imgicd})`,
      }}
    >
      <div className="bg-black/60 w-full h-full px-4 py-16 sm:px-6 md:px-12 lg:px-24 lg:py-24 flex items-center">
        <div className="w-full max-w-4xl mx-auto text-left sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#7BAB0A]">
            Medical Billig 
          </h2>

          <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
            doloribus iure architecto quae voluptatum beatae excepturi dolores.
          </p>

          <div className="mt-6">
            <a
              href="#"
              className="inline-block  bg-[#7BAB0A] px-8 py-3 text-sm sm:text-base font-medium text-white transition hover:bg-[#617e1e] focus:ring-3 focus:ring-yellow-400 focus:outline-none"
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner3
