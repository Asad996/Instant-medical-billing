import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "HOLDEN CAULFIELD",
    role: "Senior Product Designer",
    image: "https://dummyimage.com/302x302",
    message:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "ALPER KAMU",
    role: "UI Developer",
    image: "https://dummyimage.com/300x300",
    message:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "HENRY LETHAM",
    role: "CTO",
    image: "https://dummyimage.com/305x305",
    message:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto text-center">
        <div className="relative">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0 absolute top-0 left-0 w-full"
                }`}
            >
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={item.image}
              />
              <p className="leading-relaxed max-w-xl mx-auto">{item.message}</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                {item.name}
              </h2>
              <p className="text-gray-500">{item.role}</p>
            </div>
          ))}

          {/* Buttons */}
          <div className="flex justify-center mt-10 gap-4">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-[#7BAB0A] text-white rounded hover:bg-[#7BAB0A]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-[#7BAB0A] text-white rounded hover:bg-[#7BAB0A]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
