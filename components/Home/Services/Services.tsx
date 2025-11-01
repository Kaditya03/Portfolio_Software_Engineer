import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div className="pt-16 pb-16">

    <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Collaborate with brand <br/> and agencies to create <br/> imapactful results
      
    </h1>
    <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServiceCard 
            icon="/images/s1.png"
            name="UI and UX"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
            />
            

        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-dealy="100">
            <ServiceCard 
            icon="/images/s2.png"
            name="Web and mobile app"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
            />
            

        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-dealy="200">
            <ServiceCard 
            icon="/images/s3.png"
            name="Design and creative"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
            />
            

        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-dealy="300">
            <ServiceCard 
            icon="/images/s4.png"
            name="UDevelopment"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
            />
            

        </div>
    </div>
    </div>
  )
}

export default Services;
