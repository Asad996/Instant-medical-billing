import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const specialties = [
    "OB GYN",
    "Dental Billing",
    "Chiropractic Billing",
    "Hematology Billing",
    "Orthopedic Billing",
    "Mental Health",
    "Rehab Billing",
    "Pathology Billing",
    "General Surgery",
    "Pulmonology Billing",
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Top Bar */}
        <div className="w-full bg-[#7BAB0A] text-white text-sm px-4 py-2">
          <div className="mx-auto max-w-screen-xl flex justify-between">
            <div>Email: info@instantbillings.com | Call: +92 (316) 4578844</div>
            <div>Business hours: 9:00 to 5:00 | Monday to Friday</div>
          </div>
        </div>

        {/* Navbar */}
        <header className="w-full bg-white shadow-md">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="#">
                  <span className="sr-only">Home</span>
                  <img src="../../public/Favicon/logo.png" alt="Logo" className="h-14" />
                </a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-md relative">
                    {["Who We Are", "Services", "Contact US"].map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-500 hover:text-gray-800 relative group"
                        >
                          {item}
                          <span className="block h-0.5 w-0 bg-[#7BAB0A] group-hover:w-full transition-all duration-300"></span>
                        </a>
                      </li>
                    ))}

                    {/* Specialties with dropdown */}
                    <li
                      className="relative group"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-800 relative group"
                      >
                        Specialties
                        <span className="block h-0.5 w-0 bg-[#7BAB0A] group-hover:w-full transition-all duration-300"></span>
                      </a>

                      {/* Dropdown */}
                      {showDropdown && (
                        <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg border border-gray-100 rounded-lg z-50">
                          {specialties.map((spec, i) => (
                            <li key={i}>
                              <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-[#f0fdf4] hover:text-[#7BAB0A] transition"
                              >
                                {spec}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Desktop Button */}
              <div className="hidden md:block">
                <a className="rounded-md bg-[#7BAB0A] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#3f5213] transition" href="#">
                  Contact US
                </a>
              </div>

              {/* Mobile Toggle Button */}
              <div className="block md:hidden">
                <button
                  onClick={toggleMenu}
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Overlay Menu */} 
          {isOpen && (
            <div className="fixed top-[130px] left-0 w-full bg-white shadow-lg z-50">
              <div className="px-4 py-4 space-y-4 text-sm">
                <a className="block text-gray-700 hover:text-teal-600" href="#">About</a>
                <a className="block text-gray-700 hover:text-teal-600" href="#">Careers</a>
                <a className="block text-gray-700 hover:text-teal-600" href="#">History</a>
                <a className="block text-gray-700 hover:text-teal-600" href="#">Services</a>
                <a className="block text-gray-700 hover:text-teal-600" href="#">Projects</a>
                <a className="block text-gray-700 hover:text-teal-600" href="#">Blog</a>
                <a className="block text-white bg-[#7BAB0A] text-center py-2 rounded hover:bg-[#7BAB0A]" href="#">Contact US</a>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Push Content Down so it doesn't hide behind fixed navbar */}
      <div className="h-[96px]"></div>
    </>
  );
};

export default Navbar;
