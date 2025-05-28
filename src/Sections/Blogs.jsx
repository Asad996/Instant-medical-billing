import React from 'react';
import img1 from '../assets/img/medically-unlikely-edits.jpg';
import img2 from '../assets/img/understanding-ncci-edits.jpg';
import img3 from '../assets/img/understanding-clia-waivers.jpg';

const blogData = [
  {
    id: 1,
    title: 'Blog Post One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi.',
    image: img1,
  },
  {
    id: 2,
    title: 'Blog Post Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia itaque minus soluta, voluptates.',
    image: img2,
  },
  {
    id: 3,
    title: 'Blog Post Three',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi.',
    image: img3,
  },
];

const Blogs = () => {
  return (
    <section className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#7BAB0A] sm:text-4xl">Our Latest Blogs</h2>
        <p className="mt-2 text-gray-600">Check out the latest news and articles</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog) => (
          <article key={blog.id} className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <img
              alt={blog.title}
              src={blog.image}
              className="h-56 w-full object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-gray-500">{blog.description}</p>
              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#7BAB0A]"
              >
                Find out more
                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="inline-block rounded bg-[#7BAB0A] px-6 py-2 text-white hover:bg-[#455a14] transition">
          Show More
        </button>
      </div>
    </section>
  );
};

export default Blogs;
