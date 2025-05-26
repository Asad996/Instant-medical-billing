import React from 'react'

import Navbar from '../Sections/Navbar'
import Banner from '../Sections/Banner'
import Services from '../Sections/Services'
import Experience from '../Sections/Experience'
import Specialeties from '../Sections/Specialeties'
import Banner2 from '../Sections/Banner2'
import Footer from '../Sections/Footer'
import Blogs from '../Sections/Blogs'
import ContactSection from '../Sections/ContactSection'
import CertificatesSection from '../Sections/CertificatesSection'
import TestimonialCarousel from '../Sections/TestimonialCarousel'

const Home = () => {
  return (
 <>
  
 <Navbar/>
<Banner/>
 <Services/>
 <Experience/>
 <Specialeties/>
 <Banner2/>
<Blogs/>
<ContactSection/>
<CertificatesSection/>
<TestimonialCarousel/>
 <Footer/>
 
 </>
  )
}

export default Home
