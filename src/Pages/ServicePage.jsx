import React from 'react';
import { useParams } from 'react-router-dom';
import serviceData from '../Helpers/Services';

import Banner3 from '../Shared/Banner3';
import InfoBoxes from '../Shared/InfoBoxes';
import Imgbanner from '../Shared/Imgbanner';
import Qualities from '../Shared/Qualitites';
import TestimonialCarousel from '../Shared/TestimonialCarousel';
import Contactlocation from '../Shared/Contactlocation';
import ContactSection from '../Sections/ContactSection';

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return <div className="p-10 text-red-600 text-xl">Service Not Found</div>;
  }

  return (
    <>
      <Banner3 data={service.banner} />
      <InfoBoxes data={service.infobox} />
      <Imgbanner data={service.imageBanner} />
      <Qualities features={service.qualities} />
      {/* <TestimonialCarousel /> */}
      {/* <Contactlocation /> */}
      <ContactSection/>
    </>
  );
};

export default ServicePage;
