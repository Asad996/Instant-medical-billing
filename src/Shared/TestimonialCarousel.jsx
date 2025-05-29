import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const testimonials = [
  {
    name: 'HOLDEN CAULFIELD',
    title: 'Senior Product Designer',
    image: 'https://dummyimage.com/302x302',
    message:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk...",
  },
  {
    name: 'ALPER KAMU',
    title: 'UI Developer',
    image: 'https://dummyimage.com/300x300',
    message:
      "Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid...",
  },
  {
    name: 'HENRY LETHAM',
    title: 'CTO',
    image: 'https://dummyimage.com/305x305',
    message:
      "Helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Tote bag drinking vinegar cronut adaptogen...",
  },
  {
    name: 'SARA JAMES',
    title: 'Marketing Lead',
    image: 'https://dummyimage.com/306x306',
    message:
      "Adaptogen squid fanny pack vaporware DIY tote bag drinking vinegar ennui shaman taiyaki vape...",
  },
  {
    name: 'JACK DOE',
    title: 'Engineer',
    image: 'https://dummyimage.com/307x307',
    message:
      "Taiyaki taxidermy cloud bread echo park, helvetica stumptown 90's cronut +1 kinfolk. Single-origin coffee...",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1280, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const TestimonialCarousel = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 py-16 mx-auto">
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={5000} arrows={true}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-20">
              <div className="h-full text-center ">
                <img
                  alt={item.name}
                  className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 mx-auto"
                  src={item.image}
                />
                <p className="leading-relaxed text-sm">{item.message}</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {item.name}
                </h2>
                <p className="text-gray-500">{item.title}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
