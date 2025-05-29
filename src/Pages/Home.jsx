import React from 'react'

import Banner from '../Sections/Banner'
import Services from '../Sections/Services'
import Experience from '../Sections/Experience'
import Specialeties from '../Sections/Specialeties'
import Banner2 from '../Sections/Banner2'

import Blogs from '../Sections/Blogs'
import ContactSection from '../Sections/ContactSection'
import CertificatesSection from '../Sections/CertificatesSection'
import TestimonialCarousel from '../Shared/TestimonialCarousel'


const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Experience />
      <Specialeties />
      <Banner2 />
      <Blogs />
      <ContactSection />
      <CertificatesSection />
     <TestimonialCarousel/>
    </>
  )
}

export default Home
